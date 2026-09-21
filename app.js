/* =========================================================================
 * 化工总控工刷题 —— 应用主逻辑
 * 依赖：data.js 暴露全局 window.questions
 * ====================================================================== */
(function () {
  'use strict';

  /* ---------------- 常量 ---------------- */
  var LS_WRONG    = 'hgzk_wrong_ids_v1';
  var LS_LAST_RND = 'hgzk_last_random_v1';
  var LS_PROGRESS = 'hgzk_progress_v1';   // 各题库断点进度
  var LS_STATS    = 'hgzk_stats_v1';      // 累计答题统计
  var RANDOM_SIZE = 50;      // 随机题库每轮抽取题量
  var SEGMENT_SIZE = 100;    // 类型题库分段大小
  var AUTO_NEXT   = 800;     // 答对后自动进入下一题的延时(ms)
  var HIST_MIN    = 10;      // 累计正确率少于该答题数时显示「—」

  var TYPE_LABEL = { tf: '判断题', single: '单选题', multiple: '多选题' };
  var TYPE_ORDER = { tf: 'tf', single: 'single', multiple: 'multiple' };
  var LETTERS    = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  /* ---------------- 题库数据 ----------------
   * data.js 是 ES Module，由 index.html 中的 module 脚本赋值给 window.questions。
   * module 脚本是延迟执行的，可能晚于本文件，因此这里延迟到 DOM 就绪后再读取。
   */
  var ALL = [];
  var BY_ID = Object.create(null);

  function loadQuestions() {
    var src = (typeof window !== 'undefined' && Array.isArray(window.questions))
      ? window.questions
      : [];
    ALL = src.slice();
    BY_ID = Object.create(null);
    ALL.forEach(function (q) { BY_ID[q.id] = q; });
    return ALL.length;
  }

  /* ---------------- 本地存储 ---------------- */
  function readJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      var v = JSON.parse(raw);
      return v == null ? fallback : v;
    } catch (e) {
      console.warn('[storage] 读取失败', key, e);
      return fallback;
    }
  }
  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('[storage] 写入失败', key, e);
      toast('本地存储写入失败（可能空间已满）', 'bad');
      return false;
    }
  }

  /* ---------------- 错题库（跨模式共享） ---------------- */
  // 先原样读入，待题库加载完成后再过滤掉已不存在的脏 id
  var wrongSet = new Set(
    (readJSON(LS_WRONG, []) || []).filter(function (id) {
      return typeof id === 'string' && id;
    })
  );

  function pruneWrong() {
    var removed = 0;
    wrongSet.forEach(function (id) {
      if (!BY_ID[id]) { wrongSet.delete(id); removed++; }
    });
    if (removed) saveWrong();
  }

  function saveWrong()   { writeJSON(LS_WRONG, Array.from(wrongSet)); renderWrongBadge(); }
  function renderWrongBadge() {
    var el = document.getElementById('wrongBadge');
    if (el) el.textContent = String(wrongSet.size);
  }

  /* ---------------- 应用状态 ---------------- */
  var state = {
    mode: 'all',        // all | wrong | random | type
    type: 'tf',         // 仅 mode==='type' 时有效
    segment: 0,         // 仅 mode==='type' 时有效：当前分段起始索引(0/100/200...)
    list: [],           // 当前题库题目数组
    idx: 0,             // 当前题索引
    answered: false,    // 当前题是否已判定
    picks: [],          // 多选题当前已勾选的索引
    stat: { right: 0, wrong: 0 },
    timer: null,        // 自动跳转定时器
    finished: false     // 本组是否已答完
  };

  /* ---------------- DOM ---------------- */
  var $ = function (id) { return document.getElementById(id); };
  var cardSlot, statTitle, statChip, statProgress, statAcc, statHist, progressFill;
  var navBar, subnav, segbar, btnRedo, btnClearWrong, btnExport, btnImport, importFile, toastEl;
  var toastTimer = null;

  function cacheDom() {
    cardSlot     = $('cardSlot');
    statTitle    = $('statTitle');
    statChip     = $('statChip');
    statProgress = $('statProgress');
    statAcc      = $('statAcc');
    statHist     = $('statHist');
    progressFill = $('progressFill');
    navBar       = $('nav');
    subnav       = $('subnav');
    segbar       = $('segbar');
    btnRedo      = $('btnRedo');
    btnClearWrong= $('btnClearWrong');
    btnExport    = $('btnExport');
    btnImport    = $('btnImport');
    importFile   = $('importFile');
    toastEl      = $('toast');
  }

  function toast(msg, kind) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.className = 'show' + (kind ? ' ' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.className = ''; }, 2000);
  }

  /* ---------------- 判定工具 ---------------- */
  // 正确答案统一转为升序索引数组
  function answerIdxArr(q) {
    if (q.answer == null) return [];
    if (Array.isArray(q.answer)) {
      return q.answer.slice().sort(function (a, b) { return a - b; });
    }
    return [q.answer];
  }

  function isMultiple(q) { return q.type === 'multiple'; }

  // 比较用户选择与正确答案是否完全一致
  function judge(q, picked) {
    var right = answerIdxArr(q);
    var mine  = picked.slice().sort(function (a, b) { return a - b; });
    if (right.length === 0) return false;          // 无答案视为答错，避免误判为对
    if (right.length !== mine.length) return false;
    for (var i = 0; i < right.length; i++) {
      if (right[i] !== mine[i]) return false;
    }
    return true;
  }

  function answerText(q) {
    var arr = answerIdxArr(q);
    if (!arr.length) return '（题库未提供答案）';
    return arr.map(function (i) {
      return LETTERS[i] + '. ' + (q.options && q.options[i] != null ? q.options[i] : '');
    }).join('　');
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------------- 构建题库 ---------------- */
  function buildRandom() {
    var lastIds = new Set(readJSON(LS_LAST_RND, []) || []);

    // 优先抽上一轮没抽过的题，凑不满再用抽过的补
    var fresh = ALL.filter(function (q) { return !lastIds.has(q.id); });
    var used  = ALL.filter(function (q) { return  lastIds.has(q.id); });

    shuffle(fresh);
    shuffle(used);

    var picked = fresh.slice(0, RANDOM_SIZE);
    if (picked.length < RANDOM_SIZE) {
      picked = picked.concat(used.slice(0, RANDOM_SIZE - picked.length));
    }
    picked = picked.slice(0, Math.min(RANDOM_SIZE, ALL.length));

    // 记录本轮 id，供下一轮避开
    writeJSON(LS_LAST_RND, picked.map(function (q) { return q.id; }));
    return picked;
  }

  // 某题型的全部题目（按原题库顺序）
  function typeQuestions() {
    return ALL.filter(function (q) { return q.type === state.type; });
  }

  // 分段越界 / 非法时归零；题型题量 <= 100 时保持 0
  function normalizeSegment() {
    if (state.mode !== 'type') { state.segment = 0; return; }
    var n = typeQuestions().length;
    if (n <= SEGMENT_SIZE) { state.segment = 0; return; }
    if (state.segment < 0 || state.segment >= n || state.segment % SEGMENT_SIZE !== 0) {
      state.segment = 0;   // 切题型后超出新题型范围 → 归零
    }
  }

  function buildList() {
    var list = [];
    if (state.mode === 'all') {
      list = ALL.slice();
    } else if (state.mode === 'wrong') {
      // 按原题库顺序输出错题
      list = ALL.filter(function (q) { return wrongSet.has(q.id); });
    } else if (state.mode === 'random') {
      list = buildRandom();
    } else if (state.mode === 'type') {
      // 先按题型过滤，再按 [segment, segment + 100) 切片（末段不足 100 取实际长度）
      var all = typeQuestions();
      list = all.slice(state.segment, state.segment + SEGMENT_SIZE);
    }
    return list;
  }

  /* ---------------- 断点进度 / 累计统计 ----------------
   * hgzk_progress_v1: { [groupKey]: { idx, stat:{right,wrong} } }
   * hgzk_stats_v1:    { totalAnswered, totalRight, lastUpdated }
   * 读取失败一律当作空对象，保证坏数据不影响答题。
   */
  function groupKey() {
    if (state.mode === 'all')    return 'all';
    if (state.mode === 'wrong')  return 'wrong';
    if (state.mode === 'random') return 'random';
    return 'type:' + state.type + ':' + state.segment;
  }

  function readProgressMap() {
    var m = readJSON(LS_PROGRESS, null);
    return (m && typeof m === 'object' && !Array.isArray(m)) ? m : {};
  }

  // 保存当前组进度（静默失败）。idxOverride 用于「刚判定完、恢复点指向下一题」的场景。
  function saveProgress(idxOverride) {
    if (!state.list.length) return;
    var map = readProgressMap();
    var idx = (typeof idxOverride === 'number' && isFinite(idxOverride)) ? idxOverride : state.idx;
    map[groupKey()] = { idx: idx, stat: { right: state.stat.right, wrong: state.stat.wrong } };
    writeJSON(LS_PROGRESS, map);
  }

  // 删除当前组进度（「重做本组」用）
  function dropProgress() {
    var map = readProgressMap();
    if (Object.prototype.hasOwnProperty.call(map, groupKey())) {
      delete map[groupKey()];
      writeJSON(LS_PROGRESS, map);
    }
  }

  // 累计统计：每判定一题累加一次
  function bumpStats(correct) {
    var s = readJSON(LS_STATS, null);
    if (!s || typeof s !== 'object' || Array.isArray(s)) s = {};
    var answered = Number(s.totalAnswered) || 0;
    var right    = Number(s.totalRight) || 0;
    s.totalAnswered = answered + 1;
    s.totalRight    = right + (correct ? 1 : 0);
    s.lastUpdated   = new Date().toISOString();
    writeJSON(LS_STATS, s);
  }

  function histAccuracy() {
    var s = readJSON(LS_STATS, null);
    if (!s || typeof s !== 'object') return null;
    var answered = Number(s.totalAnswered) || 0;
    var right    = Number(s.totalRight) || 0;
    if (answered < HIST_MIN) return null;
    return Math.round(right / answered * 100);
  }

  /* ---------------- 启动 / 重做 本组 ----------------
   * restore=true  → 尝试恢复该 groupKey 的断点
   * restore=false → 从头开始（「重做本组」）
   */
  function startGroup(restore) {
    clearTimeout(state.timer);
    normalizeSegment();
    state.list     = buildList();
    state.answered = false;
    state.picks    = [];
    state.finished = false;

    var saved = restore ? readProgressMap()[groupKey()] : null;
    var total = state.list.length;
    var idx   = saved ? Number(saved.idx) : 0;

    // 边界：无记录 / idx 非法 / idx 超出当前题量 → 从头开始
    if (!saved || !isFinite(idx) || idx <= 0 || idx >= total) {
      if (saved && isFinite(idx) && idx >= total && total > 0) dropProgress();  // 题量变化导致的陈旧记录
      state.idx  = 0;
      state.stat = { right: 0, wrong: 0 };
    } else {
      state.idx  = idx;
      state.stat = {
        right: Number(saved.stat && saved.stat.right) || 0,
        wrong: Number(saved.stat && saved.stat.wrong) || 0
      };
      toast('已恢复上次进度（第 ' + (idx + 1) + ' 题）');
    }

    render();
  }

  /* ---------------- 渲染 ---------------- */
  function modeTitle() {
    if (state.mode === 'all')    return '总题库';
    if (state.mode === 'wrong')  return '错题库';
    if (state.mode === 'random') return '随机题库';
    return '类型题库';
  }

  function renderStatus() {
    var total = state.list.length;
    var done  = state.stat.right + state.stat.wrong;

    statTitle.textContent = modeTitle();

    // 类型题库模式显示当前题型
    if (state.mode === 'type') {
      statChip.textContent = TYPE_LABEL[state.type];
      statChip.classList.remove('hidden');
    } else {
      statChip.classList.add('hidden');
    }

    // 本组答完时显示「已完成」，而不是 503/503
    var allDone = state.finished || (total > 0 && done >= total);
    if (allDone) {
      statProgress.textContent = '已完成';
    } else {
      statProgress.textContent = (total === 0 ? 0 : Math.min(state.idx + 1, total)) + '/' + total;
    }

    var answeredCount = done;
    if (answeredCount > 0) {
      var acc = Math.round(state.stat.right / answeredCount * 100);
      statAcc.textContent = acc + '%';
      statAcc.className = acc >= 60 ? 'acc-ok' : 'acc-bad';
    } else {
      statAcc.textContent = '—';
      statAcc.className = '';
    }

    var pct = total === 0 ? 0 : Math.round(done / total * 100);
    progressFill.style.width = pct + '%';

    // 累计正确率（少于 HIST_MIN 题时显示 —）
    if (statHist) {
      var hist = histAccuracy();
      statHist.textContent = hist === null ? '—' : hist + '%';
    }
  }

  /* ---------------- 分段子导航 ---------------- */
  function renderSegbar() {
    if (!segbar) return;

    // 非类型题库：隐藏
    if (state.mode !== 'type') {
      segbar.classList.remove('show');
      segbar.innerHTML = '';
      return;
    }

    var n = typeQuestions().length;
    // 题量 <= 100：不显示分段
    if (n <= SEGMENT_SIZE) {
      segbar.classList.remove('show');
      segbar.innerHTML = '';
      return;
    }

    var html = '';
    for (var s = 0; s < n; s += SEGMENT_SIZE) {
      var end = Math.min(s + SEGMENT_SIZE, n);   // 末段用实际题量
      html += '<button type="button" data-seg="' + s + '"' +
              (s === state.segment ? ' class="active"' : '') + '>' +
              (s + 1) + '-' + end + '</button>';
    }
    segbar.innerHTML = html;
    segbar.classList.add('show');
  }

  function renderEmpty(html) {
    cardSlot.innerHTML = '<div class="card"><div class="empty">' + html + '</div></div>';
  }

  function render() {
    renderStatus();
    renderSegbar();
    renderWrongBadge();
    updateButtons();

    var total = state.list.length;

    /* --- 空题库 --- */
    if (total === 0) {
      if (state.mode === 'wrong') {
        renderEmpty(
          '<div class="big">🎉</div><h2>错题库是空的</h2>' +
          '<p>答错的题会自动收进这里，答对后自动移出。<br>现在去「总题库」或「随机题库」练几道吧。</p>' +
          '<button class="btn btn-primary" id="emptyGo" style="max-width:200px;margin:0 auto;">去总题库</button>'
        );
        var g = $('emptyGo');
        if (g) g.onclick = function () { switchMode('all'); };
      } else if (state.mode === 'type') {
        renderEmpty('<div class="big">📚</div><h2>该题型暂无题目</h2><p>请切换其他题型。</p>');
      } else {
        renderEmpty('<div class="big">📚</div><h2>题库为空</h2><p>未能读取到题目数据，请检查 data.js。</p>');
      }
      return;
    }

    /* --- 本组答完 --- */
    if (state.idx >= total) {
      state.finished = true;
      var d = state.stat.right + state.stat.wrong;
      var rate = d ? Math.round(state.stat.right / d * 100) : 0;
      renderEmpty(
        '<div class="big">' + (rate >= 80 ? '🏆' : rate >= 60 ? '👍' : '💪') + '</div>' +
        '<h2>本组已完成</h2>' +
        '<div class="done-stats">' +
          '<div class="done-stat ok"><div class="v">' + state.stat.right  + '</div><div class="k">答对</div></div>' +
          '<div class="done-stat bad"><div class="v">' + state.stat.wrong + '</div><div class="k">答错</div></div>' +
          '<div class="done-stat"><div class="v">' + rate + '%</div><div class="k">正确率</div></div>' +
        '</div>' +
        '<button class="btn btn-primary" id="emptyRedo" style="max-width:200px;margin:0 auto;">重做本组</button>'
      );
      var r = $('emptyRedo');
      if (r) r.onclick = function () { dropProgress(); startGroup(false); };
      return;
    }

    /* --- 正常渲染当前题 --- */
    var q = state.list[state.idx];
    var multi = isMultiple(q);
    var opts = Array.isArray(q.options) ? q.options : [];

    var html = '<div class="card">';
    html += '<div class="qmeta">';
    html += '<span class="qtype">' + TYPE_LABEL[q.type] + '</span>';
    html += '<span class="qid">' + esc(q.id) + '</span>';
    html += '<span class="qid">第 ' + (state.idx + 1) + ' / ' + total + ' 题</span>';
    if (multi) html += '<span class="qhint">多选题（选完后点「确定」）</span>';
    html += '</div>';

    html += '<h2 class="question">' + esc(q.question) + '</h2>';
    html += '<div class="options" id="options">';

    opts.forEach(function (text, i) {
      html += '<button class="opt" data-i="' + i + '" type="button">' +
                '<span class="opt-key">' + (LETTERS[i] || (i + 1)) + '</span>' +
                '<span class="opt-text">' + esc(text) + '</span>' +
              '</button>';
    });
    html += '</div>';
    html += '<div id="explainSlot"></div>';
    html += '</div>';

    cardSlot.innerHTML = html;
    bindOptions();
    updateButtons();
  }

  // 移除当前的按钮行（无论它是「确定」还是「下一题」）
  function removeSubmitRow() {
    var row = $('submitRow');
    if (row && row.parentNode) row.parentNode.removeChild(row);
  }

  function updateButtons() {
    var atEnd = state.finished || state.list.length === 0 || state.idx >= state.list.length;
    btnRedo.disabled = state.list.length === 0;
    btnClearWrong.disabled = wrongSet.size === 0;

    var wrap = $('options');
    if (!wrap) return;

    if (!state.answered) {
      // 多选题需要「确定」按钮；非多选题不需要任何按钮行
      var q = state.list[state.idx];
      if (q && isMultiple(q)) {
        // 若残留的是「下一题」行，先清掉，保证按钮行内容正确且 id 唯一
        if (!$('btnSubmit')) removeSubmitRow();

        if (!$('submitRow')) {
          var row = document.createElement('div');
          row.id = 'submitRow';
          row.style.marginTop = '14px';
          row.innerHTML = '<button class="btn btn-primary" id="btnSubmit" style="width:100%;">确定</button>';
          wrap.parentNode.insertBefore(row, $('explainSlot'));
          row.querySelector('#btnSubmit').onclick = function () { submitMulti(); };
        }
        $('btnSubmit').disabled = state.picks.length === 0;
      } else {
        removeSubmitRow();   // 单选/判断题不需要按钮行
      }
      return;
    }

    // 已判定：只保留「下一题」
    // 先移除上一轮的按钮行（多选题的「确定」），避免同时出现两个按钮 + 重复 id
    removeSubmitRow();

    if (!atEnd) {
      var row2 = document.createElement('div');
      row2.id = 'submitRow';
      row2.style.marginTop = '14px';
      row2.innerHTML = '<button class="btn btn-primary btn-next" id="btnNext" style="width:100%;">下一题 →</button>';
      var slot = $('explainSlot');
      slot.parentNode.insertBefore(row2, slot.nextSibling);
      $('btnNext').onclick = nextQuestion;
    }
  }

  /* ---------------- 答题交互 ---------------- */
  function bindOptions() {
    var wrap = $('options');
    if (!wrap) return;
    wrap.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('.opt') : null;
      if (!btn || btn.disabled) return;
      var i = Number(btn.dataset.i);
      var q = state.list[state.idx];
      if (!q || state.answered) return;

      if (isMultiple(q)) {
        togglePick(i, btn);
      } else {
        // 单选/判断：点击立即判定
        state.picks = [i];
        judgeCurrent();
      }
    });
  }

  function togglePick(i, btn) {
    var at = state.picks.indexOf(i);
    if (at >= 0) { state.picks.splice(at, 1); btn.classList.remove('selected'); }
    else         { state.picks.push(i);      btn.classList.add('selected'); }
    updateButtons();
  }

  function submitMulti() {
    if (state.answered || state.picks.length === 0) return;
    judgeCurrent();
  }

  function judgeCurrent() {
    var q = state.list[state.idx];
    if (!q || state.answered) return;

    state.answered = true;
    var correct = judge(q, state.picks);
    var rightArr = answerIdxArr(q);

    if (correct) state.stat.right++; else state.stat.wrong++;

    // 错题库维护：答错加入，答对移出
    if (correct) {
      if (wrongSet.has(q.id)) { wrongSet.delete(q.id); saveWrong(); }
    } else {
      if (!wrongSet.has(q.id)) { wrongSet.add(q.id); saveWrong(); }
    }

    // 累计统计 + 断点进度（本题已判定，恢复点应为下一道未答题）
    bumpStats(correct);
    saveProgress(state.idx + 1);

    paintResult(q, correct, rightArr);
    renderStatus();
    updateButtons();

    // 答对 → 自动进入下一题
    if (correct) {
      clearTimeout(state.timer);
      state.timer = setTimeout(function () {
        if (state.answered && !state.finished) nextQuestion();
      }, AUTO_NEXT);
    }
  }

  function paintResult(q, correct, rightArr) {
    var opts = cardSlot.querySelectorAll('.opt');
    var mine = state.picks;

    Array.prototype.forEach.call(opts, function (btn) {
      var i = Number(btn.dataset.i);
      btn.disabled = true;
      btn.classList.remove('selected');

      var isRight = rightArr.indexOf(i) >= 0;
      var isMine  = mine.indexOf(i) >= 0;

      if (isRight) {
        btn.classList.add('correct');          // 正确答案一律标绿
      } else if (isMine) {
        btn.classList.add('wrong');            // 选错的标红
      } else {
        btn.classList.add('dim');
      }
    });

    // 解析面板
    var slot = $('explainSlot');
    if (!slot) return;

    var exp = q.explanation ? String(q.explanation) : '';
    var html = '<div class="explain ' + (correct ? 'ok' : 'bad') + '">';

    html += '<div class="explain-head"><span class="icon">' + (correct ? '✅' : '❌') + '</span>' +
            '<span>' + (correct ? '回答正确' : '回答错误') + '</span>' +
            (!correct ? '<span style="margin-left:auto;font-weight:600;font-size:12.5px;">已加入错题库</span>' : '') +
            '</div>';

    html += '<div class="explain-body">';
    if (!correct) {
      html += '<div class="ans-line">正确答案：<b>' + esc(answerText(q)) + '</b></div>';
    }
    html += '<span class="exp-label">解析</span>';
    html += '<div class="exp-text' + (exp ? '' : ' empty') + '">' +
            (exp ? esc(exp) : '（本题暂无解析）') + '</div>';
    html += '</div></div>';

    slot.innerHTML = html;
  }

  function nextQuestion() {
    clearTimeout(state.timer);
    if (state.idx >= state.list.length) return;
    state.idx++;
    state.answered = false;
    state.picks = [];
    saveProgress();          // 前进后同步断点
    render();
    // 滚动到顶部，便于阅读新题
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  }

  /* ---------------- 模式切换 ---------------- */
  function switchMode(mode) {
    saveProgress();               // 先保存当前组，再切换
    state.mode = mode;
    state.finished = false;

    // 导航高亮
    Array.prototype.forEach.call(navBar.querySelectorAll('button'), function (b) {
      b.classList.toggle('active', b.dataset.mode === mode);
    });

    if (mode === 'type') {
      subnav.classList.add('show');
      Array.prototype.forEach.call(subnav.querySelectorAll('button'), function (b) {
        b.classList.toggle('active', b.dataset.type === state.type);
      });
      // 若该题型为空，自动跳到第一个有题的题型
      if (!ALL.some(function (q) { return q.type === state.type; })) {
        var first = Object.keys(TYPE_ORDER).find(function (t) {
          return ALL.some(function (q) { return q.type === t; });
        });
        if (first) state.type = first;
        Array.prototype.forEach.call(subnav.querySelectorAll('button'), function (b) {
          b.classList.toggle('active', b.dataset.type === state.type);
        });
      }
    } else {
      subnav.classList.remove('show');
      state.segment = 0;          // 切到非 type 模式：分段归零
    }

    startGroup(true);
  }

  function switchType(t) {
    saveProgress();               // 先保存当前组，再切换
    state.type = t;
    state.segment = 0;            // 切题型：分段归零
    Array.prototype.forEach.call(subnav.querySelectorAll('button'), function (b) {
      b.classList.toggle('active', b.dataset.type === t);
    });
    startGroup(true);
  }

  function switchSegment(seg) {
    if (seg === state.segment) return;
    saveProgress();               // 先保存当前分段，再切换
    state.segment = seg;
    startGroup(true);
  }

  /* ---------------- 错题库 导入 / 导出 ---------------- */
  function exportWrong() {
    var payload = {
      app: '化工总控工刷题',
      version: 1,
      exportedAt: new Date().toISOString(),
      count: wrongSet.size,
      wrongIds: Array.from(wrongSet)
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var d = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var name = '错题库_' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) +
               '_' + pad(d.getHours()) + pad(d.getMinutes()) + '.json';

    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);

    toast('已导出 ' + wrongSet.size + ' 道错题', 'ok');
  }

  function importWrong(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var ids = [];
      try {
        var data = JSON.parse(String(reader.result));

        // 兼容多种格式：{wrongIds:[]} / {ids:[]} / [] / ["tf1",...]
        if (Array.isArray(data)) ids = data;
        else if (data && Array.isArray(data.wrongIds)) ids = data.wrongIds;
        else if (data && Array.isArray(data.ids)) ids = data.ids;
        else throw new Error('格式不支持');
      } catch (e) {
        toast('导入失败：不是有效的错题库 JSON 文件', 'bad');
        return;
      }

      var before = wrongSet.size;
      var added = 0, skipped = 0;
      ids.forEach(function (id) {
        if (typeof id !== 'string') { skipped++; return; }
        if (!BY_ID[id]) { skipped++; return; }      // 题库中不存在的题号
        if (wrongSet.has(id)) { skipped++; return; } // 已存在 → 去重
        wrongSet.add(id);
        added++;
      });

      saveWrong();
      toast('导入完成：新增 ' + added + ' 道，跳过 ' + skipped + ' 道（共 ' + wrongSet.size + ' 道）', 'ok');

      // 若正在看错题库，刷新列表（进度记录不受影响）
      if (state.mode === 'wrong') startGroup(true);
      else renderStatus();
    };
    reader.onerror = function () { toast('读取文件失败', 'bad'); };
    reader.readAsText(file, 'utf-8');
  }

  function clearWrong() {
    if (wrongSet.size === 0) { toast('错题库已经是空的'); return; }
    if (!confirm('确定要清空错题库吗？共 ' + wrongSet.size + ' 道题，此操作不可撤销。')) return;
    wrongSet.clear();
    saveWrong();
    toast('错题库已清空', 'ok');
    // 不影响进度记录；错题库下次进入时按实际题量自动调整
    if (state.mode === 'wrong') startGroup(true);
    else renderStatus();
  }

  /* ---------------- Service Worker ---------------- */
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    // file:// 协议下无法注册 SW，静默跳过
    if (location.protocol !== 'http:' && location.protocol !== 'https:') return;

    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').then(function (reg) {
        console.log('[SW] 注册成功，作用域：', reg.scope);
      }).catch(function (err) {
        console.warn('[SW] 注册失败：', err);
      });
    });
  }

  /* ---------------- 初始化 ---------------- */
  // 等待题库就绪：module 脚本是延迟执行的，可能晚于本文件
  function whenDataReady(cb) {
    if (loadQuestions()) { cb(); return; }

    var done = false;
    function finish() {
      if (done) return;
      if (loadQuestions()) { done = true; cb(); }
    }

    // 1) module 脚本派发的事件
    window.addEventListener('questions-ready', finish);

    // 2) 兜底轮询（最多约 3 秒）
    var tries = 0;
    var timer = setInterval(function () {
      if (done) { clearInterval(timer); return; }
      if (loadQuestions()) { done = true; clearInterval(timer); cb(); return; }
      if (++tries > 30) { done = true; clearInterval(timer); cb(); }  // 超时走报错分支
    }, 100);
  }

  function init() {
    cacheDom();
    whenDataReady(boot);
  }

  function boot() {
    var n = loadQuestions();
    pruneWrong();   // 清理题库中已不存在的错题 id

    if (!n) {
      cardSlot.innerHTML = '<div class="card"><div class="empty">' +
        '<div class="big">⚠️</div><h2>题目数据未加载</h2>' +
        '<p>请确认 data.js 与本页面在同一目录，并通过 HTTP 服务器打开<br>（直接双击 file:// 打开可能被浏览器拦截）。</p>' +
        '</div></div>';
      return;
    }

    // 导航事件
    navBar.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('button[data-mode]') : null;
      if (btn) switchMode(btn.dataset.mode);
    });
    subnav.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('button[data-type]') : null;
      if (btn) switchType(btn.dataset.type);
    });
    segbar.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('button[data-seg]') : null;
      if (btn) switchSegment(Number(btn.dataset.seg));
    });

    // 底部按钮
    btnRedo.onclick       = function () {
      dropProgress();            // 删除该组断点，累计统计不清
      startGroup(false);
      toast('已重做本组');
    };
    btnClearWrong.onclick = clearWrong;
    btnExport.onclick     = exportWrong;
    btnImport.onclick     = function () { importFile.click(); };
    importFile.onchange   = function () {
      var f = importFile.files && importFile.files[0];
      if (f) importWrong(f);
      importFile.value = '';   // 允许重复选择同一文件
    };

    // 键盘快捷键：1-9 选项，Enter 下一题
    document.addEventListener('keydown', function (ev) {
      if (ev.target.tagName === 'INPUT') return;
      var q = state.list[state.idx];
      if (!q) return;

      if (ev.key === 'Enter') {
        if (state.answered) { nextQuestion(); }
        else if (isMultiple(q) && state.picks.length) { submitMulti(); }
        return;
      }
      if (state.answered) return;

      var n = parseInt(ev.key, 10);
      if (!isNaN(n) && n >= 1 && n <= (q.options ? q.options.length : 0)) {
        var btn = cardSlot.querySelector('.opt[data-i="' + (n - 1) + '"]');
        if (btn && !btn.disabled) btn.click();
      }
    });

    renderWrongBadge();
    switchMode('all');
    registerSW();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
