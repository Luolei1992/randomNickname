//  从1099个名字中获取任意名字
(function () {

  'use strict';

    //  一共1099个
    var arr = [ "张让", "张角", "张宝", "张梁", "张飞", "张钧", "张举", "张纯", "张济", "张邈", "张超", "张杨", "张虎", "张温", "张闿", "张燕", "张辽", "张昭", "张紘", "张英", "张勋", "张绣", "张鲁", "张郃", "张顗", "张南", "张武", "张温", "张允", "张横", "张既", "张卫", "张松", "张任", "张肃", "张翼", "张著", "张音", "张爽", "张裔", "张南", "张达", "张苞", "张嶷", "张韬", "张普", "张虎", "张休", "张茂", "张当", "张特", "张约", "张缉", "张布", "张遵", "张绍", "张峻", "张悌", "张尚", "张华", "张象", "张节", "张明", "张俭", "张球", "张先", "张承", "张世平", "刘焉", "刘备", "刘陶", "刘虞", "刘恢", "刘宏", "刘协", "刘辨", "刘岱", "刘表", "刘范", "刘晔", "刘繇", "刘艾", "刘璋", "刘安", "刘延", "刘辟", "刘勋", "刘禅", "刘琦", "刘琮", "刘泌", "刘封", "刘先", "刘馥", "刘熙", "刘度", "刘贤", "刘磐", "刘璝", "刘巴", "刘循", "刘瑁", "刘永", "刘理", "刘廙", "刘豹", "刘宁", "刘琰", "刘敏", "刘劭", "刘放", "刘丞", "刘谌", "刘璿", "刘瑶", "刘琮", "刘瓒", "刘恂", "刘璩", "刘达", "刘寔", "刘苌", "刘宠", "刘郃", "刘邠", "刘畯", "刘雄", "刘弘", "刘元起", "刘子扬", "王允", "王匡", "王方", "王颀", "王昌", "王邑", "王立", "王朗", "王则", "王垕", "王楷", "王忠", "王植", "王修", "王琰", "王威", "王粲", "王累", "王平", "王甫", "王谋", "王双", "王连", "王伉", "王肃", "王建", "王昶", "王韬", "王基", "王经", "王真", "王含", "王沈", "王业", "王敦", "王瓘", "王买", "王颀", "王祥", "王浚", "王浑", "王戎", "王观", "王必", "王子服", "孙仲", "孙坚", "孙策", "孙权", "孙翊", "孙匡", "孙朗", "孙韶", "孙静", "孙乾", "孙观", "孙瑜", "孙高", "孙皎", "孙桓", "孙礼", "孙资", "孙登", "孙和", "孙亮", "孙峻", "孙綝", "孙据", "孙恩", "孙干", "孙闿", "孙谦", "孙恭", "孙楷", "孙休", "孙皓", "孙异", "孙単", "孙冀", "孙歆", "孙秀", "孙河", "曹节", "曹操", "曹嵩", "曹仁", "曹洪", "曹豹", "曹性", "曹昂", "曹丕", "曹植", "曹纯", "曹休", "曹永", "曹彰", "曹熊", "曹睿", "曹真", "曹遵", "曹宇", "曹芳", "曹爽", "曹羲", "曹训", "曹彦", "曹据", "曹髦", "曹德", "曹奂", "曹霖", "曹安民", "李傕", "李儒", "李肃", "李典", "李蒙", "李别", "李封", "李乐", "李暹", "李丰", "李通", "李孚", "李珪", "李谌", "李恢", "李严", "李丰", "李伏", "李意", "李异", "李辅", "李福", "李胜", "李歆", "李鹏", "李崇", "李丰", "李球", "李虎", "李撰", "杨彪", "杨密", "杨琦", "杨奉", "杨丑", "杨龄", "杨秋", "杨阜", "杨修", "杨怀", "杨柏", "杨松", "杨洪", "杨昂", "杨任", "杨锋", "杨仪", "杨陵", "杨暨", "杨颙", "杨祚", "杨综", "杨欣", "杨济", "杨大将", "陈蕃", "陈耽", "陈宫", "陈生", "陈登", "陈武", "陈横", "陈兰", "陈珪", "陈纪", "陈琳", "陈震", "陈孙", "陈就", "陈应", "陈群", "陈矫", "陈式", "陈泰", "陈骞", "陈俊", "陈翔", "陈造", "陈元", "赵忠", "赵弘", "赵萌", "赵岑", "赵云", "赵彦", "赵睿", "赵范", "赵衢", "赵昂", "赵月", "赵累", "赵祚", "赵融", "赵咨", "赵统", "赵广", "赵直", "赵颜", "赵岐", "赵韪", "马腾", "马宇", "马超", "马延", "马良", "马谡", "马岱", "马休", "马铁", "马玩", "马忠", "马忠", "马遵", "马钧", "马邈", "马玉", "马汉", "马融", "马元义", "马日磾", "韩忠", "韩馥", "韩当", "韩遂", "韩暹", "韩融", "韩胤", "韩嵩", "韩福", "韩猛", "韩珩", "韩浩", "韩玄", "韩德", "韩瑛", "韩瑶", "韩琪", "韩暨", "韩综", "韩祯", "韩莒子", "夏侯敦", "夏侯渊", "夏侯兰", "夏侯恩", "夏侯杰", "夏侯尚", "夏侯德", "夏侯存", "夏侯茂", "夏侯霸", "夏侯威", "夏侯惠", "夏侯和", "夏侯玄", "夏侯咸", "吕布", "吕公", "吕虔", "吕范", "吕旷", "吕翔", "吕蒙", "吕通", "吕义", "吕常", "吕建", "吕凯", "吕岱", "吕霸", "吕据", "吕伯奢", "吕威璜", "董卓", "董重", "董旻", "董璜", "董承", "董昭", "董袭", "董和", "董祀", "董衡", "董超", "董允", "董厥", "董禧", "董寻", "董朝", "胡轸", "胡才", "胡华", "胡班", "胡济", "胡质", "胡忠", "胡遵", "胡烈", "胡渊", "胡奋", "胡冲", "胡邈", "胡车儿", "胡赤儿", "周毖", "周奂", "周瑜", "周尚", "周泰", "周昕", "周仓", "周循", "周胤", "周善", "周群", "周平", "周鲂", "周旨", "许攸", "许褚", "许汜", "许贡", "许靖", "许芝", "许慈", "许允", "许晏", "许允", "许仪", "许劭", "许昌", "许韶", "邓茂", "邓龙", "邓义", "邓贤", "邓芝", "邓贤", "邓艾", "邓忠", "邓程", "邓敦", "邓良", "邓飏", "邓铜", "邓禹", "诸葛亮", "诸葛瑾", "诸葛均", "诸葛虔", "诸葛恪", "诸葛瞻", "诸葛诞", "诸葛靓", "诸葛绪", "诸葛尚", "诸葛原", "吴匡", "吴景", "吴敦", "吴硕", "吴臣", "吴懿", "吴兰", "吴质", "吴班", "吴纲", "吴押狱", "朱隽", "朱治", "朱灵", "朱桓", "朱光", "朱然", "朱褒", "朱赞", "朱恩", "朱异", "朱芳", "司马徽", "司马懿", "司马孚", "司马师", "司马昭", "司马望", "司马炎", "司马攸", "司马朗", "蒋钦", "蒋奇", "蒋干", "蒋琬", "蒋济", "蒋班", "蒋舒", "蒋斌", "蒋显", "蒋延", "蒋义渠", "黄盖", "黄琬", "黄祖", "黄邵", "黄忠", "黄奎", "黄权", "黄皓", "黄崇", "黄承彦", "郭胜", "郭汜", "郭嘉", "郭图", "郭常", "郭奕", "郭淮", "郭恩", "郭永", "郭攸之", "袁绍", "袁术", "袁隗", "袁遗", "袁谭", "袁熙", "袁尚", "袁胤", "袁綝", "袁逢", "何进", "何颙", "何苗", "何仪", "何宗", "何平", "何晏", "何曾", "何植", "何曼", "荀攸", "荀爽", "荀谌", "荀彧", "荀正", "荀恽", "荀恺", "荀顗", "荀勗", "荀绲", "丁原", "丁管", "丁奉", "丁斐", "丁仪", "丁廙", "丁咸", "丁谧", "丁封", "丁立", "程普", "程旷", "程昱", "程秉", "程咨", "程银", "程畿", "程武", "程远志", "杜远", "杜袭", "杜琼", "杜路", "杜微", "杜义", "杜祺", "杜睿", "杜预", "公孙瓒", "公孙越", "公孙康", "公孙渊", "公孙度", "公孙晃", "公孙恭", "公孙修", "孟坦", "孟达", "孟光", "孟获", "孟优", "孟节", "孟宗", "孟公威", "庞舒", "庞统", "庞德", "庞羲", "庞义", "庞柔", "庞会", "庞德公", "关羽", "关纯", "关定", "关宁", "关平", "关兴", "关索", "关彝", "薛兰", "薛礼", "薛综", "薛悌", "薛则", "薛乔", "薛莹", "薛珝", "徐荣", "徐晃", "徐璆", "徐庶", "徐盛", "徐商", "徐质", "徐勋", "蔡邕", "蔡瑁", "蔡阳", "蔡和", "蔡中", "蔡勋", "蔡曛", "蔡林", "高升", "高顺", "高览", "高干", "高沛", "高定", "高翔", "高柔", "陆康", "陆绩", "陆逊", "陆抗", "陆凯", "陆景", "陆纡", "陆骏", "傅婴", "傅巽", "傅干", "傅彤", "傅嘏", "傅佥", "傅士仁", "崔烈", "崔毅", "崔勇", "崔琰", "崔禹", "崔谅", "崔州平", "田丰", "田楷", "田氏", "田畴", "田预", "田续", "田章", "郑泰", "郑玄", "郑度", "郑文", "郑伦", "郑袤", "郑宝", "尹礼", "尹楷", "尹奉", "尹默", "尹赏", "尹大目", "秦琪", "秦宓", "秦良", "秦明", "秦朗", "秦庆童", "全琮", "全端", "全怿", "全纪", "全尚", "全祎", "钟缙", "钟绅", "钟繇", "钟进", "钟会", "钟毓", "梁刚", "梁兴", "梁宽", "梁绪", "梁虔", "梁畿", "严纲", "严舆", "严畯", "严颜", "严政", "严白虎", "潘隐", "潘凤", "潘璋", "潘浚", "潘举", "潘遂", "文丑", "文聘", "文钦", "文淑", "文虎", "苏双", "苏由", "苏飞", "苏越", "苏颙", "贾诩", "贾华", "贾逵", "贾范", "贾充", "宋果", "宋宪", "宋忠", "宋谦", "宋白", "成廉", "成宜", "成济", "成倅", "成何", "阎圃", "阎晏", "阎宇", "阎象", "阎芝", "范成", "范疆", "范谤", "范康", "卫弘", "卫凯", "卫演", "卫瓘", "左丰", "左灵", "左慈", "左咸", "樊稠", "樊能", "樊建", "樊歧", "彭安", "彭羕", "彭和", "彭伯", "辛评", "辛毗", "辛敞", "辛明", "鲍信", "鲍忠", "鲍隆", "鲍素", "伍琼", "伍孚", "伍习", "伍延", "陶谦", "陶商", "陶应", "陶浚", "华雄", "华佗", "华歆", "华核", "桓阶", "桓范", "桓嘉", "桓彝", "岑壁", "岑威", "岑昏", "岑眰", "于禁", "于麋", "于吉", "于诠", "焦触", "焦炳", "焦彝", "焦伯", "费观", "费祎", "费诗", "费耀", "冯礼", "冯习", "冯紞", "冯方", "孔伷", "孔融", "孔秀", "孔昱", "魏续", "魏延", "魏邈", "魏平", "皇甫嵩", "皇甫闿", "皇甫郦", "淳于琼", "淳于导", "淳于丹", "裴景", "裴秀", "裴元绍", "管亥", "管宁", "管辂", "向朗", "向举", "向宠", "唐周", "唐咨", "唐彬", "侯览", "侯成", "侯选", "龚景", "龚都", "龚起", "祖茂", "祖郎", "祖弼", "吉太", "吉邈", "吉穆", "乐进", "乐就", "乐綝", "种拂", "种辑", "种邵", "鲁馗", "鲁肃", "鲁芝", "廖化", "廖淳", "廖立", "留赞", "留略", "留平", "金旋", "金祎", "金尚", "太史慈", "太史亨", "毋丘俭", "毋丘甸", "眭固", "眭元进", "石苞", "石广元", "邢贞", "邢道荣", "雷薄", "雷铜", "万政", "万彧", "姜叙", "姜维", "段珪", "段煨", "夏恽", "夏恂", "卢植", "卢逊", "牛辅", "牛金", "昌稀", "昌奇", "虞翻", "虞松", "凌操", "凌统", "蒯良", "蒯越", "耿武", "耿纪", "尚弘", "尚广", "沮授", "沮鹄", "典韦", "典满", "边让", "边洪", "糜竺", "糜芳", "宗宝", "宗预", "郝萌", "郝昭", "任峻", "任夔", "审配", "审荣", "穆顺", "穆顺", "戴员", "戴凌", "步骘", "步阐", "爰靑", "爰邵", "丘建", "丘本", "申耽", "申仪", "韦康", "韦晃", "霍峻", "霍弋", "谢旌", "谢雄", "滕胤", "滕修", "乔瑁", "乔玄", "臧霸", "臧旻", "伏完", "伏德", "吾彦", "吾粲", "窦武", "封諝", "蹇硕", "邹靖", "颜良", "方悦", "和洽", "邴原", "谷利", "闵贡", "逢纪", "麴义", "桥蕤", "俞涉", "纪灵", "笮融", "简雍", "满宠", "毛玠", "应劭", "卞喜", "史涣", "路昭", "车胄", "祢衡", "顾雍", "阚泽", "骆统", "甘宁", "妫览", "郄虑", "脂习", "晏明", "牵弘", "州泰", "曾宣", "施朔", "党均", "宁随", "邵悌", "干休", "羊祜", "楼玄", "雍闿", "沈莹", "山涛", "仇连", "花永", "巩志", "鄂焕", "戈定", "苗泽", "法正", "泠苞", "赖恭", "卓膺谯周", "翟元", "殷纯", "谭雄", "靳祥", "常雕", "郤正", "来敏", "官雝", "爨习", "盛勃", "苟安", "伦直", "卑衍", "柳甫", "毕轨", "司蕃", "句安", "葛雍", "师篡", "白寿", "阳群", "汪昭", "檀敷", "区星", "普净", "武安国娄子伯", "慕容烈", "士孙瑞", "濮阳兴", "单子春", "乔国老", "南华老仙", "紫虚上人", "金环三结董荼那", "阿会喃", "忙牙长", "朵思大王", "带来洞主", "木鹿大王", "兀突骨", "土安", "奚泥沙摩柯", "轲比能", "彻里吉", "雅旦", "越吉", "迷当", "俄何烧戈", "蹋顿", "乌桓触", "左贤王", "王美人" ];

    //  获取随机名字
    function getNickname() {
        //  取0~1099的随机数
        var random = Math.floor(Math.random() * 1099);

        if (random >= 1099)
            throw new Error("获取人名数组下标月结！");

        return 'name:'+arr[random];
    }

    exports.getNickname = getNickname;

  }());
