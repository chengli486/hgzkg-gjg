/* =========================================================================
 * Service Worker —— 离线缓存
 * 策略：
 *   - 预缓存应用外壳（HTML/CSS/JS/图标）
 *   - 同源 GET 请求：网络优先，失败回落缓存（保证题库更新可见）
 *   - 导航请求：网络优先，离线时回落 index.html
 * ====================================================================== */

var CACHE_NAME = 'hgzk-cache-v4';

var PRECACHE_URLS = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './manifest.json',
  './favicon/favicon.ico',
  './favicon/favicon.svg',
  './favicon/favicon-96x96.png',
  './favicon/apple-touch-icon.png',
  './favicon/web-app-manifest-192x192.png',
  './favicon/web-app-manifest-512x512.png'
];

/* ---------------- 安装：预缓存 ---------------- */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // 逐个添加，单个失败不影响整体安装
      return Promise.all(
        PRECACHE_URLS.map(function (url) {
          return cache.add(new Request(url, { cache: 'reload' })).catch(function (err) {
            console.warn('[SW] 预缓存跳过：' + url, err);
          });
        })
      );
    }).then(function () {
      return self.skipWaiting();   // 新 SW 立即接管
    })
  );
});

/* ---------------- 激活：清理旧缓存 ---------------- */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (k) {
          if (k !== CACHE_NAME) {
            console.log('[SW] 删除旧缓存：' + k);
            return caches.delete(k);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ---------------- 拦截请求 ---------------- */
self.addEventListener('fetch', function (event) {
  var req = event.request;

  // 只处理 GET，且只处理同源请求
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // 页面导航：网络优先 → 离线回落缓存的 index.html
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (c) { c.put('./index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (r) {
          return r || caches.match('./');
        });
      })
    );
    return;
  }

  // 静态资源：网络优先，失败回落缓存
  event.respondWith(
    fetch(req).then(function (res) {
      // 只缓存成功的同源响应
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (r) {
        if (r) return r;
        // 图片类请求兜底
        if (req.destination === 'image') return caches.match('./favicon/favicon-96x96.png');
        return new Response('离线且无缓存', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});

/* ---------------- 消息：支持手动跳过等待 ---------------- */
self.addEventListener('message', function (event) {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
