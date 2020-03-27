// 启动方法:
// 菜单 拥有两个页面,即:
// 1.首页 ( 对应不同品牌 / 种类的菜单页入口 )
// 2.菜单页 ( 对应从首页进入后的品牌详情菜单 )
//
// 数据 card中的数据对应首页中的内容 goods中的数据对应菜单页的内容
//
// 名词解释 1.商品card => 首页中的每一个类似卡片的品牌
//          2.商品组 => 菜单页中右侧栏中，以一个小标题(对应菜单左侧栏的一个商品类型)和一组商品为整体的部分
//
// 注意事项 1.所有图片必须在对应的文件中才会在页面上展示，路径必须正确，如果没有显示，请先确认是否路径正确 或 是否在对应文件夹中包含此图片 或 图片格式是否正确
//         所有图片必须 require('路径')格式，可参考写好的
//
//         2.数据的填充都是有顺序的,不可随意填写,请按照想要排列的顺序进行填写，数据在页面中的加载顺序为从上到下
//
//         3.如果展示有问题请仔细注意数据的上下层级关系或者数据的结构是否正确
//         4.颜色不支持rgba格式 请输入16进制颜色码 例: #ffffff / #ff5555 / ...

//首页数据
const cards = [{
    img: require('../assets/img/banner/coco.jpg'),
    title: '经典奶茶菜单',
    des: '用新鲜现制的创意饮品点亮每个人的生活'
  },
  {
    //商品card的对应图片
    img: require('../assets/img/banner/一点点banner.jpg'),
    //商品card图片下方的名称
    title: '台式奶茶菜单',
    //商品card备注内容 20字以内或根据要求
    des: '热卖奶茶，好喝不止多一点'
    //商品card上对应的方案数量会自行根据数据计算 不用在这里添加
  },
  {
    img: require('../assets/img/banner/桂源铺banner.jpg'),
    title: '港式奶茶菜单',
    des: '港式原味，潮品经典'
  },
  {
    img: require('../assets/img/banner/naixuecha.jpg'),
    title: '新式茶饮菜单',
    des: '美好从一杯好茶开始'
  },
  {
    img: require('../assets/img/banner/thealley.jpg'),
    title: '网红奶茶店菜单',
    des: '与好友共享好茶时光'
  },
  {
    img: require('../assets/img/banner/星巴克banner.jpg'),
    title: '咖啡厅菜单',
    des: '用每一杯咖啡传递独特的咖啡体验'
  },
  {
    img: require('../assets/img/banner/漫咖啡banner.jpg'),
    title: '休闲咖啡菜单',
    des: '现代化城市舒适的休闲空间'
  },
  {
    img: require('../assets/img/banner/lukin.jpg'),
    title: '互联网咖啡菜单',
    des: '咖啡新零售时代'
  },
  {
    img: require('../assets/img/banner/必胜客banner.jpg'),
    title: '休闲西餐厅菜单',
    des: '分享美食从欢乐的用餐体验开始'
  },
  {
    img: require('../assets/img/banner/mcdonalds.jpg'),
    title: '西式快餐菜单',
    des: '简单快速的西式快餐正是每个人所喜爱的'
  },
  {
    img: require('../assets/img/banner/蓝蛙banner.jpg'),
    title: '西餐菜单',
    des: '遍布欧洲及全中国的炙烤美食'
  },
  {
    img: require('../assets/img/banner/胡桃里banner.jpg'),
    title: '新式融合菜餐厅菜单',
    des: '都市全新休闲方式'
  },
  {
    img: require('../assets/img/banner/永和大王banner.jpg'),
    title: '中式简餐菜单',
    des: '符合中国人口味的中式快餐及点心'
  },
  {
    img: require('../assets/img/banner/banu.jpg'),
    title: '火锅饮品菜单',
    des: '吃火锅必备解油解辣饮品'
  },
  {
    img: require('../assets/img/banner/coucou.jpg'),
    title: '台式火锅饮品菜单',
    des: '跨界新式火锅饮品'
  },
  {
    img: require('../assets/img/banner/正新鸡排banner.jpg'),
    title: '小吃炸鸡菜单',
    des: '大众消费的首先，满足不同食客需求'
  },
  {
    img: require('../assets/img/banner/KFC.jpg'),
    title: '连锁炸鸡店菜单',
    des: '炸鸡菜单任意搭配，总有一款适合你'
  },
  {
    img: require('../assets/img/banner/familymart.jpg'),
    title: '便利店菜单',
    des: '方便快捷的标准化小吃饮品'
  }
]

//菜单数据
const goods = [
  //经典奶茶菜单
  {
    title: '经典奶茶菜单',
    img: require('../assets/img/banner/coco.jpg'),
    color: '#EF7D24',
    type: [
      '咖啡时光',
      '醇香奶茶',
      '法式奶霜',
      '牧场牛奶',
      '浓情可可',
      '鲜果鲜茶',
      '益菌多多',
      '开店设备'
    ],
    list: [{
        title: '咖啡时光',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/咖啡时光/美式咖啡.jpg'),
            name: "美式咖啡'",
            price: 15,
            percent: 91,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/coco/咖啡时光/拿铁咖啡.jpg'),
            name: '拿铁咖啡',
            price: 16,
            percent: 77,
            id: 128,
            cost: 3.74
          },
          {
            img: require('../assets/img/goods/coco/咖啡时光/香草拿铁.jpg'),
            name: '香草拿铁',
            price: 17,
            percent: 73,
            id: 365,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/coco/咖啡时光/摩卡咖啡.jpg'),
            name: '摩卡咖啡',
            price: 22,
            percent: 71,
            id: 85,
            cost: 6.34
          },
          {
            img: require('../assets/img/goods/coco/咖啡时光/法式奶霜咖啡.jpg'),
            name: '法式奶霜咖啡',
            price: 22,
            percent: 71,
            id: 85,
            cost: 6.34
          },
          {
            img: require('../assets/img/goods/coco/咖啡时光/卡布奇诺.jpg'),
            name: '卡布奇诺',
            price: 20,
            percent: 84,
            id: 457,
            cost: 3.3
          }
        ]
      },
      {
        title: '醇香奶茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/醇香奶茶/珍珠奶茶.jpg'),
            name: '珍珠奶茶',
            price: 15,
            percent: 82.73,
            id: 1252,
            cost: 3.87
          },
          {
            img: require('../assets/img/goods/coco/醇香奶茶/奶茶三兄弟.jpg'),
            name: '奶茶三兄弟',
            price: 18,
            percent: 78,
            id: 471,
            cost: 3.89
          },
          {
            img: require('../assets/img/goods/coco/醇香奶茶/红豆奶茶.jpg'),
            name: '红豆奶茶',
            price: 16,
            percent: 78,
            id: 495,
            cost: 3.49
          },
          {
            img: require('../assets/img/goods/coco/醇香奶茶/布丁奶茶.jpg'),
            name: '布丁奶茶',
            price: 17,
            percent: 77,
            id: 496,
            cost: 3.83
          },
          {
            img: require('../assets/img/goods/coco/醇香奶茶/Coco奶茶.jpg'),
            name: 'Coco奶茶',
            price: 15,
            percent: 79,
            id: 1140,
            cost: 3.18
          }
        ]
      },
      {
        title: '法式奶霜',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/法式奶霜/法式奶霜红茶.jpg'),
            name: '法式奶霜红茶',
            price: 17,
            percent: 96,
            id: 38,
            cost: 0.75
          },
          {
            img: require('../assets/img/goods/coco/法式奶霜/法式奶霜绿茶.jpg'),
            name: '法式奶霜绿茶',
            price: 17,
            percent: 89,
            id: 40,
            cost: 1.86
          }
        ]
      },
      {
        title: '牧场牛奶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/牧场牛奶/红茶拿铁.jpg'),
            name: '红茶拿铁',
            price: 18,
            percent: 81.72,
            id: 1124,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/coco/牧场牛奶/珍珠拿铁.jpg'),
            name: '珍珠拿铁',
            price: 20,
            percent: 77.35,
            id: 1225,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/coco/牧场牛奶/鲜芋青稞牛奶.jpg'),
            name: '鲜芋青稞牛奶',
            price: 20,
            percent: 70.85,
            id: 1257,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/coco/牧场牛奶/焦糖奶茶.jpg'),
            name: '焦糖奶茶',
            price: 15,
            percent: 81.72,
            id: 1254,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/coco/牧场牛奶/珍珠烤奶茶.jpg'),
            name: '珍珠烤奶茶',
            price: 15,
            percent: 82.73,
            id: 1252,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/coco/牧场牛奶/双拼奶茶.jpg'),
            name: '双拼奶茶',
            price: 20,
            percent: 80.10,
            id: 1255,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/coco/牧场牛奶/法式奶霜烤茶.jpg'),
            name: '法式奶霜烤茶',
            price: 20,
            percent: 70.85,
            id: 1257,
            cost: 4.53
          },
        ]
      },
      {
        title: '浓情可可',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/浓情可可/珍珠巧克力.jpg'),
            name: '珍珠巧克力',
            price: 18,
            percent: 66.11,
            id: 1008,
            cost: 4.38
          },
          {
            img: require('../assets/img/goods/coco/浓情可可/Coco巧克力.jpg'),
            name: 'Coco巧克力',
            price: 16,
            percent: 82,
            id: 53,
            cost: 2.83
          }
        ]
      },
      {
        title: '鲜果鲜茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/鲜果鲜茶/戳戳鲜柚绿茶.jpg'),
            name: '戳戳鲜柚绿茶',
            price: 17,
            percent: 85,
            id: 1142,
            cost: 2.57
          },
          {
            img: require('../assets/img/goods/coco/鲜果鲜茶/鲜橙水果茶.jpg'),
            name: '鲜橙水果茶',
            price: 18,
            percent: 89.44,
            id: 1249,
            cost: 1.66
          },
          {
            img: require('../assets/img/goods/coco/鲜果鲜茶/鲜百香双响炮.jpg'),
            name: '鲜百香双响炮',
            price: 16,
            percent: 92,
            id: 391,
            cost: 1.32
          },
          {
            img: require('../assets/img/goods/coco/鲜果鲜茶/金桔柠檬汁.jpg'),
            name: '金桔柠檬汁',
            price: 16,
            percent: 95,
            id: 159,
            cost: 0.73
          }
        ]
      },
      {
        title: '益菌多多',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coco/益菌多多/戳戳鲜柚养乐多.jpg'),
            name: '戳戳鲜柚养乐多',
            price: 18,
            percent: 73,
            id: 1150,
            cost: 4.88
          },
          {
            img: require('../assets/img/goods/coco/益菌多多/柠檬椰果养乐多.jpg'),
            name: '柠檬椰果养乐多',
            price: 17,
            percent: 85,
            id: 1163,
            cost: 2.6
          },
          {
            img: require('../assets/img/goods/coco/益菌多多/绿茶养乐多.jpg'),
            name: '绿茶养乐多',
            price: 17,
            percent: 81,
            id: 1170,
            cost: 3.18
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          }
        ]
      }
    ]
  },
  //台式奶茶菜单
  {
    //菜单页顶部名称
    title: '台式奶茶菜单',
    //菜单页banner图片,
    img: require('../assets/img/banner/一点点banner.jpg'),
    //菜单图标/左侧选中字体/毛利率字体颜色
    color: '#008864',
    //菜单页左侧栏数据 与右侧栏数据必须一一对应
    type: ['找好茶', '找奶茶', '找口感', '找新鲜', '开店设备'],
    //菜单页右侧栏数据 与左侧栏数据必须一一对应
    list: [{
        //商品组的头部标题
        title: '找好茶',
        //商品组类型  类型为方案填写 food / 为设备填写 equipment
        type: 'food',
        //商品组数据 [ ] 中每一个 {} 包裹起来的数据为商品组中的一个商品详情
        goods: [{
            //商品组单个商品 图片
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/茉莉绿茶.png'),
            //商品组单个商品 名称
            name: '茉莉绿茶',
            // 商品组单个商品 价格
            price: 10,
            // 商品组单个商品 毛利率
            percent: 83,
            // 商品组单个商品 id
            // 如果是设备则为 code:'对应设备code码'
            id: 338,
            // 商品组单个商品 成本
            cost: 1.69
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/阿萨姆红茶.png'),
            name: '阿萨姆红茶',
            price: 10,
            percent: 86,
            id: 341,
            cost: 1.43
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/四季春茶.png'),
            name: '四季春茶',
            price: 10,
            percent: 79,
            id: 332,
            cost: 2.08
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/冻顶乌龙茶.png'),
            name: '冻顶乌龙茶',
            price: 10,
            percent: 85,
            id: 297,
            cost: 1.55
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/翡翠柠檬.png'),
            name: '翡翠柠檬',
            price: 16,
            percent: 88,
            id: 41,
            cost: 1.86
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/蜂蜜绿.png'),
            name: '蜂蜜绿',
            price: 16,
            percent: 90,
            id: 164,
            cost: 1.63
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/养乐多绿.png'),
            name: '养乐多绿',
            price: 18,
            percent: 84,
            id: 1170,
            cost: 2.91
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/1找好茶/冰淇淋红茶.png'),
            name: '冰淇淋红茶',
            price: 18,
            percent: 83,
            id: 489,
            cost: 3.08
          }
        ]
      },
      {
        title: '找奶茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/奶茶.png'),
            name: '奶茶',
            price: 16,
            percent: 82,
            id: 1140,
            cost: 2.95
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/奶绿.png'),
            name: '奶绿',
            price: 14,
            percent: 88,
            id: 339,
            cost: 1.68
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/四季奶青.png'),
            name: '四季奶青',
            price: 14,
            percent: 86,
            id: 333,
            cost: 1.92
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/乌龙奶茶.png'),
            name: '乌龙奶茶',
            id: 1252,
            price: 15,
            percent: 82.73,
            cost: 1.68
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/红茶玛奇朵.png'),
            name: '红茶玛奇朵',
            id: 343,
            price: 16,
            percent: 79,
            cost: 3.44
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/乌龙玛奇朵.png'),
            name: '乌龙玛奇朵',
            id: 337,
            price: 16,
            percent: 83,
            cost: 2.73
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/阿华田.png'),
            name: '阿华田',
            id: 53,
            price: 18,
            percent: 84,
            cost: 2.83
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/红茶拿铁.png'),
            name: '红茶拿铁',
            id: 1124,
            price: 18,
            percent: 77,
            cost: 4.23
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/2找奶茶/茉莉奶茶.jpg'),
            name: '茉莉奶茶',
            id: 1253,
            price: 15,
            percent: 82.47,
            cost: 1.68
          },
        ]
      },
      {
        title: '找口感',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/台式奶茶菜单/3找口感/波霸奶茶.png'),
            name: '波霸奶茶',
            id: 469,
            price: 14,
            percent: 82,
            cost: 2.54
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/3找口感/波霸奶绿.png'),
            name: '波霸奶绿',
            id: 470,
            price: 14,
            percent: 84,
            cost: 2.28
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/3找口感/珍珠奶茶.png'),
            name: '珍珠奶茶',
            id: 492,
            price: 14,
            percent: 72,
            cost: 3.87
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/3找口感/椰果奶茶.png'),
            name: '椰果奶茶',
            id: 452,
            price: 14,
            percent: 80,
            cost: 2.76
          }
        ]
      },
      {
        title: '找新鲜',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/台式奶茶菜单/4找新鲜/柠檬汁.png'),
            name: '柠檬汁',
            id: 139,
            price: 16,
            percent: 96,
            cost: 0.68
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/4找新鲜/金桔柠檬.png'),
            name: '金桔柠檬',
            id: 159,
            price: 16,
            percent: 95,
            cost: 0.73
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/4找新鲜/柠檬蜜.png'),
            name: '柠檬蜜',
            id: 76,
            price: 18,
            percent: 95,
            cost: 0.88
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/4找新鲜/柠檬养乐多.png'),
            name: '柠檬养乐多',
            id: 1163,
            price: 20,
            percent: 87,
            cost: 2.56
          },
          {
            img: require('../assets/img/goods/台式奶茶菜单/4找新鲜/蜜茶.png'),
            name: '蜜茶',
            id: 1046,
            price: 16,
            percent: 92,
            cost: 1.27
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm '
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980 '
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm '
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm '
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm '
          }
        ]
      }
    ]
  },
  //港式奶茶菜单
  {
    title: '港式奶茶菜单',
    img: require('../assets/img/banner/桂源铺banner.jpg'),
    color: '#008864',
    type: ['招牌柠茶', '招牌奶茶', '港式小食', '开店设备'],
    list: [{
        title: '招牌柠茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/港式奶茶菜单/1招牌柠茶/冻柠茶.jpg'),
            name: '冻柠茶',
            price: 18,
            percent: 86.00,
            id: 1217,
            cost: 1.56
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/1招牌柠茶/冻柠柚.jpg'),
            name: '冻柠柚',
            price: 12,
            percent: 87,
            id: 71,
            cost: 1.56
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/1招牌柠茶/热柠柚.jpg'),
            name: '热柠柚',
            price: 12,
            percent: 87,
            id: 71,
            cost: 1.56
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/1招牌柠茶/玫瑰柠.jpg'),
            name: '玫瑰柠',
            price: 19,
            percent: 61,
            id: 908,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/1招牌柠茶/蜜桃萃乌龙.jpg'),
            name: '蜜桃萃乌龙',
            price: 17,
            percent: 80,
            id: 553,
            cost: 3.35
          },
        ]
      },
      {
        title: '招牌奶茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/招牌特调奶茶.jpg'),
            name: '招牌特调奶茶',
            price: 13,
            percent: 67,
            id: 1140,
            cost: 4.25
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/波波特调奶茶.jpg'),
            name: '波波特调奶茶',
            price: 15,
            percent: 64,
            id: 1066,
            cost: 5.46
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/黑糖波波特调奶茶.jpg'),
            name: '黑糖波波特调奶茶',
            price: 17,
            percent: 79,
            id: 859,
            cost: 3.65
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/白月光鸳鸯.jpg'),
            name: '白月光鸳鸯茶',
            price: 19,
            percent: 67,
            id: 1095,
            cost: 6.31
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/TVB咖啡.jpg'),
            name: 'TVB咖啡',
            price: 19,
            percent: 67,
            id: 1095,
            cost: 6.31
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/红豆特调奶茶.jpg'),
            name: '红豆特调奶茶',
            price: 17,
            percent: 62,
            id: 596,
            cost: 6.4
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/阿华田.jpg'),
            name: '阿华田',
            price: 15,
            percent: 74,
            id: 53,
            cost: 3.94
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/招牌热丝袜奶茶.jpg'),
            name: '招牌热丝袜奶茶',
            price: 15,
            percent: 64,
            id: 1066,
            cost: 5.46
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/招牌冻丝袜奶茶.jpg'),
            name: '招牌冻丝袜奶茶',
            price: 15,
            percent: 64,
            id: 492,
            cost: 5.46
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/海盐焦糖冻丝袜奶茶.jpg'),
            name: '海盐焦糖冻丝袜袜奶茶',
            price: 15,
            percent: 64,
            id: 492,
            cost: 5.46
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/铜锣湾鸳鸯.jpg'),
            name: '铜锣湾鸳鸯',
            price: 19,
            percent: 67,
            id: 1095,
            cost: 6.31
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/招牌特调奶茶（升级大杯）.jpg'),
            name: '招牌特调奶茶（升级大杯）',
            price: 20,
            percent: 70,
            id: 1140,
            cost: 5.95
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/2招牌奶茶/红豆特调奶茶（升级大杯）.jpg'),
            name: '红豆特调奶茶（升级大杯）',
            price: 20,
            percent: 55,
            id: 596,
            cost: 8.96
          }
        ]
      },
      {
        title: '港式小食',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/港式奶茶菜单/3港式小食/原味鸡蛋仔.jpg'),
            name: '原味鸡蛋仔',
            id: 1073,
            price: 16,
            percent: 56,
            cost: 7.08
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/3港式小食/北海道牛乳鸡蛋仔.jpg'),
            name: '北海道牛乳鸡蛋仔',
            id: 983,
            price: 16,
            percent: 52,
            cost: 7.64
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/3港式小食/朱古力鸡蛋仔.jpg'),
            name: '朱古力鸡蛋仔',
            id: 801,
            price: 20,
            percent: 47,
            cost: 10.52
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/3港式小食/红豆鸡蛋仔.jpg'),
            name: '红豆鸡蛋仔',
            id: 799,
            price: 18,
            percent: 48,
            cost: 9.3
          },
          {
            img: require('../assets/img/goods/港式奶茶菜单/3港式小食/蜜研黑糖布丁.jpg'),
            name: '蜜研黑糖布丁',
            id: 49,
            price: 13,
            percent: 78,
            cost: 2.8
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm '
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980 '
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '尺寸：18.5*43*52cm '
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm '
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm '
          },
          {
            img: require('../assets/img/goods/设备/蛋仔机.jpg'),
            name: '康普仕机械版蛋仔机',
            code: 'QK15',
            model: '225*330*250 '
          }
        ]
      }
    ]
  },
  //新式茶饮菜单
  {
    title: '新式茶饮菜单',
    img: require('../assets/img/banner/naixuecha.jpg'),
    color: '#A9BC25',
    type: [
      '霸气鲜果',
      '宝藏鲜奶茶',
      '咖啡',
      '冷泡茶',
      '霸气芝士鲜果',
      '芝士茗茶',
      '开店设备'
    ],
    list: [{
        title: '霸气鲜果',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/naixuecha/霸气鲜果/霸气凤梨.jpg'),
            name: '霸气凤梨',
            price: 25,
            percent: 84.84,
            id: 1248,
            cost: 3.27
          },
          {
            img: require('../assets/img/goods/naixuecha/霸气鲜果/霸气橙子.jpg'),
            name: '霸气橙子',
            price: 25,
            percent: 89.44,
            id: 1249,
            cost: 4.96
          },
          {
            img: require('../assets/img/goods/naixuecha/霸气鲜果/霸气西柚.jpg'),
            name: '霸气西柚',
            price: 25,
            percent: 78.94,
            id: 1230,
            cost: 3.58
          },
          {
            img: require('../assets/img/goods/naixuecha/霸气鲜果/霸气绿柠檬.jpg'),
            name: '霸气柠檬',
            price: 25,
            percent: 89.92,
            id: 1217,
            cost: 3.58
          },
          {
            img: require('../assets/img/goods/naixuecha/霸气鲜果/霸气百香多多.jpg'),
            name: '霸气百香多多',
            price: 25,
            percent: 78.52,
            id: 1250,
            cost: 3.58
          }
        ]
      },
      {
        title: '宝藏鲜奶茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/naixuecha/宝藏鲜奶茶/黑糖宝藏茶.jpg'),
            name: '黑糖宝藏茶',
            price: 22,
            percent: 84,
            id: 495,
            cost: 3.49
          },
          {
            img: require('../assets/img/goods/naixuecha/宝藏鲜奶茶/冻顶宝藏茶.jpg'),
            name: '冻顶宝藏茶',
            price: 22,
            percent: 88,
            id: 469,
            cost: 2.68
          },
          {
            img: require('../assets/img/goods/naixuecha/宝藏鲜奶茶/红韵宝藏茶.jpg'),
            name: '红韵宝藏茶',
            price: 22,
            percent: 88,
            id: 1140,
            cost: 2.61
          },
          {
            img: require('../assets/img/goods/naixuecha/宝藏鲜奶茶/可可宝藏茶.jpg'),
            name: '可可宝藏茶',
            price: 20,
            percent: 66.11,
            id: 1008,
            cost: 2.61
          }
        ]
      },
      {
        title: '咖啡',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/naixuecha/咖啡/大咖鸳鸯.jpg'),
          name: '大咖鸳鸯',
          price: 25,
          percent: 75,
          id: 1095,
          cost: 6.31
        }]
      },
      {
        title: '冷泡茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/naixuecha/冷泡茶/青心乌龙.jpg'),
            name: '青心乌龙',
            price: 20,
            percent: 97,
            id: 1147,
            cost: 0.7
          },
          {
            img: require('../assets/img/goods/naixuecha/冷泡茶/冻顶乌龙.jpg'),
            name: '冻顶乌龙',
            price: 22,
            percent: 90,
            id: 1145,
            cost: 2.3
          },
          {
            img: require('../assets/img/goods/naixuecha/冷泡茶/腊梅毛峰.jpg'),
            name: '腊梅毛峰',
            price: 22,
            percent: 86,
            id: 1142,
            cost: 3.1
          }
        ]
      },
      {
        title: '霸气芝士鲜果',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/naixuecha/霸气芝士鲜果/霸气芝士草莓.jpg'),
            name: '霸气芝士草莓',
            price: 28,
            percent: 81,
            id: 465,
            cost: 5.36
          },
          {
            img: require('../assets/img/goods/naixuecha/霸气芝士鲜果/霸气芝士莓莓莓.jpg'),
            name: '霸气芝士莓莓莓',
            price: 28,
            percent: 76,
            id: 1122,
            cost: 6.79
          }
        ]
      },
      {
        title: '芝士茗茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/naixuecha/芝士茗茶/芝士阿里山初露.jpg'),
            name: '芝士阿里山初露',
            price: 21,
            percent: 85,
            id: 913,
            cost: 3.16
          },
          {
            img: require('../assets/img/goods/naixuecha/芝士茗茶/芝士茉莉毛尖.jpg'),
            name: '芝士茉莉毛尖',
            price: 22,
            percent: 86,
            id: 467,
            cost: 2.99
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          }
        ]
      }
    ]
  },
  //网红奶茶店菜单
  {
    title: '网红奶茶店菜单',
    img: require('../assets/img/banner/thealley.jpg'),
    color: '#48491C',
    type: [
      '黑糖鹿丸',
      '鹿角特调',
      '浓醇鲜牛乳',
      '鹿角鲜泡茶',
      '奶香系列',
      '开店设备'
    ],
    list: [{
        title: '黑糖鹿丸',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/thealley/黑糖鹿丸/鹿丸噗哩.jpg'),
            name: '鹿丸噗哩',
            price: 18,
            percent: 84,
            id: 859,
            cost: 2.82
          },
          {
            img: require('../assets/img/goods/thealley/黑糖鹿丸/黑糖鹿丸鲜奶.jpg'),
            name: '黑糖鹿丸鲜奶',
            price: 18,
            percent: 84,
            id: 859,
            cost: 2.82
          },
          {
            img: require('../assets/img/goods/thealley/黑糖鹿丸/鹿丸可可鲜奶.jpg'),
            name: '鹿丸可可鲜奶',
            price: 20,
            percent: 70,
            id: 1008,
            cost: 5.95
          }
        ]
      },
      {
        title: '鹿角特调',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/thealley/鹿角特调/热带百香绿.jpg'),
          name: '热带百香绿',
          price: 18,
          percent: 93,
          id: 391,
          cost: 1.32
        }]
      },
      {
        title: '浓醇鲜牛乳',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/thealley/浓醇鲜牛乳/阿萨姆鲜牛乳.jpg'),
            name: '阿萨姆鲜牛乳',
            price: 15,
            percent: 81.72,
            id: 1254,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/thealley/浓醇鲜牛乳/阿萨姆鲜牛乳.jpg'),
            name: '初恋柠檬',
            price: 24,
            percent: 89.50,
            id: 1217,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/thealley/浓醇鲜牛乳/阿萨姆鲜牛乳.jpg'),
            name: '可可鲜牛乳',
            price: 25,
            percent: 66.11,
            id: 1008,
            cost: 4.53
          },
        ]
      },
      {
        title: '鹿角鲜泡茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/thealley/鹿角鲜泡茶/白桃乌龙茶.jpg'),
            name: '白桃乌龙茶',
            price: 15,
            percent: 84,
            id: 553,
            cost: 2.41
          },
          {
            img: require('../assets/img/goods/thealley/鹿角鲜泡茶/茗品铁观音.jpg'),
            name: '茗品铁观音',
            price: 15,
            percent: 92,
            id: 300,
            cost: 1.19
          },
          {
            img: require('../assets/img/goods/thealley/鹿角鲜泡茶/皇家九号红茶.jpg'),
            name: '皇家九号红茶',
            price: 15,
            percent: 91,
            id: 296,
            cost: 1.33
          }
        ]
      },
      {
        title: '奶香系列',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/thealley/奶香系列/皇家九号奶茶.jpg'),
            name: '皇家九号奶茶',
            price: 18,
            percent: 89,
            id: 79,
            cost: 1.95
          },
          {
            img: require('../assets/img/goods/thealley/奶香系列/鹿角三巷奶茶.jpg'),
            name: '鹿角三巷奶茶',
            price: 20,
            percent: 81,
            id: 471,
            cost: 3.89
          },
          {
            img: require('../assets/img/goods/thealley/奶香系列/鹿角奶茶.jpg'),
            name: '鹿角奶茶',
            price: 18,
            percent: 85,
            id: 494,
            cost: 2.79
          },
          {
            img: require('../assets/img/goods/thealley/奶香系列/小山绿奶茶.jpg'),
            name: '小山绿奶茶',
            price: 15,
            percent: 87,
            id: 339,
            cost: 1.99
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          }
        ]
      }
    ]
  },
  //咖啡厅菜单
  {
    title: '咖啡厅菜单',
    img: require('../assets/img/banner/星巴克banner.jpg'),
    color: '#008864',
    type: [
      '玩味冰调',
      '咖啡饮品',
      '冰摇茶&茶拿铁',
      '星冰乐',
      '巧克力饮品',
      '蛋糕小点',
      '三明治',
      '色拉',
      '卷',
      '开店设备'
    ],
    list: [{
        title: '玩味冰调',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/1玩味冰调/橙柚派对.jpg'),
            name: '橙柚派对',
            price: 28,
            percent: 83,
            id: 1123,
            cost: 4.71
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/1玩味冰调/橘香莫吉托.jpg'),
            name: '橘香莫吉托',
            price: 28,
            percent: 83,
            id: 791,
            cost: 4.71
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/1玩味冰调/蓝莓星空.jpg'),
            name: '蓝莓星空',
            price: 24,
            percent: 88,
            id: 598,
            cost: 2.81
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/1玩味冰调/气炫冰山美式.jpg'),
            name: '气炫冰山美式',
            price: 32,
            percent: 83,
            id: 455,
            cost: 5.3
          }
        ]
      },
      {
        title: '咖啡饮品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/冷萃冰咖啡.png'),
            name: '冷萃冰咖啡',
            price: 28,
            percent: 91,
            id: 787,
            cost: 2.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/轻甜奶油冷萃.png'),
            name: '轻甜奶油冷萃',
            price: 24,
            percent: 81,
            id: 862,
            cost: 4.64
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/拿铁.png'),
            name: '拿铁',
            price: 24,
            percent: 84,
            id: 128,
            cost: 3.75
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/香草拿铁.png'),
            name: '香草拿铁',
            price: 25,
            percent: 82,
            id: 365,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/榛果拿铁.png'),
            name: '榛果拿铁',
            price: 25,
            percent: 82,
            id: 366,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/焦糖玛奇朵.png'),
            name: '焦糖玛奇朵',
            price: 28,
            percent: 82,
            id: 63,
            cost: 4.95
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/美式咖啡.png'),
            name: '美式咖啡',
            price: 21,
            percent: 94,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/2咖啡饮品/摩卡.png'),
            name: '摩卡',
            price: 28,
            percent: 78,
            id: 85,
            cost: 6.19
          }
        ]
      },
      {
        title: '冰摇茶&茶拿铁',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/3冰摇茶&茶拿铁/红茶拿铁.png'),
            name: '红茶拿铁',
            price: 32,
            percent: 86,
            id: 1124,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/3冰摇茶&茶拿铁/冰摇桃桃乌龙茶.png'),
            name: '冰摇桃桃乌龙茶',
            price: 24,
            percent: 90,
            id: 553,
            cost: 2.41
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/3冰摇茶&茶拿铁/冰摇红莓黑加仑茶.png'),
            name: '冰摇红莓黑加仑茶',
            price: 28,
            percent: 85,
            id: 224,
            cost: 4.25
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/3冰摇茶&茶拿铁/冰摇芒果花草茶.png'),
            name: '冰摇芒果花草茶',
            price: 28,
            percent: 78,
            id: 955,
            cost: 6.11
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/3冰摇茶&茶拿铁/冰摇柠檬茶.jpg'),
            name: '冰摇柠檬茶',
            price: 28,
            percent: 80,
            id: 908,
            cost: 5.68
          }
        ]
      },
      {
        title: '星冰乐',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/4星冰乐/香草风味星冰乐.png'),
            name: '香草风味星冰乐',
            price: 30,
            percent: 85,
            id: 232,
            cost: 4.36
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/4星冰乐/芒果西番莲果茶星冰乐.png'),
            name: '芒果西番莲果茶星冰乐',
            price: 28,
            percent: 85,
            id: 249,
            cost: 4.18
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/4星冰乐/摩卡可可碎片星冰乐.png'),
            name: '摩卡可可碎片星冰乐',
            price: 28,
            percent: 84,
            id: 872,
            cost: 4.39
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/4星冰乐/焦糖咖啡星冰乐.png'),
            name: '焦糖咖啡星冰乐',
            price: 32,
            percent: 87,
            id: 349,
            cost: 4.32
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/4星冰乐/榛果风味摩卡星冰乐.png'),
            name: '榛果风味摩卡星冰乐',
            price: 34,
            percent: 79,
            id: 234,
            cost: 7.06
          }
        ]
      },
      {
        title: '巧克力饮品',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/咖啡厅菜单/5巧克力饮品/经典热巧克力饮品.png'),
          name: '经典热巧克力饮品',
          price: 28,
          percent: 90,
          id: 53,
          cost: 2.84
        }]
      },
      {
        title: '蛋糕小点',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/茶瓦纳桃桃千层蛋糕.png'),
            name: '茶瓦纳桃桃千层蛋糕',
            price: 32,
            percent: 57,
            id: 1174,
            cost: 13.8
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/香芒清椰风味酸奶慕斯蛋糕.png'),
            name: '香芒清椰风味酸奶慕斯蛋糕',
            price: 25,
            percent: 70,
            id: 903,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/星巴克咖啡提拉米苏蛋糕.png'),
            name: '星巴克咖啡提拉米苏蛋糕',
            price: 25,
            percent: 70,
            id: 906,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/纽约风浓郁重芝士蛋糕.png'),
            name: '纽约风浓郁重芝士蛋糕',
            price: 25,
            percent: 70,
            id: 904,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/莓果森林风味酸奶慕斯蛋糕.png'),
            name: '莓果森林风味酸奶慕斯蛋糕',
            price: 25,
            percent: 70,
            id: 902,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/坚果派对风味酸奶慕斯蛋糕.png'),
            name: '坚果派对风味酸奶慕斯蛋糕',
            price: 25,
            percent: 70,
            id: 907,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/法式蛋奶乐芙朗.png'),
            name: '法式蛋奶乐芙朗',
            price: 15,
            percent: 74,
            id: 848,
            cost: 3.97
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/浓醇三重黑巧克力蛋糕.png'),
            name: '浓醇三重黑巧克力蛋糕',
            price: 25,
            percent: 70,
            id: 905,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/火腿芝士可颂.png'),
            name: '火腿芝士可颂',
            price: 18,
            percent: 70,
            id: 883,
            cost: 5.42
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/6蛋糕小点/法式香酥可颂.png'),
            name: '法式香酥可颂',
            price: 18,
            percent: 72,
            id: 751,
            cost: 4.97
          }
        ]
      },
      {
        title: '三明治',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/7三明治/意式青酱鸡肉三明治.png'),
            name: '意式青酱鸡肉三明治',
            price: 25,
            percent: 77,
            id: 994,
            cost: 5.8
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/7三明治/圣诞火鸡芝士三明治.png'),
            name: '圣诞火鸡芝士三明治',
            price: 28,
            percent: 73,
            id: 696,
            cost: 7.52
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/7三明治/德式牛肉三明治.png'),
            name: '德式牛肉三明治',
            price: 32,
            percent: 83,
            id: 876,
            cost: 5.5
          }
        ]
      },
      {
        title: '色拉',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/8色拉/熏鸡色拉.png'),
            name: '熏鸡色拉',
            price: 18,
            percent: 68,
            id: 1109,
            cost: 5.8
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/8色拉/黑椒牛肉谷物土豆色拉.png'),
            name: '黑椒牛肉谷物土豆色拉',
            price: 28,
            percent: 69,
            id: 1028,
            cost: 8.8
          }
        ]
      },
      {
        title: '卷',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/咖啡厅菜单/9卷/卡萨鸡肉卷.png'),
            name: '卡萨鸡肉卷',
            price: 28,
            percent: 71,
            id: 605,
            cost: 8
          },
          {
            img: require('../assets/img/goods/咖啡厅菜单/9卷/芒果鸡肉卷.png'),
            name: '芒果鸡肉卷',
            price: 22,
            percent: 70,
            id: 671,
            cost: 6.5
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/快速烹饪烤箱E1S.jpg'),
            name: '快速烹饪烤箱E1S',
            code: 'MN02',
            model: '407*538*588mm'
          },
          {
            img: require('../assets/img/goods/设备/快速微波烤箱E2s.jpg'),
            name: 'Merrychef-E2s快速微波烤箱',
            code: 'QX254',
            model: '356*595*620'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //休闲咖啡菜单
  {
    title: '休闲咖啡菜单',
    img: require('../assets/img/banner/漫咖啡banner.jpg'),
    color: '#cf0f2c',
    type: [
      '咖啡',
      '无咖啡因',
      '冰乐',
      '思慕雪',
      '汽水',
      '茶饮',
      '松饼',
      '三明治&汉堡',
      '色拉',
      '卷',
      '开店设备'
    ],
    list: [{
        title: '咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/美式咖啡.jpg'),
            name: '美式咖啡',
            price: 21,
            percent: 94,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/咖啡拿铁.jpg'),
            name: '咖啡拿铁',
            price: 24,
            percent: 84,
            id: 128,
            cost: 3.75
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/卡布奇诺.jpg'),
            name: '卡布奇诺',
            price: 25,
            percent: 87,
            id: 457,
            cost: 3.3
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/焦糖玛奇朵.jpg'),
            name: '焦糖玛奇朵',
            price: 28,
            percent: 82,
            id: 63,
            cost: 4.95
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/香草拿铁.jpg'),
            name: '香草拿铁',
            price: 25,
            percent: 82,
            id: 365,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/咖啡摩卡.jpg'),
            name: '咖啡摩卡',
            price: 28,
            percent: 78,
            id: 85,
            cost: 6.19
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/榛果焦糖拿铁.jpg'),
            name: '榛果焦糖拿铁',
            price: 25,
            percent: 82,
            id: 366,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/1咖啡/云端咖啡.jpg'),
            name: '云端咖啡',
            price: 25,
            percent: 84,
            id: 597,
            cost: 4.07
          }
        ]
      },
      {
        title: '无咖啡因',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/2无咖啡因/紫薯拿铁.jpg'),
            name: '紫薯拿铁',
            price: 19,
            percent: 76,
            id: 947,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/2无咖啡因/红茶拿铁.jpg'),
            name: '红茶拿铁',
            price: 23,
            percent: 80,
            id: 1124,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/2无咖啡因/棉花糖热巧克力.jpg'),
            name: '棉花糖热巧克力',
            price: 22,
            percent: 87,
            id: 53,
            cost: 2.84
          }
        ]
      },
      {
        title: '冰乐',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/3冰乐/焦糖冰乐.jpg'),
            name: '焦糖冰乐',
            price: 32,
            percent: 73,
            id: 235,
            cost: 8.63
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/3冰乐/摩卡冰乐.jpg'),
            name: '摩卡冰乐',
            price: 29,
            percent: 85,
            id: 872,
            cost: 4.46
          }
        ]
      },
      {
        title: '思慕雪',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/4思慕雪/草莓芒果思慕雪.jpg'),
            name: '草莓芒果思慕雪',
            price: 22,
            percent: 81,
            id: 249,
            cost: 4.18
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/4思慕雪/芒果思慕雪.jpg'),
            name: '芒果思慕雪',
            price: 22,
            percent: 86,
            id: 106,
            cost: 3.03
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/4思慕雪/草莓思慕雪.jpg'),
            name: '草莓思慕雪',
            price: 22,
            percent: 80,
            id: 65,
            cost: 4.44
          }
        ]
      },
      {
        title: '汽水',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/5汽水/莫吉托.jpg'),
            name: '莫吉托',
            price: 22,
            percent: 79,
            id: 791,
            cost: 4.71
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/5汽水/蓝柠檬汽水.jpg'),
            name: '蓝柠檬汽水',
            price: 22,
            percent: 89,
            id: 909,
            cost: 2.53
          }
        ]
      },
      {
        title: '茶饮',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/中国红茶.jpg'),
            name: '中国红茶',
            price: 17,
            percent: 98,
            id: 296,
            cost: 0.3
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/普洱茶.jpg'),
            name: '普洱茶',
            price: 17,
            percent: 93,
            id: 295,
            cost: 1.15
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/百香果冰绿茶.jpg'),
            name: '百香果冰绿茶',
            price: 20,
            percent: 85,
            id: 403,
            cost: 2.93
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/草莓洛神花冰茶.jpg'),
            name: '草莓洛神花冰茶',
            price: 17,
            percent: 91,
            id: 1156,
            cost: 1.5
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/柑橘混合果茶.jpg'),
            name: '柑橘混合果茶',
            price: 17,
            percent: 87,
            id: 1113,
            cost: 2.13
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/蜂蜜柚子茶.jpg'),
            name: '蜂蜜柚子茶',
            price: 17,
            percent: 92,
            id: 1046,
            cost: 1.33
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/蜂蜜生姜茶.jpg'),
            name: '蜂蜜生姜茶',
            price: 22,
            percent: 83,
            id: 226,
            cost: 3.67
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/6茶饮/莓果茶.jpg'),
            name: '莓果茶',
            price: 19,
            percent: 87,
            id: 909,
            cost: 2.53
          }
        ]
      },
      {
        title: '松饼',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/4松饼/原味华夫饼.jpg'),
            name: '原味华夫饼',
            price: 35,
            percent: 79,
            id: 704,
            cost: 7.29
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/4松饼/巧克力松饼.jpg'),
            name: '巧克力松饼',
            price: 35,
            percent: 69,
            id: 705,
            cost: 11.02
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/4松饼/芝士松饼.jpg'),
            name: '芝士松饼',
            price: 35,
            percent: 77,
            id: 175,
            cost: 8.22
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/4松饼/蜂蜜面包.jpg'),
            name: '蜂蜜面包',
            price: 30,
            percent: 88,
            id: 517,
            cost: 3.47
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/4松饼/草莓松饼.jpg'),
            name: '草莓松饼',
            price: 32,
            percent: 84,
            id: 117,
            cost: 5.02
          }
        ]
      },
      {
        title: '三明治&汉堡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲咖啡菜单/8三明治&汉堡/火腿芝士帕尼尼.jpg'),
            name: '火腿芝士帕尼尼',
            price: 22,
            percent: 79,
            id: 772,
            cost: 4.7
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/8三明治&汉堡/韩式烤牛肉汉堡.jpg'),
            name: '韩式烤牛肉汉堡',
            price: 32,
            percent: 81,
            id: 606,
            cost: 6.2
          },
          {
            img: require('../assets/img/goods/休闲咖啡菜单/8三明治&汉堡/烤牛肉帕尼尼.jpg'),
            name: '烤牛肉帕尼尼',
            price: 22,
            percent: 75,
            id: 876,
            cost: 5.5
          }
        ]
      },
      {
        title: '色拉',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/休闲咖啡菜单/9色拉/培根面包丁色拉.jpg'),
          name: '培根面包丁色拉',
          price: 20,
          percent: 71,
          id: 1109,
          cost: 5.8
        }]
      },
      {
        title: '卷',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/休闲咖啡菜单/10卷/鸡肉番茄卷.jpg'),
          name: '鸡肉番茄卷',
          price: 18,
          percent: 82,
          id: 1060,
          cost: 3.2
        }]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          },
          {
            img: require('../assets/img/goods/设备/华夫饼机.jpg'),
            name: '康普仕-电脑版华夫饼机',
            code: 'QK21',
            model: '260*460*320'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/快速烹饪烤箱E1S.jpg'),
            name: '快速烹饪烤箱E1S',
            code: 'MN02',
            model: '407*538*588mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //互联网咖啡菜单
  {
    title: '互联网咖啡菜单',
    img: require('../assets/img/banner/lukin.jpg'),
    color: '#172F61',
    type: [
      '大师咖啡',
      '零度拿铁',
      '瑞纳冰',
      '经典饮品',
      '巧克力饮品',
      '卷',
      '三明治',
      '色拉',
      '开店设备'
    ],
    list: [{
        title: '大师咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/lukin/大师咖啡/标准美式.jpg'),
            name: '标准美式',
            price: 20,
            percent: 93,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/拿铁.jpg'),
            name: '拿铁',
            price: 22,
            percent: 83,
            id: 128,
            cost: 3.74
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/摩卡.jpg'),
            name: '摩卡',
            price: 24,
            percent: 74,
            id: 85,
            cost: 6.19
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/卡布奇诺.jpg'),
            name: '卡布奇诺',
            price: 22,
            percent: 83,
            id: 86,
            cost: 3.84
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/焦糖玛奇朵.jpg'),
            name: '焦糖玛奇朵',
            price: 24,
            percent: 78,
            id: 1115,
            cost: 5.35
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/香草拿铁.jpg'),
            name: '香草拿铁',
            price: 22,
            percent: 79,
            id: 365,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/榛果拿铁.jpg'),
            name: '榛果拿铁',
            price: 22,
            percent: 79,
            id: 366,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/lukin/大师咖啡/焦糖拿铁.jpg'),
            name: '焦糖拿铁',
            price: 24,
            percent: 80,
            id: 63,
            cost: 4.74
          }
        ]
      },
      {
        title: '零度拿铁',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/lukin/零度拿铁/红茶拿铁.jpg'),
          name: '红茶拿铁',
          price: 24,
          percent: 81,
          id: 1124,
          cost: 4.53
        }]
      },
      {
        title: '瑞纳冰',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/lukin/瑞纳冰/卡布奇诺瑞纳冰.jpg'),
            name: '卡布奇诺瑞纳冰',
            price: 27,
            percent: 74,
            id: 349,
            cost: 7.03
          },
          {
            img: require('../assets/img/goods/lukin/瑞纳冰/巧克力瑞纳冰.jpg'),
            name: '巧克力瑞纳冰',
            price: 25,
            percent: 84,
            id: 872,
            cost: 4.1
          }
        ]
      },
      {
        title: '经典饮品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/lukin/经典饮品/鲜萃冰摇柑橘百香果.jpg'),
            name: '鲜萃冰摇柑橘百香果',
            price: 22,
            percent: 88,
            id: 403,
            cost: 2.63
          },
          {
            img: require('../assets/img/goods/lukin/经典饮品/热巧克力.jpg'),
            name: '热巧克力',
            price: 22,
            percent: 87,
            id: 53,
            cost: 2.83
          }
        ]
      },
      {
        title: '巧克力饮品',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/lukin/经典饮品/鲜萃冰摇柑橘百香果.jpg'),
          name: '经典热巧克力饮品',
          price: 28,
          percent: 66.11,
          id: 1008,
          cost: 2.63
        }]
      },
      {
        title: '卷',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/lukin/卷/意大利烤鸡卷.jpg'),
            name: '意大利烤鸡卷',
            price: 18,
            percent: 82,
            id: 1060,
            cost: 3.2
          },
          {
            img: require('../assets/img/goods/lukin/卷/夏威夷菠萝火腿卷.jpg'),
            name: '夏威夷菠萝火腿卷',
            price: 18,
            percent: 64,
            id: 671,
            cost: 6.5
          }
        ]
      },
      {
        title: '三明治',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/lukin/三明治/火腿芝士羊角.jpg'),
            name: '火腿芝士羊角',
            price: 18,
            percent: 67,
            id: 875,
            cost: 5.98
          },
          {
            img: require('../assets/img/goods/lukin/三明治/尼斯吞拿鱼三明治.jpg'),
            name: '尼斯吞拿鱼三明治',
            price: 18,
            percent: 65,
            id: 1103,
            cost: 6.27
          }
        ]
      },
      {
        title: '色拉',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/lukin/色拉/牛肉土豆泥色拉.jpg'),
            name: '牛肉土豆泥色拉',
            price: 32,
            percent: 73,
            id: 1028,
            cost: 8.8
          },
          {
            img: require('../assets/img/goods/lukin/色拉/金枪鱼谷物色拉.jpg'),
            name: '金枪鱼谷物色拉',
            price: 28,
            percent: 76,
            id: 1029,
            cost: 6.8
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          }
        ]
      }
    ]
  },
  //休闲西餐厅菜单
  {
    title: '休闲西餐厅菜单',
    img: require('../assets/img/banner/必胜客banner.jpg'),
    color: '#CF0F2C',
    type: [
      '饮料',
      '咖啡',
      '甜品',
      '披萨',
      '意面',
      '小吃',
      '色拉',
      '牛排&菜品',
      '饭',
      '开店设备'
    ],
    list: [{
        title: '饮料',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/杨梅汁.jpg'),
            name: '杨梅汁饮料',
            price: 19,
            percent: 96,
            id: 159,
            cost: 0.77
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/热尊赏奶茶.jpg'),
            name: '尊赏丝滑奶茶',
            price: 20,
            percent: 73,
            id: 1066,
            cost: 5.46
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/清雅卡曼橘茶.jpg'),
            name: '清雅卡曼橘',
            price: 20,
            percent: 75,
            id: 309,
            cost: 4.96
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/冰柠檬红茶.jpg'),
            name: '柠檬红茶',
            price: 22,
            percent: 74,
            id: 908,
            cost: 5.68
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/白桃气泡乌龙茶.jpg'),
            name: '白桃气泡乌龙茶',
            price: 19,
            percent: 89,
            id: 1148,
            cost: 2.04
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/红柚气泡乌龙茶.jpg'),
            name: '红柚气泡乌龙茶',
            price: 19,
            percent: 81,
            id: 474,
            cost: 3.68
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/1饮料/香浓玉米汁.jpg'),
            name: '香浓玉米汁饮料',
            price: 20,
            percent: 81,
            id: 312,
            cost: 3.86
          }
        ]
      },
      {
        title: '咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/2咖啡/美式咖啡.jpg'),
            name: '美式咖啡',
            price: 20,
            percent: 93,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/2咖啡/卡布奇诺.jpg'),
            name: '卡布奇诺',
            price: 25,
            percent: 89,
            id: 86,
            cost: 2.65
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/2咖啡/摩卡.jpg'),
            name: '摩卡',
            price: 28,
            percent: 78,
            id: 85,
            cost: 6.19
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/2咖啡/拿铁.jpg'),
            name: '拿铁',
            price: 25,
            percent: 85,
            id: 128,
            cost: 3.74
          }
        ]
      },
      {
        title: '甜品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/3甜品/经典提拉米苏.jpg'),
            name: '经典提拉米苏',
            price: 18,
            percent: 58,
            id: 906,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/3甜品/咸蛋黄冰淇淋.jpg'),
            name: '咸蛋黄冰淇淋',
            price: 13,
            percent: 90,
            id: 215,
            cost: 1.36
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/3甜品/手作意式酸奶奶冻.jpg'),
            name: '手作意式酸奶奶冻',
            price: 18,
            percent: 76,
            id: 948,
            cost: 4.39
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/3甜品/秘密山丘.jpg'),
            name: '秘密山丘',
            price: 13,
            percent: 90,
            id: 193,
            cost: 1.36
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/3甜品/双球冰淇淋.jpg'),
            name: '双球冰淇淋',
            price: 13,
            percent: 90,
            id: 214,
            cost: 1.36
          }
        ]
      },
      {
        title: '披萨',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/4披萨/黑椒小牛披萨.jpg'),
            name: '黑椒小牛披萨',
            price: 78,
            percent: 85,
            id: 615,
            cost: 11.76
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/4披萨/大西洋珍鲑披萨.jpg'),
            name: '大西洋珍鲑披萨',
            price: 58,
            percent: 84,
            id: 942,
            cost: 9.43
          }
        ]
      },
      {
        title: '意面',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/5意面/海鲜墨鱼汁面.jpg'),
            name: '海鲜墨鱼汁面',
            price: 28,
            percent: 80,
            id: 891,
            cost: 5.65
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/5意面/西班牙风情海鲜面.jpg'),
            name: '西班牙风情海鲜面',
            price: 28,
            percent: 80,
            id: 698,
            cost: 5.6
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/5意面/黑松露菌菇面.jpg'),
            name: '黑松露菌菇面',
            price: 32,
            percent: 80,
            id: 722,
            cost: 6.3
          }
        ]
      },
      {
        title: '小吃',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/6小吃/鱼子炸虾球.jpg'),
            name: '鱼子炸虾球',
            price: 30,
            percent: 80,
            id: 723,
            cost: 6
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/6小吃/鲜虾咸蛋黄鸡翅.jpg'),
            name: '鲜虾咸蛋黄鸡翅',
            price: 28,
            percent: 73,
            id: 519,
            cost: 7.54
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/6小吃/意式凤尾虾.jpg'),
            name: '意式凤尾虾',
            price: 28,
            percent: 71,
            id: 665,
            cost: 7.99
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/6小吃/北美特色风情烤翅.jpg'),
            name: '北美特色枫情烤翅',
            price: 28,
            percent: 80,
            id: 511,
            cost: 5.5
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/6小吃/小食拼盘.jpg'),
            name: '小食拼盘',
            price: 68,
            percent: 83,
            id: 1025,
            cost: 11.6
          }
        ]
      },
      {
        title: '色拉',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/7色拉/海鲜水果色拉.jpg'),
            name: '海鲜水果色拉',
            price: 32,
            percent: 74,
            id: 663,
            cost: 8.2
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/7色拉/蔬菜色拉.jpg'),
            name: '烤蔬菜色拉',
            price: 22,
            percent: 75,
            id: 897,
            cost: 5.4
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/7色拉/牛油果鸡肉色拉.jpg'),
            name: '牛油果鸡肉色拉',
            price: 22,
            percent: 77,
            id: 661,
            cost: 5.1
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/7色拉/尼斯色拉.jpg'),
            name: '尼斯色拉',
            price: 22,
            percent: 84,
            id: 738,
            cost: 3.5
          }
        ]
      },
      {
        title: '牛排&菜品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/休闲西餐厅菜单/8牛排&菜品/苔菜扇贝.jpg'),
            name: '苔菜扇贝',
            price: 26,
            percent: 83,
            id: 1079,
            cost: 4.5
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/8牛排&菜品/黄油肋眼牛排.jpg'),
            name: '黄油肋眼牛排',
            price: 78,
            percent: 80,
            id: 611,
            cost: 15.63
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/8牛排&菜品/风味牛排.jpg'),
            name: '风味牛排',
            price: 88,
            percent: 83,
            id: 964,
            cost: 14.86
          },
          {
            img: require('../assets/img/goods/休闲西餐厅菜单/8牛排&菜品/岩烤香嫩牛排.jpg'),
            name: '岩烤香嫩牛排',
            price: 88,
            percent: 84,
            id: 1032,
            cost: 13.73
          }
        ]
      },
      {
        title: '饭',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/休闲西餐厅菜单/9饭/法式菌菇烩饭.jpg'),
          name: '法式菌菇烩饭',
          price: 48,
          percent: 83,
          id: 1175,
          cost: 8.29
        }]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/快速微波烤箱E2s.jpg'),
            name: 'Merrychef-E2s快速微波烤箱',
            code: 'QX254',
            model: '356*595*620'
          },
          {
            img: require('../assets/img/goods/设备/炸锅.jpg'),
            name: 'WELBILT-RE114-CSE炸锅',
            code: 'QX252',
            model: '397*786*1150'
          },
          {
            img: require('../assets/img/goods/设备/双头汤锅.jpg'),
            name: '双头台上式多功能蒸煮汤锅RHW-2',
            code: 'HG03',
            model: '630*330*343mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //西式快餐菜单
  {
    title: '西式快餐菜单',
    img: require('../assets/img/banner/mcdonalds.jpg'),
    color: '#DD9D2E',
    type: ['经典咖啡', '雪冰', '亚洲茶', '茶拿铁', '汉堡', '小吃', '开店设备'],
    list: [{
        title: '经典咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/Mcdonalds/经典咖啡/拿铁.jpg'),
            name: '拿铁',
            price: 16,
            percent: 77,
            id: 128,
            cost: 3.74
          },
          {
            img: require('../assets/img/goods/Mcdonalds/经典咖啡/美式经典咖啡.jpg'),
            name: '美式经典咖啡',
            price: 14,
            percent: 90,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/Mcdonalds/经典咖啡/摩卡.jpg'),
            name: '摩卡',
            price: 18,
            percent: 66,
            id: 85,
            cost: 6.19
          },
          {
            img: require('../assets/img/goods/Mcdonalds/经典咖啡/焦糖玛奇朵.jpg'),
            name: '焦糖玛奇朵',
            price: 20,
            percent: 73,
            id: 1115,
            cost: 5.35
          }
        ]
      },
      {
        title: '雪冰',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/Mcdonalds/雪冰/拿铁雪冰.jpg'),
            name: '拿铁雪冰',
            price: 22,
            percent: 68,
            id: 349,
            cost: 7.03
          },
          {
            img: require('../assets/img/goods/Mcdonalds/雪冰/摩卡雪冰.jpg'),
            name: '摩卡雪冰',
            price: 20,
            percent: 80,
            id: 872,
            cost: 4.1
          },
          {
            img: require('../assets/img/goods/Mcdonalds/雪冰/芒果雪冰.jpg'),
            name: '芒果雪冰',
            price: 20,
            percent: 77,
            id: 345,
            cost: 4.53
          }
        ]
      },
      {
        title: '亚洲茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/Mcdonalds/亚洲茶/红茶拿铁.jpg'),
            name: '红茶拿铁',
            price: 20,
            percent: 77,
            id: 1124,
            cost: 4.53
          },
          {
            img: require('../assets/img/goods/Mcdonalds/亚洲茶/铁观音.jpg'),
            name: '铁观音',
            price: 10,
            percent: 88,
            id: 300,
            cost: 1.19
          },
          {
            img: require('../assets/img/goods/Mcdonalds/亚洲茶/普洱茶.jpg'),
            name: '普洱茶',
            price: 10,
            percent: 88,
            id: 295,
            cost: 1.19
          },
          {
            img: require('../assets/img/goods/Mcdonalds/亚洲茶/乌龙茶.jpg'),
            name: '乌龙茶',
            price: 10,
            percent: 89,
            id: 556,
            cost: 1.1
          },
          {
            img: require('../assets/img/goods/Mcdonalds/亚洲茶/茉莉绿茶.jpg'),
            name: '茉莉绿茶',
            price: 10,
            percent: 87,
            id: 391,
            cost: 1.32
          },
          {
            img: require('../assets/img/goods/Mcdonalds/亚洲茶/热带水果焗茶.jpg'),
            name: '热带水果焗茶',
            price: 14,
            percent: 82,
            id: 390,
            cost: 2.56
          }
        ]
      },

      {
        title: '茶拿铁',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/Mcdonalds/经典咖啡/拿铁.jpg'),
          name: '红茶拿铁',
          price: 20,
          percent: 81.72,
          id: 1254,
          cost: 3.74
        }]
      },

      {
        title: '汉堡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/Mcdonalds/汉堡/培根蔬菜双层牛堡.jpg'),
            name: '培根蔬菜双层牛堡',
            price: 32,
            percent: 81,
            id: 606,
            cost: 6.2
          },
          {
            img: require('../assets/img/goods/Mcdonalds/汉堡/经典麦辣鸡腿汉堡.jpg'),
            name: '经典麦辣鸡腿汉堡',
            price: 28,
            percent: 73,
            id: 696,
            cost: 7.52
          },
          {
            img: require('../assets/img/goods/Mcdonalds/汉堡/原味板烧鸡腿汉堡.jpg'),
            name: '原味板烧鸡腿汉堡',
            price: 28,
            percent: 79,
            id: 994,
            cost: 5.8
          }
        ]
      },
      {
        title: '小吃',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/Mcdonalds/小吃/麦乐鸡.jpg'),
            name: '麦乐鸡',
            price: 18,
            percent: 78,
            id: 995,
            cost: 4
          },
          {
            img: require('../assets/img/goods/Mcdonalds/小吃/麦辣鸡翅.jpg'),
            name: '麦辣鸡翅',
            price: 28,
            percent: 80,
            id: 511,
            cost: 5.5
          },
          {
            img: require('../assets/img/goods/Mcdonalds/小吃/大薯条.jpg'),
            name: '大薯条',
            price: 15,
            percent: 87,
            id: 836,
            cost: 1.95
          },
          {
            img: require('../assets/img/goods/Mcdonalds/小吃/金球薯饼.jpg'),
            name: '金球薯饼',
            price: 15,
            percent: 83,
            id: 760,
            cost: 2.5
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/炸锅.jpg'),
            name: 'WELBILT-RE114-CSE炸锅',
            code: 'QX252',
            model: '397*786*1150'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          }
        ]
      }
    ]
  },
  //西餐菜单
  {
    title: '西餐菜单',
    img: require('../assets/img/banner/蓝蛙banner.jpg'),
    color: '#142E68',
    type: [
      '茶',
      '咖啡',
      '缤纷茶饮&奶昔',
      '鸡尾酒',
      '甜品',
      '色拉',
      '牛排',
      '意面',
      '汉堡&卷&三明治',
      '小吃',
      '开店设备'
    ],
    list: [{
        title: '茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/1茶/蓝莓黑加仑.jpg'),
            name: '蓝莓黑加仑',
            price: 30,
            percent: 96,
            id: 43,
            cost: 1.19
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/蜜桃哈密瓜果茶.jpg'),
            name: '蜜桃哈密瓜果茶',
            price: 38,
            percent: 95,
            id: 865,
            cost: 1.98
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/热情百香果茶.jpg'),
            name: '热情百香果茶',
            price: 38,
            percent: 92,
            id: 403,
            cost: 2.93
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/桃子冰红茶.jpg'),
            name: '桃子冰红茶',
            price: 38,
            percent: 95,
            id: 308,
            cost: 1.74
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/热情果冰红茶.jpg'),
            name: '热情果冰红茶',
            price: 38,
            percent: 94,
            id: 497,
            cost: 2.25
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/草莓冰红茶.jpg'),
            name: '草莓冰红茶',
            price: 55,
            percent: 93,
            id: 1132,
            cost: 3.71
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/冰红茶.jpg'),
            name: '冰红茶',
            price: 30,
            percent: 94,
            id: 1108,
            cost: 1.84
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/热红茶.jpg'),
            name: '热红茶',
            price: 30,
            percent: 88,
            id: 759,
            cost: 3.68
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/热绿茶.jpg'),
            name: '热绿茶',
            price: 30,
            percent: 94,
            id: 338,
            cost: 1.88
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/玫瑰柠檬茶.jpg'),
            name: '玫瑰柠檬草茶',
            price: 35,
            percent: 94,
            id: 114,
            cost: 2.25
          },
          {
            img: require('../assets/img/goods/西餐菜单/1茶/甘菊桂花茶.jpg'),
            name: '甘菊桂花茶',
            price: 30,
            percent: 92,
            id: 915,
            cost: 1.16
          }
        ]
      },
      {
        title: '咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/2咖啡/美式咖啡.jpg'),
            name: '美式咖啡',
            price: 30,
            percent: 96,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/西餐菜单/2咖啡/拿铁咖啡.jpg'),
            name: '拿铁咖啡',
            price: 35,
            percent: 89,
            id: 128,
            cost: 3.74
          },
          {
            img: require('../assets/img/goods/西餐菜单/2咖啡/卡布奇诺.jpg'),
            name: '卡布奇诺',
            price: 35,
            percent: 89,
            id: 86,
            cost: 3.84
          },
          {
            img: require('../assets/img/goods/西餐菜单/2咖啡/热巧克力.jpg'),
            name: '热巧克力',
            price: 30,
            percent: 91,
            id: 53,
            cost: 2.84
          }
        ]
      },
      {
        title: '缤纷冻饮及奶昔',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/3缤纷冻饮及奶昔/香蕉雪泥.jpg'),
            name: '香蕉雪泥',
            price: 30,
            percent: 91,
            id: 302,
            cost: 2.83
          },
          {
            img: require('../assets/img/goods/西餐菜单/3缤纷冻饮及奶昔/香草奶昔.jpg'),
            name: '香草奶昔',
            price: 40,
            percent: 90,
            id: 498,
            cost: 3.9
          },
          {
            img: require('../assets/img/goods/西餐菜单/3缤纷冻饮及奶昔/巧克力奶昔.jpg'),
            name: '巧克力奶昔',
            price: 40,
            percent: 90,
            id: 486,
            cost: 3.82
          },
          {
            img: require('../assets/img/goods/西餐菜单/3缤纷冻饮及奶昔/草莓奶昔.jpg'),
            name: '香草奶昔',
            price: 40,
            percent: 91,
            id: 484,
            cost: 3.62
          },
          {
            img: require('../assets/img/goods/西餐菜单/3缤纷冻饮及奶昔/香蕉奶昔.jpg'),
            name: '香蕉奶昔',
            price: 40,
            percent: 91,
            id: 78,
            cost: 3.52
          }
        ]
      },
      {
        title: '鸡尾酒',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/4鸡尾酒/长岛冰茶.jpg'),
            name: '蓝蛙长岛冰茶',
            price: 65,
            percent: 82,
            id: 425,
            cost: 11.53
          },
          {
            img: require('../assets/img/goods/西餐菜单/4鸡尾酒/莫吉托.jpg'),
            name: '莫吉托',
            price: 60,
            percent: 88,
            id: 791,
            cost: 7.47
          },
          {
            img: require('../assets/img/goods/西餐菜单/4鸡尾酒/玛格丽特.jpg'),
            name: '经典玛格丽特',
            price: 65,
            percent: 83,
            id: 427,
            cost: 11.29
          },
          {
            img: require('../assets/img/goods/西餐菜单/4鸡尾酒/龙舌兰日出.jpg'),
            name: '日出',
            price: 55,
            percent: 88,
            id: 426,
            cost: 6.66
          }
        ]
      },
      {
        title: '甜品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/5甜品/纽约芝士蛋糕.jpg'),
            name: '纽约芝士蛋糕',
            price: 40,
            percent: 81,
            id: 904,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/西餐菜单/5甜品/布朗尼.jpg'),
            name: '黑砖巧克力布朗尼',
            price: 38,
            percent: 80,
            id: 905,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/西餐菜单/5甜品/蓝莓芝士蛋糕.jpg'),
            name: '蓝莓芝士蛋糕',
            price: 45,
            percent: 69,
            id: 1174,
            cost: 13.8
          },
          {
            img: require('../assets/img/goods/西餐菜单/5甜品/苹果香梨蛋糕.jpg'),
            name: '苹果香梨蛋糕',
            price: 38,
            percent: 80,
            id: 902,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/西餐菜单/5甜品/美式蓝莓派.jpg'),
            name: '美式蓝莓派',
            price: 38,
            percent: 80,
            id: 907,
            cost: 7.5
          }
        ]
      },
      {
        title: '色拉',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/6色拉/煎三文鱼西柚藜麦色拉.jpg'),
            name: '煎三文鱼西柚藜麦色拉',
            price: 18,
            percent: 72,
            id: 661,
            cost: 5.1
          },
          {
            img: require('../assets/img/goods/西餐菜单/6色拉/凯撒色拉.jpg'),
            name: '凯撒色拉',
            price: 22,
            percent: 80,
            id: 895,
            cost: 4.5
          },
          {
            img: require('../assets/img/goods/西餐菜单/6色拉/泰式牛肉色拉.jpg'),
            name: '泰式牛肉色拉',
            price: 32,
            percent: 73,
            id: 1028,
            cost: 8.8
          },
          {
            img: require('../assets/img/goods/西餐菜单/6色拉/黑胡椒金枪鱼色拉.jpg'),
            name: '黑胡椒金抢鱼色拉',
            price: 22,
            percent: 73,
            id: 1110,
            cost: 6
          }
        ]
      },
      {
        title: '牛排',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/7牛排/神户肉眼牛排.jpg'),
            name: '神户肉眼牛排',
            price: 58,
            percent: 73,
            id: 1031,
            cost: 15.73
          },
          {
            img: require('../assets/img/goods/西餐菜单/7牛排/澳洲T骨牛排.jpg'),
            name: '澳洲T骨牛排',
            price: 48,
            percent: 69,
            id: 964,
            cost: 14.86
          },
          {
            img: require('../assets/img/goods/西餐菜单/7牛排/煎西冷牛排.jpg'),
            name: '煎西冷牛排',
            price: 48,
            percent: 69,
            id: 609,
            cost: 14.73
          },
          {
            img: require('../assets/img/goods/西餐菜单/7牛排/扒安格斯肉眼牛排.jpg'),
            name: '扒安格斯肉眼牛排',
            price: 58,
            percent: 73,
            id: 611,
            cost: 15.63
          }
        ]
      },
      {
        title: '意面',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/8意面/牛柳虎虾海陆双汇意面.jpg'),
            name: '牛柳虎虾海陆双汇意面',
            price: 25,
            percent: 61,
            id: 621,
            cost: 9.75
          },
          {
            img: require('../assets/img/goods/西餐菜单/8意面/意大利千层面.jpg'),
            name: '意大利千层面',
            price: 25,
            percent: 69,
            id: 721,
            cost: 7.83
          },
          {
            img: require('../assets/img/goods/西餐菜单/8意面/奶油培根意面松茸意面.jpg'),
            name: '芦笋培根意面',
            price: 25,
            percent: 55,
            id: 889,
            cost: 11.18
          }
        ]
      },
      {
        title: '汉堡&卷&三明治',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/蓝芝士汉堡.jpg'),
            name: '蓝芝士汉堡',
            price: 32,
            percent: 81,
            id: 606,
            cost: 6.2
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/蒙大拿州烧烤汉堡.jpg'),
            name: '蒙大拿州烧烤汉堡',
            price: 28,
            percent: 79,
            id: 994,
            cost: 5.8
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/三文鱼芝士春卷.jpg'),
            name: '三文鱼芝士春卷',
            price: 18,
            percent: 81,
            id: 1083,
            cost: 3.5
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/希腊蛋卷.jpg'),
            name: '希腊蛋卷',
            price: 18,
            percent: 72,
            id: 874,
            cost: 5
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/牛肉三明治.jpg'),
            name: '牛肉三明治',
            price: 18,
            percent: 69,
            id: 876,
            cost: 5.5
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/金枪鱼沙拉三明治.jpg'),
            name: '金枪鱼沙拉三明治',
            price: 18,
            percent: 65,
            id: 1103,
            cost: 6.27
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/培根生菜三明治.jpg'),
            name: '培根生菜三明治',
            price: 18,
            percent: 67,
            id: 875,
            cost: 5.98
          },
          {
            img: require('../assets/img/goods/西餐菜单/9汉堡&卷&三明治/墨西哥鸡肉卷.jpg'),
            name: '墨西哥鸡肉卷',
            price: 28,
            percent: 71,
            id: 605,
            cost: 8
          }
        ]
      },
      {
        title: '小吃',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/西餐菜单/10小吃/香烤猪肋排.jpg'),
            name: '香烤猪肋排',
            price: 28,
            percent: 88,
            id: 507,
            cost: 3.24
          },
          {
            img: require('../assets/img/goods/西餐菜单/10小吃/炸鱼柳.jpg'),
            name: '炸鱼柳',
            price: 25,
            percent: 73,
            id: 724,
            cost: 6.7
          },
          {
            img: require('../assets/img/goods/西餐菜单/10小吃/蓝蛙炸鸡.jpg'),
            name: '蓝蛙炸鸡',
            price: 25,
            percent: 84,
            id: 750,
            cost: 3.99
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/净水系统1000S.jpg'),
            name: '科睿仕1000S型净水系统',
            code: 'QK49',
            model: '700*256*450mm'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          },
          {
            img: require('../assets/img/goods/设备/华夫饼机.jpg'),
            name: '康普仕-电脑版华夫饼机',
            code: 'QK21',
            model: '260*460*320'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/快速烹饪烤箱E1S.jpg'),
            name: '快速烹饪烤箱E1S',
            code: 'MN02',
            model: '407*538*588mm'
          },
          {
            img: require('../assets/img/goods/设备/快速微波烤箱E2s.jpg'),
            name: 'Merrychef-E2s快速微波烤箱',
            code: 'QX254',
            model: '356*595*620'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //新式融合菜餐厅
  {
    title: '新式融合菜餐厅',
    img: require('../assets/img/banner/胡桃里banner.jpg'),
    color: '#804036',
    type: ['特调饮料', '鸡尾酒', '甜品', '饭类', '面食', '菜品', '开店设备'],
    list: [{
        title: '特调饮料',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/多汁（芒果、草莓、奇异果）.jpg'),
            name: '多汁（芒果、草莓、奇异果）',
            price: 26,
            percent: 87,
            id: 764,
            cost: 3.32
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/金桔柠檬绿茶.jpg'),
            name: '金桔柠檬绿茶',
            price: 26,
            percent: 89,
            id: 531,
            cost: 2.93
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/芒果果昔.jpg'),
            name: '芒果果昔',
            price: 32,
            percent: 88,
            id: 533,
            cost: 3.8
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/草莓果昔.jpg'),
            name: '草莓果昔',
            price: 28,
            percent: 88,
            id: 484,
            cost: 3.4
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/冰酿鲜果茶.jpg'),
            name: '冰酿鲜果茶',
            price: 25,
            percent: 90,
            id: 390,
            cost: 2.52
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/百香火龙果.jpg'),
            name: '百香火龙果',
            price: 32,
            percent: 86,
            id: 937,
            cost: 4.34
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/1特调饮料/菠萝猕猴桃.jpg'),
            name: '菠萝猕猴桃',
            price: 36,
            percent: 89,
            id: 728,
            cost: 4.13
          }
        ]
      },
      {
        title: '鸡尾酒',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/新式融合菜餐厅/2鸡尾酒/莫斯科骡子.jpg'),
            name: '莫斯科骡子',
            price: 60,
            percent: 84,
            id: 763,
            cost: 9.66
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/2鸡尾酒/莫吉托.jpg'),
            name: '莫吉托',
            price: 55,
            percent: 86,
            id: 791,
            cost: 7.47
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/2鸡尾酒/长岛冰茶.jpg'),
            name: '长岛冰茶',
            price: 65,
            percent: 82,
            id: 425,
            cost: 11.53
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/2鸡尾酒/僵尸.jpg'),
            name: '僵尸',
            price: 65,
            percent: 78,
            id: 793,
            cost: 14.6
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/2鸡尾酒/玛格丽特.jpg'),
            name: '玛格丽特',
            price: 65,
            percent: 83,
            id: 427,
            cost: 11.29
          }
        ]
      },
      {
        title: '甜品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/新式融合菜餐厅/3甜品/豆花布丁.jpg'),
            name: '豆花布丁',
            price: 25,
            percent: 88,
            id: 1096,
            cost: 3.06
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/3甜品/比利时华夫饼.jpg'),
            name: '比利时华夫饼',
            price: 32,
            percent: 33,
            id: 704,
            cost: 7.29
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/3甜品/芝士蛋糕.jpg'),
            name: '芝士蛋糕',
            price: 25,
            percent: 70,
            id: 904,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/3甜品/蓝莓慕斯.jpg'),
            name: '蓝莓慕斯',
            price: 25,
            percent: 70,
            id: 907,
            cost: 7.5
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/3甜品/法式香草冰淇淋.jpg'),
            name: '法式香草冰淇淋',
            price: 15,
            percent: 91,
            id: 215,
            cost: 1.36
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/3甜品/荷兰金奖巧克力冰淇淋.jpg'),
            name: '荷兰金奖巧克力冰淇淋',
            price: 15,
            percent: 91,
            id: 193,
            cost: 1.36
          }
        ]
      },
      {
        title: '饭类',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/新式融合菜餐厅/4饭类/海鲜饭.jpg'),
            name: '海鲜饭',
            price: 32,
            percent: 64,
            id: 833,
            cost: 11.67
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/4饭类/黑米炒饭.jpg'),
            name: '黑米炒饭',
            price: 28,
            percent: 79,
            id: 939,
            cost: 6
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/4饭类/胡桃里特色炒饭.jpg'),
            name: '胡桃里特色炒饭',
            price: 28,
            percent: 75,
            id: 832,
            cost: 7.11
          }
        ]
      },
      {
        title: '面食',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/新式融合菜餐厅/5面食/三丝炒面.jpg'),
            name: '三丝炒面',
            price: 32,
            percent: 74,
            id: 838,
            cost: 8.32
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/5面食/杂酱面.jpg'),
            name: '杂酱面',
            price: 32,
            percent: 67,
            id: 924,
            cost: 10.7
          }
        ]
      },
      {
        title: '菜',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/新式融合菜餐厅/6菜/椒麻酥黄鱼.jpg'),
            name: '椒麻酥黄鱼',
            price: 22,
            percent: 70,
            id: 724,
            cost: 6.7
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/6菜/重庆滋味酸菜鱼.jpg'),
            name: '重庆滋味酸菜鱼',
            price: 38,
            percent: 72,
            id: 737,
            cost: 10.53
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/6菜/香辣干锅蛙.jpg'),
            name: '香辣干锅蛙',
            price: 58,
            percent: 67,
            id: 963,
            cost: 19
          },
          {
            img: require('../assets/img/goods/新式融合菜餐厅/6菜/重庆辣子鸡.jpg'),
            name: '重庆辣子鸡',
            price: 32,
            percent: 71,
            id: 731,
            cost: 9.2
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/炸锅.jpg'),
            name: 'WELBILT-RE114-CSE炸锅',
            code: 'QX252',
            model: '397*786*1150'
          },
          {
            img: require('../assets/img/goods/设备/快速烹饪烤箱E1S.jpg'),
            name: '快速烹饪烤箱E1S',
            code: 'MN02',
            model: '407*538*588mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //中式简餐菜单
  {
    title: '中式简餐菜单',
    img: require('../assets/img/banner/永和大王banner.jpg'),
    color: '#CF0F2C',
    type: ['饮品', '简餐米饭', '小吃', '面&馄饨', '配菜', '开店设备'],
    list: [{
        title: '饮品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/中式简餐菜单/1饮品/现磨豆浆.jpg'),
            name: '现磨豆浆',
            price: 4,
            percent: 75,
            id: 202,
            cost: 1
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/1饮品/黑糖脏脏豆浆.jpg'),
            name: '黑糖脏脏豆浆',
            price: 6,
            percent: 79,
            id: 47,
            cost: 1.27
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/1饮品/青提四季春.jpg'),
            name: '青提四季春',
            price: 8,
            percent: 60,
            id: 402,
            cost: 3.23
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/1饮品/荔枝乌龙茶.jpg'),
            name: '荔枝乌龙茶',
            price: 12,
            percent: 57,
            id: 701,
            cost: 5.22
          }
        ]
      },
      {
        title: '简餐米饭',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/大王葱香鸡丝饭.jpg'),
            name: '大王葱香鸡丝饭',
            price: 22,
            percent: 61,
            id: 1137,
            cost: 8.52
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/酱猪排蛋炒饭.jpg'),
            name: '酱猪排蛋炒饭',
            price: 23,
            percent: 67,
            id: 1038,
            cost: 7.6
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/秘制三杯鸡饭.jpg'),
            name: '秘制三杯鸡饭',
            price: 25,
            percent: 63,
            id: 731,
            cost: 9.2
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/黑椒牛柳饭.jpg'),
            name: '黑椒牛柳饭',
            price: 28,
            percent: 67,
            id: 1139,
            cost: 9.3
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/梅菜扣肉饭.jpg'),
            name: '梅菜扣肉饭',
            price: 28,
            percent: 74,
            id: 732,
            cost: 7.25
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/酱滋猪排卤饭.jpg'),
            name: '酱滋猪排卤饭',
            price: 28,
            percent: 72,
            id: 581,
            cost: 7.96
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/宫保鸡丁饭.jpg'),
            name: '宫保鸡丁饭',
            price: 25,
            percent: 70,
            id: 1199,
            cost: 7.47
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/2简餐米饭/手撕鸡盖浇饭.jpg'),
            name: '手撕鸡盖浇饭',
            price: 28,
            percent: 75,
            id: 1195,
            cost: 7.07
          }
        ]
      },
      {
        title: '小吃',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/中式简餐菜单/3小吃/酥炸脆皮大鸡腿.jpg'),
            name: '酥炸脆皮大鸡腿',
            price: 18,
            percent: 75,
            id: 1004,
            cost: 4.5
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/3小吃/摇摇鸡块.jpg'),
            name: '摇摇鸡块',
            price: 28,
            percent: 88,
            id: 507,
            cost: 3.24
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/3小吃/三丝春卷.jpg'),
            name: '岛味丝香春卷',
            price: 12,
            percent: 88,
            id: 824,
            cost: 1.49
          }
        ]
      },
      {
        title: '面&馄饨',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/中式简餐菜单/4面&馄饨/麻辣肉酱拌面.jpg'),
            name: '麻辣肉酱拌面',
            price: 32,
            percent: 74,
            id: 730,
            cost: 8.47
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/4面&馄饨/牛肉番茄面.jpg'),
            name: '牛肉番茄面',
            price: 32,
            percent: 67,
            id: 729,
            cost: 10.7
          }
        ]
      },
      {
        title: '配菜',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/中式简餐菜单/5配菜/卤汁鸡翅.jpg'),
            name: '卤汁鸡翅',
            price: 22,
            percent: 82,
            id: 511,
            cost: 3.94
          },
          {
            img: require('../assets/img/goods/中式简餐菜单/5配菜/卤汁油麦菜.jpg'),
            name: '卤汁油麦菜',
            price: 12,
            percent: 77,
            id: 1040,
            cost: 2.8
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/冰淇淋机.jpg'),
            name: '康派克牌C1713冰淇淋机',
            code: 'QX801',
            model: '330*860*1130mm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/双头汤锅.jpg'),
            name: '双头台上式多功能蒸煮汤锅RHW-2',
            code: 'HG03',
            model: '630*330*343mm'
          },
          {
            img: require('../assets/img/goods/设备/炸锅.jpg'),
            name: 'WELBILT-RE114-CSE炸锅',
            code: 'QX252',
            model: '397*786*1150'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //火锅饮品菜单
  {
    title: '火锅饮品菜单',
    img: require('../assets/img/banner/banu.jpg'),
    color: '#7D3E35',
    type: ['果汁饮料', '果茶', '奶茶/豆浆', '又乐多', '甜品', '开店设备'],
    list: [{
        title: '果汁饮料',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/banu/自制饮品/乌梅汤.jpg'),
            name: '乌梅汤',
            price: 12,
            percent: 94,
            id: 159,
            cost: 0.73
          },
          {
            img: require('../assets/img/goods/banu/自制饮品/青柠乳酸菌.jpg'),
            name: '青柠乳酸菌',
            price: 15,
            percent: 90,
            id: 145,
            cost: 1.47
          },
          {
            img: require('../assets/img/goods/banu/果汁饮料/黑加仑葡萄.jpg'),
            name: '黑加仑葡萄',
            price: 15,
            percent: 92,
            id: 43,
            cost: 1.13
          },
          {
            img: require('../assets/img/goods/banu/果汁饮料/蜜柚冰蓝.jpg'),
            name: '蜜柚冰蓝',
            price: 15,
            percent: 88,
            id: 311,
            cost: 1.82
          },
          {
            img: require('../assets/img/goods/banu/果汁饮料/酸梅金桔柠檬.jpg'),
            name: '酸梅金桔柠檬',
            price: 15,
            percent: 95,
            id: 159,
            cost: 0.73
          },
          {
            img: require('../assets/img/goods/banu/果汁饮料/金桔柚子汁.jpg'),
            name: '金桔柚子汁',
            price: 15,
            percent: 93,
            id: 71,
            cost: 1.08
          }
        ]
      },
      {
        title: '果茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/banu/果茶系列/蜂蜜柚子茶.jpg'),
            name: '蜂蜜柚子茶',
            price: 15,
            percent: 91,
            id: 1046,
            cost: 1.32
          },
          {
            img: require('../assets/img/goods/banu/果茶系列/酸梅蜜柚茶.jpg'),
            name: '酸梅蜜柚茶',
            price: 15,
            percent: 95,
            id: 160,
            cost: 0.76
          }
        ]
      },
      {
        title: '奶茶/豆浆',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/banu/奶茶豆浆系列/黑糖奶茶.jpg'),
            name: '黑糖奶茶',
            price: 15,
            percent: 81,
            id: 494,
            cost: 2.79
          },
          {
            img: require('../assets/img/goods/banu/奶茶豆浆系列/黑米腰果黑豆浆.jpg'),
            name: '黑米腰果黑豆浆',
            price: 12,
            percent: 80,
            id: 331,
            cost: 2.37
          },
          {
            img: require('../assets/img/goods/banu/奶茶豆浆系列/奶露玉米豆浆.jpg'),
            name: '奶露玉米豆浆',
            price: 12,
            percent: 84,
            id: 1189,
            cost: 1.98
          },
          {
            img: require('../assets/img/goods/banu/奶茶豆浆系列/原味醇豆浆.jpg'),
            name: '原味醇豆浆',
            price: 12,
            percent: 91,
            id: 1190,
            cost: 1.07
          }
        ]
      },
      {
        title: '又乐多',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/banu/又乐多系列/红葡萄黑加仑又乐多.jpg'),
            name: '红葡萄黑加仑又乐多',
            price: 18,
            percent: 86,
            id: 1153,
            cost: 2.48
          },
          {
            img: require('../assets/img/goods/banu/又乐多系列/玫瑰蔓越莓又乐多.jpg'),
            name: '玫瑰蔓越莓又乐多',
            price: 18,
            percent: 80,
            id: 1161,
            cost: 3.63
          },
          {
            img: require('../assets/img/goods/banu/又乐多系列/热情百香果又乐多.jpg'),
            name: '热情百香果又乐多 ',
            price: 18,
            percent: 84,
            id: 1155,
            cost: 2.87
          },
          {
            img: require('../assets/img/goods/banu/又乐多系列/冰蓝卡曼橘又乐多.jpg'),
            name: '冰蓝卡曼橘又乐多',
            price: 18,
            percent: 83,
            id: 1164,
            cost: 3.01
          }
        ]
      },
      {
        title: '甜品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/banu/甜品/日式抹茶布丁.jpg'),
            name: '日式抹茶布丁',
            price: 12,
            percent: 82,
            id: 245,
            cost: 2.15
          },
          {
            img: require('../assets/img/goods/banu/甜品/焦糖鸡蛋布丁.jpg'),
            name: '焦糖鸡蛋布丁',
            price: 12,
            percent: 78,
            id: 369,
            cost: 2.63
          },
          {
            img: require('../assets/img/goods/banu/甜品/黑糖豆花布丁.jpg'),
            name: '黑糖豆花布丁',
            price: 12,
            percent: 77,
            id: 49,
            cost: 2.78
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          }
        ]
      }
    ]
  },
  //台式火锅饮品菜单
  {
    title: '台式火锅饮品菜单',
    img: require('../assets/img/banner/coucou.jpg'),
    color: '#C3172C',
    type: [
      '醇品裸茶',
      '奶味茶',
      '茶拿铁',
      '珍珠奶茶',
      '冬瓜',
      '香梅',
      '果味茶',
      '开店设备'
    ],
    list: [{
        title: '醇品裸茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coucou/醇品裸茶/满园红茶.jpg'),
            name: '满园红茶',
            price: 28,
            percent: 78,
            id: 341,
            cost: 6.23
          },
          {
            img: require('../assets/img/goods/coucou/醇品裸茶/雨后绿茶.jpg'),
            name: '雨后绿茶',
            price: 28,
            percent: 78,
            id: 338,
            cost: 6.23
          }
        ]
      },
      {
        title: '奶味茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coucou/奶味茶/经典奶茶.jpg'),
            name: '经典奶茶',
            price: 20,
            percent: 84,
            id: 1140,
            cost: 3.18
          },
          {
            img: require('../assets/img/goods/coucou/奶味茶/茉香奶绿.jpg'),
            name: '茉香奶绿',
            price: 20,
            percent: 86.85,
            id: 1253,
            cost: 1.99
          },
          {
            img: require('../assets/img/goods/coucou/奶味茶/冰柠檬红茶.jpg'),
            name: '冰柠檬红茶',
            price: 20,
            percent: 87.40,
            id: 1217,
            cost: 1.99
          },
          {
            img: require('../assets/img/goods/coucou/奶味茶/茉香奶绿.jpg'),
            name: '大红袍奶茶',
            price: 20,
            percent: 82.73,
            id: 1252,
            cost: 1.99
          },
          {
            img: require('../assets/img/goods/coucou/奶味茶/茉香奶绿.jpg'),
            name: '珍珠奶绿',
            price: 20,
            percent: 90.50222,
            id: 1222,
            cost: 1.99
          },
          {
            img: require('../assets/img/goods/coucou/奶味茶/大红袍珍珠奶茶.jpg'),
            name: '大红袍珍珠奶茶',
            price: 20,
            percent: 89.90,
            id: 1221,
            cost: 1.99
          },
        ]
      },
      {
        title: '茶拿铁',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/coucou/茶拿铁/红茶拿铁.jpg'),
          name: '红茶拿铁',
          price: 20,
          percent: 77,
          id: 1124,
          cost: 4.53
        }]
      },
      {
        title: '珍珠奶茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coucou/珍珠奶茶/经典珍珠奶茶.jpg'),
            name: '经典珍珠奶茶',
            price: 20,
            percent: 81.72,
            id: 1254,
            cost: 3.87
          },
          {
            img: require('../assets/img/goods/coucou/珍珠奶茶/珍珠奶绿.jpg'),
            name: '珍珠奶绿',
            price: 20,
            percent: 88,
            id: 470,
            cost: 2.36
          }
        ]
      },
      {
        title: '冬瓜',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/coucou/冬瓜/冬瓜柠檬.jpg'),
          name: '冬瓜柠檬',
          price: 18,
          percent: 96,
          id: 56,
          cost: 0.7
        }]
      },
      {
        title: '香梅',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coucou/香梅/香梅红茶.jpg'),
            name: '香梅红茶',
            price: 18,
            percent: 96,
            id: 159,
            cost: 0.73
          },
          {
            img: require('../assets/img/goods/coucou/香梅/香梅绿茶.jpg'),
            name: '香梅绿茶',
            price: 18,
            percent: 96,
            id: 160,
            cost: 0.76
          }
        ]
      },
      {
        title: '果味茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/coucou/果味茶/黄金鲜桔茶.jpg'),
            name: '黄金鲜桔茶',
            price: 22,
            percent: 86,
            id: 531,
            cost: 3.05
          },
          {
            img: require('../assets/img/goods/coucou/果味茶/翡翠鲜橙绿茶.jpg'),
            name: '翡翠鲜橙绿茶',
            price: 20,
            percent: 89.44,
            id: 1249,
            cost: 1.66
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/封口机.jpg'),
            name: 'CHOK封口机',
            code: 'QK19',
            model: '250*395*530mm '
          }
        ]
      }
    ]
  },
  //小吃炸鸡菜单
  {
    title: '小吃炸鸡菜单',
    img: require('../assets/img/banner/正新鸡排banner.jpg'),
    color: '#CF0F2C',
    type: ['清爽饮品', '炸物', '汉堡', '烤物', '串', '开店设备'],
    list: [{
        title: '清爽饮品',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/小吃炸鸡菜单/1清爽饮品/原味奶茶.jpg'),
            name: '原味奶茶',
            price: 10,
            percent: 69,
            id: 1140,
            cost: 3.06
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/1清爽饮品/菠萝汁.jpg'),
            name: '菠萝汁',
            price: 12,
            percent: 84,
            id: 9,
            cost: 1.94
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/1清爽饮品/酸梅汁.jpg'),
            name: '酸梅汁',
            price: 10,
            percent: 92,
            id: 159,
            cost: 0.77
          }
        ]
      },
      {
        title: '炸物',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/小吃炸鸡菜单/2炸物/正新原味鸡排.jpg'),
            name: '正新原味鸡排',
            price: 18,
            percent: 76,
            id: 747,
            cost: 4.3
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/2炸物/藤椒味大鸡排.jpg'),
            name: '藤椒味大鸡排',
            price: 22,
            percent: 46,
            id: 752,
            cost: 11.97
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/2炸物/盐酥鸡米花.jpg'),
            name: '盐酥鸡米花',
            price: 18,
            percent: 77,
            id: 508,
            cost: 4.2
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/2炸物/正新薯条.jpg'),
            name: '正新薯条',
            price: 15,
            percent: 87,
            id: 836,
            cost: 1.95
          }
        ]
      },
      {
        title: '汉堡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/小吃炸鸡菜单/3汉堡/费城牛肉芝士汉堡.jpg'),
            name: '费城牛肉芝士汉堡',
            price: 32,
            percent: 81,
            id: 606,
            cost: 6.2
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/3汉堡/板烧鸡腿堡.jpg'),
            name: '板烧鸡腿堡',
            price: 28,
            percent: 73,
            id: 696,
            cost: 7.52
          }
        ]
      },
      {
        title: '烤物',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/小吃炸鸡菜单/4烤物/鸡脆骨.jpg'),
            name: '烤鸡脆骨',
            price: 22,
            percent: 72,
            id: 503,
            cost: 6.21
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/4烤物/秘制鸭肠.jpg'),
            name: '秘制鸭肠',
            price: 12,
            percent: 71,
            id: 926,
            cost: 3.5
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/4烤物/烤肠.jpg'),
            name: '正新烤肠',
            price: 18,
            percent: 76,
            id: 746,
            cost: 4.27
          }
        ]
      },
      {
        title: '串',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/小吃炸鸡菜单/5串/酱汁腿肉串.jpg'),
            name: '酱汁腿肉串',
            price: 22,
            percent: 74,
            id: 754,
            cost: 5.69
          },
          {
            img: require('../assets/img/goods/小吃炸鸡菜单/5串/阿根廷鱿鱼串.jpg'),
            name: '阿根廷鱿鱼串',
            price: 28,
            percent: 73,
            id: 992,
            cost: 7.48
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米2',
            code: 'EQ0065',
            model: '120cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/制冰机.jpg'),
            name: 'ES0172AC制冰机',
            code: 'QX250',
            model: '660*670*980'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/炸锅.jpg'),
            name: 'WELBILT-RE114-CSE炸锅',
            code: 'QX252',
            model: '397*786*1150'
          },
          {
            img: require('../assets/img/goods/设备/快速烹饪烤箱E1S.jpg'),
            name: '快速烹饪烤箱E1S',
            code: 'MN02',
            model: '407*538*588mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          }
        ]
      }
    ]
  },
  //连锁炸鸡店菜单
  {
    title: '连锁炸鸡店菜单',
    img: require('../assets/img/banner/KFC.jpg'),
    color: '#C3172C',
    type: ['K咖啡', '缤纷饮料', '汉堡', '卷', '小吃', '开店设备'],
    list: [{
        title: 'K咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/KFC/K咖啡/美式.jpg'),
            name: '美式',
            price: 14,
            percent: 90,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/KFC/K咖啡/拿铁.jpg'),
            name: '拿铁',
            price: 17,
            percent: 78,
            id: 128,
            cost: 3.74
          },
          {
            img: require('../assets/img/goods/KFC/K咖啡/香草拿铁.jpg'),
            name: '香草拿铁',
            price: 17,
            percent: 73,
            id: 365,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/KFC/K咖啡/榛果拿铁.jpg'),
            name: '榛果拿铁',
            price: 17,
            percent: 73,
            id: 366,
            cost: 4.52
          },
          {
            img: require('../assets/img/goods/KFC/K咖啡/摩卡.jpg'),
            name: '摩卡',
            price: 20,
            percent: 69,
            id: 85,
            cost: 6.19
          },
          {
            img: require('../assets/img/goods/KFC/K咖啡/喵咪咖啡.jpg'),
            name: '喵咪咖啡',
            price: 16,
            percent: 90,
            id: 367,
            cost: 1.62
          }
        ]
      },
      {
        title: '缤纷饮料',
        type: 'food',
        goods: [{
          img: require('../assets/img/goods/KFC/缤纷饮料/桃之恋乌龙茶.jpg'),
          name: '桃之恋乌龙茶',
          price: 18,
          percent: 70,
          id: 1107,
          cost: 5.4
        }]
      },
      {
        title: '汉堡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/KFC/汉堡/猪柳蛋帕尼尼.jpg'),
            name: '猪柳蛋帕尼尼',
            price: 32,
            percent: 81,
            id: 606,
            cost: 6.2
          },
          {
            img: require('../assets/img/goods/KFC/汉堡/新奥尔良烤鸡腿堡.jpg'),
            name: '新奥尔良烤鸡腿堡',
            price: 28,
            percent: 73,
            id: 696,
            cost: 7.52
          }
        ]
      },
      {
        title: '卷',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/KFC/卷/手撕猪肉卷.jpg'),
            name: '手撕猪肉卷',
            price: 28,
            percent: 85,
            id: 1105,
            cost: 4.3
          },
          {
            img: require('../assets/img/goods/KFC/卷/老北京鸡肉卷.jpg'),
            name: '老北京鸡肉卷',
            price: 28,
            percent: 100,
            id: 605,
            cost: ''
          },
          {
            img: require('../assets/img/goods/KFC/卷/墨西哥鸡肉卷.jpg'),
            name: '墨西哥鸡肉卷',
            price: 18,
            percent: 82,
            id: 1060,
            cost: 3.2
          }
        ]
      },
      {
        title: '小吃',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/KFC/小吃/现烤大可颂.jpg'),
            name: '现烤大可颂',
            price: 22,
            percent: 60,
            id: 751,
            cost: 8.9
          },
          {
            img: require('../assets/img/goods/KFC/小吃/超级塔可.jpg'),
            name: '超级塔可',
            price: 28,
            percent: 79,
            id: 994,
            cost: 5.8
          },
          {
            img: require('../assets/img/goods/KFC/小吃/劲爆鸡米花.jpg'),
            name: '劲爆鸡米花',
            price: 18,
            percent: 77,
            id: 508,
            cost: 4.2
          },
          {
            img: require('../assets/img/goods/KFC/小吃/香辣鸡翅.jpg'),
            name: '香辣鸡翅',
            price: 28,
            percent: 80,
            id: 511,
            cost: 5.5
          },
          {
            img: require('../assets/img/goods/KFC/小吃/大薯条.jpg'),
            name: '大薯条',
            price: 15,
            percent: 87,
            id: 836,
            cost: 1.95
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/炸锅.jpg'),
            name: 'WELBILT-RE114-CSE炸锅',
            code: 'QX252',
            model: '397*786*1150'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/万能蒸烤箱.jpg'),
            name: 'Convotherm-C4eT6.10ES万能蒸烤箱',
            code: 'QX248',
            model: '966*925*829mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          }
        ]
      }
    ]
  },
  //便利店菜单
  {
    title: '便利店菜单',
    img: require('../assets/img/banner/familymart.jpg'),
    color: '#008CD6',
    type: ['咖啡', '奶茶', '冰沙', '小吃', '开店设备'],
    list: [{
        title: '咖啡',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/familymart/湃客咖啡/美式咖啡.jpg'),
            name: '美式咖啡',
            price: 10,
            percent: 87,
            id: 118,
            cost: 1.34
          },
          {
            img: require('../assets/img/goods/familymart/湃客咖啡/摩卡咖啡.jpg'),
            name: '摩卡咖啡',
            price: 16,
            percent: 61,
            id: 85,
            cost: 6.19
          },
          {
            img: require('../assets/img/goods/familymart/湃客咖啡/拿铁咖啡.jpg'),
            name: '拿铁咖啡',
            price: 14,
            percent: 73,
            id: 128,
            cost: 3.74
          },
          {
            img: require('../assets/img/goods/familymart/湃客咖啡/卡布奇诺咖啡.jpg'),
            name: '卡布奇诺咖啡',
            price: 14,
            percent: 76,
            id: 457,
            cost: 3.3
          },
          {
            img: require('../assets/img/goods/familymart/湃客咖啡/焦糖拿铁咖啡.jpg'),
            name: '焦糖拿铁咖啡',
            price: 14,
            percent: 52,
            id: 63,
            cost: 6.74
          },
          {
            img: require('../assets/img/goods/familymart/湃客咖啡/香草拿铁咖啡.jpg'),
            name: '香草拿铁咖啡',
            price: 14,
            percent: 68,
            id: 365,
            cost: 4.52
          }
        ]
      },
      {
        title: '奶茶',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/familymart/奶茶/奶茶.jpg'),
            name: '奶茶',
            price: 12,
            percent: 74,
            id: 1140,
            cost: 3.18
          },
          {
            img: require('../assets/img/goods/familymart/冰沙/咖啡巧克力味冰沙.jpg'),
            name: '咖啡巧克力味冰沙',
            price: 18,
            percent: 73,
            id: 872,
            cost: 4.86
          }
        ]
      },
      {
        title: '冰沙',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/familymart/冰沙/草莓芝士味冰沙.jpg'),
            name: '草莓芝士味冰沙',
            price: 18,
            percent: 65,
            id: 1055,
            cost: 6.28
          },
          {
            img: require('../assets/img/goods/familymart/冰沙/芒果味冰沙.jpg'),
            name: '芒果味冰沙',
            price: 18,
            percent: 75,
            id: 345,
            cost: 4.53
          }
        ]
      },
      {
        title: '小吃',
        type: 'food',
        goods: [{
            img: require('../assets/img/goods/familymart/小吃/台湾风味香肠.jpg'),
            name: '台湾风味香肠',
            price: 18,
            percent: 76,
            id: 746,
            cost: 4.27
          },
          {
            img: require('../assets/img/goods/familymart/小吃/原味炸鸡.jpg'),
            name: '原味炸鸡',
            price: 18,
            percent: 78,
            id: 995,
            cost: 4
          },
          {
            img: require('../assets/img/goods/familymart/小吃/十三香风味大鸡排.jpg'),
            name: '十三香风味大鸡排',
            price: 20,
            percent: 78,
            id: 607,
            cost: 4.5
          }
        ]
      },
      {
        title: '开店设备',
        type: 'equipment',
        goods: [{
            img: require('../assets/img/goods/设备/冷藏冰箱.jpg'),
            name: 'Skystar冷藏冰箱(平台蓝光)1米5',
            code: 'EQ0066',
            model: '150cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/冷冻冰箱.jpg'),
            name: 'Skystar平台冷冻冰箱1.8',
            code: 'EQ0071',
            model: '180cm*70cm*80/10cm'
          },
          {
            img: require('../assets/img/goods/设备/开水机.jpg'),
            name: '奔利普开水机(BLP-10T-2)',
            code: 'L168',
            model: '18.5*43*52cm'
          },
          {
            img: require('../assets/img/goods/设备/分体式制冰机.jpg'),
            name: 'Skystar分体式制冰机(455kg)',
            code: 'EQ0083',
            model: '76cm*86cm*191cm'
          },
          {
            img: require('../assets/img/goods/设备/冰沙机.jpg'),
            name: 'Blendtec冰沙机(每台带隔音罩，配2个搅拌缸)',
            code: 'L148',
            model: '22.9*22.9*43.2cm'
          },
          {
            img: require('../assets/img/goods/设备/定量磨豆机.jpg'),
            name: 'FIORENZATO定量磨豆机F64 E',
            code: 'F002',
            model: '磨盘尺寸：64MM'
          },
          {
            img: require('../assets/img/goods/设备/三头半自动咖啡机.jpg'),
            name: 'Diamant PRO 3GR 4B VA NE (inc. SMARTSTEAM) 三头半自动咖啡机',
            code: 'QY06',
            model: '1080*630*535mm'
          },
          {
            img: require('../assets/img/goods/设备/净水系统.jpg'),
            name: '科睿仕500S型净水系统',
            code: 'QK50',
            model: '700*256*550mm'
          },
          {
            img: require('../assets/img/goods/设备/商用微波炉.jpg'),
            name: 'Menumaster商用微波炉DEC18M',
            code: 'YYL01',
            model: '343*419*578mm'
          },
          {
            img: require('../assets/img/goods/设备/四门冰箱.jpg'),
            name: 'Skystar风冷冷藏四门冰箱',
            code: 'EQ0072',
            model: '122cm*76cm*198cm'
          },
          {
            img: require('../assets/img/goods/设备/果糖机.jpg'),
            name: '乃士果糖机QF-11',
            code: 'L006',
            model: '36*25*36.5cm'
          },
          {
            img: require('../assets/img/goods/设备/奶盖机.jpg'),
            name: '疯狗萃茶奶盖机',
            code: 'QK10',
            model: '台'
          }
        ]
      }
    ]
  }
]

module.exports = {
  cards: cards,
  goods: goods
}