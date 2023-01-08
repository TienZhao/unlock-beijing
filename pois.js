var pois = [
    {'lnglat': ['116.399871', '39.944561'], 'name': 'Modernista', 'style': 0},
    {'lnglat': ['116.413602', '39.926899'], 'name': '木木艺术社区(钱粮胡同馆)', 'style': 1},
    {'lnglat': ['116.395295', '39.936187'], 'name': 'TheOne·貦Coffee·Bar·Tea', 'style': 2},
    {'lnglat': ['116.400756', '39.940672'], 'name': '茶百道(南锣鼓巷店)', 'style': 2},
    {'lnglat': ['116.403187', '39.939619'], 'name': '皇小羽古法茶点(南锣鼓巷店)', 'style': 3},
    {'lnglat': ['116.403202', '39.934261'], 'name': '文宇奶酪店(南锣二店)', 'style': 3},
    {'lnglat': ['116.411074', '39.926267'], 'name': '福叁咖啡(美术馆店)', 'style': 3},
    {'lnglat': ['116.411337', '39.926144'], 'name': '三联韬奋书店(美术馆店)', 'style': 7},
    {'lnglat': ['116.412582', '39.932819'], 'name': 'Z SPACE', 'style': 2},
    {'lnglat': ['116.408958', '39.934444'], 'name': '檐下风铃酒馆', 'style': 4},
    {'lnglat': ['116.418150', '39.927237'], 'name': '麒麟阁私房菜', 'style': 4},
    {'lnglat': ['116.416947', '39.942185'], 'name': '康仔云吞面(雍和宫店)', 'style': 4},
    {'lnglat': ['116.419978', '39.957409'], 'name': '阿诚市井潮汕菜(和平里店)', 'style': 4},
    {'lnglat': ['116.404402', '39.940698'], 'name': '醉虎传(南锣鼓巷店)', 'style': 4},
    {'lnglat': ['116.393776', '39.941017'], 'name': '泥山鸟稻', 'style': 5},
    {'lnglat': ['116.417569', '39.941525'], 'name': '大塚食堂', 'style': 5},
    {'lnglat': ['116.405373', '39.941012'], 'name': '鸭川食堂', 'style': 5},
    {'lnglat': ['116.394209', '39.942535'], 'name': '炙子革命老北京烤肉(鼓楼分店)', 'style': 4},
    {'lnglat': ['116.403986', '39.940788'], 'name': '茶汤李京味餐厅(鼓楼店)', 'style': 3},
    {'lnglat': ['116.411890', '39.935653'], 'name': '多味居', 'style': 4},
    {'lnglat': ['116.409965', '39.937870'], 'name': '蜗牛的家咖啡馆(交道口店)', 'style': 2},
    {'lnglat': ['116.399832', '39.942675'], 'name': '大理人家(宝钞胡同店)', 'style': 4},
    {'lnglat': ['116.409187', '39.928680'], 'name': 'SUSU·粉苏苏(美术馆店)', 'style': 5},
    {'lnglat': ['116.398021', '39.940860'], 'name': '兔爷(鼓楼东大街店)', 'style': 3},
    {'lnglat': ['116.391815', '39.941908'], 'name': '点绛唇Mood in Rouge', 'style': 0},
    {'lnglat': ['116.420267', '39.953866'], 'name': '我与地坛thecorner.', 'style': 2},
    {'lnglat': ['116.400256', '39.933635'], 'name': '春风书院', 'style': 7},
    {'lnglat': ['116.408302', '39.927581'], 'name': '77文创美术馆', 'style': 1},
    {'lnglat': ['116.387040', '39.942383'], 'name': '什刹海冰场', 'style': 6},
    {'lnglat': ['116.388963', '39.939522'], 'name': '朴庐Pure', 'style': 2},
    {'lnglat': ['116.393756', '39.943686'], 'name': '啤酒帮', 'style': 0},
    {'lnglat': ['116.399555', '39.943526'], 'name': 'BAOJIAN', 'style': 0},
    {'lnglat': ['116.407566', '39.938575'], 'name': '小众书坊', 'style': 7},
    {'lnglat': ['116.403016', '39.942979'], 'name': '一定书屋(THE STUDY)', 'style': 7},
    {'lnglat': ['116.454263', '39.918833'], 'name': 'Ala House', 'style': 0},
    {'lnglat': ['116.471876', '39.945673'], 'name': '东京酒廊', 'style': 0},
    {'lnglat': ['116.407830', '39.935769'], 'name': '江湖酒吧', 'style': 0},
    {'lnglat': ['116.413746', '39.929117'], 'name': 'Joyland乐园Coffee&Music Bar(Qfuntheater店)', 'style': 0},
    {'lnglat': ['116.408171', '39.944559'], 'name': 'The Nostalgia·60 Beans(安定门店)', 'style': 0},
    {'lnglat': ['116.393636', '39.940937'], 'name': '集·酒馆Agora Bar', 'style': 0},
    {'lnglat': ['116.408838', '39.937212'], 'name': '不二酒馆', 'style': 0},
    {'lnglat': ['116.452744', '39.918035'], 'name': 'Key West(中骏·世界城E座店)', 'style': 0},
    {'lnglat': ['116.335133', '39.989234'], 'name': '小后院', 'style': 0},
    {'lnglat': ['116.412434', '39.901866'], 'name': 'CHiC', 'style': 0},
    {'lnglat': ['116.415568', '39.944049'], 'name': 'Libertango', 'style': 0},
    {'lnglat': ['116.404729', '39.941042'], 'name': 'Penthouse ·顶楼', 'style': 0},
    {'lnglat': ['116.398474', '39.940892'], 'name': 'Tapas by Alba', 'style': 5},
    {'lnglat': ['116.399063', '39.943422'], 'name': 'Toast at The Orchid', 'style': 5},
    {'lnglat': ['116.395409', '39.935181'], 'name': '跳海(后海店)', 'style': 0}
]