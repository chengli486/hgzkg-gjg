// 2026年化工总控工（高级工）复习题库
// 由「2026年化工总控工（高级工）题库(总).docx」与「总控工答案与解析.docx」合并生成
// 判断题 tf1-tf101；单选题 single1-single300；多选题 multiple1-multiple102
//
// 字段说明：
//   id          题目编号
//   type        tf=判断题 / single=单选题 / multiple=多选题
//   question    题干
//   options     选项数组（判断题固定为 ["正确", "错误"]）
//   answer      判断题/单选题：正确选项索引(数字)；多选题：索引数组；无答案时为 null
//   explanation 解析

export const questions = [
  {
    id: "tf1",
    type: "tf",
    question: "严禁在生产装置罐区及易燃易爆装置区内用有色金属工具进行敲打撞击作业。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "易燃易爆区应使用铜质、木质等防爆工具，严禁用黑色金属敲打撞击。"
  },
  {
    id: "tf2",
    type: "tf",
    question: "为了预防触电，要求每台电气设备应分别用多股绞合裸铜线缠绕在接地或接零干线上。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "接地/接零必须焊接、压接或用螺栓可靠连接，不能用多股裸铜线缠绕。"
  },
  {
    id: "tf3",
    type: "tf",
    question: "化工生产防止火灾、爆炸的基本措施是限制火灾危险物、助燃物、火源三者之间相互直接作用。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "燃烧爆炸需危险物、助燃物、火源三者共同作用，隔离三者是基本措施。"
  },
  {
    id: "tf4",
    type: "tf",
    question: "氧气呼吸器是一种与外界隔离自供再生式呼吸器，适用于缺氧及任何种类，任何浓度的有毒气体环境。但禁止用于油类、高温、明火的作业场所。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "氧气呼吸器自供氧气，可用于缺氧和有毒环境；但油类、高温、明火场所禁用。"
  },
  {
    id: "tf5",
    type: "tf",
    question: "半致死剂量LD50是指引起全组染毒动物半数死亡的毒性物质的最小剂量或浓度。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "LD50 是半数致死剂量或浓度，表示染毒动物半数死亡所需剂量。"
  },
  {
    id: "tf6",
    type: "tf",
    question: "萃取中，萃取剂的加入量应使和点的位置位于两相区。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "萃取时和点应落在两相区，才能分层得到萃取相和萃余相。"
  },
  {
    id: "tf7",
    type: "tf",
    question: "制冷剂钢瓶可以与氧气瓶同车运输。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "制冷剂钢瓶与氧气瓶不得同车运输，助燃气体与易燃气体混运危险。"
  },
  {
    id: "tf8",
    type: "tf",
    question: "含A、B两种成分的混合液，只有当分配系数大于1时，才能用萃取操作进行分离。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "萃取分离关键是选择性系数大于1，不是分配系数大于1。"
  },
  {
    id: "tf9",
    type: "tf",
    question: "按作用性质不同，工业毒物可分为刺激性毒物、窒息性毒物、麻醉性毒物三种。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "工业毒物按作用性质还有全身中毒性、腐蚀性、致敏性等，不止三种。"
  },
  {
    id: "tf10",
    type: "tf",
    question: "萃取操作，返混随塔径增加而增强。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "萃取塔塔径增大，轴向返混通常增强。"
  },
  {
    id: "tf11",
    type: "tf",
    question: "为了从根本上解决工业污染问题，就是要采用少废无废技术即采用低能耗、高消耗、无污染的技术。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "少废无废技术要求低能耗、低消耗、无污染，不是高消耗。"
  },
  {
    id: "tf12",
    type: "tf",
    question: "两级氨压缩机正常运转时的排气温度一般在70～145℃。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "两级氨压缩机排气温度一般有更严格控制，70～145℃说法不准确。"
  },
  {
    id: "tf13",
    type: "tf",
    question: "在感性负载电路中，加接电容器，可补偿提高功率因数，其效果是减少了电路总电流，使有功功率减少，节省电能。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "并联电容提高功率因数后总电流减小，但有功功率不变。"
  },
  {
    id: "tf14",
    type: "tf",
    question: "变压器比异步电动机效率高的原因是由于它的损耗只有磁滞损耗和涡流损耗。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "变压器效率高不仅因为磁滞和涡流损耗，还与其无机械损耗等有关。"
  },
  {
    id: "tf15",
    type: "tf",
    question: "职工再次发生工伤，根据规定应当享受伤残津贴的，可以按照原认定的伤残等级享受伤残津贴待遇。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "职工再次发生工伤应重新鉴定，不能直接按原伤残等级享受津贴。"
  },
  {
    id: "tf16",
    type: "tf",
    question: "经医疗机构出具证明，报经办机构同意，工伤职工到统筹地区以外就医的，所需交通，食宿费用由所在单位按照本单位职工因公出差标准报销。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "工伤职工到统筹地区以外就医，交通食宿费一般由工伤保险基金支付。"
  },
  {
    id: "tf17",
    type: "tf",
    question: "恒速干燥阶段，湿物料表面的湿度也维持不变。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "恒速干燥阶段物料表面保持湿润，但表面湿度并非维持不变。"
  },
  {
    id: "tf18",
    type: "tf",
    question: "当制冷系统出现冰堵、脏堵故障或进行定期检修时，均应更换干燥过滤器。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "制冷系统冰堵、脏堵或定期检修时，通常应更换干燥过滤器。"
  },
  {
    id: "tf19",
    type: "tf",
    question: "选择干燥器时，首先要考虑的是该干燥器生产能力的大小。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "选择干燥器首先应考虑物料特性、干燥要求和产品质量。"
  },
  {
    id: "tf20",
    type: "tf",
    question: "沸腾床干燥器中的适宜气速应大于带出速度，小于临界速度。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "沸腾床适宜气速应大于临界流化速度、小于带出速度，题中关系说反。"
  },
  {
    id: "tf21",
    type: "tf",
    question: "恒定干燥介质条件下，降速干燥阶段的湿料表面温度为湿球温度。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "降速干燥阶段物料表面温度逐渐升高，接近空气温度，不是湿球温度。"
  },
  {
    id: "tf22",
    type: "tf",
    question: "对其油温的测量来实现的。如果发现油温较平时相同负载和相同条件下高出10℃时，应考虑变压器内发生了故障。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "变压器油温比相同条件下高出 10℃ 以上，通常预示内部存在故障。"
  },
  {
    id: "tf23",
    type: "tf",
    question: "同一种物料在一定的干燥速率下，物料愈厚，则其临界含水量愈高。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "同种物料在相同干燥速率下，料层越厚，临界含水量越高。"
  },
  {
    id: "tf24",
    type: "tf",
    question: "相对湿度下空气相对湿度百分数越大,则物料中所含平衡水分越多。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "空气相对湿度越大，物料平衡水分越多。"
  },
  {
    id: "tf25",
    type: "tf",
    question: "在干燥过程中,只有物料与湿度为零的绝干空气接触,才可能得到绝干物料。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "只有与绝干空气接触，物料平衡水分才为零，才可能得到绝干物料。"
  },
  {
    id: "tf26",
    type: "tf",
    question: "控制精馏塔时，加大加热蒸汽量，则塔内温度一定升高。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "加大加热蒸汽量不一定使塔内温度一定升高，还受组成、压力、回流影响。"
  },
  {
    id: "tf27",
    type: "tf",
    question: "干燥中无物料损失，蒸发水量可用下式表示：蒸发水量=干燥前总水量-干燥后总水量。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "无物料损失时，蒸发水量等于干燥前总水量减干燥后总水量。"
  },
  {
    id: "tf28",
    type: "tf",
    question: "控制精馏塔时，加大回流量，则塔内压力一定降低。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "加大回流量不一定使塔内压力一定降低，压力受气液负荷和冷凝系统影响。"
  },
  {
    id: "tf29",
    type: "tf",
    question: "干燥进行的必要条件是物料表面的水气（或其他蒸气）的压强必须大于干燥介质中水气（或其他蒸气）的分压。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "干燥必要条件是物料表面水汽分压大于干燥介质中水汽分压。"
  },
  {
    id: "tf30",
    type: "tf",
    question: "分离任务要求一定，当回流比一定时，在五种进料状况中，冷液进料的q值最大，提馏段操作线与平衡线之间的距离最小，分离所需的总理论塔板数最多。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "冷液进料 q 值最大，但所需理论塔板数不一定最多。"
  },
  {
    id: "tf31",
    type: "tf",
    question: "板间距与物料性质有关。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "板间距与物料性质、发泡性、液泛倾向等有关。"
  },
  {
    id: "tf32",
    type: "tf",
    question: "如xD、xF、xW一定，则进料为泡点的饱和液体，其所需精馏段理论塔板数一定比冷液体进料为少。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "进料热状况影响两段塔板数分配，不能简单判定精馏段理论板数一定少。"
  },
  {
    id: "tf33",
    type: "tf",
    question: "减压精馏过程中，溶液中难挥发组份的饱和蒸汽压增大，故对分离有利。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "减压精馏使沸点降低，有利于热敏物质，但难挥发组分饱和蒸气压不是增大。"
  },
  {
    id: "tf34",
    type: "tf",
    question: "雾沫挟带过量是造成精馏塔液泛的原因之一。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "雾沫夹带过量会破坏正常气液接触，是液泛原因之一。"
  },
  {
    id: "tf35",
    type: "tf",
    question: "在对热敏性混合液进行精馏时必须采用加压分离。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "热敏性混合液精馏通常采用减压精馏，不是必须加压。"
  },
  {
    id: "tf36",
    type: "tf",
    question: "连续精馏停车时，先停再沸器，后停进料。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "连续精馏停车一般先停进料，再停再沸器，不是先停再沸器后停进料。"
  },
  {
    id: "tf37",
    type: "tf",
    question: "将精馏塔从塔顶出来的蒸汽先在分凝器中部分冷凝，冷凝液刚好供回流用，相当于一次部分冷凝，精馏段的理论塔板数应比求得的能完成分离任务的精馏段理论板数少一块.",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "分凝器相当于一块理论板，因此精馏段理论板数可少算一块。"
  },
  {
    id: "tf38",
    type: "tf",
    question: "筛板塔板结构简单，造价低，但分离效率较泡罩低，因此已逐步淘汰。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "筛板塔结构简单、造价低，仍广泛应用，并未被淘汰。"
  },
  {
    id: "tf39",
    type: "tf",
    question: "金属垫片材料一般并不要求强度高，而是要求其软韧。金属垫片主要用于中、高温和中、高压的法兰联接密封。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "金属垫片要求软韧、密封性好，适用于中高温、中高压法兰密封。"
  },
  {
    id: "tf40",
    type: "tf",
    question: "当钢丝的磨损或腐蚀量达到或超过原有直径的50﹪时，该钢丝即应报废。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "钢丝磨损或腐蚀报废标准应按规程执行，并非简单定为50%。"
  },
  {
    id: "tf41",
    type: "tf",
    question: "化工管路中通常在管路的相对低点安装有排液阀。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "化工管路相对低点常设排液阀，便于排液。"
  },
  {
    id: "tf42",
    type: "tf",
    question: "公差一般为正值，但在个别情况下，也可以是负值或零。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "尺寸公差永远为正值，不可能为负值或零。"
  },
  {
    id: "tf43",
    type: "tf",
    question: "管子套丝时应注意不要一扳套成，丝扣要完整，丝扣表面要光滑，丝扣的松紧要适当。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "管子套丝应分次套成，丝扣完整、光滑、松紧适当。"
  },
  {
    id: "tf44",
    type: "tf",
    question: "防治尘毒的主要措施是采用合理的通风措施和建立严格的检查管理制度。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "防治尘毒应以改革工艺、密闭化、自动化为主，通风和制度管理为辅。"
  },
  {
    id: "tf45",
    type: "tf",
    question: "水平管道法兰的螺栓孔，其最上面两个应保持水平。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "水平管道法兰螺栓孔最上面两个应保持水平。"
  },
  {
    id: "tf46",
    type: "tf",
    question: "在水平管路上安装阀门时，阀杆一般应安装在上半周范围内，不宜朝下，以防介质泄漏伤害到操作者。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "水平管路阀门阀杆一般应在上半周，不宜朝下，防止泄漏伤人。"
  },
  {
    id: "tf47",
    type: "tf",
    question: "对一定操作条件下的填料吸收塔，如将塔填料层增高一些，则塔的H_OG 将增大，N_OG 将不变。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "填料层增高，HOG 基本不变，NOG 增大，出口气体浓度降低。"
  },
  {
    id: "tf48",
    type: "tf",
    question: "节流阀与截止阀的阀芯形状不同，因此它比截止阀的调节性能好。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "节流阀阀芯形状使其调节性能优于截止阀。"
  },
  {
    id: "tf49",
    type: "tf",
    question: "校准是指在规定条件下，为确定测量仪器或测量系统所指示的量值，或实物量具或参考物质所代表的量值，与对应的由标准所复现的量值之间的一组操作。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "校准定义正确：在规定条件下确定测量仪器示值与标准量值之间关系。"
  },
  {
    id: "tf50",
    type: "tf",
    question: "目前用于进行吸收计算的是双膜理论。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "吸收计算常用双膜理论。"
  },
  {
    id: "tf51",
    type: "tf",
    question: "一切测量必有不确定度。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "任何测量都存在不确定度。"
  },
  {
    id: "tf52",
    type: "tf",
    question: "测量仪表的测量值小数点后的位数愈多，测量愈精确。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "小数点后位数多不代表测量精确，精度取决于误差和不确定度。"
  },
  {
    id: "tf53",
    type: "tf",
    question: "周期检定是指按时间间隔和规定程序，对计量器具定期进行的一种后续检定。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "周期检定是按时间间隔和规定程序进行的后续检定。"
  },
  {
    id: "tf54",
    type: "tf",
    question: "简单控制系统和均匀控制系统从系统结构上来看是一样的，不同点仅是系统设计的目的不同。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "简单控制系统和均匀控制系统结构相似，区别主要在设计目的。"
  },
  {
    id: "tf55",
    type: "tf",
    question: "过饱和溶液的性质不稳定，轻微震动，多余的溶质就会以晶体的形式析出。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "过饱和溶液不稳定，轻微震动可使多余溶质结晶析出。"
  },
  {
    id: "tf56",
    type: "tf",
    question: "结晶操作中,应在溶液进入介稳区内适当温度时加入晶种。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "结晶操作常在介稳区加入晶种，控制晶核数量和晶体生长。"
  },
  {
    id: "tf57",
    type: "tf",
    question: "所有的饱和溶液在冷却后都能自发地把多余的溶质结晶分离出来。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "并非所有饱和溶液冷却后都能自发析出晶体，溶解度随温度变化小的体系不一定。"
  },
  {
    id: "tf58",
    type: "tf",
    question: "往复式压缩机的实际排气量等于活塞所扫过的气缸容积。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "往复式压缩机实际排气量小于活塞扫过容积，受容积系数、泄漏等影响。"
  },
  {
    id: "tf59",
    type: "tf",
    question: "输送液体的密度越大，泵的扬程越小。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "泵的扬程与液体密度无关，密度主要影响功率。"
  },
  {
    id: "tf60",
    type: "tf",
    question: "流体与壁面进行稳定的强制湍流对流传热，层流内层的热阻比湍流主体的热阻大，故层流内层内的传热比湍流主体内的传热速率小。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "串联传热各层传热速率相同，层流内层热阻大意味着温差大。"
  },
  {
    id: "tf61",
    type: "tf",
    question: "往复泵的进出口处的空气室的作用是使吸入和排出的液体流量保持稳定。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "往复泵空气室可缓冲流量脉动，使吸入和排出较稳定。"
  },
  {
    id: "tf62",
    type: "tf",
    question: "可燃气体或蒸气与空气的混合物，若其浓度在爆炸下限以下或爆炸上限以上时便不会着火或爆炸。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "可燃气体浓度低于爆炸下限或高于爆炸上限，一般不会着火爆炸。"
  },
  {
    id: "tf63",
    type: "tf",
    question: "化工工艺流程图不考虑各设备的相对位置和标高。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "化工工艺流程图虽不按比例，但仍需反映设备相对位置和标高关系。"
  },
  {
    id: "tf64",
    type: "tf",
    question: "在剖视图中，零件后部看不见的轮廓线、虚线一律省略不画。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "剖视图中不可见轮廓线必要时仍需用虚线画出，不是一律省略。"
  },
  {
    id: "tf65",
    type: "tf",
    question: "脱吸因数的大小可反映溶质吸收率的高低。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "反映溶质吸收率高低的是吸收因数，不是脱吸因数。"
  },
  {
    id: "tf66",
    type: "tf",
    question: "吸收操作线方程是由物料衡算得出的，因而它与吸收相平衡、吸收温度、两相接触状况、塔的结构等都没有关系。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "吸收操作线由物料衡算得出，与相平衡、温度、塔结构无直接关系。"
  },
  {
    id: "tf67",
    type: "tf",
    question: "吸收操作中，增大液气比有利于增加传质推动力，提高吸收速率。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "增大液气比可增加传质推动力，提高吸收速率。"
  },
  {
    id: "tf68",
    type: "tf",
    question: "填料塔开车时，我们总是先用较大的吸收剂流量来润湿填料表面，甚至淹塔，然后再调节到正常的吸收剂用量，这样吸收效果较好。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "填料塔开车先用大液量润湿填料，再调至正常，有利于吸收。"
  },
  {
    id: "tf69",
    type: "tf",
    question: "吸收操作时,增大吸收剂的用量总是有利于吸收操作的。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "增大吸收剂用量不一定总是有利，过多会增加能耗、液泛风险等。"
  },
  {
    id: "tf70",
    type: "tf",
    question: "传质的基本方式可分为分子扩散和对流扩散两种。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "传质基本方式分为分子扩散和对流扩散。"
  },
  {
    id: "tf71",
    type: "tf",
    question: "分子扩散由分子热运动造成；只要存在浓度差，就能够在一切物系中发生。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "分子扩散由分子热运动造成，存在浓度差即可发生。"
  },
  {
    id: "tf72",
    type: "tf",
    question: "物质系统由于浓度不均匀而发生的质量迁移过程，质量传递简称传质。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "因浓度不均匀引起的质量迁移称为传质。"
  },
  {
    id: "tf73",
    type: "tf",
    question: "在高处作业时，正确使用安全带的方法是高挂(系)低用。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "高处作业安全带应高挂低用。"
  },
  {
    id: "tf74",
    type: "tf",
    question: "焊炬熄火时，应先关乙炔后关氧气，防止火焰倒吸和产生烟灰。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "焊炬熄火应先关乙炔后关氧气，防止回火和烟灰。"
  },
  {
    id: "tf75",
    type: "tf",
    question: "过滤式防毒面具适用于有毒气体浓度≤1%的场所。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "过滤式防毒面具适用条件不仅是浓度≤1%，还要求氧含量足够等。"
  },
  {
    id: "tf76",
    type: "tf",
    question: "在传动设备的检修工作中，只需在电气开关上挂有“有人作业，禁止合闸”的安全警告牌。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "传动设备检修必须断电、验电、上锁、挂牌、监护，仅挂牌不够。"
  },
  {
    id: "tf77",
    type: "tf",
    question: "为保证安全，在给焊炬点火时，最好先开氧气，点燃后再开乙炔。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "焊炬点火应先开乙炔，点燃后再开氧气，不是先开氧气。"
  },
  {
    id: "tf78",
    type: "tf",
    question: "常用安全阀有弹簧式和杠杆式两种，温度高而压力不太高时选用前者，高压设备宜选用后者。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "高温高压设备一般选用弹簧式安全阀，题中说法相反。"
  },
  {
    id: "tf79",
    type: "tf",
    question: "《危险化学品安全管理条例》规定，国家对危险化学品的生产和储存实行审批制度，对危险化学品的经营销售实行许可证制度，对危险化学品的运输实行登记制度。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "危险化学品运输实行资质管理，不是简单登记制度。"
  },
  {
    id: "tf80",
    type: "tf",
    question: "在工作时间和工作场所内，因履行工作职责受到暴力等意外伤害的应认定为工伤。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "工作时间和场所内因履行工作职责受到暴力等意外伤害，应认定工伤。"
  },
  {
    id: "tf81",
    type: "tf",
    question: "在自控图纸中，流体的液位用H表示。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "自控图纸中液位通常用 L 表示，不是 H。"
  },
  {
    id: "tf82",
    type: "tf",
    question: "精度等级为1.0级的检测仪表表明其最大相对百分误差为±1%。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "1.0级仪表最大相对百分误差为±1%。"
  },
  {
    id: "tf83",
    type: "tf",
    question: "热电阻温度计显示仪表指示无穷大可能原因是热电阻短路。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "热电阻显示无穷大通常是断路，短路时指示偏小或为零。"
  },
  {
    id: "tf84",
    type: "tf",
    question: "一般在高温段用热电偶传感器进行检测，在低温段用热电阻传感器进行检测。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "高温段常用热电偶，低温段常用热电阻。"
  },
  {
    id: "tf85",
    type: "tf",
    question: "在自动控制系统中，按给定值的形式不同可以分为定值控制系统、随动控制系统和程序控制系统。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "按给定值形式可分为定值、随动和程序控制系统。"
  },
  {
    id: "tf86",
    type: "tf",
    question: "爆炸极限和燃点是评价气体火灾爆炸危险的主要指标。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "评价气体火灾爆炸危险的主要指标通常包括爆炸极限、闪点等。"
  },
  {
    id: "tf87",
    type: "tf",
    question: "粉尘在空气中达到一定浓度，遇到明火发生爆炸，一般粉尘越细，燃点越低，危险性就越大。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "粉尘越细，比表面积越大，燃点越低，爆炸危险性越大。"
  },
  {
    id: "tf88",
    type: "tf",
    question: "闪点越低的液体，火灾危险性就越大。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "闪点越低，液体越易挥发形成爆炸性混合气，火灾危险性越大。"
  },
  {
    id: "tf89",
    type: "tf",
    question: "只要可燃物浓度在爆炸极限之外就是安全的。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "可燃物浓度在爆炸极限之外不一定绝对安全，还需考虑温度、压力、泄漏等。"
  },
  {
    id: "tf90",
    type: "tf",
    question: "若以湿空气作为干燥介质，由于夏季的气温高，则湿空气用量就少。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "夏季空气湿度大，干燥能力下降，湿空气用量不一定少。"
  },
  {
    id: "tf91",
    type: "tf",
    question: "在一定温度下，物料中的结合水分与非结合水分的划分只与物料本身性质有关，而与空气状态无关。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "结合水分与非结合水分的划分取决于物料本身性质，与空气状态无关。"
  },
  {
    id: "tf92",
    type: "tf",
    question: "对流干燥速率的快慢只取决于传热，与干燥介质无关。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "对流干燥速率取决于传热和传质，与干燥介质性质密切相关。"
  },
  {
    id: "tf93",
    type: "tf",
    question: "萃取操作时选择性系数的大小反映了萃取剂对原溶液分离能力的大小，选择性系数必须是大于1，并且越大越有利于分离。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "萃取选择性系数大于1且越大，越有利于分离。"
  },
  {
    id: "tf94",
    type: "tf",
    question: "萃取塔开车时，应先注满连续相，后进分散相。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "萃取塔开车应先注满连续相，再进分散相。"
  },
  {
    id: "tf95",
    type: "tf",
    question: "填料塔不可以用来作萃取设备。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "填料塔可用于萃取，称为填料萃取塔。"
  },
  {
    id: "tf96",
    type: "tf",
    question: "对流传热过程是对流传热→导热→对流传热的串联过程。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "对流传热包括对流传热—导热—对流传热的串联过程。"
  },
  {
    id: "tf97",
    type: "tf",
    question: "当换热器中热流体的质量流量、进出口温度及冷流体进出口温度一定时，采用并流操作可节省冷流体用量。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "当热流体和冷流体进出口温度一定时，逆流通常比并流更节省冷流体。"
  },
  {
    id: "tf98",
    type: "tf",
    question: "两流体膜系数相差不大时，要提高传热系数，必须提高较小的膜系数最有效。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "两膜系数相差不大时，提高任一侧膜系数都有明显效果。"
  },
  {
    id: "tf99",
    type: "tf",
    question: "变压器不仅有变压、变流的作用，而且还有变阻抗的作用。",
    options: ["正确", "错误"],
    answer: 0,
    explanation: "变压器具有变压、变流和变阻抗作用。"
  },
  {
    id: "tf100",
    type: "tf",
    question: "气体压力高于大气压力样品气体叫负压气体。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "气体压力高于大气压称为正压气体，低于大气压才叫负压气体。"
  },
  {
    id: "tf101",
    type: "tf",
    question: "常温下，浓硝酸可以用铝槽贮存，说明铝与浓硝酸不反应。",
    options: ["正确", "错误"],
    answer: 1,
    explanation: "铝与浓硝酸发生钝化，表面生成致密氧化膜，并非不反应。"
  },
  {
    id: "single1",
    type: "single",
    question: "触电是指人在非正常情况下,接触或过分靠近带电体而造成（   ）对人体的伤害。",
    options: ["电压", "电流", "电阻", "电弧"],
    answer: 1,
    explanation: "触电伤害由电流通过人体引起，电压只是形成电流的条件。"
  },
  {
    id: "single2",
    type: "single",
    question: "生产现场工艺合格率一般达到（   ）即视为现场工艺处于受控状态。",
    options: ["90%", "100%", "95%", "98%"],
    answer: 2,
    explanation: "生产现场工艺合格率达到95%即视为工艺受控。"
  },
  {
    id: "single3",
    type: "single",
    question: "下列中哪些不是电流对人体的伤害（   ）。",
    options: ["电流的热效应", "电流的化学效应", "电流的物理效应", "电流的机械效应"],
    answer: 2,
    explanation: "电流对人体伤害分热效应、化学效应、机械效应，无“物理效应”。"
  },
  {
    id: "single4",
    type: "single",
    question: "下列不属于电器防火防爆基本措施的是（   ）。",
    options: ["消除或减少爆炸性混合物", "爆炸危险环境接地和接零", "消除引燃物", "使消防用电设备配电线路与其他动力、照明线路具有共同供电回路"],
    answer: 3,
    explanation: "消防用电设备应独立供电，不能与动力、照明线路共用回路。"
  },
  {
    id: "single5",
    type: "single",
    question: "目前应用最广泛且技术最成熟的烟气脱硫的工艺是（   ）。",
    options: ["氨—酸法", "石灰—石膏湿法", "钠碱吸收法", "活性炭吸附法"],
    answer: 1,
    explanation: "石灰石/石灰—石膏湿法烟气脱硫应用最广、技术最成熟。"
  },
  {
    id: "single6",
    type: "single",
    question: "在环保控制指标中,COD的全称为（   ）。",
    options: ["总需氧量", "物理需氧量", "溶解氧", "化学需氧量"],
    answer: 3,
    explanation: "COD 即 Chemical Oxygen Demand，化学需氧量。"
  },
  {
    id: "single7",
    type: "single",
    question: "废水治理的方法一般可分为四种,下列方法中不正确的是（   ）。",
    options: ["物理法", "化学法", "生物化学法", "生物物理法"],
    answer: 3,
    explanation: "废水治理一般分物理法、化学法、物理化学法、生物化学法。"
  },
  {
    id: "single8",
    type: "single",
    question: "（   ）有知觉且呼吸和心脏跳动还正常,瞳孔不放大,对光反应存在,血压无明显变化。",
    options: ["轻型触电者", "中型触电者", "重型触电者", "假死现象者。"],
    answer: 1,
    explanation: "中型触电者有知觉，呼吸心跳存在，瞳孔对光反应存在。"
  },
  {
    id: "single9",
    type: "single",
    question: "预防尘毒危害措施的基本原则是（   ）。",
    options: ["减少毒源、降低空气中尘毒含量、减少人体接触尘毒机会", "消除毒源", "完全除去空气中尘毒", "完全杜绝人体接触尘毒"],
    answer: 0,
    explanation: "防尘毒原则是减少毒源、降低浓度、减少接触机会。"
  },
  {
    id: "single10",
    type: "single",
    question: "用潜热法计算流体间的传热量（   ）。",
    options: ["仅适用于相态不变而温度变化的情况", "仅适用于温度不变而相态变化的情况", "仅适用于既有相变化,又有温度变化的情况", "以上均错"],
    answer: 1,
    explanation: "潜热法适用于温度不变而相态变化的过程。"
  },
  {
    id: "single11",
    type: "single",
    question: "多层串联平壁稳定导热,各层平壁的导热速率（   ）。",
    options: ["不相等", "不能确定", "相等", "下降"],
    answer: 2,
    explanation: "稳定导热时通过各串联平壁的热流量相等。"
  },
  {
    id: "single12",
    type: "single",
    question: "用饱和水蒸汽加热空气时,传热管的壁温接近（   ）。",
    options: ["蒸汽的温度", "空气的出口温度", "空气进、出口平均温度", "无法确定"],
    answer: 0,
    explanation: "蒸汽冷凝膜系数远大于空气侧，壁温接近蒸汽温度。"
  },
  {
    id: "single13",
    type: "single",
    question: "对流传热速率等于系数×推动力,其中推动力是（   ）。",
    options: ["两流体的温度差", "流体温度和壁温度差", "同一流体的温度差", "两流体的速度差"],
    answer: 1,
    explanation: "对流传热推动力是流体主体温度与壁面温度之差。"
  },
  {
    id: "single14",
    type: "single",
    question: "工业采用翅片状的暖气管代替圆钢管,其目的是（   ）。",
    options: ["增加热阻,减少热量损失", "节约钢材", "增强美观", "增加传热面积,提高传热效果"],
    answer: 3,
    explanation: "翅片管可增大传热面积，提高传热效果。"
  },
  {
    id: "single15",
    type: "single",
    question: "处理量较小的萃取设备是（   ）。",
    options: ["筛板塔", "转盘塔", "混合澄清器", "填料塔"],
    answer: 3,
    explanation: "填料萃取塔处理量相对较小。"
  },
  {
    id: "single16",
    type: "single",
    question: "萃取剂的加入量应使原料与萃取剂的和点M位于（   ）。",
    options: ["溶解度曲线上方区", "溶解度曲线下方区", "溶解度曲线上", "任何位置均可"],
    answer: 1,
    explanation: "和点必须落在两相区（溶解度曲线下方）才能分层。"
  },
  {
    id: "single17",
    type: "single",
    question: "三角形相图内任一点,代表混合物的（   ）个组分含量。",
    options: ["一", "二", "三", "四"],
    answer: 2,
    explanation: "三元相图内任一点代表三个组分的含量。"
  },
  {
    id: "single18",
    type: "single",
    question: "萃取操作停车步骤是（   ）。",
    options: ["关闭总电源开关-关闭轻相泵开关-关闭重相泵开关-关闭空气比例控制开关", "关闭总电源开关-关闭重相泵开关-关闭空气比例控制开关-关闭轻相泵开关", "关闭重相泵开关-关闭轻相泵开关-关闭空气比例控制开关-关闭总电源开关", "关闭重相泵开关-关闭轻相泵开关-关闭总电源开关-关闭空气比例控制开关"],
    answer: 2,
    explanation: "萃取停车应先关重相泵、轻相泵、空气比例控制，最后关总电源。"
  },
  {
    id: "single19",
    type: "single",
    question: "有四种萃取剂,对溶质A和稀释剂B表现出下列特征,则最合适的萃取剂应选择（   ）。",
    options: ["同时大量溶解A和B", "对A和B的溶解都很小", "大量溶解A少量溶解B", "大量溶解B少量溶解A"],
    answer: 2,
    explanation: "萃取剂应大量溶解溶质A，少量溶解稀释剂B。"
  },
  {
    id: "single20",
    type: "single",
    question: "用纯溶剂S对A、B混合液进行单级萃取,F、xF不变,加大萃取剂用量,通常所得萃取液的组成ya将（   ）。",
    options: ["提高", "减小", "不变", "不确定"],
    answer: 1,
    explanation: "加大萃取剂用量会稀释萃取相，萃取液组成降低。"
  },
  {
    id: "single21",
    type: "single",
    question: "下列不属于多级逆流接触萃取的特点是（   ）。",
    options: ["连续操作", "平均推动力大", "分离效率高", "溶剂用量大"],
    answer: 3,
    explanation: "多级逆流萃取溶剂用量小，不是用量大。"
  },
  {
    id: "single22",
    type: "single",
    question: "在工业生产中,可以通过以下（   ）方法达到节约用电的目的。",
    options: ["选择低功率的动力设备", "选择大功率的动力设备", "提高电路功率因素", "选择大容量的电源变压器"],
    answer: 2,
    explanation: "提高功率因数可减少无功电流，降低线路损耗。"
  },
  {
    id: "single23",
    type: "single",
    question: "测量工作电压为380V以下的电动机绕组绝缘电阻时应选（   ）。",
    options: ["500 V绝缘电阻表", "550V绝缘电阻表", "1000V绝缘电阻表", "2500V绝缘电阻表"],
    answer: 0,
    explanation: "380V以下低压电机选500V绝缘电阻表。"
  },
  {
    id: "single24",
    type: "single",
    question: "使用电流互感器和电压互感器时,其二次绕组应分别（   ）接入被测电路之中。",
    options: ["串联、并联", "并联、串联", "串联、串联", "并联、并联"],
    answer: 0,
    explanation: "电流互感器二次侧应短路，电压互感器二次侧应开路。"
  },
  {
    id: "single25",
    type: "single",
    question: "带电换表时,若接有电压、电流互感器,则应分别（   ）。",
    options: ["开路、短路", "短路、开路", "均开路", "均短路"],
    answer: 0,
    explanation: "带电换表时，电流互感器二次短路，电压互感器二次开路。"
  },
  {
    id: "single26",
    type: "single",
    question: "两个电阻,当它们并联时的功率比为16∶9,若将它们串联,则两电阻上的功率比将是（   ）。",
    options: ["4∶3", "9∶16", "3∶4", "16∶9"],
    answer: 1,
    explanation: "并联时P∝1/R，得R1:R2=9:16；串联时P∝R，功率比9:16。"
  },
  {
    id: "single27",
    type: "single",
    question: "基尔霍夫第一定律指出,电路中任何一个节点的电流（   ）。",
    options: ["矢量和相等", "代数和等于零", "矢量和大于零", "代数和大于零"],
    answer: 1,
    explanation: "基尔霍夫电流定律：节点电流代数和等于零。"
  },
  {
    id: "single28",
    type: "single",
    question: "提高功率因数的方法是（   ）。",
    options: ["并联电阻", "并联电感", "并联电容", "串联电容"],
    answer: 2,
    explanation: "感性负载并联电容可补偿无功功率，提高功率因数。"
  },
  {
    id: "single29",
    type: "single",
    question: "某异步电动机的磁极数为4,该异步电动机的同步转速为（   ）r/min。",
    options: ["3000", "1500", "1000", "750"],
    answer: 1,
    explanation: "n=60f/p=60×50/2=1500 r/min。"
  },
  {
    id: "single30",
    type: "single",
    question: "在一三相交流电路中,一对称负载采用Y形连接方式时,其线电流有效值I,则采用Δ形连接方式时,其线电流有效值为(   )。",
    options: ["√3I", "1/√3 I", "3I", "1/3 I"],
    answer: 2,
    explanation: "同一对称负载由Y接改为△接，线电流变为3倍。"
  },
  {
    id: "single31",
    type: "single",
    question: "正弦交流电电流I=10Sin(314t－30°)A,其电流的最大值为（   ）A。",
    options: ["10√2", "10", "10√3", "20"],
    answer: 1,
    explanation: "正弦量表达式中的系数即为最大值，故为10A。"
  },
  {
    id: "single32",
    type: "single",
    question: "在中性点不接地的三相电源系统中,为防止触电,将电器设备的金属外壳与大地可靠连接称为（   ）。",
    options: ["工作接地", "工作接零", "保护接地", "保护接零"],
    answer: 2,
    explanation: "中性点不接地系统中，设备外壳接地称为保护接地。"
  },
  {
    id: "single33",
    type: "single",
    question: "致使劳动合同终止的情形包括：（  ）。①劳动合同期满；②用人单位法定代表人死亡；③劳动者被人民法院宣告失踪；④劳动者死亡或者被人民法院宣告死亡；⑤用人单位被依法宣告破产；⑥用人单位发生严重经营困难；⑦劳动者开始依法享受基本养老保险待遇；⑧法律、行政法规规定的其他情形。",
    options: ["①②④⑥⑦⑧", "①③④⑤⑥⑧", "②③④⑤⑦⑧", "①③④⑤⑦⑧"],
    answer: 3,
    explanation: "劳动合同终止情形包括①③④⑤⑦⑧。"
  },
  {
    id: "single34",
    type: "single",
    question: "劳动者月工资高于用人单位所在直辖市、设区的市级人民政府公布的本地区上年度职工月平均工资三倍的,向其支付经济补偿的标准按职工月平均工资三倍的数额支付,向其支付经济补偿的年限最高不超过（  ）年。",
    options: ["二", "五", "十", "十二"],
    answer: 3,
    explanation: "经济补偿年限最高不超过十二年。"
  },
  {
    id: "single35",
    type: "single",
    question: "劳务派遣单位违反《劳动合同法》规定,给被派遣劳动者造成损害的,劳务派遣单位与用工单位承担（  ）赔偿责任。",
    options: ["共同", "连带", "按份", "违约"],
    answer: 1,
    explanation: "劳务派遣单位与用工单位承担连带赔偿责任。"
  },
  {
    id: "single36",
    type: "single",
    question: "根据《危险化学品安全管理条例》,危险化学品专用仓库不符合国家标准对安全、消防的要求,未设置明显标志,或者未对专用仓库的储存设备和安全设施定期检测的处（　 ）的罚款。",
    options: ["1万以上5万以下", "1万以上10万以下", "2万以上5万以下", "2万以上10万以下"],
    answer: 0,
    explanation: "罚款幅度为1万以上5万以下。"
  },
  {
    id: "single37",
    type: "single",
    question: "根据《职业病防治法》,当事人对职业病诊断有异议的,可以向（ 　）作出诊断的医疗卫生机构申请鉴定。",
    options: ["县级以上地方人民政府劳动保障部门", "所在地人民政府劳动保障行政部门", "县级以上地方人民政府卫生行政部门", "所在地地方人民政府卫生行政部门"],
    answer: 3,
    explanation: "向所在地地方人民政府卫生行政部门申请鉴定。"
  },
  {
    id: "single38",
    type: "single",
    question: "负有安全生产监督管理职责的部门对生产经营单位进行有关安全生产的监督检查时,要按照《安全生产法》（　 ）以及相关法律法规的规定行使法律法规的职权,并履行相应的义务。",
    options: ["《工会法》", "《行政处罚法》", "《劳动法》", "《矿山安全法》"],
    answer: 2,
    explanation: "按《劳动法》及相关法律法规行使职权、履行义务。"
  },
  {
    id: "single39",
    type: "single",
    question: "若湿物料的湿基含水量为20%,其干基含水量为",
    options: ["17%", "23%", "36%", "25%"],
    answer: 3,
    explanation: "干基含水量=0.2/(1-0.2)=0.25，即25%。"
  },
  {
    id: "single40",
    type: "single",
    question: "湿空气达到饱和状态时,露点温度T露、干球温度T、湿球温度T湿三者的关系为     。",
    options: ["T>T湿>T露", "T露>T湿>T", "T湿>T露>T", "T=T露=T湿"],
    answer: 3,
    explanation: "湿空气饱和时，露点、干球温度、湿球温度三者相等。"
  },
  {
    id: "single41",
    type: "single",
    question: "物料中的平衡水分随温度的升高而（  ）。",
    options: ["增大", "减小", "不变", "不一定,还与其他因素有关"],
    answer: 1,
    explanation: "温度升高，空气相对湿度降低，平衡水分减小。"
  },
  {
    id: "single42",
    type: "single",
    question: "为了测准空气的湿球温度,应将干湿球温度计放在(   )。",
    options: ["不受外界干扰的静止空气中", "气速<5m/s的空气中", "气速<5m/s辐射传导较强处", "气速>5m/s辐射传导可忽略处"],
    answer: 3,
    explanation: "应置于气速>5m/s处，使辐射影响可忽略。"
  },
  {
    id: "single43",
    type: "single",
    question: "露点是指空气的总压恒定,(   )的情况下冷却至饱和时的温度。",
    options: ["相对湿度不变", "焓不变", "H不变", "水汽分压不变"],
    answer: 3,
    explanation: "露点是水汽分压不变、冷却至饱和时的温度。"
  },
  {
    id: "single44",
    type: "single",
    question: "当φ＜100%时,物料的平衡水分一定是（   ）。",
    options: ["非结合水", "自由水份", "结合水分", "临界水分"],
    answer: 2,
    explanation: "当φ<100%时，平衡水分一定是结合水分。"
  },
  {
    id: "single45",
    type: "single",
    question: "空气经过绝热饱和器时不发生变化的参数是（   ）。",
    options: ["温度", "湿度", "焓", "潜热"],
    answer: 2,
    explanation: "绝热饱和过程为等焓过程，焓不变。"
  },
  {
    id: "single46",
    type: "single",
    question: "干燥进行的条件是被干燥物料表面所产生的水蒸气分压（   ）干燥介质中水蒸气分压。",
    options: ["小于", "等于", "大于", "不等于"],
    answer: 2,
    explanation: "物料表面水汽分压大于介质中水汽分压时才能干燥。"
  },
  {
    id: "single47",
    type: "single",
    question: "影响干燥速率的主要因素除了湿物料、干燥设备外,还有一个重要因素是（   ）。",
    options: ["绝干物料", "平衡水分", "干燥介质", "湿球温度"],
    answer: 2,
    explanation: "影响干燥速率的主要因素除湿物料、设备外，还有干燥介质。"
  },
  {
    id: "single48",
    type: "single",
    question: "下列关于氯气的叙述正确的是(  )。",
    options: ["在通常情况下,氯气比空气轻", "氯气能与氢气化合生成氯化氢", "红色的铜丝在氯气中燃烧后生成蓝色的CuCl2", "液氯与氯水是同一种物质"],
    answer: 1,
    explanation: "氯气能与氢气化合生成氯化氢；氯气比空气重，CuCl₂为棕黄色。"
  },
  {
    id: "single49",
    type: "single",
    question: "下列物质的用途是利用其化学性质的是      。",
    options: ["稀有气体用于霓虹灯", "金属铝制易拉罐", "盐酸除铁锈", "铜线制电缆"],
    answer: 2,
    explanation: "盐酸除铁锈是酸碱反应，利用化学性质。"
  },
  {
    id: "single50",
    type: "single",
    question: "“绿色化学”能实现零排放（即反应物中的原子利用率达到100%）。CO和H2在一定条件下按照不同的比例可以合成不同的有机化工原料。根据零排放的要求,以CO和H2合成的有机物不可能是     。",
    options: ["甲醇（CH4O）", "乙醇（C2H6O）", "甲醛（CH2O）", "乙酸（C2H4O2）"],
    answer: 1,
    explanation: "由CO和H₂合成，产物中C:O应为1:1，乙醇为2:1，不可能。"
  },
  {
    id: "single51",
    type: "single",
    question: "参与节能减排是每一位公民应尽的义务。下列做法不符合节能减排要求的是     。",
    options: ["尽量使用一次性餐具", "用布袋代替塑料购物袋", "关闭电器后拔掉插头", "杜绝自来水的跑、冒、滴、漏现象"],
    answer: 0,
    explanation: "一次性餐具浪费资源、污染环境，不符合节能减排。"
  },
  {
    id: "single52",
    type: "single",
    question: "节约用水和合理开发利用水资源是每个公民应尽的责任和义务,你认为下列做法与之不相符的是     。",
    options: ["洗菜、洗衣、淘米的水用来浇花、拖地、冲厕所", "将活性炭放入硬水中使其软化", "合理施用农药、化肥,以减少水体污染", "加强工业废水的排放监控,坚持达标排放"],
    answer: 1,
    explanation: "活性炭只能吸附色素和异味，不能软化硬水。"
  },
  {
    id: "single53",
    type: "single",
    question: "“祥云”火炬燃烧时的主要反应为：5O2+X=3CO2+4H2O。由此可知,“祥云”火炬燃料X的化学式为     。",
    options: ["C3H7OH", "CH4", "C2H6", "C3H8"],
    answer: 3,
    explanation: "由质量守恒，X中含3个C、8个H，为C₃H₈。"
  },
  {
    id: "single54",
    type: "single",
    question: "亚硝酸钠（NaNO2）外观与食盐极相似,有咸味,区别它们的有效方法是隔绝空气加热,没有明显变化的是食盐,能分解放出刺激性气味的是亚硝酸钠,此气体可能是     。",
    options: ["SO2", "NO2", "N2", "NH3"],
    answer: 1,
    explanation: "NaNO₂分解生成NO₂，为红棕色刺激性气味气体。"
  },
  {
    id: "single55",
    type: "single",
    question: "下列反应中,有单质出现,但不属于置换反应的是     。",
    options: ["Cu+2AgNO3＝Cu(NO3)2+2Ag", "2Al+3H2SO4＝Al2(SO4)3+3H2↑", "2Mg+CO2＝2MgO+C", "2Na2O2+2CO2＝2Na2CO3+O2"],
    answer: 3,
    explanation: "过氧化钠与二氧化碳反应生成氧气，不属于置换反应。"
  },
  {
    id: "single56",
    type: "single",
    question: "现有20℃的饱和硝酸钾溶液,欲改变其溶质质量分数,下列方法可行的是      。",
    options: ["加入一定量的硝酸钾", "恒温蒸发部分水", "升温到60℃", "加入一定量的水"],
    answer: 3,
    explanation: "加KNO₃固体在饱和溶液中不再溶解；恒温蒸发水后仍是饱和溶液；升温只改变溶解度，溶质溶剂质量不变；只有加水会使溶剂增多、溶质质量分数减小，故 D 正确。"
  },
  {
    id: "single57",
    type: "single",
    question: "下列各组物质沸点高低顺序中正确的是(  )。",
    options: ["HI>HBr>HCl>HF", "H2Te>H2Se>H2S>H2O", "NH3>AsH3>PH3", "CH4>GeH4>SiH4"],
    answer: 2,
    explanation: "NH₃分子间有氢键，沸点高于AsH₃、PH₃。"
  },
  {
    id: "single58",
    type: "single",
    question: "对于H2O2性质的描述正确的是(  )。",
    options: ["只有强氧化性", "既有氧化性,又有还原性", "只有还原性", "很稳定,不易发生分解"],
    answer: 1,
    explanation: "H₂O₂中氧为-1价，既有氧化性又有还原性。"
  },
  {
    id: "single59",
    type: "single",
    question: "工业上广泛采用的大规模制取氯气的方法是(  )。",
    options: ["浓硫酸与二氧化锰反应", "电解饱和食盐水溶液", "浓硫酸与高锰酸钾反应", "二氧化锰、食盐与浓硫酸反应"],
    answer: 1,
    explanation: "工业上电解饱和食盐水制氯气。"
  },
  {
    id: "single60",
    type: "single",
    question: "实验室制取氯化氢的方法是(  )。",
    options: ["氯化钠溶液与浓硫酸加热反应", "氯化钠溶液与稀硫酸加热反应", "氯化钠晶体与浓硫酸加热反应", "氯化钠晶体与稀硫酸加热反应"],
    answer: 2,
    explanation: "实验室用氯化钠晶体与浓硫酸加热制取HCl。"
  },
  {
    id: "single61",
    type: "single",
    question: "某盐水溶液,无色,加入硝酸银溶液后,产生白色沉淀,加入氢氧化钙并加热,刺激性气味气体放出。该盐可能是(  )。",
    options: ["氯化钠", "氯化铵", "醋酸锌", "硝酸汞"],
    answer: 1,
    explanation: "加AgNO₃生成白色沉淀说明含Cl⁻，加碱放出刺激性气体说明含NH₄⁺。"
  },
  {
    id: "single62",
    type: "single",
    question: "氢气还原氧化铜的实验过程中,包含四步操作：①加热盛有氧化铜的试管、②通入氢气、③撤去酒精灯、④继续通入氢气直至冷却,正确的操作顺序是(  )。",
    options: ["①②③④", "②①③④", "②①④③", "①②④③"],
    answer: 1,
    explanation: "先通氢排空气，再加热，反应完先撤灯，继续通氢至冷却。"
  },
  {
    id: "single63",
    type: "single",
    question: "下列物质中,不能由金属和氯气反应制得的是(  )。",
    options: ["MgCl2", "AlCl3", "FeCl2", "CuCl2"],
    answer: 2,
    explanation: "铁与氯气反应生成FeCl₃，不能直接生成FeCl₂。"
  },
  {
    id: "single64",
    type: "single",
    question: "下列物质被还原可生成红棕色气体的是(  )。",
    options: ["溴化氢", "一氧化氮", "稀硫酸", "浓硝酸"],
    answer: 3,
    explanation: "浓硝酸被还原生成红棕色NO₂。"
  },
  {
    id: "single65",
    type: "single",
    question: "精馏塔中由塔顶向下的第n-1、n、n+1层塔板,其气相组成关系为（   ）。",
    options: ["yn+1>yn>yn—1", "yn+1=yn=yn—1", "yn+1< yn< yn—1", "不确定"],
    answer: 2,
    explanation: "越靠近塔顶易挥发组分含量越高，故yₙ₊₁<yₙ<yₙ₋₁。"
  },
  {
    id: "single66",
    type: "single",
    question: "若进料量、进料组成、进料热状况都不变,要提高xD,可采用（   ）。",
    options: ["减小回流比", "增加提馏段理论板数", "增加精馏段理论板数", "塔釜保温良好"],
    answer: 2,
    explanation: "提高塔顶产品纯度应增加精馏段理论板数。"
  },
  {
    id: "single67",
    type: "single",
    question: "自然循环型再沸发器的中溶液的循环是由于溶液产生（   ）。",
    options: ["浓度差", "密度差", "速度差", "温度差"],
    answer: 1,
    explanation: "受热后气液混合物密度减小，与未受热液体形成密度差而循环。"
  },
  {
    id: "single68",
    type: "single",
    question: "当回流从全回流逐渐减小时,精馏段操作线向平衡线靠近。为达到给定的分离要求,所需的理论板数（   ）。",
    options: ["逐渐减少", "逐渐增多", "不变", "无法判断"],
    answer: 1,
    explanation: "回流比减小，传质推动力减小，所需理论板数增多。"
  },
  {
    id: "single69",
    type: "single",
    question: "苯与环己烷混合液精馏时加入糠醛,属于（  ）。",
    options: ["恒沸精馏", "萃取精馏", "盐效应精馏", "以上都不是"],
    answer: 1,
    explanation: "加入第三组分改变相对挥发度，属于萃取精馏。"
  },
  {
    id: "single70",
    type: "single",
    question: "适宜的回流比取决于（  ）。",
    options: ["生产能力", "生产能力和操作费用", "塔板数", "操作费用和设备折旧费"],
    answer: 3,
    explanation: "适宜回流比需权衡操作费用与设备折旧费用。"
  },
  {
    id: "single71",
    type: "single",
    question: "只要求从混合液中得到高纯度的难挥发组分,采用只有提馏段的半截塔,则进料口应位于塔的（   ）部。",
    options: ["顶", "中", "中下", "底"],
    answer: 0,
    explanation: "只有提馏段时，进料口应在塔顶。"
  },
  {
    id: "single72",
    type: "single",
    question: "当分离沸点较高,而且又是热敏性混合液时,精馏操作压力应采用（   ）。",
    options: ["加压", "减压", "常压", "不确定"],
    answer: 1,
    explanation: "减压可降低沸点，避免热敏性物质分解。"
  },
  {
    id: "single73",
    type: "single",
    question: "下列塔设备中,操作弹性最小的是（   ）。",
    options: ["筛板塔", "浮阀塔", "泡罩塔", "舌板塔"],
    answer: 0,
    explanation: "筛板塔操作弹性最小。"
  },
  {
    id: "single74",
    type: "single",
    question: "在精馏塔操作中,若出现塔釜温度及压力不稳时,产生的原因可能是（   ）。",
    options: ["蒸汽压力不稳定", "疏水器不畅通", "加热器有泄漏", "以上三种原因"],
    answer: 3,
    explanation: "蒸汽压力不稳、疏水器不畅、加热器泄漏均可能导致塔釜温度压力不稳。"
  },
  {
    id: "single75",
    type: "single",
    question: "在精馏塔操作中,若出现淹塔时,可采取的处理方法有（   ）。",
    options: ["调进料量,降釜温,停采出", "降回流,增大采出量", "停车检修", "以上三种方法"],
    answer: 3,
    explanation: "淹塔时可调进料量、降釜温、停采出，或降回流、增大采出，或停车检修。"
  },
  {
    id: "single76",
    type: "single",
    question: "操作中的精馏塔,保持进料量F、进料组成xF、进料热状况参数q、塔釜加热量Q不变,减少塔顶馏出量D,则塔顶易挥发组分回收率η（   ）。",
    options: ["变大", "变小", "不变", "不确定"],
    answer: 1,
    explanation: "D减小、釜液增加，塔顶易挥发组分回收率下降。"
  },
  {
    id: "single77",
    type: "single",
    question: "精馏塔操作时,回流比与理论塔板数的关系是（   ）。",
    options: ["回流比增大时,理论塔板数也增多", "回流比增大时,理论塔板数减少", "全回流时,理论塔板数最多,但此时无产品", "回流比为最小回流比时,理论塔板数最小"],
    answer: 1,
    explanation: "回流比增大，分离能力提高，理论板数减少。"
  },
  {
    id: "single78",
    type: "single",
    question: "连续精馏,提馏段操作线位置一般与（   ）无关。",
    options: ["进料量的多少", "进料的热状况", "釜残液的组成", "回流比"],
    answer: 0,
    explanation: "提馏段操作线主要与进料热状况、釜液组成、回流比有关。"
  },
  {
    id: "single79",
    type: "single",
    question: "可能导致液泛的操作（   ）。",
    options: ["液体流量过小", "气体流量太小", "过量液沫夹带", "严重漏夜"],
    answer: 2,
    explanation: "过量液沫夹带会使降液管液层增厚，最终导致液泛。"
  },
  {
    id: "single80",
    type: "single",
    question: "精馏操作中,当F、xF、xD、xW及回流比R一定时,仅将进料状态由饱和液体改为饱和蒸汽进料,则完成分离任务所需的理论塔板数将（   ）。",
    options: ["减少", "不变", "增加", "以上答案都不正确"],
    answer: 2,
    explanation: "饱和蒸汽进料q=0，所需理论板数增加。"
  },
  {
    id: "single81",
    type: "single",
    question: "精馏塔釜温度过高会造成（   ）。",
    options: ["轻组分损失增加", "塔顶馏出物作为产品不合格", "釜液作为产品质量不合格", "可能造成塔板严重漏液"],
    answer: 1,
    explanation: "釜温过高使轻组分蒸出过多，塔顶产品不合格。"
  },
  {
    id: "single82",
    type: "single",
    question: "精馏塔釜温度指示较实际温度高,会造成（   ）。",
    options: ["轻组分损失增加", "塔顶馏出物作为产品不合格", "釜液作为产品质量不合格", "可能造成塔板严重漏液"],
    answer: 1,
    explanation: "釜温指示偏高会造成塔顶产品不合格。"
  },
  {
    id: "single83",
    type: "single",
    question: "精馏塔釜压升高将导致塔釜温度（  ）。",
    options: ["不变", "下降", "升高", "无法确定"],
    answer: 2,
    explanation: "压力升高，泡点升高，釜温升高。"
  },
  {
    id: "single84",
    type: "single",
    question: "单级离心泵平衡轴向推力的方法主要有哪些?（   ）",
    options: ["平衡盘", "平衡管", "平衡孔、平衡管采用双吸式叶轮", "都对"],
    answer: 2,
    explanation: "常用平衡孔、平衡管或双吸叶轮平衡轴向力。"
  },
  {
    id: "single85",
    type: "single",
    question: "过盈配合中孔的最大极限尺寸与轴的最小极限尺寸之代数差叫（   ）。",
    options: ["最小过盈", "最大过盈", "最小间隙", "最大间隙"],
    answer: 0,
    explanation: "孔最大、轴最小时形成的过盈为最小过盈。"
  },
  {
    id: "single86",
    type: "single",
    question: "尺寸公差是一个不为零、永远为（   ）的数。",
    options: ["正值", "负值", "整数", "分数"],
    answer: 0,
    explanation: "尺寸公差永远为正值。"
  },
  {
    id: "single87",
    type: "single",
    question: "下列配合代号中,表示间隙配合的是（   ）。",
    options: ["Φ20(H8/C7)", "Φ40（H9/Z9）", "Φ50(F7/h7)", "都不对"],
    answer: 0,
    explanation: "H8/C7为间隙配合。"
  },
  {
    id: "single88",
    type: "single",
    question: "只有（   ）公差才有基准要素。",
    options: ["形状", "尺寸", "位置", "都不对"],
    answer: 2,
    explanation: "位置公差才有基准要素。"
  },
  {
    id: "single89",
    type: "single",
    question: "对于使用强腐蚀性介质的化工设备,应选用耐腐蚀的不锈钢,且尽量使用（   ）不锈钢种。",
    options: ["含锰", "含铬镍", "含铅", "含钛"],
    answer: 1,
    explanation: "含铬镍不锈钢耐腐蚀性好。"
  },
  {
    id: "single90",
    type: "single",
    question: "化工设备常用材料的性能可分为：工艺性能和（   ）。",
    options: ["物理性能", "使用性能", "化学性能", "力学性能"],
    answer: 1,
    explanation: "材料性能分为工艺性能和使用性能。"
  },
  {
    id: "single91",
    type: "single",
    question: "不锈钢1Cr18Ni9Ti表示平均含碳量为（   ）。",
    options: ["0.9×10-2", "2×10-2", "1×10-2", "0.1×10-2"],
    answer: 3,
    explanation: "1Cr18Ni9Ti中“1”表示平均含碳量约0.1%。"
  },
  {
    id: "single92",
    type: "single",
    question: "硫酸生产中的用得最多的材料是（   ）。",
    options: ["铝", "不锈钢", "碳钢和铸铁", "塑料"],
    answer: 2,
    explanation: "硫酸生产设备大量使用碳钢和铸铁。"
  },
  {
    id: "single93",
    type: "single",
    question: "下图中所示法兰属于（   ）法兰。",
    options: ["平焊", "对焊", "插焊", "活动"],
    answer: 1,
    explanation: "图示为对焊法兰。"
  },
  {
    id: "single94",
    type: "single",
    question: "新盘根要一圈一圈地加,长度要合适,每圈每根相接头要切成（   ）。",
    options: ["30°", "45°", "60°", "90°"],
    answer: 1,
    explanation: "盘根接头应切成45°斜口，错开搭接。"
  },
  {
    id: "single95",
    type: "single",
    question: "蝶阀与管道连接时,多采用（   ）连接形式。",
    options: ["螺纹", "对夹式", "法兰", "焊接"],
    answer: 1,
    explanation: "蝶阀多采用对夹式连接。"
  },
  {
    id: "single96",
    type: "single",
    question: "安全阀应（   ）安装。",
    options: ["倾斜", "铅直", "视现场安装方便而定", "水平"],
    answer: 1,
    explanation: "安全阀必须铅直安装。"
  },
  {
    id: "single97",
    type: "single",
    question: "阀口研磨时,磨具材料最好选用（   ）。",
    options: ["珠光体铸铁", "20", "45", "2Cr13"],
    answer: 0,
    explanation: "研磨磨具常用珠光体铸铁。"
  },
  {
    id: "single98",
    type: "single",
    question: "普通水煤气管,适用于工作压力不超出（   ）MPa的管道。",
    options: ["0.6", "0.8", "1.0", "1.6"],
    answer: 0,
    explanation: "普通水煤气管适用压力不超过0.6MPa。"
  },
  {
    id: "single99",
    type: "single",
    question: "阀门阀杆升降不灵活,是由于阀杆弯曲,则排除的方法（   ）。",
    options: ["更换阀门", "更换阀门弹簧", "使用短杠杆开闭阀杆", "设置阀杆保护套"],
    answer: 2,
    explanation: "阀杆弯曲时可用短杠杆开闭，避免进一步损坏。"
  },
  {
    id: "single100",
    type: "single",
    question: "管道工程中,（   ）的闸阀,可以不单独进行强度和严密性试验。",
    options: ["公称压力小于1MPa,且公称直径小于或等于600mm", "公称压力小于1MPa,且公称直径大于或等于600mm", "公称压力大于1MPa,且公称直径小于或等于600mm", "公称压力大于1MPa,且公称直径大于或等于600mm"],
    answer: 1,
    explanation: "公称压力小于1MPa且公称直径大于或等于600mm的闸阀，可不单独进行强度和严密性试验。"
  },
  {
    id: "single101",
    type: "single",
    question: "在电力系统中,具有防触电功能的是(    )。",
    options: ["中线", "地线", "相线", "连接导线"],
    answer: 1,
    explanation: "电力系统中地线用于保护接地/接零，具有防触电功能。"
  },
  {
    id: "single102",
    type: "single",
    question: "人体的触电方式中,以（   ）最为危险。",
    options: ["单相触电", "两相触电", "跨步电压触电", "都不对"],
    answer: 1,
    explanation: "两相触电时电流通过人体心脏等要害部位，最为危险。"
  },
  {
    id: "single103",
    type: "single",
    question: "人体通过的电流值与通电时间的乘积,对人身的安全是一个界限,通常认为（   ）mA为安全值。",
    options: ["10", "20", "30", "40"],
    answer: 2,
    explanation: "通常认为 30mA 为人体安全电流界限。"
  },
  {
    id: "single104",
    type: "single",
    question: "在酸碱滴定中,甲基橙的变色范围为（     ）。",
    options: ["3.8~5.4", "3.1~4.4", "4.4~6.2", "3.0~4.6"],
    answer: 1,
    explanation: "甲基橙变色范围 pH 3.1~4.4，酸色红、碱色黄。"
  },
  {
    id: "single105",
    type: "single",
    question: "在酸碱滴定中,甲基红的变色范围为（     ）。",
    options: ["3.8~5.4", "3.1~4.4", "4.4~6.2", "3.0~4.6"],
    answer: 2,
    explanation: "甲基红变色范围 pH 4.4~6.2，酸色红、碱色黄。"
  },
  {
    id: "single106",
    type: "single",
    question: "在酸碱滴定中,酚酞的变色范围为（     ）。",
    options: ["6.8~8.0", "8.0~10.0", "9.4~10.6", "7.2~8.8"],
    answer: 1,
    explanation: "酚酞变色范围 pH 8.0~10.0，酸色无色、碱色粉红。"
  },
  {
    id: "single107",
    type: "single",
    question: "测定工业硫酸的纯度时,以NaOH标准滴定溶液为滴定剂,以甲基红为指示剂,则滴定终点溶液的颜色为（    ）。",
    options: ["无色", "黄色", "红色", "蓝色"],
    answer: 1,
    explanation: "NaOH 滴定硫酸，甲基红为指示剂，终点由红变黄。"
  },
  {
    id: "single108",
    type: "single",
    question: "用氢氧化钠标准滴定溶液滴定醋酸溶液时,以酚酞为指示剂,则滴定终点溶液的颜色为（    ）。",
    options: ["无色", "粉红色", "红色", "橙色"],
    answer: 1,
    explanation: "NaOH 滴定醋酸，酚酞为指示剂，终点呈粉红色。"
  },
  {
    id: "single109",
    type: "single",
    question: "用Na2CO3标定盐酸溶液的浓度时,以溴甲酚绿-甲基红为指示剂,则滴定终点溶液的颜色为（    ）。",
    options: ["绿色", "黄色", "暗红色", "紫色"],
    answer: 2,
    explanation: "溴甲酚绿-甲基红混合指示剂，终点由绿变暗红。"
  },
  {
    id: "single110",
    type: "single",
    question: "电动卷扬机应按规程做定期检查,每（   ）至少一次。",
    options: ["周", "月", "季", "年"],
    answer: 1,
    explanation: "电动卷扬机应每月至少检查一次。"
  },
  {
    id: "single111",
    type: "single",
    question: "含碳量在0.25%～0.5%范围内,通过淬火及高温回火可获得良好的综合力学性能的这类钢,叫（   ）。",
    options: ["渗碳钢", "调质钢", "弹簧钢", "都不对"],
    answer: 1,
    explanation: "含碳量 0.25%~0.5%，淬火+高温回火获得综合力学性能的钢为调质钢。"
  },
  {
    id: "single112",
    type: "single",
    question: "PG1310—300A1A 为某一管道的标注,其中300是指（   ）。",
    options: ["主项编号", "管道顺序号", "管径", "管道等级"],
    answer: 2,
    explanation: "管道标注 PG1310—300A1A 中，300 表示管径。"
  },
  {
    id: "single113",
    type: "single",
    question: "管道标准为W1022—25×2.5B,其中10的含义是（   ）。",
    options: ["物料代号", "主项代号", "管道顺序号", "管道等级"],
    answer: 1,
    explanation: "W1022—25×2.5B 中，10 表示主项代号。"
  },
  {
    id: "single114",
    type: "single",
    question: "型式批准是指承认计量器具的型式符合（   ）的决定。",
    options: ["企业质量标准", "法定要求", "用户使用要求", "以上都不对"],
    answer: 1,
    explanation: "型式批准是承认计量器具型式符合法定要求。"
  },
  {
    id: "single115",
    type: "single",
    question: "校准测量能力是指通常提供给用户的（   ）,它用包含因子k=2的扩展不确定度表示。",
    options: ["测量方法的误差", "标准器具的误差", "最高的校准测量水平", "以上都不对"],
    answer: 2,
    explanation: "校准测量能力表示通常提供给用户的最高校准测量水平。"
  },
  {
    id: "single116",
    type: "single",
    question: "在相同的测量条件下,对同一被测量的量值进行连续多次测量所得结果之间的一致性,称为测量结果的(    )。",
    options: ["再现性", "重复性", "单一性", "稳定性"],
    answer: 1,
    explanation: "相同条件下连续多次测量结果的一致性称为重复性。"
  },
  {
    id: "single117",
    type: "single",
    question: "某工艺要求测量范围在0～300℃,最大绝对误差不能大于±4℃,所选精确度为（   ）。",
    options: ["0.5", "1.0", "1.5", "4"],
    answer: 1,
    explanation: "最大相对误差 4/300≈1.33%，应选 1.0 级精度。"
  },
  {
    id: "single118",
    type: "single",
    question: "将5.0851修约到十分位的0.1单位,则修约数为(   )。",
    options: ["5.08", "5.9", "5.8", "5.09"],
    answer: 3,
    explanation: "5.0851 修约到十分位 0.1 单位，结果为 5.09。"
  },
  {
    id: "single119",
    type: "single",
    question: "将数1.13按0.2修约间隔进修约,其修约数为(    )。",
    options: ["1.1", "1.2", "1.0", "1.4"],
    answer: 1,
    explanation: "1.13 按 0.2 修约间隔修约，最接近 1.2。"
  },
  {
    id: "single120",
    type: "single",
    question: "测量仪器输出量的变化除以输入量的变化,称为(    )。",
    options: ["灵敏度", "放大器", "分辨力", "变压器"],
    answer: 0,
    explanation: "输出量变化除以输入量变化称为灵敏度。"
  },
  {
    id: "single121",
    type: "single",
    question: "结晶作为一种分离操作与蒸馏等其他常用的分离方法相比具有（   ）。",
    options: ["晶体粘度均匀", "操作能耗低；设备材质要求不高,三废排放少", "设备材质要求不高,三废排放少,包装运输方便", "产品纯度高"],
    answer: 1,
    explanation: "结晶操作能耗低、设备材质要求不高、三废排放少。"
  },
  {
    id: "single122",
    type: "single",
    question: "在工业生产中为了得到质量好粒度大的晶体,常在介稳区进行结晶。介稳区是指（   ）。",
    options: ["溶液没有达到饱和的区域", "溶液刚好达到饱和的区域", "溶液有一定过饱和度,但程度小,不能自发地析出结晶的区域", "溶液的过饱和程度大,能自发地析出结晶的区域"],
    answer: 2,
    explanation: "介稳区是溶液有一定过饱和度，但程度小，不能自发析出结晶的区域。"
  },
  {
    id: "single123",
    type: "single",
    question: "对于相等的结晶产量,若在结晶过程中晶核的形成速度远大于晶体的成长速度,则产品中晶体的形态及数量分别为（   ）。",
    options: ["小而少", "大而少", "小而多", "大而多"],
    answer: 2,
    explanation: "晶核形成速度远大于晶体成长速度，得到小而多的晶体。"
  },
  {
    id: "single124",
    type: "single",
    question: "为提高离心泵的经济指标,宜采用（    ）叶片。",
    options: ["前弯", "后弯", "垂直", "水平"],
    answer: 1,
    explanation: "后弯叶片离心泵效率高，经济指标好。"
  },
  {
    id: "single125",
    type: "single",
    question: "当两台规格相同的离心泵并联时,只能说（　　）。",
    options: ["在新的工作点处较原工作点处的流量增大一倍", "当扬程相同时,并联泵特性曲线上的流量是单台泵特性曲线上流量的两倍", "在管路中操作的并联泵较单台泵流量增大一倍", "在管路中操作的并联泵扬程与单台泵操作时相同,但流量增大两倍"],
    answer: 0,
    explanation: "两台相同离心泵并联，新工作点处流量较原工作点增大。"
  },
  {
    id: "single126",
    type: "single",
    question: "冷却用水经各车间使用后,需将回水集中送往冷却塔。现须将1000m3/h 的回水送往敞口、6m高的水冷却塔,宜选用            。",
    options: ["离心泵", "往复泵", "齿轮泵", "喷射泵"],
    answer: 0,
    explanation: "大流量、低扬程回水输送宜选用离心泵。"
  },
  {
    id: "single127",
    type: "single",
    question: "离心泵的安装高度有一定限制的原因主要是（   ）。",
    options: ["防止产生“气缚”现象", "防止产生汽蚀", "受泵的扬程的限制", "受泵的功率的限制"],
    answer: 1,
    explanation: "离心泵安装高度限制主要是防止产生汽蚀。"
  },
  {
    id: "single128",
    type: "single",
    question: "离心泵的轴功率N和流量Q的关系为（   ）。",
    options: ["Q增大,N增大", "Q增大,N先增大后减小", "Q增大,N减小", "Q增大,N先减小后增大"],
    answer: 0,
    explanation: "离心泵轴功率 N 随流量 Q 增大而增大。"
  },
  {
    id: "single129",
    type: "single",
    question: "离心泵在启动前应（   ）出口阀,旋涡泵启动前应（   ）出口阀。",
    options: ["打开,打开", "关闭,打开", "打开,关闭", "关闭,关闭"],
    answer: 1,
    explanation: "离心泵启动前关出口阀，旋涡泵启动前开出口阀。"
  },
  {
    id: "single130",
    type: "single",
    question: "离心泵铭牌上标明的扬程是（   ）。",
    options: ["功率最大时的扬程", "最大流量时的扬程", "泵的最大量程", "效率最高时的扬程"],
    answer: 3,
    explanation: "离心泵铭牌扬程为效率最高时的扬程。"
  },
  {
    id: "single131",
    type: "single",
    question: "造成离心泵气缚原因是（   ）。",
    options: ["安装高度太高", "泵内流体平均密度太小", "入口管路阻力太大", "泵不能抽水"],
    answer: 1,
    explanation: "离心泵气缚原因是泵内流体平均密度太小。"
  },
  {
    id: "single132",
    type: "single",
    question: "离心泵内导轮的作用是（   ）。",
    options: ["增加转速", "改变叶轮转向", "转变能量形式", "密封"],
    answer: 2,
    explanation: "导轮作用是将动能转变为静压能。"
  },
  {
    id: "single133",
    type: "single",
    question: "离心泵送液体的粘度越大,则有（   ）。",
    options: ["泵的扬程越大", "流量越大", "效率越大", "轴功率越大"],
    answer: 3,
    explanation: "输送液体粘度越大，摩擦损失增加，轴功率越大。"
  },
  {
    id: "single134",
    type: "single",
    question: "对于往复泵,下列说法错误的是（   ）。",
    options: ["有自吸作用,安装高度没有限制", "实际流量只与单位时间内活塞扫过的面积有关", "理论上扬程与流量无关,可以达到无限大", "启动前必须先用液体灌满泵体,并将出口阀门关闭"],
    answer: 3,
    explanation: "往复泵启动前应打开出口阀，不需灌泵，故 D 错误。"
  },
  {
    id: "single135",
    type: "single",
    question: "有两种说法：（1）往复泵启动不需要灌泵；（2）往复泵的流量随流量增大而减小,则（　　）。",
    options: ["两种说法都对", "两种说法都不对", "说法（1）对,说法（2）不对", "说法（2）对,说法（1）不对"],
    answer: 2,
    explanation: "往复泵有自吸能力不需灌泵；流量与扬程无关，故说法（1）对、（2）不对。"
  },
  {
    id: "single136",
    type: "single",
    question: "输送膏状物应选用（   ）。",
    options: ["离心泵", "往复泵", "齿轮泵", "压缩机"],
    answer: 2,
    explanation: "输送膏状物宜选用齿轮泵。"
  },
  {
    id: "single137",
    type: "single",
    question: "将含晶体10%的悬浊液送往料槽宜选用（   ）。",
    options: ["离心泵", "往复泵", "齿轮泵", "喷射泵"],
    answer: 0,
    explanation: "含晶体 10% 的悬浊液宜选用离心泵。"
  },
  {
    id: "single138",
    type: "single",
    question: "对于压缩气体属于易燃易爆性质时,在启动往复式压缩机前,应该采用（   ）将缸内、管路和附属容器内的空气或其他非工作介质置换干净,并达到合格标准,杜绝爆炸和设备事故的发生。",
    options: ["氮气", "氧气", "水蒸汽", "过热蒸汽"],
    answer: 0,
    explanation: "易燃易爆压缩气体启动前应用氮气置换。"
  },
  {
    id: "single139",
    type: "single",
    question: "下列说法正确的是（   ）。",
    options: ["离心通风机的终压小于1500mmH2O柱", "离心鼓风机的终压为1500mmH2O柱~3kgf/cm2,压缩比大于4", "离心压缩机终压为3kgf/cm2（表压）以上,压缩比大于4", "离心鼓风机的终压为3kgf/cm2,压缩比大于4"],
    answer: 2,
    explanation: "离心压缩机终压为 3kgf/cm² 以上，压缩比大于 4。"
  },
  {
    id: "single140",
    type: "single",
    question: "喘振是（   ）时,所出现的一种不稳定工作状态。",
    options: ["实际流量大于性能曲线所表明的最小流量", "实际流量大于性能曲线所表明的最大流量", "实际流量小于性能曲线所表明的最小流量", "实际流量小于性能曲线所表明的最大流量"],
    answer: 2,
    explanation: "喘振发生在实际流量小于性能曲线所表明的最小流量时。"
  },
  {
    id: "single141",
    type: "single",
    question: "罗茨鼓风机的风量与压强的关系(    )。",
    options: ["正比", "反比", "无关", "有关"],
    answer: 2,
    explanation: "罗茨鼓风机风量与压强基本无关。"
  },
  {
    id: "single142",
    type: "single",
    question: "工艺流程图包含（   ）。",
    options: ["方案流程图", "物料流程图和首页图", "管道及仪表流程图", "以上都是"],
    answer: 3,
    explanation: "工艺流程图包括方案流程图、物料流程图、首页图、管道及仪表流程图等，故 D 正确。"
  },
  {
    id: "single143",
    type: "single",
    question: "在带控制点工艺流程图中的图例是用来说明（   ）、管件、控制点等符号的意义。",
    options: ["压力表", "阀门", "流量计", "温度计"],
    answer: 1,
    explanation: "带控制点工艺流程图中的图例用来说明阀门、管件、控制点等符号意义。"
  },
  {
    id: "single144",
    type: "single",
    question: "在方案流程图中,设备的大致轮廓线应用（   ）表示。",
    options: ["粗实线", "细实线", "中粗实线", "双点划线"],
    answer: 1,
    explanation: "方案流程图中设备轮廓线用细实线表示。"
  },
  {
    id: "single145",
    type: "single",
    question: "化工工艺流程图中的设备用（   ）线画出,主要物料的流程线用（   ）实线表示。",
    options: ["细,粗", "细,细", "粗,细", "粗,粗"],
    answer: 0,
    explanation: "化工工艺流程图设备用细实线，主要物料流程线用粗实线。"
  },
  {
    id: "single146",
    type: "single",
    question: "在化工工艺流程图中,仪表控制点以（   ）在相应的管道上用符号画出。",
    options: ["虚线", "细实线", "粗实线", "中实线"],
    answer: 1,
    explanation: "仪表控制点在管道上用细实线符号画出。"
  },
  {
    id: "single147",
    type: "single",
    question: "下列选项中,不属于零件图内容的是(   )。",
    options: ["零件尺寸", "技术要求", "标题栏", "零件序号表"],
    answer: 3,
    explanation: "零件图内容包括尺寸、技术要求、标题栏，不包括零件序号表。"
  },
  {
    id: "single148",
    type: "single",
    question: "当 x² > x 时,(  )。",
    options: ["发生吸收过程", "发生解吸过程", "吸收推动力为零", "解吸推动力为零"],
    answer: 0,
    explanation: "x² > x 表示液相浓度低于平衡浓度，发生吸收过程。"
  },
  {
    id: "single149",
    type: "single",
    question: "“液膜控制”吸收过程的条件是(  )。",
    options: ["易溶气体,气膜阻力可忽略", "难溶气体,气膜阻力可忽略", "易溶气体,液膜阻力可忽略", "难溶气体,液膜阻力可忽略"],
    answer: 1,
    explanation: "液膜控制条件为难溶气体，气膜阻力可忽略。"
  },
  {
    id: "single150",
    type: "single",
    question: "根据双膜理论,在气液接触界面处（  ）。",
    options: ["气相组成大于液相组成", "气相组成小于液相组成", "气相组成等于液相组成", "气相组成与液相组成平衡"],
    answer: 3,
    explanation: "双膜理论中气液接触界面处气相组成与液相组成平衡。"
  },
  {
    id: "single151",
    type: "single",
    question: "某吸收过程,已知气膜吸收系数kY为4×10-4 kmol／(m2•s),液膜吸收系数k×为8kmol／(m2•s),由此可判断该过程为(  )。",
    options: ["气膜控制", "液膜控制", "判断依据不足", "双膜控制"],
    answer: 0,
    explanation: "kY 远小于 kX，气膜阻力大，为气膜控制。"
  },
  {
    id: "single152",
    type: "single",
    question: "填料塔以清水逆流吸收空气、氨混合气体中的氨。当操作条件一定时(Y1、L、V都一定时),若塔内填料层高度Z增加,而其他操作条件不变,出口气体的浓度Y2将(  )。",
    options: ["上升", "下降", "不变", "无法判断"],
    answer: 1,
    explanation: "填料层高度增加，传质单元数增加，出口气体浓度 Y2 下降。"
  },
  {
    id: "single153",
    type: "single",
    question: "填料支承装置是填料塔的主要附件之一,要求支承装置的自由截面积应(  )填料层的自由截面积。",
    options: ["小于", "大于", "等于", "都可以"],
    answer: 1,
    explanation: "填料支承装置自由截面积应大于填料层自由截面积。"
  },
  {
    id: "single154",
    type: "single",
    question: "可燃气体的燃烧性能常以（   ）来衡量。",
    options: ["火焰传播速度", "燃烧值", "耗氧量", "可燃物的消耗量"],
    answer: 0,
    explanation: "可燃气体的燃烧性能常以火焰传播速度衡量。"
  },
  {
    id: "single155",
    type: "single",
    question: "物质由一种状态迅速的转变为另一种状态,并在瞬间以机械能的形式放出巨大能量的现象称为（   ）。",
    options: ["爆炸", "燃烧", "反应", "分解"],
    answer: 0,
    explanation: "物质迅速转变状态并在瞬间以机械能形式放出巨大能量，这是爆炸的定义。"
  },
  {
    id: "single156",
    type: "single",
    question: "防止火灾爆炸事故的蔓延的措施是（  ）。",
    options: ["分区隔离", "设置安全阴火装置", "配备消防组织和器材", "以上三者都是"],
    answer: 3,
    explanation: "分区隔离、设置阻火装置、配备消防器材均为防止火灾爆炸蔓延的措施。"
  },
  {
    id: "single157",
    type: "single",
    question: "扑灭精密仪器等火灾时,一般用的灭火器为（  ）。",
    options: ["二氧化碳灭火器", "泡沫灭火器", "干粉灭火器", "卤代烷灭火器"],
    answer: 0,
    explanation: "扑灭精密仪器火灾宜用二氧化碳灭火器，不留残渣。"
  },
  {
    id: "single158",
    type: "single",
    question: "冷凝后制冷剂液体在冷凝压力下再进一步冷却后的温度称（  ）温度。",
    options: ["蒸发", "冷凝", "过冷", "深冷"],
    answer: 2,
    explanation: "冷凝后制冷剂液体在冷凝压力下再冷却后的温度称过冷温度。"
  },
  {
    id: "single159",
    type: "single",
    question: "对大气臭氧层没有破坏作用的制冷剂是：（    ）。",
    options: ["R12", "R22", "R717", "R502"],
    answer: 2,
    explanation: "R717（氨）对大气臭氧层无破坏作用。"
  },
  {
    id: "single160",
    type: "single",
    question: "根据制冷剂安全性分类原则,把制冷剂分为（　 ）种安全分组类型。",
    options: ["4", "6", "8", "9"],
    answer: 1,
    explanation: "制冷剂按安全性分为 6 种安全分组类型。"
  },
  {
    id: "single161",
    type: "single",
    question: "在制冷装置中,清除制冷系统内部污物的基本方法是：(    )。",
    options: ["用过滤器", "用清洁剂", "用干燥剂", "用截止阀"],
    answer: 0,
    explanation: "清除制冷系统内部污物的基本方法是用过滤器。"
  },
  {
    id: "single162",
    type: "single",
    question: "有机化合物及其水溶液作为载冷剂使用时的主要缺点是（　）。",
    options: ["腐蚀性强", "载热能力小", "凝固温度较高", "价格较高"],
    answer: 3,
    explanation: "有机化合物及水溶液作载冷剂的主要缺点是价格较高。"
  },
  {
    id: "single163",
    type: "single",
    question: "下列压缩过程耗功最大的是（    ）",
    options: ["等温压缩", "绝热压缩", "多变压缩", "变温压缩"],
    answer: 1,
    explanation: "绝热压缩过程耗功最大。"
  },
  {
    id: "single164",
    type: "single",
    question: "冷冻系统中,液氨节流后温度（  ）。",
    options: ["降低", "不变", "升高", "无法确定"],
    answer: 0,
    explanation: "冷冻系统中液氨节流后压力降低，温度降低。"
  },
  {
    id: "single165",
    type: "single",
    question: "一般地说,冷凝器出液氨是处于（  ）状态。",
    options: ["饱和", "过冷", "过热", "无法确定"],
    answer: 0,
    explanation: "冷凝器出液氨一般处于饱和状态。"
  },
  {
    id: "single166",
    type: "single",
    question: "冷凝器中冷却水温降低时,会使冷凝压力（  ）。",
    options: ["降低", "提高", "不变", "按指数规律增大"],
    answer: 0,
    explanation: "冷却水温降低，冷凝温度降低，冷凝压力降低。"
  },
  {
    id: "single167",
    type: "single",
    question: "制冷压缩机的主要作用是对制冷剂蒸气进行（　）。",
    options: ["吸气", "排气", "压缩", "做功"],
    answer: 3,
    explanation: "制冷压缩机主要作用是对制冷剂蒸气做功。"
  },
  {
    id: "single168",
    type: "single",
    question: "大、中型冷水机组中的水冷式冷凝器多采用（　）换热器结构。",
    options: ["壳管式", "套管式", "肋片管式", "板式"],
    answer: 0,
    explanation: "大、中型冷水机组水冷式冷凝器多采用壳管式换热器。"
  },
  {
    id: "single169",
    type: "single",
    question: "某工艺要求测量范围在0～300℃,最大绝对误差不能大于±4℃,所选仪表的精确度为（   ）。",
    options: ["0.5", "1.0", "1.5", "4.0"],
    answer: 1,
    explanation: "测量范围 0~300℃，最大绝对误差±4℃，选 1.0 级精度。"
  },
  {
    id: "single170",
    type: "single",
    question: "压力表的使用范围一般在量程的1/3-2/3处,如果低于1/3,则（   ）。",
    options: ["因压力过低,仪表没有指示", "精度等级下降", "相对误差增加", "压力表接头处焊口有漏"],
    answer: 2,
    explanation: "压力表低于量程 1/3 使用时，相对误差增加。"
  },
  {
    id: "single171",
    type: "single",
    question: "积分调节的作用是（   ）。",
    options: ["消除余差", "及时有力", "超前", "以上三个均对"],
    answer: 0,
    explanation: "积分调节的作用是消除余差。"
  },
  {
    id: "single172",
    type: "single",
    question: "在自动控制系统中,仪表之间的信息传递都采用统一的信号,它的范围是（   ）。",
    options: ["0-10Ma", "4-20mA", "0-10V", "0-5V"],
    answer: 1,
    explanation: "自动控制系统中仪表间统一信号范围为 4~20mA。"
  },
  {
    id: "single173",
    type: "single",
    question: "某控制系统中,为使控制作用具有预见性,需要引入（   ）调节规律。",
    options: ["PD", "PI", "P", "I"],
    answer: 0,
    explanation: "为使控制作用具有预见性，需引入 PD（比例微分）调节规律。"
  },
  {
    id: "single174",
    type: "single",
    question: "在热电偶测温时,采用补偿导线的作用是（   ）。",
    options: ["冷端温度补偿", "冷端的延伸", "热电偶与显示仪表的连接", "热端温度补偿"],
    answer: 1,
    explanation: "热电偶测温时补偿导线的作用是冷端的延伸。"
  },
  {
    id: "single175",
    type: "single",
    question: "控制系统中控制器正、反作用的确定依据（   ）。",
    options: ["实现闭环回路正反馈", "系统放大倍数合适", "生产的安全性", "实现闭环回路负反馈"],
    answer: 3,
    explanation: "控制器正、反作用确定依据是实现闭环回路负反馈。"
  },
  {
    id: "single176",
    type: "single",
    question: "测高温介质或水蒸气的压力时要安装（   ）。",
    options: ["冷凝器", "隔离罐", "集气器", "沉降器"],
    answer: 0,
    explanation: "测高温介质或水蒸气压力时要安装冷凝器。"
  },
  {
    id: "single177",
    type: "single",
    question: "在选择控制阀的气开和气关型式时,应首先从（   ）考虑。",
    options: ["产品质量", "产品产量", "安全", "节约"],
    answer: 2,
    explanation: "选择控制阀气开/气关型式应首先从安全考虑。"
  },
  {
    id: "single178",
    type: "single",
    question: "测量氨气的压力表,其弹簧管应用（   ）材料。",
    options: ["不锈钢", "钢", "铜", "铁"],
    answer: 0,
    explanation: "测量氨气压力表弹簧管应用不锈钢材料。"
  },
  {
    id: "single179",
    type: "single",
    question: "压力表安装时,测压点应选择在被测介质（   ）的管段部分。",
    options: ["直线流动", "管路拐弯", "管路分叉", "管路的死角"],
    answer: 0,
    explanation: "压力表测压点应选择在被测介质直线流动的管段部分。"
  },
  {
    id: "single180",
    type: "single",
    question: "在利用热电阻传感器检测温度时,热电阻与仪表之间采用（   ）连接。",
    options: ["二线制", "三线制", "四线制", "五线制"],
    answer: 1,
    explanation: "热电阻与仪表之间采用三线制连接。"
  },
  {
    id: "single181",
    type: "single",
    question: "热电偶测温时,使用补偿导线是为了（   ）。",
    options: ["延长热电偶", "使参比端温度为0℃", "作为连接导线", "延长热电偶且保持参比端温度为0℃"],
    answer: 0,
    explanation: "热电偶使用补偿导线是为了延长热电偶（延伸冷端）。"
  },
  {
    id: "single182",
    type: "single",
    question: "与热电阻配套使用的动圈式显示仪表,为保证仪表指示的准确性,热电阻应采用三线制连接,并且每根连接导线的电阻取（   ）。",
    options: ["15Ω", "25Ω", "50Ω", "5Ω"],
    answer: 3,
    explanation: "热电阻三线制连接，每根连接导线电阻取 5Ω。"
  },
  {
    id: "single183",
    type: "single",
    question: "DDZ--Ⅲ型电动单元组合仪表的标准统一信号和电源为（   ）。",
    options: ["0-10mA,220VAC", "4-20mA,24VDC", "4-20mA,220VAC", "0-10mA,24VDC"],
    answer: 1,
    explanation: "DDZ-III 型仪表标准统一信号为 4~20mA，电源 24VDC。"
  },
  {
    id: "single184",
    type: "single",
    question: "减压蒸发不具有的优点是（   ）。",
    options: ["减少传热面积", "可蒸发不耐高温的溶液", "提高热能利用率", "减少基建费和操作费"],
    answer: 3,
    explanation: "减压蒸发设备复杂，不能减少基建费和操作费。"
  },
  {
    id: "single185",
    type: "single",
    question: "下列蒸发器,溶液循环速度最快的是（   ）。",
    options: ["标准式", "悬框式", "列文式", "强制循环式"],
    answer: 3,
    explanation: "强制循环式蒸发器溶液循环速度最快。"
  },
  {
    id: "single186",
    type: "single",
    question: "下列蒸发器不属于循环型蒸发器的是（   ）。",
    options: ["升膜式", "列文式", "外热式", "标准型"],
    answer: 0,
    explanation: "升膜式蒸发器不属于循环型蒸发器。"
  },
  {
    id: "single187",
    type: "single",
    question: "用一单效蒸发器将2000kg/h的Nacl水溶液由11%浓缩至25%（均为质量%）,则所需蒸发的水分量为（   ）。",
    options: ["1120kg/h", "1210 kg/h", "280 kg/h", "2000 kg/h"],
    answer: 0,
    explanation: "W=F(1-x0/x1)=2000×(1-11/25)=1120kg/h。"
  },
  {
    id: "single188",
    type: "single",
    question: "提高蒸发器生产强度的主要途径是增大（   ）。",
    options: ["传热温度差", "加热蒸汽压力", "传热系数", "传热面积"],
    answer: 2,
    explanation: "提高蒸发器生产强度主要途径是增大传热系数。"
  },
  {
    id: "single189",
    type: "single",
    question: "把80kg的12.5％的NaCl溶液蒸发浓缩,使其百分比浓度变为25％,需蒸发水量为（   ）。",
    options: ["20kg", "30kg", "40kg", "50 kg"],
    answer: 2,
    explanation: "W=80×(1-12.5/25)=40kg。"
  },
  {
    id: "single190",
    type: "single",
    question: "标准式蒸发器适用于（   ）的溶液的蒸发。",
    options: ["易于结晶", "黏度较大及易结垢", "黏度较小", "不易结晶"],
    answer: 2,
    explanation: "标准式蒸发器适用于黏度较小的溶液蒸发。"
  },
  {
    id: "single191",
    type: "single",
    question: "随着溶液的浓缩,溶液中有微量结晶生成,且这种溶液又较易分解。对于处理这种物料应选用的蒸发器为（   ）。",
    options: ["中央循环管式", "列文式", "升膜式", "强制循环式"],
    answer: 2,
    explanation: "溶液浓缩有微量结晶且易分解，应选用升膜式蒸发器。"
  },
  {
    id: "single192",
    type: "single",
    question: "适用于处理高粘度、易结垢或者有结晶析出的溶液的蒸发器（   ）。",
    options: ["中央循环管式", "强制循环式、刮板式", "膜式", "刮板式、悬筐式"],
    answer: 1,
    explanation: "高粘度、易结垢或有结晶析出的溶液宜用强制循环式、刮板式蒸发器。"
  },
  {
    id: "single193",
    type: "single",
    question: "膜式蒸发器中,适用于易结晶、结垢物料的是（   ）。",
    options: ["升膜式蒸发器", "降膜式蒸发器", "升降膜式蒸发器", "回转式薄膜蒸发器"],
    answer: 3,
    explanation: "膜式蒸发器中，回转式薄膜蒸发器适用于易结晶、结垢物料。"
  },
  {
    id: "single194",
    type: "single",
    question: "什么是道德？正确的解释是（    ）。",
    options: ["人的技术水平", "人的工作能力", "人的行为规范", "人的交往能力"],
    answer: 2,
    explanation: "道德是社会意识形态之一，是人们共同生活及行为的准则和规范。"
  },
  {
    id: "single195",
    type: "single",
    question: "下面有关人的自信和意志在开拓创新中的作用的论述中错误的是(    ) 。",
    options: ["坚定信心不断进取", "坚定意志不断奋斗", "人有多大胆,地有多大产", "有志者事竟成"],
    answer: 2,
    explanation: "“人有多大胆，地有多大产”夸大主观能动性，论述错误。"
  },
  {
    id: "single196",
    type: "single",
    question: "下列滴定方法不属于滴定分析类型的是(  )。",
    options: ["酸碱滴定法", "浓差滴定法", "配位滴定法", "氧化还原滴定法"],
    answer: 1,
    explanation: "滴定分析类型包括酸碱、配位、氧化还原、沉淀滴定，浓差滴定法不属于。"
  },
  {
    id: "single197",
    type: "single",
    question: "下列物质中属于酸碱指示剂的是(  )。",
    options: ["钙指示剂", "铬黑T", "甲基红", "二苯胺"],
    answer: 2,
    explanation: "甲基红属于酸碱指示剂。"
  },
  {
    id: "single198",
    type: "single",
    question: "在酸性溶液中用高锰酸钾标准溶液滴定草酸盐反应的催化剂是(  )。",
    options: ["KMnO4", "Mn2+", "MnO2", "Ca2+"],
    answer: 1,
    explanation: "高锰酸钾滴定草酸盐反应的催化剂是 Mn²⁺。"
  },
  {
    id: "single199",
    type: "single",
    question: "下列各项措施中可以减小随机误差的是(  )。",
    options: ["进行称量器的校正", "空白试验", "对照试验", "增加测定次数"],
    answer: 3,
    explanation: "增加测定次数可以减小随机误差。"
  },
  {
    id: "single200",
    type: "single",
    question: "在滴定分析法测定中出现的下列情况,导致系统误差的是(  )。",
    options: ["试样未经充分混匀", "砝码未经校正", "滴定管的读数读错", "滴定时有液体溅出"],
    answer: 1,
    explanation: "砝码未经校正属于仪器误差，导致系统误差。"
  },
  {
    id: "single201",
    type: "single",
    question: "对于二组分系统能平衡共存的最多相数为(    )。",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explanation: "二组分系统最多可有 4 相共存（如低共熔点、包晶点等无变量点）。"
  },
  {
    id: "single202",
    type: "single",
    question: "氨在金属钨表面分解,当氨的浓度增大一倍,其反应速度没有变化,则该反应属(    )级反应。",
    options: ["0", "1", "2", "无法判断"],
    answer: 0,
    explanation: "氨浓度增大一倍，反应速率不变，说明反应速率与浓度无关，为零级反应。"
  },
  {
    id: "single203",
    type: "single",
    question: "一反应物在某条件下的最大转化率为35%,若在相同条件下,加入正催化剂,则它的转化率将(    )。",
    options: ["大于35%", "等于35%", "小于35%", "无法判知"],
    answer: 1,
    explanation: "催化剂只加快反应速率，不改变平衡转化率。"
  },
  {
    id: "single204",
    type: "single",
    question: "使用质量作用定律的条件是(    )。",
    options: ["基元反应", "非基元反应", "基元反应,非基元反应均可", "变温下发生的"],
    answer: 0,
    explanation: "质量作用定律只适用于基元反应。"
  },
  {
    id: "single205",
    type: "single",
    question: "下列说法正确的是(    )。",
    options: ["反应速度常数的大小,表示反应速度的大小", "反应级数与反应分子数是同义词", "反应级数越大,反应速度越大", "反应速度常数与反应的活化能有关"],
    answer: 3,
    explanation: "速率常数与活化能有关，与浓度无关；反应级数与反应分子数不是同义词。"
  },
  {
    id: "single206",
    type: "single",
    question: "对于非基元反应,(    )。",
    options: ["速度方程可由化学方程式导出", "反应级数只能是正整数", "反应速度决定于最慢的基元反应", "一般由三个基元反应构成"],
    answer: 2,
    explanation: "非基元反应速率由最慢的基元反应（控制步骤）决定。"
  },
  {
    id: "single207",
    type: "single",
    question: "将等物质的量的SO2、H2S于常温下在定容的密闭容器中充分反应后恢复到常温,容器内是原压强的(    )。",
    options: ["1/2", "1/4", "<1／4", ">1／4"],
    answer: 1,
    explanation: "2H₂S + SO₂ = 3S↓ + 2H₂O，等物质的量反应后气体剩余 1/4。"
  },
  {
    id: "single208",
    type: "single",
    question: "H2、N2、O2三种理想气体分别盛于三个容器中,当温度和密度相同时,这三种气体的压强关系是(    )。",
    options: ["PH2=PN2=PO2", "PH2>PN2>PO2", "PH2<PN2<PO2", "不能判断大小"],
    answer: 1,
    explanation: "温度、密度相同时，压强与摩尔质量成反比，故 pH₂ > pN₂ > pO₂。"
  },
  {
    id: "single209",
    type: "single",
    question: "对可逆反应来说,其正反应和逆反应的平衡常数间的关系为(    )。",
    options: ["相等", "二者正、负号相反", "二者之和为1", "二者之积为1"],
    answer: 3,
    explanation: "正逆反应平衡常数互为倒数，乘积为 1。"
  },
  {
    id: "single210",
    type: "single",
    question: "一定量的某气体,压力增为原来的4倍,绝对温度是原来的2倍,那么气体体积变化的倍数是(  )。",
    options: ["8", "2", "1／2", "1/8"],
    answer: 2,
    explanation: "由 PV=nRT，V∝T/P，T 变 2 倍、P 变 4 倍，体积变为原来的 1/2。"
  },
  {
    id: "single211",
    type: "single",
    question: "锌钡白是种白色颜料,其主要成分是难溶于水的锌盐和钡盐,它们是     。",
    options: ["ZnCO3和BaCl2", "ZnCl2和BaCO3", "ZnS和BaSO4", "ZnCO3和Ba(NO3)2"],
    answer: 2,
    explanation: "锌钡白主要成分是 ZnS 和 BaSO₄。"
  },
  {
    id: "single212",
    type: "single",
    question: "体积为1L的干燥烧瓶中用排气法收集HCl后,测得烧瓶内气体对氧气的相对密度为1.082。用此烧瓶做喷泉实验,当喷泉停止后进入烧瓶液体的体积是(  )。",
    options: ["1L", "3／4 L", "1／2 L", "1／4 L"],
    answer: 1,
    explanation: "收集 HCl 后相对密度 1.082，说明混入空气，喷泉实验进入液体体积为 3/4 L。"
  },
  {
    id: "single213",
    type: "single",
    question: "除去混在Na2CO3粉末中的少量NaHCO3最合理的方法是(  )。",
    options: ["加热", "加NaOH溶液", "加盐酸", "加CaCl2溶液"],
    answer: 0,
    explanation: "加热可使 NaHCO₃ 分解为 Na₂CO₃，最合理。"
  },
  {
    id: "single214",
    type: "single",
    question: "用下列(  )物质处理ZnO原料,可将杂质CuO、Fe2O3、PbO的从ZnO原料中的除去。",
    options: ["H2SO4", "HCl", "NaOH", "Na2CO3"],
    answer: 2,
    explanation: "ZnO 为两性氧化物可溶于 NaOH，而 CuO、Fe₂O₃、PbO 不溶，可除去。"
  },
  {
    id: "single215",
    type: "single",
    question: "下列叙述错误的是(  )。",
    options: ["单质铁及铁盐在许多场合可用作催化剂", "铁对氢氧化钠较为稳定,小型化工厂可用铁锅熔碱", "根据Fe3+和SCN-以不同比例结合显现颜色不同,可用目视比色法测定Fe3+含量", "实际上锰钢的主要成分是锰"],
    answer: 3,
    explanation: "锰钢主要成分仍是铁，锰是合金元素。"
  },
  {
    id: "single216",
    type: "single",
    question: "向Al2(SO4)3和CuSO4的混合溶液中放入一个铁钉,其变化是(  )。",
    options: ["生成Al、H2和Fe2+", "生成Al、Cu和Fe2+", "生成Cu和Fe2+", "生成Cu和Fe2+"],
    answer: 2,
    explanation: "铁钉置换出 Cu，生成 Fe²⁺，Al 不参与反应。"
  },
  {
    id: "single217",
    type: "single",
    question: "下列关于氨的性质的叙述中,错误的是(  )。",
    options: ["金属钠可取代干燥氨气中的氢原子,放出氢气", "氨气可在空气中燃烧生成氮气和水", "以NH2-取代COCl2中的氯原子,生成CO(NH2)2", "氨气与氯化氢气体相遇,可生成白烟。"],
    answer: 1,
    explanation: "氨气不能在空气中燃烧。"
  },
  {
    id: "single218",
    type: "single",
    question: "下列各组离子中,能大量共存于同一溶液中的是(  )。",
    options: ["CO32-、H+、Na+、NO3-", "NO3-、SO42-、K+、Na+", "H+、Ag+、SO42-、Cl-", "Na+、NH4+、Cl-、OH-"],
    answer: 1,
    explanation: "NO₃⁻、SO₄²⁻、K⁺、Na⁺ 之间不反应，可大量共存。"
  },
  {
    id: "single219",
    type: "single",
    question: "酸雨主要是燃烧含硫燃料时释放出的SO2造成的,收集一定量的雨水每隔一段时间测定酸雨的pH,随时间的推移测得pH(  )。",
    options: ["逐渐变大", "逐渐变小至某一定值", "不变", "无法判断是否变化"],
    answer: 1,
    explanation: "酸雨放置过程中继续氧化，pH 逐渐变小至某一定值。"
  },
  {
    id: "single220",
    type: "single",
    question: "SO2和Cl2都具有漂白作用,若将等物质的量的两种气体混合,在作用于潮湿的有色物质,则可观察到有色物质(  )。",
    options: ["立即褪色", "慢慢褪色", "先褪色后恢复原色", "不褪色"],
    answer: 3,
    explanation: "SO₂ + Cl₂ + 2H₂O = 2HCl + H₂SO₄，混合后失去漂白性。"
  },
  {
    id: "single221",
    type: "single",
    question: "用ZnCl2浓溶液清除金属表面的氧化物,利用的是它的(  )。",
    options: ["氧化性", "还原性", "配位性", "碱性"],
    answer: 2,
    explanation: "ZnCl₂ 与金属氧化物形成配合物而除锈，利用配位性。"
  },
  {
    id: "single222",
    type: "single",
    question: "加热氯酸钾制氧气时,错把高锰酸钾当作二氧化锰放入氯酸钾内,其结果与只加热氯酸钾相比,正确的是（    ）。",
    options: ["反应速率不变", "生成氧气质量不变", "反应速率加快,生成氧气质量不变", "反应速率加快,生成氧气质量增加"],
    answer: 3,
    explanation: "高锰酸钾分解产生 MnO₂ 催化氯酸钾分解，且自身产生氧气，故速率加快、氧气质量增加。"
  },
  {
    id: "single223",
    type: "single",
    question: "用石墨作电极,电解1mol/L下列物质的溶液,溶液的pH值保持不变的是   。",
    options: ["HCl", "NaOH", "Na2SO4", "NaCl"],
    answer: 2,
    explanation: "电解 Na₂SO₄ 溶液实质是电解水，pH 不变。"
  },
  {
    id: "single224",
    type: "single",
    question: "90℃时水的离子积Kw＝3.8×10⁻¹³,该温度时纯水的pH值    。",
    options: ["等于7", "小于7", "大于7", "无法确定"],
    answer: 1,
    explanation: "90℃ 时 Kw 增大，c(H⁺)≈6.2×10⁻⁷，pH≈6.2 < 7。"
  },
  {
    id: "single225",
    type: "single",
    question: "pH值和体积都相同的醋酸和硫酸,分别跟足量的碳酸钠溶液反应,在相同条件下,放出二氧化碳气体的体积是",
    options: ["一样多", "醋酸比硫酸多", "硫酸比醋酸多", "无法比较"],
    answer: 1,
    explanation: "醋酸为弱酸，pH 相同时总酸量更多，放出 CO₂ 更多。"
  },
  {
    id: "single226",
    type: "single",
    question: "下列四种物质,只能跟NaOH溶液作用,不能跟盐酸作用的是   。",
    options: ["NaHS", "NaAlO2", "KHSO4", "CH3COONH4"],
    answer: 2,
    explanation: "KHSO₄ 只能与 NaOH 反应，不与盐酸反应。"
  },
  {
    id: "single227",
    type: "single",
    question: "下列物质的溶液中,不易被氧化、不易分解,且能存放在玻璃瓶中的是   。",
    options: ["氢氟酸", "次氯酸", "石碳酸", "醋酸"],
    answer: 3,
    explanation: "醋酸性质稳定，可用玻璃瓶存放。"
  },
  {
    id: "single228",
    type: "single",
    question: "若物系的界面张力σ与两相密度差Δρ的比值（σ/Δρ）大,宜选用（   ）萃取设备。",
    options: ["无外能输入的设备", "有外能输入的设备", "塔径大的设备", "都合适"],
    answer: 1,
    explanation: "σ/Δρ 大时液滴难分散，宜选用有外能输入的设备。"
  },
  {
    id: "single229",
    type: "single",
    question: "维持萃取塔正常操作要注意的事项不包括（   ）。",
    options: ["减少返混", "防止液泛", "防止漏液", "两相界面高度要维持稳定"],
    answer: 0,
    explanation: "减少返混是改善操作的措施，不是维持正常操作的必要注意事项。"
  },
  {
    id: "single230",
    type: "single",
    question: "下列不属于多级逆流接触萃取的特点是（   ）。",
    options: ["连续操作", "平均推动力大", "分离效率高", "溶剂用量大"],
    answer: 3,
    explanation: "多级逆流萃取溶剂用量小，不是用量大。"
  },
  {
    id: "single231",
    type: "single",
    question: "氨水的摩尔分率为20%,而它的比摩尔分率应是（   ）%。",
    options: ["15", "20", "25", "30"],
    answer: 2,
    explanation: "比摩尔分率 Y = y/(1-y) = 0.2/0.8 = 0.25，即 25%。"
  },
  {
    id: "single232",
    type: "single",
    question: "酒精和水的混合物中,酒精的质量为15kg,水的质量为25kg,酒精的摩尔分率为   （酒精分子量为46,水分子量为18）。",
    options: ["0.89", "0.19", "0.81", "0.11"],
    answer: 1,
    explanation: "酒精摩尔数 15/46≈0.326，水 25/18≈1.389，摩尔分率≈0.19。"
  },
  {
    id: "single233",
    type: "single",
    question: "吸收混合气中苯,已知摩尔分数y1=0.04,吸收率是80%,则比摩尔分数Y1、Y2是（   ）。",
    options: ["0.04167kmol苯/kmol惰气 0.00833 kmol苯/kmol惰气", "0.02kmol苯/kmol惰气 0.005 kmol苯/kmol惰气", "0.04167kmol苯/kmol惰气 0.02 kmol苯/kmol惰气", "0.0831kmol苯/kmol惰气 0.002 kmol苯/kmol惰气"],
    answer: 0,
    explanation: "Y₁=0.04/0.96≈0.04167，Y₂=Y₁×(1-0.8)≈0.00833。"
  },
  {
    id: "single234",
    type: "single",
    question: "对难溶气体,如欲提高其吸收速率,较有效的手段是（   ）。",
    options: ["增大液相流速", "增大气相流速", "减小液相流速", "减小气相流速"],
    answer: 0,
    explanation: "难溶气体为液膜控制，增大液相流速可提高吸收速率。"
  },
  {
    id: "single235",
    type: "single",
    question: "下列类推正确的是     。",
    options: ["原子和分子均是微观粒子,原子在化学变化中不能再分,则分子在化学变化中也不能再分", "锌和铜均是金属,锌能与稀硫酸反应放出氢气,则铜也能与稀硫酸反应放出氢气", "金刚石和石墨都是碳的单质,金刚石十分坚硬,则石墨也十分坚硬", "硫酸与盐酸均是酸,H2SO4在水溶液中能电离出H+,则HCl在水溶液中也能电离出H+"],
    answer: 3,
    explanation: "A 项错：分子在化学变化中可以再分。B 项错：铜不与稀硫酸反应。C 项错：石墨硬度很小，不能由金刚石坚硬推出石墨也坚硬。D 项正确：硫酸和盐酸都是酸，都能电离出 H⁺，类推合理。"
  },
  {
    id: "single236",
    type: "single",
    question: "CO和CO2中,相同的是（     ）。",
    options: ["碳元素的百分含量", "原子种类", "原子个数比", "元素质量比"],
    answer: 1,
    explanation: "CO 和 CO₂ 都由碳、氧两种原子构成。"
  },
  {
    id: "single237",
    type: "single",
    question: "19世纪中叶,门捷列夫的突出贡献是     。",
    options: ["提出原子学说", "发现元素周期律", "提出分子学说", "发现氧气"],
    answer: 1,
    explanation: "门捷列夫发现元素周期律。"
  },
  {
    id: "single238",
    type: "single",
    question: "常温下,在15g氯化钠中加入60g水,完全溶解后,溶液中氯化钠的质量分数为    。",
    options: ["15％", "20％", "25％", "33.3％"],
    answer: 1,
    explanation: "15/(15+60)=20%。"
  },
  {
    id: "single239",
    type: "single",
    question: "某工厂常用1体积的浓硫酸(密度为1.84g/cm3,溶质的质量分数为98%)和7体积蒸馏水混合来配制体积比浓度为1:7的稀硫酸,该稀硫酸中溶质的质量分数最接近于 (     )",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
    explanation: "浓硫酸 1 体积、水 7 体积混合，质量分数约为 20%。"
  },
  {
    id: "single240",
    type: "single",
    question: "下列物质的水溶液呈碱性的是(  )。",
    options: ["氯化钙", "硫酸钠", "甲醇", "碳酸氢钠"],
    answer: 3,
    explanation: "碳酸氢钠水解显碱性。"
  },
  {
    id: "single241",
    type: "single",
    question: "下列叙述中,正确的是（    ）。",
    options: ["升高温度时,饱和溶液一定变成不饱和溶液", "降低温度时,不饱和食盐水可能变成饱和食盐水", "有晶体析出的一定是浓溶液", "用加热蒸发的方法,能使医用酒精变成无水酒精"],
    answer: 1,
    explanation: "降低温度时，不饱和食盐水可能达到饱和。"
  },
  {
    id: "single242",
    type: "single",
    question: "为配制 NH4+ 的浓度与 Cl- 的浓度比为 1∶1的溶液,可在NH4Cl溶液中加入    。①适量的HCl  ②适量的NaCl  ③适量的氨水  ④适量的NaOH",
    options: ["①②", "③", "③④", "④"],
    answer: 1,
    explanation: "加入适量氨水可抑制 NH₄⁺ 水解，使 NH₄⁺ 与 Cl⁻ 浓度比接近 1:1。"
  },
  {
    id: "single243",
    type: "single",
    question: "下列溶液一定是碱性的是    。",
    options: ["溶液中cOH＞cH+", "溶液中含有OH", "滴加甲基橙后溶液显红色", "滴加甲基橙后溶液显黄色"],
    answer: 0,
    explanation: "c(OH⁻) > c(H⁺) 时溶液一定呈碱性。"
  },
  {
    id: "single244",
    type: "single",
    question: "下列物质的水溶液能导电,但属于非电解质的是    。",
    options: ["CH3CH2COOH", "Cl2", "NH4HCO3", "SO2"],
    answer: 3,
    explanation: "SO₂ 本身不电离，溶于水生成亚硫酸导电，属于非电解质。"
  },
  {
    id: "single245",
    type: "single",
    question: "某制药厂尾气中含少量SO2气体,一般用NaOH溶液或氨水吸收,以防污染环境。分别用0.1mol/L的NaOH溶液或同浓度的氨水处理相同量的尾气,两种方法所需吸收液的体积关系是    。",
    options: ["NaOH溶液的体积大于氨水", "NaOH溶液的体积等于氨水", "NaOH溶液的体积小于氨水", "无法判断"],
    answer: 1,
    explanation: "NaOH 与氨水均为一元碱，同浓度处理相同尾气所需体积相等。"
  },
  {
    id: "single246",
    type: "single",
    question: "以下是几种酸碱指示剂变色的pH范围：①甲基橙3.1～4.4,②甲基红4.4～6.2,③酚酞8.2～10,现用0.1000 mol·L⁻¹ NaOH溶液滴定浓度相近的甲酸时,上述指示剂",
    options: ["都可以用", "只能用③", "可以用①或②", "可以用②或③"],
    answer: 1,
    explanation: "NaOH 滴定甲酸，终点 pH 约 8~9，只能用酚酞。"
  },
  {
    id: "single247",
    type: "single",
    question: "从溶液的组成上分,溶液可分为（     ）。",
    options: ["气体溶液", "气体溶液和液体溶液", "液体溶液和固体溶液", "气体溶液、液体溶液和固体溶液"],
    answer: 3,
    explanation: "按组成可分为气态、液态和固态溶液。"
  },
  {
    id: "single248",
    type: "single",
    question: "下列性质属于金属共性的是     。",
    options: ["硬度很大、熔点很高", "有良好的导电性、传热性", "是银白色的固体", "易与酸反应产生氢气"],
    answer: 1,
    explanation: "良好的导电、导热性是金属共性。"
  },
  {
    id: "single249",
    type: "single",
    question: "物质的用途与性质密切相关,下列说法不正确的是     。",
    options: ["氮气常用作保护气,是由于氮气的化学性质不活泼", "洗涤剂常用来洗涤油污,是因为洗涤剂有乳化功能", "铁制栏杆表面常涂“银粉漆”（铝粉）防生锈,是由于铝的化学性质比铁稳定。", "C、CO、H2常用来冶炼金属,是因为它们都具有还原性"],
    answer: 2,
    explanation: "铝的化学性质比铁活泼，涂铝粉防锈是因为氧化膜致密。"
  },
  {
    id: "single250",
    type: "single",
    question: "蚁酸的化学性质与盐酸相似,能腐蚀很多物质。下列最不容易被蚁酸腐蚀的是",
    options: ["镀锌水管", "铜制塑像", "大理石栏杆", "铝合金门窗"],
    answer: 1,
    explanation: "铜与酸不反应，最不易被蚁酸腐蚀。"
  },
  {
    id: "single251",
    type: "single",
    question: "比较煤与石油,下列说法正确的是(     )",
    options: ["都是化石燃料", "都是含有碳元素的有机物", "综合利用的途径相同", "都可直接用作家用燃料"],
    answer: 0,
    explanation: "煤和石油都是化石燃料。"
  },
  {
    id: "single252",
    type: "single",
    question: "一般情况下,安全帽能抗（   ）kg铁锤自1m高度落下的冲击。",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "安全帽一般能抗 3kg 铁锤自 1m 高度落下的冲击。"
  },
  {
    id: "single253",
    type: "single",
    question: "为了保证化工厂的用火安全,动火现场的厂房内和容器内可燃物应保证在百分之（   ）和（   ）以下。",
    options: ["0.1,0.2", "0.2,0.01", "0.2,0.1", "0.1,0.02"],
    answer: 2,
    explanation: "动火现场厂房内可燃物应低于 0.2%，容器内低于 0.1%。"
  },
  {
    id: "single254",
    type: "single",
    question: "使用过滤式防毒面具要求作业现场空气中的氧含量不低于（   ）。",
    options: ["16%", "17%", "18%", "19%"],
    answer: 2,
    explanation: "氧含量不低于 18% 方可使用过滤式防毒面具。"
  },
  {
    id: "single255",
    type: "single",
    question: "保护听力而言,一般认为每天8小时长期工作在（   ）分贝以下,听力不会损失。",
    options: ["110", "100", "80", "90"],
    answer: 2,
    explanation: "长期工作环境噪声应低于 80 分贝。"
  },
  {
    id: "single256",
    type: "single",
    question: "对人体危害最大的电流频率为（   ）。",
    options: ["20－30Hz", "50－60Hz", "80－90Hz", "100－120Hz"],
    answer: 1,
    explanation: "人体危害最大的电流频率为 50~60Hz（工频）。"
  },
  {
    id: "single257",
    type: "single",
    question: "为了消除噪声的污染,除采取从传播途径上控制外,还可以用耳塞作为个人的防护用品,通常耳塞的隔声值可达。",
    options: ["20－30分贝", "30－40分贝", "40－50分贝", "50－60分贝"],
    answer: 0,
    explanation: "耳塞隔声值通常可达 20—30 分贝。"
  },
  {
    id: "single258",
    type: "single",
    question: "气态污染物的治理方法有（   ）。",
    options: ["沉淀", "吸收法", "浮选法", "分选法"],
    answer: 1,
    explanation: "吸收法是气态污染物治理的常用方法。"
  },
  {
    id: "single259",
    type: "single",
    question: "不适合废水的治理方法是（   ）。",
    options: ["过滤法", "生物处理法", "固化法", "萃取法"],
    answer: 2,
    explanation: "固化法主要用于处理固体废物，不适合废水治理。"
  },
  {
    id: "single260",
    type: "single",
    question: "化工污染物都是在生产过程中产生的,其主要来源（   ）。",
    options: ["化学反应副产品,化学反应不完全", "燃烧废气,产品和中间产品", "化学反应副产品,燃烧废气,产品和中间产品", "化学反应不完全的副产品,燃烧废气,产品和中间产品"],
    answer: 3,
    explanation: "化工污染物主要来自化学反应不完全的副产品、燃烧废气以及产品和中间产品。"
  },
  {
    id: "single261",
    type: "single",
    question: "环保监测中的COD表示（   ）。",
    options: ["生化需氧量", "化学耗氧量", "空气净化度", "噪音强度"],
    answer: 1,
    explanation: "COD 表示化学耗氧量（化学需氧量）。"
  },
  {
    id: "single262",
    type: "single",
    question: "在生产过程中,控制尘毒危害的最重要的方法是（   ）。",
    options: ["生产过程密闭化", "通风", "发放保健食品", "使用个人防护用品"],
    answer: 0,
    explanation: "控制尘毒危害最重要的方法是改革工艺、密闭化、自动化。"
  },
  {
    id: "single263",
    type: "single",
    question: "芳香族苯环上的三种异构体的毒性大小次序为（   ）。",
    options: ["对位＞间位＞邻位", "间位＞对位＞邻位", "邻位＞对位＞间位", "邻位＞间位＞对位"],
    answer: 0,
    explanation: "苯环异构体毒性一般为对位 > 间位 > 邻位。"
  },
  {
    id: "single264",
    type: "single",
    question: "当氧化铜中混有少量炭粉时,提纯的方法是（    ）。",
    options: ["隔绝空气加热混合物", "在氢气流中加热混合物", "在氧气流中加热混合物", "加入足量盐酸,待反应终止后过滤"],
    answer: 2,
    explanation: "在氧气流中加热可将炭粉氧化为 CO₂ 除去。"
  },
  {
    id: "single265",
    type: "single",
    question: "下列说法正确的是（    ）。",
    options: ["碳单质都是黑色固体", "无定形碳都是纯碳单质", "碳在空气中燃烧可能生成一氧化碳", "碳在不充分燃烧时吸收热量"],
    answer: 2,
    explanation: "碳在空气中不充分燃烧可生成 CO。"
  },
  {
    id: "single266",
    type: "single",
    question: "起固定氮作用的化学反应是     。",
    options: ["氮气与氢气在一定条件下反应生成氨气", "一氧化氮与氧气反应生成二氧化氮", "氨气经催化氧化生成一氧化氮", "由氨气制碳酸氢铵和硫酸铵"],
    answer: 0,
    explanation: "氮气与氢气反应生成氨，属于固定氮。"
  },
  {
    id: "single267",
    type: "single",
    question: "下列物质中,不属于合金的是    。",
    options: ["硬铝", "黄铜", "钢铁", "水银"],
    answer: 3,
    explanation: "水银是金属汞单质，不是合金。"
  },
  {
    id: "single268",
    type: "single",
    question: "下列晶体中,不属于原子晶体的是     。",
    options: ["干冰", "水晶", "晶体硅", "金刚石"],
    answer: 0,
    explanation: "干冰是分子晶体；水晶（SiO₂）、晶体硅、金刚石都是原子晶体。故 A 正确。"
  },
  {
    id: "single269",
    type: "single",
    question: "集体合同立法最早的国家是（  ）。",
    options: ["荷兰", "芬兰", "爱尔兰", "新西兰"],
    answer: 3,
    explanation: "新西兰是最早进行集体合同立法的国家。"
  },
  {
    id: "single270",
    type: "single",
    question: "用人单位自用工之日起超过一个月不满一年未与劳动者订立书面劳动合同的,应当向劳动者每月支付（  ）倍的工资。",
    options: ["一", "二", "三", "四"],
    answer: 1,
    explanation: "应支付二倍工资。"
  },
  {
    id: "single271",
    type: "single",
    question: "用人单位对已经解除或者终止的劳动合同的文本,至少保存（  ）年备查。",
    options: ["一", "二", "三", "五"],
    answer: 1,
    explanation: "劳动合同文本至少保存二年备查。"
  },
  {
    id: "single272",
    type: "single",
    question: "集体合同由（  ）代表企业职工一方与用人单位订立。",
    options: ["工会", "职工代表大会", "监事会", "股东代表大会"],
    answer: 0,
    explanation: "集体合同由工会代表职工一方订立。"
  },
  {
    id: "single273",
    type: "single",
    question: "尚未建立工会的用人单位,集体合同由（  ）指导劳动者推举的代表与用人单位订立。",
    options: ["劳动行政部门", "企业党委", "上级工会", "劳动关系三方协调委员会"],
    answer: 2,
    explanation: "由上级工会指导劳动者推举代表订立。"
  },
  {
    id: "single274",
    type: "single",
    question: "劳动行政部门自收到集体合同文本之日起（  ）内未提出异议的,集体合同即行生效。",
    options: ["十日", "十五日", "三十日", "五日"],
    answer: 1,
    explanation: "十五日内未提出异议即行生效。"
  },
  {
    id: "single275",
    type: "single",
    question: "行业性、区域性集体合同对当地本行业、本区域的（  ）具有约束力。",
    options: ["工会和劳动者", "工会和用人单位", "用人单位和劳动者", "劳动行政部门和劳动者"],
    answer: 2,
    explanation: "对当地本行业、本区域的用人单位和劳动者具有约束力。"
  },
  {
    id: "single276",
    type: "single",
    question: "用人单位与劳动者订立的劳动合同中劳动报酬和劳动条件等标准（  ）集体合同规定的标准。",
    options: ["不得低于", "可以低于", "必须高于", "应当高于"],
    answer: 0,
    explanation: "不得低于集体合同规定的标准。"
  },
  {
    id: "single277",
    type: "single",
    question: "企业职工一方与用人单位可以订立劳动安全卫生、女职工权益保护、工资调整机制等（  ）。",
    options: ["职业集体合同", "纲领性集体合同", "专项集体合同", "不完全集体合同"],
    answer: 2,
    explanation: "属于专项集体合同。"
  },
  {
    id: "single278",
    type: "single",
    question: "劳务派遣单位与被派遣劳动者订立的劳动合同,除应当载明《劳动合同法》第十七条规定的事项外,还应当载明被派遣劳动者的用工单位以及派遣期限、（  ）等情况。",
    options: ["试用期", "培训", "保守秘密", "工作岗位"],
    answer: 3,
    explanation: "还应当载明工作岗位等情况。"
  },
  {
    id: "single279",
    type: "single",
    question: "劳务派遣单位派遣劳动者应当与接受以劳务派遣形式用工的单位订立（  ）。",
    options: ["劳动合同", "集体合同", "用工协议", "劳务派遣协议"],
    answer: 3,
    explanation: "应订立劳务派遣协议。"
  },
  {
    id: "single280",
    type: "single",
    question: "劳务派遣协议应当约定派遣岗位和人员数量、派遣期限、（  ）和社会保险费的数额与支付方式以及违反协议的责任。",
    options: ["试用期", "劳动报酬", "培训", "保守秘密"],
    answer: 1,
    explanation: "劳务派遣协议应约定劳动报酬等。"
  },
  {
    id: "single281",
    type: "single",
    question: "自动控制系统中完成比较、判断和运算功能的仪器是（   ）。",
    options: ["变送器", "执行装置", "检测元件", "控制器"],
    answer: 3,
    explanation: "控制器完成比较、判断和运算。"
  },
  {
    id: "single282",
    type: "single",
    question: "检测、控制系统中字母FRC是指（   ）。",
    options: ["物位显示控制系统", "物位纪录控制系统", "流量显示控制系统", "流量记录控制系统"],
    answer: 3,
    explanation: "FRC 指流量记录控制系统。"
  },
  {
    id: "single283",
    type: "single",
    question: "控制系统中PI调节是指（   ）。",
    options: ["比例积分调节", "比例微分调节", "积分微分调节", "比例调节"],
    answer: 0,
    explanation: "PI 为比例积分调节。"
  },
  {
    id: "single284",
    type: "single",
    question: "PI控制规律是指(   )。",
    options: ["比例控制", "积分控制", "比例积分控制", "微分控制"],
    answer: 2,
    explanation: "PI 控制规律是比例积分控制。"
  },
  {
    id: "single285",
    type: "single",
    question: "热电偶温度计是用（   ）导体材料制成的,插入介质中,感受介质温度。",
    options: ["同一种", "两种不同", "三种不同", "不同四种"],
    answer: 1,
    explanation: "热电偶由两种不同导体材料组成。"
  },
  {
    id: "single286",
    type: "single",
    question: "用电子电位差计配用热电偶测量温度,热端温度升高2℃,室温（冷端温度）下降2℃,则仪表示值（   ）。",
    options: ["升高4℃", "升高2℃", "下降2℃", "下降4℃"],
    answer: 1,
    explanation: "热端升高 2℃，冷端下降 2℃，总温差升高 2℃，示值升高 2℃。"
  },
  {
    id: "single287",
    type: "single",
    question: "转子流量计指示稳定时,其转子上下的压差是由（   ）决定的。",
    options: ["流体的流速", "流体的压力", "转子的重量", "流道截面积"],
    answer: 2,
    explanation: "转子流量计转子上下压差由转子重量决定。"
  },
  {
    id: "single288",
    type: "single",
    question: "热电偶温度计是基于（   ）的原理来测温的。",
    options: ["热阻效应", "热电效应", "热磁效应", "热压效应"],
    answer: 1,
    explanation: "热电偶基于热电效应测温。"
  },
  {
    id: "single289",
    type: "single",
    question: "在总压不变的条件下,将湿空气与不断降温的冷壁相接触,直至空气在光滑的冷壁面上析出水雾,此时的冷壁温度称为（   ）。",
    options: ["湿球温度", "干球温度", "露点", "绝对饱和温度"],
    answer: 2,
    explanation: "此时的冷壁温度称为露点。"
  },
  {
    id: "single290",
    type: "single",
    question: "对于水蒸汽～空气系统,绝热饱和温度与（   ）在数值上近似相等。",
    options: ["湿球温度", "干球温度", "露点", "以上均不正确"],
    answer: 0,
    explanation: "水蒸汽~空气系统中绝热饱和温度与湿球温度近似相等。"
  },
  {
    id: "single291",
    type: "single",
    question: "空气的干、湿球温度差越小,表明空气(   )。",
    options: ["越干燥", "越潮湿", "热焓越高", "热焓越低"],
    answer: 1,
    explanation: "干湿球温差越小，空气越接近饱和，即越潮湿。"
  },
  {
    id: "single292",
    type: "single",
    question: "干燥计算中,湿空气的热焓是以(   )为基础的。",
    options: ["1kg湿空气", "1kg干空气", "1kg饱和湿空气", "4mol干空气"],
    answer: 1,
    explanation: "湿空气热焓以 1kg 干空气为基准。"
  },
  {
    id: "single293",
    type: "single",
    question: "气体的相对湿度是指在一定的总压下湿气体中的湿分蒸汽压与(   )之比。",
    options: ["气体的总压", "湿分在tw下的饱和蒸汽压", "湿分在td下的饱和蒸汽压", "湿分在t下的饱和蒸汽压"],
    answer: 3,
    explanation: "相对湿度为湿分蒸汽压与同温度下饱和蒸汽压之比。"
  },
  {
    id: "single294",
    type: "single",
    question: "萃取操作应包括（   ）。",
    options: ["混合-澄清", "混合-蒸发", "混合-蒸馏", "混合-水洗"],
    answer: 0,
    explanation: "萃取操作包括混合（传质）和澄清（分层）两个基本步骤。"
  },
  {
    id: "single295",
    type: "single",
    question: "对于同样的萃取回收率,单级萃取所需的溶剂量相比多级萃取（   ）。",
    options: ["较小", "较大", "不确定", "相等"],
    answer: 1,
    explanation: "单级萃取所需溶剂量比多级萃取大。"
  },
  {
    id: "single296",
    type: "single",
    question: "混合溶液中待分离组分浓度很低时一般采用（   ）的分离方法。",
    options: ["过滤", "吸收", "萃取", "离心分离"],
    answer: 2,
    explanation: "低浓度组分分离常采用萃取。"
  },
  {
    id: "single297",
    type: "single",
    question: "填料萃取塔的结构与吸收和精馏使用的填料塔基本相同。在塔内装填充物,（   ）。",
    options: ["连续相充满整个塔中,分散相以滴状通过连续相", "分散相充满整个塔中,连续相以滴状通过分散相", "连续相和分散相充满整个塔中,使分散相以滴状通过连续相", "连续相和分散相充满整个塔中,使连续相以滴状通过分散相"],
    answer: 0,
    explanation: "连续相充满塔内，分散相以液滴形式通过连续相。"
  },
  {
    id: "single298",
    type: "single",
    question: "与精馏操作相比,萃取操作不利的是（   ）。",
    options: ["不能分离组分相对挥发度接近于1的混合液", "分离低浓度组分消耗能量多", "不易分离热敏性物质", "流程比较复杂"],
    answer: 3,
    explanation: "萃取流程相对复杂，是其主要不足。"
  },
  {
    id: "single299",
    type: "single",
    question: "将电气设备金属外壳与电源中性线相连接的保护方式称为（   ）。",
    options: ["保护接零", "保护接地", "工作接零", "工作接地"],
    answer: 0,
    explanation: "与电源中性线连接称为保护接零。"
  },
  {
    id: "single300",
    type: "single",
    question: "在一个绝热刚性容器中发生一化学反应,使系统的温度从T1升高到T2,压力从P1升高到P2,则(  )。",
    options: ["Q>0,W>0,ΔU>0", "Q＝0,W＝0,ΔU＝0", "Q＝0,W>0,ΔU<0", "Q>0,W＝0,ΔU>0"],
    answer: 1,
    explanation: "绝热 Q=0，刚性容器 W=0，由热力学第一定律 ΔU=0。"
  },
  {
    id: "multiple1",
    type: "multiple",
    question: "我国规定,用于(     )方面的工作测量仪器属于国家强制检定的管理范围。",
    options: ["贸易结算", "计量科学研究", "安全防护", "医疗卫生", "环境监测"],
    answer: [0, 2, 3, 4],
    explanation: "强制检定范围包括贸易结算、安全防护、医疗卫生、环境监测，不包括计量科学研究。"
  },
  {
    id: "multiple2",
    type: "multiple",
    question: "在我国,以下(     )属于强制检定的管理范围。",
    options: ["用于贸易结算、安全防护、医疗卫生、环境监测且列入相应目录的工作计量器具", "社会公用计量标准", "部门和企事业单位的各项最高计量标准", "企业内部结算用的测量仪器"],
    answer: [0, 1, 2],
    explanation: "强制检定包括社会公用计量标准、部门/企事业单位最高计量标准，以及用于贸易结算等且列入目录的工作计量器具。"
  },
  {
    id: "multiple3",
    type: "multiple",
    question: "测量仪器控制可包括对测量仪器的(     )。",
    options: ["型式批准", "检定", "检验", "校准"],
    answer: [1, 2],
    explanation: "测量仪器控制可包括检定和检验；型式批准、校准不属于此处的“控制”范围。"
  },
  {
    id: "multiple4",
    type: "multiple",
    question: "校准的依据是(     )。",
    options: ["校准规范", "检定规程", "校准证书", "校准方法", "特殊情况下可自行制定"],
    answer: [0, 1, 4],
    explanation: "校准依据校准规范、检定规程，特殊情况下可自行制定校准方法。"
  },
  {
    id: "multiple5",
    type: "multiple",
    question: "实现量值溯源的主要技术手段是(     ) 。",
    options: ["检定", "检验", "检查", "校准"],
    answer: [0, 3],
    explanation: "实现量值溯源的主要技术手段是检定和校准。"
  },
  {
    id: "multiple6",
    type: "multiple",
    question: "测量控制体系包括(     )。",
    options: ["测量设备的校准", "测量设备的计量确认", "测量设备的管理", "测量过程实施的控制"],
    answer: [1, 2, 3],
    explanation: "测量控制体系包括测量设备的计量确认、测量设备的管理、测量过程实施的控制。"
  },
  {
    id: "multiple7",
    type: "multiple",
    question: "要创新,就必须做到（    ）。",
    options: ["不墨守成规", "大胆地试,大胆地闯", "敢于提出新的问题", "激发灵感,遏制情感"],
    answer: [0, 1, 2],
    explanation: "创新要求不墨守成规、大胆试闯、敢于提出新问题，不是遏制情感。"
  },
  {
    id: "multiple8",
    type: "multiple",
    question: "开拓创新要具有（    ）。",
    options: ["科学思维", "坚定的信念和意志", "创造意识", "舆论支持"],
    answer: [0, 1, 2],
    explanation: "开拓创新要具有科学思维、坚定的信念和意志、创造意识。"
  },
  {
    id: "multiple9",
    type: "multiple",
    question: "一些企业职工钻研技术的积极性低,主要原因是（    ）。",
    options: ["职工文化水平普遍比较低", "职工工作和家务繁忙", "职工缺少责任意识到", "企业缺少创新机制"],
    answer: [0, 2, 3],
    explanation: "职工钻研技术积极性低，主要因缺少责任意识、企业缺少创新机制、文化水平普遍较低。"
  },
  {
    id: "multiple10",
    type: "multiple",
    question: "有的企业浪费严重,产品成本居高不下,你认为主要原因是（     ）。",
    options: ["企业领导讲排场,摆阔气,铺张浪费", "职工认为家大业大,浪费点没啥", "缺少敬业精神和艰苦奋斗作风", "原材料成本高"],
    answer: [0, 1, 2],
    explanation: "浪费严重主要因领导铺张、职工意识差、缺少敬业精神和艰苦奋斗作风。"
  },
  {
    id: "multiple11",
    type: "multiple",
    question: "职业纪律具有特点是（    ）。",
    options: ["明确的规定性", "一定的强制性", "一定的伸缩性", "一定的模糊性"],
    answer: [0, 1],
    explanation: "职业纪律具有明确的规定性和一定的强制性。"
  },
  {
    id: "multiple12",
    type: "multiple",
    question: "从业人员必须遵守劳动合同和契约,因为劳动合同和契约是（    ）。",
    options: ["从业者的护身符", "在任何情况下都不可变更", "是从业者的卖身契", "是权利和义务统一的体现"],
    answer: [0, 3],
    explanation: "劳动合同和契约是从业者的护身符，是权利和义务统一的体现。"
  },
  {
    id: "multiple13",
    type: "multiple",
    question: "从业人员遵守职业纪律的要求是（    ）。",
    options: ["履行岗位职责", "严格执行操作规程", "对自己认为不合理的规章制度不遵守", "处理好上下级关系"],
    answer: [0, 1],
    explanation: "遵守职业纪律要求履行岗位职责、严格执行操作规程。"
  },
  {
    id: "multiple14",
    type: "multiple",
    question: "在实际工作中企业要做到诚实守信,就应做到（    ）。",
    options: ["质量第一", "客户至上", "严守承诺", "扩大生产"],
    answer: [0, 1, 2],
    explanation: "诚实守信应做到质量第一、客户至上、严守承诺。"
  },
  {
    id: "multiple15",
    type: "multiple",
    question: "为什么说诚实守信是企业的无形资本,因为是（    ）。",
    options: ["提高了企业信誉,扩大了企业影响", "取得用户的信任和好感", "树立了良好的企业形象与产品形象,赢得了市场,提高了效益", "增强了企业吸引力与凝聚力"],
    answer: [0, 1, 2, 3],
    explanation: "诚实守信提高信誉、取得信任、树立形象、赢得市场、提高效益。"
  },
  {
    id: "multiple16",
    type: "multiple",
    question: "做一个诚实守信的人在日常工作和生活中,要做到（    ）。",
    options: ["照顾到各方面的关系", "正确对待利益问题", "树立进取精神和职业意识", "培养高尚的人格"],
    answer: [1, 2, 3],
    explanation: "做诚实守信的人要正确对待利益、树立进取精神和职业意识、培养高尚人格。"
  },
  {
    id: "multiple17",
    type: "multiple",
    question: "一些企业屡屡发生人员伤亡事故,其主要原因是（    ）。",
    options: ["生产设备落后", "员工技术水平低", "忽视安全生产", "单纯追求效益"],
    answer: [0, 1, 2, 3],
    explanation: "伤亡事故原因包括设备落后、员工技术水平低、忽视安全生产、单纯追求效益。"
  },
  {
    id: "multiple18",
    type: "multiple",
    question: "爱岗敬业的具体要求有（    ）。",
    options: ["树立职业理想", "强化职业责任", "提高职业技能", "抓住择业机遇"],
    answer: [0, 1, 2, 3],
    explanation: "爱岗敬业要求树立职业理想、强化职业责任、提高职业技能、抓住择业机遇。"
  },
  {
    id: "multiple19",
    type: "multiple",
    question: "忠诚所属企业的主要表现是（    ）。",
    options: ["诚实劳动", "关心企业的发展", "做到举止得体", "遵守合同契约"],
    answer: [0, 1, 3],
    explanation: "忠诚企业表现为诚实劳动、关心企业发展、遵守合同契约。"
  },
  {
    id: "multiple20",
    type: "multiple",
    question: "职业技能的形成主要依赖于人的（    ）。",
    options: ["职业实践", "交际能力", "先天生理条件", "受教育程度"],
    answer: [0, 2, 3],
    explanation: "职业技能形成主要依赖职业实践、先天生理条件、受教育程度。"
  },
  {
    id: "multiple21",
    type: "multiple",
    question: "职业道德主要通过（    ）的关系,增强企业的凝聚力。",
    options: ["协调企业员工之间", "调节领导与职工", "协调职工与企业", "调节企业与市场"],
    answer: [0, 1, 2],
    explanation: "职业道德通过协调员工之间、领导与职工、职工与企业关系增强凝聚力。"
  },
  {
    id: "multiple22",
    type: "multiple",
    question: "在分析测定中,下面情况哪些是属于系统误差(  )。",
    options: ["天平的两臂不等长；", "滴定管的读数看错；", "试剂中含有微量的被测组分；", "在沉淀重量法中,沉淀不完全。"],
    answer: [0, 2, 3],
    explanation: "系统误差包括天平臂不等长、试剂含微量被测组分、沉淀不完全；滴定管读数看错通常属过失误差。"
  },
  {
    id: "multiple23",
    type: "multiple",
    question: "下列说法中错误的是（   ）。",
    options: ["由于醇中含有亲水性基团羟基,因此醇可以任意比例与水混合", "由于甲醇中含有1个碳和1个羟基,因此甲醇可以任意比例与水混合", "由于硝基为亲水性基团,因此三硝基苯可以任意比例与水混合", "由于胺基为亲水性基团,因此苯胺可以任意比例与水混合"],
    answer: [0, 1, 2],
    explanation: "醇类只有低级醇与水互溶，三硝基苯不溶于水，苯胺微溶，故 A、B、C 错误。"
  },
  {
    id: "multiple24",
    type: "multiple",
    question: "下列说法中正确的是（   ）。",
    options: ["乙二醇中由于含有二个亲水性基团,因此它可以任意比例与水混合", "由于胺基为亲水性基团,因此均苯三胺可以任意比例与水混合", "由于异丙醇中含有1个羟基,因此异丙醇可以与水混合", "由于正丁醇中含有1个羟基,因此正丁醇可以任意比例与水混合"],
    answer: [0, 1, 2],
    explanation: "乙二醇、均苯三胺、异丙醇均可与水混合；正丁醇不能任意比例与水混合。"
  },
  {
    id: "multiple25",
    type: "multiple",
    question: "下列有关过氧乙酸（CH3COOOH）的说法正确的是     。",
    options: ["过氧乙酸是有机物", "过氧乙酸的相对分子质量为76", "过氧乙酸分子中碳、氢、氧原子个数比为2：4：3", "过氧乙酸是由碳、氢、氧三个元素组成的"],
    answer: [0, 1, 2],
    explanation: "过氧乙酸是有机物，相对分子质量 76，碳氢氧原子个数比 2:4:3；D 中“三个元素”表述不准确。"
  },
  {
    id: "multiple26",
    type: "multiple",
    question: "经实验证明,涂改液中含有许多挥发性有害物质,二氯甲烷就是其中一种。下面关于二氯甲烷(CH2Cl2)的几种说法正确的是：（  ）",
    options: ["它是由碳、氢、氯三种元素组成的化合物；", "它是由氯气和甲烷组成的混合物；", "它的分子中碳、氢、氯元素的原子个数比为1：2：2；", "它是由多种原子构成的一种化合物。"],
    answer: [0, 2],
    explanation: "二氯甲烷由碳、氢、氯三种元素组成，原子个数比 1:2:2；不是混合物。"
  },
  {
    id: "multiple27",
    type: "multiple",
    question: "下列各组混合物不能用分液漏斗分离的是     。",
    options: ["硝基苯和水", "苯和甲苯", "溴苯和NaOH溶液", "甘油和水"],
    answer: [1, 3],
    explanation: "苯和甲苯互溶，甘油和水互溶，不能用分液漏斗分离。"
  },
  {
    id: "multiple28",
    type: "multiple",
    question: "为了除去粗盐中的Ca2+、Mg2+、SO42-及泥沙,可将粗盐溶于不,然后进行下列五项操作：① 过滤,② 加过量NaOH溶液,③ 加适量盐酸,④ 加过量Na2CO3溶液,⑤ 加过量BaCl2溶液。正确的操作顺序是   。",
    options: ["①④②⑤③", "④①②⑤③", "②⑤④①③", "⑤②④①③"],
    answer: [2, 3],
    explanation: "除杂顺序可为加 BaCl₂、NaOH、Na₂CO₃、过滤、加盐酸，C 和 D 正确。"
  },
  {
    id: "multiple29",
    type: "multiple",
    question: "下列叙述正确的是(  )。",
    options: ["铝是一种亲氧元素,可用单质铝和一些金属氧化物高温反应得到对应金属", "铝表面可被冷浓硝酸和浓硫酸钝化", "铝是一种轻金属,易被氧化,使用时尽可能少和空气接触", "铝离子对人体有害最好不用明矾净水"],
    answer: [0, 1, 3],
    explanation: "铝是亲氧元素，可置换金属；铝表面被冷浓硝酸和浓硫酸钝化；叙述正确。"
  },
  {
    id: "multiple30",
    type: "multiple",
    question: "下列有关硝酸反应的叙述中正确的是(  )。",
    options: ["浓硫酸和硫化亚铁反应有硫化氢气体放出", "浓硝酸和铜反应有二氧化氮气体放出", "硝酸和碳酸钠反应有二氧化碳气体放出", "硝酸加热时有二氧化氮、氧气放出"],
    answer: [1, 2, 3],
    explanation: "浓硝酸与铜反应生成 NO₂，与碳酸钠反应生成 CO₂，加热分解生成 NO₂ 和 O₂；浓硫酸与硫化亚铁不生成 H₂S。"
  },
  {
    id: "multiple31",
    type: "multiple",
    question: "负有安全生产监督管理职责的部门对生产经营单位进行有关安全生产的监督检查时,要按照（　 ）以及相关法律法规的规定行使法律法规的职权,并履行相应的义务。",
    options: ["《工会法》", "《安全生产法》", "《劳动法》", "《矿山安全法》"],
    answer: [1, 2],
    explanation: "按《安全生产法》和《劳动法》行使职权、履行义务。"
  },
  {
    id: "multiple32",
    type: "multiple",
    question: "在分析测定中,下面情况哪些是属于系统误差(    )。",
    options: ["天平的两臂不等长；", "滴定管的读数看错；", "试剂中含有微量的被测组分；", "在沉淀重量法中,沉淀不完全。"],
    answer: [0, 2, 3],
    explanation: "系统误差包括天平臂不等长、试剂含微量被测组分、沉淀不完全；读数看错为过失误差。"
  },
  {
    id: "multiple33",
    type: "multiple",
    question: "（     ）是样品检验项目中需要注明的内容。",
    options: ["标准号", "检测项目", "检验要求", "检验者"],
    answer: [1, 2],
    explanation: "样品检验项目需注明检测项目和检验要求。"
  },
  {
    id: "multiple34",
    type: "multiple",
    question: "样品的外观检查应包括（     ）。",
    options: ["外包装", "密封", "物态", "贮存"],
    answer: [0, 1],
    explanation: "样品外观检查包括外包装和密封。"
  },
  {
    id: "multiple35",
    type: "multiple",
    question: "气体采样工具包括（   ）。",
    options: ["双链球", "球胆", "钢瓶", "分样器"],
    answer: [0, 1, 2],
    explanation: "气体采样工具有双链球、球胆、钢瓶；分样器用于固体。"
  },
  {
    id: "multiple36",
    type: "multiple",
    question: "属于液体采样工具的是（   ）。",
    options: ["简易采样器", "采样管", "液体石油产品采样器", "球胆"],
    answer: [0, 1, 2],
    explanation: "液体采样工具有简易采样器、采样管、液体石油产品采样器；球胆用于气体。"
  },
  {
    id: "multiple37",
    type: "multiple",
    question: "样品的物态检查包括（   ）。",
    options: ["品名", "颜色、状态", "状态", "包装完整情况"],
    answer: [1, 2],
    explanation: "物态检查包括颜色、状态。"
  },
  {
    id: "multiple38",
    type: "multiple",
    question: "固体样品贮存条件包括（   ）。",
    options: ["温度", "干、湿度", "压力", "通风"],
    answer: [0, 1],
    explanation: "固体样品贮存条件包括温度和干、湿度。"
  },
  {
    id: "multiple39",
    type: "multiple",
    question: "在内部扩散控制阶段影响干燥速率的主要因素有（　）。",
    options: ["空气的性质", "物料的结构", "物料的形状", "物料的大小"],
    answer: [1, 2, 3],
    explanation: "内部扩散控制阶段影响干燥速率的主要因素有物料结构、形状、大小。"
  },
  {
    id: "multiple40",
    type: "multiple",
    question: "制冷的基本膨胀是（    ）",
    options: ["等焓膨胀", "等熵膨胀", "等容膨胀", "等温膨胀"],
    answer: [0, 1],
    explanation: "制冷基本膨胀包括等焓膨胀和等熵膨胀。"
  },
  {
    id: "multiple41",
    type: "multiple",
    question: "爆炸按性质分类,可分为（   ）。",
    options: ["物理爆炸", "化学爆炸", "核爆炸", "爆轰"],
    answer: [0, 1, 2],
    explanation: "爆炸按性质分为物理爆炸、化学爆炸、核爆炸。"
  },
  {
    id: "multiple42",
    type: "multiple",
    question: "关于爆炸,下列正确的说法是（   ）。",
    options: ["爆炸的特点是具有破坏力,产生爆炸声和冲击波", "爆炸是一种极为迅速的物理和化学变化", "爆炸可分为物理爆炸和化学爆炸", "爆炸在瞬间放出大量的能量,同时产生巨大声响"],
    answer: [0, 2, 3],
    explanation: "爆炸具有破坏力、产生爆炸声和冲击波，是极迅速的物理或化学变化，瞬间放出大量能量；B 表述不准确。"
  },
  {
    id: "multiple43",
    type: "multiple",
    question: "燃烧具有三要素,燃烧的必要条件是（  ）。",
    options: ["可燃物质", "助燃物质", "火源", "明火"],
    answer: [0, 1, 2],
    explanation: "燃烧三要素为可燃物、助燃物、火源。"
  },
  {
    id: "multiple44",
    type: "multiple",
    question: "电气设备火灾时可以用（  ）灭火器。",
    options: ["泡沫", "卤代烷", "二氧化碳", "干粉"],
    answer: [1, 2, 3],
    explanation: "电气火灾可用卤代烷、二氧化碳、干粉灭火器；泡沫灭火器导电，不宜使用。"
  },
  {
    id: "multiple45",
    type: "multiple",
    question: "泡沫灭火器是常用的灭火器,它适用于下列哪些物质灭火（  ）。",
    options: ["木材", "石油等液体类火灾", "棉麻等固体物质", "电气设备"],
    answer: [0, 1, 2],
    explanation: "泡沫灭火器适用于木材、石油类液体、棉麻等固体；不适用于电气设备。"
  },
  {
    id: "multiple46",
    type: "multiple",
    question: "下列属于化工生产防火防爆措施的是（   ）。",
    options: ["点火源的控制", "工艺参数的安全控制", "限制火灾蔓延", "使用灭火器"],
    answer: [0, 1, 2],
    explanation: "防火防爆措施包括点火源控制、工艺参数安全控制、限制火灾蔓延。"
  },
  {
    id: "multiple47",
    type: "multiple",
    question: "为了限制火灾蔓延以及减少爆炸损失,下列正确的做法有（  ）。",
    options: ["根据所在地区的风向,把火源置于易燃物质的上风", "厂址应该靠近水源", "采用防火墙、防火门等进行防火间隔", "为人员、物料、车辆提供安全通道"],
    answer: [1, 2, 3],
    explanation: "火源应置于易燃物质下风侧，厂址靠近水源，设防火间隔和安全通道。"
  },
  {
    id: "multiple48",
    type: "multiple",
    question: "下列气体中不可以用来控制和消除燃烧爆炸条件的形成有（）。",
    options: ["空气", "一氧化碳", "氧气", "水蒸汽"],
    answer: [0, 1, 2],
    explanation: "空气、一氧化碳、氧气不能用来控制和消除燃烧爆炸条件；水蒸汽可以。"
  },
  {
    id: "multiple49",
    type: "multiple",
    question: "防止火灾爆炸事故的蔓延的措施是（  ）。",
    options: ["分区隔离", "设置安全阴火装置", "配备消防组织和器材", "配备安全通道"],
    answer: [0, 1, 2, 3],
    explanation: "分区隔离、设置阻火装置、配备消防组织和器材、配备安全通道均为防止蔓延措施。"
  },
  {
    id: "multiple50",
    type: "multiple",
    question: "能用水灭火的是（  ）。",
    options: ["棉花", "木材", "汽油", "纸"],
    answer: [0, 1, 3],
    explanation: "棉花、木材、纸可用水灭火；汽油比水轻，用水灭火会扩大火势。"
  },
  {
    id: "multiple51",
    type: "multiple",
    question: "吸收操作过程中,在塔的负荷范围内,当混合气处理量增大时,以下哪些操作会导致回收率改变(  )。",
    options: ["减少操作温度", "减少吸收剂用量", "降低填料层高度", "减少操作压力"],
    answer: [1, 2, 3],
    explanation: "混合气处理量增大时，减少吸收剂用量、降低填料层高度、减少操作压力都会降低回收率。"
  },
  {
    id: "multiple52",
    type: "multiple",
    question: "以下说法不正确的是（   ）。",
    options: ["冷液进料理q=1", "汽液混合进料0<q<1", "过热蒸气进料q=0", "饱和液体进料q<1"],
    answer: [0, 2, 3],
    explanation: "冷液进料 q>1，过热蒸气进料 q<0，饱和液体进料 q=1，故 A、C、D 错误。"
  },
  {
    id: "multiple53",
    type: "multiple",
    question: "下列判断正确的是（   ）。",
    options: ["上升气速过大引起漏液", "上升气速过大造成过量雾沫夹带", "上升气速过大引起液泛", "上升气速过大造成大量气泡夹带"],
    answer: [1, 2, 3],
    explanation: "上升气速过大不会引起漏液，而会造成雾沫夹带、液泛、气泡夹带。"
  },
  {
    id: "multiple54",
    type: "multiple",
    question: "精馏操作中叙述不正确的是（  ）。",
    options: ["调节塔顶温度最直接有效的方法是调整回流量", "精馏塔的压力、温度达到工艺指标,塔顶产品就可以采出", "精馏塔的压力、温度达到工艺指标,塔釜物料才可以采出", "精馏塔的压力、温度达到工艺指标,回流阀就必须关闭,回流罐的液体全部作为产品采出"],
    answer: [1, 2, 3],
    explanation: "精馏塔压力、温度达指标不一定能立即采出产品，回流阀也不能关闭，故 B、C、D 叙述不正确。"
  },
  {
    id: "multiple55",
    type: "multiple",
    question: "精馏塔回流量的增加,（   ）。",
    options: ["塔压差明显减小", "塔压差明显增大", "塔顶产品纯度会提高", "塔顶产品纯度会减小"],
    answer: [1, 2],
    explanation: "回流量增加，塔压差增大，塔顶产品纯度提高。"
  },
  {
    id: "multiple56",
    type: "multiple",
    question: "下列那些不是产生塔板漏夜的原因（  ）。",
    options: ["上升蒸汽量小", "下降液体量大", "进料量大", "再沸器加热量大"],
    answer: [1, 2, 3],
    explanation: "塔板漏液主要因上升蒸汽量小，下降液体量大、进料量大、再沸器加热量大不是漏液原因。"
  },
  {
    id: "multiple57",
    type: "multiple",
    question: "有关灵敏板的叙述,不正确的有（   ）。",
    options: ["是操作条件变化时,塔内温度变化最大的那块板", "板上温度变化,物料组成不一定都变；", "板上温度升高,反应塔顶产品组成下降", "板上温度升高,反应塔底产品组成增大"],
    answer: [1, 2, 3],
    explanation: "灵敏板是温度变化最大的板，温度升高反映塔顶产品组成下降；B、C、D 叙述不正确。"
  },
  {
    id: "multiple58",
    type: "multiple",
    question: "下述分离过程中属于传质分离过程的有（   ）。",
    options: ["萃取分离", "吸收分离", "精馏分离", "离心分离"],
    answer: [0, 1, 2],
    explanation: "萃取、吸收、精馏属于传质分离；离心分离为机械分离。"
  },
  {
    id: "multiple59",
    type: "multiple",
    question: "有关精馏操作的叙述正确的有（   ）。",
    options: ["精馏的实质是多级蒸馏", "精馏装置的主要设备有：精馏塔、再沸器、冷凝器、回流罐和输送设备等", "精馏塔以进料板为界,上部为精馏段,下部为提馏段", "精馏是利用各组分密度不同,分离互溶液体混合物的单元操作"],
    answer: [0, 1, 2],
    explanation: "精馏实质是多级蒸馏，主要设备包括塔、再沸器、冷凝器等，以进料板分精馏段和提馏段；D 错误。"
  },
  {
    id: "multiple60",
    type: "multiple",
    question: "下列叙述正确的是（   ）。",
    options: ["板式塔内以塔板作为气、液两相接触传质的基本构件", "安装出口堰是为了保证气、液两相在塔板上有充分的接触时间", "降液管是塔板间液流通道,也是溢流液中所夹带气体的分离场所", "降液管与下层塔板的间距应大于出口堰的高度"],
    answer: [0, 1, 2],
    explanation: "板式塔以塔板为传质构件，出口堰保证接触时间，降液管是液流通道和分离场所；D 错误。"
  },
  {
    id: "multiple61",
    type: "multiple",
    question: "下列哪些属于精馏设备的主要部分（   ）。",
    options: ["精馏塔", "塔顶冷凝器", "再沸器", "馏出液贮槽"],
    answer: [0, 1, 2],
    explanation: "精馏设备主要部分包括精馏塔、塔顶冷凝器、再沸器；馏出液贮槽不是主要部分。"
  },
  {
    id: "multiple62",
    type: "multiple",
    question: "结晶操作过程中,不利于形成较大颗粒晶体的操作有（   ）。",
    options: ["迅速降温", "缓慢降温", "激烈搅拌", "快速过滤"],
    answer: [0, 2, 3],
    explanation: "迅速降温、激烈搅拌、快速过滤不利于形成大颗粒晶体；缓慢降温有利。"
  },
  {
    id: "multiple63",
    type: "multiple",
    question: "下列叙述错误的是（   ）。",
    options: ["溶液一旦达到过饱和就能自发的析出晶体", "过饱和溶液的温度与饱和溶液的温度差成为过饱和度", "过饱和溶液可以通过冷却饱和溶液来制备", "对一定的溶质和溶剂其超饱和解度曲线只有一条"],
    answer: [0, 1, 3],
    explanation: "溶液达到过饱和不一定自发析出晶体；过饱和度是浓度差不是温度差；超溶解度曲线不止一条。"
  },
  {
    id: "multiple64",
    type: "multiple",
    question: "评定测量系统的三个基本问题是(     )。",
    options: ["测量系统的分辨力", "测量系统的稳定性", "测量系统是否与预期一致,且满足过程分析与控制要求", "测量系统的灵敏度"],
    answer: [0, 1, 2],
    explanation: "评定测量系统的基本问题包括分辨力、稳定性、是否与预期一致。"
  },
  {
    id: "multiple65",
    type: "multiple",
    question: "测量误差的表示方法,有(     )。",
    options: ["误差：测量结果-真值", "误差：(测量结果-总体均值)-(总体均值-真值)", "误差：系统误差-随机误差", "误差：系统误差+随机误差"],
    answer: [0, 1, 3],
    explanation: "误差表示方法包括测量结果-真值、系统误差+随机误差等。"
  },
  {
    id: "multiple66",
    type: "multiple",
    question: "计量按其作用和地位,可分为(    )。",
    options: ["科学计量", "法制计量", "工程计量", "时间计量"],
    answer: [0, 1, 2],
    explanation: "计量按作用和地位分为科学计量、法制计量、工程计量。"
  },
  {
    id: "multiple67",
    type: "multiple",
    question: "测量仪器按其计量学用途可分为(     )。",
    options: ["测量基准", "测量系统", "测量标准", "工作计量器具"],
    answer: [0, 2, 3],
    explanation: "测量仪器按计量学用途分为测量基准、测量标准、工作计量器具。"
  },
  {
    id: "multiple68",
    type: "multiple",
    question: "为了减少室外设备的热损失,保温层外包的一层金属皮应采用（   ）。",
    options: ["表面光滑", "表面粗糙", "色泽较浅", "色泽较深"],
    answer: [0, 2],
    explanation: "减少热损失，保温层外包金属皮应表面光滑、色泽较浅。"
  },
  {
    id: "multiple69",
    type: "multiple",
    question: "阀门填料函泄漏的原因有（   ）。",
    options: ["填料装的不严密", "压盖未压紧", "填料老化", "堵塞"],
    answer: [0, 1, 2],
    explanation: "阀门填料函泄漏原因有填料装的不严密、压盖未压紧、填料老化。"
  },
  {
    id: "multiple70",
    type: "multiple",
    question: "下列关于截止阀的特点叙述正确的有（   ）。",
    options: ["结构复杂", "操作简单", "不易于调节流量", "启闭缓慢时无水锤"],
    answer: [0, 1, 3],
    explanation: "截止阀结构复杂、操作简单、启闭缓慢时无水锤；不易调节流量说法错误。"
  },
  {
    id: "multiple71",
    type: "multiple",
    question: "下列措施肯定能使化学反应速率增大的是     。",
    options: ["增大反应物的量", "增加压强", "升高温度", "使用催化剂"],
    answer: [2, 3],
    explanation: "升高温度、使用催化剂肯定能加快反应速率。"
  },
  {
    id: "multiple72",
    type: "multiple",
    question: "在下列影响化学反应速率的因素中,肯定能使化学反应速率加快的方法是   。",
    options: ["升高温度", "加入催化剂", "增大反应物浓度", "将块状固体反应物磨成粉末", "增大压强"],
    answer: [0, 1, 2, 3],
    explanation: "升高温度、加入催化剂、增大反应物浓度、将块状固体磨成粉末均能加快反应速率；增大压强不一定能加快，故不选。"
  },
  {
    id: "multiple73",
    type: "multiple",
    question: "在氢硫酸溶液中加入少量下列溶液(),能使溶液PH值减小的是     。",
    options: ["O2", "Cl2", "SO2", "CuSO4"],
    answer: [1, 3],
    explanation: "通入 Cl₂ 或加入 CuSO₄ 可使氢硫酸 pH 减小。"
  },
  {
    id: "multiple74",
    type: "multiple",
    question: "物质的用途与性质密切相关,下列说法正确的有     。",
    options: ["氮气常用作保护气,是由于氮气的化学性质不活泼", "洗涤剂常用来洗涤油污,是因为洗涤剂有乳化功能", "铁制栏杆表面常涂“银粉漆”（铝粉）防生锈,是由于铝的化学性质比铁稳定。", "C、CO、H2常用来冶炼金属,是因为它们都具有还原性"],
    answer: [0, 1, 3],
    explanation: "氮气作保护气、洗涤剂乳化、C/CO/H₂ 冶炼金属均正确；铝比铁活泼，C 错误。"
  },
  {
    id: "multiple75",
    type: "multiple",
    question: "下列关于金属钠的叙述,正确的有(  )。",
    options: ["钠与水作用放出氢气,同时生成氢氧化钠", "少量钠通常储存在煤油里", "和Au、Ag等金属一样,钠在自然界中,可以以单质的形式存在", "金属钠的熔点低,密度、硬度都较低"],
    answer: [0, 1, 3],
    explanation: "钠与水反应生成 NaOH 和 H₂，少量钠存煤油，熔点低密度小；钠在自然界以化合态存在。"
  },
  {
    id: "multiple76",
    type: "multiple",
    question: "下列金属所制器皿可以用于盛装浓硫酸的有(  )。",
    options: ["Al", "Fe", "Cr", "Zn"],
    answer: [0, 1, 2],
    explanation: "Al、Fe、Cr 在浓硫酸中钝化，可盛装浓硫酸；Zn 会反应。"
  },
  {
    id: "multiple77",
    type: "multiple",
    question: "下列说法错误的有（    ）。",
    options: ["碳单质都是黑色固体", "无定形碳都是纯碳单质", "碳在空气中燃烧可能生成一氧化碳", "碳在不充分燃烧时吸收热量"],
    answer: [0, 1, 3],
    explanation: "碳单质不都是黑色，无定形碳不都是纯碳，碳不充分燃烧放热；C 正确。"
  },
  {
    id: "multiple78",
    type: "multiple",
    question: "下列物质中,属于合金的有    。",
    options: ["硬铝", "黄铜", "钢铁", "水银"],
    answer: [0, 1, 2],
    explanation: "硬铝、黄铜、钢铁是合金；水银是纯金属。"
  },
  {
    id: "multiple79",
    type: "multiple",
    question: "下列关于水的说法中正确的有     。",
    options: ["水是由氢元素和氧元素组成的化合物", "城市污水必须经过净化处理后才能排放", "清澈、透明的泉水是纯净物", "水资源是宝贵的,一定要节约用水"],
    answer: [0, 1, 3],
    explanation: "水由氢氧元素组成，污水需处理，水资源宝贵；清澈泉水不是纯净物。"
  },
  {
    id: "multiple80",
    type: "multiple",
    question: "下列说法中正确的有     。",
    options: ["醋酸不是酸", "铅笔不含铅", "水银不是银", "干冰不是冰"],
    answer: [1, 2, 3],
    explanation: "醋酸是酸，铅笔不含铅，水银不是银，干冰不是冰。"
  },
  {
    id: "multiple81",
    type: "multiple",
    question: "你认为下列描述正确的有     。",
    options: ["碳能形成多种单质,如：金刚石、石墨、C60等", "C、CO、H2、CH4、C2H5OH均可作为燃料使用", "SO2、CO2、CO都是非金属氧化物,都可用氢氧化钠溶液吸收", "盐酸、硫酸化学性质相似,都能使指示剂变色,与活泼金属反应放出氢气,与金属氧化物作用生成盐和水"],
    answer: [0, 1, 3],
    explanation: "碳有多种单质，C/CO/H₂/CH₄/C₂H₅OH 可作燃料，盐酸硫酸性质相似；SO₂、CO₂ 可用 NaOH 吸收，CO 不能。"
  },
  {
    id: "multiple82",
    type: "multiple",
    question: "下列有关钢的说法正确的有      。",
    options: ["钢是含有少量碳及其它金属的铁", "钢是金属材料", "钢的性能优于生铁", "钢不可能生锈"],
    answer: [0, 1, 2],
    explanation: "“钢不可能生锈”本身错误。"
  },
  {
    id: "multiple83",
    type: "multiple",
    question: "下列哪些方法可以制备氢气(  )。",
    options: ["电解食盐水溶液", "Zn与稀硫酸", "Zn与盐酸", "Zn与稀硝酸"],
    answer: [0, 1, 2],
    explanation: "电解食盐水、Zn 与稀硫酸、Zn 与盐酸均可制氢气；Zn 与稀硝酸生成 NO 等，不生成 H₂。"
  },
  {
    id: "multiple84",
    type: "multiple",
    question: "对有机化合物易燃性质的叙述中,（    ）说法是正确的。",
    options: ["多数有机化合物有易燃烧的特性", "将有机化合物置于坩埚盖上加热时,若用强火加热,则有机化合物燃烧后,一定会生成二氧化碳而不留残渣", "有机多卤化物不易燃烧", "将有机化合物置于坩埚盖上加热时,若用小火加热,多出现炭化变黑的现象"],
    answer: [0, 2, 3],
    explanation: "多数有机物易燃，多卤化物不易燃，小火加热多炭化变黑；B 说一定生成 CO₂ 不留残渣错误。"
  },
  {
    id: "multiple85",
    type: "multiple",
    question: "在下列有机化合物的定义中,（    ）的说法是正确的。",
    options: ["醇、酚、醚都是有机化合物", "羰基类化合物是有机化合物", "碳酸盐、碳酸氢盐是有机化合物", "碳的金属化合物一定不是有机化合物"],
    answer: [0, 1, 3],
    explanation: "醇酚醚、羰基类、碳的金属化合物不一定是有机物；碳酸盐、碳酸氢盐是无机物。"
  },
  {
    id: "multiple86",
    type: "multiple",
    question: "在下列有机化合物的定义中,（    ）说法是正确的。",
    options: ["羧酸及其衍生物一定不是有机化合物", "胺类化合物是有机化合物", "碳单质、碳的氧化物是有机化合物", "金属羰基类化合物是有机化合物"],
    answer: [0, 1, 3],
    explanation: "羧酸及其衍生物是有机物，胺类是有机物，金属羰基类是有机物；碳单质、碳氧化物不是有机物。"
  },
  {
    id: "multiple87",
    type: "multiple",
    question: "在对有机化合物易燃性质的叙述中,（    ）说法是正确的。",
    options: ["有机多卤化物不易燃烧", "羧酸盐在燃烧后,会留有残渣", "有机碳纤维材料的燃点,有的会达到3000℃左右", "乙醚等低沸点化合物,由于易挥发而不易燃烧,只会爆炸"],
    answer: [0, 1, 2],
    explanation: "有机多卤化物不易燃，羧酸盐燃烧留残渣，碳纤维燃点可达 3000℃；乙醚易挥发且极易燃。"
  },
  {
    id: "multiple88",
    type: "multiple",
    question: "下列说法中不正确的是（    ）。",
    options: ["只要是有机物就不溶于水", "由于有机官能团均为憎水性基团,因此有机物不溶于水", "一般情况下,一个亲水性基团,可带4~5个碳", "乙二醇中由于含有二个亲水性基团,因此它可以任意比例与水混合"],
    answer: [0, 1, 2],
    explanation: "有机物不一定不溶于水，亲水基团可带 4~5 个碳，A、B、C 均不正确。"
  },
  {
    id: "multiple89",
    type: "multiple",
    question: "下列对烯烃的物理性质的叙述中说法正确的是（    ）。",
    options: ["含2~3个碳原子的烯烃为气体", "含2~4个碳原子的烯烃为气体", "含5~15个碳原子的烯烃为液体", "含18个以上碳原子的烯烃为蜡状固体"],
    answer: [1, 2, 3],
    explanation: "含 2~4 个碳原子的烯烃为气体，5~15 个碳为液体，18 个以上为蜡状固体；A 错误。"
  },
  {
    id: "multiple90",
    type: "multiple",
    question: "对烯烃的叙述中(    )是正确的。",
    options: ["烯烃化合物一定会发生加成反应", "烯烃的通式为CnH2n", "烯烃化合物一定含有双键", "烯烃化合物一定会发生取代反应"],
    answer: [0, 1, 2],
    explanation: "烯烃一定含双键，可发生加成，通式 CnH2n；不一定发生取代。"
  },
  {
    id: "multiple91",
    type: "multiple",
    question: "有关实验室制乙烯的说法中,正确的是(  )。",
    options: ["温度计的水银球要插入到反应物的液面以下", "反应过程中溶液的颜色会逐渐变黑", "生成的乙烯中混有刺激性气味的气体", "加热时要注意使温度缓慢上升至170℃"],
    answer: [0, 1, 2],
    explanation: "制乙烯温度计水银球插入液面下，反应液变黑，生成乙烯中混有 SO₂ 等刺激性气体；D 错误。"
  },
  {
    id: "multiple92",
    type: "multiple",
    question: "下列说法正确的是(    )。",
    options: ["一步完成的反应是基元反应。", "由一个基元反应构成的化学反应称简单反应。", "由两个或两个以上基元反应构成的化学反应称复杂反应。", "基元反应都是零级反应。"],
    answer: [0, 1, 2],
    explanation: "一步完成的是基元反应，一个基元构成简单反应，两个以上构成复杂反应；基元反应不都是零级。"
  },
  {
    id: "multiple93",
    type: "multiple",
    question: "加入正催化剂使反应速度加快,下列叙述正确的是(   )。",
    options: ["使反应体系的活化分子百分数增高", "使反应体系的活化分子总数增多", "使反应体系的活化分子百分数降低", "使反应体系的活化能降低"],
    answer: [0, 1, 3],
    explanation: "正催化剂使活化分子百分数增高、总数增多、活化能降低；不是降低百分数。"
  },
  {
    id: "multiple94",
    type: "multiple",
    question: "物质的用途与性质密切相关,下列说法正确的是     。",
    options: ["氮气常用作保护气,是由于氮气的化学性质不活泼", "洗涤剂常用来洗涤油污,是因为洗涤剂有乳化功能", "铁制栏杆表面常涂“银粉漆”（铝粉）防生锈,是由于铝的化学性质比铁稳定。", "C、CO、H2常用来冶炼金属,是因为它们都具有还原性"],
    answer: [0, 1, 3],
    explanation: "同 72 题，氮气保护、洗涤剂乳化、C/CO/H₂ 冶炼金属正确；铝比铁活泼，C 错误。"
  },
  {
    id: "multiple95",
    type: "multiple",
    question: "对丙酸（沸点为141℃）和乙酰氯（沸点为51℃）沸点差的解释中错误的是（   ）。",
    options: ["由于丙酸中的分子含有羟基,具有缔合作用,而乙酰氯分子中没有缔合作用,因此在沸点上表现出明显差异", "由于丙酸的摩尔质量比乙酰氯的摩尔质量小,因此在沸点上表现出明显差异", "由于丙酸是线性分子,而乙酰氯为网状分子,因此在沸点上表现出明显差异", "由于丙酸是极性分子,而乙酰氯是非极性分子,因此在沸点上表现出明显差异"],
    answer: [1, 2, 3],
    explanation: "丙酸沸点高因分子间缔合，乙酰氯无缔合；B、C、D 解释错误。"
  },
  {
    id: "multiple96",
    type: "multiple",
    question: "下列说法中错误的是（   ）。",
    options: ["由于醇中含有亲水性基团羟基,因此醇可以任意比例与水混合", "由于甲醇中含有1个碳和1个羟基,因此甲醇可以任意比例与水混合", "由于硝基为亲水性基团,因此三硝基苯可以任意比例与水混合", "由于胺基为亲水性基团,因此苯胺可以任意比例与水混合"],
    answer: [0, 1, 2],
    explanation: "醇中只有低级醇与水互溶，三硝基苯不溶，苯胺微溶；A、B、C 错误。"
  },
  {
    id: "multiple97",
    type: "multiple",
    question: "下列说法中正确的是（   ）。",
    options: ["乙二醇中由于含有二个亲水性基团,因此它可以任意比例与水混合", "由于胺基为亲水性基团,因此均苯三胺可以任意比例与水混合", "由于异丙醇中含有1个羟基,因此异丙醇可以与水混合", "由于正丁醇中含有1个羟基,因此正丁醇可以任意比例与水混合"],
    answer: [0, 1, 2],
    explanation: "乙二醇、均苯三胺、异丙醇可溶于水；正丁醇不能任意比例与水混合。"
  },
  {
    id: "multiple98",
    type: "multiple",
    question: "下列对化学平衡移动的分析中,不正确的是      。",
    options: ["已达平衡的反应C(s)+H2O(g) ⇌ CO(g)+H2(g),当增加反应物物质的量时,平衡一定向正反应方向移动", "已达平衡的反应N2(g)+3H2(g) ⇌ 2NH3(g),当增大N2的浓度时,平衡向正反应方向移动,N2的转化率一定升高", "有气体参加的反应平衡时,若减小反应器容积时,平衡一定向气体体积增大的方向移动", "有气体参加的反应达平衡时,在恒压反应器中充入稀有气体,平衡一定不移动"],
    answer: [0, 1, 2, 3],
    explanation: "增加反应物物质的量平衡不一定正向移动；增大 N₂ 浓度 N₂ 转化率不一定升高；减小容积平衡向气体体积减小方向移动；恒压充惰性气体平衡可能移动。"
  },
  {
    id: "multiple99",
    type: "multiple",
    question: "关于热力学第一定律错误的表述是(  )。",
    options: ["热力学第一定律就是能量守恒与转化的定律", "第一类永动机是可以创造的", "在隔离体系中,自发过程向着熵增大的方向进行", "第二类永动机是可以创造的"],
    answer: [1, 2, 3],
    explanation: "热力学第一定律是能量守恒，第一类永动机不能创造；隔离体系自发过程熵增大；第二类永动机不能创造。"
  },
  {
    id: "multiple100",
    type: "multiple",
    question: "在下列叙述中（   ）说法是错误的。",
    options: ["只要是化学反应,无论是无机反应,还是有机反应,均要配平反应式", "有机反应速度较慢,一般采用加催化剂的方法,就可加快所有有机反应的速度", "由于有机反应的副反应多,在合成过程中,多选用步骤少的合成过程", "由于有机物不易溶于水,因此有机合成只能在有机溶剂中进行"],
    answer: [0, 1, 3],
    explanation: "有机反应不一定需配平；催化剂不能加快所有有机反应；有机合成不一定只能在有机溶剂中进行。"
  },
  {
    id: "multiple101",
    type: "multiple",
    question: "对有机反应中副产物多的解释中（   ）是错误的。",
    options: ["由于有机反应多为分子反应,多会形成中间过渡态所致", "由于有机反应多为非一元反应所致", "由于有机反应多为离子反应所致", "由于有机反应中的分子运动速度较慢所致"],
    answer: [1, 2, 3],
    explanation: "有机副反应多因形成中间过渡态、反应复杂等，B、C、D 解释错误。"
  },
  {
    id: "multiple102",
    type: "multiple",
    question: "下列说法中正确的是     。",
    options: ["对有气体参加的化学反应,增大压强体系体积减小,可使单位体积内活化分子数增加,因而反应速率增大", "升高温度,一般可使活化分子的百分数增大,因而反应速率增大", "活化分子之间发生的碰撞一定为有效碰撞", "加入适宜的催化剂,可使活化分子的百分数大大增加,从而成千上万倍地增大化学反应的速率"],
    answer: [0, 1, 3],
    explanation: "增大压强、升高温度、加入催化剂均可增大活化分子百分数，加快反应；活化分子碰撞不一定有效。"
  },
];


