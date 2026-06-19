(function () {
    "use strict";

    var movies = [
        {
                "title": "我杀了我妈妈",
                "year": "2009",
                "region": "加拿大 / 法国",
                "type": "电影",
                "genre": "剧情 / 家庭 / 传记",
                "category": "爱情家庭",
                "tags": [
                        "青春期",
                        "母子关系",
                        "自传",
                        "情感暴力"
                ],
                "url": "movie-1.html",
                "cover": "1.jpg"
        },
        {
                "title": "不可征服",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "传记 / 运动",
                "category": "动作冒险",
                "tags": [
                        "马拉松",
                        "截肢",
                        "励志",
                        "真实故事"
                ],
                "url": "movie-2.html",
                "cover": "2.jpg"
        },
        {
                "title": "唯一的家庭",
                "year": "2024",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情, 悬疑, 家庭",
                "category": "欧美热播",
                "tags": [
                        "收养",
                        "身份",
                        "反转",
                        "人性"
                ],
                "url": "movie-3.html",
                "cover": "3.jpg"
        },
        {
                "title": "台北物语",
                "year": "2017",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情",
                "category": "高分片单",
                "tags": [
                        "城市",
                        "家庭",
                        "日常",
                        "疏离",
                        "写实"
                ],
                "url": "movie-4.html",
                "cover": "4.jpg"
        },
        {
                "title": "欢乐颂",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "喜剧 / 音乐 / 都市",
                "category": "喜剧治愈",
                "tags": [
                        "五音不全",
                        "社区合唱团",
                        "治愈",
                        "小人物群像"
                ],
                "url": "movie-5.html",
                "cover": "5.jpg"
        },
        {
                "title": "命运之石",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "奇幻 / 冒险 / 动作",
                "category": "动作冒险",
                "tags": [
                        "亚瑟王",
                        "魔法",
                        "圣剑",
                        "史诗"
                ],
                "url": "movie-6.html",
                "cover": "6.jpg"
        },
        {
                "title": "异兽禁区",
                "year": "2023",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻, 惊悚, 怪兽",
                "category": "喜剧治愈",
                "tags": [
                        "变异",
                        "生存",
                        "血腥",
                        "政府阴谋"
                ],
                "url": "movie-7.html",
                "cover": "7.jpg"
        },
        {
                "title": "天赐之女",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 科幻 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "天才少女",
                        "基因编辑",
                        "伦理",
                        "悬疑"
                ],
                "url": "movie-8.html",
                "cover": "8.jpg"
        },
        {
                "title": "私善公恶",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "犯罪 / 剧情",
                "category": "高分片单",
                "tags": [
                        "双面人生",
                        "黑吃黑",
                        "法律漏洞",
                        "义贼"
                ],
                "url": "movie-9.html",
                "cover": "9.jpg"
        },
        {
                "title": "连生贵子",
                "year": "1986",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧, 家庭",
                "category": "亚洲经典",
                "tags": [
                        "香港",
                        "生仔",
                        "闹剧"
                ],
                "url": "movie-10.html",
                "cover": "10.jpg"
        },
        {
                "title": "变态狂魔",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖，惊悚",
                "category": "日韩精选",
                "tags": [
                        "连环杀手",
                        "密室",
                        "心理战",
                        "反转"
                ],
                "url": "movie-11.html",
                "cover": "11.jpg"
        },
        {
                "title": "女人的烦恼",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "悬疑 / 剧情 / 女性",
                "category": "喜剧治愈",
                "tags": [
                        "女性群像",
                        "社会派推理",
                        "复仇"
                ],
                "url": "movie-12.html",
                "cover": "12.jpg"
        },
        {
                "title": "金钱豹",
                "year": "2024",
                "region": "中国大陆",
                "type": "网剧",
                "genre": "悬疑 / 犯罪 / 年代",
                "category": "爱情家庭",
                "tags": [
                        "民国",
                        "盗窃",
                        "女性视角",
                        "连环案",
                        "反转"
                ],
                "url": "movie-13.html",
                "cover": "13.jpg"
        },
        {
                "title": "布鲁克林孤儿",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "犯罪， 剧情， 悬疑",
                "category": "日韩精选",
                "tags": [
                        "黑帮",
                        "侦探",
                        "抽动秽语综合征",
                        "孤胆英雄",
                        "怀旧"
                ],
                "url": "movie-14.html",
                "cover": "14.jpg"
        },
        {
                "title": "幽灵肖像",
                "year": "2023",
                "region": "巴西",
                "type": "电影",
                "genre": "纪录片，历史",
                "category": "纪录综艺",
                "tags": [
                        "城市记忆",
                        "老照片",
                        "殖民史",
                        "超自然"
                ],
                "url": "movie-15.html",
                "cover": "15.jpg"
        },
        {
                "title": "巨塔之后粤语",
                "year": "2027",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情 / 商战 / 家族",
                "category": "喜剧治愈",
                "tags": [
                        "豪门",
                        "地产",
                        "兄弟反目",
                        "粤语原声",
                        "权力游戏"
                ],
                "url": "movie-16.html",
                "cover": "16.jpg"
        },
        {
                "title": "魔法满屋",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "动画, 奇幻",
                "category": "动作冒险",
                "tags": [
                        "家庭",
                        "魔法",
                        "治愈"
                ],
                "url": "movie-17.html",
                "cover": "17.jpg"
        },
        {
                "title": "尘封迷情",
                "year": "2002",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "民国虐恋",
                        "家族恩怨",
                        "失忆复仇",
                        "老上海风情"
                ],
                "url": "movie-18.html",
                "cover": "18.jpg"
        },
        {
                "title": "圣诞故事2",
                "year": "2025",
                "region": "加拿大",
                "type": "电影",
                "genre": "家庭 / 奇幻 / 喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "圣诞续集",
                        "礼物时间循环",
                        "反向圣诞老人"
                ],
                "url": "movie-19.html",
                "cover": "19.jpg"
        },
        {
                "title": "换脑怪杰",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻 / 喜剧 / 家庭",
                "category": "亚洲经典",
                "tags": [
                        "脑机实验",
                        "身份错位",
                        "误会连环",
                        "亲情修补",
                        "反差喜剧"
                ],
                "url": "movie-20.html",
                "cover": "20.jpg"
        },
        {
                "title": "德苏·乌札拉",
                "year": "2028",
                "region": "俄罗斯 / 韩国",
                "type": "电影",
                "genre": "剧情, 冒险, 历史",
                "category": "华语佳作",
                "tags": [
                        "原始森林",
                        "赫哲族",
                        "人与自然",
                        "翻拍"
                ],
                "url": "movie-21.html",
                "cover": "21.jpg"
        },
        {
                "title": "祝福的钟声",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 奇幻, 治愈",
                "category": "日韩精选",
                "tags": [
                        "钟楼",
                        "小镇",
                        "时间循环",
                        "治愈",
                        "魔法"
                ],
                "url": "movie-22.html",
                "cover": "22.jpg"
        },
        {
                "title": "高地营救",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "动作，冒险，剧情",
                "category": "动作冒险",
                "tags": [
                        "苏格兰",
                        "山地救援",
                        "父子矛盾",
                        "生存"
                ],
                "url": "movie-23.html",
                "cover": "23.jpg"
        },
        {
                "title": "奔跑吧，人生",
                "year": "2020",
                "region": "日本",
                "type": "电影",
                "genre": "剧情， 运动， 励志",
                "category": "亚洲经典",
                "tags": [
                        "马拉松",
                        "绝症",
                        "重生",
                        "父子",
                        "治愈"
                ],
                "url": "movie-24.html",
                "cover": "24.jpg"
        },
        {
                "title": "鬼娃回魂6",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "杀人玩偶",
                        "血浆",
                        "黑色幽默",
                        "系列重启"
                ],
                "url": "movie-25.html",
                "cover": "25.jpg"
        },
        {
                "title": "克金玩家",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情, 冒险",
                "category": "纪录综艺",
                "tags": [
                        "游戏",
                        "氪金",
                        "虚拟现实"
                ],
                "url": "movie-26.html",
                "cover": "26.jpg"
        },
        {
                "title": "瀚海神龙",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "奇幻 / 冒险 / 古装",
                "category": "欧美热播",
                "tags": [
                        "沙漠",
                        "寻龙",
                        "特效",
                        "丝路传说"
                ],
                "url": "movie-27.html",
                "cover": "27.jpg"
        },
        {
                "title": "狄仁杰之幻涅魔蛾",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "古装，悬疑，奇幻",
                "category": "日韩精选",
                "tags": [
                        "狄仁杰",
                        "变种昆虫",
                        "朝堂阴谋"
                ],
                "url": "movie-28.html",
                "cover": "28.jpg"
        },
        {
                "title": "偷天盗日",
                "year": "2023",
                "region": "韩国",
                "type": "电影",
                "genre": "犯罪动作",
                "category": "亚洲经典",
                "tags": [
                        "盗贼",
                        "时空",
                        "逆转",
                        "爽片"
                ],
                "url": "movie-29.html",
                "cover": "29.jpg"
        },
        {
                "title": "八部半",
                "year": "2023",
                "region": "意大利",
                "type": "剧情, 奇幻",
                "genre": "心理, 文艺, 梦境",
                "category": "高分片单",
                "tags": [
                        "导演",
                        "创作瓶颈",
                        "梦境",
                        "自反性"
                ],
                "url": "movie-30.html",
                "cover": "30.jpg"
        },
        {
                "title": "仲夏夜魔法",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动画 / 奇幻 / 冒险",
                "category": "高分片单",
                "tags": [
                        "精灵",
                        "魔法森林",
                        "夏至",
                        "变身",
                        "欢乐向"
                ],
                "url": "movie-31.html",
                "cover": "31.jpg"
        },
        {
                "title": "布宜诺斯艾利斯现场",
                "year": "2019",
                "region": "阿根廷",
                "type": "电影",
                "genre": "悬疑, 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "直播",
                        "犯罪现场",
                        "网络暴力"
                ],
                "url": "movie-32.html",
                "cover": "32.jpg"
        },
        {
                "title": "降临",
                "year": "2018",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻，悬疑，心理",
                "category": "喜剧治愈",
                "tags": [
                        "外星接触",
                        "时间循环",
                        "小镇秘密"
                ],
                "url": "movie-33.html",
                "cover": "33.jpg"
        },
        {
                "title": "东海人鱼传2",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "奇幻 / 爱情 / 冒险",
                "category": "动作冒险",
                "tags": [
                        "神话新编",
                        "深海奇观",
                        "虐恋",
                        "鲛人泪"
                ],
                "url": "movie-34.html",
                "cover": "34.jpg"
        },
        {
                "title": "草之乱",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "犯罪, 惊悚, 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "环保犯罪",
                        "黑吃黑",
                        "复仇",
                        "泥泞美学"
                ],
                "url": "movie-35.html",
                "cover": "35.jpg"
        },
        {
                "title": "艾米丽在巴黎第三季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 喜剧 / 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "职场女性",
                        "跨文化冲突",
                        "时尚",
                        "三角关系",
                        "巴黎"
                ],
                "url": "movie-36.html",
                "cover": "36.jpg"
        },
        {
                "title": "使徒行者",
                "year": "2014",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "警匪卧底",
                "category": "喜剧治愈",
                "tags": [
                        "卧底",
                        "香港",
                        "兄弟情",
                        "黑帮",
                        "经典"
                ],
                "url": "movie-37.html",
                "cover": "37.jpg"
        },
        {
                "title": "时间之轮",
                "year": "2021",
                "region": "美国",
                "type": "电视剧",
                "genre": "奇幻，冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "转世",
                        "魔法",
                        "史诗",
                        "多视角",
                        "预言"
                ],
                "url": "movie-38.html",
                "cover": "38.jpg"
        },
        {
                "title": "倒凤颠鸾",
                "year": "2016",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装, 权谋, 武侠, 家国",
                "category": "亚洲经典",
                "tags": [
                        "逆袭",
                        "易容术",
                        "女将",
                        "家族复仇",
                        "朝堂阴谋"
                ],
                "url": "movie-39.html",
                "cover": "39.jpg"
        },
        {
                "title": "巴斯克维尔的猎犬",
                "year": "2019",
                "region": "英国",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "古堡迷案",
                        "诡异传说",
                        "双线叙事",
                        "侦探推理",
                        "雾夜追踪",
                        "心理博弈"
                ],
                "url": "movie-40.html",
                "cover": "40.jpg"
        },
        {
                "title": "视差景象",
                "year": "1974",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑 / 惊悚 / 政治",
                "category": "动作冒险",
                "tags": [
                        "政治阴谋",
                        "刺杀",
                        "心理操控",
                        "经典"
                ],
                "url": "movie-41.html",
                "cover": "41.jpg"
        },
        {
                "title": "再闯侏罗纪",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作，科幻，冒险",
                "category": "日韩精选",
                "tags": [
                        "恐龙",
                        "基因工程",
                        "岛屿",
                        "逃生"
                ],
                "url": "movie-42.html",
                "cover": "42.jpg"
        },
        {
                "title": "海棠春",
                "year": "1948",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情，爱情",
                "category": "喜剧治愈",
                "tags": [
                        "民国",
                        "女性",
                        "命运",
                        "黑白"
                ],
                "url": "movie-43.html",
                "cover": "43.jpg"
        },
        {
                "title": "大自然的魔兽巴奇",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖科幻",
                "category": "悬疑惊悚",
                "tags": [
                        "怪兽",
                        "环保",
                        "实验失败",
                        "小镇",
                        "血腥"
                ],
                "url": "movie-44.html",
                "cover": "44.jpg"
        },
        {
                "title": "奇葩双人行之战杭州",
                "year": "2026",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀",
                "category": "动作冒险",
                "tags": [
                        "喜剧搭档",
                        "城市挑战",
                        "即兴表演"
                ],
                "url": "movie-45.html",
                "cover": "45.jpg"
        },
        {
                "title": "沉默的教室",
                "year": "2025",
                "region": "德国",
                "type": "电影",
                "genre": "剧情 / 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "冷战",
                        "东德",
                        "校园",
                        "沉默",
                        "极权"
                ],
                "url": "movie-46.html",
                "cover": "46.jpg"
        },
        {
                "title": "对战美洲狮",
                "year": "2025",
                "region": "加拿大",
                "type": "电影",
                "genre": "惊悚 / 生存 / 冒险",
                "category": "喜剧治愈",
                "tags": [
                        "荒野求生",
                        "猛兽",
                        "真实事件改编"
                ],
                "url": "movie-47.html",
                "cover": "47.jpg"
        },
        {
                "title": "世袭瀑布",
                "year": "2018",
                "region": "香港",
                "type": "家族剧",
                "genre": "家庭伦理,商战,悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "世代遗产",
                        "矿权阴影",
                        "地下账本",
                        "女性继承",
                        "工人命运"
                ],
                "url": "movie-48.html",
                "cover": "48.jpg"
        },
        {
                "title": "中途岛战役",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "历史 / 战争 / 动作",
                "category": "华语佳作",
                "tags": [
                        "二战",
                        "太平洋战场",
                        "航母",
                        "真实改编"
                ],
                "url": "movie-49.html",
                "cover": "49.jpg"
        },
        {
                "title": "梯田姐妹",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "留守姐妹",
                        "广西梯田",
                        "女性互助",
                        "成长"
                ],
                "url": "movie-50.html",
                "cover": "50.jpg"
        },
        {
                "title": "击倒",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作，体育，传记",
                "category": "日韩精选",
                "tags": [
                        "拳击",
                        "残疾人",
                        "励志",
                        "真实改编"
                ],
                "url": "movie-51.html",
                "cover": "51.jpg"
        },
        {
                "title": "潜艇驱逐战",
                "year": "1958",
                "region": "美国",
                "type": "电影",
                "genre": "战争 / 惊悚",
                "category": "欧美热播",
                "tags": [
                        "二战",
                        "潜艇",
                        "海战",
                        "黑白",
                        "经典"
                ],
                "url": "movie-52.html",
                "cover": "52.jpg"
        },
        {
                "title": "狱门岛",
                "year": "2021",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "孤岛",
                        "家族恩怨",
                        "密室杀人",
                        "横沟正史风"
                ],
                "url": "movie-53.html",
                "cover": "53.jpg"
        },
        {
                "title": "异教徒",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "邪教",
                        "孤岛",
                        "民俗",
                        "反转"
                ],
                "url": "movie-54.html",
                "cover": "54.jpg"
        },
        {
                "title": "安打先生",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧，运动",
                "category": "华语佳作",
                "tags": [
                        "体育励志",
                        "中年逆袭",
                        "棒球",
                        "家庭温情"
                ],
                "url": "movie-55.html",
                "cover": "55.jpg"
        },
        {
                "title": "海魂（1958）",
                "year": "1958",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争剧情",
                "category": "华语佳作",
                "tags": [
                        "起义",
                        "军舰",
                        "黑白片",
                        "群像"
                ],
                "url": "movie-56.html",
                "cover": "56.jpg"
        },
        {
                "title": "藏尸袋",
                "year": "2019",
                "region": "美国 / 加拿大",
                "type": "电影",
                "genre": "恐怖 / 犯罪 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "低成本",
                        "杀人旅馆",
                        "尸袋视角",
                        "密闭空间",
                        "道德困境"
                ],
                "url": "movie-57.html",
                "cover": "57.jpg"
        },
        {
                "title": "夺命针",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "犯罪 / 悬疑",
                "category": "欧美热播",
                "tags": [
                        "中医悬疑",
                        "针灸杀人",
                        "医患纠纷",
                        "高智商犯罪"
                ],
                "url": "movie-58.html",
                "cover": "58.jpg"
        },
        {
                "title": "叶挺将军",
                "year": "2021",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "历史，传记",
                "category": "动作冒险",
                "tags": [
                        "北伐",
                        "铁军",
                        "革命",
                        "抗战",
                        "主旋律"
                ],
                "url": "movie-59.html",
                "cover": "59.jpg"
        },
        {
                "title": "死路",
                "year": "2026",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑",
                "category": "高分片单",
                "tags": [
                        "乡村",
                        "凶案",
                        "全员恶人",
                        "非线性叙事",
                        "反转"
                ],
                "url": "movie-60.html",
                "cover": "60.jpg"
        },
        {
                "title": "瑞普·凡·温克尔的新娘",
                "year": "2016",
                "region": "日本",
                "type": "电影",
                "genre": "剧情，奇幻，爱情",
                "category": "纪录综艺",
                "tags": [
                        "岩井俊二",
                        "婚姻",
                        "谎言",
                        "重生"
                ],
                "url": "movie-61.html",
                "cover": "61.jpg"
        },
        {
                "title": "强殖装甲",
                "year": "2005",
                "region": "日本",
                "type": "电影",
                "genre": "科幻 / 动作 / 冒险",
                "category": "日韩精选",
                "tags": [
                        "生体装甲",
                        "变异实验",
                        "反抗军",
                        "追捕",
                        "失控进化",
                        "机械怪物"
                ],
                "url": "movie-62.html",
                "cover": "62.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 糖果传奇 如果可以再死一次 五郎八卦棍粤语 黑暗荣耀 迷失的飞行队 英建侦探事务所 诺玛在澳大利亚 告别前的30分钟 昨天开始爱上你 魔王复活 警笛 辣警霸王花2 路易·德拉克斯的第九条命 血溅火林 天使面庞 永恒剑祖 伸冤人第三季 大陈岛誓言 唐顿庄园：盛世终章 失眠男女",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "高分片单",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-63.html",
                "cover": "63.jpg"
        },
        {
                "title": "杀机",
                "year": "2025",
                "region": "香港",
                "type": "电影",
                "genre": "动作",
                "category": "日韩精选",
                "tags": [
                        "杀手",
                        "双雄",
                        "师徒",
                        "背叛"
                ],
                "url": "movie-64.html",
                "cover": "64.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 明月几时有粤语 猫和老鼠：海盗寻宝 巴黎迷路的午后 风流房东 机动战士高达 雷霆宙域 美人名驹 新阿达一族的万圣节 布朗神父第十一季 雷恩 1974 无解谜团 监狱风云2：逃犯 说不出口的禁忌爱欲 废柴舅舅 蚂蚁杀手 欣德·拉贾布之声 今晚80后脱口秀2014 不要说国语 我只是想说喜欢你 地狱骇客 古剑奇谭之悲歌咒",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "华语佳作",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-65.html",
                "cover": "65.jpg"
        },
        {
                "title": "史班奇将军",
                "year": "2004",
                "region": "美国",
                "type": "电影",
                "genre": "战争 / 传记 / 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "将领",
                        "误打误撞",
                        "军事荒诞",
                        "战场策略",
                        "个人崇拜",
                        "反讽"
                ],
                "url": "movie-66.html",
                "cover": "66.jpg"
        },
        {
                "title": "城市滑头",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "喜剧 / 犯罪 / 都市",
                "category": "纪录综艺",
                "tags": [
                        "诈骗",
                        "小人物",
                        "兄弟情",
                        "东北喜剧"
                ],
                "url": "movie-67.html",
                "cover": "67.jpg"
        },
        {
                "title": "美味秘方",
                "year": "2021",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 美食 / 家庭",
                "category": "动作冒险",
                "tags": [
                        "美食",
                        "亲情",
                        "传承",
                        "乡土",
                        "治愈"
                ],
                "url": "movie-68.html",
                "cover": "68.jpg"
        },
        {
                "title": "安妮1982",
                "year": "1982",
                "region": "美国",
                "type": "电影",
                "genre": "剧情、音乐",
                "category": "动作冒险",
                "tags": [
                        "百老汇",
                        "孤儿",
                        "励志",
                        "大萧条",
                        "经典翻拍"
                ],
                "url": "movie-69.html",
                "cover": "69.jpg"
        },
        {
                "title": "天一亮，就想见到你",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情 / 奇幻 / 治愈",
                "category": "高分片单",
                "tags": [
                        "失眠",
                        "治愈",
                        "梦境",
                        "双向奔赴",
                        "暖剧"
                ],
                "url": "movie-70.html",
                "cover": "70.jpg"
        },
        {
                "title": "在熙的男，朋友",
                "year": "2022",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情, 爱情, 同性",
                "category": "动作冒险",
                "tags": [
                        "身份互换",
                        "都市情感",
                        "治愈"
                ],
                "url": "movie-71.html",
                "cover": "71.jpg"
        },
        {
                "title": "窗边的小荳荳",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 家庭 / 动画",
                "category": "爱情家庭",
                "tags": [
                        "教育",
                        "童年",
                        "治愈",
                        "经典改编",
                        "成长"
                ],
                "url": "movie-72.html",
                "cover": "72.jpg"
        },
        {
                "title": "晴时多云",
                "year": "2026",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "家庭, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "气象站",
                        "母女和解",
                        "小镇故事"
                ],
                "url": "movie-73.html",
                "cover": "73.jpg"
        },
        {
                "title": "女兵外传2",
                "year": "2022",
                "region": "新加坡",
                "type": "剧集",
                "genre": "喜剧 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "女子军营",
                        "新加坡征兵",
                        "成长喜剧"
                ],
                "url": "movie-74.html",
                "cover": "74.jpg"
        },
        {
                "title": "夜偷情",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情爱情悬疑",
                "category": "高分片单",
                "tags": [
                        "出轨",
                        "公寓",
                        "监控",
                        "身份互换"
                ],
                "url": "movie-75.html",
                "cover": "75.jpg"
        },
        {
                "title": "浪漫的蓝色",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 爱情",
                "category": "高分片单",
                "tags": [
                        "文艺",
                        "巴黎",
                        "视觉美学",
                        "慢节奏"
                ],
                "url": "movie-76.html",
                "cover": "76.jpg"
        },
        {
                "title": "离散与恒留",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 文艺",
                "category": "华语佳作",
                "tags": [
                        "移民",
                        "家庭",
                        "时间跨度",
                        "乡愁"
                ],
                "url": "movie-77.html",
                "cover": "77.jpg"
        },
        {
                "title": "娇凤三姐妹",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "家庭 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "豪门恩怨",
                        "姐妹夺产",
                        "家族秘密",
                        "女性群像"
                ],
                "url": "movie-78.html",
                "cover": "78.jpg"
        },
        {
                "title": "玉响完结篇第二部：响",
                "year": "2015",
                "region": "日本",
                "type": "电影 / 动画",
                "genre": "治愈 / 青春 / 日常",
                "category": "纪录综艺",
                "tags": [
                        "摄影",
                        "毕业",
                        "友情",
                        "小镇"
                ],
                "url": "movie-79.html",
                "cover": "79.jpg"
        },
        {
                "title": "凯萨万岁！",
                "year": "2025",
                "region": "意大利",
                "type": "电影",
                "genre": "喜剧 / 历史 / 奇幻",
                "category": "爱情家庭",
                "tags": [
                        "穿越",
                        "古今碰撞",
                        "恶搞历史"
                ],
                "url": "movie-80.html",
                "cover": "80.jpg"
        },
        {
                "title": "障碍",
                "year": "2019",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "心理",
                        "密室",
                        "母女",
                        "社会隐喻"
                ],
                "url": "movie-81.html",
                "cover": "81.jpg"
        },
        {
                "title": "爆嗨",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 动作 / 犯罪",
                "category": "爱情家庭",
                "tags": [
                        "港式无厘头",
                        "毒品",
                        "卧底",
                        "爆笑",
                        "群星贺岁"
                ],
                "url": "movie-82.html",
                "cover": "82.jpg"
        },
        {
                "title": "天使在南京",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "剧情 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "城市童话",
                        "守城天使",
                        "快递员",
                        "治愈"
                ],
                "url": "movie-83.html",
                "cover": "83.jpg"
        },
        {
                "title": "毛驴县令之非我莫属",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 古装",
                "category": "喜剧治愈",
                "tags": [
                        "网络电影",
                        "搞笑",
                        "草根",
                        "破案",
                        "动物"
                ],
                "url": "movie-84.html",
                "cover": "84.jpg"
        },
        {
                "title": "白狐情缘",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影 / 网络电影",
                "genre": "奇幻, 爱情, 古装",
                "category": "高分片单",
                "tags": [
                        "人妖恋",
                        "修仙",
                        "虐恋",
                        "三世轮回"
                ],
                "url": "movie-85.html",
                "cover": "85.jpg"
        },
        {
                "title": "花豹少女队：勇闯好莱坞",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "歌舞、家庭、冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "少女组合",
                        "音乐",
                        "好莱坞",
                        "梦想",
                        "姐妹情"
                ],
                "url": "movie-86.html",
                "cover": "86.jpg"
        },
        {
                "title": "卿如野菊花",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情， 剧情， 文艺",
                "category": "动作冒险",
                "tags": [
                        "乡村",
                        "纯爱",
                        "留守",
                        "女性成长",
                        "诗意"
                ],
                "url": "movie-87.html",
                "cover": "87.jpg"
        },
        {
                "title": "元年",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻, 悬疑, 剧情",
                "category": "日韩精选",
                "tags": [
                        "时间重置",
                        "记忆保留",
                        "集体阴谋",
                        "硬科幻"
                ],
                "url": "movie-88.html",
                "cover": "88.jpg"
        },
        {
                "title": "主播风云2004",
                "year": "2004",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "电视台",
                        "职场斗争",
                        "神秘案件"
                ],
                "url": "movie-89.html",
                "cover": "89.jpg"
        },
        {
                "title": "山海伏魔录",
                "year": "2024",
                "region": "中国大陆",
                "type": "奇幻电影",
                "genre": "奇幻 / 冒险 / 神话",
                "category": "纪录综艺",
                "tags": [
                        "山海异兽",
                        "上古封印",
                        "少年成长",
                        "志怪设定",
                        "群像冒险"
                ],
                "url": "movie-90.html",
                "cover": "90.jpg"
        },
        {
                "title": "重金摇滚双面人",
                "year": "2020",
                "region": "日本",
                "type": "剧集",
                "genre": "喜剧, 音乐, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "反差萌",
                        "死亡金属",
                        "纯爱",
                        "地下偶像"
                ],
                "url": "movie-91.html",
                "cover": "91.jpg"
        },
        {
                "title": "盲少爷的小女仆2023",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情, 偶像, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "甜宠",
                        "霸总",
                        "失明",
                        "契约恋爱"
                ],
                "url": "movie-92.html",
                "cover": "92.jpg"
        },
        {
                "title": "我们的挑战",
                "year": "2025",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀",
                "category": "日韩精选",
                "tags": [
                        "挑战",
                        "明星",
                        "公益",
                        "极限"
                ],
                "url": "movie-93.html",
                "cover": "93.jpg"
        },
        {
                "title": "十二任务",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 冒险 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "极限通关",
                        "全球解谜",
                        "实境游戏",
                        "遗产争夺",
                        "十二生肖隐喻"
                ],
                "url": "movie-94.html",
                "cover": "94.jpg"
        },
        {
                "title": "欲望庄园",
                "year": "2026",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 爱情",
                "category": "欧美热播",
                "tags": [
                        "庄园谜团",
                        "家族秘密",
                        "禁忌之恋"
                ],
                "url": "movie-95.html",
                "cover": "95.jpg"
        },
        {
                "title": "饥渴游戏",
                "year": "2023",
                "region": "泰国",
                "type": "电影",
                "genre": "惊悚, 剧情",
                "category": "欧美热播",
                "tags": [
                        "奈飞",
                        "美食",
                        "阶级",
                        "心理战",
                        "饥饿游戏"
                ],
                "url": "movie-96.html",
                "cover": "96.jpg"
        },
        {
                "title": "居家男人2004",
                "year": "2004",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 爱情",
                "category": "华语佳作",
                "tags": [
                        "时空穿越",
                        "身份互换",
                        "都市",
                        "家庭价值",
                        "反思人生"
                ],
                "url": "movie-97.html",
                "cover": "97.jpg"
        },
        {
                "title": "末世肉体",
                "year": "2025",
                "region": "法国，比利时",
                "type": "电影",
                "genre": "科幻，恐怖",
                "category": "亚洲经典",
                "tags": [
                        "身体恐怖",
                        "后末日",
                        "欲望",
                        "突变"
                ],
                "url": "movie-98.html",
                "cover": "98.jpg"
        },
        {
                "title": "寒星泪",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情",
                "category": "华语佳作",
                "tags": [
                        "虐恋",
                        "年代",
                        "分离",
                        "绝症"
                ],
                "url": "movie-99.html",
                "cover": "99.jpg"
        },
        {
                "title": "机器情人梦",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情/科幻",
                "category": "爱情家庭",
                "tags": [
                        "仿生人",
                        "伦理",
                        "记忆",
                        "赛博朋克"
                ],
                "url": "movie-100.html",
                "cover": "100.jpg"
        },
        {
                "title": "消失的士兵",
                "year": "2025",
                "region": "德国",
                "type": "电影",
                "genre": "战争, 悬疑, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "二战",
                        "逃兵",
                        "记忆碎片",
                        "身份迷局"
                ],
                "url": "movie-101.html",
                "cover": "101.jpg"
        },
        {
                "title": "惊天骇浪",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "灾难, 动作",
                "category": "日韩精选",
                "tags": [
                        "海难",
                        "救援",
                        "父子",
                        "特效"
                ],
                "url": "movie-102.html",
                "cover": "102.jpg"
        },
        {
                "title": "烽火铁骑",
                "year": "2017",
                "region": "中国",
                "type": "战争电影",
                "genre": "战争,军旅,历史,人文",
                "category": "喜剧治愈",
                "tags": [
                        "铁骑",
                        "边塞",
                        "雪地作战",
                        "生存",
                        "家国",
                        "领袖"
                ],
                "url": "movie-103.html",
                "cover": "103.jpg"
        },
        {
                "title": "特工老爸",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作喜剧",
                "category": "华语佳作",
                "tags": [
                        "退休特工",
                        "带娃",
                        "误打误撞",
                        "硬汉柔情"
                ],
                "url": "movie-104.html",
                "cover": "104.jpg"
        },
        {
                "title": "黄石的孩子",
                "year": "2025",
                "region": "中国 / 美国",
                "type": "电影",
                "genre": "剧情 / 历史 / 战争",
                "category": "亚洲经典",
                "tags": [
                        "二战",
                        "孤儿",
                        "跨国救援",
                        "真实事件改编",
                        "西部中国"
                ],
                "url": "movie-105.html",
                "cover": "105.jpg"
        },
        {
                "title": "征服2003",
                "year": "2003",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "刑侦，警匪",
                "category": "欧美热播",
                "tags": [
                        "经典",
                        "硬汉",
                        "黑吃黑"
                ],
                "url": "movie-106.html",
                "cover": "106.jpg"
        },
        {
                "title": "自力更生",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情 / 家庭",
                "category": "动作冒险",
                "tags": [
                        "人生重启",
                        "都市返乡",
                        "亲情和解",
                        "治愈",
                        "匠心"
                ],
                "url": "movie-107.html",
                "cover": "107.jpg"
        },
        {
                "title": "青春禁忌游戏",
                "year": "2023",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "剧情",
                "category": "日韩精选",
                "tags": [
                        "悬疑",
                        "师生",
                        "反转",
                        "道德困境"
                ],
                "url": "movie-108.html",
                "cover": "108.jpg"
        },
        {
                "title": "合约男女国语",
                "year": "2017",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 喜剧 / 都市",
                "category": "日韩精选",
                "tags": [
                        "合约恋爱",
                        "误会",
                        "都市白领",
                        "搭档",
                        "轻喜剧",
                        "国语"
                ],
                "url": "movie-109.html",
                "cover": "109.jpg"
        },
        {
                "title": "非常小特务2",
                "year": "2002",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 动作 / 科幻 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "儿童特工",
                        "奇幻发明",
                        "合家欢"
                ],
                "url": "movie-110.html",
                "cover": "110.jpg"
        },
        {
                "title": "漫长美好的星期五",
                "year": "2025",
                "region": "爱尔兰 / 英国",
                "type": "电影",
                "genre": "剧情 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "家庭",
                        "爱尔兰",
                        "节日",
                        "和解",
                        "黑色幽默"
                ],
                "url": "movie-111.html",
                "cover": "111.jpg"
        },
        {
                "title": "法兰西万岁",
                "year": "2022",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧, 历史, 讽刺",
                "category": "高分片单",
                "tags": [
                        "恶搞",
                        "民族主义",
                        "荒诞",
                        "政治",
                        "幽默"
                ],
                "url": "movie-112.html",
                "cover": "112.jpg"
        },
        {
                "title": "九年之约",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情，奇幻，剧情",
                "category": "爱情家庭",
                "tags": [
                        "时间穿越",
                        "约定",
                        "悬疑爱恋",
                        "宿命"
                ],
                "url": "movie-113.html",
                "cover": "113.jpg"
        },
        {
                "title": "脑残粉丝",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚， 剧情",
                "category": "动作冒险",
                "tags": [
                        "粉丝",
                        "偶像",
                        "绑架",
                        "心理战"
                ],
                "url": "movie-114.html",
                "cover": "114.jpg"
        },
        {
                "title": "滴血凶宅",
                "year": "2024",
                "region": "香港",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "凶宅",
                        "凶杀案",
                        "冤魂",
                        "港式恐怖"
                ],
                "url": "movie-115.html",
                "cover": "115.jpg"
        },
        {
                "title": "诚实的锁",
                "year": "2026",
                "region": "英国",
                "type": "电影",
                "genre": "悬疑/剧情/犯罪",
                "category": "爱情家庭",
                "tags": [
                        "密室",
                        "人性实验",
                        "道德困境",
                        "反转",
                        "伦理"
                ],
                "url": "movie-116.html",
                "cover": "116.jpg"
        },
        {
                "title": "先生贵性粤语",
                "year": "2025",
                "region": "中国香港",
                "type": "剧集",
                "genre": "喜剧、奇幻、职场",
                "category": "高分片单",
                "tags": [
                        "性转",
                        "粤语喜剧",
                        "办公室政治",
                        "灵魂互换",
                        "职场逆袭"
                ],
                "url": "movie-117.html",
                "cover": "117.jpg"
        },
        {
                "title": "白雪皑皑",
                "year": "2022",
                "region": "挪威",
                "type": "电影",
                "genre": "犯罪, 惊悚",
                "category": "高分片单",
                "tags": [
                        "极夜",
                        "连环杀人",
                        "末日生存"
                ],
                "url": "movie-118.html",
                "cover": "118.jpg"
        },
        {
                "title": "纳斯卡：全速狂飙",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "运动 / 剧情 / 动作",
                "category": "华语佳作",
                "tags": [
                        "赛车",
                        "NASCAR",
                        "竞争",
                        "兄弟情",
                        "极速"
                ],
                "url": "movie-119.html",
                "cover": "119.jpg"
        },
        {
                "title": "浪客剑心 最终章",
                "year": "2021",
                "region": "日本",
                "type": "电影",
                "genre": "动作 / 历史",
                "category": "亚洲经典",
                "tags": [
                        "漫改",
                        "武士",
                        "维新",
                        "十字伤"
                ],
                "url": "movie-120.html",
                "cover": "120.jpg"
        },
        {
                "title": "重量三角战",
                "year": "2020",
                "region": "马来西亚",
                "type": "电影",
                "genre": "运动，剧情",
                "category": "动作冒险",
                "tags": [
                        "举重",
                        "父子",
                        "多元种族"
                ],
                "url": "movie-121.html",
                "cover": "121.jpg"
        },
        {
                "title": "神啊来救救我吧",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情 / 奇幻 / 黑色喜剧",
                "category": "纪录综艺",
                "tags": [
                        "神明失效",
                        "社畜逆袭",
                        "都市奇谭"
                ],
                "url": "movie-122.html",
                "cover": "122.jpg"
        },
        {
                "title": "少女与战车",
                "year": "2012",
                "region": "日本",
                "type": "动画",
                "genre": "竞技 / 校园",
                "category": "动作冒险",
                "tags": [
                        "战车道",
                        "废校危机",
                        "少女",
                        "战术"
                ],
                "url": "movie-123.html",
                "cover": "123.jpg"
        },
        {
                "title": "泰版放羊的星星国语",
                "year": "2024",
                "region": "泰国",
                "type": "剧集",
                "genre": "爱情 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "翻拍",
                        "替身",
                        "豪门",
                        "虐恋"
                ],
                "url": "movie-124.html",
                "cover": "124.jpg"
        },
        {
                "title": "恐怖发作",
                "year": "2025",
                "region": "印尼",
                "type": "电影",
                "genre": "恐怖",
                "category": "日韩精选",
                "tags": [
                        "身体恐怖",
                        "巫术",
                        "降头",
                        "高能反转"
                ],
                "url": "movie-125.html",
                "cover": "125.jpg"
        },
        {
                "title": "写不出的情话",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 剧情 / 青春",
                "category": "华语佳作",
                "tags": [
                        "代笔",
                        "文艺",
                        "暗恋",
                        "书信",
                        "遗憾"
                ],
                "url": "movie-126.html",
                "cover": "126.jpg"
        },
        {
                "title": "你不是她粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "爱情, 奇幻",
                "category": "日韩精选",
                "tags": [
                        "身体置换",
                        "灵魂伴侣",
                        "身份认同",
                        "粤语原声"
                ],
                "url": "movie-127.html",
                "cover": "127.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 超危险特工2：狠战 安达鲁西亚 女神的报复 青春珊瑚礁 降世神通第三季 刺客联盟 非越自由梦 阿波罗18号 恶搞之家第七季 傲剑春秋国语 小孩 对于艾玛和永远 上帝也疯狂 理发师奶起革命 鼹鼠之歌 白石山下一家人 倾听我的声音 天外战笳声 欢迎光临娃娃屋 真相与正义 加冕",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "爱情家庭",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-128.html",
                "cover": "128.jpg"
        },
        {
                "title": "柔道群英会",
                "year": "2022",
                "region": "日本",
                "type": "剧集",
                "genre": "运动 / 青春 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "社团活动",
                        "热血竞技",
                        "校园生活",
                        "师徒传承",
                        "反欺凌"
                ],
                "url": "movie-129.html",
                "cover": "129.jpg"
        },
        {
                "title": "十三妹粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 武侠 / 古装",
                "category": "日韩精选",
                "tags": [
                        "女侠",
                        "复仇",
                        "清朝",
                        "功夫",
                        "江湖"
                ],
                "url": "movie-130.html",
                "cover": "130.jpg"
        },
        {
                "title": "爱犬情缘",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭, 治愈",
                "category": "日韩精选",
                "tags": [
                        "狗狗",
                        "自闭症",
                        "陪伴",
                        "治愈",
                        "乡村"
                ],
                "url": "movie-131.html",
                "cover": "131.jpg"
        },
        {
                "title": "英雄无名",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 战争 / 传记",
                "category": "华语佳作",
                "tags": [
                        "特工",
                        "潜伏",
                        "无声牺牲",
                        "历史解密"
                ],
                "url": "movie-132.html",
                "cover": "132.jpg"
        },
        {
                "title": "甜蜜蜜2007",
                "year": "2007",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "回归十年",
                        "移民",
                        "邓丽君"
                ],
                "url": "movie-133.html",
                "cover": "133.jpg"
        },
        {
                "title": "阿奇最终计划",
                "year": "2025",
                "region": "英国",
                "type": "电视剧",
                "genre": "剧情 / 悬疑 / 科幻",
                "category": "喜剧治愈",
                "tags": [
                        "人工智能",
                        "遗产",
                        "家族阴谋",
                        "慢热",
                        "英伦"
                ],
                "url": "movie-134.html",
                "cover": "134.jpg"
        },
        {
                "title": "湖上女郎",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "湖尸案",
                        "双胞胎",
                        "身份互换",
                        "小镇悬疑",
                        "反转"
                ],
                "url": "movie-135.html",
                "cover": "135.jpg"
        },
        {
                "title": "曼尼",
                "year": "2006",
                "region": "美国",
                "type": "公路剧情电影",
                "genre": "剧情、公路、成长",
                "category": "爱情家庭",
                "tags": [
                        "收音机修复",
                        "移民少年",
                        "证词传播",
                        "公路追逐",
                        "成长选择"
                ],
                "url": "movie-136.html",
                "cover": "136.jpg"
        },
        {
                "title": "食人晚宴",
                "year": "2023",
                "region": "意大利",
                "type": "电影",
                "genre": "恐怖, 惊悚, 悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "吸血鬼",
                        "贵族",
                        "社交",
                        "阶级"
                ],
                "url": "movie-137.html",
                "cover": "137.jpg"
        },
        {
                "title": "小毕的故事",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 家庭 / 传记",
                "category": "欧美热播",
                "tags": [
                        "童年",
                        "眷村",
                        "成长",
                        "旁白"
                ],
                "url": "movie-138.html",
                "cover": "138.jpg"
        },
        {
                "title": "柔道煞星",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "动作 / 科幻",
                "category": "高分片单",
                "tags": [
                        "柔道",
                        "反乌托邦",
                        "机甲"
                ],
                "url": "movie-139.html",
                "cover": "139.jpg"
        },
        {
                "title": "最卑贱的人",
                "year": "2026",
                "region": "德国",
                "type": "电影",
                "genre": "剧情, 心理, 惊悚",
                "category": "欧美热播",
                "tags": [
                        "阶层",
                        "羞辱",
                        "复仇",
                        "社会实验"
                ],
                "url": "movie-140.html",
                "cover": "140.jpg"
        },
        {
                "title": "异世界悠闲农家",
                "year": "2024",
                "region": "日本",
                "type": "剧集 / 动画",
                "genre": "奇幻 / 日常 / 治愈",
                "category": "欧美热播",
                "tags": [
                        "种田流",
                        "异世界",
                        "慢生活"
                ],
                "url": "movie-141.html",
                "cover": "141.jpg"
        },
        {
                "title": "魔女的考验",
                "year": "2024",
                "region": "日本",
                "type": "剧集 (10集)",
                "genre": "奇幻 / 悬疑 / 少女",
                "category": "华语佳作",
                "tags": [
                        "魔法学校",
                        "背叛与友情",
                        "暗黑童话",
                        "双女主",
                        "反转"
                ],
                "url": "movie-142.html",
                "cover": "142.jpg"
        },
        {
                "title": "登山家",
                "year": "2025",
                "region": "尼泊尔 / 英国",
                "type": "纪录片",
                "genre": "冒险 / 传记",
                "category": "悬疑惊悚",
                "tags": [
                        "珠峰",
                        "无氧登顶",
                        "极限人生"
                ],
                "url": "movie-143.html",
                "cover": "143.jpg"
        },
        {
                "title": "红外线",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "赛博格",
                        "追杀",
                        "视觉奇观",
                        "反乌托邦"
                ],
                "url": "movie-144.html",
                "cover": "144.jpg"
        },
        {
                "title": "水生花",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情，奇幻",
                "category": "纪录综艺",
                "tags": [
                        "轮回",
                        "替身",
                        "画师",
                        "古风",
                        "虐恋"
                ],
                "url": "movie-145.html",
                "cover": "145.jpg"
        },
        {
                "title": "曼达洛人第三季",
                "year": "2023",
                "region": "美国",
                "type": "电视剧",
                "genre": "科幻 / 动作 / 冒险",
                "category": "亚洲经典",
                "tags": [
                        "星际游侠",
                        "父子羁绊",
                        "重建文明",
                        "赏金任务",
                        "外星政治"
                ],
                "url": "movie-146.html",
                "cover": "146.jpg"
        },
        {
                "title": "再见人生",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "爱情家庭",
                "tags": [
                        "临终关怀",
                        "亲情",
                        "生命教育"
                ],
                "url": "movie-147.html",
                "cover": "147.jpg"
        },
        {
                "title": "今天也无异样",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情, 喜剧, 日常",
                "category": "亚洲经典",
                "tags": [
                        "职场",
                        "废柴",
                        "幽默哲学",
                        "治愈"
                ],
                "url": "movie-148.html",
                "cover": "148.jpg"
        },
        {
                "title": "灼眼的夏娜第二季",
                "year": "2024",
                "region": "日本",
                "type": "动漫",
                "genre": "奇幻/战斗",
                "category": "高分片单",
                "tags": [
                        "重制版",
                        "炎发灼眼",
                        "存在之力",
                        "恋爱",
                        "悠二黑化"
                ],
                "url": "movie-149.html",
                "cover": "149.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 他们在末日前一天爆炸 雷动的山丘 明天、我会成为谁的女友 苏联潜艇大闹美国 枪口 旋风管家第二季 死亡大乐透 彻夜之歌 战玄武 阳光下的罪恶 快乐大本营2019 福尔摩斯在华盛顿 鄂尔多斯骑士 爆蛋晶英 赛车生涯 我的功夫老爸 网事情缘 邪恶森林 九月鹰飞国语 小狮王守护队：狮王再起",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "纪录综艺",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-150.html",
                "cover": "150.jpg"
        },
        {
                "title": "失踪的女儿",
                "year": "2026",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑 / 惊悚 / 家庭",
                "category": "动作冒险",
                "tags": [
                        "平行时空",
                        "母亲视角",
                        "小镇秘密",
                        "时间循环",
                        "社会派推理"
                ],
                "url": "movie-151.html",
                "cover": "1.jpg"
        },
        {
                "title": "吻着我，杀了我",
                "year": "2027",
                "region": "美国 / 英国",
                "type": "电影",
                "genre": "爱情，惊悚，悬疑",
                "category": "日韩精选",
                "tags": [
                        "致命爱人",
                        "反转",
                        "PUA",
                        "精神控制"
                ],
                "url": "movie-152.html",
                "cover": "2.jpg"
        },
        {
                "title": "讲话没有在听",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情，家庭，黑色幽默",
                "category": "动作冒险",
                "tags": [
                        "孤魂野鬼",
                        "家庭琐事",
                        "游荡",
                        "未竟之事"
                ],
                "url": "movie-153.html",
                "cover": "3.jpg"
        },
        {
                "title": "看见天堂",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情/奇幻",
                "category": "高分片单",
                "tags": [
                        "盲人",
                        "通感",
                        "治愈",
                        "写实主义",
                        "温情"
                ],
                "url": "movie-154.html",
                "cover": "4.jpg"
        },
        {
                "title": "百万巨鳄",
                "year": "2012",
                "region": "中国大陆",
                "type": "电影",
                "genre": "惊悚 / 冒险 / 灾难",
                "category": "高分片单",
                "tags": [
                        "人工湖",
                        "生态失控",
                        "巨兽追捕",
                        "旅游开发",
                        "黑心资本",
                        "生存逃亡"
                ],
                "url": "movie-155.html",
                "cover": "5.jpg"
        },
        {
                "title": "侦防危机",
                "year": "2026",
                "region": "中国香港",
                "type": "剧集",
                "genre": "警匪, 动作",
                "category": "动作冒险",
                "tags": [
                        "卧底",
                        "情报战",
                        "双雄",
                        "反转"
                ],
                "url": "movie-156.html",
                "cover": "6.jpg"
        },
        {
                "title": "特工小萌妻",
                "year": "2022",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情 / 喜剧 / 动作",
                "category": "喜剧治愈",
                "tags": [
                        "先婚后爱",
                        "反差萌",
                        "女强男弱",
                        "甜宠"
                ],
                "url": "movie-157.html",
                "cover": "7.jpg"
        },
        {
                "title": "丑继妹",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "华语佳作",
                "tags": [
                        "家庭伦理",
                        "女性成长",
                        "身份认同",
                        "反转"
                ],
                "url": "movie-158.html",
                "cover": "8.jpg"
        },
        {
                "title": "夜樱四重奏 星之海",
                "year": "2014",
                "region": "日本",
                "type": "动画电影",
                "genre": "奇幻 / 青春 / 冒险",
                "category": "亚洲经典",
                "tags": [
                        "妖怪共存",
                        "夏夜祭典",
                        "友情羁绊",
                        "星海传说",
                        "城镇守护"
                ],
                "url": "movie-159.html",
                "cover": "9.jpg"
        },
        {
                "title": "贫嘴小8之东丽湖恋曲",
                "year": "2012",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "喜剧, 爱情",
                "category": "动作冒险",
                "tags": [
                        "天津",
                        "贫嘴",
                        "大龄女青年",
                        "相亲",
                        "湖畔"
                ],
                "url": "movie-160.html",
                "cover": "10.jpg"
        },
        {
                "title": "宝藏猎人久美子",
                "year": "2014",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 冒险",
                "category": "华语佳作",
                "tags": [
                        "孤独",
                        "执念",
                        "寓言"
                ],
                "url": "movie-161.html",
                "cover": "11.jpg"
        },
        {
                "title": "终极蜘蛛侠第四季",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "动画 / 动作 / 超级英雄",
                "category": "日韩精选",
                "tags": [
                        "蜘蛛宇宙",
                        "平行变异",
                        "中年彼得",
                        "传承"
                ],
                "url": "movie-162.html",
                "cover": "12.jpg"
        },
        {
                "title": "仙君有劫",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装、仙侠、爱情",
                "category": "爱情家庭",
                "tags": [
                        "仙界",
                        "渡劫",
                        "虐恋",
                        "逆天改命"
                ],
                "url": "movie-163.html",
                "cover": "13.jpg"
        },
        {
                "title": "家宴",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "爱情家庭",
                "tags": [
                        "餐桌",
                        "方言",
                        "原生家庭",
                        "修罗场"
                ],
                "url": "movie-164.html",
                "cover": "14.jpg"
        },
        {
                "title": "献祭游戏",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "华语佳作",
                "tags": [
                        "都市传说",
                        "密室",
                        "人性实验",
                        "反转"
                ],
                "url": "movie-165.html",
                "cover": "15.jpg"
        },
        {
                "title": "独白人生",
                "year": "2020",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 文艺 / 人物",
                "category": "喜剧治愈",
                "tags": [
                        "内心独白",
                        "舞台人生",
                        "记忆拼贴",
                        "老年孤独",
                        "自我和解"
                ],
                "url": "movie-166.html",
                "cover": "16.jpg"
        },
        {
                "title": "漫长的告别2019",
                "year": "2019",
                "region": "中国",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "阿尔茨海默症",
                        "父女关系",
                        "日常生活",
                        "缓慢叙事",
                        "上海"
                ],
                "url": "movie-167.html",
                "cover": "17.jpg"
        },
        {
                "title": "衰鬼线人",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 犯罪 / 动作",
                "category": "动作冒险",
                "tags": [
                        "港式无厘头",
                        "警匪卧底",
                        "衰神附体",
                        "乌龙破案"
                ],
                "url": "movie-168.html",
                "cover": "18.jpg"
        },
        {
                "title": "怒火特攻队",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "动作 / 战争 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "特种兵",
                        "边境贩毒",
                        "硬核枪战",
                        "兄弟情",
                        "真实事件改编"
                ],
                "url": "movie-169.html",
                "cover": "19.jpg"
        },
        {
                "title": "比尔墨瑞欢度圣诞",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "圣诞节",
                        "冷面笑匠",
                        "公路喜剧"
                ],
                "url": "movie-170.html",
                "cover": "20.jpg"
        },
        {
                "title": "至高指令",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "科幻 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "思维控制",
                        "反乌托邦",
                        "记忆修改",
                        "政治阴谋",
                        "烧脑"
                ],
                "url": "movie-171.html",
                "cover": "21.jpg"
        },
        {
                "title": "灵异疗养院",
                "year": "2024",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "泰国恐怖片",
                        "废弃疗养院",
                        "附身",
                        "邪教"
                ],
                "url": "movie-172.html",
                "cover": "22.jpg"
        },
        {
                "title": "三白眼诅咒",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚，悬疑，超自然",
                "category": "悬疑惊悚",
                "tags": [
                        "诅咒",
                        "视觉",
                        "反转",
                        "校园怪谈",
                        "血腥"
                ],
                "url": "movie-173.html",
                "cover": "23.jpg"
        },
        {
                "title": "放射治疗室第二季",
                "year": "2025",
                "region": "日本",
                "type": "电视剧",
                "genre": "剧情, 医疗",
                "category": "华语佳作",
                "tags": [
                        "放射科",
                        "技师的尊严",
                        "疑难杂症",
                        "团队合作",
                        "热血"
                ],
                "url": "movie-174.html",
                "cover": "24.jpg"
        },
        {
                "title": "化身情盗",
                "year": "2015",
                "region": "法国",
                "type": "电影",
                "genre": "爱情，悬疑，剧情",
                "category": "日韩精选",
                "tags": [
                        "法国浪漫",
                        "身份互换",
                        "高智商骗局",
                        "艺术品盗窃",
                        "复仇"
                ],
                "url": "movie-175.html",
                "cover": "25.jpg"
        },
        {
                "title": "小妖的金色城堡",
                "year": "2026",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "奇幻 / 冒险 / 青少年",
                "category": "亚洲经典",
                "tags": [
                        "治愈童话",
                        "想象力",
                        "成长"
                ],
                "url": "movie-176.html",
                "cover": "26.jpg"
        },
        {
                "title": "悲情城市",
                "year": "1989",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情，历史",
                "category": "爱情家庭",
                "tags": [
                        "侯孝贤",
                        "二二八",
                        "家族史诗",
                        "文艺",
                        "台湾历史"
                ],
                "url": "movie-177.html",
                "cover": "27.jpg"
        },
        {
                "title": "制作音效：电影声音的艺术",
                "year": "2024",
                "region": "美国",
                "type": "纪录片",
                "genre": "纪录片",
                "category": "日韩精选",
                "tags": [
                        "声音设计",
                        "幕后",
                        "电影工业",
                        "艺术",
                        "科普"
                ],
                "url": "movie-178.html",
                "cover": "28.jpg"
        },
        {
                "title": "神童",
                "year": "2023",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "天才",
                        "教育焦虑",
                        "家庭伦理",
                        "反转",
                        "社会批判"
                ],
                "url": "movie-179.html",
                "cover": "29.jpg"
        },
        {
                "title": "律政皇庭粤语",
                "year": "1996",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "律政, 剧情, 都会",
                "category": "亚洲经典",
                "tags": [
                        "法庭博弈",
                        "律师团",
                        "家族恩怨",
                        "廉政调查",
                        "港式职场"
                ],
                "url": "movie-180.html",
                "cover": "30.jpg"
        },
        {
                "title": "51号星球",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "科幻, 冒险, 动画",
                "category": "日韩精选",
                "tags": [
                        "外星殖民",
                        "生态共生",
                        "萌系怪物",
                        "反殖民主题"
                ],
                "url": "movie-181.html",
                "cover": "31.jpg"
        },
        {
                "title": "美人",
                "year": "2020",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 女性",
                "category": "悬疑惊悚",
                "tags": [
                        "女性",
                        "悬疑",
                        "容貌焦虑",
                        "社会批判",
                        "心理"
                ],
                "url": "movie-182.html",
                "cover": "32.jpg"
        },
        {
                "title": "钢琴师与她的女儿",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "家庭 / 剧情 / 音乐",
                "category": "华语佳作",
                "tags": [
                        "母女关系",
                        "舞台梦想",
                        "失聪设定",
                        "旧伤和解",
                        "练琴日常",
                        "城市记忆"
                ],
                "url": "movie-183.html",
                "cover": "33.jpg"
        },
        {
                "title": "莉迪亚",
                "year": "2024",
                "region": "西班牙",
                "type": "电影",
                "genre": "惊悚，剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "人偶",
                        "精神分裂",
                        "母女",
                        "西班牙悬疑",
                        "反转"
                ],
                "url": "movie-184.html",
                "cover": "34.jpg"
        },
        {
                "title": "新斩龙遇仙记",
                "year": "1988",
                "region": "中国香港",
                "type": "电影",
                "genre": "奇幻, 古装, 动作",
                "category": "纪录综艺",
                "tags": [
                        "神话",
                        "斩龙",
                        "修仙",
                        "民间传说"
                ],
                "url": "movie-185.html",
                "cover": "35.jpg"
        },
        {
                "title": "精灵床",
                "year": "2021",
                "region": "英国",
                "type": "电影",
                "genre": "家庭, 奇幻",
                "category": "高分片单",
                "tags": [
                        "治愈",
                        "儿童视角",
                        "魔法家具"
                ],
                "url": "movie-186.html",
                "cover": "36.jpg"
        },
        {
                "title": "四",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "爱情家庭",
                "tags": [
                        "拼图杀人",
                        "倒计时",
                        "银行职员",
                        "道德困境",
                        "一次性手机"
                ],
                "url": "movie-187.html",
                "cover": "37.jpg"
        },
        {
                "title": "废材三人组",
                "year": "2019",
                "region": "日本",
                "type": "电视剧",
                "genre": "喜剧 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "黑色幽默",
                        "失败者",
                        "劫案",
                        "荒诞"
                ],
                "url": "movie-188.html",
                "cover": "38.jpg"
        },
        {
                "title": "我的左手与右手",
                "year": "2010",
                "region": "中国大陆",
                "type": "电影",
                "genre": "家庭剧情 / 成长 / 温情",
                "category": "悬疑惊悚",
                "tags": [
                        "双线自白",
                        "失衡人生",
                        "亲情陪伴",
                        "身体缺陷",
                        "重新学习"
                ],
                "url": "movie-189.html",
                "cover": "39.jpg"
        },
        {
                "title": "地球殒落",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 灾难, 冒险",
                "category": "动作冒险",
                "tags": [
                        "戴森球",
                        "外星工程",
                        "地心危机",
                        "人类逃亡"
                ],
                "url": "movie-190.html",
                "cover": "40.jpg"
        },
        {
                "title": "缘来说再见",
                "year": "2014",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "欧美热播",
                "tags": [
                        "分手",
                        "仪式感",
                        "告别"
                ],
                "url": "movie-191.html",
                "cover": "41.jpg"
        },
        {
                "title": "完美音调3",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 音乐, 歌舞",
                "category": "纪录综艺",
                "tags": [
                        "阿卡贝拉",
                        "女子团体",
                        "出道战",
                        "流行金曲"
                ],
                "url": "movie-192.html",
                "cover": "42.jpg"
        },
        {
                "title": "冠军请指教",
                "year": "2023",
                "region": "中国大陆",
                "type": "综艺 / 真人秀",
                "genre": "运动 / 竞技 / 真人秀",
                "category": "欧美热播",
                "tags": [
                        "体育",
                        "跨界",
                        "挑战",
                        "励志"
                ],
                "url": "movie-193.html",
                "cover": "43.jpg"
        },
        {
                "title": "躲闪",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑、惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "心理博弈",
                        "时间循环",
                        "密室逃脱",
                        "极限生存"
                ],
                "url": "movie-194.html",
                "cover": "44.jpg"
        },
        {
                "title": "揪团玩到挂",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 恐怖",
                "category": "高分片单",
                "tags": [
                        "密室逃脱",
                        "黑色幽默",
                        "网红文化"
                ],
                "url": "movie-195.html",
                "cover": "45.jpg"
        },
        {
                "title": "帝国双璧",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "历史， 剧情， 权谋",
                "category": "爱情家庭",
                "tags": [
                        "双雄",
                        "朝堂",
                        "战争",
                        "兄弟情"
                ],
                "url": "movie-196.html",
                "cover": "46.jpg"
        },
        {
                "title": "我最好的朋友死了",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "友情",
                        "悬疑",
                        "悲伤",
                        "青春",
                        "救赎"
                ],
                "url": "movie-197.html",
                "cover": "47.jpg"
        },
        {
                "title": "勒克瑙之花",
                "year": "2025",
                "region": "印度",
                "type": "剧集",
                "genre": "爱情, 历史, 剧情",
                "category": "日韩精选",
                "tags": [
                        "印度",
                        "勒克瑙",
                        "艺伎",
                        "反抗英军",
                        "华丽服饰"
                ],
                "url": "movie-198.html",
                "cover": "48.jpg"
        },
        {
                "title": "哥哥的飞驰人生",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情， 家庭",
                "category": "欧美热播",
                "tags": [
                        "赛车",
                        "自闭症",
                        "兄弟情",
                        "励志"
                ],
                "url": "movie-199.html",
                "cover": "49.jpg"
        },
        {
                "title": "我生命中的女人",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "爱情、剧情",
                "category": "喜剧治愈",
                "tags": [
                        "阿尔茨海默症",
                        "回忆",
                        "爱情",
                        "法国电影",
                        "催泪"
                ],
                "url": "movie-200.html",
                "cover": "50.jpg"
        },
        {
                "title": "绕行美国",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "冒险 / 公路",
                "category": "欧美热播",
                "tags": [
                        "轮椅背包客",
                        "真实事件改编",
                        "治愈",
                        "小众路线"
                ],
                "url": "movie-201.html",
                "cover": "51.jpg"
        },
        {
                "title": "长颈鹿扎拉法",
                "year": "2023",
                "region": "法国 / 德国",
                "type": "电影",
                "genre": "动画 / 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "2D手绘",
                        "非洲",
                        "历史改编",
                        "治愈"
                ],
                "url": "movie-202.html",
                "cover": "52.jpg"
        },
        {
                "title": "漫步夏威夷",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧，家庭",
                "category": "喜剧治愈",
                "tags": [
                        "度假",
                        "乌龙",
                        "温情",
                        "美食"
                ],
                "url": "movie-203.html",
                "cover": "53.jpg"
        },
        {
                "title": "危险的相见礼2",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚 / 喜剧",
                "category": "高分片单",
                "tags": [
                        "见家长",
                        "连环误会",
                        "黑色喜剧"
                ],
                "url": "movie-204.html",
                "cover": "54.jpg"
        },
        {
                "title": "维京萨迦",
                "year": "2026",
                "region": "冰岛 / 挪威",
                "type": "剧集",
                "genre": "历史 / 动作 / 剧情",
                "category": "高分片单",
                "tags": [
                        "维京时代",
                        "北欧神话",
                        "家族恩怨",
                        "血腥暴力",
                        "史诗"
                ],
                "url": "movie-205.html",
                "cover": "55.jpg"
        },
        {
                "title": "学校怪谈3",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖、校园、奇幻",
                "category": "动作冒险",
                "tags": [
                        "校园怪谈",
                        "诅咒",
                        "旧校舍",
                        "都市传说",
                        "复仇"
                ],
                "url": "movie-206.html",
                "cover": "56.jpg"
        },
        {
                "title": "叛狱",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "动作 / 犯罪",
                "category": "爱情家庭",
                "tags": [
                        "监狱",
                        "以暴制暴",
                        "黑帮",
                        "反转"
                ],
                "url": "movie-207.html",
                "cover": "57.jpg"
        },
        {
                "title": "明星证人",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 律政",
                "category": "华语佳作",
                "tags": [
                        "顶流",
                        "目击者",
                        "密室杀人",
                        "粉丝",
                        "反转"
                ],
                "url": "movie-208.html",
                "cover": "58.jpg"
        },
        {
                "title": "十全九美之真爱无双",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 爱情 / 古装",
                "category": "亚洲经典",
                "tags": [
                        "无厘头",
                        "欢喜冤家",
                        "江湖",
                        "寻宝"
                ],
                "url": "movie-209.html",
                "cover": "59.jpg"
        },
        {
                "title": "摩斯探长第十一季",
                "year": "2019",
                "region": "英国",
                "type": "电视剧",
                "genre": "侦探 / 悬疑 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "牛津谜案",
                        "古典推理",
                        "旧案重启",
                        "学院阴影",
                        "双人搭档",
                        "时代质感"
                ],
                "url": "movie-210.html",
                "cover": "60.jpg"
        },
        {
                "title": "圣约之外：摩西的故事",
                "year": "2023",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情、历史、宗教、史诗",
                "category": "喜剧治愈",
                "tags": [
                        "圣经故事",
                        "史诗改编",
                        "政治权谋",
                        "摩西",
                        "人性视角"
                ],
                "url": "movie-211.html",
                "cover": "61.jpg"
        },
        {
                "title": "修业魔女璐璐萌 完结篇",
                "year": "2025",
                "region": "日本",
                "type": "电影 (动画)",
                "genre": "奇幻, 冒险",
                "category": "纪录综艺",
                "tags": [
                        "魔法",
                        "契约",
                        "告别",
                        "成长",
                        "催泪"
                ],
                "url": "movie-212.html",
                "cover": "62.jpg"
        },
        {
                "title": "旋风骑士",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "动作 / 犯罪 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "摩托车特技",
                        "底层复仇",
                        "爽片"
                ],
                "url": "movie-213.html",
                "cover": "63.jpg"
        },
        {
                "title": "火爆英雌",
                "year": "2022",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，警匪",
                "category": "动作冒险",
                "tags": [
                        "女警",
                        "反恐",
                        "母亲",
                        "硬核动作"
                ],
                "url": "movie-214.html",
                "cover": "64.jpg"
        },
        {
                "title": "在路上2024",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 公路",
                "category": "悬疑惊悚",
                "tags": [
                        "公路",
                        "父子",
                        "治愈",
                        "时代变迁"
                ],
                "url": "movie-215.html",
                "cover": "65.jpg"
        },
        {
                "title": "落雾大地",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑、犯罪、剧情",
                "category": "喜剧治愈",
                "tags": [
                        "边陲小镇",
                        "连环失踪",
                        "湿冷雾气",
                        "人性博弈",
                        "双线叙事"
                ],
                "url": "movie-216.html",
                "cover": "66.jpg"
        },
        {
                "title": "痴迷女杀手",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "惊悚 / 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "病娇",
                        "反转",
                        "女性视角",
                        "暗黑",
                        "悬疑"
                ],
                "url": "movie-217.html",
                "cover": "67.jpg"
        },
        {
                "title": "疯狂的钥匙",
                "year": "2024",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "喜剧、犯罪、冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "黑色幽默",
                        "多线叙事",
                        "钥匙",
                        "误打误撞"
                ],
                "url": "movie-218.html",
                "cover": "68.jpg"
        },
        {
                "title": "欣德·拉贾布之声",
                "year": "2025",
                "region": "埃及/法国",
                "type": "电影",
                "genre": "剧情、传记、音乐",
                "category": "欧美热播",
                "tags": [
                        "阿拉伯",
                        "女性歌唱",
                        "自由",
                        "抗争"
                ],
                "url": "movie-219.html",
                "cover": "69.jpg"
        },
        {
                "title": "聚焦国语",
                "year": "2023",
                "region": "中国香港, 中国大陆",
                "type": "剧集",
                "genre": "剧情, 职场, 悬疑",
                "category": "日韩精选",
                "tags": [
                        "新闻业",
                        "配音",
                        "真相",
                        "良心"
                ],
                "url": "movie-220.html",
                "cover": "70.jpg"
        },
        {
                "title": "灌篮高手 国语版",
                "year": "2023",
                "region": "日本",
                "type": "动漫",
                "genre": "运动, 热血, 校园",
                "category": "日韩精选",
                "tags": [
                        "篮球",
                        "青春",
                        "情怀",
                        "配音",
                        "全国大赛"
                ],
                "url": "movie-221.html",
                "cover": "71.jpg"
        },
        {
                "title": "蛇机四伏",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络电影",
                "genre": "悬疑，惊悚，犯罪",
                "category": "欧美热播",
                "tags": [
                        "密室",
                        "杀戮",
                        "复仇",
                        "反转"
                ],
                "url": "movie-222.html",
                "cover": "72.jpg"
        },
        {
                "title": "双重追击",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 犯罪 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "双雄",
                        "黑白两道",
                        "猫鼠游戏",
                        "阴谋",
                        "高速追逃"
                ],
                "url": "movie-223.html",
                "cover": "73.jpg"
        },
        {
                "title": "攞命怪医",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪 / 动作 / 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "黑帮",
                        "人格分裂",
                        "医生",
                        "暴力美学"
                ],
                "url": "movie-224.html",
                "cover": "74.jpg"
        },
        {
                "title": "沃特斯塔克",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 音乐, 历史",
                "category": "高分片单",
                "tags": [
                        "音乐节传奇",
                        "1969年",
                        "理想主义",
                        "纪实风格"
                ],
                "url": "movie-225.html",
                "cover": "75.jpg"
        },
        {
                "title": "逼走",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪, 悬疑, 心理",
                "category": "日韩精选",
                "tags": [
                        "职场无间道",
                        "心理暗示",
                        "完美替罪羊",
                        "摩天大楼密室"
                ],
                "url": "movie-226.html",
                "cover": "76.jpg"
        },
        {
                "title": "高空惊魂",
                "year": "2022",
                "region": "法国",
                "type": "电影",
                "genre": "动作，惊悚，冒险",
                "category": "纪录综艺",
                "tags": [
                        "极限运动",
                        "恐高症",
                        "废弃塔吊",
                        "封闭空间"
                ],
                "url": "movie-227.html",
                "cover": "77.jpg"
        },
        {
                "title": "了不起的麦瑟尔夫人第四季",
                "year": "2022",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 喜剧",
                "category": "动作冒险",
                "tags": [
                        "脱口秀",
                        "女性成长",
                        "复古",
                        "励志",
                        "幽默"
                ],
                "url": "movie-228.html",
                "cover": "78.jpg"
        },
        {
                "title": "通往星星的地铁",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻, 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "星际",
                        "地铁",
                        "唯美"
                ],
                "url": "movie-229.html",
                "cover": "79.jpg"
        },
        {
                "title": "心理追凶第三季",
                "year": "2020",
                "region": "英国",
                "type": "剧集",
                "genre": "犯罪 / 心理",
                "category": "纪录综艺",
                "tags": [
                        "侧写师",
                        "连环案",
                        "季终大反转"
                ],
                "url": "movie-230.html",
                "cover": "80.jpg"
        },
        {
                "title": "聚焦人生",
                "year": "2024",
                "region": "德国",
                "type": "电影",
                "genre": "传记，剧情",
                "category": "动作冒险",
                "tags": [
                        "摄影",
                        "纳粹",
                        "反思",
                        "救赎",
                        "老年"
                ],
                "url": "movie-231.html",
                "cover": "81.jpg"
        },
        {
                "title": "无耻之徒第四季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情, 喜剧",
                "category": "纪录综艺",
                "tags": [
                        "底层家庭",
                        "芝加哥",
                        "酒精",
                        "生存法则"
                ],
                "url": "movie-232.html",
                "cover": "82.jpg"
        },
        {
                "title": "请把生命交给我",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "医疗, 职业, 剧情",
                "category": "高分片单",
                "tags": [
                        "急诊室",
                        "新手医生",
                        "生死抉择"
                ],
                "url": "movie-233.html",
                "cover": "83.jpg"
        },
        {
                "title": "他不是我",
                "year": "2029",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑科幻",
                "category": "华语佳作",
                "tags": [
                        "复制人",
                        "身份盗窃",
                        "家庭伦理",
                        "反转"
                ],
                "url": "movie-234.html",
                "cover": "84.jpg"
        },
        {
                "title": "霸气女销售",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "喜剧 / 职场",
                "category": "亚洲经典",
                "tags": [
                        "销售技巧",
                        "反内卷",
                        "逆袭",
                        "嘴炮王者"
                ],
                "url": "movie-235.html",
                "cover": "85.jpg"
        },
        {
                "title": "信仰的扭曲",
                "year": "2024",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑, 惊悚, 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "邪教",
                        "洗脑",
                        "卧底",
                        "真实事件改编",
                        "心理战"
                ],
                "url": "movie-236.html",
                "cover": "86.jpg"
        },
        {
                "title": "弗里斯基",
                "year": "2026",
                "region": "俄罗斯",
                "type": "剧集",
                "genre": "悬疑、犯罪、黑色幽默",
                "category": "喜剧治愈",
                "tags": [
                        "圣彼得堡",
                        "假币",
                        "黑帮",
                        "冒牌艺术家"
                ],
                "url": "movie-237.html",
                "cover": "87.jpg"
        },
        {
                "title": "吸血鬼日记第二季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "奇幻, 爱情, 恐怖",
                "category": "爱情家庭",
                "tags": [
                        "吸血鬼",
                        "狼人",
                        "女巫",
                        "多角恋"
                ],
                "url": "movie-238.html",
                "cover": "88.jpg"
        },
        {
                "title": "人事3组的胶囊咖啡",
                "year": "2025",
                "region": "中国大陆",
                "type": "悬疑剧",
                "genre": "科幻,悬疑,职场,惊悚,黑色幽默",
                "category": "高分片单",
                "tags": [
                        "办公楼密室",
                        "企业阴谋",
                        "记忆缺口",
                        "数据篡改",
                        "时间线"
                ],
                "url": "movie-239.html",
                "cover": "89.jpg"
        },
        {
                "title": "云之彼端，约定的地方",
                "year": "2004",
                "region": "日本",
                "type": "电影",
                "genre": "科幻 / 爱情 / 动画",
                "category": "悬疑惊悚",
                "tags": [
                        "平行世界",
                        "少年约定",
                        "新海诚",
                        "巨塔"
                ],
                "url": "movie-240.html",
                "cover": "90.jpg"
        },
        {
                "title": "五月十二月",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 惊悚",
                "category": "日韩精选",
                "tags": [
                        "心理战",
                        "年龄差",
                        "表演",
                        "真实案件改编"
                ],
                "url": "movie-241.html",
                "cover": "91.jpg"
        },
        {
                "title": "最危险游戏第二季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "动作， 惊悚， 悬疑",
                "category": "动作冒险",
                "tags": [
                        "猎杀游戏",
                        "生存",
                        "反转",
                        "高科技",
                        "道德困境"
                ],
                "url": "movie-242.html",
                "cover": "92.jpg"
        },
        {
                "title": "束手就擒吧！韩队长！",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "喜剧 / 动作 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "反套路",
                        "卧底",
                        "沙雕",
                        "甜宠"
                ],
                "url": "movie-243.html",
                "cover": "93.jpg"
        },
        {
                "title": "同中有异",
                "year": "2025",
                "region": "香港",
                "type": "剧集",
                "genre": "悬疑 / 科幻",
                "category": "爱情家庭",
                "tags": [
                        "平行宇宙",
                        "身份认同",
                        "烧脑",
                        "家庭"
                ],
                "url": "movie-244.html",
                "cover": "94.jpg"
        },
        {
                "title": "迪斯可战争",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 喜剧, 历史",
                "category": "动作冒险",
                "tags": [
                        "真实事件改编",
                        "音乐战争",
                        "青年亚文化",
                        "摇滚vs迪斯科"
                ],
                "url": "movie-245.html",
                "cover": "95.jpg"
        },
        {
                "title": "新职位",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 职场, 黑色幽默",
                "category": "华语佳作",
                "tags": [
                        "裁员",
                        "内卷",
                        "讽刺"
                ],
                "url": "movie-246.html",
                "cover": "96.jpg"
        },
        {
                "title": "暴火危墙",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作, 灾难",
                "category": "欧美热播",
                "tags": [
                        "消防",
                        "兄弟情",
                        "爆破"
                ],
                "url": "movie-247.html",
                "cover": "97.jpg"
        },
        {
                "title": "七十二家房客第七部粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "喜剧 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "市井生活",
                        "粤语",
                        "邻里温情",
                        "怀旧"
                ],
                "url": "movie-248.html",
                "cover": "98.jpg"
        },
        {
                "title": "电影情人梦",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "戏中戏",
                        "暗恋",
                        "致敬经典"
                ],
                "url": "movie-249.html",
                "cover": "99.jpg"
        },
        {
                "title": "猛鬼游乐园",
                "year": "2008",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖 / 喜剧 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "闹鬼园区",
                        "过山车",
                        "旧案复燃",
                        "群像困局",
                        "港式鬼片",
                        "黑色幽默"
                ],
                "url": "movie-250.html",
                "cover": "100.jpg"
        },
        {
                "title": "少年歌行血染天启篇",
                "year": "2026",
                "region": "中国大陆",
                "type": "动漫",
                "genre": "武侠/热血",
                "category": "日韩精选",
                "tags": [
                        "国风",
                        "少年",
                        "复仇",
                        "高燃打斗"
                ],
                "url": "movie-251.html",
                "cover": "101.jpg"
        },
        {
                "title": "那山那人那狗",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 温情",
                "category": "日韩精选",
                "tags": [
                        "父子",
                        "乡村邮递员",
                        "传承",
                        "山路",
                        "狗"
                ],
                "url": "movie-252.html",
                "cover": "102.jpg"
        },
        {
                "title": "截路拦杀",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "犯罪, 悬疑, 动作",
                "category": "高分片单",
                "tags": [
                        "公路追杀",
                        "复仇",
                        "密闭空间",
                        "反转"
                ],
                "url": "movie-253.html",
                "cover": "103.jpg"
        },
        {
                "title": "非洲之王",
                "year": "2022",
                "region": "法国 / 塞内加尔",
                "type": "电影",
                "genre": "剧情 / 运动 / 历史",
                "category": "纪录综艺",
                "tags": [
                        "殖民地足球",
                        "对抗法国",
                        "1960年代",
                        "黑人身份认同",
                        "逆袭夺冠"
                ],
                "url": "movie-254.html",
                "cover": "104.jpg"
        },
        {
                "title": "绿草如阴",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "乡村怪谈",
                        "植物异变",
                        "心理恐惧",
                        "封闭社区"
                ],
                "url": "movie-255.html",
                "cover": "105.jpg"
        },
        {
                "title": "好歌有约",
                "year": "2025",
                "region": "中国大陆",
                "type": "综艺 / 电影",
                "genre": "音乐, 剧情, 治愈",
                "category": "纪录综艺",
                "tags": [
                        "失忆老人",
                        "点唱机音乐剧",
                        "怀旧金曲",
                        "寻亲"
                ],
                "url": "movie-256.html",
                "cover": "106.jpg"
        },
        {
                "title": "古堡情欲",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "情色, 剧情, 历史",
                "category": "华语佳作",
                "tags": [
                        "中世纪",
                        "权力游戏",
                        "禁忌之恋",
                        "城堡秘事"
                ],
                "url": "movie-257.html",
                "cover": "107.jpg"
        },
        {
                "title": "春满乾坤褔满门",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧, 家庭, 贺岁",
                "category": "爱情家庭",
                "tags": [
                        "春节",
                        "团圆",
                        "笑泪齐飞",
                        "群星"
                ],
                "url": "movie-258.html",
                "cover": "108.jpg"
        },
        {
                "title": "终极旅程",
                "year": "2026",
                "region": "英国",
                "type": "电影",
                "genre": "科幻, 冒险, 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "太空",
                        "伦理",
                        "AI",
                        "人性"
                ],
                "url": "movie-259.html",
                "cover": "109.jpg"
        },
        {
                "title": "德国零年",
                "year": "1948",
                "region": "德国/意大利",
                "type": "电影",
                "genre": "剧情/战争/历史",
                "category": "纪录综艺",
                "tags": [
                        "新现实主义",
                        "废墟美学",
                        "儿童视角"
                ],
                "url": "movie-260.html",
                "cover": "110.jpg"
        },
        {
                "title": "101次抢婚",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "喜剧、爱情、都市",
                "category": "华语佳作",
                "tags": [
                        "逃婚",
                        "先婚后爱",
                        "契约",
                        "乌龙"
                ],
                "url": "movie-261.html",
                "cover": "111.jpg"
        },
        {
                "title": "集体的喝采声",
                "year": "2015",
                "region": "中国大陆",
                "type": "剧情电影",
                "genre": "音乐, 社会现实, 励志",
                "category": "欧美热播",
                "tags": [
                        "合唱团",
                        "小城文化",
                        "失业群体",
                        "舞台重生"
                ],
                "url": "movie-262.html",
                "cover": "112.jpg"
        },
        {
                "title": "长春",
                "year": "2025",
                "region": "中国",
                "type": "电影",
                "genre": "剧情，历史，家庭",
                "category": "动作冒险",
                "tags": [
                        "东北",
                        "时代变迁",
                        "父子",
                        "下岗潮",
                        "文艺"
                ],
                "url": "movie-263.html",
                "cover": "113.jpg"
        },
        {
                "title": "黑色钻石2025",
                "year": "2025",
                "region": "瑞典 / 挪威",
                "type": "电影",
                "genre": "惊悚 / 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "深海",
                        "石油钻井",
                        "变异生物",
                        "生存"
                ],
                "url": "movie-264.html",
                "cover": "114.jpg"
        },
        {
                "title": "摩斯拉3 王者基多拉来袭",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "科幻, 动作",
                "category": "日韩精选",
                "tags": [
                        "哥斯拉",
                        "摩斯拉",
                        "基多拉",
                        "怪兽宇宙"
                ],
                "url": "movie-265.html",
                "cover": "115.jpg"
        },
        {
                "title": "恶虎城",
                "year": "2025",
                "region": "中国香港 / 泰国",
                "type": "电影",
                "genre": "动作，犯罪",
                "category": "亚洲经典",
                "tags": [
                        "泰拳",
                        "硬核动作",
                        "黑帮复仇",
                        "唐人街",
                        "困兽之斗"
                ],
                "url": "movie-266.html",
                "cover": "116.jpg"
        },
        {
                "title": "美国女人",
                "year": "2025",
                "region": "美国, 英国",
                "type": "电影",
                "genre": "剧情, 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "女性",
                        "悬疑",
                        "间谍",
                        "身份认同",
                        "冷战背景"
                ],
                "url": "movie-267.html",
                "cover": "117.jpg"
        },
        {
                "title": "大嘴巴",
                "year": "2017",
                "region": "美国",
                "type": "电视剧",
                "genre": "动画 / 喜剧 / 青春 / 成长",
                "category": "动作冒险",
                "tags": [
                        "青春发育",
                        "荒诞想象",
                        "友情裂变",
                        "家庭沟通",
                        "身体焦虑",
                        "直面尴尬"
                ],
                "url": "movie-268.html",
                "cover": "118.jpg"
        },
        {
                "title": "巴布狄伦：迷途之家",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "传记, 音乐",
                "category": "纪录综艺",
                "tags": [
                        "民谣摇滚",
                        "漂泊童年",
                        "创作起源"
                ],
                "url": "movie-269.html",
                "cover": "119.jpg"
        },
        {
                "title": "意外",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "逻辑迷题",
                        "高智商",
                        "反杀",
                        "密闭空间"
                ],
                "url": "movie-270.html",
                "cover": "120.jpg"
        },
        {
                "title": "现在请开播",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "职场， 喜剧",
                "category": "华语佳作",
                "tags": [
                        "直播带货",
                        "电商",
                        "创业"
                ],
                "url": "movie-271.html",
                "cover": "121.jpg"
        },
        {
                "title": "双截龙",
                "year": "2029",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 犯罪, 兄弟情",
                "category": "动作冒险",
                "tags": [
                        "双胞胎",
                        "黑帮",
                        "替身",
                        "格斗"
                ],
                "url": "movie-272.html",
                "cover": "122.jpg"
        },
        {
                "title": "新活死人之夜",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "欧美热播",
                "tags": [
                        "丧尸",
                        "末日",
                        "生存",
                        "反转"
                ],
                "url": "movie-273.html",
                "cover": "123.jpg"
        },
        {
                "title": "彼得·潘的梦幻岛噩梦",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "暗黑童话",
                        "童年阴影",
                        "颠覆经典"
                ],
                "url": "movie-274.html",
                "cover": "124.jpg"
        },
        {
                "title": "布莱德·彼特之即刻毁灭",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 喜剧 / 讽刺",
                "category": "日韩精选",
                "tags": [
                        "布莱德·彼特",
                        "自黑",
                        "好莱坞",
                        "替身",
                        "末世恶搞"
                ],
                "url": "movie-275.html",
                "cover": "125.jpg"
        },
        {
                "title": "决战芝加哥",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 犯罪 / 惊悚",
                "category": "欧美热播",
                "tags": [
                        "黑帮",
                        "卧底",
                        "飙车",
                        "硬核枪战"
                ],
                "url": "movie-276.html",
                "cover": "126.jpg"
        },
        {
                "title": "六号病房",
                "year": "2022",
                "region": "中国大陆",
                "type": "电影",
                "genre": "惊悚, 悬疑, 医疗",
                "category": "日韩精选",
                "tags": [
                        "封闭病区",
                        "病历谜团",
                        "夜巡",
                        "失踪患者",
                        "真假身份"
                ],
                "url": "movie-277.html",
                "cover": "127.jpg"
        },
        {
                "title": "纸盒藏尸之公审",
                "year": "1993",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "真实改编",
                        "陪审团",
                        "冤案疑云"
                ],
                "url": "movie-278.html",
                "cover": "128.jpg"
        },
        {
                "title": "令总有恙",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情 / 喜剧 / 奇幻",
                "category": "爱情家庭",
                "tags": [
                        "霸总",
                        "身份错位",
                        "契约婚姻"
                ],
                "url": "movie-279.html",
                "cover": "129.jpg"
        },
        {
                "title": "阿卡丁先生",
                "year": "2026",
                "region": "英国",
                "type": "电影",
                "genre": "悬疑，心理惊悚",
                "category": "华语佳作",
                "tags": [
                        "记忆删除",
                        "身份迷失",
                        "伦敦",
                        "黑色电影"
                ],
                "url": "movie-280.html",
                "cover": "130.jpg"
        },
        {
                "title": "国酒",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "年代 / 商战",
                "category": "日韩精选",
                "tags": [
                        "茅台",
                        "匠心",
                        "历史变迁"
                ],
                "url": "movie-281.html",
                "cover": "131.jpg"
        },
        {
                "title": "七宗罪孽的救赎",
                "year": "2022",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 惊悚, 宗教",
                "category": "纪录综艺",
                "tags": [
                        "七宗罪",
                        "连环杀手",
                        "神父",
                        "赎罪",
                        "心理战"
                ],
                "url": "movie-282.html",
                "cover": "132.jpg"
        },
        {
                "title": "一夜2019",
                "year": "2019",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "一夜情",
                        "记忆谜局",
                        "非线性叙事"
                ],
                "url": "movie-283.html",
                "cover": "133.jpg"
        },
        {
                "title": "牛子厚与富连成",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "传记 / 历史 / 戏曲",
                "category": "欧美热播",
                "tags": [
                        "京剧史",
                        "富连成社",
                        "民国传奇",
                        "师徒传承"
                ],
                "url": "movie-284.html",
                "cover": "134.jpg"
        },
        {
                "title": "冤途路改",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "警匪 / 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "卧底",
                        "身份错位",
                        "兄弟反目",
                        "公路追逐"
                ],
                "url": "movie-285.html",
                "cover": "135.jpg"
        },
        {
                "title": "黑色止血钳",
                "year": "2024",
                "region": "日本",
                "type": "电视剧",
                "genre": "医疗, 悬疑",
                "category": "华语佳作",
                "tags": [
                        "外科",
                        "天才怪医",
                        "器械阴谋",
                        "高智商"
                ],
                "url": "movie-286.html",
                "cover": "136.jpg"
        },
        {
                "title": "男盗女差",
                "year": "2023",
                "region": "中国香港",
                "type": "剧集",
                "genre": "喜剧, 爱情, 动作",
                "category": "喜剧治愈",
                "tags": [
                        "骗子",
                        "警察",
                        "双雄",
                        "卧底"
                ],
                "url": "movie-287.html",
                "cover": "137.jpg"
        },
        {
                "title": "法官大人",
                "year": "2022",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪、剧情、惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "法官",
                        "以权谋私",
                        "父子情深",
                        "道德困境",
                        "黑帮复仇"
                ],
                "url": "movie-288.html",
                "cover": "138.jpg"
        },
        {
                "title": "萝蕾莱",
                "year": "2021",
                "region": "德国",
                "type": "电影",
                "genre": "奇幻，剧情，历史",
                "category": "喜剧治愈",
                "tags": [
                        "莱茵河",
                        "传说",
                        "二战",
                        "女性觉醒"
                ],
                "url": "movie-289.html",
                "cover": "139.jpg"
        },
        {
                "title": "宝岛妖后",
                "year": "2025",
                "region": "中国台湾",
                "type": "电视剧",
                "genre": "历史 / 奇幻 / 爱情",
                "category": "悬疑惊悚",
                "tags": [
                        "神话",
                        "权力",
                        "女性"
                ],
                "url": "movie-290.html",
                "cover": "140.jpg"
        },
        {
                "title": "长忆无痕",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情, 文艺, 悬疑",
                "category": "动作冒险",
                "tags": [
                        "失忆",
                        "初恋",
                        "江南",
                        "虐心"
                ],
                "url": "movie-291.html",
                "cover": "141.jpg"
        },
        {
                "title": "幻梦山海谣",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "动画 / 奇幻 / 冒险",
                "category": "爱情家庭",
                "tags": [
                        "国风",
                        "山海经",
                        "异世界",
                        "少女",
                        "神话重构"
                ],
                "url": "movie-292.html",
                "cover": "142.jpg"
        },
        {
                "title": "闯入者2014",
                "year": "2014",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 悬疑, 惊悚",
                "category": "高分片单",
                "tags": [
                        "空巢老人",
                        "历史伤痕",
                        "文革",
                        "复仇",
                        "电话骚扰"
                ],
                "url": "movie-293.html",
                "cover": "143.jpg"
        },
        {
                "title": "我的爱情撞上了战争",
                "year": "2017",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "战争, 爱情",
                "category": "纪录综艺",
                "tags": [
                        "民国",
                        "战地医生",
                        "抗日",
                        "虐恋"
                ],
                "url": "movie-294.html",
                "cover": "144.jpg"
        },
        {
                "title": "大澳的天空粤语",
                "year": "2025",
                "region": "香港",
                "type": "剧集",
                "genre": "剧情, 家庭, 社会",
                "category": "日韩精选",
                "tags": [
                        "渔村",
                        "本土文化",
                        "粤语原声",
                        "亲情"
                ],
                "url": "movie-295.html",
                "cover": "145.jpg"
        },
        {
                "title": "摩斯拉决战哥斯拉",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "科幻, 怪兽, 动作",
                "category": "纪录综艺",
                "tags": [
                        "特摄",
                        "史诗",
                        "生态保护",
                        "宿敌"
                ],
                "url": "movie-296.html",
                "cover": "146.jpg"
        },
        {
                "title": "流氓高校生",
                "year": "1996",
                "region": "日本",
                "type": "青春片",
                "genre": "校园 / 喜剧 / 成长",
                "category": "日韩精选",
                "tags": [
                        "不良少年",
                        "校园联盟",
                        "乐队比赛",
                        "热血同盟",
                        "友情修复",
                        "叛逆青春"
                ],
                "url": "movie-297.html",
                "cover": "147.jpg"
        },
        {
                "title": "樱桃红之袖珍妈妈",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "家庭伦理",
                "category": "高分片单",
                "tags": [
                        "温情",
                        "社会边缘人群",
                        "母性光辉"
                ],
                "url": "movie-298.html",
                "cover": "148.jpg"
        },
        {
                "title": "拯救林肯",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 动作 / 历史改编",
                "category": "亚洲经典",
                "tags": [
                        "时空穿越",
                        "暗杀阴谋",
                        "蒸汽朋克",
                        "救赎"
                ],
                "url": "movie-299.html",
                "cover": "149.jpg"
        },
        {
                "title": "降妖罗汉",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作, 奇幻",
                "category": "华语佳作",
                "tags": [
                        "降妖",
                        "罗汉",
                        "宿命",
                        "正邪对决"
                ],
                "url": "movie-300.html",
                "cover": "150.jpg"
        },
        {
                "title": "通往赛马场的路",
                "year": "2025",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "剧情 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "赛马",
                        "黑帮",
                        "父子",
                        "时代变迁"
                ],
                "url": "movie-301.html",
                "cover": "1.jpg"
        },
        {
                "title": "暴力之音",
                "year": "2025",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "恐怖 / 音乐 / 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "声波杀人",
                        "音乐会",
                        "诅咒乐谱",
                        "身体恐怖"
                ],
                "url": "movie-302.html",
                "cover": "2.jpg"
        },
        {
                "title": "牛之晚春",
                "year": "2028",
                "region": "日本",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "动作冒险",
                "tags": [
                        "农村",
                        "父子",
                        "耕牛",
                        "现代化",
                        "告别"
                ],
                "url": "movie-303.html",
                "cover": "3.jpg"
        },
        {
                "title": "极地先锋",
                "year": "2023",
                "region": "挪威",
                "type": "电影",
                "genre": "冒险, 传记",
                "category": "纪录综艺",
                "tags": [
                        "极地探险",
                        "真实事件",
                        "生存",
                        "雪橇"
                ],
                "url": "movie-304.html",
                "cover": "4.jpg"
        },
        {
                "title": "桃太郎 海的神兵",
                "year": "2024",
                "region": "日本",
                "type": "动画电影",
                "genre": "战争 / 历史 / 动画",
                "category": "亚洲经典",
                "tags": [
                        "反战",
                        "二战",
                        "神话解构",
                        "手绘"
                ],
                "url": "movie-305.html",
                "cover": "5.jpg"
        },
        {
                "title": "维拉塔之书",
                "year": "2022",
                "region": "西班牙 / 墨西哥",
                "type": "电影",
                "genre": "奇幻 / 恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "魔法书",
                        "诅咒",
                        "民俗恐怖",
                        "反转"
                ],
                "url": "movie-306.html",
                "cover": "6.jpg"
        },
        {
                "title": "霸王贵妃",
                "year": "1993",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 爱情, 古装",
                "category": "亚洲经典",
                "tags": [
                        "京剧",
                        "江湖",
                        "替身"
                ],
                "url": "movie-307.html",
                "cover": "7.jpg"
        },
        {
                "title": "终极快递",
                "year": "2028",
                "region": "法国 / 德国",
                "type": "电影",
                "genre": "动作 / 喜剧 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "极限运动 跨国追杀 神秘包裹 速度感"
                ],
                "url": "movie-308.html",
                "cover": "8.jpg"
        },
        {
                "title": "爱的着陆 第一季",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "民航",
                        "职场爱情",
                        "成长",
                        "励志"
                ],
                "url": "movie-309.html",
                "cover": "9.jpg"
        },
        {
                "title": "童军教练",
                "year": "2015",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 家庭 / 冒险",
                "category": "华语佳作",
                "tags": [
                        "失败者逆袭",
                        "童军露营",
                        "搞笑训练"
                ],
                "url": "movie-310.html",
                "cover": "10.jpg"
        },
        {
                "title": "小舍得",
                "year": "2022",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "家庭 / 都市情感 / 教育现实",
                "category": "高分片单",
                "tags": [
                        "升学焦虑",
                        "亲子沟通",
                        "家庭重组",
                        "边界感",
                        "现实议题"
                ],
                "url": "movie-311.html",
                "cover": "11.jpg"
        },
        {
                "title": "鬼吹灯之龙岭神宫",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "冒险 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "盗墓",
                        "奇幻",
                        "惊悚",
                        "摸金",
                        "机关"
                ],
                "url": "movie-312.html",
                "cover": "12.jpg"
        },
        {
                "title": "灵界替身",
                "year": "2024",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "泰式恐怖",
                        "巫术",
                        "替死鬼",
                        "校园怪谈"
                ],
                "url": "movie-313.html",
                "cover": "13.jpg"
        },
        {
                "title": "鬼玩人第二季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "恐怖/喜剧/奇幻",
                "category": "高分片单",
                "tags": [
                        "重启",
                        "黑色幽默",
                        "恶灵",
                        "电锯断手",
                        "时间循环"
                ],
                "url": "movie-314.html",
                "cover": "14.jpg"
        },
        {
                "title": "女高怪谈4：声音",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖、悬疑、校园",
                "category": "亚洲经典",
                "tags": [
                        "都市传说",
                        "声控恐怖",
                        "灵魂寄生",
                        "百合惊悚"
                ],
                "url": "movie-315.html",
                "cover": "15.jpg"
        },
        {
                "title": "恶行之外国语",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "犯罪 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "黑色电影",
                        "语言暴力",
                        "翻译陷阱",
                        "复仇"
                ],
                "url": "movie-316.html",
                "cover": "16.jpg"
        },
        {
                "title": "棉花软糖",
                "year": "2025",
                "region": "日本",
                "type": "动画电影",
                "genre": "奇幻, 治愈",
                "category": "欧美热播",
                "tags": [
                        "萌系",
                        "治愈",
                        "美食",
                        "奇幻生物"
                ],
                "url": "movie-317.html",
                "cover": "17.jpg"
        },
        {
                "title": "最佳烂片",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 黑色幽默 / 讽刺",
                "category": "欧美热播",
                "tags": [
                        "烂片自救",
                        "片场闹剧",
                        "资本审美",
                        "元电影",
                        "行业讽刺"
                ],
                "url": "movie-318.html",
                "cover": "18.jpg"
        },
        {
                "title": "别怕！茱莉",
                "year": "1988",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧, 恐怖",
                "category": "华语佳作",
                "tags": [
                        "鬼屋",
                        "少女",
                        "搞笑",
                        "风水"
                ],
                "url": "movie-319.html",
                "cover": "19.jpg"
        },
        {
                "title": "苏东坡",
                "year": "2026",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装, 传记, 历史",
                "category": "爱情家庭",
                "tags": [
                        "文人",
                        "诗词",
                        "仕途",
                        "美食"
                ],
                "url": "movie-320.html",
                "cover": "20.jpg"
        },
        {
                "title": "阿蒂卡监狱事件",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "历史 / 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "真实事件",
                        "监狱",
                        "暴动",
                        "平权"
                ],
                "url": "movie-321.html",
                "cover": "21.jpg"
        },
        {
                "title": "师生大战",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 动作",
                "category": "日韩精选",
                "tags": [
                        "校园",
                        "逆袭",
                        "格斗",
                        "幽默"
                ],
                "url": "movie-322.html",
                "cover": "22.jpg"
        },
        {
                "title": "生之乐章",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，家庭，音乐",
                "category": "欧美热播",
                "tags": [
                        "癌症",
                        "指挥家",
                        "和解",
                        "遗愿"
                ],
                "url": "movie-323.html",
                "cover": "23.jpg"
        },
        {
                "title": "孤岛终结",
                "year": "2017",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻， 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "人工智能",
                        "末日求生",
                        "道德困境",
                        "反转结局"
                ],
                "url": "movie-324.html",
                "cover": "24.jpg"
        },
        {
                "title": "吸血鬼家族2023",
                "year": "2023",
                "region": "英国",
                "type": "剧集",
                "genre": "喜剧 / 恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "伪纪录片",
                        "中年危机",
                        "永生烦恼"
                ],
                "url": "movie-325.html",
                "cover": "25.jpg"
        },
        {
                "title": "美国出口",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情，政治，惊悚",
                "category": "日韩精选",
                "tags": [
                        "贸易战",
                        "阴谋",
                        "全球化",
                        "卧底",
                        "商战"
                ],
                "url": "movie-326.html",
                "cover": "26.jpg"
        },
        {
                "title": "神奇的词",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "奇幻 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "语言魔法",
                        "情感修复",
                        "童真"
                ],
                "url": "movie-327.html",
                "cover": "27.jpg"
        },
        {
                "title": "三少爷的剑",
                "year": "2016",
                "region": "中国大陆 / 中国香港",
                "type": "电影",
                "genre": "武侠 / 动作",
                "category": "日韩精选",
                "tags": [
                        "古龙",
                        "剑神",
                        "江湖恩怨"
                ],
                "url": "movie-328.html",
                "cover": "28.jpg"
        },
        {
                "title": "镀金时代第一季",
                "year": "2022",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情 / 历史",
                "category": "动作冒险",
                "tags": [
                        "贵族",
                        "纽约",
                        "19世纪",
                        "豪门争斗"
                ],
                "url": "movie-329.html",
                "cover": "29.jpg"
        },
        {
                "title": "我的秘密之花",
                "year": "1995",
                "region": "西班牙",
                "type": "电影",
                "genre": "剧情",
                "category": "高分片单",
                "tags": [
                        "婚姻困境",
                        "女性写作",
                        "阿尔莫多瓦",
                        "心理挣扎"
                ],
                "url": "movie-330.html",
                "cover": "30.jpg"
        },
        {
                "title": "迷局伏香",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "悬疑, 犯罪",
                "category": "动作冒险",
                "tags": [
                        "嗅觉",
                        "连环杀手",
                        "香水",
                        "港产片",
                        "心理犯罪"
                ],
                "url": "movie-331.html",
                "cover": "31.jpg"
        },
        {
                "title": "诈片高手",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪 / 喜剧 / 动作",
                "category": "动作冒险",
                "tags": [
                        "老千",
                        "港式骗术",
                        "江湖恩怨",
                        "幽默反转",
                        "群星飙戏"
                ],
                "url": "movie-332.html",
                "cover": "32.jpg"
        },
        {
                "title": "云雾女孩",
                "year": "2022",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 文艺",
                "category": "悬疑惊悚",
                "tags": [
                        "山城迷雾",
                        "身份错位",
                        "女性成长",
                        "记忆追寻",
                        "诗意叙事"
                ],
                "url": "movie-333.html",
                "cover": "33.jpg"
        },
        {
                "title": "真爱有够杀",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 喜剧, 爱情",
                "category": "亚洲经典",
                "tags": [
                        "杀手",
                        "假戏真做",
                        "黑色幽默",
                        "追车"
                ],
                "url": "movie-334.html",
                "cover": "34.jpg"
        },
        {
                "title": "约瑟夫的礼物",
                "year": "2025",
                "region": "德国 / 波兰",
                "type": "电影",
                "genre": "战争 / 历史",
                "category": "欧美热播",
                "tags": [
                        "二战",
                        "奥斯维辛",
                        "小提琴"
                ],
                "url": "movie-335.html",
                "cover": "35.jpg"
        },
        {
                "title": "短暂的团聚",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "高分片单",
                "tags": [
                        "亲情",
                        "治愈",
                        "催泪",
                        "离别",
                        "现实主义"
                ],
                "url": "movie-336.html",
                "cover": "36.jpg"
        },
        {
                "title": "一个少女复仇的情色故事",
                "year": "1978",
                "region": "法国, 意大利",
                "type": "电影",
                "genre": "情色, 剧情, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "复仇",
                        "女性",
                        "悬疑"
                ],
                "url": "movie-337.html",
                "cover": "37.jpg"
        },
        {
                "title": "撒野",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情, 青春",
                "category": "华语佳作",
                "tags": [
                        "校园",
                        "互助",
                        "励志",
                        "情感"
                ],
                "url": "movie-338.html",
                "cover": "38.jpg"
        },
        {
                "title": "布基乌基",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "音乐、传记、历史",
                "category": "纪录综艺",
                "tags": [
                        "爵士乐",
                        "二战",
                        "女歌手",
                        "昭和时代"
                ],
                "url": "movie-339.html",
                "cover": "39.jpg"
        },
        {
                "title": "追捕聂鲁达",
                "year": "2019",
                "region": "智利",
                "type": "电影",
                "genre": "传记, 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "诗人",
                        "通缉",
                        "冷战",
                        "流亡",
                        "文学"
                ],
                "url": "movie-340.html",
                "cover": "40.jpg"
        },
        {
                "title": "基拉•基拉丽娜",
                "year": "2024",
                "region": "日本",
                "type": "动画剧集",
                "genre": "奇幻, 冒险, 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "星辰",
                        "许愿",
                        "少女",
                        "治愈",
                        "手绘风"
                ],
                "url": "movie-341.html",
                "cover": "41.jpg"
        },
        {
                "title": "分时度假",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "黑色喜剧 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "交换人生",
                        "限时破局",
                        "多层反转"
                ],
                "url": "movie-342.html",
                "cover": "42.jpg"
        },
        {
                "title": "鹰眼2021",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "动作、科幻、悬疑",
                "category": "高分片单",
                "tags": [
                        "AI反叛",
                        "高科技追杀",
                        "孤胆英雄",
                        "街头飙车",
                        "政治阴谋"
                ],
                "url": "movie-343.html",
                "cover": "43.jpg"
        },
        {
                "title": "恶魔的艺术",
                "year": "2024",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖 / 悬疑 / 民俗",
                "category": "悬疑惊悚",
                "tags": [
                        "民间巫术",
                        "复仇",
                        "诅咒",
                        "灵异调查"
                ],
                "url": "movie-344.html",
                "cover": "44.jpg"
        },
        {
                "title": "四朵花之家",
                "year": "2022",
                "region": "韩国",
                "type": "剧集",
                "genre": "家庭 / 喜剧 / 生活",
                "category": "高分片单",
                "tags": [
                        "四姐妹",
                        "老处女",
                        "催婚压力",
                        "姐妹情深",
                        "女性成长"
                ],
                "url": "movie-345.html",
                "cover": "45.jpg"
        },
        {
                "title": "憨豆先生卡通版第三季",
                "year": "2015",
                "region": "英国",
                "type": "电视剧",
                "genre": "动画 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "憨豆",
                        "无对白",
                        "卡通",
                        "英式幽默",
                        "默片风格"
                ],
                "url": "movie-346.html",
                "cover": "46.jpg"
        },
        {
                "title": "吸血鬼猎人巴菲第七季",
                "year": "2003",
                "region": "美国",
                "type": "剧集",
                "genre": "动作 / 奇幻 / 恐怖",
                "category": "动作冒险",
                "tags": [
                        "最终季",
                        "女性英雄",
                        "超自然",
                        "青春成长",
                        "史诗终章"
                ],
                "url": "movie-347.html",
                "cover": "47.jpg"
        },
        {
                "title": "星球大战:绝地归来",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 动作",
                "category": "高分片单",
                "tags": [
                        "宇宙史诗",
                        "原力",
                        "光剑战斗"
                ],
                "url": "movie-348.html",
                "cover": "48.jpg"
        },
        {
                "title": "上钩",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑，犯罪，剧情",
                "category": "高分片单",
                "tags": [
                        "钓鱼执法",
                        "诈骗集团",
                        "卧底",
                        "局中局"
                ],
                "url": "movie-349.html",
                "cover": "49.jpg"
        },
        {
                "title": "丛林圣诞节",
                "year": "2023",
                "region": "澳大利亚",
                "type": "电影",
                "genre": "冒险 / 喜剧 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "圣诞",
                        "荒岛",
                        "求生",
                        "动物",
                        "反套路"
                ],
                "url": "movie-350.html",
                "cover": "50.jpg"
        },
        {
                "title": "南宋诡事之鬼樊楼",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 古装, 惊悚",
                "category": "动作冒险",
                "tags": [
                        "南宋",
                        "探案",
                        "民俗恐怖",
                        "密室"
                ],
                "url": "movie-351.html",
                "cover": "51.jpg"
        },
        {
                "title": "脊骨",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 传记",
                "category": "动作冒险",
                "tags": [
                        "伤残",
                        "康复",
                        "尊严",
                        "真实改编"
                ],
                "url": "movie-352.html",
                "cover": "52.jpg"
        },
        {
                "title": "局中劫",
                "year": "2030",
                "region": "香港",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "密室",
                        "高智商",
                        "反转",
                        "金融犯罪"
                ],
                "url": "movie-353.html",
                "cover": "53.jpg"
        },
        {
                "title": "检察方的罪人",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "反转",
                        "人性拷问",
                        "法庭对决"
                ],
                "url": "movie-354.html",
                "cover": "54.jpg"
        },
        {
                "title": "布赖顿硬糖",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 犯罪, 悬疑",
                "category": "高分片单",
                "tags": [
                        "黑帮",
                        "复仇",
                        "海边小镇",
                        "心理博弈"
                ],
                "url": "movie-355.html",
                "cover": "55.jpg"
        },
        {
                "title": "黄飞鸿之铁血十三姨",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，武侠，科幻",
                "category": "亚洲经典",
                "tags": [
                        "蒸汽朋克",
                        "女侠",
                        "机械改造",
                        "家国情怀"
                ],
                "url": "movie-356.html",
                "cover": "56.jpg"
        },
        {
                "title": "天才也疯狂",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "喜剧，剧情",
                "category": "欧美热播",
                "tags": [
                        "自闭症",
                        "天才",
                        "治愈"
                ],
                "url": "movie-357.html",
                "cover": "57.jpg"
        },
        {
                "title": "诱饵",
                "year": "2023",
                "region": "韩国",
                "type": "电视剧",
                "genre": "犯罪/悬疑/反转",
                "category": "亚洲经典",
                "tags": [
                        "设局追凶",
                        "卧底行动",
                        "黑市交易",
                        "假证真相",
                        "人性博弈",
                        "高压节奏"
                ],
                "url": "movie-358.html",
                "cover": "58.jpg"
        },
        {
                "title": "探戈与金钱",
                "year": "2026",
                "region": "阿根廷 / 美国",
                "type": "电影",
                "genre": "犯罪 / 悬疑 / 歌舞",
                "category": "亚洲经典",
                "tags": [
                        "探戈",
                        "洗钱",
                        "舞蹈",
                        "金融犯罪"
                ],
                "url": "movie-359.html",
                "cover": "59.jpg"
        },
        {
                "title": "郑州妈妈",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "母爱",
                        "寻亲",
                        "社会写实",
                        "坚韧",
                        "温情"
                ],
                "url": "movie-360.html",
                "cover": "60.jpg"
        },
        {
                "title": "你是我的兄弟",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "犯罪, 悬疑",
                "category": "华语佳作",
                "tags": [
                        "双胞胎",
                        "顶罪",
                        "警察",
                        "卧底"
                ],
                "url": "movie-361.html",
                "cover": "61.jpg"
        },
        {
                "title": "梦裹情人",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情/奇幻",
                "category": "日韩精选",
                "tags": [
                        "梦境穿梭",
                        "平行时空",
                        "命中注定"
                ],
                "url": "movie-362.html",
                "cover": "62.jpg"
        },
        {
                "title": "3391公里",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情爱情",
                "category": "高分片单",
                "tags": [
                        "异地恋",
                        "骑行",
                        "火车",
                        "疫情时代"
                ],
                "url": "movie-363.html",
                "cover": "63.jpg"
        },
        {
                "title": "社交清算",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 悬疑",
                "category": "华语佳作",
                "tags": [
                        "网络暴力",
                        "复仇",
                        "直播",
                        "反转"
                ],
                "url": "movie-364.html",
                "cover": "64.jpg"
        },
        {
                "title": "情挑玉女心",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情, 喜剧, 情色",
                "category": "喜剧治愈",
                "tags": [
                        "性治疗师",
                        "保守",
                        "反转",
                        "港式幽默"
                ],
                "url": "movie-365.html",
                "cover": "65.jpg"
        },
        {
                "title": "哎哟哥哥",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "家庭 / 喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "兄妹",
                        "治愈",
                        "怀旧"
                ],
                "url": "movie-366.html",
                "cover": "66.jpg"
        },
        {
                "title": "突然之间降临的爱情",
                "year": "2023",
                "region": "台湾",
                "type": "电影",
                "genre": "爱情 / 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "治愈",
                        "时间循环",
                        "都市",
                        "轻松"
                ],
                "url": "movie-367.html",
                "cover": "67.jpg"
        },
        {
                "title": "幸福已逝",
                "year": "2007",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "日韩精选",
                "tags": [
                        "丧妻",
                        "父亲",
                        "超市",
                        "亲情",
                        "奥斯卡提名"
                ],
                "url": "movie-368.html",
                "cover": "68.jpg"
        },
        {
                "title": "凡赫辛",
                "year": "2004",
                "region": "美国",
                "type": "电影",
                "genre": "奇幻 / 动作 / 恐怖",
                "category": "爱情家庭",
                "tags": [
                        "吸血鬼",
                        "狼人",
                        "怪物宇宙"
                ],
                "url": "movie-369.html",
                "cover": "69.jpg"
        },
        {
                "title": "狼的时刻",
                "year": "1974",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖",
                "category": "纪录综艺",
                "tags": [
                        "心理惊悚",
                        "恐惧症",
                        "心理医生",
                        "超自然"
                ],
                "url": "movie-370.html",
                "cover": "70.jpg"
        },
        {
                "title": "播种者",
                "year": "2019",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "剧情 / 战争 / 人性",
                "category": "欧美热播",
                "tags": [
                        "一战",
                        "女性与孩子",
                        "荒诞任务",
                        "人性实验"
                ],
                "url": "movie-371.html",
                "cover": "71.jpg"
        },
        {
                "title": "我笨善良",
                "year": "2025",
                "region": "中国内地",
                "type": "电视剧",
                "genre": "剧情、生活",
                "category": "爱情家庭",
                "tags": [
                        "傻白甜",
                        "职场",
                        "反讽"
                ],
                "url": "movie-372.html",
                "cover": "72.jpg"
        },
        {
                "title": "313",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 科幻 / 犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "房间号",
                        "循环",
                        "酒店",
                        "时间陷阱"
                ],
                "url": "movie-373.html",
                "cover": "73.jpg"
        },
        {
                "title": "狄仁杰之夺命妖僧",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 悬疑 / 古装",
                "category": "爱情家庭",
                "tags": [
                        "狄仁杰",
                        "诡异",
                        "密室杀人",
                        "武打"
                ],
                "url": "movie-374.html",
                "cover": "74.jpg"
        },
        {
                "title": "山道弯弯",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 公路",
                "category": "华语佳作",
                "tags": [
                        "扶贫",
                        "乡村",
                        "代驾",
                        "和解"
                ],
                "url": "movie-375.html",
                "cover": "75.jpg"
        },
        {
                "title": "嫌疑犯",
                "year": "2013",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 悬疑, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "特工",
                        "冤案",
                        "追击",
                        "朝鲜"
                ],
                "url": "movie-376.html",
                "cover": "76.jpg"
        },
        {
                "title": "布鲁克林黑街",
                "year": "1989",
                "region": "美国",
                "type": "电影",
                "genre": "犯罪, 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "黑帮",
                        "意大利裔",
                        "家族",
                        "街头"
                ],
                "url": "movie-377.html",
                "cover": "77.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 惊曝内幕 大冬瓜粤语 太平轮 奇科·泽维尔 美女特工队 我们相信上帝 玉昭令第一季 闹春莲萧舞起来 惊情 迷幻传奇 96分钟 珍禽假意 圣诞天使 有时间 汽车总动员2015 传教士第三季 猎魔人：老鼠盗贼团 血肉至亲 电影人 霸权长存",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "日韩精选",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-378.html",
                "cover": "78.jpg"
        },
        {
                "title": "我属于你",
                "year": "2023",
                "region": "泰国",
                "type": "电影",
                "genre": "爱情，奇幻，悬疑",
                "category": "纪录综艺",
                "tags": [
                        "阴阳眼",
                        "契约爱情",
                        "前世今生",
                        "催泪"
                ],
                "url": "movie-379.html",
                "cover": "79.jpg"
        },
        {
                "title": "对的时间，对的人",
                "year": "2020",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "爱情 / 都市 / 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "时间",
                        "错位",
                        "命中注定",
                        "轻奇幻",
                        "双向奔赴"
                ],
                "url": "movie-380.html",
                "cover": "80.jpg"
        },
        {
                "title": "咱们的工会主席",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 现实主义",
                "category": "纪录综艺",
                "tags": [
                        "职场",
                        "维权",
                        "小人物",
                        "黑色喜剧"
                ],
                "url": "movie-381.html",
                "cover": "81.jpg"
        },
        {
                "title": "真实电影",
                "year": "2025",
                "region": "美国 / 加拿大",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 科幻",
                "category": "爱情家庭",
                "tags": [
                        "虚拟现实",
                        "真实与谎言",
                        "记忆篡改",
                        "媒体伦理"
                ],
                "url": "movie-382.html",
                "cover": "82.jpg"
        },
        {
                "title": "群芳竞艳",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情, 女性, 年代",
                "category": "亚洲经典",
                "tags": [
                        "民国",
                        "戏曲",
                        "女性群像",
                        "梨园",
                        "抗争"
                ],
                "url": "movie-383.html",
                "cover": "83.jpg"
        },
        {
                "title": "水之年代",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "水中分娩",
                        "人类进化",
                        "环保寓言",
                        "文艺科幻"
                ],
                "url": "movie-384.html",
                "cover": "84.jpg"
        },
        {
                "title": "剑岳～点之记",
                "year": "2009",
                "region": "日本",
                "type": "电影",
                "genre": "历史、冒险、剧情",
                "category": "喜剧治愈",
                "tags": [
                        "登山",
                        "真实改编",
                        "测绘",
                        "武士精神"
                ],
                "url": "movie-385.html",
                "cover": "85.jpg"
        },
        {
                "title": "召唤摩登石头人",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧，奇幻，冒险",
                "category": "亚洲经典",
                "tags": [
                        "都市传说",
                        "街头涂鸦",
                        "环保",
                        "反差萌"
                ],
                "url": "movie-386.html",
                "cover": "86.jpg"
        },
        {
                "title": "农村人闯上海",
                "year": "2018",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "喜剧, 都市, 成长",
                "category": "爱情家庭",
                "tags": [
                        "上海方言",
                        "下岗返城",
                        "偶像反转",
                        "城市生存",
                        "家族生意",
                        "夜市奇谈"
                ],
                "url": "movie-387.html",
                "cover": "87.jpg"
        },
        {
                "title": "骑士情史",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "爱情冒险",
                "category": "欧美热播",
                "tags": [
                        "中世纪",
                        "假结婚",
                        "骑士精神",
                        "女性力量"
                ],
                "url": "movie-388.html",
                "cover": "88.jpg"
        },
        {
                "title": "佩德森同志",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情， 历史",
                "category": "动作冒险",
                "tags": [
                        "国际友人",
                        "抗战",
                        "纪实风格",
                        "人性"
                ],
                "url": "movie-389.html",
                "cover": "89.jpg"
        },
        {
                "title": "霍博肯山谷",
                "year": "2027",
                "region": "美国",
                "type": "剧集",
                "genre": "悬疑 / 科幻 / 恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "小镇谜团",
                        "时间循环",
                        "邪教",
                        "山谷",
                        "仪式"
                ],
                "url": "movie-390.html",
                "cover": "90.jpg"
        },
        {
                "title": "江湖客",
                "year": "2024",
                "region": "中国台湾",
                "type": "电视剧",
                "genre": "动作",
                "category": "日韩精选",
                "tags": [
                        "黑帮",
                        "角头",
                        "父子",
                        "背叛",
                        "江湖道义"
                ],
                "url": "movie-391.html",
                "cover": "91.jpg"
        },
        {
                "title": "维玛拉的圈套 情链第二季",
                "year": "2025",
                "region": "泰国",
                "type": "剧集",
                "genre": "剧情， 爱情， 悬疑",
                "category": "高分片单",
                "tags": [
                        "狗血",
                        "复仇",
                        "豪门",
                        "泰式反转"
                ],
                "url": "movie-392.html",
                "cover": "92.jpg"
        },
        {
                "title": "摩登齐人",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 爱情",
                "category": "华语佳作",
                "tags": [
                        "都市",
                        "多角恋",
                        "讽刺",
                        "港式幽默"
                ],
                "url": "movie-393.html",
                "cover": "93.jpg"
        },
        {
                "title": "方世玉与胡惠干",
                "year": "2025",
                "region": "香港",
                "type": "电影",
                "genre": "动作 / 武侠 / 历史",
                "category": "喜剧治愈",
                "tags": [
                        "少林十虎",
                        "清末",
                        "反清复明"
                ],
                "url": "movie-394.html",
                "cover": "94.jpg"
        },
        {
                "title": "浮生缘",
                "year": "2020",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "爱情, 古装, 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "重生",
                        "前世今生",
                        "宫斗",
                        "虐恋"
                ],
                "url": "movie-395.html",
                "cover": "95.jpg"
        },
        {
                "title": "长春花园",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 历史",
                "category": "日韩精选",
                "tags": [
                        "伪满时期",
                        "间谍",
                        "钢琴师",
                        "诗意"
                ],
                "url": "movie-396.html",
                "cover": "96.jpg"
        },
        {
                "title": "生人勿近之问米",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖惊悚",
                "category": "高分片单",
                "tags": [
                        "通灵",
                        "单元剧",
                        "反套路"
                ],
                "url": "movie-397.html",
                "cover": "97.jpg"
        },
        {
                "title": "爱笑麻瓜秀",
                "year": "2014",
                "region": "中国",
                "type": "综艺",
                "genre": "喜剧真人秀",
                "category": "华语佳作",
                "tags": [
                        "即兴喜剧",
                        "校园",
                        "短剧",
                        "青春"
                ],
                "url": "movie-398.html",
                "cover": "98.jpg"
        },
        {
                "title": "不死鸟",
                "year": "2014",
                "region": "德国",
                "type": "电影",
                "genre": "剧情, 历史",
                "category": "喜剧治愈",
                "tags": [
                        "二战",
                        "集中营",
                        "整容",
                        "身份"
                ],
                "url": "movie-399.html",
                "cover": "99.jpg"
        },
        {
                "title": "靓女也疯狂",
                "year": "2023",
                "region": "中国内地",
                "type": "电影",
                "genre": "喜剧, 动作",
                "category": "纪录综艺",
                "tags": [
                        "女汉子",
                        "豪门恩怨",
                        "假面人生",
                        "飙车",
                        "逆袭"
                ],
                "url": "movie-400.html",
                "cover": "100.jpg"
        },
        {
                "title": "摩斯拉",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "科幻, 冒险",
                "category": "纪录综艺",
                "tags": [
                        "怪兽",
                        "守护神",
                        "自然",
                        "重生"
                ],
                "url": "movie-401.html",
                "cover": "101.jpg"
        },
        {
                "title": "大闹戏船",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 动作",
                "category": "纪录综艺",
                "tags": [
                        "民国",
                        "戏曲",
                        "复仇",
                        "快节奏"
                ],
                "url": "movie-402.html",
                "cover": "102.jpg"
        },
        {
                "title": "魔鬼琴声帕格尼尼",
                "year": "2023",
                "region": "意大利",
                "type": "电影",
                "genre": "音乐, 传记, 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "帕格尼尼",
                        "小提琴",
                        "天赋与诅咒",
                        "音乐家"
                ],
                "url": "movie-403.html",
                "cover": "103.jpg"
        },
        {
                "title": "处女之誓",
                "year": "2017",
                "region": "法国",
                "type": "电影",
                "genre": "剧情, 历史",
                "category": "华语佳作",
                "tags": [
                        "中世纪",
                        "女性自主",
                        "修道院",
                        "宗教"
                ],
                "url": "movie-404.html",
                "cover": "104.jpg"
        },
        {
                "title": "夜行怪物",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖, 奇幻, 惊悚",
                "category": "动作冒险",
                "tags": [
                        "都市传说",
                        "诅咒",
                        "怪物",
                        "反转"
                ],
                "url": "movie-405.html",
                "cover": "105.jpg"
        },
        {
                "title": "川柳少女",
                "year": "2021",
                "region": "日本",
                "type": "剧集",
                "genre": "青春、治愈",
                "category": "华语佳作",
                "tags": [
                        "校园",
                        "文学少女",
                        "日本诗",
                        "社交障碍"
                ],
                "url": "movie-406.html",
                "cover": "106.jpg"
        },
        {
                "title": "吃蛋糕的人",
                "year": "2019",
                "region": "韩国",
                "type": "电影",
                "genre": "黑色喜剧",
                "category": "日韩精选",
                "tags": [
                        "美食欲望",
                        "中年危机",
                        "失控聚会",
                        "家庭隐情",
                        "荒诞反转"
                ],
                "url": "movie-407.html",
                "cover": "107.jpg"
        },
        {
                "title": "猛鬼村",
                "year": "2025",
                "region": "中国香港 / 马来西亚",
                "type": "电影",
                "genre": "恐怖 / 惊悚 / 民俗",
                "category": "悬疑惊悚",
                "tags": [
                        "南洋邪术",
                        "村落诅咒",
                        "连环死亡"
                ],
                "url": "movie-408.html",
                "cover": "108.jpg"
        },
        {
                "title": "023档案",
                "year": "2024",
                "region": "中国大陆",
                "type": "网剧",
                "genre": "悬疑/刑侦",
                "category": "爱情家庭",
                "tags": [
                        "悬疑",
                        "档案",
                        "连环杀人",
                        "90年代",
                        "刑侦"
                ],
                "url": "movie-409.html",
                "cover": "109.jpg"
        },
        {
                "title": "黑马",
                "year": "2020",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 体育, 励志",
                "category": "悬疑惊悚",
                "tags": [
                        "赛马",
                        "逆袭",
                        "真实改编",
                        "热血"
                ],
                "url": "movie-410.html",
                "cover": "110.jpg"
        },
        {
                "title": "绑架计划",
                "year": "2017",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧, 犯罪",
                "category": "亚洲经典",
                "tags": [
                        "黑色幽默",
                        "笨贼",
                        "反套路",
                        "乌龙",
                        "温情"
                ],
                "url": "movie-411.html",
                "cover": "111.jpg"
        },
        {
                "title": "勇敢的人",
                "year": "2007",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "复仇",
                        "城市暴力",
                        "司法正义",
                        "心理创伤"
                ],
                "url": "movie-412.html",
                "cover": "112.jpg"
        },
        {
                "title": "焦裕禄1990",
                "year": "1990",
                "region": "中国大陆",
                "type": "电影",
                "genre": "传记, 剧情",
                "category": "欧美热播",
                "tags": [
                        "经典",
                        "李雪健",
                        "主旋律",
                        "催泪"
                ],
                "url": "movie-413.html",
                "cover": "113.jpg"
        },
        {
                "title": "史酷比和外星侵略者",
                "year": "2025",
                "region": "美国",
                "type": "动画电影",
                "genre": "喜剧 / 动画 / 科幻",
                "category": "爱情家庭",
                "tags": [
                        "解谜",
                        "外星人",
                        "冒险",
                        "童年回忆"
                ],
                "url": "movie-414.html",
                "cover": "114.jpg"
        },
        {
                "title": "巴黎妇人",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 爱情",
                "category": "欧美热播",
                "tags": [
                        "单亲妈妈",
                        "高级定制",
                        "女性独立",
                        "时尚圈",
                        "黄昏恋"
                ],
                "url": "movie-415.html",
                "cover": "115.jpg"
        },
        {
                "title": "萨满男孩",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情 / 恐怖 / 民俗",
                "category": "高分片单",
                "tags": [
                        "萨满教",
                        "附身",
                        "校园",
                        "驱魔",
                        "青少年"
                ],
                "url": "movie-416.html",
                "cover": "116.jpg"
        },
        {
                "title": "亡命者",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "动作、犯罪、惊悚",
                "category": "纪录综艺",
                "tags": [
                        "飙车",
                        "黑吃黑",
                        "复仇爽片"
                ],
                "url": "movie-417.html",
                "cover": "117.jpg"
        },
        {
                "title": "孟买之梦",
                "year": "2010",
                "region": "印度",
                "type": "电影",
                "genre": "剧情，歌舞，社会",
                "category": "喜剧治愈",
                "tags": [
                        "贫民窟",
                        "宝莱坞",
                        "明星梦",
                        "阶级",
                        "感人"
                ],
                "url": "movie-418.html",
                "cover": "118.jpg"
        },
        {
                "title": "幸福的结局",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，惊悚，心理",
                "category": "动作冒险",
                "tags": [
                        "反乌托邦",
                        "安乐死",
                        "伦理",
                        "高概念"
                ],
                "url": "movie-419.html",
                "cover": "119.jpg"
        },
        {
                "title": "滚动的玻璃珠",
                "year": "2022",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情",
                "category": "欧美热播",
                "tags": [
                        "童年",
                        "友谊",
                        "成长",
                        "治愈",
                        "怀旧"
                ],
                "url": "movie-420.html",
                "cover": "120.jpg"
        },
        {
                "title": "1/2的魔法",
                "year": "2025",
                "region": "美国",
                "type": "电影 (动画)",
                "genre": "奇幻，冒险，家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "皮克斯风",
                        "兄弟",
                        "魔法",
                        "残疾",
                        "治愈"
                ],
                "url": "movie-421.html",
                "cover": "121.jpg"
        },
        {
                "title": "战北平",
                "year": "2029",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "历史、战争",
                "category": "欧美热播",
                "tags": [
                        "国共",
                        "和平解放",
                        "谍战",
                        "兄弟反目"
                ],
                "url": "movie-422.html",
                "cover": "122.jpg"
        },
        {
                "title": "“滚出来，凶手”之黄金案",
                "year": "1989",
                "region": "中国香港",
                "type": "电视剧（单元剧）",
                "genre": "悬疑 / 犯罪 / 古装",
                "category": "亚洲经典",
                "tags": [
                        "推理",
                        "香港",
                        "黄金",
                        "密室",
                        "斗智"
                ],
                "url": "movie-423.html",
                "cover": "123.jpg"
        },
        {
                "title": "韩礼帮办",
                "year": "1967",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧， 歌舞， 家庭",
                "category": "纪录综艺",
                "tags": [
                        "老好莱坞",
                        "保姆",
                        "音乐剧",
                        "奇幻",
                        "伦敦"
                ],
                "url": "movie-424.html",
                "cover": "124.jpg"
        },
        {
                "title": "大力士阿罗夏",
                "year": "2025",
                "region": "俄罗斯",
                "type": "动画电影",
                "genre": "奇幻、冒险、喜剧",
                "category": "爱情家庭",
                "tags": [
                        "英雄成长",
                        "斯拉夫神话",
                        "反套路",
                        "大力士",
                        "萌宠搭档"
                ],
                "url": "movie-425.html",
                "cover": "125.jpg"
        },
        {
                "title": "抓住圣诞老人",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 冒险 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "圣诞夜",
                        "追逐行动",
                        "雪橇失控",
                        "亲子修复",
                        "反转喜剧"
                ],
                "url": "movie-426.html",
                "cover": "126.jpg"
        },
        {
                "title": "是非",
                "year": "2023",
                "region": "中国大陆",
                "type": "法律剧情片",
                "genre": "剧情 / 法律 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "法庭攻防",
                        "舆论审判",
                        "证据反转",
                        "城市现实",
                        "道德困境"
                ],
                "url": "movie-427.html",
                "cover": "127.jpg"
        },
        {
                "title": "鬼女佣",
                "year": "2024",
                "region": "泰国",
                "type": "剧集",
                "genre": "恐怖，悬疑",
                "category": "纪录综艺",
                "tags": [
                        "鬼宅",
                        "阶级",
                        "复仇",
                        "轮回"
                ],
                "url": "movie-428.html",
                "cover": "128.jpg"
        },
        {
                "title": "西部杀阵",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作， 西部， 惊悚",
                "category": "高分片单",
                "tags": [
                        "枪战",
                        "复仇",
                        "荒漠",
                        "孤胆英雄"
                ],
                "url": "movie-429.html",
                "cover": "129.jpg"
        },
        {
                "title": "美女来了",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影 / 网络电影",
                "genre": "喜剧 / 爱情",
                "category": "高分片单",
                "tags": [
                        "整容",
                        "变脸",
                        "爆笑",
                        "都市",
                        "换身份"
                ],
                "url": "movie-430.html",
                "cover": "130.jpg"
        },
        {
                "title": "远离战争的时代",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 科幻 / 战争",
                "category": "欧美热播",
                "tags": [
                        "反战",
                        "未来社会",
                        "伦理",
                        "家庭"
                ],
                "url": "movie-431.html",
                "cover": "131.jpg"
        },
        {
                "title": "30岁的保健体育",
                "year": "2021",
                "region": "日本",
                "type": "TV剧",
                "genre": "喜剧, 爱情, 成人童话",
                "category": "华语佳作",
                "tags": [
                        "处男",
                        "处女",
                        "性教育",
                        "脑内小剧场"
                ],
                "url": "movie-432.html",
                "cover": "132.jpg"
        },
        {
                "title": "双人军团",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作，犯罪",
                "category": "动作冒险",
                "tags": [
                        "兄弟情",
                        "卧底",
                        "枪战",
                        "双雄"
                ],
                "url": "movie-433.html",
                "cover": "133.jpg"
        },
        {
                "title": "洛佩",
                "year": "2023",
                "region": "西班牙",
                "type": "电视剧",
                "genre": "剧情，传记",
                "category": "纪录综艺",
                "tags": [
                        "作家",
                        "爱情",
                        "背叛",
                        "创作"
                ],
                "url": "movie-434.html",
                "cover": "134.jpg"
        },
        {
                "title": "今生是第一次",
                "year": "2017",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情、喜剧",
                "category": "华语佳作",
                "tags": [
                        "契约婚姻",
                        "房奴",
                        "IT男",
                        "编剧梦",
                        "治愈"
                ],
                "url": "movie-435.html",
                "cover": "135.jpg"
        },
        {
                "title": "大宇宙",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻 / 喜剧 / 哲学",
                "category": "欧美热播",
                "tags": [
                        "多重宇宙",
                        "废柴英雄",
                        "存在主义",
                        "荒诞"
                ],
                "url": "movie-436.html",
                "cover": "136.jpg"
        },
        {
                "title": "异形魔怪4",
                "year": "2004",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 科幻 / 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "怪兽",
                        "沙漠",
                        "前传",
                        "血浆片"
                ],
                "url": "movie-437.html",
                "cover": "137.jpg"
        },
        {
                "title": "孤单的豌豆",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "自闭症",
                        "兄妹",
                        "孤独",
                        "治愈"
                ],
                "url": "movie-438.html",
                "cover": "138.jpg"
        },
        {
                "title": "神圣七日",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "宗教",
                        "时间循环",
                        "心理压迫"
                ],
                "url": "movie-439.html",
                "cover": "139.jpg"
        },
        {
                "title": "圣徒指南",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "传记 / 剧情 / 运动",
                "category": "华语佳作",
                "tags": [
                        "橄榄球",
                        "励志",
                        "信仰",
                        "奇迹",
                        "真实改编"
                ],
                "url": "movie-440.html",
                "cover": "140.jpg"
        },
        {
                "title": "哈文赫特",
                "year": "2020",
                "region": "英国",
                "type": "剧集",
                "genre": "恐怖, 科幻",
                "category": "华语佳作",
                "tags": [
                        "洛夫克拉夫特",
                        "小镇",
                        "邪教",
                        "时间循环"
                ],
                "url": "movie-441.html",
                "cover": "141.jpg"
        },
        {
                "title": "班级聚会",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑 / 剧情 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "同学会",
                        "全员恶人",
                        "复仇",
                        "密室推理"
                ],
                "url": "movie-442.html",
                "cover": "142.jpg"
        },
        {
                "title": "法兰克和辛迪",
                "year": "2015",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 爱情",
                "category": "动作冒险",
                "tags": [
                        "社交恐惧",
                        "音乐",
                        "文艺爱情",
                        "独立电影",
                        "小清新"
                ],
                "url": "movie-443.html",
                "cover": "143.jpg"
        },
        {
                "title": "劈腿女王",
                "year": "2023",
                "region": "韩国",
                "type": "电视剧",
                "genre": "爱情, 喜剧, 都市",
                "category": "喜剧治愈",
                "tags": [
                        "多角恋",
                        "女性主义",
                        "反转",
                        "爽剧"
                ],
                "url": "movie-444.html",
                "cover": "144.jpg"
        },
        {
                "title": "香蕉先生不睡觉",
                "year": "2024",
                "region": "中国大陆",
                "type": "网剧",
                "genre": "爱情 / 奇幻 / 喜剧",
                "category": "动作冒险",
                "tags": [
                        "失眠症",
                        "霸道总裁",
                        "姐弟恋",
                        "治愈系"
                ],
                "url": "movie-445.html",
                "cover": "145.jpg"
        },
        {
                "title": "有夫之妇",
                "year": "1987",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情, 爱情, 伦理",
                "category": "动作冒险",
                "tags": [
                        "禁忌恋",
                        "女性觉醒",
                        "婚姻困境",
                        "三角关系"
                ],
                "url": "movie-446.html",
                "cover": "146.jpg"
        },
        {
                "title": "七情六欲",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 情色 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "欲望",
                        "心理惊悚",
                        "多线叙事",
                        "大尺度",
                        "人性"
                ],
                "url": "movie-447.html",
                "cover": "147.jpg"
        },
        {
                "title": "最爱的你",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情剧情",
                "category": "爱情家庭",
                "tags": [
                        "老年痴呆",
                        "相伴一生",
                        "催泪"
                ],
                "url": "movie-448.html",
                "cover": "148.jpg"
        },
        {
                "title": "8级警戒续集",
                "year": "2026",
                "region": "美国 / 加拿大",
                "type": "电影",
                "genre": "科幻 / 动作 / 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "异能者",
                        "反乌托邦",
                        "机甲战争"
                ],
                "url": "movie-449.html",
                "cover": "149.jpg"
        },
        {
                "title": "少年透明人2",
                "year": "2025",
                "region": "意大利",
                "type": "电影",
                "genre": "科幻 / 剧情 / 青春",
                "category": "亚洲经典",
                "tags": [
                        "超能力",
                        "校园",
                        "孤独感",
                        "成长"
                ],
                "url": "movie-450.html",
                "cover": "150.jpg"
        },
        {
                "title": "塞上情仇",
                "year": "1988",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 西部 / 历史",
                "category": "爱情家庭",
                "tags": [
                        "戈壁",
                        "复仇",
                        "乱世",
                        "宿命"
                ],
                "url": "movie-451.html",
                "cover": "1.jpg"
        },
        {
                "title": "新警察故事粤语",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，犯罪，剧情",
                "category": "爱情家庭",
                "tags": [
                        "警匪",
                        "香港",
                        "兄弟情",
                        "复仇",
                        "街头实战"
                ],
                "url": "movie-452.html",
                "cover": "2.jpg"
        },
        {
                "title": "蜻蜓少年",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 奇幻, 家庭",
                "category": "纪录综艺",
                "tags": [
                        "成长",
                        "乡愁",
                        "超现实",
                        "留守儿童",
                        "夏季"
                ],
                "url": "movie-453.html",
                "cover": "3.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 天使小绑匪 黑楼怪谈 红颜春醒 九色鹿 拿波里人在米兰 死亡之雪 遗嘱继承者 魔偶魔影 穿越火线 仙舞飘飘 脱去枷锁的回忆：奴隶实录 小鼓女 舞美人 真爹假娘俏媳妇 飞行男孩 青春死党 设计理想家第二季 闪亮的马鞍 我爱上了朋友的姐姐 凶机恶煞",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "爱情家庭",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-454.html",
                "cover": "4.jpg"
        },
        {
                "title": "追击星空导弹",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "动作 / 科幻 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "谍战",
                        "高科技",
                        "太空",
                        "阴谋",
                        "追杀"
                ],
                "url": "movie-455.html",
                "cover": "5.jpg"
        },
        {
                "title": "龙刀奇缘",
                "year": "2025",
                "region": "中国内地",
                "type": "电影",
                "genre": "动作，奇幻，冒险",
                "category": "日韩精选",
                "tags": [
                        "上古神兵",
                        "宿命对决",
                        "特效大片"
                ],
                "url": "movie-456.html",
                "cover": "6.jpg"
        },
        {
                "title": "今夜呼叫我",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "悬疑惊悚",
                "category": "高分片单",
                "tags": [
                        "午夜电台",
                        "都市传说",
                        "直播谋杀"
                ],
                "url": "movie-457.html",
                "cover": "7.jpg"
        },
        {
                "title": "为了明天升起的太阳",
                "year": "2022",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "爱情家庭",
                "tags": [
                        "留守儿童",
                        "乡村教师",
                        "希望",
                        "温暖"
                ],
                "url": "movie-458.html",
                "cover": "8.jpg"
        },
        {
                "title": "孽欲狂情",
                "year": "1994",
                "region": "中国香港",
                "type": "电影",
                "genre": "情色 / 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "情欲",
                        "背叛",
                        "复仇",
                        "限制级"
                ],
                "url": "movie-459.html",
                "cover": "9.jpg"
        },
        {
                "title": "四十岁的老处男",
                "year": "2024",
                "region": "美国",
                "type": "Movie",
                "genre": "喜剧 / 爱情",
                "category": "亚洲经典",
                "tags": [
                        "中年禁欲",
                        "社交焦虑",
                        "真诚恋爱",
                        "性喜剧反转",
                        "治愈向"
                ],
                "url": "movie-460.html",
                "cover": "10.jpg"
        },
        {
                "title": "情况失控",
                "year": "2023",
                "region": "美国",
                "type": "电视剧",
                "genre": "惊悚, 科幻, 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "AI失控",
                        "智能家居",
                        "高空恐怖",
                        "集体被困"
                ],
                "url": "movie-461.html",
                "cover": "11.jpg"
        },
        {
                "title": "神秘宝藏",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 冒险, 悬疑",
                "category": "高分片单",
                "tags": [
                        "日据时期",
                        "寻宝",
                        "铁路",
                        "民族仇恨"
                ],
                "url": "movie-462.html",
                "cover": "12.jpg"
        },
        {
                "title": "拍摄中",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "剧情, 悬疑, 黑色幽默",
                "category": "悬疑惊悚",
                "tags": [
                        "片场",
                        "戏中戏",
                        "元电影",
                        "谋杀",
                        "即兴表演"
                ],
                "url": "movie-463.html",
                "cover": "13.jpg"
        },
        {
                "title": "牧野游龙",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "西部， 动作， 剧情",
                "category": "纪录综艺",
                "tags": [
                        "牛仔",
                        "复仇",
                        "铁路",
                        "印第安"
                ],
                "url": "movie-464.html",
                "cover": "14.jpg"
        },
        {
                "title": "奇兵神犬",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 家庭 / 冒险",
                "category": "日韩精选",
                "tags": [
                        "军犬",
                        "边境缉毒",
                        "人犬情",
                        "儿童成长"
                ],
                "url": "movie-465.html",
                "cover": "15.jpg"
        },
        {
                "title": "爆笑虫子 第三季",
                "year": "2018",
                "region": "韩国",
                "type": "动画",
                "genre": "喜剧/动画",
                "category": "动作冒险",
                "tags": [
                        "无对白",
                        "虫子",
                        "搞笑",
                        "短片",
                        "合家欢"
                ],
                "url": "movie-466.html",
                "cover": "16.jpg"
        },
        {
                "title": "飞速单车慢慢爱",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "动作冒险",
                "tags": [
                        "骑行",
                        "治愈",
                        "慢生活",
                        "小镇",
                        "青春"
                ],
                "url": "movie-467.html",
                "cover": "17.jpg"
        },
        {
                "title": "笨人晚宴",
                "year": "2022",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "喜剧 / 黑色幽默",
                "category": "动作冒险",
                "tags": [
                        "社恐",
                        "权力反转",
                        "上流社会",
                        "讽刺"
                ],
                "url": "movie-468.html",
                "cover": "18.jpg"
        },
        {
                "title": "冲击轰雷岩",
                "year": "2020",
                "region": "日本",
                "type": "电影",
                "genre": "动作, 科幻",
                "category": "爱情家庭",
                "tags": [
                        "机甲",
                        "怪兽",
                        "末日",
                        "少年"
                ],
                "url": "movie-469.html",
                "cover": "19.jpg"
        },
        {
                "title": "萨德岭",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "恐怖, 悬疑",
                "category": "动作冒险",
                "tags": [
                        "洛夫克拉夫特式恐怖",
                        "邪教",
                        "小镇诅咒"
                ],
                "url": "movie-470.html",
                "cover": "20.jpg"
        },
        {
                "title": "幽蓝幻境",
                "year": "2023",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "奇幻 / 爱情",
                "category": "动作冒险",
                "tags": [
                        "梦境",
                        "虚实结合",
                        "画家",
                        "记忆"
                ],
                "url": "movie-471.html",
                "cover": "21.jpg"
        },
        {
                "title": "民国奇探之奇缘侦探",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑 / 推理 / 年代",
                "category": "悬疑惊悚",
                "tags": [
                        "民国",
                        "双男主",
                        "奇案",
                        "前世今生"
                ],
                "url": "movie-472.html",
                "cover": "22.jpg"
        },
        {
                "title": "玩具熊的五夜后宫",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "游戏改编",
                        "生存",
                        "机械玩偶",
                        "灵异",
                        "密室"
                ],
                "url": "movie-473.html",
                "cover": "23.jpg"
        },
        {
                "title": "鞋猫剑客：三小恶猫",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "动画, 喜剧, 动作",
                "category": "动作冒险",
                "tags": [
                        "靴猫",
                        "萌宠",
                        "侠客",
                        "捣蛋鬼"
                ],
                "url": "movie-474.html",
                "cover": "24.jpg"
        },
        {
                "title": "狂飙",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "犯罪 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "扫黑除恶",
                        "年代跨度",
                        "双男主对决"
                ],
                "url": "movie-475.html",
                "cover": "25.jpg"
        },
        {
                "title": "沙滩美女",
                "year": "2023",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 喜剧 / 青春",
                "category": "动作冒险",
                "tags": [
                        "海边民宿",
                        "假期邂逅",
                        "误会连环",
                        "友情告白",
                        "夏日成长"
                ],
                "url": "movie-476.html",
                "cover": "26.jpg"
        },
        {
                "title": "抓住大运",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧，犯罪",
                "category": "爱情家庭",
                "tags": [
                        "出租车",
                        "黑色幽默",
                        "巧合",
                        "乌龙",
                        "倒霉蛋"
                ],
                "url": "movie-477.html",
                "cover": "27.jpg"
        },
        {
                "title": "歌台艳帜",
                "year": "2011",
                "region": "中国",
                "type": "电影",
                "genre": "历史音乐剧、女性成长、社会百态",
                "category": "爱情家庭",
                "tags": [
                        "旧戏院",
                        "女伶成长",
                        "地方禁令",
                        "民间文化",
                        "青年联手"
                ],
                "url": "movie-478.html",
                "cover": "28.jpg"
        },
        {
                "title": "边界布鲁斯",
                "year": "1998",
                "region": "美国",
                "type": "电影",
                "genre": "犯罪 / 音乐 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "边境小镇",
                        "蓝调乐队",
                        "走私疑云",
                        "失意警探",
                        "自我救赎",
                        "夜色公路"
                ],
                "url": "movie-479.html",
                "cover": "29.jpg"
        },
        {
                "title": "草根",
                "year": "1989",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情, 传记",
                "category": "动作冒险",
                "tags": [
                        "底层",
                        "励志",
                        "时代变迁",
                        "鱼贩"
                ],
                "url": "movie-480.html",
                "cover": "30.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 鬼龙院花子的生涯 8级警戒续集 友好的敌人 时间飞船24 爱的缺口 彼得谢勒的生与死 正牌继承人 憨夫成龙粤语 嗨，特伦甘纳！ 拐骗 北方旅馆 末日巡逻队第四季 新宿黑社会 秩序问题 隐门粤语 玛莉亚节 嫁个老公过日子 泯灭天使 3904英呎 家庭负担",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "动作冒险",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-481.html",
                "cover": "31.jpg"
        },
        {
                "title": "长辈",
                "year": "1981",
                "region": "中国香港",
                "type": "Movie",
                "genre": "喜剧 / 功夫",
                "category": "悬疑惊悚",
                "tags": [
                        "邵氏经典",
                        "刘家良导演",
                        "惠英红成名作",
                        "鸡同鸭讲",
                        "井字过三关"
                ],
                "url": "movie-482.html",
                "cover": "32.jpg"
        },
        {
                "title": "师父又掉线了",
                "year": "2025",
                "region": "中国",
                "type": "剧集",
                "genre": "喜剧 / 奇幻",
                "category": "欧美热播",
                "tags": [
                        "修仙",
                        "网瘾师父",
                        "跨次元",
                        "沙雕"
                ],
                "url": "movie-483.html",
                "cover": "33.jpg"
        },
        {
                "title": "魔间行者",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作、奇幻、恐怖",
                "category": "欧美热播",
                "tags": [
                        "反英雄",
                        "地狱神探",
                        "黑色电影",
                        "超自然",
                        "恶魔交易"
                ],
                "url": "movie-484.html",
                "cover": "34.jpg"
        },
        {
                "title": "花一样的女人",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "年代 / 女性",
                "category": "喜剧治愈",
                "tags": [
                        "民国",
                        "女性群像",
                        "纱厂"
                ],
                "url": "movie-485.html",
                "cover": "35.jpg"
        },
        {
                "title": "愿赌服输",
                "year": "2025",
                "region": "中国",
                "type": "电影",
                "genre": "剧情，悬疑",
                "category": "欧美热播",
                "tags": [
                        "赌局",
                        "黑色幽默",
                        "命运翻转",
                        "人性考验"
                ],
                "url": "movie-486.html",
                "cover": "36.jpg"
        },
        {
                "title": "隔窗恋爱：咫尺相望",
                "year": "2024",
                "region": "西班牙",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "欧美热播",
                "tags": [
                        "青春",
                        "邻居",
                        "社交媒体"
                ],
                "url": "movie-487.html",
                "cover": "37.jpg"
        },
        {
                "title": "疾风23",
                "year": "2023",
                "region": "日本",
                "type": "剧集",
                "genre": "悬疑、犯罪",
                "category": "纪录综艺",
                "tags": [
                        "暗夜追凶",
                        "孤胆英雄",
                        "警匪博弈",
                        "城市迷宫"
                ],
                "url": "movie-488.html",
                "cover": "38.jpg"
        },
        {
                "title": "奔跑吧女孩",
                "year": "2024",
                "region": "中国大陆",
                "type": "综艺/电影",
                "genre": "真人秀剧情",
                "category": "高分片单",
                "tags": [
                        "女性",
                        "励志",
                        "奔跑",
                        "姐妹情",
                        "汗水"
                ],
                "url": "movie-489.html",
                "cover": "39.jpg"
        },
        {
                "title": "黑的教育",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "黑帮",
                        "校园",
                        "卧底"
                ],
                "url": "movie-490.html",
                "cover": "40.jpg"
        },
        {
                "title": "贱精姐弟 第一季",
                "year": "2020",
                "region": "中国香港",
                "type": "剧集",
                "genre": "喜剧 / 家庭",
                "category": "华语佳作",
                "tags": [
                        "港剧",
                        "姐弟",
                        "搞笑",
                        "日常"
                ],
                "url": "movie-491.html",
                "cover": "41.jpg"
        },
        {
                "title": "雪花莲的初恋",
                "year": "2023",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情, 奇幻, 剧情",
                "category": "高分片单",
                "tags": [
                        "初恋",
                        "时间循环",
                        "治愈",
                        "纯爱"
                ],
                "url": "movie-492.html",
                "cover": "42.jpg"
        },
        {
                "title": "警网擒凶",
                "year": "2024",
                "region": "香港",
                "type": "电影",
                "genre": "动作, 犯罪",
                "category": "亚洲经典",
                "tags": [
                        "港产片",
                        "警匪",
                        "动作",
                        "卧底",
                        "枪战"
                ],
                "url": "movie-493.html",
                "cover": "43.jpg"
        },
        {
                "title": "不是这个星球的",
                "year": "2025",
                "region": "法国 / 德国",
                "type": "电影",
                "genre": "科幻 / 哲学 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "外星视角",
                        "人类学观察",
                        "孤独症",
                        "黑色幽默"
                ],
                "url": "movie-494.html",
                "cover": "44.jpg"
        },
        {
                "title": "星空异形",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 恐怖, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "太空船",
                        "拟态",
                        "寄生"
                ],
                "url": "movie-495.html",
                "cover": "45.jpg"
        },
        {
                "title": "第七码",
                "year": "2022",
                "region": "日本",
                "type": "电影",
                "genre": "科幻, 悬疑, 犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "记忆编码",
                        "近未来",
                        "烧脑",
                        "女性主角"
                ],
                "url": "movie-496.html",
                "cover": "46.jpg"
        },
        {
                "title": "身份的证明",
                "year": "2010",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑 / 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "年代",
                        "身份置换",
                        "人性"
                ],
                "url": "movie-497.html",
                "cover": "47.jpg"
        },
        {
                "title": "善意谎言",
                "year": "2014",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 家庭 / 治愈",
                "category": "高分片单",
                "tags": [
                        "绝症父亲",
                        "代写书信",
                        "小镇温情",
                        "善意的欺骗",
                        "催泪"
                ],
                "url": "movie-498.html",
                "cover": "48.jpg"
        },
        {
                "title": "大叔之爱",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "爱情, 喜剧",
                "category": "爱情家庭",
                "tags": [
                        "职场",
                        "纯爱",
                        "反差萌"
                ],
                "url": "movie-499.html",
                "cover": "49.jpg"
        },
        {
                "title": "遗失的美好",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 爱情 / 治愈",
                "category": "动作冒险",
                "tags": [
                        "失忆",
                        "便利店",
                        "慢生活",
                        "双向奔赴"
                ],
                "url": "movie-500.html",
                "cover": "50.jpg"
        },
        {
                "title": "人鬼双胞胎国语",
                "year": "2025",
                "region": "中国台湾 / 新加坡",
                "type": "剧集",
                "genre": "奇幻 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "双胞胎",
                        "阴阳眼",
                        "身份互换",
                        "治愈"
                ],
                "url": "movie-501.html",
                "cover": "51.jpg"
        },
        {
                "title": "孤岛歼倭记",
                "year": "1944",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争, 惊悚, 冒险",
                "category": "亚洲经典",
                "tags": [
                        "抗日",
                        "孤岛",
                        "游击战",
                        "黑白片",
                        "以一敌多"
                ],
                "url": "movie-502.html",
                "cover": "52.jpg"
        },
        {
                "title": "美国犯罪故事 第二季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 犯罪",
                "category": "亚洲经典",
                "tags": [
                        "真实改编",
                        "法律剧",
                        "社交网络",
                        "谋杀案",
                        "媒体审判"
                ],
                "url": "movie-503.html",
                "cover": "53.jpg"
        },
        {
                "title": "红粉贵族",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 家庭 / 女性",
                "category": "喜剧治愈",
                "tags": [
                        "民国",
                        "女性独立",
                        "家族兴衰",
                        "旗袍"
                ],
                "url": "movie-504.html",
                "cover": "54.jpg"
        },
        {
                "title": "好心作怪2013国语",
                "year": "2013",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑, 剧情, 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "换心",
                        "性格改变",
                        "医疗",
                        "三角恋",
                        "国语配音"
                ],
                "url": "movie-505.html",
                "cover": "55.jpg"
        },
        {
                "title": "爱情二人行",
                "year": "2024",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情 / 喜剧 / 同性",
                "category": "动作冒险",
                "tags": [
                        "三人同居",
                        "形婚协议",
                        "都市情感",
                        "反套路"
                ],
                "url": "movie-506.html",
                "cover": "56.jpg"
        },
        {
                "title": "妖怪人贝姆",
                "year": "2025",
                "region": "日本",
                "type": "TV",
                "genre": "奇幻, 悬疑, 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "都市传说",
                        "人性",
                        "变身",
                        "孤独"
                ],
                "url": "movie-507.html",
                "cover": "57.jpg"
        },
        {
                "title": "我的初恋是暗恋",
                "year": "2025",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情 / 青春 / 校园",
                "category": "爱情家庭",
                "tags": [
                        "暗恋",
                        "双向奔赴",
                        "社死",
                        "成长",
                        "治愈"
                ],
                "url": "movie-508.html",
                "cover": "58.jpg"
        },
        {
                "title": "穿越时空爱死你",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情 / 奇幻 / 喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "穿越",
                        "女强",
                        "沙雕甜宠",
                        "历史解构"
                ],
                "url": "movie-509.html",
                "cover": "59.jpg"
        },
        {
                "title": "百变大咖秀第二季",
                "year": "2024",
                "region": "中国",
                "type": "综艺",
                "genre": "真人秀/喜剧",
                "category": "日韩精选",
                "tags": [
                        "模仿秀",
                        "音乐喜剧",
                        "跨界"
                ],
                "url": "movie-510.html",
                "cover": "60.jpg"
        },
        {
                "title": "鬼娃回魂4",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "经典重启",
                        "血浆",
                        "密室"
                ],
                "url": "movie-511.html",
                "cover": "61.jpg"
        },
        {
                "title": "有客到",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "惊悚、民俗、剧情",
                "category": "日韩精选",
                "tags": [
                        "殡仪馆",
                        "红衣女鬼",
                        "冥婚"
                ],
                "url": "movie-512.html",
                "cover": "62.jpg"
        },
        {
                "title": "黑暗毁灭",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "动作、奇幻、末世",
                "category": "日韩精选",
                "tags": [
                        "咒术",
                        "血腥",
                        "反英雄",
                        "高燃",
                        "催泪"
                ],
                "url": "movie-513.html",
                "cover": "63.jpg"
        },
        {
                "title": "危险女人心",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "悬疑，惊悚，剧情",
                "category": "欧美热播",
                "tags": [
                        "心理战",
                        "双女主",
                        "豪宅",
                        "罗生门"
                ],
                "url": "movie-514.html",
                "cover": "64.jpg"
        },
        {
                "title": "赞扬士兵，赞扬农民",
                "year": "2022",
                "region": "波兰",
                "type": "电影",
                "genre": "历史, 战争",
                "category": "亚洲经典",
                "tags": [
                        "黑白电影",
                        "诗意",
                        "二战",
                        "东线",
                        "农民"
                ],
                "url": "movie-515.html",
                "cover": "65.jpg"
        },
        {
                "title": "婚姻趣事",
                "year": "2021",
                "region": "日本",
                "type": "剧集",
                "genre": "喜剧, 爱情, 家庭",
                "category": "高分片单",
                "tags": [
                        "夫妻",
                        "日常",
                        "幽默",
                        "温情",
                        "沟通"
                ],
                "url": "movie-516.html",
                "cover": "66.jpg"
        },
        {
                "title": "清秀佳人2",
                "year": "2024",
                "region": "加拿大",
                "type": "剧集",
                "genre": "剧情 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "成长",
                        "女性",
                        "乡村",
                        "教师",
                        "姐妹"
                ],
                "url": "movie-517.html",
                "cover": "67.jpg"
        },
        {
                "title": "牧师神探第十季",
                "year": "2026",
                "region": "英国",
                "type": "电视剧",
                "genre": "犯罪、剧情",
                "category": "华语佳作",
                "tags": [
                        "英伦",
                        "宗教",
                        "连环杀手",
                        "最终季"
                ],
                "url": "movie-518.html",
                "cover": "68.jpg"
        },
        {
                "title": "蒸盒号起航",
                "year": "2024",
                "region": "中国大陆",
                "type": "动画电影",
                "genre": "奇幻、冒险、喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "美食",
                        "航海",
                        "热血",
                        "友情",
                        "传统文化"
                ],
                "url": "movie-519.html",
                "cover": "69.jpg"
        },
        {
                "title": "爱与森林",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "高分片单",
                "tags": [
                        "法式浪漫",
                        "不伦之恋",
                        "禁忌"
                ],
                "url": "movie-520.html",
                "cover": "70.jpg"
        },
        {
                "title": "玉米田的小孩6",
                "year": "2017",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖",
                "category": "亚洲经典",
                "tags": [
                        "邪教",
                        "农村",
                        "童年阴影",
                        "直发录像带"
                ],
                "url": "movie-521.html",
                "cover": "71.jpg"
        },
        {
                "title": "逆天奇案2粤语",
                "year": "2025",
                "region": "中国香港",
                "type": "剧集",
                "genre": "警匪/悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "TVB",
                        "刑侦",
                        "粤语原声",
                        "奇案",
                        "双雄"
                ],
                "url": "movie-522.html",
                "cover": "72.jpg"
        },
        {
                "title": "午夜钟声",
                "year": "1965",
                "region": "美国 / 西班牙",
                "type": "电影",
                "genre": "剧情/历史",
                "category": "动作冒险",
                "tags": [
                        "莎士比亚",
                        "福斯塔夫",
                        "战争",
                        "黑白",
                        "名著改编"
                ],
                "url": "movie-523.html",
                "cover": "73.jpg"
        },
        {
                "title": "赛嫣的生存与复仇",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情, 惊悚, 复仇",
                "category": "欧美热播",
                "tags": [
                        "校园霸凌",
                        "逆袭",
                        "高智商",
                        "暗黑"
                ],
                "url": "movie-524.html",
                "cover": "74.jpg"
        },
        {
                "title": "埃菲尔铁塔",
                "year": "2026",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 爱情 / 历史",
                "category": "华语佳作",
                "tags": [
                        "地标",
                        "建筑",
                        "传奇",
                        "跨阶级爱情"
                ],
                "url": "movie-525.html",
                "cover": "75.jpg"
        },
        {
                "title": "罗非是条鱼",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 黑色幽默 / 公路",
                "category": "华语佳作",
                "tags": [
                        "云南",
                        "小镇青年",
                        "贩卖罗非鱼",
                        "荒诞之旅",
                        "城市梦"
                ],
                "url": "movie-526.html",
                "cover": "76.jpg"
        },
        {
                "title": "国王的赎金",
                "year": "2022",
                "region": "英国",
                "type": "电影",
                "genre": "犯罪、喜剧、剧情",
                "category": "日韩精选",
                "tags": [
                        "绑架",
                        "黑色幽默",
                        "反转"
                ],
                "url": "movie-527.html",
                "cover": "77.jpg"
        },
        {
                "title": "破处惊魂夜",
                "year": "2022",
                "region": "中国台湾",
                "type": "电影",
                "genre": "恐怖 / 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "校园",
                        "都市传说",
                        "杀戮",
                        "反转"
                ],
                "url": "movie-528.html",
                "cover": "78.jpg"
        },
        {
                "title": "铁拳老爸",
                "year": "2024",
                "region": "美国 / 中国大陆",
                "type": "电影",
                "genre": "动作 / 家庭 / 喜剧",
                "category": "日韩精选",
                "tags": [
                        "父女",
                        "格斗",
                        "反差萌",
                        "校园霸凌"
                ],
                "url": "movie-529.html",
                "cover": "79.jpg"
        },
        {
                "title": "此刻我需要你",
                "year": "2022",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情，剧情",
                "category": "纪录综艺",
                "tags": [
                        "疗愈",
                        "错过",
                        "雨声",
                        "电台",
                        "救赎"
                ],
                "url": "movie-530.html",
                "cover": "80.jpg"
        },
        {
                "title": "黑金村传说",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 民俗恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "乡村怪谈",
                        "祭祀禁忌",
                        "反转"
                ],
                "url": "movie-531.html",
                "cover": "81.jpg"
        },
        {
                "title": "雪中红",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "东北",
                        "悬疑",
                        "复仇",
                        "女性"
                ],
                "url": "movie-532.html",
                "cover": "82.jpg"
        },
        {
                "title": "终极游戏",
                "year": "2022",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 科幻, 惊悚, 赛博朋克",
                "category": "亚洲经典",
                "tags": [
                        "生死竞赛",
                        "虚拟战场",
                        "高额赌局",
                        "身份伪装",
                        "反转结局"
                ],
                "url": "movie-533.html",
                "cover": "83.jpg"
        },
        {
                "title": "换精计划",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "伦理",
                        "家庭",
                        "精子库",
                        "乌龙",
                        "搞笑"
                ],
                "url": "movie-534.html",
                "cover": "84.jpg"
        },
        {
                "title": "黑祭司们",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖, 悬疑, 神秘",
                "category": "爱情家庭",
                "tags": [
                        "驱魔",
                        "宗教",
                        "犯罪心理",
                        "邪教"
                ],
                "url": "movie-535.html",
                "cover": "85.jpg"
        },
        {
                "title": "全知干预视角",
                "year": "2017",
                "region": "韩国",
                "type": "综艺",
                "genre": "真人秀",
                "category": "喜剧治愈",
                "tags": [
                        "观察类",
                        "经纪人",
                        "明星",
                        "幕后"
                ],
                "url": "movie-536.html",
                "cover": "86.jpg"
        },
        {
                "title": "基尼与亚当斯",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "悬疑/犯罪",
                "category": "爱情家庭",
                "tags": [
                        "双男主",
                        "精神分裂",
                        "拼图叙事"
                ],
                "url": "movie-537.html",
                "cover": "87.jpg"
        },
        {
                "title": "春妇传",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "剧情，历史，爱情",
                "category": "悬疑惊悚",
                "tags": [
                        "战后",
                        "生存",
                        "女性觉醒"
                ],
                "url": "movie-538.html",
                "cover": "88.jpg"
        },
        {
                "title": "惨绿愁红",
                "year": "2025",
                "region": "中国",
                "type": "电影",
                "genre": "剧情、悬疑、文艺",
                "category": "欧美热播",
                "tags": [
                        "女性",
                        "心理惊悚",
                        "江南水乡",
                        "家族秘密"
                ],
                "url": "movie-539.html",
                "cover": "89.jpg"
        },
        {
                "title": "舍伍德传第一季",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "犯罪, 传记",
                "category": "欧美热播",
                "tags": [
                        "真实事件",
                        "工运",
                        "卧底警察",
                        "背叛"
                ],
                "url": "movie-540.html",
                "cover": "90.jpg"
        },
        {
                "title": "战龙四驱",
                "year": "2025",
                "region": "日本",
                "type": "TV Series",
                "genre": "科幻，体育",
                "category": "亚洲经典",
                "tags": [
                        "赛车",
                        "人工智能",
                        "少年热血"
                ],
                "url": "movie-541.html",
                "cover": "91.jpg"
        },
        {
                "title": "土星异形",
                "year": "2029",
                "region": "美国",
                "type": "电影",
                "genre": "科幻， 恐怖",
                "category": "亚洲经典",
                "tags": [
                        "太空怪兽",
                        "硬科幻",
                        "密室逃生"
                ],
                "url": "movie-542.html",
                "cover": "92.jpg"
        },
        {
                "title": "泣船威利",
                "year": "1928",
                "region": "美国",
                "type": "动画短片",
                "genre": "喜剧 / 动画 / 家庭",
                "category": "高分片单",
                "tags": [
                        "米奇",
                        "蒸汽船",
                        "默片",
                        "经典",
                        "吹口哨"
                ],
                "url": "movie-543.html",
                "cover": "93.jpg"
        },
        {
                "title": "梦想改造家第十一季",
                "year": "2024",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀, 家居, 纪实",
                "category": "悬疑惊悚",
                "tags": [
                        "改造",
                        "房屋",
                        "情感",
                        "设计师"
                ],
                "url": "movie-544.html",
                "cover": "94.jpg"
        },
        {
                "title": "踮起脚尖说爱你",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 青春 / 喜剧",
                "category": "高分片单",
                "tags": [
                        "校园暗恋",
                        "舞蹈社团",
                        "身高差",
                        "误会重逢",
                        "轻松治愈"
                ],
                "url": "movie-545.html",
                "cover": "95.jpg"
        },
        {
                "title": "侨女日记",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "年代剧情",
                "category": "华语佳作",
                "tags": [
                        "华侨",
                        "寻根",
                        "校园",
                        "三代人"
                ],
                "url": "movie-546.html",
                "cover": "96.jpg"
        },
        {
                "title": "象牙",
                "year": "2025",
                "region": "美国 / 肯尼亚",
                "type": "电影",
                "genre": "动作、惊悚、剧情",
                "category": "纪录综艺",
                "tags": [
                        "野生动物保护",
                        "卧底",
                        "盗猎",
                        "非洲"
                ],
                "url": "movie-547.html",
                "cover": "97.jpg"
        },
        {
                "title": "虚拟情人",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 爱情 / 惊悚",
                "category": "欧美热播",
                "tags": [
                        "AI",
                        "恋爱模拟",
                        "意识上传",
                        "伦理",
                        "反转"
                ],
                "url": "movie-548.html",
                "cover": "98.jpg"
        },
        {
                "title": "塞拉耶佛的孩子",
                "year": "2024",
                "region": "波黑",
                "type": "纪录片",
                "genre": "战争 / 历史",
                "category": "亚洲经典",
                "tags": [
                        "围城战",
                        "儿童视角",
                        "创伤记忆",
                        "真实影像"
                ],
                "url": "movie-549.html",
                "cover": "99.jpg"
        },
        {
                "title": "终极裁决1934",
                "year": "1934",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 犯罪 / 黑色电影",
                "category": "纪录综艺",
                "tags": [
                        "黑色电影",
                        "冤案",
                        "记者",
                        "死刑犯"
                ],
                "url": "movie-550.html",
                "cover": "100.jpg"
        },
        {
                "title": "如果你离我而去",
                "year": "2024",
                "region": "土耳其",
                "type": "剧集",
                "genre": "爱情, 剧情, 家庭",
                "category": "亚洲经典",
                "tags": [
                        "虐恋",
                        "豪门",
                        "失忆",
                        "复仇",
                        "高颜值"
                ],
                "url": "movie-551.html",
                "cover": "101.jpg"
        },
        {
                "title": "做我的最爱",
                "year": "2024",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情/奇幻/喜剧",
                "category": "华语佳作",
                "tags": [
                        "平行宇宙",
                        "恋爱选择",
                        "轻松诙谐",
                        "反转",
                        "都市情感"
                ],
                "url": "movie-552.html",
                "cover": "102.jpg"
        },
        {
                "title": "原罪的羔羊",
                "year": "2019",
                "region": "美国",
                "type": "犯罪悬疑电影",
                "genre": "心理惊悚,法庭戏,悬疑伦理",
                "category": "日韩精选",
                "tags": [
                        "原罪",
                        "审判失序",
                        "证据操控",
                        "法治危机",
                        "道德困境",
                        "受害者追击",
                        "反转告密"
                ],
                "url": "movie-553.html",
                "cover": "103.jpg"
        },
        {
                "title": "派拉蒙巡礼",
                "year": "2020",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑",
                "category": "日韩精选",
                "tags": [
                        "片场",
                        "谋杀",
                        "复古",
                        "戏中戏"
                ],
                "url": "movie-554.html",
                "cover": "104.jpg"
        },
        {
                "title": "暴雨将至",
                "year": "2024",
                "region": "北马其顿",
                "type": "电影",
                "genre": "剧情 / 战争",
                "category": "悬疑惊悚",
                "tags": [
                        "环形叙事",
                        "种族冲突",
                        "宿命"
                ],
                "url": "movie-555.html",
                "cover": "105.jpg"
        },
        {
                "title": "保镖之天之娇女",
                "year": "2020",
                "region": "中国大陆",
                "type": "电视剧集",
                "genre": "动作 / 爱情",
                "category": "亚洲经典",
                "tags": [
                        "保镖",
                        "女总裁",
                        "悬疑",
                        "替身",
                        "商战"
                ],
                "url": "movie-556.html",
                "cover": "106.jpg"
        },
        {
                "title": "麦克白夫人",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "剧情，惊悚",
                "category": "动作冒险",
                "tags": [
                        "名著改编",
                        "女性视角",
                        "心理",
                        "权谋"
                ],
                "url": "movie-557.html",
                "cover": "107.jpg"
        },
        {
                "title": "爆裂追击",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 惊悚",
                "category": "高分片单",
                "tags": [
                        "飙车",
                        "复仇",
                        "机械义肢",
                        "极限反杀"
                ],
                "url": "movie-558.html",
                "cover": "108.jpg"
        },
        {
                "title": "逃离塔利班",
                "year": "2024",
                "region": "阿富汗/美国",
                "type": "电影",
                "genre": "战争，传记",
                "category": "华语佳作",
                "tags": [
                        "真实事件",
                        "女性",
                        "逃亡",
                        "母女"
                ],
                "url": "movie-559.html",
                "cover": "109.jpg"
        },
        {
                "title": "蛮山血战",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "战争 / 西部",
                "category": "高分片单",
                "tags": [
                        "南北战争",
                        "山地战",
                        "人性拷问",
                        "血腥写实"
                ],
                "url": "movie-560.html",
                "cover": "110.jpg"
        },
        {
                "title": "龙与地下城3：秽恶之书",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "奇幻、动作、冒险",
                "category": "爱情家庭",
                "tags": [
                        "魔法书",
                        "邪神苏醒",
                        "rogue 主角",
                        "团队冒险",
                        "黑暗魔咒"
                ],
                "url": "movie-561.html",
                "cover": "111.jpg"
        },
        {
                "title": "巴黎铁塔大绑架",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "动作 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "高空营救",
                        "黑帮火并",
                        "极限跑酷"
                ],
                "url": "movie-562.html",
                "cover": "112.jpg"
        },
        {
                "title": "寄生兽",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "科幻、恐怖、剧情",
                "category": "喜剧治愈",
                "tags": [
                        "外星生物",
                        "人体改造",
                        "共生",
                        "存在主义",
                        "血腥"
                ],
                "url": "movie-563.html",
                "cover": "113.jpg"
        },
        {
                "title": "天涯父子情",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "公路片",
                        "阿尔茨海默",
                        "和解"
                ],
                "url": "movie-564.html",
                "cover": "114.jpg"
        },
        {
                "title": "在蓝色时分飞翔",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "剧情，奇幻",
                "category": "纪录综艺",
                "tags": [
                        "公路片",
                        "自我和解",
                        "童年创伤",
                        "日系清新"
                ],
                "url": "movie-565.html",
                "cover": "115.jpg"
        },
        {
                "title": "疯狗强尼",
                "year": "2008",
                "region": "法国 / 科特迪瓦",
                "type": "电影",
                "genre": "剧情 / 战争",
                "category": "动作冒险",
                "tags": [
                        "童兵",
                        "非洲",
                        "残酷青春",
                        "暴力美学"
                ],
                "url": "movie-566.html",
                "cover": "116.jpg"
        },
        {
                "title": "晚上好，我们是朝山家。",
                "year": "2026",
                "region": "日本",
                "type": "剧集",
                "genre": "家庭，剧情，悬疑",
                "category": "动作冒险",
                "tags": [
                        "家族秘密",
                        "返乡",
                        "暗黑系",
                        "温情"
                ],
                "url": "movie-567.html",
                "cover": "117.jpg"
        },
        {
                "title": "死在西部的一百万种方式",
                "year": "2014",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 西部",
                "category": "日韩精选",
                "tags": [
                        "恶搞",
                        "黑色幽默",
                        "荒野求生",
                        "怂货"
                ],
                "url": "movie-568.html",
                "cover": "118.jpg"
        },
        {
                "title": "猎杀星期一",
                "year": "2017",
                "region": "美国 / 英国",
                "type": "电影",
                "genre": "科幻",
                "category": "纪录综艺",
                "tags": [
                        "克隆人",
                        "反乌托邦",
                        "姐妹情"
                ],
                "url": "movie-569.html",
                "cover": "119.jpg"
        },
        {
                "title": "白色强人",
                "year": "2025",
                "region": "中国香港",
                "type": "剧集",
                "genre": "医疗 / 剧情 / 职场",
                "category": "喜剧治愈",
                "tags": [
                        "公立医院",
                        "急诊室",
                        "医疗改革",
                        "医者仁心"
                ],
                "url": "movie-570.html",
                "cover": "120.jpg"
        },
        {
                "title": "天才冲冲冲",
                "year": "2009",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧 / 动作 / 科幻",
                "category": "欧美热播",
                "tags": [
                        "废柴英雄",
                        "乌龙发明",
                        "无厘头",
                        "台客文化"
                ],
                "url": "movie-571.html",
                "cover": "121.jpg"
        },
        {
                "title": "加冕礼",
                "year": "2012",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 历史 / 皇室",
                "category": "悬疑惊悚",
                "tags": [
                        "乔治六世",
                        "二战前夕",
                        "皇室内幕",
                        "口吃国王",
                        "王权责任"
                ],
                "url": "movie-572.html",
                "cover": "122.jpg"
        },
        {
                "title": "乞丐也疯狂",
                "year": "2024",
                "region": "印度",
                "type": "电影",
                "genre": "剧情喜剧",
                "category": "高分片单",
                "tags": [
                        "贫民窟",
                        "逆袭",
                        "彩票",
                        "黑色幽默"
                ],
                "url": "movie-573.html",
                "cover": "123.jpg"
        },
        {
                "title": "冤家宜结不宜解国语",
                "year": "2021",
                "region": "中国香港",
                "type": "剧集",
                "genre": "爱情, 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "欢喜冤家",
                        "职场",
                        "港剧",
                        "轻喜",
                        "成熟恋爱"
                ],
                "url": "movie-574.html",
                "cover": "124.jpg"
        },
        {
                "title": "男人，女人",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情/爱情",
                "category": "日韩精选",
                "tags": [
                        "婚姻困境",
                        "性别互换体验",
                        "黑色幽默",
                        "情感博弈"
                ],
                "url": "movie-575.html",
                "cover": "125.jpg"
        },
        {
                "title": "鼹鼠人",
                "year": "2007",
                "region": "美国",
                "type": "电影",
                "genre": "科幻，恐怖",
                "category": "爱情家庭",
                "tags": [
                        "地下生物",
                        "变异",
                        "城市传说",
                        "隧道"
                ],
                "url": "movie-576.html",
                "cover": "126.jpg"
        },
        {
                "title": "我的妈咪不是人",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "科幻/家庭/喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "亲情",
                        "AI",
                        "治愈",
                        "反转"
                ],
                "url": "movie-577.html",
                "cover": "127.jpg"
        },
        {
                "title": "炼印",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑，犯罪",
                "category": "动作冒险",
                "tags": [
                        "官印",
                        "古代悬疑",
                        "身份互换",
                        "底层智慧",
                        "衙门风云"
                ],
                "url": "movie-578.html",
                "cover": "128.jpg"
        },
        {
                "title": "地球：奇迹的一天",
                "year": "2025",
                "region": "英国 / 美国",
                "type": "电影",
                "genre": "纪录片 / 自然",
                "category": "纪录综艺",
                "tags": [
                        "动物",
                        "24小时",
                        "全球"
                ],
                "url": "movie-579.html",
                "cover": "129.jpg"
        },
        {
                "title": "张灯结彩",
                "year": "1998",
                "region": "中国",
                "type": "电视剧",
                "genre": "家庭 / 喜剧 / 年代",
                "category": "高分片单",
                "tags": [
                        "下岗潮",
                        "小市民",
                        "邻里温情",
                        "怀旧"
                ],
                "url": "movie-580.html",
                "cover": "130.jpg"
        },
        {
                "title": "心跳告白季",
                "year": "2022",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情校园",
                "category": "欧美热播",
                "tags": [
                        "群像",
                        "修罗场",
                        "慢热",
                        "纯爱"
                ],
                "url": "movie-581.html",
                "cover": "131.jpg"
        },
        {
                "title": "战时兄弟",
                "year": "2018",
                "region": "中国",
                "type": "战争历史剧",
                "genre": "战争,史诗,动作",
                "category": "欧美热播",
                "tags": [
                        "抗战",
                        "生存选择",
                        "兄弟情",
                        "边境运输"
                ],
                "url": "movie-582.html",
                "cover": "132.jpg"
        },
        {
                "title": "情牵拉面茶",
                "year": "2018",
                "region": "日本 / 新加坡",
                "type": "电影",
                "genre": "剧情 / 家庭 / 美食",
                "category": "喜剧治愈",
                "tags": [
                        "拉面",
                        "肉骨茶",
                        "二战记忆",
                        "混血"
                ],
                "url": "movie-583.html",
                "cover": "133.jpg"
        },
        {
                "title": "新闻播音员第二季",
                "year": "2024",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情, 职场",
                "category": "日韩精选",
                "tags": [
                        "新闻行业",
                        "权力斗争",
                        "主播",
                        "暗黑"
                ],
                "url": "movie-584.html",
                "cover": "134.jpg"
        },
        {
                "title": "小迷糊当大兵",
                "year": "1995",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧， 动作",
                "category": "爱情家庭",
                "tags": [
                        "军营",
                        "乌龙",
                        "草根英雄",
                        "搞笑",
                        "90年代"
                ],
                "url": "movie-585.html",
                "cover": "135.jpg"
        },
        {
                "title": "都是戴茜惹的祸",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "宠物侦探",
                        "黄金猎犬破案",
                        "单元剧",
                        "冤家搭档"
                ],
                "url": "movie-586.html",
                "cover": "136.jpg"
        },
        {
                "title": "雪山飞狐粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 武侠, 悬疑",
                "category": "高分片单",
                "tags": [
                        "经典改编",
                        "粤语原声",
                        "江湖",
                        "复仇"
                ],
                "url": "movie-587.html",
                "cover": "137.jpg"
        },
        {
                "title": "灵数23",
                "year": "2007",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "数字偏执",
                        "心理惊悚",
                        "神秘小说",
                        "身份认同",
                        "金凯瑞"
                ],
                "url": "movie-588.html",
                "cover": "138.jpg"
        },
        {
                "title": "年少日记粤语",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情， 青春， 家庭",
                "category": "纪录综艺",
                "tags": [
                        "校园霸凌",
                        "抑郁症",
                        "日记",
                        "时空对照"
                ],
                "url": "movie-589.html",
                "cover": "139.jpg"
        },
        {
                "title": "飞象过河",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 喜剧 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "港式无厘头",
                        "象棋杀局",
                        "跨国追捕",
                        "反派洗白",
                        "老港片情怀"
                ],
                "url": "movie-590.html",
                "cover": "140.jpg"
        },
        {
                "title": "绝对权力",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "政治 / 反腐 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "官场",
                        "权力游戏",
                        "反腐",
                        "双面人"
                ],
                "url": "movie-591.html",
                "cover": "141.jpg"
        },
        {
                "title": "衰鬼船长",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧，奇幻，冒险",
                "category": "爱情家庭",
                "tags": [
                        "诅咒",
                        "海盗",
                        "搞笑",
                        "水下世界"
                ],
                "url": "movie-592.html",
                "cover": "142.jpg"
        },
        {
                "title": "狗舍",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 社会",
                "category": "日韩精选",
                "tags": [
                        "流浪狗收容站",
                        "底层群像",
                        "黑色幽默",
                        "多线叙事"
                ],
                "url": "movie-593.html",
                "cover": "143.jpg"
        },
        {
                "title": "化身",
                "year": "2022",
                "region": "日本",
                "type": "电影",
                "genre": "科幻, 悬疑",
                "category": "高分片单",
                "tags": [
                        "虚拟现实",
                        "意识上传",
                        "伦理",
                        "烧脑",
                        "日式"
                ],
                "url": "movie-594.html",
                "cover": "144.jpg"
        },
        {
                "title": "扑朔迷离",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 烧脑",
                "category": "动作冒险",
                "tags": [
                        "剧本杀式",
                        "密室",
                        "反转反转再反转",
                        "全员恶人"
                ],
                "url": "movie-595.html",
                "cover": "145.jpg"
        },
        {
                "title": "这里",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "动作冒险",
                "tags": [
                        "方言电影",
                        "地域",
                        "归乡",
                        "传承"
                ],
                "url": "movie-596.html",
                "cover": "146.jpg"
        },
        {
                "title": "天外魔花",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "科幻，恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "外星寄生",
                        "小镇疑云",
                        "身体恐怖"
                ],
                "url": "movie-597.html",
                "cover": "147.jpg"
        },
        {
                "title": "我家的故事",
                "year": "2021",
                "region": "日本",
                "type": "剧集",
                "genre": "家庭 / 喜剧",
                "category": "纪录综艺",
                "tags": [
                        "摔角手",
                        "养老介护",
                        "搞笑温情"
                ],
                "url": "movie-598.html",
                "cover": "148.jpg"
        },
        {
                "title": "磨坊女人",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情",
                "category": "纪录综艺",
                "tags": [
                        "农村",
                        "女性",
                        "年代",
                        "坚韧"
                ],
                "url": "movie-599.html",
                "cover": "149.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 后天美女 穿梭阴阳界1999 花园宝宝 姐妹会大屠杀 王室绯闻守则 来电狂响 法国万岁 错过爱情 狼群出动 玲音 寂静之海 清洁工第三季 少女地球守护者 再见，戈洛温 庞妮·塞尔文 掌门低调点 动态漫第一季 森林深处 娜娜：逝水年华 布拉格练习曲 红潮怒吼",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "悬疑惊悚",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-600.html",
                "cover": "150.jpg"
        },
        {
                "title": "女人寻春",
                "year": "2008",
                "region": "中国台湾",
                "type": "电影",
                "genre": "文艺，爱情，公路，家庭",
                "category": "纪录综艺",
                "tags": [
                        "中年女性",
                        "自我觉醒",
                        "海岸旅行",
                        "旧情回望",
                        "温柔修补"
                ],
                "url": "movie-601.html",
                "cover": "1.jpg"
        },
        {
                "title": "超级大片",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 喜剧",
                "category": "日韩精选",
                "tags": [
                        "伪纪录片",
                        "片场",
                        "爆炸",
                        "乌龙",
                        "讽刺"
                ],
                "url": "movie-602.html",
                "cover": "2.jpg"
        },
        {
                "title": "少年之名铁勺记事簿",
                "year": "2022",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "青春 / 成长",
                "category": "纪录综艺",
                "tags": [
                        "农村",
                        "少年",
                        "教育",
                        "真实改编"
                ],
                "url": "movie-603.html",
                "cover": "3.jpg"
        },
        {
                "title": "魔术的耳语",
                "year": "2024",
                "region": "日本",
                "type": "电视剧",
                "genre": "悬疑，奇幻",
                "category": "欧美热播",
                "tags": [
                        "听觉魔术",
                        "精神操控",
                        "三集反转"
                ],
                "url": "movie-604.html",
                "cover": "4.jpg"
        },
        {
                "title": "约会规则第五季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧 / 爱情",
                "category": "悬疑惊悚",
                "tags": [
                        "约会规则",
                        "情景喜剧",
                        "职场恋情",
                        "搞笑日常"
                ],
                "url": "movie-605.html",
                "cover": "5.jpg"
        },
        {
                "title": "敷唤爱情，要有伴！",
                "year": "2024",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "喜剧, 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "面膜",
                        "闺蜜",
                        "换脸",
                        "都市",
                        "搞笑"
                ],
                "url": "movie-606.html",
                "cover": "6.jpg"
        },
        {
                "title": "初恋那件小事",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "青春 / 爱情",
                "category": "华语佳作",
                "tags": [
                        "校园",
                        "暗恋",
                        "双向奔赴",
                        "十年",
                        "成长"
                ],
                "url": "movie-607.html",
                "cover": "7.jpg"
        },
        {
                "title": "太极粤语",
                "year": "2008",
                "region": "香港",
                "type": "剧集",
                "genre": "动作， 武侠， 剧情",
                "category": "欧美热播",
                "tags": [
                        "赵文卓",
                        "太极拳",
                        "民国武行"
                ],
                "url": "movie-608.html",
                "cover": "8.jpg"
        },
        {
                "title": "一屋之主",
                "year": "2023",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "密室",
                        "房东怪谈",
                        "都市寓言"
                ],
                "url": "movie-609.html",
                "cover": "9.jpg"
        },
        {
                "title": "牛妈妈与乌卒卒",
                "year": "2025",
                "region": "马来西亚 / 新加坡",
                "type": "电影",
                "genre": "喜剧 / 奇幻 / 家庭",
                "category": "纪录综艺",
                "tags": [
                        "南洋",
                        "童趣",
                        "民间传说",
                        "环保",
                        "怪兽"
                ],
                "url": "movie-610.html",
                "cover": "10.jpg"
        },
        {
                "title": "来来往往",
                "year": "1999",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 家庭 / 年代",
                "category": "日韩精选",
                "tags": [
                        "改革开放",
                        "婚姻变迁",
                        "中国式家庭",
                        "经典"
                ],
                "url": "movie-611.html",
                "cover": "11.jpg"
        },
        {
                "title": "一只想变成汉堡的小牛",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动画/喜剧/家庭/奇幻",
                "category": "华语佳作",
                "tags": [
                        "成长",
                        "亲情",
                        "美食",
                        "牧场",
                        "友情",
                        "追梦"
                ],
                "url": "movie-612.html",
                "cover": "12.jpg"
        },
        {
                "title": "摩洛哥之路",
                "year": "2025",
                "region": "法国 / 摩洛哥",
                "type": "电影",
                "genre": "冒险 / 家庭",
                "category": "爱情家庭",
                "tags": [
                        "公路片",
                        "父女",
                        "沙漠",
                        "修复"
                ],
                "url": "movie-613.html",
                "cover": "13.jpg"
        },
        {
                "title": "街头霸王：暗杀拳",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "动作、犯罪、惊悚",
                "category": "亚洲经典",
                "tags": [
                        "格斗家",
                        "暗杀组织",
                        "师徒反目",
                        "热血",
                        "残酷格斗"
                ],
                "url": "movie-614.html",
                "cover": "14.jpg"
        },
        {
                "title": "全彩少年法老",
                "year": "2026",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "冒险",
                "category": "华语佳作",
                "tags": [
                        "历史幻想",
                        "少年热血",
                        "考古"
                ],
                "url": "movie-615.html",
                "cover": "15.jpg"
        },
        {
                "title": "玫瑰的战争",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 爱情 / 悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "女性觉醒",
                        "商战",
                        "复仇",
                        "反转"
                ],
                "url": "movie-616.html",
                "cover": "16.jpg"
        },
        {
                "title": "艾迪船长",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 冒险",
                "category": "动作冒险",
                "tags": [
                        "航海",
                        "家庭",
                        "救赎",
                        "风暴",
                        "遗愿"
                ],
                "url": "movie-617.html",
                "cover": "17.jpg"
        },
        {
                "title": "陆军特战队",
                "year": "2022",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "军旅 / 动作",
                "category": "亚洲经典",
                "tags": [
                        "特种兵",
                        "实战演习",
                        "兄弟连",
                        "热血"
                ],
                "url": "movie-618.html",
                "cover": "18.jpg"
        },
        {
                "title": "维琴河第四季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 爱情",
                "category": "欧美热播",
                "tags": [
                        "小镇",
                        "治愈",
                        "医疗",
                        "情感修复",
                        "家庭秘密"
                ],
                "url": "movie-619.html",
                "cover": "19.jpg"
        },
        {
                "title": "长剑相思",
                "year": "2019",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "武侠 / 古装 / 爱情 / 权谋",
                "category": "爱情家庭",
                "tags": [
                        "门派恩怨",
                        "江湖追凶",
                        "失忆剑客",
                        "旧约重逢",
                        "大义"
                ],
                "url": "movie-620.html",
                "cover": "20.jpg"
        },
        {
                "title": "诡异酒楼",
                "year": "2024",
                "region": "中国内地",
                "type": "电影",
                "genre": "悬疑 / 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "循环",
                        "民国",
                        "酒楼怪谈"
                ],
                "url": "movie-621.html",
                "cover": "21.jpg"
        },
        {
                "title": "狮子护卫队第一季",
                "year": "2023",
                "region": "美国",
                "type": "动画剧集",
                "genre": "冒险, 家庭, 动作",
                "category": "高分片单",
                "tags": [
                        "动物",
                        "成长",
                        "团队合作",
                        "迪士尼风格"
                ],
                "url": "movie-622.html",
                "cover": "22.jpg"
        },
        {
                "title": "心碎的梦想",
                "year": "2023",
                "region": "印度",
                "type": "电影",
                "genre": "歌舞 / 剧情",
                "category": "高分片单",
                "tags": [
                        "宝莱坞",
                        "励志",
                        "底层",
                        "音乐",
                        "催泪"
                ],
                "url": "movie-623.html",
                "cover": "23.jpg"
        },
        {
                "title": "变身侠阿奔第二季",
                "year": "2023",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻, 动画, 冒险",
                "category": "喜剧治愈",
                "tags": [
                        "外星英雄",
                        "变身",
                        "少年",
                        "宇宙"
                ],
                "url": "movie-624.html",
                "cover": "24.jpg"
        },
        {
                "title": "其他人",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑 / 心理 / 家庭",
                "category": "华语佳作",
                "tags": [
                        "公寓谜案",
                        "身份错位",
                        "丧亲创伤",
                        "记忆迷宫",
                        "人际恐惧"
                ],
                "url": "movie-625.html",
                "cover": "25.jpg"
        },
        {
                "title": "亚当斯一家的价值观",
                "year": "1993",
                "region": "美国",
                "type": "喜剧电影",
                "genre": "黑色喜剧, 家庭, 恐怖喜剧, 荒诞, 讽刺",
                "category": "亚洲经典",
                "tags": [
                        "怪诞家庭",
                        "夏令营风波",
                        "婴儿危机",
                        "家族幽默",
                        "价值冲突"
                ],
                "url": "movie-626.html",
                "cover": "26.jpg"
        },
        {
                "title": "反恐特警组第七季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "动作, 犯罪, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "特警",
                        "团队作战",
                        "高空突袭",
                        "家庭与使命冲突"
                ],
                "url": "movie-627.html",
                "cover": "27.jpg"
        },
        {
                "title": "风华绝代",
                "year": "2019",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情, 历史",
                "category": "喜剧治愈",
                "tags": [
                        "民国",
                        "戏曲",
                        "女性成长",
                        "家国情怀"
                ],
                "url": "movie-628.html",
                "cover": "28.jpg"
        },
        {
                "title": "蓦然回首",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "亚洲经典",
                "tags": [
                        "回忆",
                        "父女",
                        "和解",
                        "时光",
                        "催泪"
                ],
                "url": "movie-629.html",
                "cover": "29.jpg"
        },
        {
                "title": "龙之信条",
                "year": "2023",
                "region": "日本",
                "type": "动画剧集",
                "genre": "奇幻、冒险、动作",
                "category": "亚洲经典",
                "tags": [
                        "屠龙",
                        "诅咒",
                        "宿命",
                        "牺牲",
                        "自我救赎"
                ],
                "url": "movie-630.html",
                "cover": "30.jpg"
        },
        {
                "title": "史瑞克快乐4神仙",
                "year": "2010",
                "region": "美国",
                "type": "电影",
                "genre": "动画, 喜剧, 奇幻, 冒险",
                "category": "华语佳作",
                "tags": [
                        "平行世界",
                        "契约魔法",
                        "合家欢",
                        "经典续作"
                ],
                "url": "movie-631.html",
                "cover": "31.jpg"
        },
        {
                "title": "渡河！渡河！",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争, 历史, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "渡江战役",
                        "小人物",
                        "兄弟情",
                        "牺牲",
                        "信仰"
                ],
                "url": "movie-632.html",
                "cover": "32.jpg"
        },
        {
                "title": "女孩2",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "喜剧治愈",
                "tags": [
                        "成长",
                        "变性",
                        "亲情"
                ],
                "url": "movie-633.html",
                "cover": "33.jpg"
        },
        {
                "title": "辣妹刺客3",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "动作, 喜剧",
                "category": "日韩精选",
                "tags": [
                        "女杀手",
                        "校园卧底",
                        "反差萌",
                        "爽片"
                ],
                "url": "movie-634.html",
                "cover": "34.jpg"
        },
        {
                "title": "银河守护队3",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 科幻, 喜剧, 冒险",
                "category": "华语佳作",
                "tags": [
                        "漫威",
                        "太空",
                        "搞笑",
                        "火箭浣熊"
                ],
                "url": "movie-635.html",
                "cover": "35.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 让我看看鬼 非人哉 愿赌服输 长辈 雨色可可第四季 传宗接代 母语 采珠女郎 绿里奇迹 毒蕊花 狐王传说 变形金刚3 制造 亲爱的再见 大眼睛 战栗幽灵 识骨寻踪第五季 复活的小红帽 最佳闺蜜 爱上大明星",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "纪录综艺",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-636.html",
                "cover": "36.jpg"
        },
        {
                "title": "康定情歌2004",
                "year": "2004",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情, 音乐, 剧情",
                "category": "动作冒险",
                "tags": [
                        "甘孜",
                        "支教",
                        "民歌",
                        "绝恋",
                        "时代悲剧"
                ],
                "url": "movie-637.html",
                "cover": "37.jpg"
        },
        {
                "title": "亿万第四季",
                "year": "2019",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情, 金融",
                "category": "纪录综艺",
                "tags": [
                        "资本游戏",
                        "权力博弈",
                        "智商对决"
                ],
                "url": "movie-638.html",
                "cover": "38.jpg"
        },
        {
                "title": "巴莱厄斯喷泉",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "奇幻, 悬疑",
                "category": "日韩精选",
                "tags": [
                        "许愿喷泉",
                        "代价",
                        "诅咒",
                        "小镇秘密",
                        "多线叙事"
                ],
                "url": "movie-639.html",
                "cover": "39.jpg"
        },
        {
                "title": "蓝色恐惧",
                "year": "1998",
                "region": "日本",
                "type": "电影",
                "genre": "动画, 心理惊悚",
                "category": "欧美热播",
                "tags": [
                        "今敏",
                        "精神分裂",
                        "偶像",
                        "悬疑"
                ],
                "url": "movie-640.html",
                "cover": "40.jpg"
        },
        {
                "title": "前门楼子九丈九",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "年代，悬疑，家族",
                "category": "喜剧治愈",
                "tags": [
                        "京味",
                        "古玩",
                        "民国",
                        "恩怨"
                ],
                "url": "movie-641.html",
                "cover": "41.jpg"
        },
        {
                "title": "母亲的双眼",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖 / 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "反转",
                        "母爱",
                        "犯罪心理",
                        "高能"
                ],
                "url": "movie-642.html",
                "cover": "42.jpg"
        },
        {
                "title": "我爱有情郎",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 喜剧 / 奇幻",
                "category": "爱情家庭",
                "tags": [
                        "婚介所",
                        "月老",
                        "前世今生",
                        "港式无厘头"
                ],
                "url": "movie-643.html",
                "cover": "43.jpg"
        },
        {
                "title": "野花",
                "year": "2026",
                "region": "大陆",
                "type": "Movie",
                "genre": "剧情, 文艺, 家庭",
                "category": "高分片单",
                "tags": [
                        "留守儿童",
                        "女性成长",
                        "乡村",
                        "贾樟柯风格"
                ],
                "url": "movie-644.html",
                "cover": "44.jpg"
        },
        {
                "title": "再见枕边人国语",
                "year": "2024",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "悬疑，爱情，心理惊悚",
                "category": "高分片单",
                "tags": [
                        "失忆",
                        "丈夫是凶手",
                        "每晚重置"
                ],
                "url": "movie-645.html",
                "cover": "45.jpg"
        },
        {
                "title": "雪山大崩溃",
                "year": "2020",
                "region": "日本",
                "type": "电影",
                "genre": "灾难, 惊悚",
                "category": "日韩精选",
                "tags": [
                        "雪山",
                        "救援",
                        "生存",
                        "极限"
                ],
                "url": "movie-646.html",
                "cover": "46.jpg"
        },
        {
                "title": "哥哥的女友粤语",
                "year": "2004",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 家庭 / 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "兄妹误会",
                        "港式生活",
                        "旧区屋邨",
                        "感情试探",
                        "家庭和解"
                ],
                "url": "movie-647.html",
                "cover": "47.jpg"
        },
        {
                "title": "长腿间谍",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧, 谍战剧",
                "genre": "谍战, 悬疑, 动作",
                "category": "亚洲经典",
                "tags": [
                        "女性间谍",
                        "模特伪装",
                        "民国上海",
                        "身份谜题"
                ],
                "url": "movie-648.html",
                "cover": "48.jpg"
        },
        {
                "title": "权力界",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "政治、惊悚",
                "category": "日韩精选",
                "tags": [
                        "白宫内斗",
                        "幕僚长",
                        "暗箱操作",
                        "年度神剧"
                ],
                "url": "movie-649.html",
                "cover": "49.jpg"
        },
        {
                "title": "男友半糖半盐",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情、喜剧",
                "category": "纪录综艺",
                "tags": [
                        "饮食男女",
                        "都市情感",
                        "口味隐喻",
                        "轻喜剧"
                ],
                "url": "movie-650.html",
                "cover": "50.jpg"
        },
        {
                "title": "妾意如绵",
                "year": "2018",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装 / 家庭",
                "category": "动作冒险",
                "tags": [
                        "民国宅斗",
                        "女性坚韧",
                        "刺绣文化",
                        "逆袭"
                ],
                "url": "movie-651.html",
                "cover": "51.jpg"
        },
        {
                "title": "少年邓石如",
                "year": "2013",
                "region": "中国",
                "type": "青春剧情片",
                "genre": "成长, 悬疑, 都市",
                "category": "华语佳作",
                "tags": [
                        "回忆档案",
                        "兄弟情义",
                        "时间线",
                        "失踪真相",
                        "修表隐喻"
                ],
                "url": "movie-652.html",
                "cover": "52.jpg"
        },
        {
                "title": "魔道祖师",
                "year": "2018",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "动画 / 古装 / 奇幻",
                "category": "日韩精选",
                "tags": [
                        "修仙",
                        "悬疑",
                        "双男主",
                        "义城",
                        "鬼道"
                ],
                "url": "movie-653.html",
                "cover": "53.jpg"
        },
        {
                "title": "事儿",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情、黑色幽默",
                "category": "日韩精选",
                "tags": [
                        "小人物",
                        "荒诞",
                        "体制内",
                        "官僚主义"
                ],
                "url": "movie-654.html",
                "cover": "54.jpg"
        },
        {
                "title": "楼台惊梦",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "惊悚 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "古宅",
                        "戏班",
                        "戏曲",
                        "轮回",
                        "民俗"
                ],
                "url": "movie-655.html",
                "cover": "55.jpg"
        },
        {
                "title": "我本善良粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情 / 犯罪 / 家族",
                "category": "悬疑惊悚",
                "tags": [
                        "卧底",
                        "父子情",
                        "黑帮",
                        "港风"
                ],
                "url": "movie-656.html",
                "cover": "56.jpg"
        },
        {
                "title": "炼体十万层：都市篇",
                "year": "2028",
                "region": "中国",
                "type": "剧集",
                "genre": "动作 / 奇幻 / 都市",
                "category": "高分片单",
                "tags": [
                        "修仙",
                        "反差爽剧",
                        "职场"
                ],
                "url": "movie-657.html",
                "cover": "57.jpg"
        },
        {
                "title": "逃跑",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚 / 悬疑 / 动作",
                "category": "纪录综艺",
                "tags": [
                        "密室",
                        "反转",
                        "母女关系",
                        "心理控制"
                ],
                "url": "movie-658.html",
                "cover": "58.jpg"
        },
        {
                "title": "时光遗痕",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "剧情、奇幻",
                "category": "高分片单",
                "tags": [
                        "时间回溯",
                        "母女关系",
                        "遗憾修复",
                        "哲学温情",
                        "慢叙事"
                ],
                "url": "movie-659.html",
                "cover": "59.jpg"
        },
        {
                "title": "笑傲江湖2000",
                "year": "2000",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 武侠 / 奇幻",
                "category": "悬疑惊悚",
                "tags": [
                        "赛博朋克",
                        "武侠解构",
                        "东方幻想",
                        "邪典",
                        "重制经典"
                ],
                "url": "movie-660.html",
                "cover": "60.jpg"
        },
        {
                "title": "未请自来",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "惊悚 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "智能家居入侵",
                        "心理操控",
                        "科幻惊悚",
                        "隐私泄露",
                        "反转"
                ],
                "url": "movie-661.html",
                "cover": "61.jpg"
        },
        {
                "title": "蓝色档案2008",
                "year": "2008",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑, 谍战, 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "民国",
                        "特工",
                        "解密",
                        "双面间谍",
                        "黑帮"
                ],
                "url": "movie-662.html",
                "cover": "62.jpg"
        },
        {
                "title": "萝美",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情, 爱情, 喜剧",
                "category": "高分片单",
                "tags": [
                        "单身女性",
                        "假戏真做",
                        "都市生活",
                        "温情"
                ],
                "url": "movie-663.html",
                "cover": "63.jpg"
        },
        {
                "title": "拼了",
                "year": "2027",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 体育 / 励志",
                "category": "爱情家庭",
                "tags": [
                        "MMA",
                        "草根逆袭",
                        "港式热血"
                ],
                "url": "movie-664.html",
                "cover": "64.jpg"
        },
        {
                "title": "饕餮记",
                "year": "2020",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "奇幻, 古装, 爱情",
                "category": "纪录综艺",
                "tags": [
                        "神话",
                        "美食",
                        "妖兽",
                        "甜虐"
                ],
                "url": "movie-665.html",
                "cover": "65.jpg"
        },
        {
                "title": "2025七夕奇妙游",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 奇幻 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "单元故事",
                        "节日IP",
                        "神话新说"
                ],
                "url": "movie-666.html",
                "cover": "66.jpg"
        },
        {
                "title": "三剑客新传",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "冒险, 动作, 历史",
                "category": "爱情家庭",
                "tags": [
                        "侠盗",
                        "女性力量",
                        "热兵器"
                ],
                "url": "movie-667.html",
                "cover": "67.jpg"
        },
        {
                "title": "无心法师2",
                "year": "2017",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑，奇幻",
                "category": "高分片单",
                "tags": [
                        "民国",
                        "捉妖",
                        "失忆",
                        "不死之身",
                        "阴阳师"
                ],
                "url": "movie-668.html",
                "cover": "68.jpg"
        },
        {
                "title": "17.3关于性",
                "year": "2020",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情 / 爱情 / 教育",
                "category": "动作冒险",
                "tags": [
                        "性教育",
                        "少女",
                        "真实",
                        "治愈"
                ],
                "url": "movie-669.html",
                "cover": "69.jpg"
        },
        {
                "title": "魔术师：不可能的生活",
                "year": "2026",
                "region": "西班牙",
                "type": "电影",
                "genre": "悬疑，奇幻",
                "category": "华语佳作",
                "tags": [
                        "魔术",
                        "虚假",
                        "真相"
                ],
                "url": "movie-670.html",
                "cover": "70.jpg"
        },
        {
                "title": "艾蜜丽的五件事",
                "year": "2023",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "都市",
                        "女性",
                        "成长",
                        "温情"
                ],
                "url": "movie-671.html",
                "cover": "71.jpg"
        },
        {
                "title": "大博弈",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情, 商战",
                "category": "华语佳作",
                "tags": [
                        "商战",
                        "金融",
                        "反腐",
                        "智斗",
                        "职场"
                ],
                "url": "movie-672.html",
                "cover": "72.jpg"
        },
        {
                "title": "双生陌生人粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑， 奇幻",
                "category": "高分片单",
                "tags": [
                        "替身",
                        "身份错位",
                        "都市传说"
                ],
                "url": "movie-673.html",
                "cover": "73.jpg"
        },
        {
                "title": "宿命论者",
                "year": "2025",
                "region": "英国 / 法国",
                "type": "电影",
                "genre": "科幻 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "时间循环",
                        "因果关系",
                        "哲学",
                        "烧脑"
                ],
                "url": "movie-674.html",
                "cover": "74.jpg"
        },
        {
                "title": "追击者",
                "year": "2008",
                "region": "韩国",
                "type": "电影",
                "genre": "犯罪, 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "连环杀手",
                        "写实暴力",
                        "社会批判"
                ],
                "url": "movie-675.html",
                "cover": "75.jpg"
        },
        {
                "title": "神秘匹兹堡",
                "year": "1988",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 同性",
                "category": "纪录综艺",
                "tags": [
                        "文学改编",
                        "成长",
                        "城市",
                        "迷惘",
                        "三角恋"
                ],
                "url": "movie-676.html",
                "cover": "76.jpg"
        },
        {
                "title": "蛇草莓",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "家庭 / 剧情 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "家族秘密",
                        "返乡",
                        "植物隐喻",
                        "人性之恶",
                        "缓慢燃烧"
                ],
                "url": "movie-677.html",
                "cover": "77.jpg"
        },
        {
                "title": "令和元年版怪谈牡丹灯笼",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖 / 爱情 / 古装",
                "category": "华语佳作",
                "tags": [
                        "经典改编",
                        "人鬼情",
                        "都市",
                        "悬疑"
                ],
                "url": "movie-678.html",
                "cover": "78.jpg"
        },
        {
                "title": "大麻烦家",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "诈骗母女",
                        "黑色幽默",
                        "FBI",
                        "公路片"
                ],
                "url": "movie-679.html",
                "cover": "79.jpg"
        },
        {
                "title": "雄鹰聚会",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "动作 / 战争 / 历史",
                "category": "欧美热播",
                "tags": [
                        "抗日战争",
                        "飞行员",
                        "兄弟情",
                        "空战",
                        "热血"
                ],
                "url": "movie-680.html",
                "cover": "80.jpg"
        },
        {
                "title": "至善如金",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情， 喜剧， 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "黑色幽默",
                        "彩礼",
                        "农村",
                        "人情社会",
                        "荒诞"
                ],
                "url": "movie-681.html",
                "cover": "81.jpg"
        },
        {
                "title": "总路线",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 历史 / 悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "年代",
                        "公路",
                        "调查",
                        "集体记忆",
                        "乡镇变迁"
                ],
                "url": "movie-682.html",
                "cover": "82.jpg"
        },
        {
                "title": "蝴蝶效应国语",
                "year": "2014",
                "region": "美国 / 中国大陆 (配音版)",
                "type": "电影",
                "genre": "悬疑 / 科幻",
                "category": "亚洲经典",
                "tags": [
                        "时空穿越",
                        "记忆修改",
                        "悲剧",
                        "重新剪辑"
                ],
                "url": "movie-683.html",
                "cover": "83.jpg"
        },
        {
                "title": "阿尔法 (2019年电影)",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "动作",
                "category": "华语佳作",
                "tags": [
                        "特工",
                        "刺杀",
                        "阴谋",
                        "反转"
                ],
                "url": "movie-684.html",
                "cover": "84.jpg"
        },
        {
                "title": "以太之子",
                "year": "2027",
                "region": "美国 / 德国",
                "type": "电影",
                "genre": "科幻 / 悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "量子意识",
                        "超能力儿童",
                        "政府阴谋",
                        "烧脑"
                ],
                "url": "movie-685.html",
                "cover": "85.jpg"
        },
        {
                "title": "德水里五兄弟",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "喜剧动作",
                "category": "欧美热播",
                "tags": [
                        "家族团结",
                        "拆迁抗争",
                        "奇葩兄弟"
                ],
                "url": "movie-686.html",
                "cover": "86.jpg"
        },
        {
                "title": "兰波逝世的故乡",
                "year": "2018",
                "region": "法国",
                "type": "电影",
                "genre": "传记剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "诗人",
                        "怀旧",
                        "法国",
                        "文艺"
                ],
                "url": "movie-687.html",
                "cover": "87.jpg"
        },
        {
                "title": "狂欢节",
                "year": "2021",
                "region": "巴西",
                "type": "电影",
                "genre": "喜剧，剧情",
                "category": "欧美热播",
                "tags": [
                        "女性主义",
                        "里约热内卢",
                        "网红"
                ],
                "url": "movie-688.html",
                "cover": "88.jpg"
        },
        {
                "title": "替天行盗",
                "year": "2017",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑、犯罪、剧情",
                "category": "亚洲经典",
                "tags": [
                        "高智商犯罪",
                        "以盗制恶",
                        "侠盗题材",
                        "单元剧",
                        "现实讽刺"
                ],
                "url": "movie-689.html",
                "cover": "89.jpg"
        },
        {
                "title": "舞台怪杰",
                "year": "2023",
                "region": "英国",
                "type": "剧集",
                "genre": "悬疑，惊悚",
                "category": "纪录综艺",
                "tags": [
                        "剧院",
                        "替身",
                        "模仿",
                        "身份"
                ],
                "url": "movie-690.html",
                "cover": "90.jpg"
        },
        {
                "title": "午夜梦回1959",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑 / 奇幻 / 年代",
                "category": "欧美热播",
                "tags": [
                        "穿越",
                        "年代",
                        "历史",
                        "记忆",
                        "理想"
                ],
                "url": "movie-691.html",
                "cover": "91.jpg"
        },
        {
                "title": "瞒天杀机",
                "year": "2024",
                "region": "美国",
                "type": "超自然悬疑电影",
                "genre": "超自然悬疑, 公共阴谋, 生态惊悚",
                "category": "华语佳作",
                "tags": [
                        "雷暴",
                        "气象站",
                        "失踪",
                        "企业掩护",
                        "自白录像"
                ],
                "url": "movie-692.html",
                "cover": "92.jpg"
        },
        {
                "title": "临时奶爸",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 家庭",
                "category": "高分片单",
                "tags": [
                        "萌娃",
                        "反套路",
                        "成长"
                ],
                "url": "movie-693.html",
                "cover": "93.jpg"
        },
        {
                "title": "命运派对",
                "year": "2025",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑、惊悚、密室",
                "category": "华语佳作",
                "tags": [
                        "剧本杀",
                        "全员恶人",
                        "别墅暴风雪山庄",
                        "时间循环"
                ],
                "url": "movie-694.html",
                "cover": "94.jpg"
        },
        {
                "title": "掉链子刑警",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧 / 悬疑",
                "category": "欧美热播",
                "tags": [
                        "废柴警察",
                        "破案乌龙",
                        "黑色幽默"
                ],
                "url": "movie-695.html",
                "cover": "95.jpg"
        },
        {
                "title": "欲海妖僧",
                "year": "1990",
                "region": "中国香港",
                "type": "电影",
                "genre": "情色，奇幻，古装",
                "category": "动作冒险",
                "tags": [
                        "风月片",
                        "降头",
                        "禁忌",
                        "港产邪典",
                        "人性贪欲"
                ],
                "url": "movie-696.html",
                "cover": "96.jpg"
        },
        {
                "title": "武庚纪第四季",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集 / 动画",
                "genre": "奇幻 / 战斗 / 神话",
                "category": "华语佳作",
                "tags": [
                        "国漫崛起",
                        "封神演义改编",
                        "热血战斗",
                        "神族内战"
                ],
                "url": "movie-697.html",
                "cover": "97.jpg"
        },
        {
                "title": "俄罗斯套",
                "year": "2025",
                "region": "俄罗斯",
                "type": "剧集",
                "genre": "悬疑, 犯罪, 惊悚",
                "category": "日韩精选",
                "tags": [
                        "嵌套叙事",
                        "凶宅",
                        "模仿犯"
                ],
                "url": "movie-698.html",
                "cover": "98.jpg"
        },
        {
                "title": "试着死了一次",
                "year": "2020",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧/奇幻",
                "category": "动作冒险",
                "tags": [
                        "濒死体验",
                        "灵魂出窍",
                        "家族和解",
                        "日式中二"
                ],
                "url": "movie-699.html",
                "cover": "99.jpg"
        },
        {
                "title": "我曾来过",
                "year": "2020",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑, 科幻",
                "category": "爱情家庭",
                "tags": [
                        "时空轮回",
                        "谋杀",
                        "侦探",
                        "低配版信条"
                ],
                "url": "movie-700.html",
                "cover": "100.jpg"
        },
        {
                "title": "五虎屠龙",
                "year": "1972",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，武侠",
                "category": "爱情家庭",
                "tags": [
                        "复仇",
                        "兄弟情",
                        "江湖",
                        "武术"
                ],
                "url": "movie-701.html",
                "cover": "101.jpg"
        },
        {
                "title": "菜鸟老警第六季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 犯罪 / 动作",
                "category": "日韩精选",
                "tags": [
                        "警匪",
                        "年龄差",
                        "老当益壮"
                ],
                "url": "movie-702.html",
                "cover": "102.jpg"
        },
        {
                "title": "纱",
                "year": "2001",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 情色",
                "category": "亚洲经典",
                "tags": [
                        "禁忌之恋",
                        "反转结局",
                        "感官世界"
                ],
                "url": "movie-703.html",
                "cover": "103.jpg"
        },
        {
                "title": "亲密朋友",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情、心理惊悚",
                "category": "亚洲经典",
                "tags": [
                        "友情",
                        "替身",
                        "控制",
                        "反转"
                ],
                "url": "movie-704.html",
                "cover": "104.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 戈雅的战争恶魔 真正朋友 风暴必定会过去 海浴春色 纽瓦克众圣 影子保镖 剑舞 灵异咒 巴萨之梦 最后精武门 变态城 臆想魔友 名将之后 明星大侦探第六季 猫的战争 突袭2：暴徒 历史的审判 恐惧中的恐惧 疾风劲射 石狮往事之掷茭情缘",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "动作冒险",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-705.html",
                "cover": "105.jpg"
        },
        {
                "title": "大明悬案录之泥犁篇",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装, 悬疑, 探案",
                "category": "动作冒险",
                "tags": [
                        "明朝",
                        "锦衣卫",
                        "六道轮回",
                        "宗教恐怖",
                        "本格推理"
                ],
                "url": "movie-706.html",
                "cover": "106.jpg"
        },
        {
                "title": "丑女贝蒂：故事继续第二季",
                "year": "2025",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情, 喜剧, 时尚",
                "category": "日韩精选",
                "tags": [
                        "回归",
                        "职场",
                        "成长",
                        "怀旧"
                ],
                "url": "movie-707.html",
                "cover": "107.jpg"
        },
        {
                "title": "希望之旅2017",
                "year": "2017",
                "region": "中国大陆",
                "type": "电影",
                "genre": "公路 / 喜剧 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "公路片",
                        "支教",
                        "治愈",
                        "社会现实"
                ],
                "url": "movie-708.html",
                "cover": "108.jpg"
        },
        {
                "title": "姬姥的青春期",
                "year": "2023",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "青春 / 同性 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "女同",
                        "校园",
                        "自我认同",
                        "轻喜剧"
                ],
                "url": "movie-709.html",
                "cover": "109.jpg"
        },
        {
                "title": "我说的都是真的",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 喜剧, 犯罪",
                "category": "高分片单",
                "tags": [
                        "狼来了式叙事",
                        "假预言家",
                        "黑色幽默",
                        "多线叙事"
                ],
                "url": "movie-710.html",
                "cover": "110.jpg"
        },
        {
                "title": "骑士出任务",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "喜剧 / 动作 / 古装",
                "category": "动作冒险",
                "tags": [
                        "废柴骑士",
                        "穿越现代",
                        "沙雕解压"
                ],
                "url": "movie-711.html",
                "cover": "111.jpg"
        },
        {
                "title": "人生一串第二季",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "纪录片",
                "category": "爱情家庭",
                "tags": [
                        "烧烤",
                        "市井",
                        "美食"
                ],
                "url": "movie-712.html",
                "cover": "112.jpg"
        },
        {
                "title": "西施",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装，历史，爱情",
                "category": "喜剧治愈",
                "tags": [
                        "春秋",
                        "卧底",
                        "女性史诗",
                        "权谋"
                ],
                "url": "movie-713.html",
                "cover": "113.jpg"
        },
        {
                "title": "哭泣女人的诅咒2019",
                "year": "2019",
                "region": "墨西哥 / 美国",
                "type": "电影",
                "genre": "恐怖",
                "category": "华语佳作",
                "tags": [
                        "民俗恐怖",
                        "女鬼",
                        "儿童",
                        "都市传说",
                        "温子仁"
                ],
                "url": "movie-714.html",
                "cover": "114.jpg"
        },
        {
                "title": "女人,有时是男人",
                "year": "2027",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情, 同性",
                "category": "爱情家庭",
                "tags": [
                        "性别",
                        "身份",
                        "传统",
                        "抗争"
                ],
                "url": "movie-715.html",
                "cover": "115.jpg"
        },
        {
                "title": "埃及王子",
                "year": "1998",
                "region": "美国",
                "type": "动画电影",
                "genre": "剧情，冒险，音乐",
                "category": "欧美热播",
                "tags": [
                        "圣经故事",
                        "摩西",
                        "兄弟反目",
                        "梦工厂巅峰"
                ],
                "url": "movie-716.html",
                "cover": "116.jpg"
        },
        {
                "title": "胭脂扣",
                "year": "1987",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 剧情 / 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "人鬼情未了",
                        "民国风华",
                        "痴情怨女",
                        "经典翻拍"
                ],
                "url": "movie-717.html",
                "cover": "117.jpg"
        },
        {
                "title": "亲爱的婚姻",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情、爱情、家庭",
                "category": "高分片单",
                "tags": [
                        "先婚后爱",
                        "职场夫妻",
                        "现实题材",
                        "成长"
                ],
                "url": "movie-718.html",
                "cover": "118.jpg"
        },
        {
                "title": "家庭电影",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情，家庭，伦理",
                "category": "华语佳作",
                "tags": [
                        "伪纪录",
                        "家庭录像",
                        "代际冲突",
                        "背叛"
                ],
                "url": "movie-719.html",
                "cover": "119.jpg"
        },
        {
                "title": "时之歌—花与焰的狂想诗",
                "year": "2024",
                "region": "日本",
                "type": "动画电影",
                "genre": "奇幻，音乐，冒险",
                "category": "欧美热播",
                "tags": [
                        "时间",
                        "音乐",
                        "双女主",
                        "末日",
                        "宿命"
                ],
                "url": "movie-720.html",
                "cover": "120.jpg"
        },
        {
                "title": "杀死萨拉查",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 战争",
                "category": "爱情家庭",
                "tags": [
                        "特种兵",
                        "猎杀",
                        "丛林战"
                ],
                "url": "movie-721.html",
                "cover": "121.jpg"
        },
        {
                "title": "爱情来了",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情, 奇幻, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "通感",
                        "都市",
                        "治愈",
                        "小清新"
                ],
                "url": "movie-722.html",
                "cover": "122.jpg"
        },
        {
                "title": "爱情大玩家",
                "year": "2024",
                "region": "韩国",
                "type": "电视剧",
                "genre": "爱情，喜剧，悬疑",
                "category": "高分片单",
                "tags": [
                        "约会软件",
                        "高智商恋爱",
                        "复仇",
                        "反套路",
                        "海王海后"
                ],
                "url": "movie-723.html",
                "cover": "123.jpg"
        },
        {
                "title": "缔灵爱之默水玲珑",
                "year": "2023",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "奇幻/爱情/冒险",
                "category": "爱情家庭",
                "tags": [
                        "灵体契约",
                        "水域秘境",
                        "双向守护",
                        "少女成长",
                        "古风奇幻",
                        "命纹"
                ],
                "url": "movie-724.html",
                "cover": "124.jpg"
        },
        {
                "title": "仪式（1971年电影）",
                "year": "1971",
                "region": "日本",
                "type": "电影",
                "genre": "剧情、恐怖",
                "category": "亚洲经典",
                "tags": [
                        "村落后裔",
                        "诅咒仪式",
                        "日式民俗怪谈"
                ],
                "url": "movie-725.html",
                "cover": "125.jpg"
        },
        {
                "title": "耶稣革命",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 历史 / 音乐",
                "category": "日韩精选",
                "tags": [
                        "嬉皮士运动",
                        "信仰复兴",
                        "青年文化",
                        "真实事件改编"
                ],
                "url": "movie-726.html",
                "cover": "126.jpg"
        },
        {
                "title": "速写建筑大师",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "传记, 剧情",
                "category": "高分片单",
                "tags": [
                        "建筑",
                        "孤独",
                        "天才"
                ],
                "url": "movie-727.html",
                "cover": "127.jpg"
        },
        {
                "title": "巅峰拍档第二十八季",
                "year": "2025",
                "region": "英国",
                "type": "剧集",
                "genre": "真人秀、冒险",
                "category": "纪录综艺",
                "tags": [
                        "汽车",
                        "挑战",
                        "南美"
                ],
                "url": "movie-728.html",
                "cover": "128.jpg"
        },
        {
                "title": "逃出电脑迷宫",
                "year": "1988",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "虚拟现实",
                        "黑客",
                        "八十年代"
                ],
                "url": "movie-729.html",
                "cover": "129.jpg"
        },
        {
                "title": "裸体列侬",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "剧情，音乐，传记",
                "category": "喜剧治愈",
                "tags": [
                        "约翰·列侬",
                        "艺术",
                        "精神世界",
                        "叛逆",
                        "真实改编"
                ],
                "url": "movie-730.html",
                "cover": "130.jpg"
        },
        {
                "title": "孤单又灿烂的神：鬼怪",
                "year": "2016",
                "region": "韩国",
                "type": "剧集",
                "genre": "奇幻, 爱情",
                "category": "亚洲经典",
                "tags": [
                        "鬼怪",
                        "阴间使者",
                        "前世今生",
                        "命运"
                ],
                "url": "movie-731.html",
                "cover": "131.jpg"
        },
        {
                "title": "童邪",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "恐怖/民俗",
                "category": "亚洲经典",
                "tags": [
                        "儿童邪典",
                        "傩戏",
                        "禁忌游戏"
                ],
                "url": "movie-732.html",
                "cover": "132.jpg"
        },
        {
                "title": "死亡计中计",
                "year": "1982",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "戏中戏",
                        "反转再反转",
                        "密室",
                        "话剧改编"
                ],
                "url": "movie-733.html",
                "cover": "133.jpg"
        },
        {
                "title": "金门女",
                "year": "1954",
                "region": "美国/中国台湾",
                "type": "电影",
                "genre": "剧情，历史",
                "category": "日韩精选",
                "tags": [
                        "侨乡",
                        "女性",
                        "苦情",
                        "移民",
                        "黑白片"
                ],
                "url": "movie-734.html",
                "cover": "134.jpg"
        },
        {
                "title": "花甲少年趣旅行第四季",
                "year": "2023",
                "region": "中国台湾",
                "type": "综艺",
                "genre": "真人秀，旅游，喜剧",
                "category": "高分片单",
                "tags": [
                        "代际碰撞",
                        "宝岛风情",
                        "户外实境",
                        "治愈搞笑"
                ],
                "url": "movie-735.html",
                "cover": "135.jpg"
        },
        {
                "title": "酸葡萄",
                "year": "2023",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情",
                "category": "日韩精选",
                "tags": [
                        "悬疑",
                        "复仇",
                        "社会",
                        "情感",
                        "人性"
                ],
                "url": "movie-736.html",
                "cover": "136.jpg"
        },
        {
                "title": "艾希曼",
                "year": "2023",
                "region": "德国 / 以色列",
                "type": "电影",
                "genre": "剧情, 历史, 传记",
                "category": "高分片单",
                "tags": [
                        "纳粹",
                        "战犯审判",
                        "平庸之恶",
                        "法庭戏",
                        "沉重"
                ],
                "url": "movie-737.html",
                "cover": "137.jpg"
        },
        {
                "title": "抱歉，谢谢",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "剧情， 家庭",
                "category": "爱情家庭",
                "tags": [
                        "亲子关系",
                        "和解",
                        "日记本"
                ],
                "url": "movie-738.html",
                "cover": "138.jpg"
        },
        {
                "title": "寻金记",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "冒险, 西部, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "寻宝",
                        "荒漠",
                        "贪婪",
                        "人性考验",
                        "生存"
                ],
                "url": "movie-739.html",
                "cover": "139.jpg"
        },
        {
                "title": "雪野金花",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "东北",
                        "女警",
                        "雪景美学",
                        "连环杀人",
                        "暴力美学"
                ],
                "url": "movie-740.html",
                "cover": "140.jpg"
        },
        {
                "title": "恋爱中的城市",
                "year": "2025",
                "region": "日本 / 法国",
                "type": "电影",
                "genre": "爱情 / 奇幻",
                "category": "华语佳作",
                "tags": [
                        "平行时空",
                        "城市规划师",
                        "告白诅咒",
                        "巴黎",
                        "地图"
                ],
                "url": "movie-741.html",
                "cover": "141.jpg"
        },
        {
                "title": "钟馗伏妖",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "奇幻 / 动作 / 古装",
                "category": "悬疑惊悚",
                "tags": [
                        "钟馗",
                        "捉妖",
                        "天庭阴谋",
                        "东方美学"
                ],
                "url": "movie-742.html",
                "cover": "142.jpg"
        },
        {
                "title": "你在天空彼岸",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "动画、奇幻、纯爱",
                "category": "爱情家庭",
                "tags": [
                        "新海诚风",
                        "异世界",
                        "催泪弹"
                ],
                "url": "movie-743.html",
                "cover": "143.jpg"
        },
        {
                "title": "直捣蜂窝的女孩",
                "year": "2009",
                "region": "瑞典",
                "type": "电影",
                "genre": "犯罪 / 悬疑 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "北欧 noir",
                        "女权复仇",
                        "间谍阴谋",
                        "法庭对决"
                ],
                "url": "movie-744.html",
                "cover": "144.jpg"
        },
        {
                "title": "大失恋。",
                "year": "1995",
                "region": "日本",
                "type": "电影",
                "genre": "爱情、剧情、群像",
                "category": "欧美热播",
                "tags": [
                        "分章节叙事",
                        "恋爱群像",
                        "都市男女",
                        "分手文化"
                ],
                "url": "movie-745.html",
                "cover": "145.jpg"
        },
        {
                "title": "红色呼叫铃",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "悬疑，恐怖，医疗",
                "category": "爱情家庭",
                "tags": [
                        "怪谈",
                        "医院",
                        "连环失踪",
                        "秘密实验"
                ],
                "url": "movie-746.html",
                "cover": "146.jpg"
        },
        {
                "title": "女鹿",
                "year": "2028",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 惊悚, 心理",
                "category": "爱情家庭",
                "tags": [
                        "山林传说",
                        "身份置换",
                        "心理创伤"
                ],
                "url": "movie-747.html",
                "cover": "147.jpg"
        },
        {
                "title": "小生怕羞",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 爱情",
                "category": "动作冒险",
                "tags": [
                        "港式喜剧",
                        "胆小",
                        "乌龙",
                        "追女仔"
                ],
                "url": "movie-748.html",
                "cover": "148.jpg"
        },
        {
                "title": "地狱少女",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑，奇幻，惊悚",
                "category": "华语佳作",
                "tags": [
                        "复仇",
                        "稻草人",
                        "都市传说",
                        "因果",
                        "黑暗美学"
                ],
                "url": "movie-749.html",
                "cover": "149.jpg"
        },
        {
                "title": "少年说",
                "year": "2021",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "青春 / 悬疑 / 成长",
                "category": "动作冒险",
                "tags": [
                        "校园",
                        "双重时间线",
                        "真相探寻",
                        "群像",
                        "社会派"
                ],
                "url": "movie-750.html",
                "cover": "150.jpg"
        },
        {
                "title": "恐惧2021",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 心理",
                "category": "纪录综艺",
                "tags": [
                        "互联网",
                        "监控",
                        "隐私",
                        "社交工程"
                ],
                "url": "movie-751.html",
                "cover": "1.jpg"
        },
        {
                "title": "谍海龙蛇",
                "year": "2027",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑 / 谍战",
                "category": "悬疑惊悚",
                "tags": [
                        "双面间谍",
                        "民国",
                        "智商博弈",
                        "民国F4"
                ],
                "url": "movie-752.html",
                "cover": "2.jpg"
        },
        {
                "title": "看不见的世界",
                "year": "2021",
                "region": "中国台湾",
                "type": "电影",
                "genre": "悬疑 / 科幻 / 心理",
                "category": "高分片单",
                "tags": [
                        "平行空间",
                        "失忆追踪",
                        "都市迷局",
                        "视觉错位",
                        "真相反转",
                        "潜意识"
                ],
                "url": "movie-753.html",
                "cover": "3.jpg"
        },
        {
                "title": "大兽",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 冒险 / 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "东北往事",
                        "人熊传说",
                        "复仇",
                        "荒野求生",
                        "小镇秘闻"
                ],
                "url": "movie-754.html",
                "cover": "4.jpg"
        },
        {
                "title": "披头士的诞生",
                "year": "2030",
                "region": "英国",
                "type": "电影",
                "genre": "音乐 / 传记",
                "category": "高分片单",
                "tags": [
                        "摇滚",
                        "利物浦",
                        "青春",
                        "约翰·列侬"
                ],
                "url": "movie-755.html",
                "cover": "5.jpg"
        },
        {
                "title": "最后的教父",
                "year": "2026",
                "region": "美国 / 意大利",
                "type": "电影",
                "genre": "剧情 / 犯罪 / 黑帮",
                "category": "动作冒险",
                "tags": [
                        "西西里",
                        "老年",
                        "遗产",
                        "背叛",
                        "一曲终了"
                ],
                "url": "movie-756.html",
                "cover": "6.jpg"
        },
        {
                "title": "风味绝配",
                "year": "2026",
                "region": "泰国",
                "type": "剧集",
                "genre": "爱情喜剧",
                "category": "爱情家庭",
                "tags": [
                        "欢喜冤家",
                        "美食",
                        "强制婚姻",
                        "泰式夸张",
                        "治愈"
                ],
                "url": "movie-757.html",
                "cover": "7.jpg"
        },
        {
                "title": "穷得漂亮",
                "year": "2017",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "亚洲经典",
                "tags": [
                        "底层",
                        "亲情",
                        "香港",
                        "温暖"
                ],
                "url": "movie-758.html",
                "cover": "8.jpg"
        },
        {
                "title": "偏爱之恋",
                "year": "2022",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情，剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "偏执爱恋",
                        "心理博弈",
                        "情感操控"
                ],
                "url": "movie-759.html",
                "cover": "9.jpg"
        },
        {
                "title": "宠物英雄",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动画, 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "冒险",
                        "合家欢",
                        "萌宠",
                        "成长"
                ],
                "url": "movie-760.html",
                "cover": "10.jpg"
        },
        {
                "title": "窒爱",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑、心理惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "婚姻背叛",
                        "窒息性依恋",
                        "反转不断",
                        "密闭空间"
                ],
                "url": "movie-761.html",
                "cover": "11.jpg"
        },
        {
                "title": "欲望单程路",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "悬疑 / 惊悚 / 心理",
                "category": "高分片单",
                "tags": [
                        "公路",
                        "交易",
                        "幻觉",
                        "博弈",
                        "罪案"
                ],
                "url": "movie-762.html",
                "cover": "12.jpg"
        },
        {
                "title": "警中警 2",
                "year": "2005",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "刑侦 / 反腐",
                "category": "纪录综艺",
                "tags": [
                        "督察",
                        "公安",
                        "黑保护伞",
                        "纪实风格"
                ],
                "url": "movie-763.html",
                "cover": "13.jpg"
        },
        {
                "title": "第一夫人的秘密",
                "year": "2016",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，传记",
                "category": "欧美热播",
                "tags": [
                        "娜塔莉·波特曼",
                        "杰奎琳·肯尼迪",
                        "政治",
                        "心理创伤",
                        "奥斯卡"
                ],
                "url": "movie-764.html",
                "cover": "14.jpg"
        },
        {
                "title": "去火星的男人",
                "year": "2024",
                "region": "中国",
                "type": "科幻冒险片",
                "genre": "太空冒险 / 家庭情感 / 科幻悬疑",
                "category": "华语佳作",
                "tags": [
                        "火星移民",
                        "时间折叠",
                        "家庭真相"
                ],
                "url": "movie-765.html",
                "cover": "15.jpg"
        },
        {
                "title": "从高空看越南",
                "year": "2017",
                "region": "越南 / 法国",
                "type": "电影",
                "genre": "剧情 / 战争 / 历史",
                "category": "欧美热播",
                "tags": [
                        "越战",
                        "飞行员",
                        "美军",
                        "越南平民",
                        "俯瞰"
                ],
                "url": "movie-766.html",
                "cover": "16.jpg"
        },
        {
                "title": "雨中的恋人们",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 剧情 / 年代",
                "category": "喜剧治愈",
                "tags": [
                        "香港暴雨",
                        "地下恋情",
                        "时代变迁",
                        "失忆重逢",
                        "怀旧"
                ],
                "url": "movie-767.html",
                "cover": "17.jpg"
        },
        {
                "title": "一夜惊魂",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "轮回",
                        "鬼宅",
                        "日式心理恐怖"
                ],
                "url": "movie-768.html",
                "cover": "18.jpg"
        },
        {
                "title": "子夜招魂",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "惊悚、恐怖、灵异",
                "category": "纪录综艺",
                "tags": [
                        "民俗",
                        "招魂",
                        "祖宅",
                        "禁忌",
                        "夜祭"
                ],
                "url": "movie-769.html",
                "cover": "19.jpg"
        },
        {
                "title": "魔法书",
                "year": "2007",
                "region": "美国",
                "type": "电影",
                "genre": "奇幻 / 家庭 / 冒险",
                "category": "亚洲经典",
                "tags": [
                        "二手书店",
                        "咒语误用",
                        "兄妹冒险",
                        "手绘动画插入",
                        "都市丛林"
                ],
                "url": "movie-770.html",
                "cover": "20.jpg"
        },
        {
                "title": "血洒北城",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作、犯罪、警匪",
                "category": "喜剧治愈",
                "tags": [
                        "东北",
                        "缉毒",
                        "兄弟反目",
                        "冰天雪地",
                        "枪战"
                ],
                "url": "movie-771.html",
                "cover": "21.jpg"
        },
        {
                "title": "铁血战士：血兽进化",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 科幻 / 恐怖",
                "category": "欧美热播",
                "tags": [
                        "外星狩猎",
                        "基因进化",
                        "丛林杀戮",
                        "硬核动作"
                ],
                "url": "movie-772.html",
                "cover": "22.jpg"
        },
        {
                "title": "诡计游戏",
                "year": "2024",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑",
                "category": "纪录综艺",
                "tags": [
                        "密室逃脱",
                        "游戏",
                        "反转",
                        "生存",
                        "心理战"
                ],
                "url": "movie-773.html",
                "cover": "23.jpg"
        },
        {
                "title": "恶魔突袭队",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "动作 / 惊悚",
                "category": "欧美热播",
                "tags": [
                        "特种兵",
                        "密室杀戮",
                        "叛徒游戏",
                        "高强度打斗"
                ],
                "url": "movie-774.html",
                "cover": "24.jpg"
        },
        {
                "title": "麻饶布拉区少年",
                "year": "2024",
                "region": "印度",
                "type": "电视剧",
                "genre": "剧情 / 运动 / 青春",
                "category": "高分片单",
                "tags": [
                        "板球",
                        "贫民窟",
                        "逆袭",
                        "兄弟反目"
                ],
                "url": "movie-775.html",
                "cover": "25.jpg"
        },
        {
                "title": "抵挡计划",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻 / 动作 / 惊悚",
                "category": "日韩精选",
                "tags": [
                        "末日防线",
                        "城市封锁",
                        "机器人群潮",
                        "时间倒计时",
                        "兄妹合作",
                        "牺牲抉择"
                ],
                "url": "movie-776.html",
                "cover": "26.jpg"
        },
        {
                "title": "摩登原始人之摔跤赛攻击波",
                "year": "1966",
                "region": "美国",
                "type": "Movie (Animated)",
                "genre": "动画， 喜剧， 家庭， 运动",
                "category": "高分片单",
                "tags": [
                        "石器时代",
                        "恶搞",
                        "摔跤",
                        "经典IP"
                ],
                "url": "movie-777.html",
                "cover": "27.jpg"
        },
        {
                "title": "向南海之道",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 家庭 / 公路",
                "category": "华语佳作",
                "tags": [
                        "治愈",
                        "公路片",
                        "临终关怀",
                        "父子",
                        "和解"
                ],
                "url": "movie-778.html",
                "cover": "28.jpg"
        },
        {
                "title": "美味代价",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "惊悚 / 奇幻",
                "category": "高分片单",
                "tags": [
                        "暗黑美食",
                        "人体实验",
                        "感官放大",
                        "反噬"
                ],
                "url": "movie-779.html",
                "cover": "29.jpg"
        },
        {
                "title": "条顿骑士团",
                "year": "1960",
                "region": "波兰",
                "type": "电影",
                "genre": "历史, 战争, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "中世纪",
                        "骑士",
                        "史诗",
                        "冷兵器"
                ],
                "url": "movie-780.html",
                "cover": "30.jpg"
        },
        {
                "title": "被盗的和平",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "战争, 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "二战",
                        "战后创伤",
                        "道德困境",
                        "慢热"
                ],
                "url": "movie-781.html",
                "cover": "31.jpg"
        },
        {
                "title": "玉女艳史",
                "year": "1967",
                "region": "中国香港",
                "type": "电影",
                "genre": "情色 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "邵氏",
                        "风月片",
                        "古典",
                        "欲望"
                ],
                "url": "movie-782.html",
                "cover": "32.jpg"
        },
        {
                "title": "侯孝贤画像",
                "year": "2023",
                "region": "中国台湾",
                "type": "纪录片",
                "genre": "传记",
                "category": "悬疑惊悚",
                "tags": [
                        "导演",
                        "幕后",
                        "诗意",
                        "长镜头",
                        "访谈"
                ],
                "url": "movie-783.html",
                "cover": "33.jpg"
        },
        {
                "title": "恐怖货轮",
                "year": "2022",
                "region": "澳大利亚",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "华语佳作",
                "tags": [
                        "密室",
                        "集装箱",
                        "人贩",
                        "生存",
                        "有限空间"
                ],
                "url": "movie-784.html",
                "cover": "34.jpg"
        },
        {
                "title": "光猪六壮士",
                "year": "1997",
                "region": "英国",
                "type": "电影",
                "genre": "喜剧，剧情，歌舞",
                "category": "亚洲经典",
                "tags": [
                        "脱衣舞",
                        "下岗工人",
                        "中年危机",
                        "励志"
                ],
                "url": "movie-785.html",
                "cover": "35.jpg"
        },
        {
                "title": "梦想成真粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 温情",
                "category": "日韩精选",
                "tags": [
                        "粤语",
                        "草根",
                        "许愿",
                        "家庭",
                        "现实主义"
                ],
                "url": "movie-786.html",
                "cover": "36.jpg"
        },
        {
                "title": "有法无天",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 犯罪, 律政",
                "category": "欧美热播",
                "tags": [
                        "以暴制暴",
                        "律政惊悚",
                        "法律灰色地带",
                        "大尺度"
                ],
                "url": "movie-787.html",
                "cover": "37.jpg"
        },
        {
                "title": "潘朵拉的承诺",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 科幻 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "基因实验",
                        "道德困境",
                        "家庭悲剧",
                        "病毒爆发"
                ],
                "url": "movie-788.html",
                "cover": "38.jpg"
        },
        {
                "title": "亲亲小站",
                "year": "2018",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 爱情, 青春",
                "category": "喜剧治愈",
                "tags": [
                        "高中",
                        "初吻",
                        "青梅竹马",
                        "浪漫喜剧"
                ],
                "url": "movie-789.html",
                "cover": "39.jpg"
        },
        {
                "title": "要命女优",
                "year": "2022",
                "region": "日本",
                "type": "电影",
                "genre": "惊悚 / 悬疑 / 恐怖",
                "category": "亚洲经典",
                "tags": [
                        "试镜",
                        "邪教",
                        "录像带",
                        "诅咒"
                ],
                "url": "movie-790.html",
                "cover": "40.jpg"
        },
        {
                "title": "菜英文没在怕",
                "year": "2023",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "职场",
                        "女性成长",
                        "语言障碍"
                ],
                "url": "movie-791.html",
                "cover": "41.jpg"
        },
        {
                "title": "徒手大战",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "近身格斗",
                        "极限生存",
                        "无武器",
                        "复仇",
                        "硬核"
                ],
                "url": "movie-792.html",
                "cover": "42.jpg"
        },
        {
                "title": "冻劫",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "灾难、悬疑",
                "category": "华语佳作",
                "tags": [
                        "极寒",
                        "生存",
                        "列车",
                        "人性"
                ],
                "url": "movie-793.html",
                "cover": "43.jpg"
        },
        {
                "title": "顶级乐队",
                "year": "2019",
                "region": "英国",
                "type": "电视剧",
                "genre": "喜剧音乐",
                "category": "喜剧治愈",
                "tags": [
                        "摇滚",
                        "中年危机",
                        "重组乐队",
                        "英式幽默"
                ],
                "url": "movie-794.html",
                "cover": "44.jpg"
        },
        {
                "title": "死亡竞速2050",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 科幻",
                "category": "亚洲经典",
                "tags": [
                        "赛车",
                        "暴力",
                        "反乌托邦"
                ],
                "url": "movie-795.html",
                "cover": "45.jpg"
        },
        {
                "title": "别回头",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "悬疑 / 恐怖",
                "category": "纪录综艺",
                "tags": [
                        "公路",
                        "都市传说",
                        "心理恐惧"
                ],
                "url": "movie-796.html",
                "cover": "46.jpg"
        },
        {
                "title": "大哥大姐没出息第三季",
                "year": "2025",
                "region": "美国",
                "type": "电视剧",
                "genre": "喜剧",
                "category": "欧美热播",
                "tags": [
                        "废柴",
                        "家族",
                        "成长"
                ],
                "url": "movie-797.html",
                "cover": "47.jpg"
        },
        {
                "title": "戒，情人",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情、剧情、悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "替身",
                        "戒指",
                        "记忆移植",
                        "三角恋",
                        "细思极恐"
                ],
                "url": "movie-798.html",
                "cover": "48.jpg"
        },
        {
                "title": "水中盈月",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "文艺奇幻",
                "category": "动作冒险",
                "tags": [
                        "梦境",
                        "江南水乡",
                        "虚实",
                        "轮回"
                ],
                "url": "movie-799.html",
                "cover": "49.jpg"
        },
        {
                "title": "最佳利益2",
                "year": "2022",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "律政",
                "category": "日韩精选",
                "tags": [
                        "正义",
                        "灰色地带",
                        "律所"
                ],
                "url": "movie-800.html",
                "cover": "50.jpg"
        },
        {
                "title": "红鞋公主与七矮人",
                "year": "2019",
                "region": "韩国 / 美国",
                "type": "电影 / 动画",
                "genre": "奇幻 / 喜剧 / 爱情 / 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "白雪公主改编",
                        "诅咒",
                        "反外貌焦虑",
                        "女性觉醒",
                        "童话颠覆"
                ],
                "url": "movie-801.html",
                "cover": "51.jpg"
        },
        {
                "title": "七战七捷",
                "year": "1995",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "历史，战争，传记",
                "category": "动作冒险",
                "tags": [
                        "解放战争",
                        "粟裕",
                        "以少胜多",
                        "军事谋略",
                        "苏中战役"
                ],
                "url": "movie-802.html",
                "cover": "52.jpg"
        },
        {
                "title": "绑定第一季",
                "year": "2024",
                "region": "澳大利亚",
                "type": "剧集",
                "genre": "犯罪, 喜剧",
                "category": "华语佳作",
                "tags": [
                        "绑架",
                        "拍档",
                        "黑色幽默",
                        "女绑匪"
                ],
                "url": "movie-803.html",
                "cover": "53.jpg"
        },
        {
                "title": "黄大妮",
                "year": "2017",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "家庭, 年代, 剧情",
                "category": "华语佳作",
                "tags": [
                        "母亲",
                        "五六十年代",
                        "工厂",
                        "养子",
                        "隐忍"
                ],
                "url": "movie-804.html",
                "cover": "54.jpg"
        },
        {
                "title": "占卜实验2：死亡剧院",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "密室逃脱",
                        "诅咒",
                        "直播杀人",
                        "血腥反转"
                ],
                "url": "movie-805.html",
                "cover": "55.jpg"
        },
        {
                "title": "漠北七雄：狼王",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 古装 / 冒险",
                "category": "动作冒险",
                "tags": [
                        "武侠",
                        "荒野",
                        "兄弟情",
                        "复仇",
                        "狼群"
                ],
                "url": "movie-806.html",
                "cover": "56.jpg"
        },
        {
                "title": "万里关山",
                "year": "1977",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情, 战争",
                "category": "华语佳作",
                "tags": [
                        "抗战",
                        "迁徙",
                        "家国情怀",
                        "公路电影",
                        "史诗"
                ],
                "url": "movie-807.html",
                "cover": "57.jpg"
        },
        {
                "title": "七鱼宴",
                "year": "2025",
                "region": "意大利 / 美国",
                "type": "电影",
                "genre": "喜剧、剧情、家庭",
                "category": "欧美热播",
                "tags": [
                        "圣诞夜",
                        "意大利家庭",
                        "烹饪",
                        "和解"
                ],
                "url": "movie-808.html",
                "cover": "58.jpg"
        },
        {
                "title": "面目",
                "year": "2024",
                "region": "中国内地",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "整容",
                        "身份置换",
                        "复仇"
                ],
                "url": "movie-809.html",
                "cover": "59.jpg"
        },
        {
                "title": "嫣语赋",
                "year": "2022",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装、爱情、探案",
                "category": "亚洲经典",
                "tags": [
                        "宅斗",
                        "女强",
                        "先婚后爱",
                        "反套路",
                        "嘴炮夫妇"
                ],
                "url": "movie-810.html",
                "cover": "60.jpg"
        },
        {
                "title": "梦想阿根廷",
                "year": "2025",
                "region": "西班牙, 阿根廷",
                "type": "电影",
                "genre": "剧情, 悬疑, 历史",
                "category": "动作冒险",
                "tags": [
                        "独裁",
                        "记忆",
                        "超能力",
                        "寻找",
                        "政治隐喻"
                ],
                "url": "movie-811.html",
                "cover": "61.jpg"
        },
        {
                "title": "神探杨金邦",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑 / 历史 / 犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "民国",
                        "推理",
                        "奇案",
                        "法医"
                ],
                "url": "movie-812.html",
                "cover": "62.jpg"
        },
        {
                "title": "贞操带",
                "year": "2014",
                "region": "意大利",
                "type": "电影",
                "genre": "喜剧, 爱情, 古装",
                "category": "爱情家庭",
                "tags": [
                        "中世纪",
                        "骑士",
                        "贞操带",
                        "闹剧",
                        "性别反转"
                ],
                "url": "movie-813.html",
                "cover": "63.jpg"
        },
        {
                "title": "随身危机",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "特工",
                        "行李箱",
                        "限时",
                        "反转"
                ],
                "url": "movie-814.html",
                "cover": "64.jpg"
        },
        {
                "title": "长春事件",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "历史悬疑",
                "category": "华语佳作",
                "tags": [
                        "年代",
                        "悬疑",
                        "人性",
                        "东北",
                        "冷战"
                ],
                "url": "movie-815.html",
                "cover": "65.jpg"
        },
        {
                "title": "逃学威龙2",
                "year": "1992",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 动作",
                "category": "日韩精选",
                "tags": [
                        "周星驰",
                        "卧底",
                        "校园",
                        "朱茵"
                ],
                "url": "movie-816.html",
                "cover": "66.jpg"
        },
        {
                "title": "昨天开始爱上你",
                "year": "2018",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "家庭",
                        "失忆",
                        "老年",
                        "温情"
                ],
                "url": "movie-817.html",
                "cover": "67.jpg"
        },
        {
                "title": "安纳莉",
                "year": "2021",
                "region": "芬兰",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "北欧",
                        "森林",
                        "精灵",
                        "成长",
                        "治愈"
                ],
                "url": "movie-818.html",
                "cover": "68.jpg"
        },
        {
                "title": "巨鳄风暴",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "灾难 / 惊悚 / 动作",
                "category": "华语佳作",
                "tags": [
                        "飓风洪水",
                        "鳄鱼围攻",
                        "密室逃生",
                        "父女情深"
                ],
                "url": "movie-819.html",
                "cover": "69.jpg"
        },
        {
                "title": "灵长类",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "科幻, 惊悚, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "动物智能",
                        "伦理困境",
                        "黑镜风格"
                ],
                "url": "movie-820.html",
                "cover": "70.jpg"
        },
        {
                "title": "外来媳妇本地郎3",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "家庭 / 喜剧 / 粤语",
                "category": "动作冒险",
                "tags": [
                        "广府文化",
                        "地域冲突",
                        "温情喜剧",
                        "长寿剧",
                        "饮食男女"
                ],
                "url": "movie-821.html",
                "cover": "71.jpg"
        },
        {
                "title": "人中之龙 剧场版",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "动作",
                "category": "动作冒险",
                "tags": [
                        "极道",
                        "游戏改编",
                        "硬汉",
                        "热血"
                ],
                "url": "movie-822.html",
                "cover": "72.jpg"
        },
        {
                "title": "我的野兽",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "剧情, 奇幻",
                "category": "日韩精选",
                "tags": [
                        "治愈",
                        "隐喻",
                        "成长",
                        "友情"
                ],
                "url": "movie-823.html",
                "cover": "73.jpg"
        },
        {
                "title": "超级武神之龙行天下",
                "year": "1996",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，奇幻",
                "category": "日韩精选",
                "tags": [
                        "功夫",
                        "穿越",
                        "龙珠",
                        "无厘头"
                ],
                "url": "movie-824.html",
                "cover": "74.jpg"
        },
        {
                "title": "新闻编辑室第三季",
                "year": "2014",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情",
                "category": "亚洲经典",
                "tags": [
                        "媒体",
                        "理想主义",
                        "职场",
                        "快节奏对白",
                        "政治"
                ],
                "url": "movie-825.html",
                "cover": "75.jpg"
        },
        {
                "title": "我的美女老师",
                "year": "2027",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "都市奇幻甜宠",
                "category": "动作冒险",
                "tags": [
                        "师生恋",
                        "修真",
                        "异能",
                        "保镖",
                        "反差萌"
                ],
                "url": "movie-826.html",
                "cover": "76.jpg"
        },
        {
                "title": "未来的秘密",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "科幻 / 悬疑 / 青春",
                "category": "纪录综艺",
                "tags": [
                        "时光胶囊",
                        "平行宇宙",
                        "校园",
                        "蝴蝶效应"
                ],
                "url": "movie-827.html",
                "cover": "77.jpg"
        },
        {
                "title": "吧女斯黛拉",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情, 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "酒吧",
                        "卧底",
                        "女性群像"
                ],
                "url": "movie-828.html",
                "cover": "78.jpg"
        },
        {
                "title": "千鹤先生",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖, 民俗, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "茅山",
                        "僵尸",
                        "因果",
                        "道义"
                ],
                "url": "movie-829.html",
                "cover": "79.jpg"
        },
        {
                "title": "魅影危程",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "动作惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "高速列车",
                        "特工对决",
                        "密闭空间"
                ],
                "url": "movie-830.html",
                "cover": "80.jpg"
        },
        {
                "title": "少年情事",
                "year": "2023",
                "region": "台湾",
                "type": "电影",
                "genre": "剧情 / 爱情",
                "category": "悬疑惊悚",
                "tags": [
                        "青春",
                        "校园",
                        "同性",
                        "成长",
                        "怀旧"
                ],
                "url": "movie-831.html",
                "cover": "81.jpg"
        },
        {
                "title": "探险活宝第一季",
                "year": "2010",
                "region": "美国",
                "type": "剧集",
                "genre": "动画、奇幻、冒险",
                "category": "纪录综艺",
                "tags": [
                        "末日废土",
                        "无厘头",
                        "治愈",
                        "神作"
                ],
                "url": "movie-832.html",
                "cover": "82.jpg"
        },
        {
                "title": "寻找薇薇安·迈尔",
                "year": "2013",
                "region": "美国",
                "type": "电影",
                "genre": "纪录片， 传记",
                "category": "动作冒险",
                "tags": [
                        "摄影",
                        "保姆",
                        "天才",
                        "真实事件改编"
                ],
                "url": "movie-833.html",
                "cover": "83.jpg"
        },
        {
                "title": "爱我在清晨",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "爱情文艺",
                "category": "日韩精选",
                "tags": [
                        "一夜情",
                        "破晓",
                        "告别"
                ],
                "url": "movie-834.html",
                "cover": "84.jpg"
        },
        {
                "title": "玩情高手",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 喜剧",
                "category": "动作冒险",
                "tags": [
                        "花花公子",
                        "反套路",
                        "浪子回头"
                ],
                "url": "movie-835.html",
                "cover": "85.jpg"
        },
        {
                "title": "龙虎斗",
                "year": "2001",
                "region": "香港",
                "type": "功夫动作片",
                "genre": "黑帮动作、兄弟情、复仇",
                "category": "动作冒险",
                "tags": [
                        "港口帮会",
                        "双生兄弟",
                        "赌局",
                        "夜行追击",
                        "家族清算"
                ],
                "url": "movie-836.html",
                "cover": "86.jpg"
        },
        {
                "title": "劳务师卢武镇",
                "year": "2026",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情, 职场",
                "category": "日韩精选",
                "tags": [
                        "劳动法",
                        "社畜",
                        "维权",
                        "热血"
                ],
                "url": "movie-837.html",
                "cover": "87.jpg"
        },
        {
                "title": "爱在黄昏日落前",
                "year": "2024",
                "region": "法国 / 美国",
                "type": "电影",
                "genre": "爱情 / 剧情 / 文艺",
                "category": "喜剧治愈",
                "tags": [
                        "中年重逢",
                        "对话电影",
                        "遗憾美学"
                ],
                "url": "movie-838.html",
                "cover": "88.jpg"
        },
        {
                "title": "来自收容所的爱",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 历史 / 治愈",
                "category": "悬疑惊悚",
                "tags": [
                        "抗战",
                        "孤儿",
                        "国际友谊",
                        "温情"
                ],
                "url": "movie-839.html",
                "cover": "89.jpg"
        },
        {
                "title": "杨光的快乐生活之绅士品格",
                "year": "2014",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "喜剧, 都市",
                "category": "纪录综艺",
                "tags": [
                        "天津",
                        "小人物",
                        "礼仪",
                        "反差萌"
                ],
                "url": "movie-840.html",
                "cover": "90.jpg"
        },
        {
                "title": "街头竞选",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "黑色幽默",
                        "底层政治",
                        "草根运动",
                        "竞选风云"
                ],
                "url": "movie-841.html",
                "cover": "91.jpg"
        },
        {
                "title": "经典杯子蛋糕",
                "year": "2023",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情、职场、美食",
                "category": "欧美热播",
                "tags": [
                        "BL",
                        "上司下属",
                        "中年恋爱",
                        "甜品",
                        "治愈"
                ],
                "url": "movie-842.html",
                "cover": "92.jpg"
        },
        {
                "title": "失忆症",
                "year": "2023",
                "region": "西班牙",
                "type": "电影",
                "genre": "悬疑 / 惊悚 / 科幻",
                "category": "亚洲经典",
                "tags": [
                        "记忆删除",
                        "反转结局",
                        "心理博弈"
                ],
                "url": "movie-843.html",
                "cover": "93.jpg"
        },
        {
                "title": "阿布格莱布的男孩",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 战争 / 历史",
                "category": "华语佳作",
                "tags": [
                        "伊拉克战争",
                        "人性",
                        "囚禁",
                        "童年视角",
                        "政治"
                ],
                "url": "movie-844.html",
                "cover": "94.jpg"
        },
        {
                "title": "美姐",
                "year": "2012",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 喜剧 / 爱情",
                "category": "日韩精选",
                "tags": [
                        "二人台",
                        "乡村",
                        "痴恋"
                ],
                "url": "movie-845.html",
                "cover": "95.jpg"
        },
        {
                "title": "乡村岁月",
                "year": "2020",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 农村 / 家庭",
                "category": "华语佳作",
                "tags": [
                        "乡村",
                        "改革开放",
                        "三代人",
                        "土地",
                        "时代变迁"
                ],
                "url": "movie-846.html",
                "cover": "96.jpg"
        },
        {
                "title": "热那亚",
                "year": "2008",
                "region": "意大利",
                "type": "电影",
                "genre": "剧情， 文艺， 家庭",
                "category": "日韩精选",
                "tags": [
                        "热那亚",
                        "丧妻",
                        "父女",
                        "意大利",
                        "疗伤"
                ],
                "url": "movie-847.html",
                "cover": "97.jpg"
        },
        {
                "title": "象牙塔",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑, 剧情",
                "category": "高分片单",
                "tags": [
                        "学术圈",
                        "潜规则",
                        "反转",
                        "师徒",
                        "伦理"
                ],
                "url": "movie-848.html",
                "cover": "98.jpg"
        },
        {
                "title": "猛鬼街4：梦幻主宰",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖, 惊悚, 奇幻",
                "category": "喜剧治愈",
                "tags": [
                        "梦境杀人",
                        "超能力觉醒",
                        "女性主角",
                        "规则怪谈",
                        "重启"
                ],
                "url": "movie-849.html",
                "cover": "99.jpg"
        },
        {
                "title": "最后的战士",
                "year": "2016",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "战争 / 历史 / 动作",
                "category": "华语佳作",
                "tags": [
                        "抗日",
                        "狙击手",
                        "师徒",
                        "牺牲"
                ],
                "url": "movie-850.html",
                "cover": "100.jpg"
        },
        {
                "title": "霹雳经武纪之枭皇论战",
                "year": "2026",
                "region": "中国台湾",
                "type": "电影",
                "genre": "奇幻, 武侠",
                "category": "高分片单",
                "tags": [
                        "布袋戏",
                        "架空",
                        "权谋"
                ],
                "url": "movie-851.html",
                "cover": "101.jpg"
        },
        {
                "title": "忙人日记",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情",
                "category": "爱情家庭",
                "tags": [
                        "都市",
                        "治愈",
                        "日记",
                        "人生转折"
                ],
                "url": "movie-852.html",
                "cover": "102.jpg"
        },
        {
                "title": "哈尔滨一九四四",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "谍战, 悬疑, 历史",
                "category": "亚洲经典",
                "tags": [
                        "伪满洲国",
                        "双面间谍",
                        "日本特务",
                        "宋卓文"
                ],
                "url": "movie-853.html",
                "cover": "103.jpg"
        },
        {
                "title": "南少林三十六房",
                "year": "2025",
                "region": "中国大陆 / 中国香港",
                "type": "电影",
                "genre": "动作 / 武侠 / 历史",
                "category": "欧美热播",
                "tags": [
                        "少林",
                        "武僧",
                        "清朝",
                        "抗倭",
                        "硬核打斗"
                ],
                "url": "movie-854.html",
                "cover": "104.jpg"
        },
        {
                "title": "恐怖草原",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖 / 西部",
                "category": "爱情家庭",
                "tags": [
                        "拓荒",
                        "怪物",
                        "孤立无援",
                        "血腥"
                ],
                "url": "movie-855.html",
                "cover": "105.jpg"
        },
        {
                "title": "熊家餐馆第四季",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 喜剧",
                "category": "日韩精选",
                "tags": [
                        "餐饮",
                        "家庭",
                        "压力",
                        "续订"
                ],
                "url": "movie-856.html",
                "cover": "106.jpg"
        },
        {
                "title": "高山上的热气球",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情",
                "category": "动作冒险",
                "tags": [
                        "治愈",
                        "冒险",
                        "西藏",
                        "情感",
                        "自然"
                ],
                "url": "movie-857.html",
                "cover": "107.jpg"
        },
        {
                "title": "阿比阿弟畅游鬼门关",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧，奇幻，音乐",
                "category": "亚洲经典",
                "tags": [
                        "摇滚",
                        "冥界",
                        "话痨"
                ],
                "url": "movie-858.html",
                "cover": "108.jpg"
        },
        {
                "title": "恶霸末日",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "犯罪，动作",
                "category": "华语佳作",
                "tags": [
                        "复仇",
                        "黑帮",
                        "以暴制暴",
                        "小镇",
                        "宿命"
                ],
                "url": "movie-859.html",
                "cover": "109.jpg"
        },
        {
                "title": "小爸爸的抉择",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭, 伦理",
                "category": "日韩精选",
                "tags": [
                        "早孕",
                        "男性视角",
                        "抉择",
                        "成长"
                ],
                "url": "movie-860.html",
                "cover": "110.jpg"
        },
        {
                "title": "法伦杰",
                "year": "2024",
                "region": "英国",
                "type": "电视剧",
                "genre": "悬疑 / 犯罪 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "侦探",
                        "小镇疑云",
                        "双胞胎",
                        "身份互换"
                ],
                "url": "movie-861.html",
                "cover": "111.jpg"
        },
        {
                "title": "为情颠倒",
                "year": "2019",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情, 奇幻",
                "category": "喜剧治愈",
                "tags": [
                        "穿越",
                        "身份互换",
                        "台式小清新",
                        "催泪",
                        "反转"
                ],
                "url": "movie-862.html",
                "cover": "112.jpg"
        },
        {
                "title": "天官赐福动漫日语",
                "year": "2023",
                "region": "日本",
                "type": "动画剧集",
                "genre": "奇幻、冒险、神魔",
                "category": "喜剧治愈",
                "tags": [
                        "神官",
                        "宿命",
                        "双男主",
                        "阴阳",
                        "唯美"
                ],
                "url": "movie-863.html",
                "cover": "113.jpg"
        },
        {
                "title": "被告山杠爷",
                "year": "1994",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 犯罪 / 乡村",
                "category": "悬疑惊悚",
                "tags": [
                        "乡村治理",
                        "人治与法治",
                        "悲剧",
                        "道德困境",
                        "宗族"
                ],
                "url": "movie-864.html",
                "cover": "114.jpg"
        },
        {
                "title": "某天，那年",
                "year": "2022",
                "region": "韩国",
                "type": "电视剧",
                "genre": "爱情, 年代, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "初恋",
                        "时光倒流",
                        "遗憾"
                ],
                "url": "movie-865.html",
                "cover": "115.jpg"
        },
        {
                "title": "葬礼再聚首",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭, 黑色幽默",
                "category": "纪录综艺",
                "tags": [
                        "方言电影",
                        "多线叙事",
                        "乡土情结",
                        "荒诞"
                ],
                "url": "movie-866.html",
                "cover": "116.jpg"
        },
        {
                "title": "将军府来了个小厨娘",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装 / 喜剧 / 爱情",
                "category": "华语佳作",
                "tags": [
                        "美食",
                        "先婚后爱",
                        "反差萌",
                        "破案"
                ],
                "url": "movie-867.html",
                "cover": "117.jpg"
        },
        {
                "title": "特派先锋",
                "year": "2025",
                "region": "中国大陆",
                "type": "网剧",
                "genre": "刑侦, 悬疑, 动作",
                "category": "爱情家庭",
                "tags": [
                        "卧底",
                        "缉毒",
                        "硬汉派",
                        "多线叙事"
                ],
                "url": "movie-868.html",
                "cover": "118.jpg"
        },
        {
                "title": "作战啦！茶室总动员",
                "year": "2024",
                "region": "马来西亚",
                "type": "电影",
                "genre": "喜剧 / 家庭",
                "category": "华语佳作",
                "tags": [
                        "茶室",
                        "南洋",
                        "美食",
                        "家族经营",
                        "本土文化"
                ],
                "url": "movie-869.html",
                "cover": "119.jpg"
        },
        {
                "title": "异国日记",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 家庭 / 文艺",
                "category": "高分片单",
                "tags": [
                        "收养",
                        "社恐",
                        "丧亲",
                        "治愈",
                        "文学"
                ],
                "url": "movie-870.html",
                "cover": "120.jpg"
        },
        {
                "title": "年假",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "都市生活",
                "category": "亚洲经典",
                "tags": [
                        "社畜",
                        "回乡",
                        "代际",
                        "治愈"
                ],
                "url": "movie-871.html",
                "cover": "121.jpg"
        },
        {
                "title": "雪",
                "year": "2021",
                "region": "日本",
                "type": "电影",
                "genre": "文艺剧情",
                "category": "亚洲经典",
                "tags": [
                        "冬季孤村",
                        "亲情和解",
                        "记忆回声",
                        "静默叙事"
                ],
                "url": "movie-872.html",
                "cover": "122.jpg"
        },
        {
                "title": "旱地忽律朱贵",
                "year": "2023",
                "region": "中国大陆",
                "type": "网络电影",
                "genre": "古装，动作",
                "category": "喜剧治愈",
                "tags": [
                        "水浒传",
                        "梁山好汉",
                        "间谍战"
                ],
                "url": "movie-873.html",
                "cover": "123.jpg"
        },
        {
                "title": "令人抓狂的旗安庄",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "喜剧 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "漫改",
                        "公寓",
                        "邻里",
                        "黑色幽默",
                        "单元剧"
                ],
                "url": "movie-874.html",
                "cover": "124.jpg"
        },
        {
                "title": "恐惧黑屋",
                "year": "2026",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖、惊悚",
                "category": "动作冒险",
                "tags": [
                        "密室",
                        "心理恐惧",
                        "民俗",
                        "轮回"
                ],
                "url": "movie-875.html",
                "cover": "125.jpg"
        },
        {
                "title": "刀光枪影",
                "year": "2015",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "动作 / 抗战",
                "category": "亚洲经典",
                "tags": [
                        "民国",
                        "江湖恩怨",
                        "冷热兵器对决"
                ],
                "url": "movie-876.html",
                "cover": "126.jpg"
        },
        {
                "title": "浴血突围1942",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争, 历史, 动作",
                "category": "喜剧治愈",
                "tags": [
                        "抗日战争",
                        "情报战",
                        "绝境求生"
                ],
                "url": "movie-877.html",
                "cover": "127.jpg"
        },
        {
                "title": "广播时间",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "深夜电台",
                        "人生百态",
                        "偶然相遇",
                        "温情治愈"
                ],
                "url": "movie-878.html",
                "cover": "128.jpg"
        },
        {
                "title": "生命印痕",
                "year": "2019",
                "region": "英国",
                "type": "电影",
                "genre": "科幻、剧情、家庭",
                "category": "纪录综艺",
                "tags": [
                        "记忆下载",
                        "伦理困境",
                        "父子关系",
                        "意识转移",
                        "催泪向"
                ],
                "url": "movie-879.html",
                "cover": "129.jpg"
        },
        {
                "title": "对不起，萨朗嘿哟",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "动作冒险",
                "tags": [
                        "跨国恋",
                        "语言障碍",
                        "催泪",
                        "治愈"
                ],
                "url": "movie-880.html",
                "cover": "130.jpg"
        },
        {
                "title": "碟仙前传",
                "year": "2014",
                "region": "香港",
                "type": "电影",
                "genre": "恐怖",
                "category": "纪录综艺",
                "tags": [
                        "通灵",
                        "校园怪谈",
                        "诅咒",
                        "民俗"
                ],
                "url": "movie-881.html",
                "cover": "131.jpg"
        },
        {
                "title": "法医秦明之幸存者",
                "year": "2018",
                "region": "中国大陆",
                "type": "网剧",
                "genre": "悬疑，犯罪，刑侦",
                "category": "爱情家庭",
                "tags": [
                        "法医",
                        "连环杀人",
                        "幸存者",
                        "心理战",
                        "烧脑"
                ],
                "url": "movie-882.html",
                "cover": "132.jpg"
        },
        {
                "title": "四十四只石狮子",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑、古装",
                "category": "纪录综艺",
                "tags": [
                        "卢沟桥",
                        "民国奇案",
                        "数字密码",
                        "文物守护"
                ],
                "url": "movie-883.html",
                "cover": "133.jpg"
        },
        {
                "title": "超级街头霸王",
                "year": "1993",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "游戏改编",
                        "功夫",
                        "恶搞",
                        "群星贺岁"
                ],
                "url": "movie-884.html",
                "cover": "134.jpg"
        },
        {
                "title": "无惧神明",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚, 悬疑, 宗教",
                "category": "纪录综艺",
                "tags": [
                        "心理恐怖",
                        "邪教",
                        "小镇谜团",
                        "反转"
                ],
                "url": "movie-885.html",
                "cover": "135.jpg"
        },
        {
                "title": "镇魂街第三季",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集（动画）",
                "genre": "动作，奇幻，热血",
                "category": "纪录综艺",
                "tags": [
                        "国漫",
                        "守护灵",
                        "战斗",
                        "兄弟"
                ],
                "url": "movie-886.html",
                "cover": "136.jpg"
        },
        {
                "title": "哼唱",
                "year": "2022",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情 / 音乐",
                "category": "纪录综艺",
                "tags": [
                        "遗愿清单",
                        "母女",
                        "民歌"
                ],
                "url": "movie-887.html",
                "cover": "137.jpg"
        },
        {
                "title": "天天初体验",
                "year": "2015",
                "region": "日本",
                "type": "电视剧",
                "genre": "青春, 校园",
                "category": "高分片单",
                "tags": [
                        "纯爱",
                        "成长",
                        "失忆",
                        "初恋"
                ],
                "url": "movie-888.html",
                "cover": "138.jpg"
        },
        {
                "title": "凤凰谷",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "留守",
                        "儿童",
                        "乡村教师",
                        "梦想",
                        "凤凰"
                ],
                "url": "movie-889.html",
                "cover": "139.jpg"
        },
        {
                "title": "来看我们的演唱会",
                "year": "2025",
                "region": "中国大陆",
                "type": "综艺 / 电影",
                "genre": "音乐 / 纪实",
                "category": "华语佳作",
                "tags": [
                        "素人",
                        "临终关怀",
                        "演唱会",
                        "催泪"
                ],
                "url": "movie-890.html",
                "cover": "140.jpg"
        },
        {
                "title": "蓝海少女",
                "year": "2024",
                "region": "日本",
                "type": "动画剧集",
                "genre": "治愈, 日常",
                "category": "欧美热播",
                "tags": [
                        "潜水",
                        "友情",
                        "成长",
                        "清新"
                ],
                "url": "movie-891.html",
                "cover": "141.jpg"
        },
        {
                "title": "幽灵",
                "year": "2012",
                "region": "韩国",
                "type": "TV剧集",
                "genre": "悬疑, 刑侦, 科幻",
                "category": "喜剧治愈",
                "tags": [
                        "黑客",
                        "身份交换",
                        "网络犯罪",
                        "政治黑幕"
                ],
                "url": "movie-892.html",
                "cover": "142.jpg"
        },
        {
                "title": "黑爵士之圣诞颂歌",
                "year": "2024",
                "region": "英国",
                "type": "剧集 / 电视电影",
                "genre": "喜剧 / 奇幻",
                "category": "欧美热播",
                "tags": [
                        "英式幽默",
                        "狄更斯改编",
                        "毒舌",
                        "穿越",
                        "讽刺"
                ],
                "url": "movie-893.html",
                "cover": "143.jpg"
        },
        {
                "title": "威胁2：社会",
                "year": "2020",
                "region": "日本",
                "type": "电影",
                "genre": "惊悚 / 悬疑 / 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "社会派推理",
                        "网络暴力",
                        "集体无意识",
                        "报复社会"
                ],
                "url": "movie-894.html",
                "cover": "144.jpg"
        },
        {
                "title": "维京传奇第三季",
                "year": "2026",
                "region": "加拿大 / 爱尔兰",
                "type": "剧集",
                "genre": "历史 / 动作",
                "category": "喜剧治愈",
                "tags": [
                        "北欧",
                        "血腥",
                        "信仰冲突",
                        "史诗海战"
                ],
                "url": "movie-895.html",
                "cover": "145.jpg"
        },
        {
                "title": "解除跆拳道的诅咒",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 奇幻",
                "category": "动作冒险",
                "tags": [
                        "校园暴力",
                        "变身",
                        "搞笑",
                        "励志"
                ],
                "url": "movie-896.html",
                "cover": "146.jpg"
        },
        {
                "title": "非同之罪",
                "year": "2025",
                "region": "美国",
                "type": "电视剧",
                "genre": "犯罪 / 律政",
                "category": "爱情家庭",
                "tags": [
                        "反转",
                        "陪审团",
                        "社会派",
                        "群像"
                ],
                "url": "movie-897.html",
                "cover": "147.jpg"
        },
        {
                "title": "奇异的激情",
                "year": "2026",
                "region": "西班牙",
                "type": "电影",
                "genre": "惊悚、心理、情色",
                "category": "喜剧治愈",
                "tags": [
                        "病态迷恋",
                        "身份吞噬",
                        "美术馆迷局"
                ],
                "url": "movie-898.html",
                "cover": "148.jpg"
        },
        {
                "title": "爱上入殓师",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "爱情，剧情，职业",
                "category": "纪录综艺",
                "tags": [
                        "冷门职业",
                        "治愈系",
                        "生死思考",
                        "温柔男主",
                        "社会偏见"
                ],
                "url": "movie-899.html",
                "cover": "149.jpg"
        },
        {
                "title": "素材采集家的异世界旅行记",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集 / 动漫",
                "genre": "奇幻 / 冒险 / 日常",
                "category": "喜剧治愈",
                "tags": [
                        "异世界",
                        "慢生活",
                        "摄影",
                        "种草",
                        "治愈"
                ],
                "url": "movie-900.html",
                "cover": "150.jpg"
        },
        {
                "title": "白雪公主与三个跟屁虫",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 奇幻 / 冒险",
                "category": "日韩精选",
                "tags": [
                        "恶搞童话",
                        "反公主病",
                        "治愈",
                        "环保"
                ],
                "url": "movie-901.html",
                "cover": "1.jpg"
        },
        {
                "title": "幸福街第一部",
                "year": "2019",
                "region": "台湾",
                "type": "剧集",
                "genre": "社会悬疑,都市剧,群像剧",
                "category": "悬疑惊悚",
                "tags": [
                        "街区记忆",
                        "新闻调查",
                        "集体叙事",
                        "谎言工程",
                        "青春成长"
                ],
                "url": "movie-902.html",
                "cover": "2.jpg"
        },
        {
                "title": "珍爱泉源",
                "year": "2006",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 爱情, 科幻",
                "category": "喜剧治愈",
                "tags": [
                        "永生",
                        "穿越时空",
                        "生死之恋",
                        "哲学"
                ],
                "url": "movie-903.html",
                "cover": "3.jpg"
        },
        {
                "title": "爱无对立",
                "year": "2024",
                "region": "印度",
                "type": "电影",
                "genre": "爱情， 歌舞， 社会",
                "category": "日韩精选",
                "tags": [
                        "种姓制度",
                        "跨教派恋爱",
                        "宝莱坞"
                ],
                "url": "movie-904.html",
                "cover": "4.jpg"
        },
        {
                "title": "泼妇碧安卡",
                "year": "2029",
                "region": "英国",
                "type": "剧集",
                "genre": "喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "女权",
                        "中世纪",
                        "反转"
                ],
                "url": "movie-905.html",
                "cover": "5.jpg"
        },
        {
                "title": "侠盗高飞",
                "year": "1991",
                "region": "香港",
                "type": "电影",
                "genre": "动作 / 犯罪",
                "category": "日韩精选",
                "tags": [
                        "侠盗",
                        "飞车",
                        "兄弟背叛",
                        "周润发风格"
                ],
                "url": "movie-906.html",
                "cover": "6.jpg"
        },
        {
                "title": "掌中雀",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装 / 悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "宫斗",
                        "替身文学",
                        "权谋博弈",
                        "棋手与棋子",
                        "大女主"
                ],
                "url": "movie-907.html",
                "cover": "7.jpg"
        },
        {
                "title": "转角遇到爱",
                "year": "2007",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情、偶像、喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "转角",
                        "偶遇",
                        "富家女",
                        "穷画家",
                        "浪漫"
                ],
                "url": "movie-908.html",
                "cover": "8.jpg"
        },
        {
                "title": "到也门钓鲑鱼",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 喜剧 / 冒险",
                "category": "喜剧治愈",
                "tags": [
                        "荒诞计划",
                        "中年危机",
                        "文化冲突",
                        "治愈"
                ],
                "url": "movie-909.html",
                "cover": "9.jpg"
        },
        {
                "title": "生命之舞",
                "year": "2021",
                "region": "古巴",
                "type": "电影",
                "genre": "歌舞剧情",
                "category": "高分片单",
                "tags": [
                        "芭蕾",
                        "革命",
                        "梦想",
                        "身体"
                ],
                "url": "movie-910.html",
                "cover": "10.jpg"
        },
        {
                "title": "陷害",
                "year": "2024",
                "region": "中国内地",
                "type": "电影",
                "genre": "犯罪、悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "职场暗斗",
                        "替罪羊",
                        "反转"
                ],
                "url": "movie-911.html",
                "cover": "11.jpg"
        },
        {
                "title": "幸福生活万年长",
                "year": "2021",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 家庭 / 乡村",
                "category": "日韩精选",
                "tags": [
                        "扶贫",
                        "轻喜剧",
                        "乡土人情",
                        "家庭伦理",
                        "奋斗"
                ],
                "url": "movie-912.html",
                "cover": "12.jpg"
        },
        {
                "title": "英雄秀",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧, 超级英雄",
                "category": "欧美热播",
                "tags": [
                        "反英雄",
                        "职场",
                        "真人秀",
                        "荒诞"
                ],
                "url": "movie-913.html",
                "cover": "13.jpg"
        },
        {
                "title": "忍冬玫瑰",
                "year": "2021",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情 / 文艺",
                "category": "爱情家庭",
                "tags": [
                        "青春",
                        "遗憾",
                        "植物隐喻"
                ],
                "url": "movie-914.html",
                "cover": "14.jpg"
        },
        {
                "title": "济公之降龙有悔",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络电影",
                "genre": "喜剧，奇幻",
                "category": "欧美热播",
                "tags": [
                        "济公",
                        "降龙罗汉",
                        "因果循环",
                        "另类修行"
                ],
                "url": "movie-915.html",
                "cover": "15.jpg"
        },
        {
                "title": "女明星艳史",
                "year": "1999",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情, 情色, 传记",
                "category": "悬疑惊悚",
                "tags": [
                        "老港片",
                        "演艺圈",
                        "风月",
                        "浮沉录",
                        "真实改编"
                ],
                "url": "movie-916.html",
                "cover": "16.jpg"
        },
        {
                "title": "第四类接触",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "科幻，惊悚，悬疑",
                "category": "欧美热播",
                "tags": [
                        "外星人",
                        "伪纪录片",
                        "心理恐怖",
                        "真实事件改编",
                        "接触"
                ],
                "url": "movie-917.html",
                "cover": "17.jpg"
        },
        {
                "title": "遗落的世界",
                "year": "2024",
                "region": "英国 / 加拿大",
                "type": "剧集",
                "genre": "科幻, 悬疑, 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "时间悖论",
                        "生态惊悚",
                        "高概念",
                        "智商在线",
                        "神剧"
                ],
                "url": "movie-918.html",
                "cover": "18.jpg"
        },
        {
                "title": "无人问津",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情",
                "category": "高分片单",
                "tags": [
                        "独居老人",
                        "社区关怀",
                        "现实主义"
                ],
                "url": "movie-919.html",
                "cover": "19.jpg"
        },
        {
                "title": "圣堂佳音",
                "year": "2024",
                "region": "英国",
                "type": "电视剧",
                "genre": "悬疑",
                "category": "日韩精选",
                "tags": [
                        "教堂",
                        "谋杀",
                        "合唱团",
                        "神父",
                        "秘密"
                ],
                "url": "movie-920.html",
                "cover": "20.jpg"
        },
        {
                "title": "神将少女八家将",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 青春",
                "category": "纪录综艺",
                "tags": [
                        "民俗",
                        "女权",
                        "成长",
                        "阵头",
                        "家将文化"
                ],
                "url": "movie-921.html",
                "cover": "21.jpg"
        },
        {
                "title": "好像一条狗",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 黑色幽默 / 奇幻",
                "category": "喜剧治愈",
                "tags": [
                        "隐喻",
                        "社畜",
                        "变形记",
                        "荒诞"
                ],
                "url": "movie-922.html",
                "cover": "22.jpg"
        },
        {
                "title": "樓上樓下",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑奇幻",
                "category": "纪录综艺",
                "tags": [
                        "唐楼",
                        "偷窥",
                        "平行空间"
                ],
                "url": "movie-923.html",
                "cover": "23.jpg"
        },
        {
                "title": "蝉茧人的入侵",
                "year": "2024",
                "region": "日本",
                "type": "动画电影",
                "genre": "科幻 / 心理",
                "category": "亚洲经典",
                "tags": [
                        "寄生",
                        "社会隐喻",
                        "压抑美学"
                ],
                "url": "movie-924.html",
                "cover": "24.jpg"
        },
        {
                "title": "晶翠仙尊",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装 / 仙侠",
                "category": "纪录综艺",
                "tags": [
                        "修仙",
                        "大女主",
                        "翡翠灵根",
                        "逆袭"
                ],
                "url": "movie-925.html",
                "cover": "25.jpg"
        },
        {
                "title": "灰姑娘药剂师",
                "year": "2020",
                "region": "日本",
                "type": "电视剧",
                "genre": "职场，医疗",
                "category": "动作冒险",
                "tags": [
                        "药剂师",
                        "医院",
                        "日常",
                        "温情"
                ],
                "url": "movie-926.html",
                "cover": "26.jpg"
        },
        {
                "title": "佐伊之死",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "惊悚 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "校园欺凌",
                        "网络暴力",
                        "母亲复仇"
                ],
                "url": "movie-927.html",
                "cover": "27.jpg"
        },
        {
                "title": "北方旅馆",
                "year": "2025",
                "region": "法国/加拿大",
                "type": "电视剧（第一季）",
                "genre": "悬疑/剧情/惊悚",
                "category": "欧美热播",
                "tags": [
                        "极夜",
                        "边境小镇",
                        "失踪案",
                        "全员嫌疑人",
                        "冷冽美学"
                ],
                "url": "movie-928.html",
                "cover": "28.jpg"
        },
        {
                "title": "穿高跟鞋的死神",
                "year": "2024",
                "region": "香港",
                "type": "电影",
                "genre": "动作、犯罪、惊悚",
                "category": "亚洲经典",
                "tags": [
                        "女杀手",
                        "高跟鞋",
                        "复仇",
                        "暴力美学"
                ],
                "url": "movie-929.html",
                "cover": "29.jpg"
        },
        {
                "title": "直面病魔",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "剧情 / 家庭 / 医疗",
                "category": "动作冒险",
                "tags": [
                        "白血病",
                        "单亲爸爸",
                        "骨髓移植",
                        "父爱",
                        "催泪"
                ],
                "url": "movie-930.html",
                "cover": "30.jpg"
        },
        {
                "title": "爹地拍档",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 动作, 家庭",
                "category": "动作冒险",
                "tags": [
                        "卧底",
                        "奶爸",
                        "幼儿园",
                        "黑帮",
                        "乌龙"
                ],
                "url": "movie-931.html",
                "cover": "31.jpg"
        },
        {
                "title": "断掌事件",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪，悬疑，惊悚",
                "category": "欧美热播",
                "tags": [
                        "断掌",
                        "连环杀手",
                        "记忆移植",
                        "港风",
                        "黑色电影"
                ],
                "url": "movie-932.html",
                "cover": "32.jpg"
        },
        {
                "title": "东方卫视月光露营会",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集 / 综艺剧",
                "genre": "真人秀, 剧情, 治愈",
                "category": "动作冒险",
                "tags": [
                        "露营",
                        "慢生活",
                        "明星素人互动"
                ],
                "url": "movie-933.html",
                "cover": "33.jpg"
        },
        {
                "title": "兵临城下之决战要塞",
                "year": "2010",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "战争历史",
                "category": "喜剧治愈",
                "tags": [
                        "二战",
                        "布列斯特",
                        "保卫战",
                        "真实改编"
                ],
                "url": "movie-934.html",
                "cover": "34.jpg"
        },
        {
                "title": "魔比斯",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 科幻, 恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "吸血鬼",
                        "漫威",
                        "反英雄",
                        "生化"
                ],
                "url": "movie-935.html",
                "cover": "35.jpg"
        },
        {
                "title": "彼得博士的广播录音带",
                "year": "2020",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻 / 悬疑 / 心理",
                "category": "喜剧治愈",
                "tags": [
                        "录音带",
                        "深夜广播",
                        "实验事故",
                        "声音记忆",
                        "时间错位",
                        "失真信号"
                ],
                "url": "movie-936.html",
                "cover": "36.jpg"
        },
        {
                "title": "权少的贴身翻译官",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情 / 剧情 / 职场",
                "category": "欧美热播",
                "tags": [
                        "霸总与翻译",
                        "跨文化冲突",
                        "职场成长",
                        "势均力敌"
                ],
                "url": "movie-937.html",
                "cover": "37.jpg"
        },
        {
                "title": "家庭私篇",
                "year": "2019",
                "region": "丹麦",
                "type": "电影",
                "genre": "剧情 / 心理 / 惊悚",
                "category": "日韩精选",
                "tags": [
                        "家庭录像",
                        "伪纪录片",
                        "心理阴影",
                        "原生家庭",
                        "北欧冷感"
                ],
                "url": "movie-938.html",
                "cover": "38.jpg"
        },
        {
                "title": "根源 奇巧计程车的路线",
                "year": "2025",
                "region": "日本",
                "type": "动画电影",
                "genre": "悬疑、剧情、犯罪",
                "category": "高分片单",
                "tags": [
                        "续作",
                        "计程车",
                        "群体",
                        "失踪",
                        "真相"
                ],
                "url": "movie-939.html",
                "cover": "39.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 活着 西瓜皮梦之船 青藏线 猛兽列车 致命录像带3：病毒 22年后的自白 谍舰 弃宝之岛：遥与魔法镜 鬼挡路3 法证先锋4 狂野小子1 几度菊花香 冰雪奇缘：生日惊喜 革命之路 城市乡巴鼠 黑衣人：全球追缉 冰原空难 甜姐儿 下一个就是你2 无名火粤语",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "爱情家庭",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-940.html",
                "cover": "40.jpg"
        },
        {
                "title": "亮演人生",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "群演",
                        "横店",
                        "梦想",
                        "荒诞",
                        "现实主义"
                ],
                "url": "movie-941.html",
                "cover": "41.jpg"
        },
        {
                "title": "我们得离开这个地方",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "科幻 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "时间循环",
                        "怪物",
                        "逃杀",
                        "密室"
                ],
                "url": "movie-942.html",
                "cover": "42.jpg"
        },
        {
                "title": "恐怖电影院",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "灵异",
                        "电影院",
                        "诅咒",
                        "反转"
                ],
                "url": "movie-943.html",
                "cover": "43.jpg"
        },
        {
                "title": "恐怖相亲",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "恐怖 / 悬疑 / 黑色喜剧",
                "category": "纪录综艺",
                "tags": [
                        "相亲",
                        "民俗怪谈",
                        "失踪案",
                        "反转",
                        "乡镇惊悚"
                ],
                "url": "movie-944.html",
                "cover": "44.jpg"
        },
        {
                "title": "血战山河",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争历史",
                "category": "喜剧治愈",
                "tags": [
                        "抗战",
                        "惨烈",
                        "兄弟情",
                        "战术",
                        "史诗"
                ],
                "url": "movie-945.html",
                "cover": "45.jpg"
        },
        {
                "title": "瓦兰：天使之谷",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "奇幻, 冒险",
                "category": "爱情家庭",
                "tags": [
                        "北欧神话",
                        "精灵",
                        "魔法",
                        "史诗"
                ],
                "url": "movie-946.html",
                "cover": "46.jpg"
        },
        {
                "title": "命中注定那头鹅",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情，奇幻",
                "category": "动作冒险",
                "tags": [
                        "鹅",
                        "命定恋人",
                        "乡村",
                        "转世",
                        "搞笑"
                ],
                "url": "movie-947.html",
                "cover": "47.jpg"
        },
        {
                "title": "暗黑街的颜役",
                "year": "1959",
                "region": "日本",
                "type": "电影",
                "genre": "犯罪 / 黑帮 / 黑白片",
                "category": "纪录综艺",
                "tags": [
                        "黑帮",
                        "昭和",
                        "任侠",
                        "黑白",
                        "经典"
                ],
                "url": "movie-948.html",
                "cover": "48.jpg"
        },
        {
                "title": "工作细胞第二季",
                "year": "2025",
                "region": "日本",
                "type": "动漫",
                "genre": "喜剧, 科普, 动作",
                "category": "华语佳作",
                "tags": [
                        "拟人化",
                        "细胞",
                        "续作"
                ],
                "url": "movie-949.html",
                "cover": "49.jpg"
        },
        {
                "title": "性爱魔术师",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 情色, 奇幻",
                "category": "日韩精选",
                "tags": [
                        "粉红电影",
                        "欲望解构",
                        "催眠术",
                        "婚姻危机",
                        "剧场"
                ],
                "url": "movie-950.html",
                "cover": "50.jpg"
        },
        {
                "title": "新梁山伯与祝英台",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 古装 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "蝴蝶",
                        "转世",
                        "现代",
                        "双线叙事",
                        "悲剧"
                ],
                "url": "movie-951.html",
                "cover": "51.jpg"
        },
        {
                "title": "盲盒哥哥",
                "year": "2024",
                "region": "中国",
                "type": "电视剧",
                "genre": "爱情, 喜剧",
                "category": "动作冒险",
                "tags": [
                        "盲盒",
                        "治愈",
                        "身份错位",
                        "甜宠"
                ],
                "url": "movie-952.html",
                "cover": "52.jpg"
        },
        {
                "title": "冰冻的闪光",
                "year": "2017",
                "region": "挪威/瑞典",
                "type": "电影",
                "genre": "惊悚/灾难",
                "category": "高分片单",
                "tags": [
                        "极地",
                        "科考站",
                        "未知病毒"
                ],
                "url": "movie-953.html",
                "cover": "53.jpg"
        },
        {
                "title": "来电传情",
                "year": "2021",
                "region": "意大利",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 温情",
                "category": "高分片单",
                "tags": [
                        "老式电话",
                        "时空对话",
                        "父子隔阂",
                        "1990年代怀旧",
                        "遗憾修复"
                ],
                "url": "movie-954.html",
                "cover": "54.jpg"
        },
        {
                "title": "情欲叛侣",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "爱情，剧情，情色，心理",
                "category": "喜剧治愈",
                "tags": [
                        "开放式婚姻",
                        "信任游戏",
                        "背叛",
                        "心理战",
                        "戛纳"
                ],
                "url": "movie-955.html",
                "cover": "55.jpg"
        },
        {
                "title": "研香奇谈",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "奇幻/悬疑/剧情",
                "category": "亚洲经典",
                "tags": [
                        "调香师",
                        "记忆气味",
                        "都市传说",
                        "单元破案"
                ],
                "url": "movie-956.html",
                "cover": "56.jpg"
        },
        {
                "title": "雪地黄金犬",
                "year": "2023",
                "region": "加拿大",
                "type": "电影",
                "genre": "冒险 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "狗狗电影",
                        "育空淘金",
                        "人与自然"
                ],
                "url": "movie-957.html",
                "cover": "57.jpg"
        },
        {
                "title": "罗宾汉",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "动作, 冒险, 历史",
                "category": "亚洲经典",
                "tags": [
                        "侠盗",
                        "弓箭",
                        "阶级对立",
                        "爽片",
                        "女性力量"
                ],
                "url": "movie-958.html",
                "cover": "58.jpg"
        },
        {
                "title": "犯罪心理第十六季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪, 悬疑",
                "category": "日韩精选",
                "tags": [
                        "连环杀手",
                        "侧写",
                        "FBI"
                ],
                "url": "movie-959.html",
                "cover": "59.jpg"
        },
        {
                "title": "＃现实高中",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 青春",
                "category": "爱情家庭",
                "tags": [
                        "社交媒体",
                        "平行宇宙",
                        "身份认同"
                ],
                "url": "movie-960.html",
                "cover": "60.jpg"
        },
        {
                "title": "世事无常",
                "year": "2018",
                "region": "中国香港",
                "type": "电影",
                "genre": "悬疑",
                "category": "华语佳作",
                "tags": [
                        "因果",
                        "轮回",
                        "都市传说",
                        "单元剧",
                        "惊悚"
                ],
                "url": "movie-961.html",
                "cover": "61.jpg"
        },
        {
                "title": "好想和你在一起",
                "year": "2024",
                "region": "中国",
                "type": "剧集",
                "genre": "爱情, 喜剧, 青春",
                "category": "悬疑惊悚",
                "tags": [
                        "甜宠",
                        "欢喜冤家",
                        "合租",
                        "漫画家"
                ],
                "url": "movie-962.html",
                "cover": "62.jpg"
        },
        {
                "title": "青春似火",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "历史剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "文革",
                        "工厂",
                        "理想主义"
                ],
                "url": "movie-963.html",
                "cover": "63.jpg"
        },
        {
                "title": "非战区",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "维和部队",
                        "生死救援",
                        "人性光辉",
                        "真实事件改编"
                ],
                "url": "movie-964.html",
                "cover": "64.jpg"
        },
        {
                "title": "鸿雁",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争, 剧情",
                "category": "高分片单",
                "tags": [
                        "谍战",
                        "书信",
                        "女性"
                ],
                "url": "movie-965.html",
                "cover": "65.jpg"
        },
        {
                "title": "斗破苍穹三年之约",
                "year": "2023",
                "region": "中国大陆",
                "type": "动画电影",
                "genre": "动作 / 奇幻",
                "category": "华语佳作",
                "tags": [
                        "玄幻",
                        "热血",
                        "决战",
                        "特效"
                ],
                "url": "movie-966.html",
                "cover": "66.jpg"
        },
        {
                "title": "暖",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "爱情家庭",
                "tags": [
                        "养老",
                        "阿尔茨海默症",
                        "亲情",
                        "催泪",
                        "治愈"
                ],
                "url": "movie-967.html",
                "cover": "67.jpg"
        },
        {
                "title": "武动乾坤第一季",
                "year": "2018",
                "region": "中国大陆",
                "type": "动画",
                "genre": "玄幻 / 热血 / 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "修炼升级",
                        "宗门试炼",
                        "上古秘境",
                        "逆袭成长"
                ],
                "url": "movie-968.html",
                "cover": "68.jpg"
        },
        {
                "title": "牛的战争",
                "year": "2023",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "剧情 / 历史 / 战争",
                "category": "喜剧治愈",
                "tags": [
                        "一战",
                        "动物",
                        "农场",
                        "兄弟"
                ],
                "url": "movie-969.html",
                "cover": "69.jpg"
        },
        {
                "title": "刑事案十号",
                "year": "2018",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑, 惊悚, 犯罪",
                "category": "亚洲经典",
                "tags": [
                        "密室",
                        "反转",
                        "录音带",
                        "追凶",
                        "低预算"
                ],
                "url": "movie-970.html",
                "cover": "70.jpg"
        },
        {
                "title": "丧尸不要停",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧, 恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "片场惊魂",
                        "伪纪录片",
                        "戏中戏",
                        "丧尸喜剧",
                        "日式吐槽"
                ],
                "url": "movie-971.html",
                "cover": "71.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 释放印度战俘 开膛手的名单 热点女王 恋爱倒带中 女士复仇国语 好人李成功 安娜与国王 托伦特警官：难逃傻网 遗失的小美好之谎言 为爱蔓延 克拉丽斯 他人之子2012 正直的候选人 破碎之家 村井之恋动画版 诅咒之吻 铁汉艳娘 偷情世家 浴血黑帮第一季 科迪内",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "日韩精选",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-972.html",
                "cover": "72.jpg"
        },
        {
                "title": "戏剧性谋杀",
                "year": "2024",
                "region": "日本",
                "type": "动画",
                "genre": "科幻, 悬疑, BL, 动作",
                "category": "悬疑惊悚",
                "tags": [
                        "架空世界",
                        "人造人",
                        "复仇",
                        "虚拟偶像",
                        "扭曲之爱"
                ],
                "url": "movie-973.html",
                "cover": "73.jpg"
        },
        {
                "title": "璀璨情诗",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "爱情、传记、剧情",
                "category": "纪录综艺",
                "tags": [
                        "诗人",
                        "浪漫主义",
                        "雪莱",
                        "悲剧美学"
                ],
                "url": "movie-974.html",
                "cover": "74.jpg"
        },
        {
                "title": "爱上火星男孩",
                "year": "2025",
                "region": "美国 / 英国",
                "type": "电影",
                "genre": "科幻 / 爱情 / 青春",
                "category": "悬疑惊悚",
                "tags": [
                        "星际穿越",
                        "初恋",
                        "火星",
                        "逆生长"
                ],
                "url": "movie-975.html",
                "cover": "75.jpg"
        },
        {
                "title": "一个巴勒斯坦家庭的故事",
                "year": "2025",
                "region": "巴勒斯坦",
                "type": "电影",
                "genre": "剧情、战争、家庭",
                "category": "华语佳作",
                "tags": [
                        "加沙",
                        "三代人",
                        "日常抵抗",
                        "纪录感",
                        "家书"
                ],
                "url": "movie-976.html",
                "cover": "76.jpg"
        },
        {
                "title": "铁血莲花",
                "year": "2025",
                "region": "中国大陆 / 葡萄牙",
                "type": "电影",
                "genre": "历史 / 动作 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "澳门",
                        "鸦片战争",
                        "冷兵器",
                        "民族气节"
                ],
                "url": "movie-977.html",
                "cover": "77.jpg"
        },
        {
                "title": "问候",
                "year": "2026",
                "region": "德国",
                "type": "短片",
                "genre": "剧情, 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "高概念",
                        "细节控",
                        "无声",
                        "社会实验"
                ],
                "url": "movie-978.html",
                "cover": "78.jpg"
        },
        {
                "title": "黑暗军团",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 战争",
                "category": "动作冒险",
                "tags": [
                        "末世机甲",
                        "人工智能叛乱",
                        "废土美学",
                        "人类反击"
                ],
                "url": "movie-979.html",
                "cover": "79.jpg"
        },
        {
                "title": "近月行动",
                "year": "2027",
                "region": "美国 / 中国大陆",
                "type": "电影",
                "genre": "科幻，灾难，动作",
                "category": "华语佳作",
                "tags": [
                        "太空救援",
                        "硬科幻",
                        "人类命运"
                ],
                "url": "movie-980.html",
                "cover": "80.jpg"
        },
        {
                "title": "新扎师妹粤语",
                "year": "2002",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情 / 犯罪 / 职场",
                "category": "欧美热播",
                "tags": [
                        "警匪",
                        "卧底",
                        "菜鸟",
                        "成长",
                        "市井"
                ],
                "url": "movie-981.html",
                "cover": "81.jpg"
        },
        {
                "title": "究竟天有几高",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "亲情",
                        "自闭症",
                        "天文",
                        "梦想",
                        "和解"
                ],
                "url": "movie-982.html",
                "cover": "82.jpg"
        },
        {
                "title": "各自逃生",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "剧情， 惊悚， 灾难",
                "category": "日韩精选",
                "tags": [
                        "人性",
                        "密室",
                        "生存",
                        "反转",
                        "道德困境"
                ],
                "url": "movie-983.html",
                "cover": "83.jpg"
        },
        {
                "title": "游戏王：怪兽之决斗",
                "year": "2000",
                "region": "日本",
                "type": "动画",
                "genre": "奇幻, 竞技",
                "category": "亚洲经典",
                "tags": [
                        "卡牌",
                        "热血",
                        "童年经典",
                        "伙伴"
                ],
                "url": "movie-984.html",
                "cover": "84.jpg"
        },
        {
                "title": "里应外合",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "犯罪, 悬疑, 动作",
                "category": "亚洲经典",
                "tags": [
                        "卧底反转",
                        "双面间谍",
                        "密室斗智",
                        "黑吃黑",
                        "暴力美学"
                ],
                "url": "movie-985.html",
                "cover": "85.jpg"
        },
        {
                "title": "搏忆",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "科幻 / 动作 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "记忆移植",
                        "武术",
                        "身份错位",
                        "黑科技",
                        "打斗爽片"
                ],
                "url": "movie-986.html",
                "cover": "86.jpg"
        },
        {
                "title": "杀人科",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "悬疑, 刑侦, 心理",
                "category": "动作冒险",
                "tags": [
                        "冷案组",
                        "女性视角",
                        "连环杀手",
                        "档案"
                ],
                "url": "movie-987.html",
                "cover": "87.jpg"
        },
        {
                "title": "077情报员：核子间谍战",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "动作，冒险，科幻",
                "category": "华语佳作",
                "tags": [
                        "间谍",
                        "核武",
                        "007风格",
                        "法国特工",
                        "高科技"
                ],
                "url": "movie-988.html",
                "cover": "88.jpg"
        },
        {
                "title": "蜗牛与黄鹂鸟",
                "year": "2025",
                "region": "中国台湾",
                "type": "电视剧",
                "genre": "爱情 / 音乐 / 青春",
                "category": "喜剧治愈",
                "tags": [
                        "音乐",
                        "治愈",
                        "青梅竹马",
                        "成长"
                ],
                "url": "movie-989.html",
                "cover": "89.jpg"
        },
        {
                "title": "朵拉的安宁",
                "year": "2026",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 战争 / 家庭",
                "category": "高分片单",
                "tags": [
                        "一战后方",
                        "母亲视角",
                        "乡村坚守",
                        "女性力量"
                ],
                "url": "movie-990.html",
                "cover": "90.jpg"
        },
        {
                "title": "荡漾春心",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 剧情 / 情色",
                "category": "喜剧治愈",
                "tags": [
                        "中年出轨",
                        "欲望重建",
                        "禁忌之恋"
                ],
                "url": "movie-991.html",
                "cover": "91.jpg"
        },
        {
                "title": "流浪猫鲍勃",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "爱情家庭",
                "tags": [
                        "猫",
                        "流浪汉",
                        "戒毒",
                        "治愈"
                ],
                "url": "movie-992.html",
                "cover": "92.jpg"
        },
        {
                "title": "鉴真大和尚",
                "year": "2009",
                "region": "中国",
                "type": "电影",
                "genre": "历史传记",
                "category": "亚洲经典",
                "tags": [
                        "唐代",
                        "东渡日本",
                        "佛法传承",
                        "僧侣修行",
                        "海上险途",
                        "文化交流"
                ],
                "url": "movie-993.html",
                "cover": "93.jpg"
        },
        {
                "title": "薇拉",
                "year": "2025",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "剧情, 战争",
                "category": "动作冒险",
                "tags": [
                        "二战",
                        "女性",
                        "狙击手"
                ],
                "url": "movie-994.html",
                "cover": "94.jpg"
        },
        {
                "title": "小夜曲",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "爱情 / 音乐",
                "category": "爱情家庭",
                "tags": [
                        "古典乐",
                        "救赎",
                        "忘年恋"
                ],
                "url": "movie-995.html",
                "cover": "95.jpg"
        },
        {
                "title": "梵天神器：灭世开端",
                "year": "2030",
                "region": "印度",
                "type": "电影",
                "genre": "动作, 奇幻, 神话",
                "category": "喜剧治愈",
                "tags": [
                        "印度神话",
                        "特效大片",
                        "神器争夺",
                        "史诗"
                ],
                "url": "movie-996.html",
                "cover": "96.jpg"
        },
        {
                "title": "最后一封情书",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 爱情 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "阿尔茨海默症",
                        "代际和解",
                        "书信",
                        "催泪"
                ],
                "url": "movie-997.html",
                "cover": "97.jpg"
        },
        {
                "title": "黑白照片的少女",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 剧情, 历史",
                "category": "喜剧治愈",
                "tags": [
                        "年代",
                        "寻人",
                        "照片"
                ],
                "url": "movie-998.html",
                "cover": "98.jpg"
        },
        {
                "title": "借问英雄何处",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作, 历史",
                "category": "动作冒险",
                "tags": [
                        "武侠",
                        "民国",
                        "刺杀"
                ],
                "url": "movie-999.html",
                "cover": "99.jpg"
        },
        {
                "title": "比赛规则",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚，动作",
                "category": "爱情家庭",
                "tags": [
                        "地下搏击",
                        "生存游戏",
                        "复仇",
                        "规则反转",
                        "阶级隐喻"
                ],
                "url": "movie-1000.html",
                "cover": "100.jpg"
        },
        {
                "title": "花神咖啡馆",
                "year": "2011",
                "region": "法国 / 加拿大",
                "type": "电影",
                "genre": "剧情, 爱情",
                "category": "高分片单",
                "tags": [
                        "宿命",
                        "双线叙事",
                        "灵魂伴侣",
                        "情感纠葛"
                ],
                "url": "movie-1001.html",
                "cover": "101.jpg"
        },
        {
                "title": "昭和歌谣大全集",
                "year": "2023",
                "region": "日本",
                "type": "电视剧",
                "genre": "音乐/家庭",
                "category": "日韩精选",
                "tags": [
                        "卡拉OK",
                        "昭和怀旧",
                        "家庭和解",
                        "单元剧",
                        "每集一首歌"
                ],
                "url": "movie-1002.html",
                "cover": "102.jpg"
        },
        {
                "title": "最美的青春",
                "year": "2018",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 传记 / 年代",
                "category": "动作冒险",
                "tags": [
                        "塞罕坝",
                        "造林",
                        "青春献礼",
                        "真实改编"
                ],
                "url": "movie-1003.html",
                "cover": "103.jpg"
        },
        {
                "title": "千头万绪",
                "year": "2025",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "剧情 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "记忆碎片",
                        "多重人格",
                        "心理医生",
                        "身份谜团"
                ],
                "url": "movie-1004.html",
                "cover": "104.jpg"
        },
        {
                "title": "光荣之旅",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "运动, 励志",
                "category": "高分片单",
                "tags": [
                        "电竞",
                        "残疾",
                        "团队",
                        "逆袭"
                ],
                "url": "movie-1005.html",
                "cover": "105.jpg"
        },
        {
                "title": "短信情缘",
                "year": "2024",
                "region": "泰国",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "错发短信",
                        "笔友",
                        "治愈",
                        "清新"
                ],
                "url": "movie-1006.html",
                "cover": "106.jpg"
        },
        {
                "title": "毁灭种子",
                "year": "2018",
                "region": "加拿大",
                "type": "剧集",
                "genre": "科幻，悬疑，惊悚",
                "category": "欧美热播",
                "tags": [
                        "末日",
                        "植物",
                        "寄生",
                        "隔离"
                ],
                "url": "movie-1007.html",
                "cover": "107.jpg"
        },
        {
                "title": "春风得意上云霄",
                "year": "1991",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧 / 爱情",
                "category": "日韩精选",
                "tags": [
                        "空乘",
                        "乌龙",
                        "台湾老电影",
                        "追女仔"
                ],
                "url": "movie-1008.html",
                "cover": "108.jpg"
        },
        {
                "title": "马歇尔，欢迎你",
                "year": "1953",
                "region": "西班牙",
                "type": "电影",
                "genre": "喜剧, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "黑色幽默",
                        "马歇尔计划",
                        "西班牙小镇",
                        "荒诞现实",
                        "经典讽刺"
                ],
                "url": "movie-1009.html",
                "cover": "109.jpg"
        },
        {
                "title": "显影的女人",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 女性",
                "category": "悬疑惊悚",
                "tags": [
                        "老照片",
                        "复仇",
                        "双胞胎"
                ],
                "url": "movie-1010.html",
                "cover": "110.jpg"
        },
        {
                "title": "丧尸猎魔",
                "year": "2022",
                "region": "韩国",
                "type": "剧集",
                "genre": "动作, 恐怖, 丧尸",
                "category": "华语佳作",
                "tags": [
                        "丧尸+奇幻",
                        "猎魔人",
                        "双男主"
                ],
                "url": "movie-1011.html",
                "cover": "111.jpg"
        },
        {
                "title": "破鞋",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 悬疑, 社会",
                "category": "欧美热播",
                "tags": [
                        "乡村",
                        "舆论",
                        "女性",
                        "反转"
                ],
                "url": "movie-1012.html",
                "cover": "112.jpg"
        },
        {
                "title": "夏日菊花茶",
                "year": "2022",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "都市 / 喜剧 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "夏天",
                        "合租生活",
                        "小城创业",
                        "家庭和解",
                        "清新治愈"
                ],
                "url": "movie-1013.html",
                "cover": "113.jpg"
        },
        {
                "title": "狄克崔西",
                "year": "1990",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 犯罪 / 黑色电影",
                "category": "华语佳作",
                "tags": [
                        "漫画改编",
                        "霓虹美学",
                        "阿尔·帕西诺"
                ],
                "url": "movie-1014.html",
                "cover": "114.jpg"
        },
        {
                "title": "特务六虎将",
                "year": "1990",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 战争",
                "category": "欧美热播",
                "tags": [
                        "二战",
                        "敢死队",
                        "兄弟情",
                        "牺牲"
                ],
                "url": "movie-1015.html",
                "cover": "115.jpg"
        },
        {
                "title": "五十年后之世界",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻、剧情、伦理",
                "category": "纪录综艺",
                "tags": [
                        "冷冻休眠",
                        "时间跳跃",
                        "未来社会",
                        "代际冲突",
                        "技术伦理"
                ],
                "url": "movie-1016.html",
                "cover": "116.jpg"
        },
        {
                "title": "穿越时空的少女",
                "year": "2006",
                "region": "日本",
                "type": "动画电影",
                "genre": "科幻, 青春, 爱情",
                "category": "高分片单",
                "tags": [
                        "细田守",
                        "时间跳跃",
                        "夏日青春",
                        "遗憾美学"
                ],
                "url": "movie-1017.html",
                "cover": "117.jpg"
        },
        {
                "title": "绝地逃生",
                "year": "2025",
                "region": "中国",
                "type": "电影",
                "genre": "动作 / 灾难",
                "category": "高分片单",
                "tags": [
                        "地震",
                        "救援",
                        "极限生存",
                        "催泪"
                ],
                "url": "movie-1018.html",
                "cover": "118.jpg"
        },
        {
                "title": "绝妙青春",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "青春, 校园, 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "高三",
                        "朋克",
                        "叛逆",
                        "乐队",
                        "友情"
                ],
                "url": "movie-1019.html",
                "cover": "119.jpg"
        },
        {
                "title": "两个大太阳",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 悬疑",
                "category": "欧美热播",
                "tags": [
                        "双胞胎",
                        "身份互换",
                        "农村"
                ],
                "url": "movie-1020.html",
                "cover": "120.jpg"
        },
        {
                "title": "涨潮小屋",
                "year": "2027",
                "region": "英国",
                "type": "电视剧",
                "genre": "恐怖， 悬疑， 奇幻",
                "category": "喜剧治愈",
                "tags": [
                        "哥特",
                        "潮汐诅咒",
                        "家族秘密"
                ],
                "url": "movie-1021.html",
                "cover": "121.jpg"
        },
        {
                "title": "爱在度假屋",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情、剧情",
                "category": "爱情家庭",
                "tags": [
                        "夏日",
                        "治愈",
                        "重逢",
                        "遗憾"
                ],
                "url": "movie-1022.html",
                "cover": "122.jpg"
        },
        {
                "title": "密室逃生",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "密室",
                        "解谜",
                        "人性",
                        "反转",
                        "心理战"
                ],
                "url": "movie-1023.html",
                "cover": "123.jpg"
        },
        {
                "title": "基地第一季",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "太空歌剧",
                        "心理史学",
                        "文明存续",
                        "改编"
                ],
                "url": "movie-1024.html",
                "cover": "124.jpg"
        },
        {
                "title": "牧蜂姑娘",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 励志, 乡村",
                "category": "高分片单",
                "tags": [
                        "乡村振兴",
                        "女性力量",
                        "纯爱"
                ],
                "url": "movie-1025.html",
                "cover": "125.jpg"
        },
        {
                "title": "公牛犹斗",
                "year": "2024",
                "region": "西班牙",
                "type": "电影",
                "genre": "剧情, 运动",
                "category": "欧美热播",
                "tags": [
                        "斗牛士",
                        "父子",
                        "传统",
                        "救赎"
                ],
                "url": "movie-1026.html",
                "cover": "126.jpg"
        },
        {
                "title": "矿哥矿嫂的平凡生活",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情, 家庭, 农村",
                "category": "喜剧治愈",
                "tags": [
                        "矿山",
                        "基层干部",
                        "温暖现实"
                ],
                "url": "movie-1027.html",
                "cover": "127.jpg"
        },
        {
                "title": "房屋出租",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖，悬疑",
                "category": "纪录综艺",
                "tags": [
                        "凶宅",
                        "租客",
                        "诡异邻居",
                        "暗黑秘密"
                ],
                "url": "movie-1028.html",
                "cover": "128.jpg"
        },
        {
                "title": "印第安纳的蒙罗维亚",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "亚洲经典",
                "tags": [
                        "乡村",
                        "音乐",
                        "返乡",
                        "和解"
                ],
                "url": "movie-1029.html",
                "cover": "129.jpg"
        },
        {
                "title": "异形：圣地",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻/恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "宗教隐喻",
                        "信仰崩塌",
                        "异形起源"
                ],
                "url": "movie-1030.html",
                "cover": "130.jpg"
        },
        {
                "title": "王牌制片家",
                "year": "2025",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "喜剧 / 职场",
                "category": "爱情家庭",
                "tags": [
                        "娱乐圈",
                        "打工魂",
                        "内幕"
                ],
                "url": "movie-1031.html",
                "cover": "131.jpg"
        },
        {
                "title": "机器侠",
                "year": "2009",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻, 喜剧",
                "category": "欧美热播",
                "tags": [
                        "机器人",
                        "警察搭档",
                        "国产科幻",
                        "无厘头"
                ],
                "url": "movie-1032.html",
                "cover": "132.jpg"
        },
        {
                "title": "珍珠劫",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装、悬疑",
                "category": "欧美热播",
                "tags": [
                        "珍珠贸易",
                        "朝堂阴谋",
                        "女性经商",
                        "复仇爽剧",
                        "反转再反转"
                ],
                "url": "movie-1033.html",
                "cover": "133.jpg"
        },
        {
                "title": "玻璃之心",
                "year": "2024",
                "region": "丹麦 / 瑞典",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "心理",
                        "玻璃艺术",
                        "童年创伤",
                        "北欧"
                ],
                "url": "movie-1034.html",
                "cover": "134.jpg"
        },
        {
                "title": "魂断威尼斯",
                "year": "2025",
                "region": "意大利 / 法国",
                "type": "电影",
                "genre": "剧情 / 爱情 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "水城",
                        "美少年",
                        "作曲家",
                        "瘟疫"
                ],
                "url": "movie-1035.html",
                "cover": "135.jpg"
        },
        {
                "title": "读心师",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑 / 犯罪 / 心理",
                "category": "爱情家庭",
                "tags": [
                        "测谎",
                        "微表情",
                        "刑侦",
                        "单元剧"
                ],
                "url": "movie-1036.html",
                "cover": "136.jpg"
        },
        {
                "title": "露丝和亚历克斯",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "跨文化",
                        "移民",
                        "相遇",
                        "温情",
                        "英伦"
                ],
                "url": "movie-1037.html",
                "cover": "137.jpg"
        },
        {
                "title": "大城小子粤语",
                "year": "1988",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情动作",
                "category": "华语佳作",
                "tags": [
                        "黑帮",
                        "兄弟情",
                        "80年代",
                        "港剧经典"
                ],
                "url": "movie-1038.html",
                "cover": "138.jpg"
        },
        {
                "title": "硬体",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "赛博朋克",
                        "义体反噬",
                        "身份哲学"
                ],
                "url": "movie-1039.html",
                "cover": "139.jpg"
        },
        {
                "title": "爱也艰难",
                "year": "2018",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "禁忌",
                        "伦理",
                        "都市"
                ],
                "url": "movie-1040.html",
                "cover": "140.jpg"
        },
        {
                "title": "藤子海敏的时间",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "传记",
                "category": "悬疑惊悚",
                "tags": [
                        "钢琴家",
                        "失聪",
                        "时间穿梭",
                        "音乐治愈"
                ],
                "url": "movie-1041.html",
                "cover": "141.jpg"
        },
        {
                "title": "笑笑笑",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 喜剧 / 黑色幽默",
                "category": "亚洲经典",
                "tags": [
                        "脱口秀",
                        "绝症谎言",
                        "丧事喜办",
                        "悲喜剧"
                ],
                "url": "movie-1042.html",
                "cover": "142.jpg"
        },
        {
                "title": "天堂回信",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "死亡",
                        "亲情",
                        "留守儿童",
                        "治愈"
                ],
                "url": "movie-1043.html",
                "cover": "143.jpg"
        },
        {
                "title": "血战伤心岭",
                "year": "1988",
                "region": "中国香港",
                "type": "电影",
                "genre": "战争 / 动作 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "山地防线",
                        "生死兄弟",
                        "突围反击",
                        "牺牲",
                        "硬核战地"
                ],
                "url": "movie-1044.html",
                "cover": "144.jpg"
        },
        {
                "title": "我的叔叔",
                "year": "2016",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "废柴哲学",
                        "日常治愈",
                        "儿童视角"
                ],
                "url": "movie-1045.html",
                "cover": "145.jpg"
        },
        {
                "title": "爱情傻子",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情，剧情",
                "category": "动作冒险",
                "tags": [
                        "小镇",
                        "偏执",
                        "纯爱",
                        "悲剧"
                ],
                "url": "movie-1046.html",
                "cover": "146.jpg"
        },
        {
                "title": "未闻花名",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情 / 奇幻 / 治愈",
                "category": "喜剧治愈",
                "tags": [
                        "转世",
                        "轮回",
                        "校园",
                        "催泪"
                ],
                "url": "movie-1047.html",
                "cover": "147.jpg"
        },
        {
                "title": "正义联盟：开战",
                "year": "2014",
                "region": "美国",
                "type": "电影",
                "genre": "动画, 动作, 科幻",
                "category": "喜剧治愈",
                "tags": [
                        "DC宇宙",
                        "外星入侵",
                        "平行宇宙"
                ],
                "url": "movie-1048.html",
                "cover": "148.jpg"
        },
        {
                "title": "鎗火",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作， 犯罪， 剧情",
                "category": "日韩精选",
                "tags": [
                        "枪战",
                        "黑帮",
                        "宿命",
                        "兄弟情",
                        "暴力美学"
                ],
                "url": "movie-1049.html",
                "cover": "149.jpg"
        },
        {
                "title": "多云天气",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "治愈",
                        "时间循环",
                        "小城",
                        "温情"
                ],
                "url": "movie-1050.html",
                "cover": "150.jpg"
        },
        {
                "title": "女生向前走",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "青春 / 公路 / 女性",
                "category": "喜剧治愈",
                "tags": [
                        "高考",
                        "闺蜜",
                        "公路片",
                        "成长"
                ],
                "url": "movie-1051.html",
                "cover": "1.jpg"
        },
        {
                "title": "灼热",
                "year": "2024",
                "region": "法国 / 德国",
                "type": "电影",
                "genre": "剧情 / 爱情 / 情色",
                "category": "日韩精选",
                "tags": [
                        "文艺片",
                        "极端高温",
                        "情感炙烤",
                        "不伦之恋",
                        "视觉系"
                ],
                "url": "movie-1052.html",
                "cover": "2.jpg"
        },
        {
                "title": "白雪公主斗牛记",
                "year": "2025",
                "region": "西班牙",
                "type": "电影",
                "genre": "剧情, 黑色喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "斗牛",
                        "童话改编",
                        "女性力量"
                ],
                "url": "movie-1053.html",
                "cover": "3.jpg"
        },
        {
                "title": "终极杀阵",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "动作，犯罪",
                "category": "日韩精选",
                "tags": [
                        "赛车",
                        "卧底",
                        "巴黎",
                        "极限驾驶"
                ],
                "url": "movie-1054.html",
                "cover": "4.jpg"
        },
        {
                "title": "玩伴猫耳娘",
                "year": "2026",
                "region": "日本",
                "type": "剧集",
                "genre": "喜剧, 科幻, 萌系, 爱情",
                "category": "华语佳作",
                "tags": [
                        "外星人",
                        "日常",
                        "福利向",
                        "军事宅",
                        "猫娘"
                ],
                "url": "movie-1055.html",
                "cover": "5.jpg"
        },
        {
                "title": "血．色．复仇",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "动作、惊悚",
                "category": "高分片单",
                "tags": [
                        "芭蕾",
                        "杀手",
                        "女性复仇",
                        "暴力美学",
                        "巴黎"
                ],
                "url": "movie-1056.html",
                "cover": "6.jpg"
        },
        {
                "title": "问厨哪来清如许",
                "year": "2023",
                "region": "中国台湾",
                "type": "电视剧 (20集)",
                "genre": "剧情 / 美食",
                "category": "华语佳作",
                "tags": [
                        "美食",
                        "哲学",
                        "三代",
                        "传承",
                        "禅意"
                ],
                "url": "movie-1057.html",
                "cover": "7.jpg"
        },
        {
                "title": "铁蹄下的村庄",
                "year": "1987",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "战争 / 历史 / 乡土",
                "category": "华语佳作",
                "tags": [
                        "侵略阴影",
                        "村庄守望",
                        "群像抗争",
                        "家国命运",
                        "牺牲与守护"
                ],
                "url": "movie-1058.html",
                "cover": "8.jpg"
        },
        {
                "title": "44号孩子",
                "year": "2022",
                "region": "英国 / 美国",
                "type": "电影",
                "genre": "悬疑, 惊悚, 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "连环杀手",
                        "苏联",
                        "极权",
                        "孤儿"
                ],
                "url": "movie-1059.html",
                "cover": "9.jpg"
        },
        {
                "title": "接线追缉",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 犯罪",
                "category": "欧美热播",
                "tags": [
                        "追缉",
                        "接线",
                        "复仇",
                        "飙车",
                        "香港"
                ],
                "url": "movie-1060.html",
                "cover": "10.jpg"
        },
        {
                "title": "万水千山总是情国语",
                "year": "2025",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "剧情，爱情，年代",
                "category": "高分片单",
                "tags": [
                        "豪门恩怨",
                        "家国情怀",
                        "粤语国语音轨"
                ],
                "url": "movie-1061.html",
                "cover": "11.jpg"
        },
        {
                "title": "寻找梦幻岛",
                "year": "2004",
                "region": "美国 / 英国",
                "type": "电影",
                "genre": "剧情 / 传记 / 奇幻",
                "category": "欧美热播",
                "tags": [
                        "彼得潘",
                        "作家传记",
                        "童真",
                        "催泪"
                ],
                "url": "movie-1062.html",
                "cover": "12.jpg"
        },
        {
                "title": "突袭训练室",
                "year": "2025",
                "region": "印度尼西亚",
                "type": "电影",
                "genre": "动作 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "封闭空间",
                        "肉搏战",
                        "复仇",
                        "极限反杀"
                ],
                "url": "movie-1063.html",
                "cover": "13.jpg"
        },
        {
                "title": "美少年学社",
                "year": "2018",
                "region": "中国大陆",
                "type": "网络剧 / 综艺衍生剧",
                "genre": "青春 / 校园",
                "category": "动作冒险",
                "tags": [
                        "偶像",
                        "成长",
                        "轻喜剧"
                ],
                "url": "movie-1064.html",
                "cover": "14.jpg"
        },
        {
                "title": "女人四十玩说唱",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "音乐喜剧",
                "category": "纪录综艺",
                "tags": [
                        "说唱",
                        "中年危机",
                        "女性",
                        "追梦",
                        "方言"
                ],
                "url": "movie-1065.html",
                "cover": "15.jpg"
        },
        {
                "title": "尸妖",
                "year": "2026",
                "region": "中国大陆/泰国",
                "type": "电影",
                "genre": "恐怖，民俗",
                "category": "喜剧治愈",
                "tags": [
                        "湘西赶尸",
                        "东南亚降头",
                        "公路恐怖"
                ],
                "url": "movie-1066.html",
                "cover": "16.jpg"
        },
        {
                "title": "鹰之影",
                "year": "2027",
                "region": "韩国",
                "type": "电影",
                "genre": "动作 / 悬疑 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "朝韩谍战",
                        "独行侠",
                        "高燃动作",
                        "复仇"
                ],
                "url": "movie-1067.html",
                "cover": "17.jpg"
        },
        {
                "title": "有益的欺诈",
                "year": "2023",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情 / 律政 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "以恶制恶",
                        "律师",
                        "诈骗",
                        "复仇",
                        "高智商"
                ],
                "url": "movie-1068.html",
                "cover": "18.jpg"
        },
        {
                "title": "火山地狱",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 犯罪, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "罪案",
                        "人性",
                        "真相",
                        "高压",
                        "救赎"
                ],
                "url": "movie-1069.html",
                "cover": "19.jpg"
        },
        {
                "title": "超越我们的差异",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "亲情",
                        "社会议题",
                        "代际冲突",
                        "和解"
                ],
                "url": "movie-1070.html",
                "cover": "20.jpg"
        },
        {
                "title": "疯子，我和你",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "爱情， 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "精神病院",
                        "浪漫",
                        "治愈",
                        "荒诞"
                ],
                "url": "movie-1071.html",
                "cover": "21.jpg"
        },
        {
                "title": "凡人英雄",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情, 动作",
                "category": "亚洲经典",
                "tags": [
                        "都市",
                        "小人物",
                        "见义勇为",
                        "热血"
                ],
                "url": "movie-1072.html",
                "cover": "22.jpg"
        },
        {
                "title": "那一夜，我们谈情说爱爱",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 爱情 / 文艺",
                "category": "欧美热播",
                "tags": [
                        "一夜情",
                        "深度对话",
                        "城市孤独",
                        "后现代"
                ],
                "url": "movie-1073.html",
                "cover": "23.jpg"
        },
        {
                "title": "断魂咒",
                "year": "2007",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖",
                "category": "日韩精选",
                "tags": [
                        "降头",
                        "巫术",
                        "血腥",
                        "高概念",
                        "诅咒"
                ],
                "url": "movie-1074.html",
                "cover": "24.jpg"
        },
        {
                "title": "问药",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "悬疑, 奇幻, 古装",
                "category": "亚洲经典",
                "tags": [
                        "中医",
                        "单元探案",
                        "草药",
                        "师徒",
                        "神秘组织"
                ],
                "url": "movie-1075.html",
                "cover": "25.jpg"
        },
        {
                "title": "星尘芭蕾舞厅皇后",
                "year": "2007",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 运动",
                "category": "爱情家庭",
                "tags": [
                        "国标舞",
                        "北伦敦",
                        "移民",
                        "梦想"
                ],
                "url": "movie-1076.html",
                "cover": "26.jpg"
        },
        {
                "title": "小幸福",
                "year": "2021",
                "region": "中国大陆",
                "type": "TV剧集",
                "genre": "剧情, 家庭, 伦理",
                "category": "爱情家庭",
                "tags": [
                        "现实题材",
                        "催泪",
                        "婆媳",
                        "北漂",
                        "治愈"
                ],
                "url": "movie-1077.html",
                "cover": "27.jpg"
        },
        {
                "title": "李清照",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "传记 / 历史 / 剧情",
                "category": "高分片单",
                "tags": [
                        "女性词人",
                        "南宋",
                        "文学改编",
                        "家国情怀",
                        "诗意美学"
                ],
                "url": "movie-1078.html",
                "cover": "28.jpg"
        },
        {
                "title": "绝命记忆",
                "year": "2015",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑, 科幻",
                "category": "亚洲经典",
                "tags": [
                        "记忆删除",
                        "阴谋",
                        "反转再反转",
                        "身份迷失"
                ],
                "url": "movie-1079.html",
                "cover": "29.jpg"
        },
        {
                "title": "龙凤香车",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，喜剧",
                "category": "动作冒险",
                "tags": [
                        "香港",
                        "出租车",
                        "卧底",
                        "黑帮"
                ],
                "url": "movie-1080.html",
                "cover": "30.jpg"
        },
        {
                "title": "移动迷宫2",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作，科幻，惊悚",
                "category": "动作冒险",
                "tags": [
                        "末日",
                        "迷宫",
                        "变异生物",
                        "逃亡"
                ],
                "url": "movie-1081.html",
                "cover": "31.jpg"
        },
        {
                "title": "俏女冲冲冲",
                "year": "1993",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧, 动作",
                "category": "喜剧治愈",
                "tags": [
                        "女警",
                        "乌龙",
                        "搭档",
                        "枪战",
                        "笑料"
                ],
                "url": "movie-1082.html",
                "cover": "32.jpg"
        },
        {
                "title": "度假营的自白",
                "year": "2026",
                "region": "英国",
                "type": "剧集",
                "genre": "剧情，悬疑，犯罪",
                "category": "华语佳作",
                "tags": [
                        "青少年",
                        "夏令营",
                        "回忆杀",
                        "陈年旧案"
                ],
                "url": "movie-1083.html",
                "cover": "33.jpg"
        },
        {
                "title": "妹姊受劫",
                "year": "2016",
                "region": "中国台湾",
                "type": "电影",
                "genre": "悬疑 / 犯罪",
                "category": "爱情家庭",
                "tags": [
                        "绑架",
                        "姐妹情深",
                        "赎金",
                        "反转"
                ],
                "url": "movie-1084.html",
                "cover": "34.jpg"
        },
        {
                "title": "国王的选择",
                "year": "2020",
                "region": "挪威",
                "type": "电影",
                "genre": "历史 / 战争",
                "category": "日韩精选",
                "tags": [
                        "二战",
                        "王室",
                        "抉择"
                ],
                "url": "movie-1085.html",
                "cover": "35.jpg"
        },
        {
                "title": "英伦琵琶",
                "year": "1986",
                "region": "香港",
                "type": "电影",
                "genre": "动作，喜剧",
                "category": "日韩精选",
                "tags": [
                        "伦敦",
                        "黑帮",
                        "乐器武器",
                        "兄弟情",
                        "怀旧"
                ],
                "url": "movie-1086.html",
                "cover": "36.jpg"
        },
        {
                "title": "王子与贫儿",
                "year": "2013",
                "region": "英国",
                "type": "电影",
                "genre": "剧情，家庭，冒险",
                "category": "爱情家庭",
                "tags": [
                        "身份互换",
                        "英伦",
                        "成长",
                        "经典改编"
                ],
                "url": "movie-1087.html",
                "cover": "37.jpg"
        },
        {
                "title": "他来自天堂粤语",
                "year": "1992",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "奇幻 / 喜剧 / 爱情",
                "category": "纪录综艺",
                "tags": [
                        "TVB",
                        "天使下凡",
                        "温情",
                        "怀旧港剧"
                ],
                "url": "movie-1088.html",
                "cover": "38.jpg"
        },
        {
                "title": "七擒七纵七色狼 粤语",
                "year": "2007",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 情色 / 古装",
                "category": "日韩精选",
                "tags": [
                        "粤语原声",
                        "风月片",
                        "恶搞",
                        "翻拍"
                ],
                "url": "movie-1089.html",
                "cover": "39.jpg"
        },
        {
                "title": "回忆潜行",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 爱情",
                "category": "欧美热播",
                "tags": [
                        "记忆",
                        "黑色电影",
                        "悲剧",
                        "视觉系"
                ],
                "url": "movie-1090.html",
                "cover": "40.jpg"
        },
        {
                "title": "吾妻在上",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "古装 / 爱情 / 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "先婚后爱",
                        "女强男弱",
                        "宅斗",
                        "轻松甜宠"
                ],
                "url": "movie-1091.html",
                "cover": "41.jpg"
        },
        {
                "title": "阿飞正传",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 犯罪",
                "category": "日韩精选",
                "tags": [
                        "港风",
                        "卧底",
                        "宿命感",
                        "翻拍经典并非重制"
                ],
                "url": "movie-1092.html",
                "cover": "42.jpg"
        },
        {
                "title": "热血青春2014",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "青春, 校园, 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "八十年代复古",
                        "打架王",
                        "纯爱",
                        "友情岁月"
                ],
                "url": "movie-1093.html",
                "cover": "43.jpg"
        },
        {
                "title": "富有同情心的间谍",
                "year": "2025",
                "region": "美国/德国",
                "type": "剧集",
                "genre": "惊悚, 谍战, 剧情",
                "category": "高分片单",
                "tags": [
                        "双面间谍",
                        "道德困境",
                        "冷战重启"
                ],
                "url": "movie-1094.html",
                "cover": "44.jpg"
        },
        {
                "title": "你在我的右手边",
                "year": "2026",
                "region": "中国",
                "type": "剧集",
                "genre": "青春 / 奇幻",
                "category": "亚洲经典",
                "tags": [
                        "双向暗恋",
                        "时间循环",
                        "治愈甜剧"
                ],
                "url": "movie-1095.html",
                "cover": "45.jpg"
        },
        {
                "title": "空巢也疯狂",
                "year": "2023",
                "region": "中国",
                "type": "喜剧电影",
                "genre": "喜剧、现实、暖心",
                "category": "日韩精选",
                "tags": [
                        "空巢族",
                        "晚年",
                        "邻里互助",
                        "社交平台",
                        "反转人生"
                ],
                "url": "movie-1096.html",
                "cover": "46.jpg"
        },
        {
                "title": "狐尾小精灵",
                "year": "2024",
                "region": "日本",
                "type": "TV动画剧集，OVA",
                "genre": "奇幻 / 治愈 / 日常",
                "category": "悬疑惊悚",
                "tags": [
                        "狐妖",
                        "乡下",
                        "老年丧偶",
                        "陪伴",
                        "失去与获得"
                ],
                "url": "movie-1097.html",
                "cover": "47.jpg"
        },
        {
                "title": "流人第四季",
                "year": "2025",
                "region": "英国",
                "type": "电视剧",
                "genre": "剧情 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "谍战",
                        "军情五处",
                        "慢马",
                        "退休特工",
                        "内鬼"
                ],
                "url": "movie-1098.html",
                "cover": "48.jpg"
        },
        {
                "title": "爆裂青春",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "青春，运动，剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "滑板",
                        "街头",
                        "父子",
                        "和解",
                        "热血"
                ],
                "url": "movie-1099.html",
                "cover": "49.jpg"
        },
        {
                "title": "严父孝女",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "纪录综艺",
                "tags": [
                        "父女",
                        "高考",
                        "误解",
                        "和解",
                        "绝症"
                ],
                "url": "movie-1100.html",
                "cover": "50.jpg"
        },
        {
                "title": "死灵编码",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "科幻悬疑",
                "category": "爱情家庭",
                "tags": [
                        "代码",
                        "亡灵",
                        "程序员",
                        "都市传说"
                ],
                "url": "movie-1101.html",
                "cover": "51.jpg"
        },
        {
                "title": "亲爱的白人",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 喜剧",
                "category": "日韩精选",
                "tags": [
                        "种族议题",
                        "校园",
                        "黑色幽默",
                        "社会讽刺"
                ],
                "url": "movie-1102.html",
                "cover": "52.jpg"
        },
        {
                "title": "杀绝国语",
                "year": "1993",
                "region": "中国香港 / 台湾",
                "type": "电影",
                "genre": "动作, 武侠, 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "复仇",
                        "暗器高手",
                        "国语配音版",
                        "暴力美学"
                ],
                "url": "movie-1103.html",
                "cover": "53.jpg"
        },
        {
                "title": "宝贝回家",
                "year": "2015",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情，家庭，公益",
                "category": "悬疑惊悚",
                "tags": [
                        "打拐",
                        "寻亲",
                        "人间真情"
                ],
                "url": "movie-1104.html",
                "cover": "54.jpg"
        },
        {
                "title": "战火劫难",
                "year": "2024",
                "region": "俄罗斯",
                "type": "剧集",
                "genre": "战争，历史，家庭",
                "category": "爱情家庭",
                "tags": [
                        "二战",
                        "斯大林格勒",
                        "平民",
                        "生存"
                ],
                "url": "movie-1105.html",
                "cover": "55.jpg"
        },
        {
                "title": "最美中国戏",
                "year": "2021",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀, 文化",
                "category": "欧美热播",
                "tags": [
                        "戏曲",
                        "传承",
                        "跨界",
                        "梨园",
                        "沉浸式"
                ],
                "url": "movie-1106.html",
                "cover": "56.jpg"
        },
        {
                "title": "幻影追凶",
                "year": "1992",
                "region": "中国香港",
                "type": "电影",
                "genre": "惊悚, 悬疑, 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "港产警匪",
                        "连环杀手",
                        "雨夜屠夫",
                        "心理战",
                        "老港片"
                ],
                "url": "movie-1107.html",
                "cover": "57.jpg"
        },
        {
                "title": "爱的艺术",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "爱情 / 喜剧 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "巴黎",
                        "艺术",
                        "中年危机",
                        "开放式关系",
                        "存在主义"
                ],
                "url": "movie-1108.html",
                "cover": "58.jpg"
        },
        {
                "title": "失落的一封信",
                "year": "2020",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "年代 / 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "寻找",
                        "知青",
                        "两岸亲情",
                        "催泪"
                ],
                "url": "movie-1109.html",
                "cover": "59.jpg"
        },
        {
                "title": "四个毕业生",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 犯罪",
                "category": "日韩精选",
                "tags": [
                        "小镇青年",
                        "直播",
                        "谋杀",
                        "黑色电影"
                ],
                "url": "movie-1110.html",
                "cover": "60.jpg"
        },
        {
                "title": "二楼传来的歌声",
                "year": "2024",
                "region": "瑞典 / 丹麦",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 悬疑",
                "category": "欧美热播",
                "tags": [
                        "北欧",
                        "荒诞",
                        "超现实",
                        "孤独",
                        "黑色幽默"
                ],
                "url": "movie-1111.html",
                "cover": "61.jpg"
        },
        {
                "title": "结城友奈是勇者",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "动画, 奇幻, 战斗, 致郁",
                "category": "爱情家庭",
                "tags": [
                        "魔法少女",
                        "献祭",
                        "虐心",
                        "友情"
                ],
                "url": "movie-1112.html",
                "cover": "62.jpg"
        },
        {
                "title": "异域",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "奇幻 / 剧情 / 文艺",
                "category": "华语佳作",
                "tags": [
                        "平行世界",
                        "孤独",
                        "治愈",
                        "摄影美学",
                        "缓慢"
                ],
                "url": "movie-1113.html",
                "cover": "63.jpg"
        },
        {
                "title": "杀恁老尸！",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "恐怖 / 喜剧",
                "category": "高分片单",
                "tags": [
                        "丧尸",
                        "闽南语",
                        "乡村恐怖",
                        "血浆喜剧",
                        "地方民俗"
                ],
                "url": "movie-1114.html",
                "cover": "64.jpg"
        },
        {
                "title": "傲慢与偏见1995",
                "year": "1995",
                "region": "英国",
                "type": "剧集",
                "genre": "爱情, 古典",
                "category": "亚洲经典",
                "tags": [
                        "迷你剧",
                        "柯林·菲尔斯",
                        "英伦田园",
                        "经典改编"
                ],
                "url": "movie-1115.html",
                "cover": "65.jpg"
        },
        {
                "title": "狼踪",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "剧情, 犯罪, 悬疑",
                "category": "华语佳作",
                "tags": [
                        "小镇疑云",
                        "动物隐喻",
                        "现代犯罪",
                        "人性"
                ],
                "url": "movie-1116.html",
                "cover": "66.jpg"
        },
        {
                "title": "边缘赤子心",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情、家庭、犯罪",
                "category": "高分片单",
                "tags": [
                        "底层",
                        "父子情",
                        "青少年犯罪",
                        "救赎",
                        "生存"
                ],
                "url": "movie-1117.html",
                "cover": "67.jpg"
        },
        {
                "title": "木府风云",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "历史，古装",
                "category": "喜剧治愈",
                "tags": [
                        "明代",
                        "云南",
                        "土司",
                        "权谋",
                        "女性成长"
                ],
                "url": "movie-1118.html",
                "cover": "68.jpg"
        },
        {
                "title": "断刺",
                "year": "2021",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "谍战, 年代",
                "category": "纪录综艺",
                "tags": [
                        "民国",
                        "双面间谍",
                        "手术刀杀人",
                        "医生",
                        "高智商"
                ],
                "url": "movie-1119.html",
                "cover": "69.jpg"
        },
        {
                "title": "法兰克与萝拉",
                "year": "2016",
                "region": "美国",
                "type": "电影",
                "genre": "爱情，音乐，剧情",
                "category": "高分片单",
                "tags": [
                        "赌城",
                        "歌手",
                        "一见钟情",
                        "控制欲",
                        "自我救赎"
                ],
                "url": "movie-1120.html",
                "cover": "70.jpg"
        },
        {
                "title": "双面伴娘",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 悬疑 / 同性",
                "category": "高分片单",
                "tags": [
                        "身份错位",
                        "婚礼闹剧",
                        "卧底伴娘",
                        "姐妹情深"
                ],
                "url": "movie-1121.html",
                "cover": "71.jpg"
        },
        {
                "title": "我叫赵甲第第二季",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 都市 / 商战",
                "category": "欧美热播",
                "tags": [
                        "富二代",
                        "逆袭",
                        "家族恩怨",
                        "商战",
                        "热血"
                ],
                "url": "movie-1122.html",
                "cover": "72.jpg"
        },
        {
                "title": "别挂电话",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "密室逃脱",
                        "限时营救",
                        "反转",
                        "电话恐惧"
                ],
                "url": "movie-1123.html",
                "cover": "73.jpg"
        },
        {
                "title": "南非三明治（电影）",
                "year": "2024",
                "region": "南非",
                "type": "电影",
                "genre": "剧情、喜剧、社会",
                "category": "高分片单",
                "tags": [
                        "种族隔离",
                        "开普敦",
                        "贫民窟",
                        "美食",
                        "和解"
                ],
                "url": "movie-1124.html",
                "cover": "74.jpg"
        },
        {
                "title": "深夜秀",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "直播杀人",
                        "脱口秀",
                        "极端暴力",
                        "密室求生"
                ],
                "url": "movie-1125.html",
                "cover": "75.jpg"
        },
        {
                "title": "狐蝠",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作，犯罪，科幻",
                "category": "动作冒险",
                "tags": [
                        "赛博朋克",
                        "基因改造",
                        "义警",
                        "城市丛林"
                ],
                "url": "movie-1126.html",
                "cover": "76.jpg"
        },
        {
                "title": "挑战星期天",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "运动 / 励志",
                "category": "高分片单",
                "tags": [
                        "橄榄球",
                        "职场女性",
                        "自我救赎",
                        "热血"
                ],
                "url": "movie-1127.html",
                "cover": "77.jpg"
        },
        {
                "title": "决战冰河",
                "year": "2025",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "动作，历史",
                "category": "悬疑惊悚",
                "tags": [
                        "史诗",
                        "战争",
                        "古代",
                        "冰上大战"
                ],
                "url": "movie-1128.html",
                "cover": "78.jpg"
        },
        {
                "title": "孩子不能同鬼玩",
                "year": "1986",
                "region": "中国香港",
                "type": "电影",
                "genre": "惊悚悬疑",
                "category": "日韩精选",
                "tags": [
                        "民俗传说",
                        "童年阴影",
                        "旧宅",
                        "诡异游戏",
                        "家族秘密"
                ],
                "url": "movie-1129.html",
                "cover": "79.jpg"
        },
        {
                "title": "捆著你，困著我",
                "year": "2023",
                "region": "西班牙 / 阿根廷",
                "type": "电影",
                "genre": "惊悚, 悬疑, 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "病态依恋",
                        "斯德哥尔摩",
                        "反转"
                ],
                "url": "movie-1130.html",
                "cover": "80.jpg"
        },
        {
                "title": "最后的召唤师",
                "year": "2025",
                "region": "中国",
                "type": "动漫",
                "genre": "奇幻, 战斗, 冒险",
                "category": "欧美热播",
                "tags": [
                        "召唤术",
                        "末日废土",
                        "使魔",
                        "宿命对决"
                ],
                "url": "movie-1131.html",
                "cover": "81.jpg"
        },
        {
                "title": "金色苏西",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 女性 / 文艺",
                "category": "纪录综艺",
                "tags": [
                        "老年妓女",
                        "巴黎",
                        "夕阳红"
                ],
                "url": "movie-1132.html",
                "cover": "82.jpg"
        },
        {
                "title": "交响狂人",
                "year": "2025",
                "region": "德国",
                "type": "电影",
                "genre": "音乐, 剧情, 传记",
                "category": "高分片单",
                "tags": [
                        "古典乐",
                        "天才",
                        "偏执狂",
                        "师徒"
                ],
                "url": "movie-1133.html",
                "cover": "83.jpg"
        },
        {
                "title": "万里追踪",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "悬疑 / 刑侦",
                "category": "悬疑惊悚",
                "tags": [
                        "追凶",
                        "车臣",
                        "边境",
                        "暗网"
                ],
                "url": "movie-1134.html",
                "cover": "84.jpg"
        },
        {
                "title": "不祥13夺魄楼",
                "year": "2006",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖、悬疑",
                "category": "日韩精选",
                "tags": [
                        "凶宅",
                        "数字13",
                        "中式民俗",
                        "轮回",
                        "密室"
                ],
                "url": "movie-1135.html",
                "cover": "85.jpg"
        },
        {
                "title": "冲上九重天",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "灾难，动作",
                "category": "亚洲经典",
                "tags": [
                        "航天",
                        "救援",
                        "父女"
                ],
                "url": "movie-1136.html",
                "cover": "86.jpg"
        },
        {
                "title": "亲切的善珠小姐",
                "year": "2024",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑爱情",
                "category": "高分片单",
                "tags": [
                        "双面人生",
                        "连环杀手",
                        "邻居"
                ],
                "url": "movie-1137.html",
                "cover": "87.jpg"
        },
        {
                "title": "致命香气",
                "year": "2024",
                "region": "法国 / 意大利",
                "type": "电影",
                "genre": "惊悚 / 剧情 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "香水",
                        "复仇",
                        "嗅觉",
                        "心理惊悚"
                ],
                "url": "movie-1138.html",
                "cover": "88.jpg"
        },
        {
                "title": "寒涛俪影",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑， 犯罪， 剧情",
                "category": "纪录综艺",
                "tags": [
                        "民国",
                        "双女主",
                        "连环杀人"
                ],
                "url": "movie-1139.html",
                "cover": "89.jpg"
        },
        {
                "title": "哺乳期的女人",
                "year": "2015",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 文艺",
                "category": "悬疑惊悚",
                "tags": [
                        "农村",
                        "留守",
                        "女性",
                        "欲望"
                ],
                "url": "movie-1140.html",
                "cover": "90.jpg"
        },
        {
                "title": "再起风云粤语",
                "year": "2025",
                "region": "香港",
                "type": "剧集",
                "genre": "剧情, 犯罪, 商战",
                "category": "华语佳作",
                "tags": [
                        "黑帮",
                        "卧底",
                        "兄弟反目",
                        "粤语原声"
                ],
                "url": "movie-1141.html",
                "cover": "91.jpg"
        },
        {
                "title": "桃色纠纷",
                "year": "1997",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 爱情, 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "黑色幽默",
                        "出轨",
                        "律师"
                ],
                "url": "movie-1142.html",
                "cover": "92.jpg"
        },
        {
                "title": "爱情诅咒",
                "year": "2025",
                "region": "韩国",
                "type": "电视剧",
                "genre": "爱情 / 奇幻",
                "category": "悬疑惊悚",
                "tags": [
                        "前世今生",
                        "虐恋情深",
                        "巫蛊"
                ],
                "url": "movie-1143.html",
                "cover": "93.jpg"
        },
        {
                "title": "萌族酷狗侦探第三季",
                "year": "2020",
                "region": "中国大陆",
                "type": "动画",
                "genre": "悬疑， 喜剧， 儿童",
                "category": "欧美热播",
                "tags": [
                        "萌宠",
                        "推理",
                        "冒险",
                        "正能量",
                        "动物"
                ],
                "url": "movie-1144.html",
                "cover": "94.jpg"
        },
        {
                "title": "车仔西游记",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧, 奇幻, 公路",
                "category": "华语佳作",
                "tags": [
                        "港式无厘头",
                        "小贩传奇",
                        "神话新编",
                        "市井人情"
                ],
                "url": "movie-1145.html",
                "cover": "95.jpg"
        },
        {
                "title": "哥斯拉：奇点",
                "year": "2021",
                "region": "日本",
                "type": "剧集 / 动画",
                "genre": "科幻 / 灾难 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "硬科幻",
                        "怪兽",
                        "时间悖论"
                ],
                "url": "movie-1146.html",
                "cover": "96.jpg"
        },
        {
                "title": "男友变形记",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情奇幻喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "变身",
                        "都市情感",
                        "黑色幽默",
                        "成长"
                ],
                "url": "movie-1147.html",
                "cover": "97.jpg"
        },
        {
                "title": "我的青春有点二",
                "year": "2022",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "喜剧, 校园, 青春",
                "category": "动作冒险",
                "tags": [
                        "怀旧",
                        "沙雕",
                        "2000年代",
                        "友情"
                ],
                "url": "movie-1148.html",
                "cover": "98.jpg"
        },
        {
                "title": "白老虎",
                "year": "2024",
                "region": "印度",
                "type": "电影",
                "genre": "剧情 / 犯罪 / 社会",
                "category": "动作冒险",
                "tags": [
                        "阶级",
                        "逆袭",
                        "黑色幽默",
                        "仆人"
                ],
                "url": "movie-1149.html",
                "cover": "99.jpg"
        },
        {
                "title": "牛奶太子",
                "year": "2001",
                "region": "中国香港",
                "type": "剧集",
                "genre": "商战家族",
                "category": "纪录综艺",
                "tags": [
                        "豪门恩怨",
                        "乳业",
                        "争产",
                        "港剧"
                ],
                "url": "movie-1150.html",
                "cover": "100.jpg"
        },
        {
                "title": "旅程的结束，世界的开始",
                "year": "2028",
                "region": "意大利",
                "type": "电影",
                "genre": "剧情，文艺",
                "category": "欧美热播",
                "tags": [
                        "公路电影",
                        "存在主义",
                        "死亡",
                        "和解"
                ],
                "url": "movie-1151.html",
                "cover": "101.jpg"
        },
        {
                "title": "黑暗斗士",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作， 科幻， 惊悚",
                "category": "动作冒险",
                "tags": [
                        "近未来",
                        "地下格斗",
                        "改造人",
                        "反乌托邦",
                        "暴力"
                ],
                "url": "movie-1152.html",
                "cover": "102.jpg"
        },
        {
                "title": "雪豹和她的朋友们",
                "year": "2023",
                "region": "中国",
                "type": "纪录片",
                "genre": "自然, 纪录",
                "category": "悬疑惊悚",
                "tags": [
                        "野生动物",
                        "青藏高原",
                        "生态保护",
                        "萌宠"
                ],
                "url": "movie-1153.html",
                "cover": "103.jpg"
        },
        {
                "title": "当爱变成习惯",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情、爱情、家庭",
                "category": "喜剧治愈",
                "tags": [
                        "中年危机",
                        "婚姻困境",
                        "现实主义",
                        "细节见真情"
                ],
                "url": "movie-1154.html",
                "cover": "104.jpg"
        },
        {
                "title": "不道德的秘密",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪, 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "网络暴力",
                        "私刑正义",
                        "反转"
                ],
                "url": "movie-1155.html",
                "cover": "105.jpg"
        },
        {
                "title": "民族英雄",
                "year": "2025",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "战争 / 传记",
                "category": "动作冒险",
                "tags": [
                        "卫国战争",
                        "狙击手",
                        "反战"
                ],
                "url": "movie-1156.html",
                "cover": "106.jpg"
        },
        {
                "title": "恶灵古堡：死亡岛",
                "year": "2023",
                "region": "日本",
                "type": "动画电影",
                "genre": "动作 / 恐怖 / 科幻",
                "category": "悬疑惊悚",
                "tags": [
                        "生化危机",
                        "丧尸",
                        "浣熊市",
                        "克里斯",
                        "吉尔"
                ],
                "url": "movie-1157.html",
                "cover": "107.jpg"
        },
        {
                "title": "苹果核战",
                "year": "2004",
                "region": "日本",
                "type": "电影/动画",
                "genre": "科幻、动作、动画",
                "category": "喜剧治愈",
                "tags": [
                        "赛博格",
                        "后末日",
                        "机甲战斗",
                        "政治阴谋",
                        "3D渲染"
                ],
                "url": "movie-1158.html",
                "cover": "108.jpg"
        },
        {
                "title": "绝配杀手",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 爱情, 喜剧",
                "category": "动作冒险",
                "tags": [
                        "杀手",
                        "相亲",
                        "误打误撞",
                        "史密斯夫妇"
                ],
                "url": "movie-1159.html",
                "cover": "109.jpg"
        },
        {
                "title": "一吻巴黎",
                "year": "2011",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧, 爱情",
                "category": "高分片单",
                "tags": [
                        "丧偶",
                        "暖男",
                        "办公室恋情",
                        "治愈"
                ],
                "url": "movie-1160.html",
                "cover": "110.jpg"
        },
        {
                "title": "我吃了那男孩一整年的早餐",
                "year": "2022",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情, 青春, 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "校园暗恋",
                        "早餐情缘",
                        "真实事件改编",
                        "小清新"
                ],
                "url": "movie-1161.html",
                "cover": "111.jpg"
        },
        {
                "title": "玉面飞狐粤语",
                "year": "1989",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "武侠 / 古装",
                "category": "喜剧治愈",
                "tags": [
                        "TVB",
                        "反派主角",
                        "亦正亦邪",
                        "江湖恩怨"
                ],
                "url": "movie-1162.html",
                "cover": "112.jpg"
        },
        {
                "title": "斯巴达克斯：竞技场之神",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "历史动作",
                "category": "喜剧治愈",
                "tags": [
                        "古罗马",
                        "角斗士",
                        "权力游戏",
                        "暴力美学"
                ],
                "url": "movie-1163.html",
                "cover": "113.jpg"
        },
        {
                "title": "机密同盟",
                "year": "2017",
                "region": "韩国",
                "type": "电影",
                "genre": "动作 / 喜剧 / 犯罪",
                "category": "高分片单",
                "tags": [
                        "韩朝",
                        "兄弟情",
                        "动作喜剧",
                        "玄彬",
                        "反差萌"
                ],
                "url": "movie-1164.html",
                "cover": "114.jpg"
        },
        {
                "title": "星之梦 雪圈球",
                "year": "2021",
                "region": "日本",
                "type": "动画剧集",
                "genre": "科幻， 剧情， 冒险",
                "category": "欧美热播",
                "tags": [
                        "末世",
                        "机器人",
                        "梦境",
                        "雪地运动",
                        "治愈"
                ],
                "url": "movie-1165.html",
                "cover": "115.jpg"
        },
        {
                "title": "黑色五叶草",
                "year": "2024",
                "region": "日本",
                "type": "动画",
                "genre": "奇幻 / 热血 / 冒险",
                "category": "高分片单",
                "tags": [
                        "魔法",
                        "反魔法",
                        "少年漫改",
                        "长篇",
                        "王道"
                ],
                "url": "movie-1166.html",
                "cover": "116.jpg"
        },
        {
                "title": "祖鲁战争",
                "year": "2025",
                "region": "英国 / 南非",
                "type": "电影",
                "genre": "历史 / 战争 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "殖民地",
                        "以少胜多",
                        "冷兵器",
                        "罗克渡口"
                ],
                "url": "movie-1167.html",
                "cover": "117.jpg"
        },
        {
                "title": "巴黎双傻",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧, 冒险",
                "category": "纪录综艺",
                "tags": [
                        "公路",
                        "乌龙",
                        "兄弟",
                        "荒诞"
                ],
                "url": "movie-1168.html",
                "cover": "118.jpg"
        },
        {
                "title": "美国制造",
                "year": "2017",
                "region": "美国",
                "type": "电影",
                "genre": "犯罪, 传记",
                "category": "亚洲经典",
                "tags": [
                        "毒枭",
                        "飞行员",
                        "CIA",
                        "黑色幽默",
                        "真实改编"
                ],
                "url": "movie-1169.html",
                "cover": "119.jpg"
        },
        {
                "title": "梦幻强尼",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "歌舞 / 传记",
                "category": "日韩精选",
                "tags": [
                        "摇滚明星",
                        "幻想与现实",
                        "药物致幻",
                        "音乐剧元素"
                ],
                "url": "movie-1170.html",
                "cover": "120.jpg"
        },
        {
                "title": "沉默的羔羊前传之揭开罪幕",
                "year": "2029",
                "region": "美国",
                "type": "电视剧",
                "genre": "悬疑, 惊悚, 犯罪",
                "category": "动作冒险",
                "tags": [
                        "犯罪心理",
                        "起源故事",
                        "连环杀手",
                        "FBI"
                ],
                "url": "movie-1171.html",
                "cover": "121.jpg"
        },
        {
                "title": "疯狗和格洛丽",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧，动作",
                "category": "高分片单",
                "tags": [
                        "杀手",
                        "假扮夫妻",
                        "黑色幽默",
                        "逃亡"
                ],
                "url": "movie-1172.html",
                "cover": "122.jpg"
        },
        {
                "title": "潜水员",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "惊悚 / 冒险",
                "category": "日韩精选",
                "tags": [
                        "深海",
                        "沉船",
                        "缺氧",
                        "密室逃脱",
                        "心理恐惧"
                ],
                "url": "movie-1173.html",
                "cover": "123.jpg"
        },
        {
                "title": "玩命光头",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 喜剧, 惊悚",
                "category": "欧美热播",
                "tags": [
                        "硬汉喜剧",
                        "保镖乌龙",
                        "极速追杀"
                ],
                "url": "movie-1174.html",
                "cover": "124.jpg"
        },
        {
                "title": "原子狗",
                "year": "2026",
                "region": "俄罗斯 / 美国",
                "type": "电影",
                "genre": "科幻 / 惊悚 / 灾难",
                "category": "动作冒险",
                "tags": [
                        "切尔诺贝利",
                        "变异",
                        "逃亡",
                        "政治阴谋"
                ],
                "url": "movie-1175.html",
                "cover": "125.jpg"
        },
        {
                "title": "全能囧爸",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 家庭, 剧情",
                "category": "动作冒险",
                "tags": [
                        "父女",
                        "互换身体",
                        "中年危机",
                        "高考"
                ],
                "url": "movie-1176.html",
                "cover": "126.jpg"
        },
        {
                "title": "真假警察",
                "year": "1988",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作、喜剧、警匪",
                "category": "华语佳作",
                "tags": [
                        "双雄模式",
                        "身份互换",
                        "港式幽默"
                ],
                "url": "movie-1177.html",
                "cover": "127.jpg"
        },
        {
                "title": "富商的情人",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑, 爱情",
                "category": "喜剧治愈",
                "tags": [
                        "豪门",
                        "复仇",
                        "替身",
                        "反转"
                ],
                "url": "movie-1178.html",
                "cover": "128.jpg"
        },
        {
                "title": "小鼠和大象的创意",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影/动画",
                "genre": "动画，冒险",
                "category": "华语佳作",
                "tags": [
                        "友情",
                        "创意",
                        "合作",
                        "治愈"
                ],
                "url": "movie-1179.html",
                "cover": "129.jpg"
        },
        {
                "title": "魔殿屠龙",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 奇幻",
                "category": "欧美热播",
                "tags": [
                        "武侠",
                        "特效",
                        "夺宝"
                ],
                "url": "movie-1180.html",
                "cover": "130.jpg"
        },
        {
                "title": "法外之徒",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "存在主义",
                        "黑色电影",
                        "无序状态"
                ],
                "url": "movie-1181.html",
                "cover": "131.jpg"
        },
        {
                "title": "书剑恩仇录1987国语",
                "year": "1987",
                "region": "中国大陆 / 中国香港",
                "type": "剧集",
                "genre": "武侠, 历史",
                "category": "动作冒险",
                "tags": [
                        "经典改编",
                        "红花会",
                        "乾隆身世"
                ],
                "url": "movie-1182.html",
                "cover": "132.jpg"
        },
        {
                "title": "纽约大逃亡",
                "year": "1981",
                "region": "美国",
                "type": "动作惊悚片",
                "genre": "动作, 惊悚, 科幻",
                "category": "纪录综艺",
                "tags": [
                        "未来都市",
                        "监狱逃脱",
                        "反乌托邦",
                        "限时营救",
                        "黑市秩序",
                        "单人突入"
                ],
                "url": "movie-1183.html",
                "cover": "133.jpg"
        },
        {
                "title": "烟雾拳",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "动作 / 运动 / 励志",
                "category": "欧美热播",
                "tags": [
                        "拳击",
                        "格斗",
                        "绝症",
                        "热血"
                ],
                "url": "movie-1184.html",
                "cover": "134.jpg"
        },
        {
                "title": "甜蜜",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "都市 / 爱情 / 职场",
                "category": "高分片单",
                "tags": [
                        "甜宠",
                        "姐弟恋",
                        "甜品师",
                        "创业",
                        "励志"
                ],
                "url": "movie-1185.html",
                "cover": "135.jpg"
        },
        {
                "title": "新变种人",
                "year": "2028",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 恐怖, 超自然",
                "category": "华语佳作",
                "tags": [
                        "超能力",
                        "精神病院",
                        "恐惧实体化",
                        "暗黑风",
                        "青少年"
                ],
                "url": "movie-1186.html",
                "cover": "136.jpg"
        },
        {
                "title": "南方有乔木",
                "year": "2018",
                "region": "中国大陆",
                "type": "TV剧集",
                "genre": "都市, 情感, 创业",
                "category": "喜剧治愈",
                "tags": [
                        "无人机",
                        "姐弟恋",
                        "商战",
                        "科技",
                        "强强"
                ],
                "url": "movie-1187.html",
                "cover": "137.jpg"
        },
        {
                "title": "足球流氓3",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "动作 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "足球",
                        "暴力",
                        "父子",
                        "传承"
                ],
                "url": "movie-1188.html",
                "cover": "138.jpg"
        },
        {
                "title": "了不起的甄高贵",
                "year": "2023",
                "region": "中国",
                "type": "电视剧",
                "genre": "都市 / 职场 / 爱情",
                "category": "高分片单",
                "tags": [
                        "公关行业",
                        "逆袭",
                        "女性成长",
                        "商战",
                        "欢喜冤家"
                ],
                "url": "movie-1189.html",
                "cover": "139.jpg"
        },
        {
                "title": "一代名相陈廷敬",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "历史 / 传记",
                "category": "亚洲经典",
                "tags": [
                        "康熙王朝",
                        "反腐",
                        "官场智慧",
                        "权谋"
                ],
                "url": "movie-1190.html",
                "cover": "140.jpg"
        },
        {
                "title": "男子啦啦队！！",
                "year": "2019",
                "region": "日本",
                "type": "电影 / 剧集",
                "genre": "青春 / 运动 / 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "啦啦队",
                        "男子高中生",
                        "友情",
                        "逆袭",
                        "热血"
                ],
                "url": "movie-1191.html",
                "cover": "141.jpg"
        },
        {
                "title": "圆盘皇女 十二月夜想曲",
                "year": "2024",
                "region": "日本",
                "type": "OVA / 剧集",
                "genre": "奇幻 / 恋爱 / 科幻",
                "category": "喜剧治愈",
                "tags": [
                        "外星公主",
                        "同居日常",
                        "北欧神话",
                        "治愈系"
                ],
                "url": "movie-1192.html",
                "cover": "142.jpg"
        },
        {
                "title": "女王与叛徒",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "剧情， 历史",
                "category": "亚洲经典",
                "tags": [
                        "英国君主",
                        "政治惊悚",
                        "王室丑闻"
                ],
                "url": "movie-1193.html",
                "cover": "143.jpg"
        },
        {
                "title": "万恶城",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧情片",
                "genre": "黑色悬疑, 城市寓言, 犯罪惊悚",
                "category": "爱情家庭",
                "tags": [
                        "腐败系统",
                        "多线追凶",
                        "地下权力",
                        "法律困境",
                        "下水道暗线"
                ],
                "url": "movie-1194.html",
                "cover": "144.jpg"
        },
        {
                "title": "平原上的吉米",
                "year": "2020",
                "region": "美国",
                "type": "电影",
                "genre": "社会写实,成长,公路剧情",
                "category": "华语佳作",
                "tags": [
                        "乡村复归",
                        "土地争议",
                        "家庭修复",
                        "公路追寻",
                        "基层证词",
                        "草原记忆"
                ],
                "url": "movie-1195.html",
                "cover": "145.jpg"
        },
        {
                "title": "大学新生的秘密生活",
                "year": "2023",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "校园",
                        "成长",
                        "悬疑",
                        "青春",
                        "黑色幽默"
                ],
                "url": "movie-1196.html",
                "cover": "146.jpg"
        },
        {
                "title": "呼吸之间",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 科幻 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "空气危机",
                        "密室逃生",
                        "道德困境"
                ],
                "url": "movie-1197.html",
                "cover": "147.jpg"
        },
        {
                "title": "林登·詹森",
                "year": "2016",
                "region": "美国",
                "type": "电影",
                "genre": "传记 / 历史",
                "category": "爱情家庭",
                "tags": [
                        "政治",
                        "总统",
                        "越战",
                        "权力游戏"
                ],
                "url": "movie-1198.html",
                "cover": "148.jpg"
        },
        {
                "title": "一名很普通的犹太人",
                "year": "2024",
                "region": "以色列",
                "type": "电影",
                "genre": "剧情历史",
                "category": "悬疑惊悚",
                "tags": [
                        "身份认同",
                        "大屠杀记忆",
                        "三代人",
                        "日常"
                ],
                "url": "movie-1199.html",
                "cover": "149.jpg"
        },
        {
                "title": "幻像恋歌",
                "year": "2024",
                "region": "韩国",
                "type": "电视剧",
                "genre": "爱情 / 奇幻 / 古装",
                "category": "喜剧治愈",
                "tags": [
                        "幻术",
                        "双面人格",
                        "宫廷",
                        "虐恋",
                        "古装"
                ],
                "url": "movie-1200.html",
                "cover": "150.jpg"
        },
        {
                "title": "击剑选手",
                "year": "2020",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情, 运动",
                "category": "悬疑惊悚",
                "tags": [
                        "击剑",
                        "残奥会",
                        "真人真事改编",
                        "励志",
                        "母女"
                ],
                "url": "movie-1201.html",
                "cover": "1.jpg"
        },
        {
                "title": "美丽天堂",
                "year": "2023",
                "region": "以色列 / 巴勒斯坦",
                "type": "电影",
                "genre": "剧情，战争",
                "category": "动作冒险",
                "tags": [
                        "耶路撒冷",
                        "以巴冲突",
                        "双男主",
                        "悲剧",
                        "和平"
                ],
                "url": "movie-1202.html",
                "cover": "2.jpg"
        },
        {
                "title": "地平线系列：太阳系的结局",
                "year": "2027",
                "region": "英国",
                "type": "纪录片",
                "genre": "科普、天文、科幻式纪实",
                "category": "悬疑惊悚",
                "tags": [
                        "宇宙",
                        "末日",
                        "科学预测",
                        "视觉奇观"
                ],
                "url": "movie-1203.html",
                "cover": "3.jpg"
        },
        {
                "title": "拐个洋妞做媳妇",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 爱情",
                "category": "高分片单",
                "tags": [
                        "跨国恋",
                        "乡村",
                        "文化冲突",
                        "搞笑",
                        "温情"
                ],
                "url": "movie-1204.html",
                "cover": "4.jpg"
        },
        {
                "title": "中国散伙人",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "剧情喜剧",
                "category": "欧美热播",
                "tags": [
                        "创业",
                        "合伙人",
                        "中年危机",
                        "现实主义",
                        "兄弟情"
                ],
                "url": "movie-1205.html",
                "cover": "5.jpg"
        },
        {
                "title": "生命中的美好爱恋",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情/奇幻/治愈",
                "category": "高分片单",
                "tags": [
                        "时间回溯",
                        "绝症",
                        "书店",
                        "信"
                ],
                "url": "movie-1206.html",
                "cover": "6.jpg"
        },
        {
                "title": "流氓工厂",
                "year": "2027",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 犯罪, 黑色",
                "category": "亚洲经典",
                "tags": [
                        "底层反抗",
                        "工厂剥削",
                        "暴力美学",
                        "社会批判",
                        "以暴制暴"
                ],
                "url": "movie-1207.html",
                "cover": "7.jpg"
        },
        {
                "title": "灵能百分百",
                "year": "2024",
                "region": "日本",
                "type": "动画剧集",
                "genre": "动作, 超自然, 校园, 喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "超能力",
                        "伪凡人",
                        "成长",
                        "灵幻"
                ],
                "url": "movie-1208.html",
                "cover": "8.jpg"
        },
        {
                "title": "秘密警察",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "卧底",
                        "内鬼",
                        "1990年代",
                        "兄弟情"
                ],
                "url": "movie-1209.html",
                "cover": "9.jpg"
        },
        {
                "title": "冰国英雄传",
                "year": "2020",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "冒险, 历史",
                "category": "华语佳作",
                "tags": [
                        "极地",
                        "探险",
                        "苏联",
                        "生存",
                        "真实改编"
                ],
                "url": "movie-1210.html",
                "cover": "10.jpg"
        },
        {
                "title": "想再听见你",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情",
                "category": "高分片单",
                "tags": [
                        "亲情",
                        "音乐",
                        "失聪",
                        "治愈"
                ],
                "url": "movie-1211.html",
                "cover": "11.jpg"
        },
        {
                "title": "运动生涯",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "传记, 运动, 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "励志",
                        "体育竞技",
                        "伤病",
                        "信念",
                        "热血"
                ],
                "url": "movie-1212.html",
                "cover": "12.jpg"
        },
        {
                "title": "小妞死翘翘",
                "year": "2023",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "悬疑 / 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "剧本杀",
                        "无限循环",
                        "校园",
                        "沙雕",
                        "反套路"
                ],
                "url": "movie-1213.html",
                "cover": "13.jpg"
        },
        {
                "title": "白昼进攻",
                "year": "1943",
                "region": "美国",
                "type": "电影",
                "genre": "战争, 历史",
                "category": "欧美热播",
                "tags": [
                        "二战",
                        "纪录片",
                        "进攻",
                        "黑白影像"
                ],
                "url": "movie-1214.html",
                "cover": "14.jpg"
        },
        {
                "title": "平克顿小姐",
                "year": "2016",
                "region": "美国",
                "type": "剧集",
                "genre": "侦探悬疑",
                "category": "高分片单",
                "tags": [
                        "女侦探",
                        "西部背景",
                        "单元破案"
                ],
                "url": "movie-1215.html",
                "cover": "15.jpg"
        },
        {
                "title": "来自孤寂世的笔记",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "动画, 奇幻, 治愈",
                "category": "华语佳作",
                "tags": [
                        "末世",
                        "孤独",
                        "日记",
                        "跨物种友谊"
                ],
                "url": "movie-1216.html",
                "cover": "16.jpg"
        },
        {
                "title": "自己去看",
                "year": "2024",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "战争 / 剧情 / 历史",
                "category": "日韩精选",
                "tags": [
                        "二战东线",
                        "少年视角",
                        "残酷写实",
                        "反战精神"
                ],
                "url": "movie-1217.html",
                "cover": "17.jpg"
        },
        {
                "title": "琼楼飞燕",
                "year": "1964",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情，爱情，黄梅调",
                "category": "纪录综艺",
                "tags": [
                        "邵氏",
                        "乐蒂",
                        "古装",
                        "悲剧",
                        "戏曲"
                ],
                "url": "movie-1218.html",
                "cover": "18.jpg"
        },
        {
                "title": "大耳猴",
                "year": "2013",
                "region": "俄罗斯",
                "type": "动画电影",
                "genre": "家庭 / 喜剧 / 奇幻",
                "category": "喜剧治愈",
                "tags": [
                        "苏联经典",
                        "萌系",
                        "友情",
                        "治愈"
                ],
                "url": "movie-1219.html",
                "cover": "19.jpg"
        },
        {
                "title": "花月佳期粤语",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情, 喜剧, 奇幻",
                "category": "爱情家庭",
                "tags": [
                        "穿越",
                        "戏班",
                        "虐缘",
                        "徐克"
                ],
                "url": "movie-1220.html",
                "cover": "20.jpg"
        },
        {
                "title": "工作与时日",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "剧情， 纪录片风格， 日常",
                "category": "爱情家庭",
                "tags": [
                        "社畜",
                        "时间流逝",
                        "静观",
                        "存在主义"
                ],
                "url": "movie-1221.html",
                "cover": "21.jpg"
        },
        {
                "title": "富家穷路第五季",
                "year": "2025",
                "region": "加拿大",
                "type": "剧集",
                "genre": "喜剧, 家庭",
                "category": "亚洲经典",
                "tags": [
                        "讽刺",
                        "成长",
                        "小镇生活",
                        "温馨"
                ],
                "url": "movie-1222.html",
                "cover": "22.jpg"
        },
        {
                "title": "无法抗拒",
                "year": "2016",
                "region": "中国",
                "type": "电视剧",
                "genre": "爱情，剧情，都市",
                "category": "喜剧治愈",
                "tags": [
                        "霸道总裁",
                        "契约婚姻",
                        "先婚后爱",
                        "职场恋情"
                ],
                "url": "movie-1223.html",
                "cover": "23.jpg"
        },
        {
                "title": "纯爷们养成记",
                "year": "2021",
                "region": "中国",
                "type": "喜剧电影",
                "genre": "喜剧, 家庭, 成长, 职场",
                "category": "动作冒险",
                "tags": [
                        "父女关系",
                        "男性成长",
                        "小镇商贩",
                        "真实成长",
                        "治愈喜剧"
                ],
                "url": "movie-1224.html",
                "cover": "24.jpg"
        },
        {
                "title": "真爱试验",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "爱情， 喜剧",
                "category": "动作冒险",
                "tags": [
                        "情侣测试",
                        "整蛊",
                        "信任危机"
                ],
                "url": "movie-1225.html",
                "cover": "25.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 我们的星球：镜头背后 眠狂四郎女妖剑 着魔1981 男孩们2 警之光第二季 波托先生 女人之源 灵肉交响曲 黑祭司 志在出位 泰德·邦迪 动物世界 女儿谷 冰人奥茨 我爱你妈 巴里公主2024 寻根问祖 人证1977 戏杀 骗术奇谭",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "亚洲经典",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1226.html",
                "cover": "26.jpg"
        },
        {
                "title": "扎波佩克",
                "year": "2021",
                "region": "捷克",
                "type": "电影",
                "genre": "传记 / 运动 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "长跑",
                        "奥运",
                        "励志",
                        "冷战",
                        "真实改编"
                ],
                "url": "movie-1227.html",
                "cover": "27.jpg"
        },
        {
                "title": "踏寻先辈的足迹",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情, 历史",
                "category": "喜剧治愈",
                "tags": [
                        "红色",
                        "青春",
                        "传承"
                ],
                "url": "movie-1228.html",
                "cover": "28.jpg"
        },
        {
                "title": "再见艾曼纽",
                "year": "1977",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 情色",
                "category": "悬疑惊悚",
                "tags": [
                        "情欲",
                        "自我探索",
                        "女性",
                        "异国风情"
                ],
                "url": "movie-1229.html",
                "cover": "29.jpg"
        },
        {
                "title": "性爱齐齐玩",
                "year": "2001",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 情色 / 伦理",
                "category": "高分片单",
                "tags": [
                        "群像",
                        "性",
                        "婚姻",
                        "孤独",
                        "大尺度"
                ],
                "url": "movie-1230.html",
                "cover": "30.jpg"
        },
        {
                "title": "百慕大三角",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻，冒险",
                "category": "日韩精选",
                "tags": [
                        "时空错乱",
                        "失踪",
                        "阴谋",
                        "舰队",
                        "末日"
                ],
                "url": "movie-1231.html",
                "cover": "31.jpg"
        },
        {
                "title": "泳往直前",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "运动 / 青春 / 励志",
                "category": "纪录综艺",
                "tags": [
                        "游泳竞技",
                        "残障运动员",
                        "师徒情深",
                        "逆袭热血",
                        "真实改编"
                ],
                "url": "movie-1232.html",
                "cover": "32.jpg"
        },
        {
                "title": "环大西洋",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 科幻",
                "category": "华语佳作",
                "tags": [
                        "山寨大片",
                        "机甲怪兽",
                        "B级片",
                        "恶趣味"
                ],
                "url": "movie-1233.html",
                "cover": "33.jpg"
        },
        {
                "title": "燃烧的蛟龙",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "卧底风云",
                        "兄弟反目",
                        "烈火实战"
                ],
                "url": "movie-1234.html",
                "cover": "34.jpg"
        },
        {
                "title": "三宝奇谋闯天关",
                "year": "1986",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧, 冒险, 动作",
                "category": "欧美热播",
                "tags": [
                        "夺宝",
                        "乌龙搭档",
                        "公路追逐"
                ],
                "url": "movie-1235.html",
                "cover": "35.jpg"
        },
        {
                "title": "退学大话王",
                "year": "2017",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 青春",
                "category": "亚洲经典",
                "tags": [
                        "校园",
                        "谎言",
                        "成长",
                        "黑色幽默",
                        "小人物"
                ],
                "url": "movie-1236.html",
                "cover": "36.jpg"
        },
        {
                "title": "只想说爱你",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情/青春",
                "category": "爱情家庭",
                "tags": [
                        "纯爱",
                        "听力障碍",
                        "手语",
                        "治愈"
                ],
                "url": "movie-1237.html",
                "cover": "37.jpg"
        },
        {
                "title": "百慕达异战",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 动作 / 灾难",
                "category": "动作冒险",
                "tags": [
                        "百慕大三角",
                        "海底文明",
                        "时间循环",
                        "全球战争",
                        "跨物种联盟"
                ],
                "url": "movie-1238.html",
                "cover": "38.jpg"
        },
        {
                "title": "猛虎英雄传",
                "year": "2009",
                "region": "中国大陆",
                "type": "武侠动作电影",
                "genre": "武侠、动作、历史",
                "category": "日韩精选",
                "tags": [
                        "武林盟约",
                        "义气",
                        "谋略",
                        "边疆乱世",
                        "江湖规矩"
                ],
                "url": "movie-1239.html",
                "cover": "39.jpg"
        },
        {
                "title": "73舰队潜艇战",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "战争, 历史, 动作",
                "category": "华语佳作",
                "tags": [
                        "二战",
                        "太平洋战场",
                        "潜艇",
                        "鱼雷",
                        "真实事件改编"
                ],
                "url": "movie-1240.html",
                "cover": "40.jpg"
        },
        {
                "title": "鬼纳特归来",
                "year": "2014",
                "region": "印度",
                "type": "电影",
                "genre": "喜剧 / 奇幻 / 家庭",
                "category": "爱情家庭",
                "tags": [
                        "宝莱坞",
                        "鬼魂喜剧",
                        "温馨感人"
                ],
                "url": "movie-1241.html",
                "cover": "41.jpg"
        },
        {
                "title": "维多利亚女皇",
                "year": "2025",
                "region": "英国",
                "type": "电视剧",
                "genre": "历史 / 传记",
                "category": "高分片单",
                "tags": [
                        "维多利亚时代",
                        "王室",
                        "女权",
                        "工业革命"
                ],
                "url": "movie-1242.html",
                "cover": "42.jpg"
        },
        {
                "title": "浪花淘尽",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 悬疑 / 民国",
                "category": "华语佳作",
                "tags": [
                        "民国",
                        "谍战",
                        "江湖",
                        "兄弟情"
                ],
                "url": "movie-1243.html",
                "cover": "43.jpg"
        },
        {
                "title": "山脉公路",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚、公路",
                "category": "欧美热播",
                "tags": [
                        "无人区",
                        "生存狂",
                        "车载系统失控"
                ],
                "url": "movie-1244.html",
                "cover": "44.jpg"
        },
        {
                "title": "爱，你想说什么",
                "year": "2022",
                "region": "中国",
                "type": "爱情电影",
                "genre": "都市情感 / 剧情 / 治愈",
                "category": "日韩精选",
                "tags": [
                        "失语关系",
                        "重新沟通",
                        "成年人爱情",
                        "城市孤独",
                        "记忆回声"
                ],
                "url": "movie-1245.html",
                "cover": "45.jpg"
        },
        {
                "title": "架步搜秘",
                "year": "2023",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑，犯罪",
                "category": "高分片单",
                "tags": [
                        "便衣警察",
                        "红灯区",
                        "卧底",
                        "单元探案",
                        "女性群像"
                ],
                "url": "movie-1246.html",
                "cover": "46.jpg"
        },
        {
                "title": "大恋爱：与将我忘记的你",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情/剧情/医疗",
                "category": "动作冒险",
                "tags": [
                        "早发性阿尔茨海默症",
                        "记忆消逝",
                        "虐恋",
                        "催泪"
                ],
                "url": "movie-1247.html",
                "cover": "47.jpg"
        },
        {
                "title": "澳大利亚",
                "year": "2023",
                "region": "澳大利亚",
                "type": "剧集",
                "genre": "历史, 冒险",
                "category": "爱情家庭",
                "tags": [
                        "殖民",
                        "原著民",
                        "家族",
                        "史诗"
                ],
                "url": "movie-1248.html",
                "cover": "48.jpg"
        },
        {
                "title": "你照亮我的生命",
                "year": "2020",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，音乐",
                "category": "喜剧治愈",
                "tags": [
                        "治愈",
                        "失明",
                        "音乐家",
                        "救赎",
                        "温情"
                ],
                "url": "movie-1249.html",
                "cover": "49.jpg"
        },
        {
                "title": "拳力突袭",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 犯罪, 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "地下拳场",
                        "复仇",
                        "卧底",
                        "以暴制暴",
                        "硬核格斗"
                ],
                "url": "movie-1250.html",
                "cover": "50.jpg"
        },
        {
                "title": "咖喱辣椒",
                "year": "1992",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 动作",
                "category": "欧美热播",
                "tags": [
                        "美食警匪",
                        "兄弟情",
                        "无厘头",
                        "卧底",
                        "夜市文化"
                ],
                "url": "movie-1251.html",
                "cover": "51.jpg"
        },
        {
                "title": "杰尼斯夏日乐园2016",
                "year": "2016",
                "region": "日本",
                "type": "演唱会电影",
                "genre": "音乐、纪录片、现场",
                "category": "亚洲经典",
                "tags": [
                        "J-POP",
                        "偶像",
                        "夏日",
                        "舞台",
                        "青春"
                ],
                "url": "movie-1252.html",
                "cover": "52.jpg"
        },
        {
                "title": "危墙狙击",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "狙击手",
                        "政治阴谋",
                        "孤胆英雄",
                        "限时营救",
                        "楼宇对决"
                ],
                "url": "movie-1253.html",
                "cover": "53.jpg"
        },
        {
                "title": "我与艺妓",
                "year": "2017",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 爱情, 文化",
                "category": "纪录综艺",
                "tags": [
                        "京都",
                        "艺伎",
                        "忘年恋"
                ],
                "url": "movie-1254.html",
                "cover": "54.jpg"
        },
        {
                "title": "辛迪斯",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "科幻，悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "AI觉醒",
                        "记忆植入",
                        "身份危机"
                ],
                "url": "movie-1255.html",
                "cover": "55.jpg"
        },
        {
                "title": "玻璃橱窗中的姑娘",
                "year": "2026",
                "region": "法国",
                "type": "电影",
                "genre": "剧情，悬疑",
                "category": "爱情家庭",
                "tags": [
                        "社恐",
                        "偷窥",
                        "都市孤独",
                        "假身份"
                ],
                "url": "movie-1256.html",
                "cover": "56.jpg"
        },
        {
                "title": "留校联盟",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "青春校园",
                "category": "动作冒险",
                "tags": [
                        "社团",
                        "对抗学校",
                        "联盟",
                        "成长"
                ],
                "url": "movie-1257.html",
                "cover": "57.jpg"
        },
        {
                "title": "圣地亚哥的传奇一生",
                "year": "2025",
                "region": "西班牙 / 墨西哥",
                "type": "电影",
                "genre": "传记 / 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "征服者",
                        "反思",
                        "大航海",
                        "老年与回忆"
                ],
                "url": "movie-1258.html",
                "cover": "58.jpg"
        },
        {
                "title": "我心里的太阳",
                "year": "2019",
                "region": "中国",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "抑郁症",
                        "亲情治愈",
                        "小镇叙事"
                ],
                "url": "movie-1259.html",
                "cover": "59.jpg"
        },
        {
                "title": "热恋彩虹岛",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 同性 / 喜剧",
                "category": "纪录综艺",
                "tags": [
                        "海岛",
                        "浪漫",
                        "治愈",
                        "夏日"
                ],
                "url": "movie-1260.html",
                "cover": "60.jpg"
        },
        {
                "title": "降龙罗汉",
                "year": "2025",
                "region": "中国",
                "type": "网络电影",
                "genre": "动作 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "佛教",
                        "降魔",
                        "功夫",
                        "前世今生"
                ],
                "url": "movie-1261.html",
                "cover": "61.jpg"
        },
        {
                "title": "厨师太多",
                "year": "2025",
                "region": "意大利",
                "type": "电影",
                "genre": "喜剧 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "米其林",
                        "后厨疑云",
                        "全员嫌疑人",
                        "舌尖解谜"
                ],
                "url": "movie-1262.html",
                "cover": "62.jpg"
        },
        {
                "title": "克鲁小丑的摇滚坏生活",
                "year": "2015",
                "region": "美国",
                "type": "电影",
                "genre": "传记",
                "category": "纪录综艺",
                "tags": [
                        "音乐",
                        "摇滚",
                        "荒诞",
                        "真实事件",
                        "疯狂"
                ],
                "url": "movie-1263.html",
                "cover": "63.jpg"
        },
        {
                "title": "严肃的男人",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "剧情、哲学、黑色喜剧",
                "category": "日韩精选",
                "tags": [
                        "中年危机",
                        "存在主义",
                        "荒诞"
                ],
                "url": "movie-1264.html",
                "cover": "64.jpg"
        },
        {
                "title": "爸爸在审判",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情，悬疑",
                "category": "日韩精选",
                "tags": [
                        "法庭戏",
                        "父权",
                        "记忆反转",
                        "弑父隐喻"
                ],
                "url": "movie-1265.html",
                "cover": "65.jpg"
        },
        {
                "title": "明星助理",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "喜剧， 爱情",
                "category": "纪录综艺",
                "tags": [
                        "娱乐圈",
                        "职场",
                        "反套路",
                        "欢喜冤家",
                        "草根逆袭"
                ],
                "url": "movie-1266.html",
                "cover": "66.jpg"
        },
        {
                "title": "杀出狂人镇1973",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖 / 科幻",
                "category": "欧美热播",
                "tags": [
                        "邪教",
                        "病毒",
                        "小镇",
                        "翻拍"
                ],
                "url": "movie-1267.html",
                "cover": "67.jpg"
        },
        {
                "title": "天外来客",
                "year": "2017",
                "region": "英国",
                "type": "剧集",
                "genre": "科幻 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "外星入侵",
                        "语言学",
                        "心理惊悚",
                        "慢热"
                ],
                "url": "movie-1268.html",
                "cover": "68.jpg"
        },
        {
                "title": "飞吧开天龙",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "律政/励志",
                "category": "爱情家庭",
                "tags": [
                        "底层律师",
                        "司法改革",
                        "热血",
                        "师徒"
                ],
                "url": "movie-1269.html",
                "cover": "69.jpg"
        },
        {
                "title": "基拉·基拉丽娜",
                "year": "2026",
                "region": "日本",
                "type": "动画电影",
                "genre": "科幻,奇幻,冒险,成长",
                "category": "华语佳作",
                "tags": [
                        "宇宙奇想",
                        "双生体",
                        "记忆共鸣",
                        "帝国政争",
                        "星际航行",
                        "成长救赎"
                ],
                "url": "movie-1270.html",
                "cover": "70.jpg"
        },
        {
                "title": "孤海沙堡",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "剧情、惊悚、心理",
                "category": "高分片单",
                "tags": [
                        "孤岛",
                        "记忆",
                        "潮汐",
                        "双胞胎",
                        "替代"
                ],
                "url": "movie-1271.html",
                "cover": "71.jpg"
        },
        {
                "title": "蒙提·派森和圣杯",
                "year": "1975",
                "region": "英国",
                "type": "电影",
                "genre": "喜剧， 冒险， 奇幻",
                "category": "欧美热播",
                "tags": [
                        "荒诞",
                        "恶搞",
                        "亚瑟王",
                        "低成本",
                        "cult"
                ],
                "url": "movie-1272.html",
                "cover": "72.jpg"
        },
        {
                "title": "一击冲天第一季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "动作, 犯罪, 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "狙击手",
                        "冷战",
                        "复仇",
                        "谍战"
                ],
                "url": "movie-1273.html",
                "cover": "73.jpg"
        },
        {
                "title": "忍者神龟：变种大乱斗",
                "year": "2023",
                "region": "美国",
                "type": "电影 / 动画",
                "genre": "喜剧 / 动作 / 科幻 / 动画",
                "category": "日韩精选",
                "tags": [
                        "忍者神龟",
                        "青少年",
                        "涂鸦画风",
                        "变种"
                ],
                "url": "movie-1274.html",
                "cover": "74.jpg"
        },
        {
                "title": "如果我想吹口哨",
                "year": "2024",
                "region": "罗马尼亚",
                "type": "Movie",
                "genre": "剧情",
                "category": "高分片单",
                "tags": [
                        "监狱",
                        "父子",
                        "救赎",
                        "压抑"
                ],
                "url": "movie-1275.html",
                "cover": "75.jpg"
        },
        {
                "title": "你是湖南人不咯第三季",
                "year": "2024",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀, 文化",
                "category": "欧美热播",
                "tags": [
                        "方言",
                        "地域文化",
                        "美食",
                        "娱乐",
                        "湘军"
                ],
                "url": "movie-1276.html",
                "cover": "76.jpg"
        },
        {
                "title": "如果德川家康成为总理大臣",
                "year": "2025",
                "region": "日本",
                "type": "电视剧",
                "genre": "奇幻/政治/喜剧",
                "category": "华语佳作",
                "tags": [
                        "穿越",
                        "幕府",
                        "选举",
                        "讽刺"
                ],
                "url": "movie-1277.html",
                "cover": "77.jpg"
        },
        {
                "title": "暑期何漫漫",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 儿童",
                "category": "欧美热播",
                "tags": [
                        "暑假",
                        "童年",
                        "90年代",
                        "成长"
                ],
                "url": "movie-1278.html",
                "cover": "78.jpg"
        },
        {
                "title": "全息游戏：恋爱世界",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情，科幻，剧情",
                "category": "亚洲经典",
                "tags": [
                        "全息游戏",
                        "虚拟恋爱",
                        "现实逃避",
                        "治愈",
                        "选择"
                ],
                "url": "movie-1279.html",
                "cover": "79.jpg"
        },
        {
                "title": "宝贝露露",
                "year": "2021",
                "region": "法国",
                "type": "剧集",
                "genre": "喜剧, 家庭, 奇幻",
                "category": "悬疑惊悚",
                "tags": [
                        "返老还童",
                        "中年危机",
                        "荒诞"
                ],
                "url": "movie-1280.html",
                "cover": "80.jpg"
        },
        {
                "title": "冒牌货",
                "year": "2021",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧, 剧情",
                "category": "日韩精选",
                "tags": [
                        "假冒",
                        "上流社会",
                        "反转"
                ],
                "url": "movie-1281.html",
                "cover": "81.jpg"
        },
        {
                "title": "开箱灵魂",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "科幻悬疑",
                "category": "欧美热播",
                "tags": [
                        "意识转移",
                        "黑色幽默",
                        "科技伦理",
                        "密室"
                ],
                "url": "movie-1282.html",
                "cover": "82.jpg"
        },
        {
                "title": "沉默的心",
                "year": "2014",
                "region": "丹麦",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "欧美热播",
                "tags": [
                        "北欧冷峻",
                        "死亡",
                        "和解"
                ],
                "url": "movie-1283.html",
                "cover": "83.jpg"
        },
        {
                "title": "破毒强人粤语",
                "year": "2023",
                "region": "中国香港",
                "type": "剧集",
                "genre": "动作, 犯罪, 悬疑",
                "category": "高分片单",
                "tags": [
                        "TVB",
                        "卧底",
                        "毒品",
                        "警匪"
                ],
                "url": "movie-1284.html",
                "cover": "84.jpg"
        },
        {
                "title": "杀破狼",
                "year": "2025",
                "region": "中国香港",
                "type": "剧集",
                "genre": "动作, 犯罪, 剧情",
                "category": "动作冒险",
                "tags": [
                        "贪狼",
                        "破军",
                        "七杀",
                        "宿命",
                        "硬核动作"
                ],
                "url": "movie-1285.html",
                "cover": "85.jpg"
        },
        {
                "title": "弄巧成拙",
                "year": "2025",
                "region": "意大利",
                "type": "电影",
                "genre": "喜剧 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "黑色幽默",
                        "笨贼",
                        "连环误会",
                        "荒诞",
                        "多线叙事"
                ],
                "url": "movie-1286.html",
                "cover": "86.jpg"
        },
        {
                "title": "我们的成长日记第二季",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情，青春",
                "category": "爱情家庭",
                "tags": [
                        "校园",
                        "毕业季",
                        "选择",
                        "友情"
                ],
                "url": "movie-1287.html",
                "cover": "87.jpg"
        },
        {
                "title": "全员嫌疑人",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "暴风雪山庄",
                        "推理",
                        "黑色幽默"
                ],
                "url": "movie-1288.html",
                "cover": "88.jpg"
        },
        {
                "title": "邪眼",
                "year": "2023",
                "region": "意大利",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "超自然",
                        "诅咒",
                        "反转"
                ],
                "url": "movie-1289.html",
                "cover": "89.jpg"
        },
        {
                "title": "宇宙战舰大和号 完结篇",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "科幻，动画，战争，太空歌剧",
                "category": "悬疑惊悚",
                "tags": [
                        "宇宙",
                        "完结",
                        "牺牲",
                        "希望",
                        "CGI大制作"
                ],
                "url": "movie-1290.html",
                "cover": "90.jpg"
        },
        {
                "title": "东京大震荡",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "灾难 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "地震预警",
                        "密室逃生",
                        "社会派",
                        "极限生存"
                ],
                "url": "movie-1291.html",
                "cover": "91.jpg"
        },
        {
                "title": "初瓣",
                "year": "2024",
                "region": "日本",
                "type": "动画电影",
                "genre": "青春 / 音乐 / 励志",
                "category": "爱情家庭",
                "tags": [
                        "合唱部",
                        "口吃",
                        "声乐",
                        "校园"
                ],
                "url": "movie-1292.html",
                "cover": "92.jpg"
        },
        {
                "title": "鬼发",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "都市传说",
                        "诅咒",
                        "理发店",
                        "实体特效",
                        "轮回"
                ],
                "url": "movie-1293.html",
                "cover": "93.jpg"
        },
        {
                "title": "巴尔干庞克",
                "year": "2024",
                "region": "塞尔维亚",
                "type": "电影",
                "genre": "音乐、战争、黑色幽默",
                "category": "日韩精选",
                "tags": [
                        "乐队",
                        "废墟",
                        "反战",
                        "手风琴",
                        "荒诞"
                ],
                "url": "movie-1294.html",
                "cover": "94.jpg"
        },
        {
                "title": "大宋少年志",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装、悬疑、青春",
                "category": "华语佳作",
                "tags": [
                        "少年热血",
                        "谍战",
                        "反转",
                        "团队成长"
                ],
                "url": "movie-1295.html",
                "cover": "95.jpg"
        },
        {
                "title": "谢谢你爱过我",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "都市、情感、治愈",
                "category": "亚洲经典",
                "tags": [
                        "前任重逢",
                        "遗憾美学",
                        "双向治愈",
                        "中年爱情"
                ],
                "url": "movie-1296.html",
                "cover": "96.jpg"
        },
        {
                "title": "锁链",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "家暴",
                        "复仇",
                        "反转",
                        "女性",
                        "心理"
                ],
                "url": "movie-1297.html",
                "cover": "97.jpg"
        },
        {
                "title": "马丁·伊登",
                "year": "2019",
                "region": "意大利",
                "type": "电影",
                "genre": "剧情, 爱情",
                "category": "亚洲经典",
                "tags": [
                        "文学",
                        "理想",
                        "幻灭",
                        "改编"
                ],
                "url": "movie-1298.html",
                "cover": "98.jpg"
        },
        {
                "title": "深海利剑",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "军事，动作，悬疑",
                "category": "爱情家庭",
                "tags": [
                        "潜艇",
                        "海军",
                        "潜伏",
                        "牺牲",
                        "科技"
                ],
                "url": "movie-1299.html",
                "cover": "99.jpg"
        },
        {
                "title": "破碎的温柔",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 剧情 / 文艺",
                "category": "高分片单",
                "tags": [
                        "虐恋",
                        "原生家庭",
                        "成长阵痛",
                        "破碎感"
                ],
                "url": "movie-1300.html",
                "cover": "100.jpg"
        },
        {
                "title": "痴鸡小队",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧、动作、乡村",
                "category": "亚洲经典",
                "tags": [
                        "农村",
                        "拳击",
                        "留守少年",
                        "逆袭",
                        "野生"
                ],
                "url": "movie-1301.html",
                "cover": "101.jpg"
        },
        {
                "title": "九龙不败",
                "year": "2023",
                "region": "中国香港 / 中国大陆",
                "type": "电影",
                "genre": "动作, 犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "警匪",
                        "疯批警察",
                        "极限格斗",
                        "双雄",
                        "港式火爆"
                ],
                "url": "movie-1302.html",
                "cover": "102.jpg"
        },
        {
                "title": "这一刻，想见你",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 奇幻 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "时空短信",
                        "错过",
                        "双向奔赴",
                        "催泪",
                        "台式小清新"
                ],
                "url": "movie-1303.html",
                "cover": "103.jpg"
        },
        {
                "title": "马男波杰克第三季",
                "year": "2024",
                "region": "美国",
                "type": "动画剧集",
                "genre": "剧情， 喜剧， 心理",
                "category": "高分片单",
                "tags": [
                        "致郁",
                        "好莱坞",
                        "中年危机",
                        "存在主义"
                ],
                "url": "movie-1304.html",
                "cover": "104.jpg"
        },
        {
                "title": "小木偶奇遇记",
                "year": "2020",
                "region": "意大利 / 法国",
                "type": "电影",
                "genre": "动画, 奇幻, 冒险",
                "category": "亚洲经典",
                "tags": [
                        "哥特童话",
                        "暗黑改编",
                        "父与子",
                        "自我觉醒"
                ],
                "url": "movie-1305.html",
                "cover": "105.jpg"
        },
        {
                "title": "平行理论",
                "year": "2015",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑惊悚",
                "category": "华语佳作",
                "tags": [
                        "平行宇宙",
                        "推理",
                        "连环杀人"
                ],
                "url": "movie-1306.html",
                "cover": "106.jpg"
        },
        {
                "title": "加勒比海盗5：死无对证",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 奇幻, 冒险",
                "category": "亚洲经典",
                "tags": [
                        "杰克船长",
                        "重启",
                        "海神三叉戟",
                        "亡灵",
                        "新一代"
                ],
                "url": "movie-1307.html",
                "cover": "107.jpg"
        },
        {
                "title": "54今夜星光诱惑",
                "year": "2023",
                "region": "中国台湾/美国合拍",
                "type": "电视剧",
                "genre": "音乐、剧情",
                "category": "欧美热播",
                "tags": [
                        "夜店",
                        "LGBTQ",
                        "90年代",
                        "梦想"
                ],
                "url": "movie-1308.html",
                "cover": "108.jpg"
        },
        {
                "title": "独眼龙",
                "year": "1961",
                "region": "美国",
                "type": "电影",
                "genre": "西部, 动作",
                "category": "喜剧治愈",
                "tags": [
                        "独眼枪手",
                        "复仇",
                        "边境线",
                        "经典西部片"
                ],
                "url": "movie-1309.html",
                "cover": "109.jpg"
        },
        {
                "title": "濑户内月光小夜曲",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "剧情/爱情/治愈",
                "category": "亚洲经典",
                "tags": [
                        "日式治愈",
                        "濑户内海",
                        "忘年恋",
                        "遗愿清单"
                ],
                "url": "movie-1310.html",
                "cover": "110.jpg"
        },
        {
                "title": "玫瑰母亲",
                "year": "2023",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑 / 惊悚 / 家庭",
                "category": "纪录综艺",
                "tags": [
                        "母职惩罚",
                        "单亲妈妈",
                        "邪教洗脑",
                        "失踪儿童",
                        "复仇"
                ],
                "url": "movie-1311.html",
                "cover": "111.jpg"
        },
        {
                "title": "春色满园关不住",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 乡村",
                "category": "亚洲经典",
                "tags": [
                        "乡村振兴",
                        "园艺治疗",
                        "女性创业"
                ],
                "url": "movie-1312.html",
                "cover": "112.jpg"
        },
        {
                "title": "彼得·潘与温蒂",
                "year": "2010",
                "region": "英国",
                "type": "奇幻冒险电影",
                "genre": "奇幻,冒险,家庭,成长",
                "category": "悬疑惊悚",
                "tags": [
                        "永无岛",
                        "时间控制",
                        "女性成长",
                        "社会边界",
                        "成长叙事"
                ],
                "url": "movie-1313.html",
                "cover": "113.jpg"
        },
        {
                "title": "阴间大法师",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧， 奇幻， 恐怖",
                "category": "高分片单",
                "tags": [
                        "蒂姆·伯顿风",
                        "荒诞",
                        "亡灵",
                        "反套路"
                ],
                "url": "movie-1314.html",
                "cover": "114.jpg"
        },
        {
                "title": "大进击",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪，动作，喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "抢劫",
                        "老人院",
                        "热血",
                        "退休生活"
                ],
                "url": "movie-1315.html",
                "cover": "115.jpg"
        },
        {
                "title": "为我而语",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "欧美热播",
                "tags": [
                        "自闭症",
                        "导盲犬",
                        "母爱",
                        "沟通"
                ],
                "url": "movie-1316.html",
                "cover": "116.jpg"
        },
        {
                "title": "鬼胆神偷",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "犯罪 / 灵异 / 动作喜剧",
                "category": "动作冒险",
                "tags": [
                        "盗贼",
                        "闹鬼博物馆",
                        "阴阳眼",
                        "黑吃黑"
                ],
                "url": "movie-1317.html",
                "cover": "117.jpg"
        },
        {
                "title": "阿虎",
                "year": "2024",
                "region": "泰国",
                "type": "电影",
                "genre": "动作 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "泰拳",
                        "底层",
                        "父子",
                        "热血",
                        "催泪"
                ],
                "url": "movie-1318.html",
                "cover": "118.jpg"
        },
        {
                "title": "疑点",
                "year": "1982",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "法庭剧",
                        "推理",
                        "社会派"
                ],
                "url": "movie-1319.html",
                "cover": "119.jpg"
        },
        {
                "title": "怪化猫前传",
                "year": "2018",
                "region": "日本",
                "type": "剧集 / 动画",
                "genre": "奇幻 / 恐怖 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "浮世绘美学",
                        "卖药郎起源",
                        "妖怪怪谈",
                        "烧脑隐喻"
                ],
                "url": "movie-1320.html",
                "cover": "120.jpg"
        },
        {
                "title": "蛇气",
                "year": "1998",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖, 惊悚",
                "category": "日韩精选",
                "tags": [
                        "怪谈",
                        "生物变异",
                        "诅咒",
                        "密室"
                ],
                "url": "movie-1321.html",
                "cover": "121.jpg"
        },
        {
                "title": "异星智慧",
                "year": "2017",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 恐怖",
                "category": "日韩精选",
                "tags": [
                        "外星生物",
                        "空间站",
                        "逃生",
                        "寄生",
                        "密室"
                ],
                "url": "movie-1322.html",
                "cover": "122.jpg"
        },
        {
                "title": "青云志2",
                "year": "2027",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "仙侠玄幻",
                "category": "欧美热播",
                "tags": [
                        "修仙",
                        "正邪之辨",
                        "虐恋",
                        "特效大片"
                ],
                "url": "movie-1323.html",
                "cover": "123.jpg"
        },
        {
                "title": "里登豪斯广场2025",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 悬疑 / 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "近未来",
                        "监控社会",
                        "社区阴谋",
                        "乌托邦",
                        "反叛"
                ],
                "url": "movie-1324.html",
                "cover": "124.jpg"
        },
        {
                "title": "恩恩爱爱",
                "year": "2020",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "家庭喜剧",
                "category": "动作冒险",
                "tags": [
                        "婚姻日常",
                        "家长里短",
                        "误会连环",
                        "社区群像",
                        "轻松治愈"
                ],
                "url": "movie-1325.html",
                "cover": "125.jpg"
        },
        {
                "title": "冬日奇缘",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 奇幻 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "雪夜相遇",
                        "时间回环",
                        "失忆",
                        "小城治愈",
                        "冬季童话"
                ],
                "url": "movie-1326.html",
                "cover": "126.jpg"
        },
        {
                "title": "第九部落",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "奇幻 / 冒险 / 悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "基因编辑",
                        "秘密实验",
                        "都市传说",
                        "非人"
                ],
                "url": "movie-1327.html",
                "cover": "127.jpg"
        },
        {
                "title": "孤雄",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻, 悬疑, 伦理",
                "category": "高分片单",
                "tags": [
                        "克隆",
                        "身份认同",
                        "伦理困境",
                        "独角戏"
                ],
                "url": "movie-1328.html",
                "cover": "128.jpg"
        },
        {
                "title": "万物生灵第四季",
                "year": "2025",
                "region": "英国",
                "type": "剧集",
                "genre": "剧情，家庭，治愈",
                "category": "爱情家庭",
                "tags": [
                        "兽医",
                        "乡村",
                        "二战",
                        "成长"
                ],
                "url": "movie-1329.html",
                "cover": "129.jpg"
        },
        {
                "title": "双面亚当",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情，惊悚，心理",
                "category": "爱情家庭",
                "tags": [
                        "人格分裂",
                        "身份认同",
                        "巴黎",
                        "伦理困境"
                ],
                "url": "movie-1330.html",
                "cover": "130.jpg"
        },
        {
                "title": "恨君不似江楼月",
                "year": "2021",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "民国情感 / 悬疑 / 家族伦理",
                "category": "喜剧治愈",
                "tags": [
                        "旧梦重逢",
                        "码头风云",
                        "纸上契约",
                        "双线追凶",
                        "爱恨难分"
                ],
                "url": "movie-1331.html",
                "cover": "131.jpg"
        },
        {
                "title": "爱我敢不敢",
                "year": "2023",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 喜剧",
                "category": "动作冒险",
                "tags": [
                        "暧昧",
                        "真心话大冒险",
                        "青梅竹马",
                        "反转"
                ],
                "url": "movie-1332.html",
                "cover": "132.jpg"
        },
        {
                "title": "左撇子女人",
                "year": "2023",
                "region": "台湾",
                "type": "电视剧",
                "genre": "都市悬疑,犯罪,心理悬疑",
                "category": "高分片单",
                "tags": [
                        "左撇子特征",
                        "反直觉推理",
                        "失忆",
                        "女性成长",
                        "地下交易",
                        "双重身份"
                ],
                "url": "movie-1333.html",
                "cover": "133.jpg"
        },
        {
                "title": "三垒手",
                "year": "2022",
                "region": "日本",
                "type": "电影",
                "genre": "运动 / 青春 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "棒球",
                        "失败者",
                        "社团",
                        "成长",
                        "真实改编"
                ],
                "url": "movie-1334.html",
                "cover": "134.jpg"
        },
        {
                "title": "山盟海誓",
                "year": "2025",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情，剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "老年爱情",
                        "回忆与现实",
                        "海边",
                        "生命终点"
                ],
                "url": "movie-1335.html",
                "cover": "135.jpg"
        },
        {
                "title": "再生缘国语",
                "year": "2025",
                "region": "中国香港 / 中国大陆",
                "type": "剧集",
                "genre": "古装 / 爱情 / 重生",
                "category": "高分片单",
                "tags": [
                        "女状元",
                        "替身",
                        "朝堂",
                        "失忆",
                        "双向暗恋"
                ],
                "url": "movie-1336.html",
                "cover": "136.jpg"
        },
        {
                "title": "鬼玩人：复活",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖, 喜剧",
                "category": "欧美热播",
                "tags": [
                        "恶灵",
                        "血浆",
                        "反套路"
                ],
                "url": "movie-1337.html",
                "cover": "137.jpg"
        },
        {
                "title": "狼孩",
                "year": "2025",
                "region": "印度",
                "type": "电影",
                "genre": "剧情 / 冒险 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "野生动物",
                        "丛林",
                        "身份认同",
                        "部落冲突",
                        "治愈"
                ],
                "url": "movie-1338.html",
                "cover": "138.jpg"
        },
        {
                "title": "捍卫真相",
                "year": "2022",
                "region": "中国香港",
                "type": "电影",
                "genre": "法律 / 惊悚 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "证据对抗",
                        "新闻调查",
                        "法庭博弈",
                        "权力压迫",
                        "伦理底线"
                ],
                "url": "movie-1339.html",
                "cover": "139.jpg"
        },
        {
                "title": "香火",
                "year": "2025",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑 / 民俗",
                "category": "纪录综艺",
                "tags": [
                        "宗族秘事",
                        "农村邪术",
                        "祭祀",
                        "返乡寻真"
                ],
                "url": "movie-1340.html",
                "cover": "140.jpg"
        },
        {
                "title": "甜蜜的咒诅",
                "year": "2026",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情奇幻",
                "category": "华语佳作",
                "tags": [
                        "甜品",
                        "诅咒",
                        "时间循环",
                        "治愈"
                ],
                "url": "movie-1341.html",
                "cover": "141.jpg"
        },
        {
                "title": "超极限",
                "year": "2021",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作、科幻、运动",
                "category": "动作冒险",
                "tags": [
                        "极限运动",
                        "义体改造",
                        "反乌托邦",
                        "跑酷"
                ],
                "url": "movie-1342.html",
                "cover": "142.jpg"
        },
        {
                "title": "铁血玫瑰",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "动作， 悬疑， 剧情",
                "category": "亚洲经典",
                "tags": [
                        "女子特战队",
                        "毒枭",
                        "复仇",
                        "姐妹情",
                        "丛林战"
                ],
                "url": "movie-1343.html",
                "cover": "143.jpg"
        },
        {
                "title": "西班牙情事2",
                "year": "2025",
                "region": "西班牙",
                "type": "电影",
                "genre": "喜剧，爱情",
                "category": "纪录综艺",
                "tags": [
                        "续集",
                        "文化冲突",
                        "巴斯克",
                        "婚礼闹剧"
                ],
                "url": "movie-1344.html",
                "cover": "144.jpg"
        },
        {
                "title": "次世代机动警察：首都决战",
                "year": "2026",
                "region": "日本",
                "type": "电影（剧场版动画）",
                "genre": "科幻 / 机甲 / 警匪",
                "category": "亚洲经典",
                "tags": [
                        "东京",
                        "巨型机器人",
                        "政治阴谋"
                ],
                "url": "movie-1345.html",
                "cover": "145.jpg"
        },
        {
                "title": "亚洲之眼",
                "year": "2022",
                "region": "新加坡",
                "type": "电影",
                "genre": "谍战 / 犯罪 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "跨国监控",
                        "情报博弈",
                        "城市潜伏",
                        "身份追踪",
                        "数据阴谋"
                ],
                "url": "movie-1346.html",
                "cover": "146.jpg"
        },
        {
                "title": "最后的日出",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻 / 灾难",
                "category": "华语佳作",
                "tags": [
                        "末日",
                        "逃亡",
                        "公路片",
                        "孤独"
                ],
                "url": "movie-1347.html",
                "cover": "147.jpg"
        },
        {
                "title": "走难异形",
                "year": "1990",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧、科幻、动作",
                "category": "动作冒险",
                "tags": [
                        "恶搞",
                        "外星生物",
                        "港式无厘头",
                        "黑色幽默"
                ],
                "url": "movie-1348.html",
                "cover": "148.jpg"
        },
        {
                "title": "珍妮的必要性",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 科幻",
                "category": "欧美热播",
                "tags": [
                        "人工智能伦理",
                        "哲学向",
                        "独角戏",
                        "情感计算"
                ],
                "url": "movie-1349.html",
                "cover": "149.jpg"
        },
        {
                "title": "鱼和薯条",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "爱情, 剧情",
                "category": "高分片单",
                "tags": [
                        "炸鱼薯条店",
                        "移民",
                        "英式幽默",
                        "黄昏恋",
                        "文化冲突"
                ],
                "url": "movie-1350.html",
                "cover": "150.jpg"
        },
        {
                "title": "恋爱时代",
                "year": "2028",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "青梅竹马",
                        "虐恋",
                        "时间跨度",
                        "经典翻拍",
                        "催泪"
                ],
                "url": "movie-1351.html",
                "cover": "1.jpg"
        },
        {
                "title": "摇滚复活",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "音乐, 剧情, 奇幻",
                "category": "华语佳作",
                "tags": [
                        "摇滚",
                        "重生",
                        "代际和解",
                        "乐队",
                        "梦想"
                ],
                "url": "movie-1352.html",
                "cover": "2.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 笑林足球 耶稣拯救你的灵魂 浪子强哥 气像人生 我的1997 阿德尔曼夫妇 源头 童年来客 狗仔杜宾 逃出叙利亚 暴基枪手 致我的陌生恋人 金鱼俱乐部 新手自杀 旅途·未完成 轰炸机 只有我能喜欢你 江河之上 泰山与狩猎者 梦游人生",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "纪录综艺",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1353.html",
                "cover": "3.jpg"
        },
        {
                "title": "罗马2018",
                "year": "2018",
                "region": "意大利",
                "type": "剧集",
                "genre": "剧情 / 历史",
                "category": "高分片单",
                "tags": [
                        "现代罗马",
                        "移民问题",
                        "家族史诗",
                        "黑帮"
                ],
                "url": "movie-1354.html",
                "cover": "4.jpg"
        },
        {
                "title": "我的女友们",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "都市、女性、友情",
                "category": "欧美热播",
                "tags": [
                        "女性群像",
                        "闺蜜",
                        "职场",
                        "婚恋",
                        "成长"
                ],
                "url": "movie-1355.html",
                "cover": "5.jpg"
        },
        {
                "title": "重任在肩第五季",
                "year": "2026",
                "region": "英国",
                "type": "剧集",
                "genre": "犯罪 / 悬疑 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "AC-12",
                        "反腐",
                        "英剧神作",
                        "高能反转"
                ],
                "url": "movie-1356.html",
                "cover": "6.jpg"
        },
        {
                "title": "死亡写真国语",
                "year": "2004",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖, 悬疑, 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "心理扭曲",
                        "胶片杀人",
                        "国语配音版"
                ],
                "url": "movie-1357.html",
                "cover": "7.jpg"
        },
        {
                "title": "信者无敌2016",
                "year": "2016",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情， 历史， 战争",
                "category": "欧美热播",
                "tags": [
                        "信仰",
                        "长征",
                        "牦牛"
                ],
                "url": "movie-1358.html",
                "cover": "8.jpg"
        },
        {
                "title": "双星奇梦",
                "year": "2024",
                "region": "日本",
                "type": "电视剧",
                "genre": "奇幻, 爱情",
                "category": "欧美热播",
                "tags": [
                        "偶像",
                        "双子",
                        "平行世界",
                        "梦境连接"
                ],
                "url": "movie-1359.html",
                "cover": "9.jpg"
        },
        {
                "title": "我是杀手女仆",
                "year": "2025",
                "region": "日本 / 韩国",
                "type": "剧集",
                "genre": "动作 / 喜剧 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "反差",
                        "女杀手",
                        "搞笑日常",
                        "黑帮"
                ],
                "url": "movie-1360.html",
                "cover": "10.jpg"
        },
        {
                "title": "美国式犯罪",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪, 悬疑, 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "真实案件改编",
                        "法律漏洞",
                        "媒体狂欢",
                        "社会派推理"
                ],
                "url": "movie-1361.html",
                "cover": "11.jpg"
        },
        {
                "title": "猎艳记",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "喜剧, 爱情, 古装",
                "category": "日韩精选",
                "tags": [
                        "古代PUA",
                        "反套路",
                        "女权",
                        "轻喜",
                        "扬州"
                ],
                "url": "movie-1362.html",
                "cover": "12.jpg"
        },
        {
                "title": "美利坚系咁先",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情 / 移民 / 家庭",
                "category": "高分片单",
                "tags": [
                        "香港移民",
                        "文化冲突",
                        "唐人街"
                ],
                "url": "movie-1363.html",
                "cover": "13.jpg"
        },
        {
                "title": "鸣鸟",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 传记, 音乐",
                "category": "亚洲经典",
                "tags": [
                        "女歌手",
                        "原型",
                        "梦想",
                        "种族",
                        "励志"
                ],
                "url": "movie-1364.html",
                "cover": "14.jpg"
        },
        {
                "title": "抓住你的衣领",
                "year": "2026",
                "region": "韩国",
                "type": "电视剧",
                "genre": "悬疑 / 爱情",
                "category": "欧美热播",
                "tags": [
                        "检察官",
                        "记者",
                        "连环杀人",
                        "青梅竹马"
                ],
                "url": "movie-1365.html",
                "cover": "15.jpg"
        },
        {
                "title": "美国青年",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，惊悚",
                "category": "高分片单",
                "tags": [
                        "悬疑",
                        "社会",
                        "网络",
                        "身份"
                ],
                "url": "movie-1366.html",
                "cover": "16.jpg"
        },
        {
                "title": "危险的追缠",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 心理",
                "category": "动作冒险",
                "tags": [
                        "跟踪狂",
                        "网红博主",
                        "网络暴力",
                        "反杀"
                ],
                "url": "movie-1367.html",
                "cover": "17.jpg"
        },
        {
                "title": "最后的海洋",
                "year": "2019",
                "region": "美国 / 加拿大",
                "type": "纪录片",
                "genre": "纪录、生态、冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "北极",
                        "塑料污染",
                        "科学考察",
                        "末日景观",
                        "环保"
                ],
                "url": "movie-1368.html",
                "cover": "18.jpg"
        },
        {
                "title": "坏妈妈手册",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧, 家庭",
                "category": "动作冒险",
                "tags": [
                        "黑色幽默",
                        "母职",
                        "反转",
                        "爽剧"
                ],
                "url": "movie-1369.html",
                "cover": "19.jpg"
        },
        {
                "title": "茶煲世家粤语",
                "year": "1989",
                "region": "中国香港",
                "type": "剧集",
                "genre": "喜剧 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "粤语",
                        "处境剧",
                        "市井",
                        "幽默",
                        "怀旧"
                ],
                "url": "movie-1370.html",
                "cover": "20.jpg"
        },
        {
                "title": "马永贞之争霸上海滩粤语",
                "year": "1998",
                "region": "中国香港",
                "type": "剧集",
                "genre": "动作, 剧情, 黑帮",
                "category": "爱情家庭",
                "tags": [
                        "民国",
                        "上海滩",
                        "拳拳到肉",
                        "兄弟情仇"
                ],
                "url": "movie-1371.html",
                "cover": "21.jpg"
        },
        {
                "title": "这是一年",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 家庭",
                "category": "纪录综艺",
                "tags": [
                        "时间循环",
                        "生活流",
                        "温情"
                ],
                "url": "movie-1372.html",
                "cover": "22.jpg"
        },
        {
                "title": "机械师2：复活",
                "year": "2016",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 犯罪, 惊悚",
                "category": "日韩精选",
                "tags": [
                        "硬汉",
                        "极限任务",
                        "复仇",
                        "高科技暗杀",
                        "孤胆英雄"
                ],
                "url": "movie-1373.html",
                "cover": "23.jpg"
        },
        {
                "title": "诅咒屋",
                "year": "2015",
                "region": "澳大利亚",
                "type": "电影",
                "genre": "恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "鬼屋",
                        "纪录片风格",
                        "心理"
                ],
                "url": "movie-1374.html",
                "cover": "24.jpg"
        },
        {
                "title": "好久不见啊喵",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情, 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "猫咪",
                        "治愈",
                        "时空回溯",
                        "温情",
                        "日常"
                ],
                "url": "movie-1375.html",
                "cover": "25.jpg"
        },
        {
                "title": "暗房秘密",
                "year": "2023",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "悬疑, 恐怖",
                "category": "喜剧治愈",
                "tags": [
                        "灵异",
                        "摄影",
                        "古宅"
                ],
                "url": "movie-1376.html",
                "cover": "26.jpg"
        },
        {
                "title": "氧气玩具",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻悬疑",
                "category": "日韩精选",
                "tags": [
                        "近未来",
                        "意识转移",
                        "伦理困境",
                        "黑色幽默"
                ],
                "url": "movie-1377.html",
                "cover": "27.jpg"
        },
        {
                "title": "蝙蝠侠：死胡同",
                "year": "2003",
                "region": "美国",
                "type": "电影短片",
                "genre": "动作科幻",
                "category": "日韩精选",
                "tags": [
                        "粉丝电影",
                        "黑暗",
                        "同人",
                        "小丑"
                ],
                "url": "movie-1378.html",
                "cover": "28.jpg"
        },
        {
                "title": "横行霸道",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 犯罪 / 喜剧",
                "category": "高分片单",
                "tags": [
                        "黑帮",
                        "校园",
                        "卧底",
                        "荒诞"
                ],
                "url": "movie-1379.html",
                "cover": "29.jpg"
        },
        {
                "title": "黑人歌王",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 音乐, 传记",
                "category": "爱情家庭",
                "tags": [
                        "爵士乐",
                        "种族歧视",
                        "天才陨落",
                        "舞台传奇"
                ],
                "url": "movie-1380.html",
                "cover": "30.jpg"
        },
        {
                "title": "鲜花盛开的山村",
                "year": "2021",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 家庭",
                "category": "动作冒险",
                "tags": [
                        "乡村振兴",
                        "温情",
                        "治愈"
                ],
                "url": "movie-1381.html",
                "cover": "31.jpg"
        },
        {
                "title": "诺瓦利斯的蓝玫瑰",
                "year": "2025",
                "region": "德国 / 法国",
                "type": "电影",
                "genre": "剧情 / 奇幻 / 爱情",
                "category": "高分片单",
                "tags": [
                        "浪漫主义",
                        "植物寓言",
                        "时空交错",
                        "诗人",
                        "记忆"
                ],
                "url": "movie-1382.html",
                "cover": "32.jpg"
        },
        {
                "title": "放浪记",
                "year": "1981",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 传记",
                "category": "悬疑惊悚",
                "tags": [
                        "文学改编",
                        "女性独立",
                        "昭和年代",
                        "放浪生活"
                ],
                "url": "movie-1383.html",
                "cover": "33.jpg"
        },
        {
                "title": "少年包青天2",
                "year": "2001",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑, 古装, 探案",
                "category": "高分片单",
                "tags": [
                        "推理",
                        "童年阴影",
                        "单元剧",
                        "烧脑"
                ],
                "url": "movie-1384.html",
                "cover": "34.jpg"
        },
        {
                "title": "回不去的时光",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 怀旧",
                "category": "华语佳作",
                "tags": [
                        "90年代",
                        "国企下岗",
                        "发小",
                        "时代变迁",
                        "遗憾"
                ],
                "url": "movie-1385.html",
                "cover": "35.jpg"
        },
        {
                "title": "特厉屋",
                "year": "2020",
                "region": "中国台湾",
                "type": "电影",
                "genre": "恐怖，奇幻",
                "category": "高分片单",
                "tags": [
                        "凶宅",
                        "诅咒",
                        "民俗",
                        "家庭"
                ],
                "url": "movie-1386.html",
                "cover": "36.jpg"
        },
        {
                "title": "荒川爆笑团",
                "year": "2025",
                "region": "日本",
                "type": "动画剧集",
                "genre": "无厘头喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "桥下居民",
                        "电波系",
                        "日常"
                ],
                "url": "movie-1387.html",
                "cover": "37.jpg"
        },
        {
                "title": "夏绿蒂的网",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "剧情, 悬疑, 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "暗网",
                        "女性",
                        "复仇",
                        "黑客"
                ],
                "url": "movie-1388.html",
                "cover": "38.jpg"
        },
        {
                "title": "谎言和摇篮曲",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑 / 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "保姆",
                        "婴儿",
                        "身份盗窃",
                        "母女"
                ],
                "url": "movie-1389.html",
                "cover": "39.jpg"
        },
        {
                "title": "大江沉重",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "年代史诗",
                "category": "高分片单",
                "tags": [
                        "三峡移民",
                        "家族",
                        "乡土"
                ],
                "url": "movie-1390.html",
                "cover": "40.jpg"
        },
        {
                "title": "咱们裸熊：电影版",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "动画、喜剧",
                "category": "纪录综艺",
                "tags": [
                        "三熊组",
                        "互联网文化",
                        "AI失控",
                        "兄弟情深"
                ],
                "url": "movie-1391.html",
                "cover": "41.jpg"
        },
        {
                "title": "独行的女王",
                "year": "2025",
                "region": "英国",
                "type": "惊悚片",
                "genre": "犯罪悬疑,商业阴谋,女性成长",
                "category": "爱情家庭",
                "tags": [
                        "个人复仇",
                        "供应链追踪",
                        "离婚阴谋",
                        "企业审计",
                        "北方矿区",
                        "权力替身"
                ],
                "url": "movie-1392.html",
                "cover": "42.jpg"
        },
        {
                "title": "夜总会风流案",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "怀旧",
                        "凶杀",
                        "歌厅",
                        "卧底"
                ],
                "url": "movie-1393.html",
                "cover": "43.jpg"
        },
        {
                "title": "清水湾，淡水湾",
                "year": "1982",
                "region": "中国台湾",
                "type": "电影",
                "genre": "文艺剧情 / 成长回忆",
                "category": "日韩精选",
                "tags": [
                        "海边小镇",
                        "家族往事",
                        "初恋错过",
                        "时代变迁",
                        "诗意镜头"
                ],
                "url": "movie-1394.html",
                "cover": "44.jpg"
        },
        {
                "title": "死亡轮盘",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "密室逃生",
                        "心理博弈",
                        "生存游戏"
                ],
                "url": "movie-1395.html",
                "cover": "45.jpg"
        },
        {
                "title": "普什帕：崛起第2部",
                "year": "2024",
                "region": "印度",
                "type": "电影",
                "genre": "动作, 犯罪, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "爽片",
                        "阶级",
                        "复仇"
                ],
                "url": "movie-1396.html",
                "cover": "46.jpg"
        },
        {
                "title": "母亲机器人",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "科幻, 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "人工智能",
                        "育儿",
                        "反乌托邦",
                        "伦理",
                        "悬疑"
                ],
                "url": "movie-1397.html",
                "cover": "47.jpg"
        },
        {
                "title": "当我们离开",
                "year": "2025",
                "region": "土耳其 / 德国",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "欧美热播",
                "tags": [
                        "荣誉谋杀",
                        "女性困境",
                        "文化冲突",
                        "移民",
                        "绝望"
                ],
                "url": "movie-1398.html",
                "cover": "48.jpg"
        },
        {
                "title": "怜卿薄命",
                "year": "1966",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情, 爱情, 悲剧",
                "category": "喜剧治愈",
                "tags": [
                        "粤语片",
                        "歌女",
                        "绝症",
                        "阶级",
                        "黑白"
                ],
                "url": "movie-1399.html",
                "cover": "49.jpg"
        },
        {
                "title": "萌犬流浪记",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动画, 冒险, 家庭",
                "category": "华语佳作",
                "tags": [
                        "流浪狗",
                        "成长",
                        "友情",
                        "治愈",
                        "公路冒险"
                ],
                "url": "movie-1400.html",
                "cover": "50.jpg"
        },
        {
                "title": "逆伦情欲",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "惊悚 / 伦理 / 心理",
                "category": "纪录综艺",
                "tags": [
                        "养女",
                        "控制",
                        "反转",
                        "禁室"
                ],
                "url": "movie-1401.html",
                "cover": "51.jpg"
        },
        {
                "title": "天堂岛疑云第一季",
                "year": "2023",
                "region": "英国",
                "type": "剧集",
                "genre": "悬疑, 犯罪, 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "海岛",
                        "探案",
                        "黑色幽默",
                        "单元剧",
                        "古典推理"
                ],
                "url": "movie-1402.html",
                "cover": "52.jpg"
        },
        {
                "title": "灰姑娘的玻璃手机",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "爱情 / 青春 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "现代童话",
                        "手机失主",
                        "错位暗恋"
                ],
                "url": "movie-1403.html",
                "cover": "53.jpg"
        },
        {
                "title": "美味关系",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "爱情, 喜剧, 美食",
                "category": "欧美热播",
                "tags": [
                        "米其林",
                        "食物评论",
                        "傲慢与偏见",
                        "味觉对决"
                ],
                "url": "movie-1404.html",
                "cover": "54.jpg"
        },
        {
                "title": "金牙大状粤语",
                "year": "2024",
                "region": "中国香港",
                "type": "电视剧",
                "genre": "律政/古装",
                "category": "亚洲经典",
                "tags": [
                        "状师",
                        "粤语",
                        "公堂",
                        "市井"
                ],
                "url": "movie-1405.html",
                "cover": "55.jpg"
        },
        {
                "title": "冰美人",
                "year": "2024",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "爱情，悬疑，历史",
                "category": "喜剧治愈",
                "tags": [
                        "花滑",
                        "冷战",
                        "替身"
                ],
                "url": "movie-1406.html",
                "cover": "56.jpg"
        },
        {
                "title": "秦始皇",
                "year": "2007",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "历史 / 传记 / 战争",
                "category": "日韩精选",
                "tags": [
                        "嬴政",
                        "统一六国",
                        "权谋",
                        "史诗"
                ],
                "url": "movie-1407.html",
                "cover": "57.jpg"
        },
        {
                "title": "夜幕惊魂",
                "year": "2017",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "小区",
                        "电梯",
                        "都市传说",
                        "反转"
                ],
                "url": "movie-1408.html",
                "cover": "58.jpg"
        },
        {
                "title": "天才玩偶 日语版",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "奇幻, 悬疑, 动作",
                "category": "爱情家庭",
                "tags": [
                        "玩偶拟人",
                        "天才对决",
                        "声优全明星"
                ],
                "url": "movie-1409.html",
                "cover": "59.jpg"
        },
        {
                "title": "奶爸的爱情生活",
                "year": "2023",
                "region": "中国",
                "type": "剧集",
                "genre": "喜剧 / 家庭",
                "category": "纪录综艺",
                "tags": [
                        "全职奶爸",
                        "中年危机",
                        "邻里关系",
                        "轻喜剧"
                ],
                "url": "movie-1410.html",
                "cover": "60.jpg"
        },
        {
                "title": "岁岁有余年",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情、家庭、年代",
                "category": "动作冒险",
                "tags": [
                        "春节",
                        "麻将桌",
                        "家族秘史",
                        "亲情",
                        "返乡"
                ],
                "url": "movie-1411.html",
                "cover": "61.jpg"
        },
        {
                "title": "交际女",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情, 情色, 社会",
                "category": "欧美热播",
                "tags": [
                        "舞小姐",
                        "时代变迁",
                        "姐妹情",
                        "女性生存"
                ],
                "url": "movie-1412.html",
                "cover": "62.jpg"
        },
        {
                "title": "至高荣誉",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 犯罪 / 剧情",
                "category": "爱情家庭",
                "tags": [
                        "卧底",
                        "警匪",
                        "兄弟情",
                        "反恐"
                ],
                "url": "movie-1413.html",
                "cover": "63.jpg"
        },
        {
                "title": "聊斋新编",
                "year": "2015",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "志怪 / 古装 / 奇幻",
                "category": "亚洲经典",
                "tags": [
                        "妖狐",
                        "人鬼情缘",
                        "民间传说",
                        "单元故事",
                        "古风悬疑"
                ],
                "url": "movie-1414.html",
                "cover": "64.jpg"
        },
        {
                "title": "以爱之罪",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "犯罪 / 爱情 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "律师与罪犯",
                        "法庭戏",
                        "道德困境",
                        "禁忌之恋"
                ],
                "url": "movie-1415.html",
                "cover": "65.jpg"
        },
        {
                "title": "食鲨之鳄",
                "year": "2025",
                "region": "澳大利亚",
                "type": "电影",
                "genre": "动作、恐怖、冒险",
                "category": "纪录综艺",
                "tags": [
                        "史前巨鳄",
                        "鲨鱼猎手",
                        "生态恐怖",
                        "孤岛求生",
                        "B级片爽感"
                ],
                "url": "movie-1416.html",
                "cover": "66.jpg"
        },
        {
                "title": "卧底爷爷",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作喜剧",
                "category": "亚洲经典",
                "tags": [
                        "退休特工",
                        "带娃",
                        "老年英雄",
                        "乌龙任务"
                ],
                "url": "movie-1417.html",
                "cover": "67.jpg"
        },
        {
                "title": "圣诞发明家",
                "year": "2017",
                "region": "英国",
                "type": "电影",
                "genre": "传记, 剧情, 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "狄更斯",
                        "写作",
                        "圣诞节",
                        "鬼魂",
                        "救赎"
                ],
                "url": "movie-1418.html",
                "cover": "68.jpg"
        },
        {
                "title": "南极大冒险",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "冒险，剧情",
                "category": "纪录综艺",
                "tags": [
                        "极地",
                        "狗",
                        "生存",
                        "真实事件改编"
                ],
                "url": "movie-1419.html",
                "cover": "69.jpg"
        },
        {
                "title": "毛泽东在1925",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "历史，传记，剧情",
                "category": "纪录综艺",
                "tags": [
                        "伟人青年时代",
                        "革命萌芽",
                        "乡土调查",
                        "热血"
                ],
                "url": "movie-1420.html",
                "cover": "70.jpg"
        },
        {
                "title": "八国联军",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作， 历史， 战争",
                "category": "日韩精选",
                "tags": [
                        "清末",
                        "抗击外敌",
                        "民间义士",
                        "悲壮",
                        "武打"
                ],
                "url": "movie-1421.html",
                "cover": "71.jpg"
        },
        {
                "title": "鬼影直播",
                "year": "2025",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖",
                "category": "高分片单",
                "tags": [
                        "灵异",
                        "直播",
                        "新媒体",
                        "伪纪录片"
                ],
                "url": "movie-1422.html",
                "cover": "72.jpg"
        },
        {
                "title": "寡妇思春",
                "year": "1995",
                "region": "台湾",
                "type": "电影",
                "genre": "剧情, 情色",
                "category": "欧美热播",
                "tags": [
                        "女性",
                        "欲望",
                        "小镇"
                ],
                "url": "movie-1423.html",
                "cover": "73.jpg"
        },
        {
                "title": "终极猎杀",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 惊悚, 科幻",
                "category": "纪录综艺",
                "tags": [
                        "近未来",
                        "人工智能",
                        "大逃杀",
                        "反乌托邦"
                ],
                "url": "movie-1424.html",
                "cover": "74.jpg"
        },
        {
                "title": "极速僵尸",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 恐怖 / 科幻",
                "category": "亚洲经典",
                "tags": [
                        "变异僵尸",
                        "赛车",
                        "末世",
                        "兄弟情"
                ],
                "url": "movie-1425.html",
                "cover": "75.jpg"
        },
        {
                "title": "食客2：泡菜战争",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情, 美食",
                "category": "欧美热播",
                "tags": [
                        "美食",
                        "传承",
                        "商业阴谋",
                        "复仇"
                ],
                "url": "movie-1426.html",
                "cover": "76.jpg"
        },
        {
                "title": "暴力监狱第一季",
                "year": "2007",
                "region": "美国",
                "type": "动画剧集",
                "genre": "荒诞动画 / 黑色喜剧 / 暴力讽刺",
                "category": "动作冒险",
                "tags": [
                        "监狱秩序",
                        "夸张血腥",
                        "荒诞规则",
                        "权力失控",
                        "地狱式日常",
                        "反讽喜剧"
                ],
                "url": "movie-1427.html",
                "cover": "77.jpg"
        },
        {
                "title": "阿里，山羊与阿伯拉希姆",
                "year": "2018",
                "region": "土耳其/法国",
                "type": "电影",
                "genre": "剧情/家庭",
                "category": "亚洲经典",
                "tags": [
                        "治愈",
                        "父子和解",
                        "乡村",
                        "动物",
                        "贫穷"
                ],
                "url": "movie-1428.html",
                "cover": "78.jpg"
        },
        {
                "title": "恶少之声",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "惊悚 / 校园 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "霸凌复仇",
                        "声音恐怖",
                        "网络暴力",
                        "反转"
                ],
                "url": "movie-1429.html",
                "cover": "79.jpg"
        },
        {
                "title": "超元气三姐妹第二季",
                "year": "2026",
                "region": "日本",
                "type": "动画剧集",
                "genre": "喜剧, 日常, 校园",
                "category": "悬疑惊悚",
                "tags": [
                        "泡面番",
                        "无厘头搞笑",
                        "姐妹互动"
                ],
                "url": "movie-1430.html",
                "cover": "80.jpg"
        },
        {
                "title": "太阳后裔的保镖",
                "year": "2019",
                "region": "韩国",
                "type": "网络剧",
                "genre": "动作， 爱情， 喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "恶搞",
                        "保镖",
                        "太阳后裔",
                        "戏仿",
                        "军官"
                ],
                "url": "movie-1431.html",
                "cover": "81.jpg"
        },
        {
                "title": "语言",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "科幻，剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "语言学",
                        "外星接触",
                        "时间悖论",
                        "沟通"
                ],
                "url": "movie-1432.html",
                "cover": "82.jpg"
        },
        {
                "title": "恋人之城",
                "year": "2024",
                "region": "意大利 / 法国",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "异国邂逅",
                        "时空错位",
                        "城市漫游"
                ],
                "url": "movie-1433.html",
                "cover": "83.jpg"
        },
        {
                "title": "扎娜",
                "year": "2023",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "剧情 / 奇幻",
                "category": "爱情家庭",
                "tags": [
                        "极寒之地",
                        "萨满信仰",
                        "母女羁绊",
                        "灵性觉醒"
                ],
                "url": "movie-1434.html",
                "cover": "84.jpg"
        },
        {
                "title": "唐诡奇谭",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑 / 奇幻 / 古装",
                "category": "喜剧治愈",
                "tags": [
                        "唐朝",
                        "诡案",
                        "术士"
                ],
                "url": "movie-1435.html",
                "cover": "85.jpg"
        },
        {
                "title": "恶魔在身边",
                "year": "2025",
                "region": "中国台湾",
                "type": "电视剧集",
                "genre": "爱情，奇幻，校园",
                "category": "欧美热播",
                "tags": [
                        "恶魔契约",
                        "霸总文学",
                        "奇幻反转",
                        "灵魂互换"
                ],
                "url": "movie-1436.html",
                "cover": "86.jpg"
        },
        {
                "title": "真爱囧冤家",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧",
                "category": "爱情家庭",
                "tags": [
                        "爱情",
                        "港式喜剧",
                        "误会",
                        "家庭",
                        "爆笑"
                ],
                "url": "movie-1437.html",
                "cover": "87.jpg"
        },
        {
                "title": "海军之眼",
                "year": "2015",
                "region": "澳大利亚",
                "type": "电影",
                "genre": "战争纪实",
                "category": "亚洲经典",
                "tags": [
                        "潜艇",
                        "声呐兵",
                        "真实事件改编"
                ],
                "url": "movie-1438.html",
                "cover": "88.jpg"
        },
        {
                "title": "九义人",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "女性群像",
                        "复仇",
                        "单元剧"
                ],
                "url": "movie-1439.html",
                "cover": "89.jpg"
        },
        {
                "title": "搜索",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 犯罪, 科技",
                "category": "华语佳作",
                "tags": [
                        "大数据",
                        "隐私",
                        "绑架"
                ],
                "url": "movie-1440.html",
                "cover": "90.jpg"
        },
        {
                "title": "嫁给杂种",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情",
                "category": "喜剧治愈",
                "tags": [
                        "农村",
                        "婚姻",
                        "社会议题",
                        "女性"
                ],
                "url": "movie-1441.html",
                "cover": "91.jpg"
        },
        {
                "title": "日为吾兄 月为吾妹",
                "year": "2027",
                "region": "日本",
                "type": "电影",
                "genre": "奇幻 / 爱情 / 历史",
                "category": "亚洲经典",
                "tags": [
                        "神话",
                        "禁忌之恋",
                        "轮回",
                        "诗意"
                ],
                "url": "movie-1442.html",
                "cover": "92.jpg"
        },
        {
                "title": "战毒国语",
                "year": "2020",
                "region": "中国大陆 / 中国香港",
                "type": "剧集",
                "genre": "犯罪, 动作",
                "category": "欧美热播",
                "tags": [
                        "卧底",
                        "毒品",
                        "兄弟情",
                        "国粤双语"
                ],
                "url": "movie-1443.html",
                "cover": "93.jpg"
        },
        {
                "title": "小戏骨：焦裕禄",
                "year": "2025",
                "region": "中国内地",
                "type": "剧集",
                "genre": "剧情、传记、儿童",
                "category": "爱情家庭",
                "tags": [
                        "小戏骨",
                        "英模",
                        "兰考",
                        "催泪"
                ],
                "url": "movie-1444.html",
                "cover": "94.jpg"
        },
        {
                "title": "最完美的女孩",
                "year": "2027",
                "region": "日本",
                "type": "电影",
                "genre": "科幻 / 惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "AI",
                        "人造人",
                        "母爱",
                        "伦理"
                ],
                "url": "movie-1445.html",
                "cover": "95.jpg"
        },
        {
                "title": "恐怖的鬼森林",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "民俗",
                        "灵异",
                        "密室逃脱",
                        "诅咒",
                        "反转"
                ],
                "url": "movie-1446.html",
                "cover": "96.jpg"
        },
        {
                "title": "生命宛如致命恶疾",
                "year": "2024",
                "region": "波兰",
                "type": "电影",
                "genre": "剧情 / 存在主义",
                "category": "喜剧治愈",
                "tags": [
                        "绝症",
                        "哲学对话",
                        "黑色诗意"
                ],
                "url": "movie-1447.html",
                "cover": "97.jpg"
        },
        {
                "title": "乘客2023",
                "year": "2023",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑, 灾难, 犯罪",
                "category": "动作冒险",
                "tags": [
                        "飞机",
                        "密闭空间",
                        "猜凶手",
                        "劫机",
                        "反转"
                ],
                "url": "movie-1448.html",
                "cover": "98.jpg"
        },
        {
                "title": "一梦如故",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "奇幻 / 爱情 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "穿越梦境",
                        "古籍修复",
                        "双向暗恋",
                        "民国风",
                        "治愈"
                ],
                "url": "movie-1449.html",
                "cover": "99.jpg"
        },
        {
                "title": "家和万事兴之情归龙年",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "家庭、贺岁",
                "category": "高分片单",
                "tags": [
                        "春节",
                        "亲情",
                        "和解",
                        "回乡",
                        "喜剧"
                ],
                "url": "movie-1450.html",
                "cover": "100.jpg"
        },
        {
                "title": "黑白无双第一季",
                "year": "2024",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "奇幻 / 动作 / 悬疑",
                "category": "动作冒险",
                "tags": [
                        "国风",
                        "地府",
                        "双主角",
                        "捉妖",
                        "宿命"
                ],
                "url": "movie-1451.html",
                "cover": "101.jpg"
        },
        {
                "title": "爱因斯坦传",
                "year": "2017",
                "region": "英国 / 美国",
                "type": "电视剧",
                "genre": "传记 / 剧情 / 历史",
                "category": "爱情家庭",
                "tags": [
                        "科学史",
                        "天才孤独",
                        "相对论",
                        "战争年代",
                        "家庭关系"
                ],
                "url": "movie-1452.html",
                "cover": "102.jpg"
        },
        {
                "title": "双面君王",
                "year": "2024",
                "region": "韩国",
                "type": "电视剧",
                "genre": "古装 / 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "替身",
                        "宫廷",
                        "精神分裂"
                ],
                "url": "movie-1453.html",
                "cover": "103.jpg"
        },
        {
                "title": "来自多彩世界的明天",
                "year": "2018",
                "region": "日本",
                "type": "剧集",
                "genre": "动画 / 奇幻 / 青春",
                "category": "华语佳作",
                "tags": [
                        "穿越",
                        "魔法",
                        "治愈",
                        "P.A.WORKS",
                        "美术感"
                ],
                "url": "movie-1454.html",
                "cover": "104.jpg"
        },
        {
                "title": "大地将变成红色",
                "year": "2024",
                "region": "丹麦",
                "type": "电影",
                "genre": "剧情， 历史， 战争",
                "category": "喜剧治愈",
                "tags": [
                        "二战",
                        "丹麦",
                        "抵抗运动",
                        "黑白"
                ],
                "url": "movie-1455.html",
                "cover": "105.jpg"
        },
        {
                "title": "越策越开心2012",
                "year": "2012",
                "region": "中国大陆",
                "type": "综艺 / 电影",
                "genre": "喜剧 / 脱口秀",
                "category": "爱情家庭",
                "tags": [
                        "末日",
                        "荒诞",
                        "段子"
                ],
                "url": "movie-1456.html",
                "cover": "106.jpg"
        },
        {
                "title": "仲冬",
                "year": "2023",
                "region": "挪威",
                "type": "电影",
                "genre": "剧情, 惊悚, 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "极夜",
                        "心理压力",
                        "密闭空间",
                        "家庭秘密"
                ],
                "url": "movie-1457.html",
                "cover": "107.jpg"
        },
        {
                "title": "代号021",
                "year": "2024",
                "region": "中国大陆",
                "type": "谍战动作电影",
                "genre": "谍战 / 动作 / 悬疑",
                "category": "华语佳作",
                "tags": [
                        "冷战档案",
                        "潜伏接头",
                        "身份伪装",
                        "城市暗战",
                        "双线追踪"
                ],
                "url": "movie-1458.html",
                "cover": "108.jpg"
        },
        {
                "title": "绝世武神第四季",
                "year": "2026",
                "region": "中国大陆",
                "type": "动画 / 剧集",
                "genre": "玄幻 / 动作",
                "category": "欧美热播",
                "tags": [
                        "修真",
                        "武学",
                        "宗门",
                        "热血"
                ],
                "url": "movie-1459.html",
                "cover": "109.jpg"
        },
        {
                "title": "国防生",
                "year": "2017",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "军旅, 青春, 励志",
                "category": "日韩精选",
                "tags": [
                        "军校",
                        "训练",
                        "爱国",
                        "热血",
                        "蜕变"
                ],
                "url": "movie-1460.html",
                "cover": "110.jpg"
        },
        {
                "title": "丑闻1950",
                "year": "2025",
                "region": "法国",
                "type": "电影",
                "genre": "剧情、历史、悬疑",
                "category": "纪录综艺",
                "tags": [
                        "战后重建",
                        "媒体黑幕",
                        "女性觉醒",
                        "真实事件改编"
                ],
                "url": "movie-1461.html",
                "cover": "111.jpg"
        },
        {
                "title": "黑夜怪魂",
                "year": "2024",
                "region": "泰国",
                "type": "电影",
                "genre": "恐怖 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "还魂",
                        "诅咒",
                        "高概念",
                        "反转"
                ],
                "url": "movie-1462.html",
                "cover": "112.jpg"
        },
        {
                "title": "老炮敢死队",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作、喜剧",
                "category": "日韩精选",
                "tags": [
                        "老年英雄",
                        "退伍军人",
                        "黑心地产商",
                        "硬核拆迁",
                        "夕阳红热血"
                ],
                "url": "movie-1463.html",
                "cover": "113.jpg"
        },
        {
                "title": "黄金神威最终章",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "冒险, 历史, 动作",
                "category": "日韩精选",
                "tags": [
                        "北海道",
                        "宝藏",
                        "生存战",
                        "杉元佐一"
                ],
                "url": "movie-1464.html",
                "cover": "114.jpg"
        },
        {
                "title": "神鬼认证：杰森包恩",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 惊悚",
                "category": "日韩精选",
                "tags": [
                        "特工",
                        "失忆",
                        "全球追捕",
                        "硬核动作"
                ],
                "url": "movie-1465.html",
                "cover": "115.jpg"
        },
        {
                "title": "2人三足粤语",
                "year": "2019",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 运动 / 家庭",
                "category": "动作冒险",
                "tags": [
                        "粤语",
                        "亲情",
                        "绑腿跑",
                        "草根",
                        "励志"
                ],
                "url": "movie-1466.html",
                "cover": "116.jpg"
        },
        {
                "title": "联社亚美利加",
                "year": "2025",
                "region": "美国",
                "type": "电视剧",
                "genre": "政治, 惊悚, 剧情",
                "category": "纪录综艺",
                "tags": [
                        "新闻业",
                        "阴谋",
                        "媒体",
                        "暗网"
                ],
                "url": "movie-1467.html",
                "cover": "117.jpg"
        },
        {
                "title": "剿杀令完结",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 犯罪",
                "category": "华语佳作",
                "tags": [
                        "黑帮",
                        "卧底",
                        "悲剧英雄"
                ],
                "url": "movie-1468.html",
                "cover": "118.jpg"
        },
        {
                "title": "圣埃尔默",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 惊悚, 西部",
                "category": "高分片单",
                "tags": [
                        "传教士",
                        "边境",
                        "道德困境",
                        "复仇",
                        "独立电影"
                ],
                "url": "movie-1469.html",
                "cover": "119.jpg"
        },
        {
                "title": "幸存者游戏",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑/惊悚",
                "category": "高分片单",
                "tags": [
                        "大逃杀",
                        "社交媒体",
                        "直播",
                        "人性考验"
                ],
                "url": "movie-1470.html",
                "cover": "120.jpg"
        },
        {
                "title": "薄荷咖啡",
                "year": "2025",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情 / 奇幻",
                "category": "华语佳作",
                "tags": [
                        "咖啡",
                        "穿越",
                        "味觉",
                        "救赎",
                        "平行时空"
                ],
                "url": "movie-1471.html",
                "cover": "121.jpg"
        },
        {
                "title": "缘份的天梯",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情, 剧情, 奇幻",
                "category": "高分片单",
                "tags": [
                        "长洲岛",
                        "抢包山",
                        "穿越",
                        "宿命"
                ],
                "url": "movie-1472.html",
                "cover": "122.jpg"
        },
        {
                "title": "宅门恩怨",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "民国家族 / 悬疑情感 / 权谋",
                "category": "高分片单",
                "tags": [
                        "豪门宅斗",
                        "族谱秘密",
                        "旧宅谜案",
                        "继承争夺",
                        "双线回忆",
                        "女性觉醒"
                ],
                "url": "movie-1473.html",
                "cover": "123.jpg"
        },
        {
                "title": "天竺鼠车车",
                "year": "2021",
                "region": "日本",
                "type": "剧集 / 动画 / 短片",
                "genre": "儿童 / 定格动画 / 喜剧",
                "category": "欧美热播",
                "tags": [
                        "天竺鼠",
                        "羊毛毡",
                        "定格",
                        "呆萌",
                        "无声"
                ],
                "url": "movie-1474.html",
                "cover": "124.jpg"
        },
        {
                "title": "萧华挺进冀鲁边",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "战争悬疑 / 政治剧情",
                "category": "欧美热播",
                "tags": [
                        "边境政治",
                        "间谍",
                        "家国",
                        "双重身份",
                        "冬季行动",
                        "电台密码"
                ],
                "url": "movie-1475.html",
                "cover": "125.jpg"
        },
        {
                "title": "副总统第一季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧 / 政治",
                "category": "高分片单",
                "tags": [
                        "讽刺",
                        "职场政治",
                        "快节奏"
                ],
                "url": "movie-1476.html",
                "cover": "126.jpg"
        },
        {
                "title": "皮诺丘的奇幻旅程",
                "year": "2022",
                "region": "意大利",
                "type": "电影",
                "genre": "奇幻剧情",
                "category": "欧美热播",
                "tags": [
                        "黑暗童话",
                        "成长",
                        "木偶",
                        "人性"
                ],
                "url": "movie-1477.html",
                "cover": "127.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 西岳奇童 红酒炖香鸡2 香槟鸡 爸妈又恋嚟 轰炸达尔文：尴尬的真相 旺角马场 中华大丈夫 塔度斯先生 落叶梧桐 普什帕：崛起第2部 破鞋 中央情报局 再吻一次 大药坊粤语 迷失天堂 舞拳 湖南好有味 恶作剧之吻电影版：高中篇 狂蟒之灾2024 活宝警探 双虎奇缘",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "动作冒险",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1478.html",
                "cover": "128.jpg"
        },
        {
                "title": "虎将长征",
                "year": "1961",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争 / 历史",
                "category": "欧美热播",
                "tags": [
                        "红军",
                        "长征",
                        "英雄主义"
                ],
                "url": "movie-1479.html",
                "cover": "129.jpg"
        },
        {
                "title": "国土安全第二季",
                "year": "2012",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情，悬疑",
                "category": "爱情家庭",
                "tags": [
                        "反恐",
                        "谍战",
                        "心理",
                        "烧脑",
                        "惊悚"
                ],
                "url": "movie-1480.html",
                "cover": "130.jpg"
        },
        {
                "title": "正当的丑闻",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "剧情/家庭/悬疑",
                "category": "动作冒险",
                "tags": [
                        "中产面具",
                        "家庭秘密",
                        "伦理地震",
                        "多层反转",
                        "餐桌戏"
                ],
                "url": "movie-1481.html",
                "cover": "131.jpg"
        },
        {
                "title": "转向风",
                "year": "2018",
                "region": "法国/比利时",
                "type": "电影",
                "genre": "剧情，冒险，家庭",
                "category": "欧美热播",
                "tags": [
                        "帆船环球",
                        "自闭症儿子",
                        "和解之旅",
                        "海洋"
                ],
                "url": "movie-1482.html",
                "cover": "132.jpg"
        },
        {
                "title": "西点十君子",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "战争",
                "category": "纪录综艺",
                "tags": [
                        "军校",
                        "军事",
                        "兄弟情",
                        "背叛"
                ],
                "url": "movie-1483.html",
                "cover": "133.jpg"
        },
        {
                "title": "高更：爱在他乡",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "传记，爱情，艺术",
                "category": "欧美热播",
                "tags": [
                        "塔希提岛",
                        "后印象派",
                        "野性与文明"
                ],
                "url": "movie-1484.html",
                "cover": "134.jpg"
        },
        {
                "title": "小裁缝",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭, 成长",
                "category": "动作冒险",
                "tags": [
                        "旧布料",
                        "祖孙相依",
                        "手艺传承",
                        "小镇生活",
                        "重新开店"
                ],
                "url": "movie-1485.html",
                "cover": "135.jpg"
        },
        {
                "title": "英伦90",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "剧情，音乐",
                "category": "悬疑惊悚",
                "tags": [
                        "1990年代",
                        "伦敦",
                        "摇滚乐队",
                        "友情裂痕"
                ],
                "url": "movie-1486.html",
                "cover": "136.jpg"
        },
        {
                "title": "虎侠",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 武侠 / 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "硬核功夫",
                        "都市侠客",
                        "复仇",
                        "反英雄"
                ],
                "url": "movie-1487.html",
                "cover": "137.jpg"
        },
        {
                "title": "碟仙：恶灵始源",
                "year": "2026",
                "region": "中国香港 / 中国台湾",
                "type": "电影",
                "genre": "恐怖 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "中式恐怖",
                        "碟仙起源",
                        "民俗",
                        "邪教",
                        "心理恐怖"
                ],
                "url": "movie-1488.html",
                "cover": "138.jpg"
        },
        {
                "title": "多大事啊",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "华语佳作",
                "tags": [
                        "南京",
                        "方言",
                        "啃老",
                        "和解"
                ],
                "url": "movie-1489.html",
                "cover": "139.jpg"
        },
        {
                "title": "不速之约粤语",
                "year": "2012",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑 / 奇幻 / 爱情",
                "category": "纪录综艺",
                "tags": [
                        "魔鬼",
                        "契约",
                        "心理战",
                        "三角"
                ],
                "url": "movie-1490.html",
                "cover": "140.jpg"
        },
        {
                "title": "战刻夜想曲",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "悬疑 / 战争 / 奇幻",
                "category": "喜剧治愈",
                "tags": [
                        "战国武将",
                        "时间循环",
                        "拉锯战",
                        "人性拷问"
                ],
                "url": "movie-1491.html",
                "cover": "141.jpg"
        },
        {
                "title": "猎艳",
                "year": "2011",
                "region": "中国大陆",
                "type": "电影",
                "genre": "都市悬疑、情感犯罪、黑色剧情",
                "category": "欧美热播",
                "tags": [
                        "社交圈陷阱",
                        "情感操控",
                        "欲望交易",
                        "偷拍视频",
                        "身份伪装"
                ],
                "url": "movie-1492.html",
                "cover": "142.jpg"
        },
        {
                "title": "汉斯·罗素林：东方崛起",
                "year": "2024",
                "region": "瑞典 / 德国",
                "type": "纪录片",
                "genre": "纪录片 / 历史 / 社会",
                "category": "纪录综艺",
                "tags": [
                        "数据解读",
                        "东方经济",
                        "全球化"
                ],
                "url": "movie-1493.html",
                "cover": "143.jpg"
        },
        {
                "title": "沉默之墙",
                "year": "2023",
                "region": "西班牙",
                "type": "电影",
                "genre": "悬疑 / 恐怖",
                "category": "欧美热播",
                "tags": [
                        "凶宅",
                        "灵媒",
                        "家族诅咒",
                        "反转"
                ],
                "url": "movie-1494.html",
                "cover": "144.jpg"
        },
        {
                "title": "最后一件外套",
                "year": "2017",
                "region": "阿根廷 / 西班牙",
                "type": "电影",
                "genre": "剧情 / 家庭 / 老人题材",
                "category": "高分片单",
                "tags": [
                        "大屠杀幸存者",
                        "波兰之旅",
                        "友情契约",
                        "旧外套",
                        "执拗老人"
                ],
                "url": "movie-1495.html",
                "cover": "145.jpg"
        },
        {
                "title": "克拉拉·索拉",
                "year": "2021",
                "region": "哥斯达黎加 / 德国",
                "type": "Movie",
                "genre": "剧情 / 奇幻",
                "category": "亚洲经典",
                "tags": [
                        "拉美魔幻",
                        "宗教伤痕",
                        "女性觉醒",
                        "圣迹疑云",
                        "山村孤女"
                ],
                "url": "movie-1496.html",
                "cover": "146.jpg"
        },
        {
                "title": "丛林无边",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 冒险, 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "热带雨林",
                        "神秘事件",
                        "心理恐惧"
                ],
                "url": "movie-1497.html",
                "cover": "147.jpg"
        },
        {
                "title": "视线中的光",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 惊悚",
                "category": "欧美热播",
                "tags": [
                        "盲人",
                        "感官",
                        "犯罪"
                ],
                "url": "movie-1498.html",
                "cover": "148.jpg"
        },
        {
                "title": "情海惊魂",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "心理惊悚",
                        "婚姻",
                        "记忆删除",
                        "反转"
                ],
                "url": "movie-1499.html",
                "cover": "149.jpg"
        },
        {
                "title": "紫心之恋",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "爱情 / 剧情 / 音乐",
                "category": "高分片单",
                "tags": [
                        "军恋",
                        "先婚后爱",
                        "音乐",
                        "政治分歧",
                        "治愈"
                ],
                "url": "movie-1500.html",
                "cover": "150.jpg"
        },
        {
                "title": "春光猎影",
                "year": "2022",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 犯罪",
                "category": "亚洲经典",
                "tags": [
                        "狗仔队",
                        "娱乐圈黑幕",
                        "兄弟反目",
                        "救赎"
                ],
                "url": "movie-1501.html",
                "cover": "1.jpg"
        },
        {
                "title": "战争狂人",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "战争 / 传记",
                "category": "悬疑惊悚",
                "tags": [
                        "战争狂人",
                        "二战",
                        "心理惊悚",
                        "纳粹"
                ],
                "url": "movie-1502.html",
                "cover": "2.jpg"
        },
        {
                "title": "帅气技工俏医师",
                "year": "2025",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情 / 喜剧 / 医疗",
                "category": "欧美热播",
                "tags": [
                        "欢喜冤家",
                        "机车修理工",
                        "女外科医生",
                        "反差萌",
                        "治愈"
                ],
                "url": "movie-1503.html",
                "cover": "3.jpg"
        },
        {
                "title": "狼",
                "year": "2021",
                "region": "爱尔兰 / 英国",
                "type": "电影",
                "genre": "剧情 / 惊悚",
                "category": "日韩精选",
                "tags": [
                        "心理疾病",
                        "兽化",
                        "治愈",
                        "身份认同"
                ],
                "url": "movie-1504.html",
                "cover": "4.jpg"
        },
        {
                "title": "诚实的商人",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 家庭, 社会",
                "category": "华语佳作",
                "tags": [
                        "便利店",
                        "诚信",
                        "邻里关系",
                        "治愈",
                        "老龄化"
                ],
                "url": "movie-1505.html",
                "cover": "5.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 爱情色香味 主席 兼并 豆腐小僧 红字1995 花花型警 将错就错 玻璃缘 妖姬也疯狂 来自谁的凝望 强人粤语 独角兽之店 汉尼拔·伯吉斯：喜剧夜袭 夺魂记 猛鬼宿舍 可汗的光荣 我们不属于这里 小鬼当家3国语 鬼吹灯之精绝古城 阳光姐妹淘第二季",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "喜剧治愈",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1506.html",
                "cover": "6.jpg"
        },
        {
                "title": "不能说的游戏",
                "year": "2018",
                "region": "法国",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "纪录综艺",
                "tags": [
                        "儿童性侵",
                        "心理创伤",
                        "原生家庭",
                        "抗争"
                ],
                "url": "movie-1507.html",
                "cover": "7.jpg"
        },
        {
                "title": "大学女生的性生活第二季",
                "year": "2023",
                "region": "美国",
                "type": "电视剧",
                "genre": "喜剧 / 爱情 / 校园",
                "category": "亚洲经典",
                "tags": [
                        "青春",
                        "女性友谊",
                        "性启蒙",
                        "多元文化",
                        "成长烦恼"
                ],
                "url": "movie-1508.html",
                "cover": "8.jpg"
        },
        {
                "title": "地中海发烧友",
                "year": "2021",
                "region": "法国/意大利",
                "type": "电影",
                "genre": "喜剧， 公路",
                "category": "悬疑惊悚",
                "tags": [
                        "自驾游",
                        "老年团",
                        "风光",
                        "法式幽默",
                        "治愈"
                ],
                "url": "movie-1509.html",
                "cover": "9.jpg"
        },
        {
                "title": "战争机器",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 科幻 / 战争",
                "category": "悬疑惊悚",
                "tags": [
                        "机甲",
                        "人机融合",
                        "PTSD",
                        "末日"
                ],
                "url": "movie-1510.html",
                "cover": "10.jpg"
        },
        {
                "title": "酒池肉林",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "历史 / 悬疑 / 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "商周",
                        "考古",
                        "活祭",
                        "反转"
                ],
                "url": "movie-1511.html",
                "cover": "11.jpg"
        },
        {
                "title": "九凤家的锦鲤喵殿下",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "奇幻爱情喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "锦鲤化形",
                        "萌宠救赎",
                        "乡村奇谭",
                        "契约婚姻"
                ],
                "url": "movie-1512.html",
                "cover": "12.jpg"
        },
        {
                "title": "岛屿协奏曲",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "剧情、音乐、治愈",
                "category": "日韩精选",
                "tags": [
                        "孤岛",
                        "小提琴",
                        "自闭症",
                        "救赎"
                ],
                "url": "movie-1513.html",
                "cover": "13.jpg"
        },
        {
                "title": "相中情书",
                "year": "2022",
                "region": "中国",
                "type": "电影",
                "genre": "剧情, 爱情, 文艺",
                "category": "喜剧治愈",
                "tags": [
                        "老照片",
                        "祖辈爱情",
                        "胶片摄影",
                        "怀旧"
                ],
                "url": "movie-1514.html",
                "cover": "14.jpg"
        },
        {
                "title": "百合心",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "爱情悬疑 / 文艺剧情",
                "category": "华语佳作",
                "tags": [
                        "双女主",
                        "旧友重逢",
                        "记忆错位",
                        "秘密信件",
                        "温柔反转",
                        "自我救赎"
                ],
                "url": "movie-1515.html",
                "cover": "15.jpg"
        },
        {
                "title": "萝拉的星星在中国",
                "year": "2011",
                "region": "德国 / 中国大陆",
                "type": "动画电影",
                "genre": "动画, 奇幻, 冒险",
                "category": "欧美热播",
                "tags": [
                        "合拍片",
                        "中国元素",
                        "友谊",
                        "治愈"
                ],
                "url": "movie-1516.html",
                "cover": "16.jpg"
        },
        {
                "title": "我记忆中的风琴",
                "year": "1999",
                "region": "韩国",
                "type": "电影",
                "genre": "爱情 / 怀旧 / 乡村",
                "category": "华语佳作",
                "tags": [
                        "乡村教师",
                        "师生恋",
                        "风琴",
                        "纯爱",
                        "金荷娜"
                ],
                "url": "movie-1517.html",
                "cover": "17.jpg"
        },
        {
                "title": "邻家兄弟",
                "year": "2023",
                "region": "日本",
                "type": "剧集",
                "genre": "家庭, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "治愈",
                        "兄弟情",
                        "生活流",
                        "催泪"
                ],
                "url": "movie-1518.html",
                "cover": "18.jpg"
        },
        {
                "title": "公民科恩",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "传记、剧情、历史",
                "category": "华语佳作",
                "tags": [
                        "政治",
                        "律师",
                        "麦卡锡主义",
                        "冷战",
                        "庭审"
                ],
                "url": "movie-1519.html",
                "cover": "19.jpg"
        },
        {
                "title": "雨季来临前",
                "year": "2016",
                "region": "日本",
                "type": "电影",
                "genre": "文艺爱情家庭",
                "category": "高分片单",
                "tags": [
                        "雨季倒计时",
                        "海边小镇",
                        "旧信箱",
                        "未说出口的告别",
                        "返乡重逢",
                        "夏末记忆"
                ],
                "url": "movie-1520.html",
                "cover": "20.jpg"
        },
        {
                "title": "我爱看美眉",
                "year": "2024",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "喜剧 / 青春",
                "category": "爱情家庭",
                "tags": [
                        "校园",
                        "漫画社",
                        "性别视角"
                ],
                "url": "movie-1521.html",
                "cover": "21.jpg"
        },
        {
                "title": "小斌",
                "year": "2023",
                "region": "中国大陆",
                "type": "短片",
                "genre": "剧情 / 儿童",
                "category": "日韩精选",
                "tags": [
                        "留守儿童",
                        "公路片",
                        "寻找父亲",
                        "朴素真情"
                ],
                "url": "movie-1522.html",
                "cover": "22.jpg"
        },
        {
                "title": "雷迪克编年史：黑暗女神",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "动作, 科幻",
                "category": "欧美热播",
                "tags": [
                        "反英雄",
                        "星际",
                        "神话",
                        "复仇",
                        "暗黑"
                ],
                "url": "movie-1523.html",
                "cover": "23.jpg"
        },
        {
                "title": "哈罗德·迪德尔博克之罪",
                "year": "1975",
                "region": "美国",
                "type": "电影",
                "genre": "犯罪 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "罪与罚",
                        "心理剖析",
                        "黑色电影",
                        "道德困境"
                ],
                "url": "movie-1524.html",
                "cover": "24.jpg"
        },
        {
                "title": "练习曲",
                "year": "2006",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情/音乐/公路",
                "category": "华语佳作",
                "tags": [
                        "环岛",
                        "吉他",
                        "听障",
                        "青春",
                        "海岸线"
                ],
                "url": "movie-1525.html",
                "cover": "25.jpg"
        },
        {
                "title": "朝阳之于夜",
                "year": "2028",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 黑色电影",
                "category": "爱情家庭",
                "tags": [
                        "追凶20年",
                        "连环案",
                        "警察"
                ],
                "url": "movie-1526.html",
                "cover": "26.jpg"
        },
        {
                "title": "国王与国家",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "战争 / 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "一战",
                        "军事法庭",
                        "爱国主义",
                        "人性拷问"
                ],
                "url": "movie-1527.html",
                "cover": "27.jpg"
        },
        {
                "title": "玉蒲团之官人我要",
                "year": "1998",
                "region": "中国香港",
                "type": "电影",
                "genre": "古装、情色",
                "category": "喜剧治愈",
                "tags": [
                        "风月",
                        "搞笑",
                        "伦理",
                        "讽刺"
                ],
                "url": "movie-1528.html",
                "cover": "28.jpg"
        },
        {
                "title": "淘金梦",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 西部",
                "category": "日韩精选",
                "tags": [
                        "民国淘金热",
                        "大漠求生",
                        "人性考验",
                        "黑色荒诞"
                ],
                "url": "movie-1529.html",
                "cover": "29.jpg"
        },
        {
                "title": "邪恶力量第七季",
                "year": "2025",
                "region": "美国",
                "type": "电视剧",
                "genre": "奇幻，恐怖，动作",
                "category": "爱情家庭",
                "tags": [
                        "猎魔",
                        "兄弟",
                        "神话重启",
                        "上帝之死",
                        "多元宇宙"
                ],
                "url": "movie-1530.html",
                "cover": "30.jpg"
        },
        {
                "title": "无意背叛",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "家庭、伦理、悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "试管婴儿",
                        "亲子鉴定",
                        "代际秘密",
                        "中年危机",
                        "身份错位"
                ],
                "url": "movie-1531.html",
                "cover": "31.jpg"
        },
        {
                "title": "完全失败",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧, 剧情",
                "category": "高分片单",
                "tags": [
                        "废柴",
                        "治愈",
                        "失败学",
                        "日式丧暖"
                ],
                "url": "movie-1532.html",
                "cover": "32.jpg"
        },
        {
                "title": "陀枪师姐国语",
                "year": "2023",
                "region": "中国香港",
                "type": "剧集",
                "genre": "动作, 刑侦, 女性",
                "category": "纪录综艺",
                "tags": [
                        "女警",
                        "枪战",
                        "师徒",
                        "黑帮",
                        "双女主"
                ],
                "url": "movie-1533.html",
                "cover": "33.jpg"
        },
        {
                "title": "十三猛鬼",
                "year": "2001",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖",
                "category": "亚洲经典",
                "tags": [
                        "鬼屋",
                        "机械装置",
                        "玻璃墙",
                        "遗产",
                        "黑暗神话"
                ],
                "url": "movie-1534.html",
                "cover": "34.jpg"
        },
        {
                "title": "繁荣",
                "year": "2025",
                "region": "中国内地",
                "type": "电影",
                "genre": "剧情，家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "小贩",
                        "夜市",
                        "母女",
                        "拆迁",
                        "草根"
                ],
                "url": "movie-1535.html",
                "cover": "35.jpg"
        },
        {
                "title": "史瑞克三世",
                "year": "2007",
                "region": "美国",
                "type": "动画电影",
                "genre": "喜剧 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "恶搞童话",
                        "中年危机",
                        "找继承者"
                ],
                "url": "movie-1536.html",
                "cover": "36.jpg"
        },
        {
                "title": "美国犯罪故事 第一季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪, 悬疑, 传记",
                "category": "欧美热播",
                "tags": [
                        "真实改编",
                        "陪审团",
                        "媒体审判",
                        "法律剧",
                        "社会议题"
                ],
                "url": "movie-1537.html",
                "cover": "37.jpg"
        },
        {
                "title": "破胆三次7: 新月初生",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖",
                "category": "爱情家庭",
                "tags": [
                        "狼人",
                        "邪教",
                        "新月"
                ],
                "url": "movie-1538.html",
                "cover": "38.jpg"
        },
        {
                "title": "西域古墓之藏宝图",
                "year": "2019",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 冒险 / 悬疑",
                "category": "纪录综艺",
                "tags": [
                        "盗墓",
                        "西域风情",
                        "机关解谜",
                        "怪兽",
                        "网络大电影"
                ],
                "url": "movie-1539.html",
                "cover": "39.jpg"
        },
        {
                "title": "尸发现场",
                "year": "2023",
                "region": "中国香港",
                "type": "剧集",
                "genre": "悬疑 / 犯罪 / 法医",
                "category": "华语佳作",
                "tags": [
                        "单元破案",
                        "法医搭档",
                        "社会案件"
                ],
                "url": "movie-1540.html",
                "cover": "40.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 出租车司机 这个高中没有鬼2 色肉毒蝎女 夺命凶灵3：午夜魔瞳 肉与沙 乡村惊魂 千面艳盗 玩命关头10 喋血之影 青少年哪吒 捍卫机密 我们一起摇太阳 败犬求婚日 完美感觉 女屠夫 爱得其所 珍妮，日与夜 虚拟情人 诡影豪宅 河东狮吼2",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "日韩精选",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1541.html",
                "cover": "41.jpg"
        },
        {
                "title": "英烈千秋",
                "year": "1974",
                "region": "中国台湾",
                "type": "电影",
                "genre": "历史 / 战争",
                "category": "华语佳作",
                "tags": [
                        "抗日战争",
                        "张自忠",
                        "传记",
                        "爱国"
                ],
                "url": "movie-1542.html",
                "cover": "42.jpg"
        },
        {
                "title": "花开有晴天第2季",
                "year": "2021",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情, 偶像, 职场",
                "category": "日韩精选",
                "tags": [
                        "职场",
                        "恋爱",
                        "成长",
                        "甜宠"
                ],
                "url": "movie-1543.html",
                "cover": "43.jpg"
        },
        {
                "title": "犬夜叉:红莲之蓬莱岛",
                "year": "2004",
                "region": "日本",
                "type": "动画电影",
                "genre": "奇幻, 动作",
                "category": "悬疑惊悚",
                "tags": [
                        "犬夜叉",
                        "剧场版",
                        "四魂之玉",
                        "兄妹"
                ],
                "url": "movie-1544.html",
                "cover": "44.jpg"
        },
        {
                "title": "百合与直觉",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情 / 同性",
                "category": "高分片单",
                "tags": [
                        "百合",
                        "职场",
                        "日久生情",
                        "文艺",
                        "慢热"
                ],
                "url": "movie-1545.html",
                "cover": "45.jpg"
        },
        {
                "title": "花都假期",
                "year": "2024",
                "region": "法国 / 比利时",
                "type": "电影",
                "genre": "爱情 / 喜剧 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "巴黎",
                        "中年危机",
                        "错位假期",
                        "陌生人合租",
                        "治愈"
                ],
                "url": "movie-1546.html",
                "cover": "46.jpg"
        },
        {
                "title": "断林镇谜案第九季",
                "year": "2025",
                "region": "澳大利亚",
                "type": "剧集",
                "genre": "悬疑 / 犯罪",
                "category": "华语佳作",
                "tags": [
                        "乡村谋杀",
                        "固定班底",
                        "人情世故"
                ],
                "url": "movie-1547.html",
                "cover": "47.jpg"
        },
        {
                "title": "钟鼓楼",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 社会",
                "category": "爱情家庭",
                "tags": [
                        "北京",
                        "拆迁",
                        "邻里",
                        "时代变迁"
                ],
                "url": "movie-1548.html",
                "cover": "48.jpg"
        },
        {
                "title": "身后那些事儿",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "殡葬业",
                        "东北幽默",
                        "父子和解",
                        "人生百态"
                ],
                "url": "movie-1549.html",
                "cover": "49.jpg"
        },
        {
                "title": "大快人心",
                "year": "1997",
                "region": "奥地利 / 德国",
                "type": "电影",
                "genre": "剧情, 惊悚, 犯罪",
                "category": "日韩精选",
                "tags": [
                        "迈克尔·哈内克",
                        "暴力心理",
                        "入侵者",
                        "无因之恶"
                ],
                "url": "movie-1550.html",
                "cover": "50.jpg"
        },
        {
                "title": "还看今朝",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 年代 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "改革开放",
                        "家族",
                        "商战",
                        "深圳"
                ],
                "url": "movie-1551.html",
                "cover": "51.jpg"
        },
        {
                "title": "苟且不偷生",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 社会",
                "category": "欧美热播",
                "tags": [
                        "中年失业",
                        "家庭责任",
                        "底层叙事",
                        "现实主义"
                ],
                "url": "movie-1552.html",
                "cover": "52.jpg"
        },
        {
                "title": "决战华岩寺",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "历史/战争",
                "category": "日韩精选",
                "tags": [
                        "抗战",
                        "重庆",
                        "僧兵",
                        "寺庙保卫战",
                        "真实改编"
                ],
                "url": "movie-1553.html",
                "cover": "53.jpg"
        },
        {
                "title": "恐怖星球",
                "year": "2007",
                "region": "美国",
                "type": "电影",
                "genre": "动作、恐怖、科幻",
                "category": "欧美热播",
                "tags": [
                        "丧尸",
                        "B级片",
                        "暴力美学",
                        "机枪腿"
                ],
                "url": "movie-1554.html",
                "cover": "54.jpg"
        },
        {
                "title": "青年作曲家之旅",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "音乐 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "音乐",
                        "支教",
                        "成长",
                        "文化传承"
                ],
                "url": "movie-1555.html",
                "cover": "55.jpg"
        },
        {
                "title": "坏小子，安啦！",
                "year": "1991",
                "region": "中国台湾",
                "type": "电影",
                "genre": "犯罪，剧情",
                "category": "爱情家庭",
                "tags": [
                        "黑帮",
                        "青春残酷",
                        "街头",
                        "方言"
                ],
                "url": "movie-1556.html",
                "cover": "56.jpg"
        },
        {
                "title": "强者风范",
                "year": "2012",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情，职场，商战",
                "category": "高分片单",
                "tags": [
                        "金融圈",
                        "师徒对决",
                        "资本博弈",
                        "道德困境",
                        "西装革履"
                ],
                "url": "movie-1557.html",
                "cover": "57.jpg"
        },
        {
                "title": "神寻求回报",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑 / 犯罪 / 宗教",
                "category": "高分片单",
                "tags": [
                        "邪教",
                        "复仇",
                        "神父"
                ],
                "url": "movie-1558.html",
                "cover": "58.jpg"
        },
        {
                "title": "外星人之谜",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 悬疑 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "罗斯威尔",
                        "政府阴谋",
                        "记忆删除",
                        "伦理困境"
                ],
                "url": "movie-1559.html",
                "cover": "59.jpg"
        },
        {
                "title": "第一个国王",
                "year": "2027",
                "region": "英国",
                "type": "剧集",
                "genre": "历史、权力、传记",
                "category": "爱情家庭",
                "tags": [
                        "亚瑟王",
                        "部落统一",
                        "石中剑",
                        "圆桌雏形"
                ],
                "url": "movie-1560.html",
                "cover": "60.jpg"
        },
        {
                "title": "地狱奶奶",
                "year": "2017",
                "region": "韩国",
                "type": "电影",
                "genre": "喜剧 / 动作 / 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "奶奶",
                        "黑帮",
                        "复仇",
                        "搞笑",
                        "飙车"
                ],
                "url": "movie-1561.html",
                "cover": "61.jpg"
        },
        {
                "title": "八仙渡海扫妖魔",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 神话 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "八仙",
                        "降妖",
                        "特效爽片"
                ],
                "url": "movie-1562.html",
                "cover": "62.jpg"
        },
        {
                "title": "魔鬼的眼睛",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖 / 惊悚",
                "category": "华语佳作",
                "tags": [
                        "诅咒",
                        "瞳孔移植",
                        "灵异"
                ],
                "url": "movie-1563.html",
                "cover": "63.jpg"
        },
        {
                "title": "战火情人",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争 / 爱情",
                "category": "悬疑惊悚",
                "tags": [
                        "抗战",
                        "谍战",
                        "生死恋"
                ],
                "url": "movie-1564.html",
                "cover": "64.jpg"
        },
        {
                "title": "桂冠诗人",
                "year": "2026",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 历史",
                "category": "高分片单",
                "tags": [
                        "一战",
                        "诗歌",
                        "传记",
                        "战争反思",
                        "英国"
                ],
                "url": "movie-1565.html",
                "cover": "65.jpg"
        },
        {
                "title": "四海小兄弟",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 犯罪 / 年代",
                "category": "动作冒险",
                "tags": [
                        "90年代",
                        "南方小镇",
                        "四人兄弟",
                        "黑帮卧底",
                        "成长代价"
                ],
                "url": "movie-1566.html",
                "cover": "66.jpg"
        },
        {
                "title": "银河（1969年电影）",
                "year": "1969",
                "region": "法国 / 西德",
                "type": "电影",
                "genre": "剧情，奇幻，冒险",
                "category": "高分片单",
                "tags": [
                        "路易斯·布努埃尔",
                        "超现实主义",
                        "宗教",
                        "朝圣"
                ],
                "url": "movie-1567.html",
                "cover": "67.jpg"
        },
        {
                "title": "内衣小舖",
                "year": "2015",
                "region": "日本",
                "type": "电视剧",
                "genre": "职场 / 励志 / 生活",
                "category": "华语佳作",
                "tags": [
                        "女性创业",
                        "内衣设计",
                        "小镇情怀"
                ],
                "url": "movie-1568.html",
                "cover": "68.jpg"
        },
        {
                "title": "汤姆求学记",
                "year": "2024",
                "region": "英国",
                "type": "电视剧",
                "genre": "喜剧 / 校园",
                "category": "动作冒险",
                "tags": [
                        "中年",
                        "重返大学",
                        "代沟",
                        "搞笑"
                ],
                "url": "movie-1569.html",
                "cover": "69.jpg"
        },
        {
                "title": "加拿大狙击手",
                "year": "2024",
                "region": "加拿大",
                "type": "电影",
                "genre": "战争 / 动作 / 传记",
                "category": "亚洲经典",
                "tags": [
                        "真实事件改编",
                        "最远射程",
                        "道德困境"
                ],
                "url": "movie-1570.html",
                "cover": "70.jpg"
        },
        {
                "title": "绘图人",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑，惊悚，科幻",
                "category": "欧美热播",
                "tags": [
                        "纹身",
                        "预知未来",
                        "连环杀手"
                ],
                "url": "movie-1571.html",
                "cover": "71.jpg"
        },
        {
                "title": "生命中的一天",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情/文艺",
                "category": "悬疑惊悚",
                "tags": [
                        "时间循环",
                        "文艺",
                        "人生感悟",
                        "温情"
                ],
                "url": "movie-1572.html",
                "cover": "72.jpg"
        },
        {
                "title": "草莓娃娃夺梦记",
                "year": "1998",
                "region": "日本",
                "type": "动画剧集",
                "genre": "动画，奇幻，治愈",
                "category": "华语佳作",
                "tags": [
                        "子供向",
                        "梦幻",
                        "成长",
                        "童年回忆"
                ],
                "url": "movie-1573.html",
                "cover": "73.jpg"
        },
        {
                "title": "天国餐馆",
                "year": "2025",
                "region": "日本",
                "type": "电视剧",
                "genre": "喜剧 / 奇幻",
                "category": "动作冒险",
                "tags": [
                        "美食",
                        "死后世界",
                        "治愈",
                        "单元剧",
                        "哲学"
                ],
                "url": "movie-1574.html",
                "cover": "74.jpg"
        },
        {
                "title": "三狼四虎女霸王",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 喜剧, 犯罪",
                "category": "日韩精选",
                "tags": [
                        "女性动作",
                        "江湖",
                        "港味"
                ],
                "url": "movie-1575.html",
                "cover": "75.jpg"
        },
        {
                "title": "亡命之徒",
                "year": "2021",
                "region": "墨西哥",
                "type": "电影",
                "genre": "动作 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "复仇",
                        "黑帮",
                        "父子",
                        "枪战",
                        "公路"
                ],
                "url": "movie-1576.html",
                "cover": "76.jpg"
        },
        {
                "title": "幻爱钟情",
                "year": "2025",
                "region": "西班牙",
                "type": "电影",
                "genre": "惊悚, 爱情, 悬疑",
                "category": "高分片单",
                "tags": [
                        "精神病院",
                        "多重人格",
                        "罗生门",
                        "反转",
                        "禁室"
                ],
                "url": "movie-1577.html",
                "cover": "77.jpg"
        },
        {
                "title": "你是我的喜悦",
                "year": "2027",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "爱情/剧情/LGBTQ+",
                "category": "喜剧治愈",
                "tags": [
                        "女女",
                        "花艺",
                        "失忆"
                ],
                "url": "movie-1578.html",
                "cover": "78.jpg"
        },
        {
                "title": "暗金丑岛君：完结篇",
                "year": "2025",
                "region": "日本",
                "type": "Movie",
                "genre": "犯罪、剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "高利贷",
                        "人性",
                        "黑暗",
                        "大结局"
                ],
                "url": "movie-1579.html",
                "cover": "79.jpg"
        },
        {
                "title": "老爸成双",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "剧情 / 喜剧 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "认亲",
                        "错位人生",
                        "亲情",
                        "搞笑",
                        "温暖"
                ],
                "url": "movie-1580.html",
                "cover": "80.jpg"
        },
        {
                "title": "玉帛干戈",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装, 悬疑",
                "category": "动作冒险",
                "tags": [
                        "春秋战国",
                        "诸侯争霸",
                        "谍战",
                        "权谋",
                        "礼仪"
                ],
                "url": "movie-1581.html",
                "cover": "81.jpg"
        },
        {
                "title": "盗墓者罗拉：生命之匙",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作， 冒险",
                "category": "欧美热播",
                "tags": [
                        "古墓",
                        "女英雄",
                        "解谜",
                        "神话"
                ],
                "url": "movie-1582.html",
                "cover": "82.jpg"
        },
        {
                "title": "万古仙穹",
                "year": "2017",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "奇幻，修仙",
                "category": "高分片单",
                "tags": [
                        "仙侠",
                        "穿越",
                        "搞笑",
                        "热血"
                ],
                "url": "movie-1583.html",
                "cover": "83.jpg"
        },
        {
                "title": "真探",
                "year": "2014",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪悬疑, 心理惊悚, 人性剧",
                "category": "华语佳作",
                "tags": [
                        "旧案重启",
                        "双主角",
                        "黑警共谋",
                        "心理追凶",
                        "道德审判"
                ],
                "url": "movie-1584.html",
                "cover": "84.jpg"
        },
        {
                "title": "切腹",
                "year": "1962",
                "region": "日本",
                "type": "电影",
                "genre": "剧情, 武士",
                "category": "动作冒险",
                "tags": [
                        "小林正树",
                        "武士道",
                        "反叛",
                        "讽刺"
                ],
                "url": "movie-1585.html",
                "cover": "85.jpg"
        },
        {
                "title": "烽火城",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争 / 历史",
                "category": "日韩精选",
                "tags": [
                        "抗日",
                        "孤城",
                        "巷战",
                        "平民"
                ],
                "url": "movie-1586.html",
                "cover": "86.jpg"
        },
        {
                "title": "无人入眠",
                "year": "2018",
                "region": "英国",
                "type": "电影",
                "genre": "恐怖 / 心理",
                "category": "日韩精选",
                "tags": [
                        "失眠",
                        "幻觉",
                        "孤立",
                        "暗黑童话",
                        "高概念"
                ],
                "url": "movie-1587.html",
                "cover": "87.jpg"
        },
        {
                "title": "摇滚都市",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "音乐, 青春, 励志",
                "category": "日韩精选",
                "tags": [
                        "摇滚乐队",
                        "校园社团",
                        "逐梦舞台",
                        "叛逆成长",
                        "友情裂变",
                        "工业城市"
                ],
                "url": "movie-1588.html",
                "cover": "88.jpg"
        },
        {
                "title": "导演先生的完美假期",
                "year": "2026",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧、剧情、文艺",
                "category": "华语佳作",
                "tags": [
                        "元电影",
                        "法式幽默",
                        "创作焦虑",
                        "公路喜剧"
                ],
                "url": "movie-1589.html",
                "cover": "89.jpg"
        },
        {
                "title": "明月守护者",
                "year": "2014",
                "region": "法国",
                "type": "动画电影",
                "genre": "奇幻, 冒险, 爱情",
                "category": "日韩精选",
                "tags": [
                        "唯美",
                        "想象力",
                        "童话",
                        "浪漫"
                ],
                "url": "movie-1590.html",
                "cover": "90.jpg"
        },
        {
                "title": "豪情英雄",
                "year": "2026",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "古装, 武侠, 喜剧",
                "category": "华语佳作",
                "tags": [
                        "咸鱼主角",
                        "反套路",
                        "江湖职场",
                        "群像"
                ],
                "url": "movie-1591.html",
                "cover": "91.jpg"
        },
        {
                "title": "波士顿勒杀狂",
                "year": "2022",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪 / 历史 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "连环杀手",
                        "六十年代",
                        "记者调查",
                        "女性视角"
                ],
                "url": "movie-1592.html",
                "cover": "92.jpg"
        },
        {
                "title": "祖宗十九代",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 奇幻",
                "category": "亚洲经典",
                "tags": [
                        "穿越",
                        "家族史",
                        "幽默",
                        "励志"
                ],
                "url": "movie-1593.html",
                "cover": "93.jpg"
        },
        {
                "title": "流沙斗士",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 科幻",
                "category": "悬疑惊悚",
                "tags": [
                        "末世",
                        "沙漠",
                        "竞技",
                        "改造人"
                ],
                "url": "movie-1594.html",
                "cover": "94.jpg"
        },
        {
                "title": "今日宜加油",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "喜剧, 职场",
                "category": "高分片单",
                "tags": [
                        "办公室",
                        "打工魂",
                        "内卷",
                        "翻身",
                        "群像"
                ],
                "url": "movie-1595.html",
                "cover": "95.jpg"
        },
        {
                "title": "新闻背后",
                "year": "2024",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情，悬疑，职场",
                "category": "日韩精选",
                "tags": [
                        "媒体",
                        "暗箱操作",
                        "真相",
                        "女性",
                        "权力斗争"
                ],
                "url": "movie-1596.html",
                "cover": "96.jpg"
        },
        {
                "title": "金同学的成绩单",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "校园暴力",
                        "阶级",
                        "反转",
                        "复仇"
                ],
                "url": "movie-1597.html",
                "cover": "97.jpg"
        },
        {
                "title": "谁偷了我的粉兔子",
                "year": "2022",
                "region": "德国",
                "type": "电影",
                "genre": "剧情, 历史",
                "category": "动作冒险",
                "tags": [
                        "二战",
                        "童年",
                        "家庭",
                        "温情"
                ],
                "url": "movie-1598.html",
                "cover": "98.jpg"
        },
        {
                "title": "荒唐小混蛋奇遇记",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "喜剧 / 冒险 / 儿童",
                "category": "欧美热播",
                "tags": [
                        "熊孩子",
                        "荒诞",
                        "合家欢",
                        "脑洞"
                ],
                "url": "movie-1599.html",
                "cover": "99.jpg"
        },
        {
                "title": "契妈不易做",
                "year": "1988",
                "region": "中国香港",
                "type": "电影",
                "genre": "家庭喜剧",
                "category": "华语佳作",
                "tags": [
                        "市井",
                        "人情味",
                        "女性互助",
                        "奋斗"
                ],
                "url": "movie-1600.html",
                "cover": "100.jpg"
        },
        {
                "title": "致命拖车",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖， 惊悚， 公路",
                "category": "高分片单",
                "tags": [
                        "公路追杀",
                        "卡车",
                        "无人区",
                        "生存狂",
                        "密闭空间"
                ],
                "url": "movie-1601.html",
                "cover": "101.jpg"
        },
        {
                "title": "黑暗物质三部曲 第一季",
                "year": "2019",
                "region": "英国",
                "type": "奇幻剧集",
                "genre": "奇幻, 科幻, 冒险, 悬疑, 成长",
                "category": "华语佳作",
                "tags": [
                        "平行宇宙",
                        "黑暗物质",
                        "多元时空",
                        "命运",
                        "学园旅程"
                ],
                "url": "movie-1602.html",
                "cover": "102.jpg"
        },
        {
                "title": "钢刀",
                "year": "2016",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 战争",
                "category": "高分片单",
                "tags": [
                        "兄弟反目",
                        "黑白战争",
                        "硬核动作",
                        "美术风格"
                ],
                "url": "movie-1603.html",
                "cover": "103.jpg"
        },
        {
                "title": "绝对零度2020",
                "year": "2020",
                "region": "日本",
                "type": "电视剧",
                "genre": "犯罪, 刑侦, 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "未解决案件",
                        "女警",
                        "冷案搜查",
                        "团队合作"
                ],
                "url": "movie-1604.html",
                "cover": "104.jpg"
        },
        {
                "title": "空中浩劫第三季",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "灾难, 纪实, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "空难",
                        "调查",
                        "真实改编"
                ],
                "url": "movie-1605.html",
                "cover": "105.jpg"
        },
        {
                "title": "审问",
                "year": "2024",
                "region": "韩国",
                "type": "剧集",
                "genre": "悬疑 / 犯罪",
                "category": "欧美热播",
                "tags": [
                        "室内剧",
                        "心理攻防",
                        "反转",
                        "台词爆炸"
                ],
                "url": "movie-1606.html",
                "cover": "106.jpg"
        },
        {
                "title": "为何不去死",
                "year": "2025",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "黑色喜剧 / 动作 / 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "暴力美学",
                        "极端复仇",
                        "黑色幽默",
                        "高概念"
                ],
                "url": "movie-1607.html",
                "cover": "107.jpg"
        },
        {
                "title": "悲伤的孩子",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情, 奇幻",
                "category": "欧美热播",
                "tags": [
                        "情绪",
                        "怪物",
                        "童真",
                        "黑色童话"
                ],
                "url": "movie-1608.html",
                "cover": "108.jpg"
        },
        {
                "title": "地狱岛",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚, 动作, 灾难",
                "category": "欧美热播",
                "tags": [
                        "孤岛",
                        "邪教",
                        "生存",
                        "血腥"
                ],
                "url": "movie-1609.html",
                "cover": "109.jpg"
        },
        {
                "title": "休想行刺本王小姐",
                "year": "2024",
                "region": "中国大陆",
                "type": "网剧",
                "genre": "古装, 喜剧, 悬疑",
                "category": "欧美热播",
                "tags": [
                        "女王爷",
                        "反套路",
                        "权谋",
                        "搞笑",
                        "忠犬护卫"
                ],
                "url": "movie-1610.html",
                "cover": "110.jpg"
        },
        {
                "title": "高杆",
                "year": "2022",
                "region": "中国",
                "type": "电视剧",
                "genre": "运动 / 剧情 / 青春",
                "category": "欧美热播",
                "tags": [
                        "竞技成长",
                        "村镇体育",
                        "逆风翻盘",
                        "师徒关系",
                        "家庭裂痕",
                        "团队荣誉"
                ],
                "url": "movie-1611.html",
                "cover": "111.jpg"
        },
        {
                "title": "侏罗纪公园3",
                "year": "2001",
                "region": "美国",
                "type": "电影",
                "genre": "动作， 科幻， 冒险",
                "category": "纪录综艺",
                "tags": [
                        "恐龙",
                        "岛屿",
                        "生存",
                        "经典续集",
                        "棘龙"
                ],
                "url": "movie-1612.html",
                "cover": "112.jpg"
        },
        {
                "title": "功夫兔与菜包狗第二季",
                "year": "2024",
                "region": "中国",
                "type": "动画剧集",
                "genre": "喜剧动作",
                "category": "欧美热播",
                "tags": [
                        "搞笑",
                        "动物",
                        "功夫",
                        "无厘头"
                ],
                "url": "movie-1613.html",
                "cover": "113.jpg"
        },
        {
                "title": "红墙盗影",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 犯罪 / 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "高智商盗窃",
                        "故宫",
                        "猫鼠游戏",
                        "反转"
                ],
                "url": "movie-1614.html",
                "cover": "114.jpg"
        },
        {
                "title": "邮差2015",
                "year": "2015",
                "region": "意大利",
                "type": "电影",
                "genre": "剧情，历史",
                "category": "爱情家庭",
                "tags": [
                        "二战",
                        "邮差",
                        "爱情",
                        "书信"
                ],
                "url": "movie-1615.html",
                "cover": "115.jpg"
        },
        {
                "title": "大男孩第二季",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "喜剧 / 同性 / 友情",
                "category": "喜剧治愈",
                "tags": [
                        "丧气喜剧",
                        "毒舌室友",
                        "成长",
                        "英国幽默"
                ],
                "url": "movie-1616.html",
                "cover": "116.jpg"
        },
        {
                "title": "极主夫道 电影版",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "喜剧 / 动作 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "黑道",
                        "主夫",
                        "反差萌",
                        "家务",
                        "爆笑"
                ],
                "url": "movie-1617.html",
                "cover": "117.jpg"
        },
        {
                "title": "北地猎人",
                "year": "2016",
                "region": "加拿大",
                "type": "电影",
                "genre": "冒险, 惊悚, 生存",
                "category": "纪录综艺",
                "tags": [
                        "雪原",
                        "追踪",
                        "狩猎",
                        "失联",
                        "人与自然"
                ],
                "url": "movie-1618.html",
                "cover": "118.jpg"
        },
        {
                "title": "警徽天职第四季",
                "year": "2020",
                "region": "新加坡",
                "type": "剧集",
                "genre": "刑侦 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "华人警察",
                        "毒品案",
                        "卧底",
                        "内部调查"
                ],
                "url": "movie-1619.html",
                "cover": "119.jpg"
        },
        {
                "title": "名侦探柯南：天空的劫难船",
                "year": "2025",
                "region": "日本",
                "type": "动画电影",
                "genre": "悬疑动作",
                "category": "日韩精选",
                "tags": [
                        "飞艇",
                        "病毒",
                        "怪盗基德",
                        "高空",
                        "密室"
                ],
                "url": "movie-1620.html",
                "cover": "120.jpg"
        },
        {
                "title": "布吉",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "音乐剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "爵士鼓手",
                        "父子矛盾",
                        "纽约地下"
                ],
                "url": "movie-1621.html",
                "cover": "121.jpg"
        },
        {
                "title": "武庚纪第二季",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "动画, 奇幻, 战斗",
                "category": "亚洲经典",
                "tags": [
                        "封神",
                        "逆天而行",
                        "热血",
                        "神话改编"
                ],
                "url": "movie-1622.html",
                "cover": "122.jpg"
        },
        {
                "title": "深宅谜影",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "民国",
                        "宅斗",
                        "本格推理",
                        "凶宅"
                ],
                "url": "movie-1623.html",
                "cover": "123.jpg"
        },
        {
                "title": "小生梦惊魂粤语",
                "year": "1987",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 奇幻 / 恐怖",
                "category": "高分片单",
                "tags": [
                        "港片",
                        "发哥",
                        "梦境",
                        "搞笑",
                        "惊悚"
                ],
                "url": "movie-1624.html",
                "cover": "124.jpg"
        },
        {
                "title": "贤妻乐坊",
                "year": "2026",
                "region": "中国大陆",
                "type": "电视剧 / 网剧",
                "genre": "古装 / 音乐 / 喜剧",
                "category": "动作冒险",
                "tags": [
                        "女扮男装",
                        "唐朝",
                        "乐队",
                        "女性互助"
                ],
                "url": "movie-1625.html",
                "cover": "125.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 爱，死亡和机器人第二季 会飞的小精灵 男才女貌2 第一项 谎言与错觉 惊爆马尼拉 全职高手第一季 阿特拉斯耸耸肩3 扮熟少女 狐狸在手 赤脚的基奉儿 入侵脑细胞 邻居的狗吠声 牟氏庄园 丛林猎凶 末日激战 鳄鱼先生2 高地酋 恋恋不忘 纨绔子弟 电影版",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "日韩精选",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1626.html",
                "cover": "126.jpg"
        },
        {
                "title": "巨兽岛",
                "year": "2022",
                "region": "日本",
                "type": "电影",
                "genre": "科幻, 灾难, 怪兽",
                "category": "喜剧治愈",
                "tags": [
                        "巨型生物",
                        "孤岛",
                        "生存",
                        "特摄"
                ],
                "url": "movie-1627.html",
                "cover": "127.jpg"
        },
        {
                "title": "绝命毒师第一季",
                "year": "2008",
                "region": "美国",
                "type": "TV剧集",
                "genre": "剧情, 犯罪, 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "反英雄",
                        "化学",
                        "黑色幽默",
                        "中年危机",
                        "封神"
                ],
                "url": "movie-1628.html",
                "cover": "128.jpg"
        },
        {
                "title": "鬼磨坊",
                "year": "2008",
                "region": "德国",
                "type": "电影",
                "genre": "奇幻, 惊悚, 儿童",
                "category": "纪录综艺",
                "tags": [
                        "德国民间传说",
                        "磨坊",
                        "灵魂交易",
                        "学徒",
                        "暗黑童话"
                ],
                "url": "movie-1629.html",
                "cover": "129.jpg"
        },
        {
                "title": "裁断分离之罪恶剪刀",
                "year": "2013",
                "region": "日本",
                "type": "动画剧集",
                "genre": "奇幻, 恋爱, 战斗",
                "category": "亚洲经典",
                "tags": [
                        "发控",
                        "不死的诅咒",
                        "遗产",
                        "血腥恋爱"
                ],
                "url": "movie-1630.html",
                "cover": "130.jpg"
        },
        {
                "title": "布尔什维克兄弟",
                "year": "2021",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "剧情、历史、战争",
                "category": "亚洲经典",
                "tags": [
                        "兄弟情",
                        "苏联",
                        "黑色幽默",
                        "信仰崩塌"
                ],
                "url": "movie-1631.html",
                "cover": "131.jpg"
        },
        {
                "title": "虎口鸳鸯",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争, 爱情, 动作",
                "category": "华语佳作",
                "tags": [
                        "抗战",
                        "间谍夫妻",
                        "双重身份",
                        "牺牲"
                ],
                "url": "movie-1632.html",
                "cover": "132.jpg"
        },
        {
                "title": "大侦探波洛第十三季",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "悬疑, 犯罪",
                "category": "欧美热播",
                "tags": [
                        "本格推理",
                        "阿加莎风格",
                        "最终季"
                ],
                "url": "movie-1633.html",
                "cover": "133.jpg"
        },
        {
                "title": "极乐世界",
                "year": "2027",
                "region": "美国 / 英国",
                "type": "剧集",
                "genre": "科幻 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "意识上传",
                        "伦理拷问",
                        "阶层冲突"
                ],
                "url": "movie-1634.html",
                "cover": "134.jpg"
        },
        {
                "title": "鲁邦三世 鲁邦暗杀指令",
                "year": "1993",
                "region": "日本",
                "type": "电影 / 动画",
                "genre": "动作 / 犯罪 / 喜剧",
                "category": "动作冒险",
                "tags": [
                        "怪盗",
                        "克隆人",
                        "峰不二子",
                        "大盗",
                        "经典IP"
                ],
                "url": "movie-1635.html",
                "cover": "135.jpg"
        },
        {
                "title": "直言真相第一季",
                "year": "2019",
                "region": "美国",
                "type": "剧集",
                "genre": "悬疑 / 犯罪 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "播客",
                        "冤案",
                        "调查记者",
                        "真相",
                        "种族"
                ],
                "url": "movie-1636.html",
                "cover": "136.jpg"
        },
        {
                "title": "万花献媚",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑, 惊悚, 剧情",
                "category": "欧美热播",
                "tags": [
                        "艺伎",
                        "复仇",
                        "豪门",
                        "反转"
                ],
                "url": "movie-1637.html",
                "cover": "137.jpg"
        },
        {
                "title": "珍珠",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "亚洲经典",
                "tags": [
                        "女性",
                        "成长",
                        "亲情",
                        "时代变迁"
                ],
                "url": "movie-1638.html",
                "cover": "138.jpg"
        },
        {
                "title": "屋顶人",
                "year": "2021",
                "region": "中国台湾",
                "type": "电影",
                "genre": "悬疑, 犯罪, 都市",
                "category": "华语佳作",
                "tags": [
                        "高楼天台",
                        "监视视角",
                        "隐秘证词",
                        "夜色追踪",
                        "孤独旁观者"
                ],
                "url": "movie-1639.html",
                "cover": "139.jpg"
        },
        {
                "title": "神探小红帽",
                "year": "2025",
                "region": "日本",
                "type": "动画电影",
                "genre": "悬疑，奇幻，喜剧",
                "category": "华语佳作",
                "tags": [
                        "童话",
                        "推理",
                        "颠覆",
                        "小红帽",
                        "狼人杀"
                ],
                "url": "movie-1640.html",
                "cover": "140.jpg"
        },
        {
                "title": "三个笨贼",
                "year": "2023",
                "region": "意大利",
                "type": "电影",
                "genre": "喜剧, 犯罪",
                "category": "欧美热播",
                "tags": [
                        "盗窃",
                        "乌龙",
                        "名画",
                        "小人物的逆袭",
                        "黑色幽默"
                ],
                "url": "movie-1641.html",
                "cover": "141.jpg"
        },
        {
                "title": "恶狼年代",
                "year": "2026",
                "region": "俄罗斯",
                "type": "电视剧",
                "genre": "犯罪，剧情，黑帮",
                "category": "欧美热播",
                "tags": [
                        "俄罗斯黑帮",
                        "90年代",
                        "寡头",
                        "兄弟情"
                ],
                "url": "movie-1642.html",
                "cover": "142.jpg"
        },
        {
                "title": "终结",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻悬疑, 灾难惊悚, 心理反转",
                "category": "悬疑惊悚",
                "tags": [
                        "末日预警",
                        "记忆丢失",
                        "城市封锁",
                        "倒计时谜团",
                        "人性抉择"
                ],
                "url": "movie-1643.html",
                "cover": "143.jpg"
        },
        {
                "title": "大麻.灵丹还是毒药",
                "year": "2021",
                "region": "美国",
                "type": "纪录片",
                "genre": "纪录，科普",
                "category": "爱情家庭",
                "tags": [
                        "医疗",
                        "争议",
                        "调查",
                        "社会",
                        "药物"
                ],
                "url": "movie-1644.html",
                "cover": "144.jpg"
        },
        {
                "title": "我要上头条",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "网红",
                        "荒诞",
                        "媒体"
                ],
                "url": "movie-1645.html",
                "cover": "145.jpg"
        },
        {
                "title": "火线第四季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "犯罪, 剧情, 社会",
                "category": "日韩精选",
                "tags": [
                        "公共教育",
                        "街头",
                        "系统崩溃",
                        "群像"
                ],
                "url": "movie-1646.html",
                "cover": "146.jpg"
        },
        {
                "title": "彼得的龙",
                "year": "2026",
                "region": "美国 / 新西兰",
                "type": "电影",
                "genre": "奇幻 / 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "龙",
                        "魔法",
                        "童真",
                        "环保"
                ],
                "url": "movie-1647.html",
                "cover": "147.jpg"
        },
        {
                "title": "箭杆河边",
                "year": "1985",
                "region": "中国大陆",
                "type": "电影",
                "genre": "农村剧情 / 历史",
                "category": "纪录综艺",
                "tags": [
                        "河堤建设",
                        "集体记忆",
                        "家族传承",
                        "乡土人情",
                        "时代变迁"
                ],
                "url": "movie-1648.html",
                "cover": "148.jpg"
        },
        {
                "title": "情比山高",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影",
                "genre": "爱情, 冒险",
                "category": "动作冒险",
                "tags": [
                        "登山",
                        "绝症",
                        "雪山",
                        "生死",
                        "诺言"
                ],
                "url": "movie-1649.html",
                "cover": "149.jpg"
        },
        {
                "title": "网瘾战争",
                "year": "2010",
                "region": "中国大陆",
                "type": "动画短片",
                "genre": "剧情 / 讽刺 / 动画",
                "category": "动作冒险",
                "tags": [
                        "网游",
                        "反沉迷",
                        "青春迷航",
                        "亲情裂缝",
                        "现实批判",
                        "黑色幽默"
                ],
                "url": "movie-1650.html",
                "cover": "150.jpg"
        },
        {
                "title": "我希望一切顺利：电影版",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "家庭 / 喜剧 / 剧情",
                "category": "日韩精选",
                "tags": [
                        "生活流",
                        "家庭和解",
                        "城市漂流",
                        "轻喜疗愈",
                        "代际误会",
                        "小人物温情"
                ],
                "url": "movie-1651.html",
                "cover": "1.jpg"
        },
        {
                "title": "单身星球：爱的希腊大冒险",
                "year": "2025",
                "region": "中国大陆 / 希腊",
                "type": "电影",
                "genre": "爱情喜剧",
                "category": "亚洲经典",
                "tags": [
                        "奇幻",
                        "希腊神话",
                        "单身税",
                        "反乌托邦"
                ],
                "url": "movie-1652.html",
                "cover": "2.jpg"
        },
        {
                "title": "白鹿原",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "历史史诗",
                "category": "爱情家庭",
                "tags": [
                        "文学改编",
                        "家族史",
                        "关中",
                        "时代变迁"
                ],
                "url": "movie-1653.html",
                "cover": "3.jpg"
        },
        {
                "title": "艳阳天",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 农村 / 悬疑",
                "category": "欧美热播",
                "tags": [
                        "乡村",
                        "扶贫",
                        "失踪案",
                        "人性",
                        "土地"
                ],
                "url": "movie-1654.html",
                "cover": "4.jpg"
        },
        {
                "title": "那小子真帅",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情/喜剧",
                "category": "动作冒险",
                "tags": [
                        "女追男",
                        "校草",
                        "欢喜冤家"
                ],
                "url": "movie-1655.html",
                "cover": "5.jpg"
        },
        {
                "title": "金钱窒爱",
                "year": "2025",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情, 惊悚",
                "category": "华语佳作",
                "tags": [
                        "富豪家族",
                        "资本游戏",
                        "父权崩塌"
                ],
                "url": "movie-1656.html",
                "cover": "6.jpg"
        },
        {
                "title": "东京审判（电影）",
                "year": "2026",
                "region": "中国大陆 / 日本",
                "type": "电影",
                "genre": "历史 / 剧情 / 战争",
                "category": "动作冒险",
                "tags": [
                        "法庭",
                        "战犯",
                        "国际法",
                        "辩论",
                        "民族尊严"
                ],
                "url": "movie-1657.html",
                "cover": "7.jpg"
        },
        {
                "title": "深夜食堂：东京故事2",
                "year": "2019",
                "region": "日本",
                "type": "电视剧",
                "genre": "剧情 / 美食",
                "category": "动作冒险",
                "tags": [
                        "治愈",
                        "漫画改编",
                        "群像剧",
                        "人生百味"
                ],
                "url": "movie-1658.html",
                "cover": "8.jpg"
        },
        {
                "title": "丘八艳史",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争 / 喜剧 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "新兵",
                        "前线",
                        "伪纪录片",
                        "误打误撞",
                        "情义",
                        "反战"
                ],
                "url": "movie-1659.html",
                "cover": "9.jpg"
        },
        {
                "title": "蓝色江流淌",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "文艺, 家庭",
                "category": "悬疑惊悚",
                "tags": [
                        "东北",
                        "下岗潮",
                        "父女情"
                ],
                "url": "movie-1660.html",
                "cover": "10.jpg"
        },
        {
                "title": "杀人罪行",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "犯罪、悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "警匪",
                        "法律",
                        "反转",
                        "法庭",
                        "港式"
                ],
                "url": "movie-1661.html",
                "cover": "11.jpg"
        },
        {
                "title": "弗洛伊德的最后一会",
                "year": "2027",
                "region": "英国 / 奥地利",
                "type": "电影",
                "genre": "剧情 / 历史 / 传记",
                "category": "喜剧治愈",
                "tags": [
                        "弗洛伊德",
                        "精神分析",
                        "哲学",
                        "战争",
                        "临终"
                ],
                "url": "movie-1662.html",
                "cover": "12.jpg"
        },
        {
                "title": "牛下女高音粤语",
                "year": "2020",
                "region": "中国香港",
                "type": "剧集",
                "genre": "喜剧/音乐",
                "category": "喜剧治愈",
                "tags": [
                        "公屋合唱团",
                        "返老还童",
                        "粤语金曲",
                        "邻里温情"
                ],
                "url": "movie-1663.html",
                "cover": "13.jpg"
        },
        {
                "title": "僵尸至尊",
                "year": "1991",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧, 动作, 奇幻",
                "category": "高分片单",
                "tags": [
                        "茅山法术",
                        "僵尸家族",
                        "师徒对决",
                        "港式幽默"
                ],
                "url": "movie-1664.html",
                "cover": "14.jpg"
        },
        {
                "title": "皇家赌场",
                "year": "2026",
                "region": "英国 / 美国",
                "type": "电影",
                "genre": "动作 / 惊悚 / 冒险",
                "category": "动作冒险",
                "tags": [
                        "007重启",
                        "年轻邦德",
                        "心理博弈",
                        "硬核动作"
                ],
                "url": "movie-1665.html",
                "cover": "15.jpg"
        },
        {
                "title": "鬼吹灯之昆仑神宫",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "冒险 / 悬疑 / 奇幻",
                "category": "爱情家庭",
                "tags": [
                        "盗墓",
                        "昆仑山",
                        "鬼母",
                        "九层妖楼"
                ],
                "url": "movie-1666.html",
                "cover": "16.jpg"
        },
        {
                "title": "我们的小秘密2024",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚, 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "现代科技",
                        "隐私泄露",
                        "邻居",
                        "家庭入侵"
                ],
                "url": "movie-1667.html",
                "cover": "17.jpg"
        },
        {
                "title": "西方注视下",
                "year": "2024",
                "region": "英国 / 俄罗斯",
                "type": "电影",
                "genre": "剧情 / 历史 / 文学改编",
                "category": "纪录综艺",
                "tags": [
                        "冷战",
                        "间谍小说",
                        "双重身份",
                        "道德困境"
                ],
                "url": "movie-1668.html",
                "cover": "18.jpg"
        },
        {
                "title": "暗夜导演",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "悬疑、惊悚、犯罪",
                "category": "日韩精选",
                "tags": [
                        "心理战",
                        "反转",
                        "录像带",
                        "一人分饰两角",
                        "暴风雪山庄"
                ],
                "url": "movie-1669.html",
                "cover": "19.jpg"
        },
        {
                "title": "中国新相亲第四季",
                "year": "2026",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀 / 婚恋",
                "category": "亚洲经典",
                "tags": [
                        "代际沟通",
                        "父母参与",
                        "社会观察",
                        "速配"
                ],
                "url": "movie-1670.html",
                "cover": "20.jpg"
        },
        {
                "title": "超星舰队之勇士联盟",
                "year": "2024",
                "region": "中国",
                "type": "动画",
                "genre": "科幻，热血，机甲",
                "category": "动作冒险",
                "tags": [
                        "战队",
                        "宇宙",
                        "冒险",
                        "萝卜",
                        "子供向"
                ],
                "url": "movie-1671.html",
                "cover": "21.jpg"
        },
        {
                "title": "酸酸甜甜",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "三角关系",
                        "异地情感",
                        "现实压力",
                        "情感错位",
                        "青春余温"
                ],
                "url": "movie-1672.html",
                "cover": "22.jpg"
        },
        {
                "title": "生化武器大作战",
                "year": "2025",
                "region": "日本",
                "type": "动画剧集",
                "genre": "科幻, 喜剧",
                "category": "华语佳作",
                "tags": [
                        "病毒",
                        "自卫队",
                        "搞笑",
                        "日常"
                ],
                "url": "movie-1673.html",
                "cover": "23.jpg"
        },
        {
                "title": "至死不渝",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚、恐怖、心理",
                "category": "高分片单",
                "tags": [
                        "密室",
                        "婚礼",
                        "毒药",
                        "信任崩塌"
                ],
                "url": "movie-1674.html",
                "cover": "24.jpg"
        },
        {
                "title": "荒唐暴发户",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧, 讽刺",
                "category": "爱情家庭",
                "tags": [
                        "暴发户",
                        "荒诞",
                        "社会讽刺"
                ],
                "url": "movie-1675.html",
                "cover": "25.jpg"
        },
        {
                "title": "法网追凶第三季",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "犯罪, 悬疑, 刑侦",
                "category": "纪录综艺",
                "tags": [
                        "连环案",
                        "检察官",
                        "反转",
                        "烧脑",
                        "尺度大"
                ],
                "url": "movie-1676.html",
                "cover": "26.jpg"
        },
        {
                "title": "亚特兰蒂斯2：神秘的水晶",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动画, 奇幻, 冒险",
                "category": "日韩精选",
                "tags": [
                        "深海探险",
                        "远古文明",
                        "水晶能量",
                        "团队合作"
                ],
                "url": "movie-1677.html",
                "cover": "27.jpg"
        },
        {
                "title": "乌龙教授嗱喳招",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 动作",
                "category": "亚洲经典",
                "tags": [
                        "港式无厘头",
                        "武术",
                        "乌龙",
                        "笑料"
                ],
                "url": "movie-1678.html",
                "cover": "28.jpg"
        },
        {
                "title": "羞耻第二季",
                "year": "2023",
                "region": "挪威",
                "type": "剧集",
                "genre": "青春 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "校园",
                        "女性友谊",
                        "同性",
                        "自我认同",
                        "社交媒体"
                ],
                "url": "movie-1679.html",
                "cover": "29.jpg"
        },
        {
                "title": "变身国王2：高刚外传",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 动画, 冒险",
                "category": "日韩精选",
                "tags": [
                        "反派洗白",
                        "搞笑",
                        "兄弟情"
                ],
                "url": "movie-1680.html",
                "cover": "30.jpg"
        },
        {
                "title": "少女卡米拉",
                "year": "2024",
                "region": "阿根廷",
                "type": "电影",
                "genre": "剧情 / 文艺",
                "category": "高分片单",
                "tags": [
                        "成长",
                        "拉丁美洲",
                        "女性觉醒",
                        "诗意"
                ],
                "url": "movie-1681.html",
                "cover": "31.jpg"
        },
        {
                "title": "海扁王2",
                "year": "2013",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 喜剧 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "超级英雄",
                        "暴力美学",
                        "复仇",
                        "街头混混"
                ],
                "url": "movie-1682.html",
                "cover": "32.jpg"
        },
        {
                "title": "深情的朋友",
                "year": "2023",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情, 同性, 家庭",
                "category": "高分片单",
                "tags": [
                        "同志晚年",
                        "形婚",
                        "和解"
                ],
                "url": "movie-1683.html",
                "cover": "33.jpg"
        },
        {
                "title": "狎鸥亭报告",
                "year": "2022",
                "region": "韩国",
                "type": "电影",
                "genre": "犯罪，悬疑，剧情",
                "category": "欧美热播",
                "tags": [
                        "整形外科",
                        "黑市",
                        "江南区",
                        "卧底"
                ],
                "url": "movie-1684.html",
                "cover": "34.jpg"
        },
        {
                "title": "秋天不是恋爱天",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "都市",
                        "失恋",
                        "疗伤",
                        "成长"
                ],
                "url": "movie-1685.html",
                "cover": "35.jpg"
        },
        {
                "title": "屎年",
                "year": "2023",
                "region": "中国",
                "type": "电影",
                "genre": "剧情 / 黑色幽默",
                "category": "悬疑惊悚",
                "tags": [
                        "荒诞现实",
                        "年代戏",
                        "社会隐喻"
                ],
                "url": "movie-1686.html",
                "cover": "36.jpg"
        },
        {
                "title": "手机风云",
                "year": "2026",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑, 剧情, 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "密室",
                        "手机隐私",
                        "全员恶人",
                        "黑色幽默"
                ],
                "url": "movie-1687.html",
                "cover": "37.jpg"
        },
        {
                "title": "女人裙下",
                "year": "2023",
                "region": "法国",
                "type": "电影",
                "genre": "剧情 / 喜剧",
                "category": "爱情家庭",
                "tags": [
                        "女性群像",
                        "法式浪漫",
                        "幽默",
                        "独立"
                ],
                "url": "movie-1688.html",
                "cover": "38.jpg"
        },
        {
                "title": "疯狗与格拉瑞小姐",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 西部 / 女性",
                "category": "纪录综艺",
                "tags": [
                        "荒野求生",
                        "女性情谊",
                        "暴力复仇",
                        "边缘人",
                        "公路电影"
                ],
                "url": "movie-1689.html",
                "cover": "39.jpg"
        },
        {
                "title": "暂停",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻,悬疑,社会,爱情",
                "category": "喜剧治愈",
                "tags": [
                        "时间停顿",
                        "自动城市",
                        "记忆",
                        "伦理",
                        "数字监控",
                        "家庭"
                ],
                "url": "movie-1690.html",
                "cover": "40.jpg"
        },
        {
                "title": "仁医胡佩兰",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 传记, 医疗",
                "category": "悬疑惊悚",
                "tags": [
                        "感动",
                        "真实事件",
                        "医者仁心",
                        "老年"
                ],
                "url": "movie-1691.html",
                "cover": "41.jpg"
        },
        {
                "title": "穿越麦田",
                "year": "2020",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 冒险",
                "category": "悬疑惊悚",
                "tags": [
                        "文学",
                        "公路",
                        "青春",
                        "麦田里的守望者",
                        "成长"
                ],
                "url": "movie-1692.html",
                "cover": "42.jpg"
        },
        {
                "title": "竞争对手",
                "year": "2023",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情, 职场, 复仇",
                "category": "亚洲经典",
                "tags": [
                        "商战",
                        "财阀",
                        "师徒反目",
                        "悬疑"
                ],
                "url": "movie-1693.html",
                "cover": "43.jpg"
        },
        {
                "title": "瞬间",
                "year": "2019",
                "region": "中国",
                "type": "电影",
                "genre": "悬疑, 科幻, 惊悚",
                "category": "欧美热播",
                "tags": [
                        "时间定格",
                        "超能力",
                        "犯罪",
                        "斗智"
                ],
                "url": "movie-1694.html",
                "cover": "44.jpg"
        },
        {
                "title": "过于浪漫",
                "year": "2018",
                "region": "韩国",
                "type": "电影",
                "genre": "爱情 / 喜剧 / 都市成长",
                "category": "喜剧治愈",
                "tags": [
                        "误会连锁",
                        "高糖反差",
                        "成年人恋爱",
                        "复古文艺",
                        "自我和解"
                ],
                "url": "movie-1695.html",
                "cover": "45.jpg"
        },
        {
                "title": "鼠辈",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "犯罪",
                "category": "亚洲经典",
                "tags": [
                        "小人物",
                        "盗窃",
                        "荒诞",
                        "黑色幽默"
                ],
                "url": "movie-1696.html",
                "cover": "46.jpg"
        },
        {
                "title": "评论家",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "影评人",
                        "谋杀",
                        "剧院"
                ],
                "url": "movie-1697.html",
                "cover": "47.jpg"
        },
        {
                "title": "洛城大劫案",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "高速追逃",
                        "多视角叙事",
                        "真实事件改编"
                ],
                "url": "movie-1698.html",
                "cover": "48.jpg"
        },
        {
                "title": "风景",
                "year": "2022",
                "region": "中国大陆",
                "type": "纪录片",
                "genre": "纪录, 人文",
                "category": "日韩精选",
                "tags": [
                        "中国",
                        "自然风光",
                        "城市建设",
                        "航拍"
                ],
                "url": "movie-1699.html",
                "cover": "49.jpg"
        },
        {
                "title": "蛇纹龙",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络电影",
                "genre": "动作 / 奇幻 / 冒险",
                "category": "日韩精选",
                "tags": [
                        "怪兽",
                        "古墓",
                        "特效",
                        "地心探险"
                ],
                "url": "movie-1700.html",
                "cover": "50.jpg"
        },
        {
                "title": "家和万事兴之抬头见喜",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "家庭， 喜剧， 春节档",
                "category": "动作冒险",
                "tags": [
                        "春晚",
                        "年夜饭",
                        "隔代亲",
                        "返乡"
                ],
                "url": "movie-1701.html",
                "cover": "51.jpg"
        },
        {
                "title": "堕落街传奇第三季",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "剧情 / 历史 / 情色",
                "category": "亚洲经典",
                "tags": [
                        "80年代",
                        "录像带革命",
                        "性产业转型",
                        "群像终章"
                ],
                "url": "movie-1702.html",
                "cover": "52.jpg"
        },
        {
                "title": "太空熊猫英雄归来",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "动画, 喜剧, 科幻",
                "category": "爱情家庭",
                "tags": [
                        "熊猫",
                        "外星人",
                        "保护地球",
                        "熊孩子",
                        "中国功夫"
                ],
                "url": "movie-1703.html",
                "cover": "53.jpg"
        },
        {
                "title": "校花的超级保镖之无极诀",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作, 奇幻, 爱情",
                "category": "纪录综艺",
                "tags": [
                        "修仙校园",
                        "霸道保镖",
                        "网大质感"
                ],
                "url": "movie-1704.html",
                "cover": "54.jpg"
        },
        {
                "title": "神不在的星期天",
                "year": "2013",
                "region": "日本",
                "type": "动画剧集",
                "genre": "奇幻 / 治愈 / 冒险",
                "category": "欧美热播",
                "tags": [
                        "末日",
                        "守墓人",
                        "萝莉",
                        "不死者",
                        "世界系"
                ],
                "url": "movie-1705.html",
                "cover": "55.jpg"
        },
        {
                "title": "龙少爷",
                "year": "2016",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 动作",
                "category": "日韩精选",
                "tags": [
                        "武术",
                        "少年",
                        "乡村逆袭"
                ],
                "url": "movie-1706.html",
                "cover": "56.jpg"
        },
        {
                "title": "致命糖衣",
                "year": "2020",
                "region": "韩国",
                "type": "惊悚电影",
                "genre": "悬疑 / 惊悚 / 犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "毒品伪装",
                        "网络直播",
                        "冷链运输",
                        "双重身份",
                        "心理博弈"
                ],
                "url": "movie-1707.html",
                "cover": "57.jpg"
        },
        {
                "title": "法医密档",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "悬疑, 犯罪, 法医",
                "category": "亚洲经典",
                "tags": [
                        "单元剧",
                        "真实案件改编",
                        "硬核科普",
                        "反转"
                ],
                "url": "movie-1708.html",
                "cover": "58.jpg"
        },
        {
                "title": "霹雳英雄战纪之刜伐世界",
                "year": "2025",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "奇幻， 武侠， 布袋戏",
                "category": "华语佳作",
                "tags": [
                        "木偶戏",
                        "神魔斗争",
                        "史诗",
                        "特效大片"
                ],
                "url": "movie-1709.html",
                "cover": "59.jpg"
        },
        {
                "title": "上帝保佑",
                "year": "2023",
                "region": "意大利 / 法国",
                "type": "电影",
                "genre": "剧情, 宗教, 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "梵蒂冈",
                        "驱魔",
                        "信仰危机"
                ],
                "url": "movie-1710.html",
                "cover": "60.jpg"
        },
        {
                "title": "赌豪",
                "year": "1991",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 犯罪",
                "category": "高分片单",
                "tags": [
                        "赌片",
                        "兄弟情",
                        "复仇",
                        "江湖"
                ],
                "url": "movie-1711.html",
                "cover": "61.jpg"
        },
        {
                "title": "魔债粤语",
                "year": "2025",
                "region": "香港",
                "type": "剧集",
                "genre": "奇幻 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "高利贷",
                        "降头术",
                        "市井怪谈"
                ],
                "url": "movie-1712.html",
                "cover": "62.jpg"
        },
        {
                "title": "纽瓦克众圣",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "犯罪/剧情",
                "category": "爱情家庭",
                "tags": [
                        "黑帮",
                        "前传",
                        "60年代",
                        "种族冲突",
                        "索普拉诺"
                ],
                "url": "movie-1713.html",
                "cover": "63.jpg"
        },
        {
                "title": "江城谜案",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 犯罪, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "长江",
                        "连环案",
                        "公安",
                        "水鬼"
                ],
                "url": "movie-1714.html",
                "cover": "64.jpg"
        },
        {
                "title": "黑色的新娘",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情 / 悬疑 / 爱情",
                "category": "爱情家庭",
                "tags": [
                        "韩剧",
                        "复仇",
                        "财阀",
                        "黑色婚礼"
                ],
                "url": "movie-1715.html",
                "cover": "65.jpg"
        },
        {
                "title": "黑色咖啡馆",
                "year": "2023",
                "region": "德国",
                "type": "电影",
                "genre": "悬疑 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "柏林",
                        "一夜",
                        "多线叙事",
                        "巧合",
                        "命运"
                ],
                "url": "movie-1716.html",
                "cover": "66.jpg"
        },
        {
                "title": "森林",
                "year": "2022",
                "region": "波兰 / 德国",
                "type": "电影",
                "genre": "悬疑 / 恐怖 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "超自然",
                        "二战遗留",
                        "森林怪谈",
                        "沉默",
                        "创伤"
                ],
                "url": "movie-1717.html",
                "cover": "67.jpg"
        },
        {
                "title": "马丁节",
                "year": "2021",
                "region": "德国",
                "type": "电影",
                "genre": "剧情, 家庭, 历史",
                "category": "纪录综艺",
                "tags": [
                        "二战",
                        "圣诞节",
                        "战俘",
                        "宽恕"
                ],
                "url": "movie-1718.html",
                "cover": "68.jpg"
        },
        {
                "title": "美利坚的维纳斯",
                "year": "2019",
                "region": "美国",
                "type": "电视剧",
                "genre": "剧情，传记，音乐",
                "category": "华语佳作",
                "tags": [
                        "选美背后",
                        "社会变迁",
                        "女性觉醒",
                        "史诗感"
                ],
                "url": "movie-1719.html",
                "cover": "69.jpg"
        },
        {
                "title": "航海家",
                "year": "2024",
                "region": "西班牙",
                "type": "电影",
                "genre": "冒险 / 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "大航海时代",
                        "史诗",
                        "孤岛求生",
                        "未知生物"
                ],
                "url": "movie-1720.html",
                "cover": "70.jpg"
        },
        {
                "title": "星球大战9：天行者崛起",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "科幻, 动作",
                "category": "爱情家庭",
                "tags": [
                        "太空歌剧",
                        "史诗终章",
                        "光剑对决"
                ],
                "url": "movie-1721.html",
                "cover": "71.jpg"
        },
        {
                "title": "尸智症",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "丧尸灾难",
                "category": "纪录综艺",
                "tags": [
                        "老人感染",
                        "养老院",
                        "社会讽刺"
                ],
                "url": "movie-1722.html",
                "cover": "72.jpg"
        },
        {
                "title": "绿衣骑士",
                "year": "2023",
                "region": "英国",
                "type": "电影",
                "genre": "奇幻 / 冒险",
                "category": "爱情家庭",
                "tags": [
                        "骑士",
                        "寓言",
                        "神秘",
                        "契约"
                ],
                "url": "movie-1723.html",
                "cover": "73.jpg"
        },
        {
                "title": "古柯碱教母",
                "year": "2024",
                "region": "哥伦比亚 / 美国",
                "type": "剧集",
                "genre": "犯罪 / 剧情 / 传记",
                "category": "爱情家庭",
                "tags": [
                        "女性",
                        "贩毒",
                        "权力",
                        "暴力",
                        "真实改编"
                ],
                "url": "movie-1724.html",
                "cover": "74.jpg"
        },
        {
                "title": "最有价值球员们",
                "year": "2021",
                "region": "美国",
                "type": "体育悬疑片",
                "genre": "体育、悬疑、成长",
                "category": "纪录综艺",
                "tags": [
                        "篮球竞技",
                        "反洗钱",
                        "团队联盟",
                        "媒体操盘",
                        "职业伦理"
                ],
                "url": "movie-1725.html",
                "cover": "75.jpg"
        },
        {
                "title": "天福山起义",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "历史 / 战争",
                "category": "华语佳作",
                "tags": [
                        "抗日",
                        "农民武装",
                        "信仰",
                        "热血",
                        "真实事件改编"
                ],
                "url": "movie-1726.html",
                "cover": "76.jpg"
        },
        {
                "title": "三角梅",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情，家庭，伦理",
                "category": "爱情家庭",
                "tags": [
                        "女性",
                        "三代人",
                        "原生家庭",
                        "和解"
                ],
                "url": "movie-1727.html",
                "cover": "77.jpg"
        },
        {
                "title": "船续前行",
                "year": "2027",
                "region": "英国 / 意大利",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 历史",
                "category": "纪录综艺",
                "tags": [
                        "邮轮",
                        "一战",
                        "活埋",
                        "阶级翻转"
                ],
                "url": "movie-1728.html",
                "cover": "78.jpg"
        },
        {
                "title": "多情猫",
                "year": "1992",
                "region": "中国香港",
                "type": "电影",
                "genre": "情色, 剧情",
                "category": "动作冒险",
                "tags": [
                        "邵氏",
                        "风月",
                        "三角恋",
                        "民国"
                ],
                "url": "movie-1729.html",
                "cover": "79.jpg"
        },
        {
                "title": "鹰狼传奇",
                "year": "2024",
                "region": "美国 / 加拿大",
                "type": "电影",
                "genre": "奇幻 / 冒险 / 动作",
                "category": "高分片单",
                "tags": [
                        "变形",
                        "印第安传说",
                        "复仇",
                        "图腾"
                ],
                "url": "movie-1730.html",
                "cover": "80.jpg"
        },
        {
                "title": "姊妹坡",
                "year": "2023",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "爱情家庭",
                "tags": [
                        "姐妹",
                        "乡村",
                        "身世之谜",
                        "成长"
                ],
                "url": "movie-1731.html",
                "cover": "81.jpg"
        },
        {
                "title": "计程车男",
                "year": "2004",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "孤独",
                        "都市",
                        "温情"
                ],
                "url": "movie-1732.html",
                "cover": "82.jpg"
        },
        {
                "title": "飞出个未来第三季",
                "year": "2001",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧, 科幻, 动画",
                "category": "华语佳作",
                "tags": [
                        "成人向",
                        "荒诞",
                        "讽刺",
                        "经典",
                        "无厘头"
                ],
                "url": "movie-1733.html",
                "cover": "83.jpg"
        },
        {
                "title": "圣路易斯的超人",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "剧情，传记，体育",
                "category": "亚洲经典",
                "tags": [
                        "摔角",
                        "中年危机",
                        "真实改编",
                        "励志"
                ],
                "url": "movie-1734.html",
                "cover": "84.jpg"
        },
        {
                "title": "奇怪的角色",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 心理",
                "category": "欧美热播",
                "tags": [
                        "多重人格",
                        "演技大赏",
                        "心理治疗",
                        "身份认同"
                ],
                "url": "movie-1735.html",
                "cover": "85.jpg"
        },
        {
                "title": "愤怒的马赫什",
                "year": "2024",
                "region": "印度",
                "type": "电影",
                "genre": "动作 / 喜剧 / 社会",
                "category": "亚洲经典",
                "tags": [
                        "小人物",
                        "官僚主义",
                        "复仇",
                        "印度式开挂"
                ],
                "url": "movie-1736.html",
                "cover": "86.jpg"
        },
        {
                "title": "皮囊之下2021",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "科幻 / 惊悚",
                "category": "日韩精选",
                "tags": [
                        "意识上传",
                        "克隆人",
                        "伦理困境"
                ],
                "url": "movie-1737.html",
                "cover": "87.jpg"
        },
        {
                "title": "疯狂的代价",
                "year": "2025",
                "region": "中国大陆",
                "type": "Movie",
                "genre": "Crime, Thriller, Action",
                "category": "爱情家庭",
                "tags": [
                        "绑架",
                        "复仇",
                        "直播",
                        "高智商犯罪",
                        "社会派"
                ],
                "url": "movie-1738.html",
                "cover": "88.jpg"
        },
        {
                "title": "鬼哭山河",
                "year": "1991",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖, 动作",
                "category": "高分片单",
                "tags": [
                        "复仇",
                        "灵异",
                        "军阀",
                        "旧时代"
                ],
                "url": "movie-1739.html",
                "cover": "89.jpg"
        },
        {
                "title": "超自然9人组",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "科幻 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "都市传说 时间循环 超能力 少年少女 实验室"
                ],
                "url": "movie-1740.html",
                "cover": "90.jpg"
        },
        {
                "title": "游戏结束，老兄！",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 动作",
                "category": "日韩精选",
                "tags": [
                        "游戏穿越",
                        "街机",
                        "兄弟喜剧",
                        "怀旧"
                ],
                "url": "movie-1741.html",
                "cover": "91.jpg"
        },
        {
                "title": "少年鳄鱼帮3",
                "year": "2024",
                "region": "德国",
                "type": "电影",
                "genre": "冒险家庭",
                "category": "欧美热播",
                "tags": [
                        "青少年",
                        "探案",
                        "鳄鱼"
                ],
                "url": "movie-1742.html",
                "cover": "92.jpg"
        },
        {
                "title": "你们这些混蛋",
                "year": "2025",
                "region": "西班牙",
                "type": "电影",
                "genre": "惊悚/悬疑/黑色幽默",
                "category": "亚洲经典",
                "tags": [
                        "密室",
                        "复仇",
                        "反转",
                        "爽片"
                ],
                "url": "movie-1743.html",
                "cover": "93.jpg"
        },
        {
                "title": "黑色大理花悬案",
                "year": "2020",
                "region": "美国",
                "type": "电视剧 (限定剧)",
                "genre": "犯罪 / 悬疑 / 剧情",
                "category": "高分片单",
                "tags": [
                        "黑色电影",
                        "真实罪案",
                        "双雄探案",
                        "好莱坞",
                        "血腥美学"
                ],
                "url": "movie-1744.html",
                "cover": "94.jpg"
        },
        {
                "title": "王者天下第二季",
                "year": "2023",
                "region": "日本",
                "type": "剧集",
                "genre": "历史 / 战争 / 动作",
                "category": "喜剧治愈",
                "tags": [
                        "战国",
                        "漫画改编",
                        "军事战略",
                        "群像"
                ],
                "url": "movie-1745.html",
                "cover": "95.jpg"
        },
        {
                "title": "冥界",
                "year": "2026",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖，惊悚",
                "category": "亚洲经典",
                "tags": [
                        "阴间",
                        "轮回",
                        "罪罚"
                ],
                "url": "movie-1746.html",
                "cover": "96.jpg"
        },
        {
                "title": "阿尔劳娜",
                "year": "2025",
                "region": "德国",
                "type": "电影",
                "genre": "恐怖奇幻",
                "category": "华语佳作",
                "tags": [
                        "曼德拉草",
                        "人造人",
                        "表现主义",
                        "女巫",
                        "邪典"
                ],
                "url": "movie-1747.html",
                "cover": "97.jpg"
        },
        {
                "title": "淫娃集中营",
                "year": "1992",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 情色 / 惊悚",
                "category": "动作冒险",
                "tags": [
                        "女性觉醒",
                        "暴力美学",
                        "封闭空间",
                        "复仇",
                        "港片"
                ],
                "url": "movie-1748.html",
                "cover": "98.jpg"
        },
        {
                "title": "复仇美眉",
                "year": "2024",
                "region": "韩国",
                "type": "电视剧",
                "genre": "悬疑 / 校园",
                "category": "日韩精选",
                "tags": [
                        "校园霸凌",
                        "以暴制暴",
                        "双面少女",
                        "暗黑系"
                ],
                "url": "movie-1749.html",
                "cover": "99.jpg"
        },
        {
                "title": "眼之壁",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑，犯罪，心理",
                "category": "喜剧治愈",
                "tags": [
                        "盲人",
                        "复仇",
                        "金融诈骗",
                        "反转"
                ],
                "url": "movie-1750.html",
                "cover": "100.jpg"
        },
        {
                "title": "大蛇3：龙蛇之战",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 灾难",
                "category": "悬疑惊悚",
                "tags": [
                        "怪兽",
                        "丛林",
                        "特效",
                        "进化",
                        "生存"
                ],
                "url": "movie-1751.html",
                "cover": "101.jpg"
        },
        {
                "title": "洪荒灵尊",
                "year": "2024",
                "region": "中国大陆",
                "type": "动画",
                "genre": "奇幻, 修仙, 战斗",
                "category": "喜剧治愈",
                "tags": [
                        "重生",
                        "太古神魔",
                        "逆天改命",
                        "热血战斗",
                        "法宝炼器"
                ],
                "url": "movie-1752.html",
                "cover": "102.jpg"
        },
        {
                "title": "养鬼吃人10：审判",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖 / 奇幻 / 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "钉子头",
                        "地狱",
                        "审判",
                        "魔方",
                        "血腥美学"
                ],
                "url": "movie-1753.html",
                "cover": "103.jpg"
        },
        {
                "title": "水饺皇后",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 家庭 / 传记",
                "category": "日韩精选",
                "tags": [
                        "女性成长",
                        "美食",
                        "年代",
                        "励志",
                        "香港情怀"
                ],
                "url": "movie-1754.html",
                "cover": "104.jpg"
        },
        {
                "title": "野生厨房第二季",
                "year": "2019",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀，美食",
                "category": "悬疑惊悚",
                "tags": [
                        "户外",
                        "旅行",
                        "烹饪",
                        "明星"
                ],
                "url": "movie-1755.html",
                "cover": "105.jpg"
        },
        {
                "title": "我的三十定律",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "都市 / 爱情 / 成长",
                "category": "爱情家庭",
                "tags": [
                        "30岁焦虑",
                        "职场转型",
                        "友情修复",
                        "自我和解",
                        "女性成长",
                        "生活流"
                ],
                "url": "movie-1756.html",
                "cover": "106.jpg"
        },
        {
                "title": "哺乳动物第一季",
                "year": "2023",
                "region": "英国",
                "type": "剧集",
                "genre": "喜剧, 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "中年危机",
                        "婚姻关系",
                        "英式幽默"
                ],
                "url": "movie-1757.html",
                "cover": "107.jpg"
        },
        {
                "title": "国防机密",
                "year": "2024",
                "region": "英国",
                "type": "剧集",
                "genre": "悬疑、谍战、政治",
                "category": "纪录综艺",
                "tags": [
                        "军情五处",
                        "泄密",
                        "道德困境"
                ],
                "url": "movie-1758.html",
                "cover": "108.jpg"
        },
        {
                "title": "闺蜜的战争",
                "year": "2021",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "都市情感",
                "category": "动作冒险",
                "tags": [
                        "塑料姐妹",
                        "职场商战",
                        "反转"
                ],
                "url": "movie-1759.html",
                "cover": "109.jpg"
        },
        {
                "title": "血腥激情夜",
                "year": "2018",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖 / 惊悚 / 黑色喜剧",
                "category": "喜剧治愈",
                "tags": [
                        "圣诞夜",
                        "连环杀手",
                        "反转",
                        "血腥",
                        "密室逃脱"
                ],
                "url": "movie-1760.html",
                "cover": "110.jpg"
        },
        {
                "title": "宝藏猎人",
                "year": "2025",
                "region": "美国",
                "type": "剧集",
                "genre": "冒险, 动作",
                "category": "华语佳作",
                "tags": [
                        "寻宝",
                        "遗产",
                        "谜题",
                        "全球",
                        "宿敌"
                ],
                "url": "movie-1761.html",
                "cover": "111.jpg"
        },
        {
                "title": "咒怨：诅咒之家",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "恐怖、悬疑",
                "category": "纪录综艺",
                "tags": [
                        "咒怨",
                        "凶宅",
                        "时间错乱",
                        "新生"
                ],
                "url": "movie-1762.html",
                "cover": "112.jpg"
        },
        {
                "title": "你成功引起我的注意了",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情, 喜剧",
                "category": "爱情家庭",
                "tags": [
                        "都市",
                        "职场",
                        "欢喜冤家",
                        "反转"
                ],
                "url": "movie-1763.html",
                "cover": "113.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 爱在遗忘蔓延时 小锅盖娶亲 苦酒满杯 乌贼摔角手 破浪而出 小戏骨降妖记 秘密同盟 大桥梁 梦城兔福星 蝴蝶梦醒 兼职罗曼史 讲究人之有求必应 日久见君心 军营史努比 碧水情瞳 完美的你 第二梦 我与你的光年距离2 居家男人2004 海洋动物",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "亚洲经典",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1764.html",
                "cover": "114.jpg"
        },
        {
                "title": "大明末年",
                "year": "2026",
                "region": "中国内地",
                "type": "电影",
                "genre": "历史、动作、战争",
                "category": "华语佳作",
                "tags": [
                        "崇祯",
                        "李自成",
                        "末日美学",
                        "刀战"
                ],
                "url": "movie-1765.html",
                "cover": "115.jpg"
        },
        {
                "title": "黄大年",
                "year": "2018",
                "region": "中国大陆",
                "type": "电影",
                "genre": "传记, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "主旋律",
                        "科学家",
                        "爱国",
                        "航空地球物理",
                        "感人"
                ],
                "url": "movie-1766.html",
                "cover": "116.jpg"
        },
        {
                "title": "超能荷尔蒙",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "科幻, 青春, 喜剧",
                "category": "高分片单",
                "tags": [
                        "超能力",
                        "青春期",
                        "荷尔蒙",
                        "搞笑",
                        "成长"
                ],
                "url": "movie-1767.html",
                "cover": "117.jpg"
        },
        {
                "title": "短途旅行者",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 公路",
                "category": "亚洲经典",
                "tags": [
                        "治愈",
                        "旅程",
                        "自我救赎",
                        "风景"
                ],
                "url": "movie-1768.html",
                "cover": "118.jpg"
        },
        {
                "title": "自杀者俱乐部",
                "year": "2024",
                "region": "英国",
                "type": "电影",
                "genre": "喜剧 / 剧情 / 黑色幽默",
                "category": "日韩精选",
                "tags": [
                        "抑郁症",
                        "互助会",
                        "英式幽默",
                        "治愈",
                        "丧文化"
                ],
                "url": "movie-1769.html",
                "cover": "119.jpg"
        },
        {
                "title": "小惊喜",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "喜剧 / 家庭 / 温情",
                "category": "高分片单",
                "tags": [
                        "生日",
                        "误会",
                        "治愈",
                        "小成本",
                        "催泪"
                ],
                "url": "movie-1770.html",
                "cover": "120.jpg"
        },
        {
                "title": "拿破仑战争",
                "year": "2025",
                "region": "法国/英国",
                "type": "剧集",
                "genre": "历史, 战争, 传记",
                "category": "悬疑惊悚",
                "tags": [
                        "拿破仑",
                        "欧洲战场",
                        "权谋",
                        "史诗"
                ],
                "url": "movie-1771.html",
                "cover": "121.jpg"
        },
        {
                "title": "战神",
                "year": "2016",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争 / 动作 / 神话史诗",
                "category": "华语佳作",
                "tags": [
                        "古战场",
                        "兵符争夺",
                        "神将传说",
                        "王朝崩裂",
                        "兄弟反目"
                ],
                "url": "movie-1772.html",
                "cover": "122.jpg"
        },
        {
                "title": "伽利略特别篇",
                "year": "2023",
                "region": "日本",
                "type": "剧集 / 特别篇",
                "genre": "悬疑 / 推理 / 犯罪",
                "category": "爱情家庭",
                "tags": [
                        "物理推理",
                        "汤川学",
                        "特别篇",
                        "不可能犯罪",
                        "福山雅治"
                ],
                "url": "movie-1773.html",
                "cover": "123.jpg"
        },
        {
                "title": "一百年的恶魔",
                "year": "2025",
                "region": "西班牙",
                "type": "电影",
                "genre": "恐怖、悬疑、历史",
                "category": "爱情家庭",
                "tags": [
                        "百年诅咒",
                        "古堡",
                        "家族秘密",
                        "献祭",
                        "西班牙内战"
                ],
                "url": "movie-1774.html",
                "cover": "124.jpg"
        },
        {
                "title": "夜游",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "悬疑、惊悚",
                "category": "爱情家庭",
                "tags": [
                        "出租车",
                        "都市传说",
                        "平行时空",
                        "暴雨夜"
                ],
                "url": "movie-1775.html",
                "cover": "125.jpg"
        },
        {
                "title": "定制10.30",
                "year": "2026",
                "region": "韩国",
                "type": "电影",
                "genre": "悬疑，科幻，惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "AI",
                        "记忆删除",
                        "订单杀人",
                        "克隆",
                        "韩国"
                ],
                "url": "movie-1776.html",
                "cover": "126.jpg"
        },
        {
                "title": "女飞行员",
                "year": "2024",
                "region": "中国",
                "type": "电影",
                "genre": "剧情、传记、战争",
                "category": "爱情家庭",
                "tags": [
                        "空军",
                        "女性",
                        "家国情怀"
                ],
                "url": "movie-1777.html",
                "cover": "127.jpg"
        },
        {
                "title": "无神的女孩",
                "year": "2024",
                "region": "西班牙 / 墨西哥",
                "type": "电影",
                "genre": "恐怖, 悬疑, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "宗教",
                        "驱魔",
                        "反转",
                        "女巫"
                ],
                "url": "movie-1778.html",
                "cover": "128.jpg"
        },
        {
                "title": "前进，人民",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "历史剧情 / 群像 / 公路",
                "category": "喜剧治愈",
                "tags": [
                        "时代变迁",
                        "基层奋斗",
                        "集体记忆",
                        "女性成长",
                        "乡土中国"
                ],
                "url": "movie-1779.html",
                "cover": "129.jpg"
        },
        {
                "title": "布鲁克斯，草地和可爱脸孔",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 悬疑",
                "category": "爱情家庭",
                "tags": [
                        "心理惊悚",
                        "田园",
                        "记忆碎片",
                        "人性"
                ],
                "url": "movie-1780.html",
                "cover": "130.jpg"
        },
        {
                "title": "熊出没之怪兽计划2",
                "year": "2024",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "喜剧, 科幻, 儿童",
                "category": "欧美热播",
                "tags": [
                        "熊出没",
                        "怪兽",
                        "科幻",
                        "环保",
                        "欢乐"
                ],
                "url": "movie-1781.html",
                "cover": "131.jpg"
        },
        {
                "title": "新女友",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "悬疑，惊悚，情色",
                "category": "悬疑惊悚",
                "tags": [
                        "替身",
                        "心理",
                        "惊悚",
                        "三角关系",
                        "谎言"
                ],
                "url": "movie-1782.html",
                "cover": "132.jpg"
        },
        {
                "title": "共犯",
                "year": "2014",
                "region": "中国台湾",
                "type": "电影",
                "genre": "悬疑 / 剧情",
                "category": "纪录综艺",
                "tags": [
                        "校园",
                        "孤独者联盟",
                        "查案",
                        "青春阴暗",
                        "社会派"
                ],
                "url": "movie-1783.html",
                "cover": "133.jpg"
        },
        {
                "title": "小镇风暴",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "悬疑/犯罪/剧情",
                "category": "动作冒险",
                "tags": [
                        "小镇秘密",
                        "暴雨封路",
                        "失踪案件",
                        "群像压力",
                        "真相反噬"
                ],
                "url": "movie-1784.html",
                "cover": "134.jpg"
        },
        {
                "title": "足球工厂",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "剧情, 运动, 犯罪",
                "category": "亚洲经典",
                "tags": [
                        "足球流氓",
                        "父子",
                        "工人阶级",
                        "暴力"
                ],
                "url": "movie-1785.html",
                "cover": "135.jpg"
        },
        {
                "title": "超级兵王混农村2古墓传说",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "动作 / 喜剧 / 冒险",
                "category": "日韩精选",
                "tags": [
                        "退伍兵",
                        "村长女婿",
                        "古墓九头蛇",
                        "土味特效"
                ],
                "url": "movie-1786.html",
                "cover": "136.jpg"
        },
        {
                "title": "小乌龟福兰克林",
                "year": "2027",
                "region": "法国",
                "type": "动画电影",
                "genre": "儿童奇幻·冒险·音乐",
                "category": "爱情家庭",
                "tags": [
                        "海龟",
                        "废港城",
                        "迷你英雄",
                        "地铁之夜",
                        "家庭记忆",
                        "失落档案"
                ],
                "url": "movie-1787.html",
                "cover": "137.jpg"
        },
        {
                "title": "英雄宝剑",
                "year": "2025",
                "region": "中国内地",
                "type": "电影",
                "genre": "武侠, 动作",
                "category": "悬疑惊悚",
                "tags": [
                        "剑客",
                        "阴谋",
                        "美学",
                        "江湖"
                ],
                "url": "movie-1788.html",
                "cover": "138.jpg"
        },
        {
                "title": "一个不落",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情、农村、扶贫",
                "category": "高分片单",
                "tags": [
                        "扶贫攻坚",
                        "第一书记",
                        "返乡青年",
                        "少数民族村落",
                        "精准脱贫"
                ],
                "url": "movie-1789.html",
                "cover": "139.jpg"
        },
        {
                "title": "只有悲伤才是美丽的",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "爱情， 剧情",
                "category": "欧美热播",
                "tags": [
                        "悲剧",
                        "美学",
                        "摄影",
                        "绝症"
                ],
                "url": "movie-1790.html",
                "cover": "140.jpg"
        },
        {
                "title": "爱情，说来可笑",
                "year": "2027",
                "region": "法国",
                "type": "电影",
                "genre": "喜剧，爱情",
                "category": "华语佳作",
                "tags": [
                        "巴黎",
                        "误会",
                        "文学",
                        "错位"
                ],
                "url": "movie-1791.html",
                "cover": "141.jpg"
        },
        {
                "title": "龙在江湖",
                "year": "2021",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "黑帮",
                        "卧底",
                        "兄弟情",
                        "港风"
                ],
                "url": "movie-1792.html",
                "cover": "142.jpg"
        },
        {
                "title": "特级英雄黄继光",
                "year": "2022",
                "region": "中国大陆",
                "type": "电影",
                "genre": "战争 / 传记 / 历史",
                "category": "日韩精选",
                "tags": [
                        "英雄",
                        "战场",
                        "信念",
                        "牺牲",
                        "家国",
                        "传承"
                ],
                "url": "movie-1793.html",
                "cover": "143.jpg"
        },
        {
                "title": "命案黑手",
                "year": "1995",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作 / 悬疑 / 犯罪",
                "category": "动作冒险",
                "tags": [
                        "警匪",
                        "卧底",
                        "黑帮",
                        "反杀",
                        "暴力美学"
                ],
                "url": "movie-1794.html",
                "cover": "144.jpg"
        },
        {
                "title": "黑暗骑士",
                "year": "2007",
                "region": "中国香港",
                "type": "犯罪片",
                "genre": "黑色电影 / 犯罪 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "夜巡者",
                        "城市阴影",
                        "私刑正义",
                        "失踪案件",
                        "道德灰区",
                        "雨夜追踪"
                ],
                "url": "movie-1795.html",
                "cover": "145.jpg"
        },
        {
                "title": "天空之蜂",
                "year": "2015",
                "region": "日本",
                "type": "电影",
                "genre": "悬疑 / 灾难 / 犯罪",
                "category": "爱情家庭",
                "tags": [
                        "核能危机",
                        "高空劫持",
                        "正邪模糊",
                        "社会派"
                ],
                "url": "movie-1796.html",
                "cover": "146.jpg"
        },
        {
                "title": "圆形楼梯",
                "year": "2025",
                "region": "西班牙",
                "type": "电影",
                "genre": "悬疑 / 惊悚 / 建筑",
                "category": "喜剧治愈",
                "tags": [
                        "无限循环",
                        "建筑诡计",
                        "心理恐怖",
                        "密室"
                ],
                "url": "movie-1797.html",
                "cover": "147.jpg"
        },
        {
                "title": "只要有空第二季",
                "year": "2025",
                "region": "韩国",
                "type": "综艺",
                "genre": "真人秀 / 生活 / 治愈",
                "category": "喜剧治愈",
                "tags": [
                        "慢综艺",
                        "明星打工",
                        "街头随机",
                        "治愈系"
                ],
                "url": "movie-1798.html",
                "cover": "148.jpg"
        },
        {
                "title": "老喇叭新传",
                "year": "2023",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情",
                "category": "亚洲经典",
                "tags": [
                        "乡村",
                        "音乐",
                        "传承",
                        "亲情"
                ],
                "url": "movie-1799.html",
                "cover": "149.jpg"
        },
        {
                "title": "公众之眼",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 犯罪, 科幻",
                "category": "华语佳作",
                "tags": [
                        "全民监控",
                        "AI定罪",
                        "反乌托邦"
                ],
                "url": "movie-1800.html",
                "cover": "150.jpg"
        },
        {
                "title": "晚餐的约定",
                "year": "2024",
                "region": "西班牙",
                "type": "电影",
                "genre": "悬疑 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "家族晚宴",
                        "黑松露",
                        "毒杀",
                        "记忆游戏"
                ],
                "url": "movie-1801.html",
                "cover": "1.jpg"
        },
        {
                "title": "浴火凤凰2015",
                "year": "2015",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "爱情，都市，励志",
                "category": "高分片单",
                "tags": [
                        "涅槃",
                        "创业",
                        "逆袭",
                        "姐妹"
                ],
                "url": "movie-1802.html",
                "cover": "2.jpg"
        },
        {
                "title": "巴萨之梦",
                "year": "2024",
                "region": "西班牙",
                "type": "剧集",
                "genre": "体育，传记",
                "category": "爱情家庭",
                "tags": [
                        "足球",
                        "拉玛西亚",
                        "青训",
                        "宿敌"
                ],
                "url": "movie-1803.html",
                "cover": "3.jpg"
        },
        {
                "title": "风流天子",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装 / 喜剧 / 爱情",
                "category": "华语佳作",
                "tags": [
                        "皇帝",
                        "反套路",
                        "后宫",
                        "女尊意识"
                ],
                "url": "movie-1804.html",
                "cover": "4.jpg"
        },
        {
                "title": "被消失的家园",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 科幻",
                "category": "悬疑惊悚",
                "tags": [
                        "拆迁",
                        "记忆删除",
                        "乡愁",
                        "科技伦理",
                        "未来"
                ],
                "url": "movie-1805.html",
                "cover": "5.jpg"
        },
        {
                "title": "营地藏身处",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚, 悬疑",
                "category": "高分片单",
                "tags": [
                        "露营",
                        "逃亡",
                        "森林",
                        "反转"
                ],
                "url": "movie-1806.html",
                "cover": "6.jpg"
        },
        {
                "title": "世上只有爸爸好",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "亚洲经典",
                "tags": [
                        "父爱如山",
                        "自闭症儿童",
                        "感人至深",
                        "跑马地"
                ],
                "url": "movie-1807.html",
                "cover": "7.jpg"
        },
        {
                "title": "妖怪名单之苏九儿",
                "year": "2025",
                "region": "中国",
                "type": "网络电影",
                "genre": "奇幻, 爱情, 动作",
                "category": "纪录综艺",
                "tags": [
                        "狐妖",
                        "前世今生",
                        "捉妖师",
                        "虐恋",
                        "古风"
                ],
                "url": "movie-1808.html",
                "cover": "8.jpg"
        },
        {
                "title": "名侦探学院第五季",
                "year": "2024",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀 / 益智",
                "category": "爱情家庭",
                "tags": [
                        "推理",
                        "解密",
                        "学霸",
                        "剧本杀",
                        "团魂"
                ],
                "url": "movie-1809.html",
                "cover": "9.jpg"
        },
        {
                "title": "眼镜蛇104",
                "year": "2027",
                "region": "泰国",
                "type": "剧集",
                "genre": "动作 / 犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "泰拳",
                        "卧底",
                        "监狱",
                        "格斗"
                ],
                "url": "movie-1810.html",
                "cover": "10.jpg"
        },
        {
                "title": "叽哩咕与女巫",
                "year": "1998",
                "region": "法国/比利时",
                "type": "电影/动画",
                "genre": "动画， 奇幻， 冒险",
                "category": "高分片单",
                "tags": [
                        "非洲民间故事",
                        "勇气",
                        "智慧",
                        "童真"
                ],
                "url": "movie-1811.html",
                "cover": "11.jpg"
        },
        {
                "title": "自由女爱",
                "year": "2025",
                "region": "韩国",
                "type": "剧集",
                "genre": "爱情, 同性",
                "category": "喜剧治愈",
                "tags": [
                        "女性觉醒",
                        "契约关系",
                        "逆袭"
                ],
                "url": "movie-1812.html",
                "cover": "12.jpg"
        },
        {
                "title": "反正我就废",
                "year": "2021",
                "region": "中国台湾",
                "type": "剧集",
                "genre": "剧情，青春",
                "category": "悬疑惊悚",
                "tags": [
                        "躺平",
                        "世代焦虑",
                        "友情",
                        "黑色幽默"
                ],
                "url": "movie-1813.html",
                "cover": "13.jpg"
        },
        {
                "title": "如纸人生",
                "year": "2021",
                "region": "土耳其",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "欧美热播",
                "tags": [
                        "悲情",
                        "父爱",
                        "文盲",
                        "社会底层"
                ],
                "url": "movie-1814.html",
                "cover": "14.jpg"
        },
        {
                "title": "至激浪子",
                "year": "2023",
                "region": "中国香港",
                "type": "电影",
                "genre": "动作, 青春",
                "category": "喜剧治愈",
                "tags": [
                        "极限运动",
                        "兄弟情",
                        "街头文化",
                        "叛逆"
                ],
                "url": "movie-1815.html",
                "cover": "15.jpg"
        },
        {
                "title": "琢玉成器",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情励志",
                "category": "悬疑惊悚",
                "tags": [
                        "玉雕",
                        "师徒",
                        "非遗",
                        "匠心",
                        "聋哑"
                ],
                "url": "movie-1816.html",
                "cover": "16.jpg"
        },
        {
                "title": "宾馆特写",
                "year": "2018",
                "region": "日本",
                "type": "电视剧",
                "genre": "剧情 / 情色 / 悬疑",
                "category": "高分片单",
                "tags": [
                        "爱情宾馆",
                        "群像",
                        "单元剧",
                        "人性",
                        "大尺度"
                ],
                "url": "movie-1817.html",
                "cover": "17.jpg"
        },
        {
                "title": "杰克亨特：埃及法老墓之行",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "冒险 / 动作",
                "category": "纪录综艺",
                "tags": [
                        "考古",
                        "埃及",
                        "诅咒",
                        "盗墓"
                ],
                "url": "movie-1818.html",
                "cover": "18.jpg"
        },
        {
                "title": "看这里，列兵哈格罗夫",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "战争 / 剧情 / 传记",
                "category": "高分片单",
                "tags": [
                        "越战",
                        "战地摄影",
                        "反战",
                        "真实事件改编",
                        "人性"
                ],
                "url": "movie-1819.html",
                "cover": "19.jpg"
        },
        {
                "title": "比基尼特工",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧, 动作",
                "category": "日韩精选",
                "tags": [
                        "女特工",
                        "沙滩",
                        "无厘头",
                        "反套路"
                ],
                "url": "movie-1820.html",
                "cover": "20.jpg"
        },
        {
                "title": "精装难兄难弟",
                "year": "1997",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 剧情 / 兄弟情",
                "category": "纪录综艺",
                "tags": [
                        "港式幽默",
                        "小人物逆袭",
                        "兄弟反目",
                        "阴差阳错",
                        "市井生活"
                ],
                "url": "movie-1821.html",
                "cover": "21.jpg"
        },
        {
                "title": "萨卡纳要塞",
                "year": "2018",
                "region": "虚构东欧国家",
                "type": "电影",
                "genre": "战争, 动作, 历史",
                "category": "爱情家庭",
                "tags": [
                        "要塞攻防",
                        "以少胜多",
                        "父子",
                        "绝境"
                ],
                "url": "movie-1822.html",
                "cover": "22.jpg"
        },
        {
                "title": "我们要出海",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "纪录综艺",
                "tags": [
                        "阿尔茨海默症",
                        "公路电影",
                        "和解"
                ],
                "url": "movie-1823.html",
                "cover": "23.jpg"
        },
        {
                "title": "暗金烂狗6",
                "year": "2021",
                "region": "日本",
                "type": "电影",
                "genre": "犯罪 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "黑道",
                        "高利贷",
                        "反英雄",
                        "社会派",
                        "暴力"
                ],
                "url": "movie-1824.html",
                "cover": "24.jpg"
        },
        {
                "title": "最后的巡逻兵",
                "year": "2008",
                "region": "美国",
                "type": "电影",
                "genre": "战争 / 剧情",
                "category": "欧美热播",
                "tags": [
                        "阿富汗",
                        "兄弟情",
                        "牺牲",
                        "真实事件改编"
                ],
                "url": "movie-1825.html",
                "cover": "25.jpg"
        },
        {
                "title": "超人力霸王怪兽大决战",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "动作, 科幻",
                "category": "悬疑惊悚",
                "tags": [
                        "特摄",
                        "怪兽大乱斗",
                        "情怀"
                ],
                "url": "movie-1826.html",
                "cover": "26.jpg"
        },
        {
                "title": "葡萄的眼泪",
                "year": "2014",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 美食 / 治愈",
                "category": "高分片单",
                "tags": [
                        "北海道",
                        "酿酒",
                        "兄弟和解",
                        "慢生活"
                ],
                "url": "movie-1827.html",
                "cover": "27.jpg"
        },
        {
                "title": "整形师·脸",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "恐怖",
                "category": "纪录综艺",
                "tags": [
                        "整容",
                        "复仇",
                        "身体恐怖",
                        "伦理"
                ],
                "url": "movie-1828.html",
                "cover": "28.jpg"
        },
        {
                "title": "原子小金刚",
                "year": "2025",
                "region": "日本",
                "type": "动画剧集",
                "genre": "科幻 / 动作 / 冒险",
                "category": "亚洲经典",
                "tags": [
                        "机器人",
                        "人性",
                        "儿童英雄",
                        "手冢治虫",
                        "重启"
                ],
                "url": "movie-1829.html",
                "cover": "29.jpg"
        },
        {
                "title": "惊恐超能力",
                "year": "2023",
                "region": "西班牙",
                "type": "电影",
                "genre": "科幻, 恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "超能失控",
                        "人体自燃",
                        "心理恐惧",
                        "实验体"
                ],
                "url": "movie-1830.html",
                "cover": "30.jpg"
        },
        {
                "title": "燃情四季",
                "year": "2023",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "爱情、年代、创业",
                "category": "悬疑惊悚",
                "tags": [
                        "90年代",
                        "下海经商",
                        "温州商人",
                        "股票",
                        "时装"
                ],
                "url": "movie-1831.html",
                "cover": "31.jpg"
        },
        {
                "title": "局处长讲政策",
                "year": "2023",
                "region": "中国大陆",
                "type": "纪录片",
                "genre": "纪实 / 政策 / 社会",
                "category": "纪录综艺",
                "tags": [
                        "基层治理",
                        "政策解读",
                        "民生现场",
                        "访谈纪实",
                        "城乡实践",
                        "公共服务"
                ],
                "url": "movie-1832.html",
                "cover": "32.jpg"
        },
        {
                "title": "风速40公尺",
                "year": "2023",
                "region": "日本",
                "type": "动画电影",
                "genre": "运动, 青春, 剧情",
                "category": "华语佳作",
                "tags": [
                        "帆板",
                        "冲绳",
                        "残奥",
                        "励志",
                        "少年"
                ],
                "url": "movie-1833.html",
                "cover": "33.jpg"
        },
        {
                "title": "假如猫从世界上消失了",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "奇幻, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "治愈",
                        "生命价值",
                        "猫咪",
                        "恶魔交易",
                        "温情"
                ],
                "url": "movie-1834.html",
                "cover": "34.jpg"
        },
        {
                "title": "中国式相亲",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情, 喜剧, 爱情",
                "category": "华语佳作",
                "tags": [
                        "相亲",
                        "家庭压力",
                        "代际冲突",
                        "黑色幽默",
                        "社会观察"
                ],
                "url": "movie-1835.html",
                "cover": "35.jpg"
        },
        {
                "title": "迪特，人之子",
                "year": "2024",
                "region": "德国",
                "type": "电影",
                "genre": "剧情, 历史",
                "category": "亚洲经典",
                "tags": [
                        "二战",
                        "童年",
                        "人性",
                        "黑白摄影"
                ],
                "url": "movie-1836.html",
                "cover": "36.jpg"
        },
        {
                "title": "束缚",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "剧情、科幻、惊悚",
                "category": "纪录综艺",
                "tags": [
                        "AI囚禁",
                        "心理操控",
                        "密闭空间",
                        "反转"
                ],
                "url": "movie-1837.html",
                "cover": "37.jpg"
        },
        {
                "title": "笑傲在明天粤语",
                "year": "2023",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情, 喜剧",
                "category": "高分片单",
                "tags": [
                        "港剧",
                        "职场",
                        "幽默",
                        "励志",
                        "友情"
                ],
                "url": "movie-1838.html",
                "cover": "38.jpg"
        },
        {
                "title": "我叫布萨芭泰语",
                "year": "2024",
                "region": "泰国",
                "type": "剧集",
                "genre": "剧情 / 家庭 / 喜剧",
                "category": "欧美热播",
                "tags": [
                        "语言",
                        "异国",
                        "身份认同",
                        "搞笑"
                ],
                "url": "movie-1839.html",
                "cover": "39.jpg"
        },
        {
                "title": "蟑螂杀手",
                "year": "2019",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖、科幻、喜剧",
                "category": "纪录综艺",
                "tags": [
                        "基因突变",
                        "杀虫剂",
                        "B级片",
                        "黑色幽默",
                        "密闭空间"
                ],
                "url": "movie-1840.html",
                "cover": "40.jpg"
        },
        {
                "title": "消失的人",
                "year": "2027",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑",
                "category": "喜剧治愈",
                "tags": [
                        "心理惊悚",
                        "时空循环",
                        "身份认同"
                ],
                "url": "movie-1841.html",
                "cover": "41.jpg"
        },
        {
                "title": "这就是生活2020",
                "year": "2020",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "疫情",
                        "家庭关系",
                        "成长",
                        "自我和解"
                ],
                "url": "movie-1842.html",
                "cover": "42.jpg"
        },
        {
                "title": "背后的她，眼前的我",
                "year": "2025",
                "region": "中国台湾",
                "type": "电视剧",
                "genre": "悬疑, 奇幻, 爱情",
                "category": "华语佳作",
                "tags": [
                        "互换视角",
                        "时空错位",
                        "双面人生"
                ],
                "url": "movie-1843.html",
                "cover": "43.jpg"
        },
        {
                "title": "游手好闲",
                "year": "1968",
                "region": "意大利",
                "type": "电影",
                "genre": "喜剧 / 讽刺",
                "category": "日韩精选",
                "tags": [
                        "懒汉",
                        "小镇",
                        "骗局",
                        "存在主义"
                ],
                "url": "movie-1844.html",
                "cover": "44.jpg"
        },
        {
                "title": "阿比阿弟大冒险",
                "year": "1989",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧 / 科幻 / 冒险",
                "category": "喜剧治愈",
                "tags": [
                        "时间旅行",
                        "基努·里维斯",
                        "脑洞",
                        "无厘头鼻祖"
                ],
                "url": "movie-1845.html",
                "cover": "45.jpg"
        },
        {
                "title": "墨西哥村庄",
                "year": "2023",
                "region": "墨西哥",
                "type": "电影",
                "genre": "悬疑, 奇幻",
                "category": "亚洲经典",
                "tags": [
                        "魔幻现实",
                        "民俗",
                        "失踪",
                        "传说"
                ],
                "url": "movie-1846.html",
                "cover": "46.jpg"
        },
        {
                "title": "索命枕边人",
                "year": "2027",
                "region": "韩国",
                "type": "电影",
                "genre": "惊悚 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "婚姻恐怖",
                        "身份不明",
                        "反转"
                ],
                "url": "movie-1847.html",
                "cover": "47.jpg"
        },
        {
                "title": "爱上费加罗",
                "year": "2023",
                "region": "澳大利亚",
                "type": "电影",
                "genre": "爱情、音乐、剧情",
                "category": "日韩精选",
                "tags": [
                        "歌剧",
                        "师生",
                        "梦想",
                        "中年重启"
                ],
                "url": "movie-1848.html",
                "cover": "48.jpg"
        },
        {
                "title": "阿信2013",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "剧情, 家庭, 历史",
                "category": "华语佳作",
                "tags": [
                        "翻拍",
                        "女性史诗",
                        "平成时代",
                        "坚韧"
                ],
                "url": "movie-1849.html",
                "cover": "49.jpg"
        },
        {
                "title": "银河铁道之父",
                "year": "2023",
                "region": "日本",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "华语佳作",
                "tags": [
                        "文学",
                        "宫泽贤治",
                        "传记",
                        "温情",
                        "历史"
                ],
                "url": "movie-1850.html",
                "cover": "50.jpg"
        },
        {
                "title": "得心拳手",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "剧情 / 运动 / 家庭",
                "category": "纪录综艺",
                "tags": [
                        "拳击",
                        "脑损伤",
                        "父女情"
                ],
                "url": "movie-1851.html",
                "cover": "51.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 天下人家 荒岛猎杀 灵肉思春 原始轮回 流年似水 神圣车行 芈月传 冰岛是最棒的地方 争妻起祸 霹雳战冥曲 乐坛传奇：海滩男孩 登月大计划 铆钉狂想曲 一线钟情 男欢女爱 单身动物园 急速逃脱 凝香劫 小虎将 刺心切骨",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "爱情家庭",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1852.html",
                "cover": "52.jpg"
        },
        {
                "title": "圣母峰史诗",
                "year": "2021",
                "region": "英国",
                "type": "电影",
                "genre": "冒险 / 传记",
                "category": "日韩精选",
                "tags": [
                        "登山",
                        "极限",
                        "真实改编"
                ],
                "url": "movie-1853.html",
                "cover": "53.jpg"
        },
        {
                "title": "秃涂陌路",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "黑色幽默、犯罪",
                "category": "亚洲经典",
                "tags": [
                        "秃头",
                        "巧合",
                        "小人物",
                        "疯狂"
                ],
                "url": "movie-1854.html",
                "cover": "54.jpg"
        },
        {
                "title": "大学",
                "year": "2018",
                "region": "美国",
                "type": "剧集",
                "genre": "青春 / 喜剧",
                "category": "华语佳作",
                "tags": [
                        "校园",
                        "社团",
                        "兄弟会",
                        "成长烦恼",
                        "群像"
                ],
                "url": "movie-1855.html",
                "cover": "55.jpg"
        },
        {
                "title": "解放2：突破",
                "year": "2022",
                "region": "俄罗斯 / 乌克兰",
                "type": "电影",
                "genre": "战争, 动作",
                "category": "纪录综艺",
                "tags": [
                        "东线战场",
                        "坦克战",
                        "实录风格",
                        "复仇"
                ],
                "url": "movie-1856.html",
                "cover": "56.jpg"
        },
        {
                "title": "男人不可以穷",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情励志",
                "category": "悬疑惊悚",
                "tags": [
                        "底层挣扎",
                        "父子矛盾",
                        "价值观碰撞"
                ],
                "url": "movie-1857.html",
                "cover": "57.jpg"
        },
        {
                "title": "武大的小姐姐们",
                "year": "2025",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "青春，校园",
                "category": "纪录综艺",
                "tags": [
                        "樱花",
                        "辩论",
                        "热血"
                ],
                "url": "movie-1858.html",
                "cover": "58.jpg"
        },
        {
                "title": "警界争雄国语",
                "year": "2004",
                "region": "中国香港 / 中国大陆",
                "type": "电视剧",
                "genre": "警匪， 动作， 悬疑",
                "category": "悬疑惊悚",
                "tags": [
                        "双雄",
                        "卧底",
                        "刑侦",
                        "国语配音"
                ],
                "url": "movie-1859.html",
                "cover": "59.jpg"
        },
        {
                "title": "克林顿鬼道",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "惊悚 / 悬疑 / 犯罪",
                "category": "日韩精选",
                "tags": [
                        "公路恐怖",
                        "政治阴谋",
                        "灵异悬疑",
                        "双男主"
                ],
                "url": "movie-1860.html",
                "cover": "60.jpg"
        },
        {
                "title": "五个朋友3",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧/友情",
                "category": "华语佳作",
                "tags": [
                        "老友重聚",
                        "中年危机",
                        "人生抉择"
                ],
                "url": "movie-1861.html",
                "cover": "61.jpg"
        },
        {
                "title": "神鎗飞镖客",
                "year": "2025",
                "region": "意大利",
                "type": "电影",
                "genre": "西部, 动作",
                "category": "纪录综艺",
                "tags": [
                        "意大利通心粉西部片",
                        "复仇",
                        "快枪手"
                ],
                "url": "movie-1862.html",
                "cover": "62.jpg"
        },
        {
                "title": "残秽，不可以住的房间",
                "year": "2026",
                "region": "日本",
                "type": "电影",
                "genre": "恐怖, 悬疑",
                "category": "欧美热播",
                "tags": [
                        "都市传说",
                        "凶宅",
                        "灵异调查",
                        "细思极恐"
                ],
                "url": "movie-1863.html",
                "cover": "63.jpg"
        },
        {
                "title": "盛世华衣",
                "year": "2022",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "古装 / 商战 / 家族",
                "category": "悬疑惊悚",
                "tags": [
                        "丝绸世家",
                        "宫廷订单",
                        "女主掌柜",
                        "工艺传承",
                        "商路博弈"
                ],
                "url": "movie-1864.html",
                "cover": "64.jpg"
        },
        {
                "title": "失控陪审团国语",
                "year": "2003",
                "region": "美国",
                "type": "电影",
                "genre": "法庭惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "陪审团",
                        "操控",
                        "公司阴谋",
                        "心理博弈",
                        "反转"
                ],
                "url": "movie-1865.html",
                "cover": "65.jpg"
        },
        {
                "title": "我的失忆男友",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "喜剧 / 爱情 / 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "失忆梗",
                        "反转",
                        "同居喜剧",
                        "浪漫轻喜"
                ],
                "url": "movie-1866.html",
                "cover": "66.jpg"
        },
        {
                "title": "女神异闻录5",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "动画, 奇幻",
                "category": "动作冒险",
                "tags": [
                        "游戏改编",
                        "怪盗",
                        "高中生",
                        "人格面具",
                        "反抗"
                ],
                "url": "movie-1867.html",
                "cover": "67.jpg"
        },
        {
                "title": "赛车前",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "运动 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "赛车",
                        "兄弟情",
                        "临终遗愿",
                        "励志"
                ],
                "url": "movie-1868.html",
                "cover": "68.jpg"
        },
        {
                "title": "森浦之路",
                "year": "2025",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情、悬疑、神秘",
                "category": "欧美热播",
                "tags": [
                        "世越号隐喻",
                        "村庄献祭",
                        "轮回路",
                        "渔民",
                        "集体沉默"
                ],
                "url": "movie-1869.html",
                "cover": "69.jpg"
        },
        {
                "title": "爱‧欲‧瘾",
                "year": "2025",
                "region": "中国香港",
                "type": "电影",
                "genre": "情色, 剧情, 心理",
                "category": "亚洲经典",
                "tags": [
                        "亲密关系",
                        "成瘾机制",
                        "欲望解剖"
                ],
                "url": "movie-1870.html",
                "cover": "70.jpg"
        },
        {
                "title": "欲魔情泪",
                "year": "1987",
                "region": "中国香港",
                "type": "电影",
                "genre": "情色、剧情、悬疑",
                "category": "纪录综艺",
                "tags": [
                        "出轨",
                        "报复",
                        "蛇蝎美人"
                ],
                "url": "movie-1871.html",
                "cover": "71.jpg"
        },
        {
                "title": "海上之血",
                "year": "2021",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 历史, 战争",
                "category": "悬疑惊悚",
                "tags": [
                        "海盗",
                        "朝鲜",
                        "倭寇",
                        "冷兵器海战",
                        "英雄"
                ],
                "url": "movie-1872.html",
                "cover": "72.jpg"
        },
        {
                "title": "泰版放羊的星星",
                "year": "2024",
                "region": "泰国",
                "type": "剧集",
                "genre": "爱情 / 剧情",
                "category": "华语佳作",
                "tags": [
                        "泰剧",
                        "翻拍",
                        "豪门",
                        "虐恋",
                        "珠宝设计"
                ],
                "url": "movie-1873.html",
                "cover": "73.jpg"
        },
        {
                "title": "狐妖皇嫂",
                "year": "2024",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "古装, 爱情, 奇幻",
                "category": "纪录综艺",
                "tags": [
                        "替身",
                        "禁忌恋",
                        "虐恋"
                ],
                "url": "movie-1874.html",
                "cover": "74.jpg"
        },
        {
                "title": "读或死",
                "year": "2003",
                "region": "日本",
                "type": "TV剧集",
                "genre": "冒险, 超能力",
                "category": "喜剧治愈",
                "tags": [
                        "书痴",
                        "特工",
                        "造纸术",
                        "文化保护"
                ],
                "url": "movie-1875.html",
                "cover": "75.jpg"
        },
        {
                "title": "高中",
                "year": "2023",
                "region": "中国大陆",
                "type": "纪录片",
                "genre": "纪录/社会",
                "category": "喜剧治愈",
                "tags": [
                        "教育",
                        "青春",
                        "真实"
                ],
                "url": "movie-1876.html",
                "cover": "76.jpg"
        },
        {
                "title": "我就是不按套路出牌",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "喜剧，奇幻，职场",
                "category": "悬疑惊悚",
                "tags": [
                        "反套路",
                        "系统流",
                        "打脸",
                        "沙雕"
                ],
                "url": "movie-1877.html",
                "cover": "77.jpg"
        },
        {
                "title": "超凡英雄",
                "year": "2027",
                "region": "美国",
                "type": "电影",
                "genre": "超级英雄 / 讽刺",
                "category": "动作冒险",
                "tags": [
                        "反套路",
                        "超能力管理",
                        "中年危机"
                ],
                "url": "movie-1878.html",
                "cover": "78.jpg"
        },
        {
                "title": "边城侠血",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "武侠 / 动作",
                "category": "日韩精选",
                "tags": [
                        "大漠",
                        "复仇",
                        "侠客"
                ],
                "url": "movie-1879.html",
                "cover": "79.jpg"
        },
        {
                "title": "五路追杀令",
                "year": "2006",
                "region": "美国",
                "type": "电影",
                "genre": "动作，犯罪，惊悚",
                "category": "纪录综艺",
                "tags": [
                        "黑帮",
                        "赏金",
                        "混战",
                        "枪火"
                ],
                "url": "movie-1880.html",
                "cover": "80.jpg"
        },
        {
                "title": "不日成婚",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "喜剧 / 爱情",
                "category": "纪录综艺",
                "tags": [
                        "恐婚",
                        "婚前焦虑",
                        "兄弟团",
                        "港式搞笑",
                        "温馨"
                ],
                "url": "movie-1881.html",
                "cover": "81.jpg"
        },
        {
                "title": "再活一次",
                "year": "2024",
                "region": "西班牙",
                "type": "电影",
                "genre": "剧情, 奇幻",
                "category": "高分片单",
                "tags": [
                        "重生",
                        "母女",
                        "时间循环",
                        "绝症",
                        "和解"
                ],
                "url": "movie-1882.html",
                "cover": "82.jpg"
        },
        {
                "title": "老大不小之都会好的",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "北漂",
                        "兄弟",
                        "治愈",
                        "现实题材"
                ],
                "url": "movie-1883.html",
                "cover": "83.jpg"
        },
        {
                "title": "盗亦有道",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作，犯罪，喜剧",
                "category": "日韩精选",
                "tags": [
                        "侠盗",
                        "高科技",
                        "劫富济贫",
                        "师徒"
                ],
                "url": "movie-1884.html",
                "cover": "84.jpg"
        },
        {
                "title": "瓦伦丁路",
                "year": "2025",
                "region": "法国 / 意大利",
                "type": "电影",
                "genre": "爱情 / 悬疑",
                "category": "亚洲经典",
                "tags": [
                        "异国",
                        "书信",
                        "双重时间线",
                        "旧书店"
                ],
                "url": "movie-1885.html",
                "cover": "85.jpg"
        },
        {
                "title": "闪光的夏天第二季",
                "year": "2022",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀",
                "category": "高分片单",
                "tags": [
                        "音乐",
                        "旅行",
                        "青春",
                        "夏天"
                ],
                "url": "movie-1886.html",
                "cover": "86.jpg"
        },
        {
                "title": "水畔",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭 / 文艺",
                "category": "高分片单",
                "tags": [
                        "留守儿童",
                        "祖孙情",
                        "南方水乡",
                        "沉默叙事",
                        "细腻如水"
                ],
                "url": "movie-1887.html",
                "cover": "87.jpg"
        },
        {
                "title": "三新贵",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "剧情 / 喜剧",
                "category": "欧美热播",
                "tags": [
                        "创业",
                        "养老",
                        "代际冲突",
                        "轻喜剧"
                ],
                "url": "movie-1888.html",
                "cover": "88.jpg"
        },
        {
                "title": "麻烦您啦",
                "year": "2024",
                "region": "日本",
                "type": "剧集",
                "genre": "喜剧, 剧情, 生活",
                "category": "亚洲经典",
                "tags": [
                        "便利店",
                        "单元剧",
                        "暖心"
                ],
                "url": "movie-1889.html",
                "cover": "89.jpg"
        },
        {
                "title": "镇灵攻略第一季",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "奇幻，悬疑",
                "category": "高分片单",
                "tags": [
                        "民俗",
                        "阴阳先生",
                        "单元剧",
                        "中式恐怖",
                        "镇灵"
                ],
                "url": "movie-1890.html",
                "cover": "90.jpg"
        },
        {
                "title": "阳光男孩",
                "year": "2022",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "青春， 校园， 喜剧",
                "category": "高分片单",
                "tags": [
                        "高中",
                        "阳光",
                        "篮球队",
                        "抑郁症",
                        "反差"
                ],
                "url": "movie-1891.html",
                "cover": "91.jpg"
        },
        {
                "title": "爸爸",
                "year": "2023",
                "region": "印度",
                "type": "电影",
                "genre": "剧情, 家庭, 运动",
                "category": "华语佳作",
                "tags": [
                        "父女情",
                        "摔跤",
                        "社会偏见",
                        "燃"
                ],
                "url": "movie-1892.html",
                "cover": "92.jpg"
        },
        {
                "title": "雪崩行动",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作、灾难、惊悚",
                "category": "喜剧治愈",
                "tags": [
                        "雪场",
                        "恐怖袭击",
                        "极限逃生",
                        "救援"
                ],
                "url": "movie-1893.html",
                "cover": "93.jpg"
        },
        {
                "title": "鞑靼武士",
                "year": "2020",
                "region": "俄罗斯",
                "type": "电影",
                "genre": "历史, 动作, 战争",
                "category": "高分片单",
                "tags": [
                        "草原征途",
                        "族群冲突",
                        "骑战",
                        "复仇与誓言",
                        "帝国边境"
                ],
                "url": "movie-1894.html",
                "cover": "94.jpg"
        },
        {
                "title": "成功的代价",
                "year": "2019",
                "region": "韩国",
                "type": "电影",
                "genre": "剧情, 悬疑",
                "category": "华语佳作",
                "tags": [
                        "职场内卷",
                        "阶级跃迁",
                        "代价交换"
                ],
                "url": "movie-1895.html",
                "cover": "95.jpg"
        },
        {
                "title": "星球大战:天行者崛起",
                "year": "2019",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 冒险 / 动作",
                "category": "爱情家庭",
                "tags": [
                        "史诗终章",
                        "光明黑暗",
                        "绝地归来"
                ],
                "url": "movie-1896.html",
                "cover": "96.jpg"
        },
        {
                "title": "收租佬",
                "year": "2024",
                "region": "中国香港",
                "type": "剧集",
                "genre": "剧情, 喜剧, 社会",
                "category": "纪录综艺",
                "tags": [
                        "市井",
                        "房东",
                        "人情味",
                        "黑色幽默"
                ],
                "url": "movie-1897.html",
                "cover": "97.jpg"
        },
        {
                "title": "你好世界",
                "year": "2019",
                "region": "日本",
                "type": "电影",
                "genre": "动画 / 科幻 / 爱情",
                "category": "亚洲经典",
                "tags": [
                        "虚拟现实",
                        "穿越",
                        "拯救",
                        "反转",
                        "脑洞"
                ],
                "url": "movie-1898.html",
                "cover": "98.jpg"
        },
        {
                "title": "恐龙蛋",
                "year": "2024",
                "region": "蒙古",
                "type": "电影",
                "genre": "文艺, 悬疑, 西部",
                "category": "高分片单",
                "tags": [
                        "戈壁",
                        "欲望",
                        "荒诞",
                        "诗意"
                ],
                "url": "movie-1899.html",
                "cover": "99.jpg"
        },
        {
                "title": "玫瑰玫瑰我爱你",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "歌舞, 爱情, 喜剧",
                "category": "爱情家庭",
                "tags": [
                        "怀旧金曲",
                        "老上海",
                        "错位爱情",
                        "歌舞片"
                ],
                "url": "movie-1900.html",
                "cover": "100.jpg"
        },
        {
                "title": "疯狂人字拖",
                "year": "2026",
                "region": "中国大陆 / 泰国",
                "type": "电影",
                "genre": "喜剧 / 动作 / 公路",
                "category": "喜剧治愈",
                "tags": [
                        "草根",
                        "泰拳",
                        "逆袭",
                        "搞笑",
                        "小人物"
                ],
                "url": "movie-1901.html",
                "cover": "101.jpg"
        },
        {
                "title": "第一滴血续集",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "动作战争",
                "category": "亚洲经典",
                "tags": [
                        "兰博",
                        "硬汉",
                        "丛林战",
                        "冷战",
                        "复仇"
                ],
                "url": "movie-1902.html",
                "cover": "102.jpg"
        },
        {
                "title": "盂兰神功",
                "year": "2014",
                "region": "中国香港",
                "type": "电影",
                "genre": "恐怖",
                "category": "爱情家庭",
                "tags": [
                        "鬼节",
                        "戏班",
                        "禁忌",
                        "民俗",
                        "灵堂",
                        "复仇"
                ],
                "url": "movie-1903.html",
                "cover": "103.jpg"
        },
        {
                "title": "摩斯探长第八季",
                "year": "2023",
                "region": "英国",
                "type": "剧集",
                "genre": "悬疑，犯罪",
                "category": "喜剧治愈",
                "tags": [
                        "英伦",
                        "古典推理",
                        "牛津",
                        "悲剧美学"
                ],
                "url": "movie-1904.html",
                "cover": "104.jpg"
        },
        {
                "title": "狄仁杰·通天人偶",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑 / 古装 / 奇幻",
                "category": "高分片单",
                "tags": [
                        "狄仁杰",
                        "人偶",
                        "通灵",
                        "权谋",
                        "密室"
                ],
                "url": "movie-1905.html",
                "cover": "105.jpg"
        },
        {
                "title": "四月三周两天",
                "year": "2024",
                "region": "罗马尼亚",
                "type": "电影",
                "genre": "剧情/历史",
                "category": "爱情家庭",
                "tags": [
                        "计划生育",
                        "姐妹情",
                        "压迫",
                        "长镜头",
                        "写实"
                ],
                "url": "movie-1906.html",
                "cover": "106.jpg"
        },
        {
                "title": "另一部同志电影",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情，爱情，家庭",
                "category": "动作冒险",
                "tags": [
                        "同志",
                        "亲情",
                        "回乡",
                        "年夜饭",
                        "和解"
                ],
                "url": "movie-1907.html",
                "cover": "107.jpg"
        },
        {
                "title": "蓝色废墟",
                "year": "2013",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 犯罪 / 剧情",
                "category": "动作冒险",
                "tags": [
                        "复仇",
                        "破败海岸",
                        "旧日血债",
                        "无业流浪者",
                        "误判真相"
                ],
                "url": "movie-1908.html",
                "cover": "108.jpg"
        },
        {
                "title": "凹凸世界第一季",
                "year": "2016",
                "region": "中国大陆",
                "type": "动画",
                "genre": "科幻, 热血",
                "category": "欧美热播",
                "tags": [
                        "3D动画",
                        "参赛者",
                        "超能力",
                        "废柴主角",
                        "群像"
                ],
                "url": "movie-1909.html",
                "cover": "109.jpg"
        },
        {
                "title": "墨西卡利笨猫",
                "year": "2021",
                "region": "墨西哥",
                "type": "电影",
                "genre": "喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "黑帮",
                        "蠢萌",
                        "巧合",
                        "公路"
                ],
                "url": "movie-1910.html",
                "cover": "110.jpg"
        },
        {
                "title": "注定爱你",
                "year": "2023",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "爱情， 喜剧",
                "category": "悬疑惊悚",
                "tags": [
                        "青梅竹马",
                        "契约婚姻",
                        "职场"
                ],
                "url": "movie-1911.html",
                "cover": "111.jpg"
        },
        {
                "title": "八仙后传之国舅探亲",
                "year": "2025",
                "region": "中国大陆",
                "type": "电影",
                "genre": "奇幻、神话、喜剧",
                "category": "动作冒险",
                "tags": [
                        "八仙",
                        "曹国舅",
                        "下凡",
                        "现代冲突",
                        "法术"
                ],
                "url": "movie-1912.html",
                "cover": "112.jpg"
        },
        {
                "title": "掘金",
                "year": "2026",
                "region": "澳大利亚",
                "type": "剧集",
                "genre": "惊悚，冒险",
                "category": "欧美热播",
                "tags": [
                        "金矿",
                        "贪婪",
                        "沙漠",
                        "生存",
                        "人性"
                ],
                "url": "movie-1913.html",
                "cover": "113.jpg"
        },
        {
                "title": "7分钟",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚, 犯罪",
                "category": "悬疑惊悚",
                "tags": [
                        "密室",
                        "实时叙事",
                        "反转",
                        "高概念"
                ],
                "url": "movie-1914.html",
                "cover": "114.jpg"
        },
        {
                "title": "加百列的狂喜3",
                "year": "2023",
                "region": "美国",
                "type": "电视剧",
                "genre": "爱情 / 奇幻 / 剧情",
                "category": "喜剧治愈",
                "tags": [
                        "天使",
                        "灵魂契约",
                        "宿命",
                        "三角关系",
                        "续作"
                ],
                "url": "movie-1915.html",
                "cover": "115.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 私人课程 小圣人 同屋共住 巴贝特之宴 渔枪 猫小姐寻真爱 那一年我们有约 伊特鲁里亚面具 开心芒果2015 金达莱 真的有天堂 风流娘子军 企鹅记忆幸福故事 美女如云 鬼镇 鬼哭神嚎8：灵异鬼现 盲侠千里救孤儿 再单身游记 长沙里：被遗忘的英雄们 人参果",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "日韩精选",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1916.html",
                "cover": "116.jpg"
        },
        {
                "title": "机密议程式",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑, 科技",
                "category": "高分片单",
                "tags": [
                        "数学",
                        "加密",
                        "国安",
                        "高智商"
                ],
                "url": "movie-1917.html",
                "cover": "117.jpg"
        },
        {
                "title": "驶向新加坡",
                "year": "2014",
                "region": "马来西亚",
                "type": "电影",
                "genre": "公路剧情 / 家庭冒险",
                "category": "爱情家庭",
                "tags": [
                        "跨境旅程",
                        "代际和解",
                        "口岸风景",
                        "旧债新愿",
                        "逃离与回归"
                ],
                "url": "movie-1918.html",
                "cover": "118.jpg"
        },
        {
                "title": "丧钟：骑士与龙",
                "year": "2026",
                "region": "美国",
                "type": "剧集",
                "genre": "动作/奇幻",
                "category": "亚洲经典",
                "tags": [
                        "反英雄",
                        "中世纪",
                        "永生诅咒"
                ],
                "url": "movie-1919.html",
                "cover": "119.jpg"
        },
        {
                "title": "天生有罪",
                "year": "2025",
                "region": "南非",
                "type": "剧集",
                "genre": "剧情 / 犯罪 / 传记",
                "category": "亚洲经典",
                "tags": [
                        "种族隔离",
                        "混血儿",
                        "母子关系",
                        "真实故事",
                        "生存智慧"
                ],
                "url": "movie-1920.html",
                "cover": "120.jpg"
        },
        {
                "title": "洋基传奇捕手：尤吉·贝拉",
                "year": "2023",
                "region": "美国",
                "type": "电影",
                "genre": "传记，运动，励志",
                "category": "华语佳作",
                "tags": [
                        "棒球",
                        "二战",
                        "精神象征",
                        "小个子",
                        "金句王"
                ],
                "url": "movie-1921.html",
                "cover": "121.jpg"
        },
        {
                "title": "蝙蝠侠大战忍者神龟",
                "year": "2019",
                "region": "美国",
                "type": "动画电影",
                "genre": "动作、科幻、喜剧",
                "category": "华语佳作",
                "tags": [
                        "跨界联动",
                        "哥谭市",
                        "变种英雄",
                        "忍者对决",
                        "粉丝向"
                ],
                "url": "movie-1922.html",
                "cover": "122.jpg"
        },
        {
                "title": "猫山王中王",
                "year": "2024",
                "region": "新加坡, 马来西亚",
                "type": "电影",
                "genre": "喜剧, 家庭, 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "榴莲",
                        "父子情",
                        "南洋风情",
                        "美食"
                ],
                "url": "movie-1923.html",
                "cover": "123.jpg"
        },
        {
                "title": "死亡之蚁",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "恐怖 / 科幻 / 灾难",
                "category": "日韩精选",
                "tags": [
                        "变异",
                        "丛林",
                        "生存",
                        "B级片"
                ],
                "url": "movie-1924.html",
                "cover": "124.jpg"
        },
        {
                "title": "神殿奇兵",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "动作、冒险、奇幻",
                "category": "爱情家庭",
                "tags": [
                        "盗墓",
                        "古埃及",
                        "夺宝奇兵",
                        "机关术",
                        "神秘主义"
                ],
                "url": "movie-1925.html",
                "cover": "125.jpg"
        },
        {
                "title": "玛莎",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "心理惊悚",
                        "女性成长",
                        "家族秘密"
                ],
                "url": "movie-1926.html",
                "cover": "126.jpg"
        },
        {
                "title": "欲望的果实",
                "year": "1968",
                "region": "法国 / 意大利",
                "type": "电影",
                "genre": "剧情 / 惊悚",
                "category": "纪录综艺",
                "tags": [
                        "新浪潮",
                        "情色",
                        "谋杀",
                        "婚姻寓言"
                ],
                "url": "movie-1927.html",
                "cover": "127.jpg"
        },
        {
                "title": "夜愿梦想国",
                "year": "2025",
                "region": "德国",
                "type": "电影",
                "genre": "奇幻 / 冒险 / 治愈",
                "category": "欧美热播",
                "tags": [
                        "梦境猎手",
                        "童梦",
                        "成人恐惧"
                ],
                "url": "movie-1928.html",
                "cover": "128.jpg"
        },
        {
                "title": "谍战深海之惊蛰",
                "year": "2019",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "谍战 / 悬疑",
                "category": "日韩精选",
                "tags": [
                        "潜伏",
                        "重庆",
                        "身份错位",
                        "三面间谍"
                ],
                "url": "movie-1929.html",
                "cover": "129.jpg"
        },
        {
                "title": "坏记忆橡皮擦",
                "year": "2025",
                "region": "日本",
                "type": "剧集",
                "genre": "科幻 / 悬疑 / 爱情",
                "category": "悬疑惊悚",
                "tags": [
                        "记忆删除",
                        "伦理",
                        "反转",
                        "烧脑"
                ],
                "url": "movie-1930.html",
                "cover": "130.jpg"
        },
        {
                "title": "犬之力",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 西部 / 同性",
                "category": "爱情家庭",
                "tags": [
                        "牧场",
                        "兄弟",
                        "压抑",
                        "心理博弈",
                        "悲剧"
                ],
                "url": "movie-1931.html",
                "cover": "131.jpg"
        },
        {
                "title": "藏匿",
                "year": "2022",
                "region": "波兰",
                "type": "电影",
                "genre": "历史 / 战争",
                "category": "爱情家庭",
                "tags": [
                        "大屠杀",
                        "阁楼",
                        "生存"
                ],
                "url": "movie-1932.html",
                "cover": "132.jpg"
        },
        {
                "title": "屎命召唤",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧、恐怖",
                "category": "悬疑惊悚",
                "tags": [
                        "屎尿屁",
                        "寄生",
                        "怪物",
                        "黑色幽默"
                ],
                "url": "movie-1933.html",
                "cover": "133.jpg"
        },
        {
                "title": "达利与史巴基奇遇记",
                "year": "2019",
                "region": "西班牙",
                "type": "电影",
                "genre": "喜剧, 动画, 奇幻",
                "category": "高分片单",
                "tags": [
                        "超现实主义",
                        "狗狗视角",
                        "艺术史",
                        "荒诞"
                ],
                "url": "movie-1934.html",
                "cover": "134.jpg"
        },
        {
                "title": "深喉揭密",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "传记 / 历史",
                "category": "悬疑惊悚",
                "tags": [
                        "水门事件",
                        "新闻",
                        "线人",
                        "政治",
                        "真实改编"
                ],
                "url": "movie-1935.html",
                "cover": "135.jpg"
        },
        {
                "title": "百鬼幼儿园第三季",
                "year": "2022",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "喜剧 / 奇幻 / 少儿",
                "category": "亚洲经典",
                "tags": [
                        "妖怪幼崽",
                        "校园日常",
                        "友情成长",
                        "轻冒险",
                        "治愈搞笑"
                ],
                "url": "movie-1936.html",
                "cover": "136.jpg"
        },
        {
                "title": "走佬情人节",
                "year": "2024",
                "region": "中国大陆",
                "type": "剧情片",
                "genre": "都市爱情、黑色喜剧、悬疑",
                "category": "亚洲经典",
                "tags": [
                        "失踪案",
                        "情人节",
                        "假身份",
                        "反转"
                ],
                "url": "movie-1937.html",
                "cover": "137.jpg"
        },
        {
                "title": "乱跑大战！基因组奖杯",
                "year": "2028",
                "region": "中国大陆",
                "type": "电影",
                "genre": "科幻,动作,悬疑,竞技",
                "category": "爱情家庭",
                "tags": [
                        "基因竞赛",
                        "反乌托邦",
                        "逃亡追逐",
                        "生物伦理",
                        "未来都市"
                ],
                "url": "movie-1938.html",
                "cover": "138.jpg"
        },
        {
                "title": "万物生灵第六季",
                "year": "2024",
                "region": "英国",
                "type": "电视剧",
                "genre": "剧情 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "治愈",
                        "兽医",
                        "乡村",
                        "时代变迁"
                ],
                "url": "movie-1939.html",
                "cover": "139.jpg"
        },
        {
                "title": "罗马三贱客 第一季",
                "year": "2023",
                "region": "英国",
                "type": "剧集",
                "genre": "喜剧, 历史, 荒诞",
                "category": "悬疑惊悚",
                "tags": [
                        "古罗马",
                        "室友喜剧",
                        "历史恶搞",
                        "无厘头"
                ],
                "url": "movie-1940.html",
                "cover": "140.jpg"
        },
        {
                "title": "乔治亚",
                "year": "2025",
                "region": "美国",
                "type": "电影",
                "genre": "剧情， 传记",
                "category": "亚洲经典",
                "tags": [
                        "女性",
                        "成长",
                        "音乐",
                        "救赎"
                ],
                "url": "movie-1941.html",
                "cover": "141.jpg"
        },
        {
                "title": "喜粤之味",
                "year": "2021",
                "region": "中国大陆",
                "type": "网络剧",
                "genre": "美食、爱情",
                "category": "爱情家庭",
                "tags": [
                        "粤菜",
                        "异地恋",
                        "治愈",
                        "小店"
                ],
                "url": "movie-1942.html",
                "cover": "142.jpg"
        },
        {
                "title": "学校2",
                "year": "1998",
                "region": "日本",
                "type": "电影",
                "genre": "剧情",
                "category": "日韩精选",
                "tags": [
                        "校园",
                        "青春",
                        "反思",
                        "社会"
                ],
                "url": "movie-1943.html",
                "cover": "143.jpg"
        },
        {
                "title": "雨后",
                "year": "2019",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "清新文艺",
                        "错位爱情",
                        "城市孤独"
                ],
                "url": "movie-1944.html",
                "cover": "144.jpg"
        },
        {
                "title": "孤国春秋：七王丧钟",
                "year": "2025",
                "region": "英国",
                "type": "剧集",
                "genre": "历史、战争、动作",
                "category": "亚洲经典",
                "tags": [
                        "中世纪",
                        "维京",
                        "史诗",
                        "王国争夺"
                ],
                "url": "movie-1945.html",
                "cover": "145.jpg"
        },
        {
                "title": "亲爱的敌人",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "悬疑 / 犯罪 / 心理",
                "category": "日韩精选",
                "tags": [
                        "双男主",
                        "警匪",
                        "记忆移植",
                        "猫鼠游戏",
                        "高智商"
                ],
                "url": "movie-1946.html",
                "cover": "146.jpg"
        },
        {
                "title": "扮熟少女",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧, 爱情, 青春",
                "category": "欧美热播",
                "tags": [
                        "校园",
                        "闺蜜",
                        "伪装",
                        "成长",
                        "搞笑"
                ],
                "url": "movie-1947.html",
                "cover": "147.jpg"
        },
        {
                "title": "望月2017",
                "year": "2017",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "亚洲经典",
                "tags": [
                        "农村留守",
                        "中秋",
                        "公路"
                ],
                "url": "movie-1948.html",
                "cover": "148.jpg"
        },
        {
                "title": "生母养母的战争",
                "year": "2021",
                "region": "中国大陆",
                "type": "家庭伦理悬疑剧",
                "genre": "家庭伦理, 战争创伤, 法庭悬疑",
                "category": "欧美热播",
                "tags": [
                        "生母与养母",
                        "养育真相",
                        "遗产纷争",
                        "受害者自述",
                        "和解"
                ],
                "url": "movie-1949.html",
                "cover": "149.jpg"
        },
        {
                "title": "月度最佳员工",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "喜剧， 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "职场",
                        "黑色幽默",
                        "大逃杀",
                        "办公室政治"
                ],
                "url": "movie-1950.html",
                "cover": "150.jpg"
        },
        {
                "title": "二哥来了怎么办",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "家庭, 喜剧",
                "category": "亚洲经典",
                "tags": [
                        "重组家庭",
                        "兄妹",
                        "搞笑",
                        "温馨"
                ],
                "url": "movie-1951.html",
                "cover": "1.jpg"
        },
        {
                "title": "不愿长大的玉子",
                "year": "2013",
                "region": "日本",
                "type": "动画电影",
                "genre": "动画, 奇幻, 成长",
                "category": "亚洲经典",
                "tags": [
                        "少女",
                        "童年",
                        "时间",
                        "家庭",
                        "告别",
                        "自我接纳"
                ],
                "url": "movie-1952.html",
                "cover": "2.jpg"
        },
        {
                "title": "恋恋书中人",
                "year": "2026",
                "region": "美国",
                "type": "电影",
                "genre": "爱情、奇幻、剧情",
                "category": "高分片单",
                "tags": [
                        "打破第四面墙",
                        "作家与角色",
                        "自我救赎",
                        "浪漫喜剧"
                ],
                "url": "movie-1953.html",
                "cover": "3.jpg"
        },
        {
                "title": "特雷弗·诺亚：但愿你可以",
                "year": "2024",
                "region": "美国",
                "type": "专场",
                "genre": "喜剧，脱口秀",
                "category": "华语佳作",
                "tags": [
                        "单口喜剧",
                        "政治讽刺",
                        "文化冲突",
                        "个人故事"
                ],
                "url": "movie-1954.html",
                "cover": "4.jpg"
        },
        {
                "title": "地老天荒未了情",
                "year": "1991",
                "region": "中国台湾",
                "type": "电影",
                "genre": "爱情 / 文艺",
                "category": "悬疑惊悚",
                "tags": [
                        "绝症",
                        "书信",
                        "年代",
                        "遗憾"
                ],
                "url": "movie-1955.html",
                "cover": "5.jpg"
        },
        {
                "title": "玛琳娜的杀戮四部曲",
                "year": "2026",
                "region": "西班牙/墨西哥",
                "type": "电视剧",
                "genre": "犯罪, 惊悚",
                "category": "亚洲经典",
                "tags": [
                        "女杀手",
                        "复仇",
                        "章节体",
                        "暴力美学"
                ],
                "url": "movie-1956.html",
                "cover": "6.jpg"
        },
        {
                "title": "别处",
                "year": "2019",
                "region": "法国",
                "type": "电影",
                "genre": "文艺, 剧情",
                "category": "爱情家庭",
                "tags": [
                        "存在主义",
                        "旅行",
                        "迷茫"
                ],
                "url": "movie-1957.html",
                "cover": "7.jpg"
        },
        {
                "title": "车行至高",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 喜剧",
                "category": "日韩精选",
                "tags": [
                        "二手车",
                        "父子",
                        "创业",
                        "市井",
                        "逆袭"
                ],
                "url": "movie-1958.html",
                "cover": "8.jpg"
        },
        {
                "title": "犯罪记录",
                "year": "2022",
                "region": "英国",
                "type": "电视剧",
                "genre": "犯罪 / 惊悚 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "陈年旧案",
                        "双雄对峙",
                        "警察腐败",
                        "抽丝剥茧"
                ],
                "url": "movie-1959.html",
                "cover": "9.jpg"
        },
        {
                "title": "雄关遗梦",
                "year": "2025",
                "region": "中国大陆",
                "type": "剧集",
                "genre": "历史 / 悬疑 / 穿越",
                "category": "高分片单",
                "tags": [
                        "长城守卫",
                        "时间轮回",
                        "历史裂隙",
                        "双线叙事"
                ],
                "url": "movie-1960.html",
                "cover": "10.jpg"
        },
        {
                "title": "元山工作",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "动作, 惊悚, 谍战",
                "category": "日韩精选",
                "tags": [
                        "朝鲜",
                        "间谍",
                        "核设施",
                        "特工",
                        "南北韩"
                ],
                "url": "movie-1961.html",
                "cover": "11.jpg"
        },
        {
                "title": "三个奶爸一个娃",
                "year": "2021",
                "region": "中国",
                "type": "电视剧",
                "genre": "喜剧 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "育儿",
                        "合租",
                        "奶爸",
                        "代际"
                ],
                "url": "movie-1962.html",
                "cover": "12.jpg"
        },
        {
                "title": "致命行动",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "动作/犯罪",
                "category": "华语佳作",
                "tags": [
                        "限时任务",
                        "以暴制暴",
                        "医院",
                        "复仇"
                ],
                "url": "movie-1963.html",
                "cover": "13.jpg"
        },
        {
                "title": "钱能买到的梦",
                "year": "1947",
                "region": "美国",
                "type": "电影",
                "genre": "剧情, 奇幻, 悬疑",
                "category": "华语佳作",
                "tags": [
                        "黑色电影",
                        "心理",
                        "梦境",
                        "交易",
                        "经典"
                ],
                "url": "movie-1964.html",
                "cover": "14.jpg"
        },
        {
                "title": "潜艇突击战",
                "year": "2024",
                "region": "德国",
                "type": "电影",
                "genre": "战争 / 历史 / 惊悚",
                "category": "悬疑惊悚",
                "tags": [
                        "潜艇战",
                        "大西洋",
                        "道德困境",
                        "真实改编"
                ],
                "url": "movie-1965.html",
                "cover": "15.jpg"
        },
        {
                "title": "地球未知档案：杀手机器人",
                "year": "2022",
                "region": "美国",
                "type": "电影",
                "genre": "科幻， 纪录片风格， 惊悚",
                "category": "日韩精选",
                "tags": [
                        "仿生人",
                        "失控",
                        "伪纪录片",
                        "阴谋",
                        "未来战争"
                ],
                "url": "movie-1966.html",
                "cover": "16.jpg"
        },
        {
                "title": "妈妈再爱我一次1988",
                "year": "1988",
                "region": "中国台湾",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "喜剧治愈",
                "tags": [
                        "催泪",
                        "母子",
                        "精神病",
                        "经典"
                ],
                "url": "movie-1967.html",
                "cover": "17.jpg"
        },
        {
                "title": "海星来了",
                "year": "2026",
                "region": "中国大陆",
                "type": "动画剧集",
                "genre": "儿童, 奇幻, 教育",
                "category": "华语佳作",
                "tags": [
                        "海洋",
                        "友谊",
                        "冒险",
                        "环保"
                ],
                "url": "movie-1968.html",
                "cover": "18.jpg"
        },
        {
                "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 怪老头与公主狗 公司不是学校 迷雾2017 山菊花2007 史酷比：格斗狂热迷 燕山君 围城2008 爱之针 西口情歌 乡村小屋 死对头 没有航标的河流 喀喀喀喀 废柴少年之次元危机 团子大家族 剧场版 来去美国2 出租车司机冒险记 悬崖上的谋杀 出水美人鱼 黑土无言",
                "year": "根据片名判断",
                "region": "根据片名判断",
                "type": "根据片名判断",
                "genre": "根据片名判断",
                "category": "悬疑惊悚",
                "tags": [
                        "根据片名判断"
                ],
                "url": "movie-1969.html",
                "cover": "19.jpg"
        },
        {
                "title": "宙斯之血第三季",
                "year": "2026",
                "region": "美国",
                "type": "动画剧集",
                "genre": "动作 / 奇幻 / 冒险",
                "category": "华语佳作",
                "tags": [
                        "北欧神话",
                        "诸神黄昏",
                        "半神",
                        "史诗"
                ],
                "url": "movie-1970.html",
                "cover": "20.jpg"
        },
        {
                "title": "野马秀",
                "year": "2024",
                "region": "美国",
                "type": "剧集",
                "genre": "喜剧 / 音乐",
                "category": "欧美热播",
                "tags": [
                        "单口喜剧",
                        "脱口秀",
                        "女性成长",
                        "黑人文化",
                        "犀利吐槽"
                ],
                "url": "movie-1971.html",
                "cover": "21.jpg"
        },
        {
                "title": "笼里的女人",
                "year": "2023",
                "region": "丹麦",
                "type": "电影",
                "genre": "剧情 / 悬疑 / 惊悚",
                "category": "高分片单",
                "tags": [
                        "心理压迫",
                        "密室逃脱",
                        "社会隐喻"
                ],
                "url": "movie-1972.html",
                "cover": "22.jpg"
        },
        {
                "title": "颤栗黑影",
                "year": "2023",
                "region": "泰国",
                "type": "惊悚电影",
                "genre": "惊悚 / 心理悬疑",
                "category": "动作冒险",
                "tags": [
                        "电车失踪",
                        "声波恐惧",
                        "城市地下空间",
                        "共振理论",
                        "侦查双线"
                ],
                "url": "movie-1973.html",
                "cover": "23.jpg"
        },
        {
                "title": "2024江苏卫视元宵晚会",
                "year": "2024",
                "region": "中国大陆",
                "type": "综艺 / 晚会",
                "genre": "音乐 / 歌舞 / 喜剧 / 晚会",
                "category": "爱情家庭",
                "tags": [
                        "卫视晚会",
                        "元宵特辑",
                        "明星拼盘",
                        "语言类节目",
                        "合家欢"
                ],
                "url": "movie-1974.html",
                "cover": "24.jpg"
        },
        {
                "title": "非美好情节",
                "year": "2028",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情, 黑色幽默",
                "category": "爱情家庭",
                "tags": [
                        "荒诞",
                        "多线叙事",
                        "社会讽刺",
                        "巧合"
                ],
                "url": "movie-1975.html",
                "cover": "25.jpg"
        },
        {
                "title": "希望我在这里",
                "year": "2024",
                "region": "美国",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "爱情家庭",
                "tags": [
                        "催泪",
                        "自闭症",
                        "父女",
                        "独立电影"
                ],
                "url": "movie-1976.html",
                "cover": "26.jpg"
        },
        {
                "title": "万恶金钱",
                "year": "2021",
                "region": "美国",
                "type": "电影",
                "genre": "惊悚 / 犯罪 / 剧情",
                "category": "悬疑惊悚",
                "tags": [
                        "华尔街",
                        "人性贪婪",
                        "黑色电影",
                        "道德困境",
                        "欲望"
                ],
                "url": "movie-1977.html",
                "cover": "27.jpg"
        },
        {
                "title": "在凶手的怀抱里",
                "year": "2022",
                "region": "中国大陆",
                "type": "心理惊悚片",
                "genre": "心理,惊悚,犯罪",
                "category": "欧美热播",
                "tags": [
                        "凶案",
                        "恋爱真相",
                        "律师",
                        "刑侦",
                        "反转"
                ],
                "url": "movie-1978.html",
                "cover": "28.jpg"
        },
        {
                "title": "天下伊贺越 晓之血战",
                "year": "2024",
                "region": "日本",
                "type": "电影",
                "genre": "动作，历史",
                "category": "爱情家庭",
                "tags": [
                        "忍者",
                        "战国",
                        "复仇",
                        "剑戟",
                        "暴力美学"
                ],
                "url": "movie-1979.html",
                "cover": "29.jpg"
        },
        {
                "title": "异种猎杀",
                "year": "2017",
                "region": "美国",
                "type": "电影",
                "genre": "科幻 / 惊悚",
                "category": "欧美热播",
                "tags": [
                        "外星生物",
                        "封闭空间",
                        "生存"
                ],
                "url": "movie-1980.html",
                "cover": "30.jpg"
        },
        {
                "title": "百媚千娇",
                "year": "2024",
                "region": "中国",
                "type": "电视剧",
                "genre": "古装, 爱情, 女性",
                "category": "爱情家庭",
                "tags": [
                        "选秀",
                        "反内卷",
                        "姐妹情"
                ],
                "url": "movie-1981.html",
                "cover": "31.jpg"
        },
        {
                "title": "球王比利",
                "year": "2025",
                "region": "巴西/美国",
                "type": "电影",
                "genre": "传记/运动/剧情",
                "category": "亚洲经典",
                "tags": [
                        "足球",
                        "贫民窟",
                        "逆袭",
                        "桑巴足球",
                        "真实人生"
                ],
                "url": "movie-1982.html",
                "cover": "32.jpg"
        },
        {
                "title": "神探蒲松龄",
                "year": "2024",
                "region": "大陆",
                "type": "电影",
                "genre": "悬疑, 古装, 奇幻",
                "category": "欧美热播",
                "tags": [
                        "文人断案",
                        "志怪",
                        "聊斋宇宙"
                ],
                "url": "movie-1983.html",
                "cover": "33.jpg"
        },
        {
                "title": "孤寂午后",
                "year": "2024",
                "region": "法国",
                "type": "电影",
                "genre": "剧情，文艺，女性",
                "category": "动作冒险",
                "tags": [
                        "孤老",
                        "回忆",
                        "阳光",
                        "缓慢"
                ],
                "url": "movie-1984.html",
                "cover": "34.jpg"
        },
        {
                "title": "无人能敌",
                "year": "2024",
                "region": "韩国",
                "type": "电影",
                "genre": "动作 / 悬疑 / 惊悚",
                "category": "爱情家庭",
                "tags": [
                        "格斗冠军",
                        "失忆寻凶",
                        "监狱风云",
                        "以暴制暴"
                ],
                "url": "movie-1985.html",
                "cover": "35.jpg"
        },
        {
                "title": "无神2017",
                "year": "2017",
                "region": "美国",
                "type": "剧集",
                "genre": "西部/剧情/动作",
                "category": "华语佳作",
                "tags": [
                        "女性乌托邦",
                        "枪战美学",
                        "反类型西部"
                ],
                "url": "movie-1986.html",
                "cover": "36.jpg"
        },
        {
                "title": "老板不知道的我·老友季2",
                "year": "2024",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀 / 职场 / 纪实",
                "category": "高分片单",
                "tags": [
                        "职场观察",
                        "上下级关系",
                        "创业伙伴",
                        "真心话大冒险",
                        "情感和解"
                ],
                "url": "movie-1987.html",
                "cover": "37.jpg"
        },
        {
                "title": "浪客剑心",
                "year": "2025",
                "region": "日本",
                "type": "电影",
                "genre": "动作, 历史, 剧情",
                "category": "亚洲经典",
                "tags": [
                        "漫改真人",
                        "幕末",
                        "逆刃刀",
                        "不杀"
                ],
                "url": "movie-1988.html",
                "cover": "38.jpg"
        },
        {
                "title": "再见，坏蛋",
                "year": "2026",
                "region": "中国香港 / 中国大陆",
                "type": "电影",
                "genre": "剧情 / 黑色幽默",
                "category": "喜剧治愈",
                "tags": [
                        "杀手",
                        "赎罪",
                        "天台",
                        "救赎",
                        "冯小刚"
                ],
                "url": "movie-1989.html",
                "cover": "39.jpg"
        },
        {
                "title": "我的导演梦",
                "year": "2021",
                "region": "中国大陆",
                "type": "电影",
                "genre": "剧情 / 青春 / 传记",
                "category": "纪录综艺",
                "tags": [
                        "电影学院",
                        "草根追梦",
                        "拍片失败",
                        "自我怀疑",
                        "友情分歧",
                        "终局成片"
                ],
                "url": "movie-1990.html",
                "cover": "40.jpg"
        },
        {
                "title": "玫瑰信贷",
                "year": "2024",
                "region": "中国大陆",
                "type": "电视剧",
                "genre": "商战 / 情感 / 犯罪",
                "category": "纪录综艺",
                "tags": [
                        "金融骗局",
                        "白领生存",
                        "家族债务",
                        "玫瑰图案",
                        "风控调查",
                        "都市阴谋"
                ],
                "url": "movie-1991.html",
                "cover": "41.jpg"
        },
        {
                "title": "大长今",
                "year": "2026",
                "region": "韩国",
                "type": "剧集",
                "genre": "剧情，历史，励志",
                "category": "亚洲经典",
                "tags": [
                        "宫廷",
                        "料理",
                        "医术",
                        "女性传奇"
                ],
                "url": "movie-1992.html",
                "cover": "42.jpg"
        },
        {
                "title": "33：重生奇迹",
                "year": "2026",
                "region": "智利 / 美国",
                "type": "电影",
                "genre": "剧情 / 灾难 / 传记",
                "category": "喜剧治愈",
                "tags": [
                        "真实事件",
                        "矿难",
                        "生存"
                ],
                "url": "movie-1993.html",
                "cover": "43.jpg"
        },
        {
                "title": "夺得美人归",
                "year": "2025",
                "region": "印度",
                "type": "电影",
                "genre": "爱情 / 动作 / 歌舞",
                "category": "动作冒险",
                "tags": [
                        "霸道总裁",
                        "追妻火葬场",
                        "印度风情",
                        "反转"
                ],
                "url": "movie-1994.html",
                "cover": "44.jpg"
        },
        {
                "title": "地灵人劫",
                "year": "2026",
                "region": "中国大陆",
                "type": "电影",
                "genre": "悬疑, 惊悚",
                "category": "日韩精选",
                "tags": [
                        "民俗恐怖",
                        "人性考验",
                        "山村秘事"
                ],
                "url": "movie-1995.html",
                "cover": "45.jpg"
        },
        {
                "title": "镜像人·明日青春",
                "year": "2024",
                "region": "中国大陆",
                "type": "电影",
                "genre": "青春 / 科幻 / 剧情",
                "category": "亚洲经典",
                "tags": [
                        "虚拟现实",
                        "校园",
                        "自我认同",
                        "催泪"
                ],
                "url": "movie-1996.html",
                "cover": "46.jpg"
        },
        {
                "title": "童真成熟时",
                "year": "2024",
                "region": "中国香港",
                "type": "电影",
                "genre": "剧情 / 家庭",
                "category": "日韩精选",
                "tags": [
                        "成长阵痛",
                        "单亲家庭",
                        "时代变迁"
                ],
                "url": "movie-1997.html",
                "cover": "47.jpg"
        },
        {
                "title": "ㄎㄧㄤ爆好麻吉",
                "year": "2024",
                "region": "中国台湾",
                "type": "电影",
                "genre": "喜剧 / 青春 / 友情",
                "category": "日韩精选",
                "tags": [
                        "台式胡闹",
                        "兄弟情",
                        "失控派对",
                        "校园误会",
                        "荒唐任务",
                        "成长告别"
                ],
                "url": "movie-1998.html",
                "cover": "48.jpg"
        },
        {
                "title": "邪恶花园",
                "year": "2025",
                "region": "英国",
                "type": "电影",
                "genre": "奇幻/恐怖/剧情",
                "category": "高分片单",
                "tags": [
                        "植物恐怖",
                        "寓言",
                        "英伦哥特",
                        "贪婪",
                        "生态警告"
                ],
                "url": "movie-1999.html",
                "cover": "49.jpg"
        },
        {
                "title": "我们签约吧",
                "year": "2020",
                "region": "中国大陆",
                "type": "综艺",
                "genre": "真人秀 / 职场",
                "category": "高分片单",
                "tags": [
                        "经纪公司",
                        "选秀",
                        "素人",
                        "星探",
                        "签约"
                ],
                "url": "movie-2000.html",
                "cover": "50.jpg"
        }
];

    function ready(callback) {
        if (document.readyState !== "loading") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    }

    function setupMenu() {
        var button = document.querySelector("[data-menu-toggle]");
        var nav = document.querySelector("[data-site-nav]");
        if (!button || !nav) {
            return;
        }
        button.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    function setupHero() {
        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        var prev = document.querySelector("[data-hero-prev]");
        var next = document.querySelector("[data-hero-next]");
        if (!slides.length) {
            return;
        }

        var index = 0;
        var timer = null;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle("active", i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle("active", i === index);
            });
        }

        function restart() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5000);
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                show(i);
                restart();
            });
        });

        if (prev) {
            prev.addEventListener("click", function () {
                show(index - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                show(index + 1);
                restart();
            });
        }

        restart();
    }

    function setupSearch() {
        var input = document.querySelector("[data-search-input]");
        var category = document.querySelector("[data-category-filter]");
        var sort = document.querySelector("[data-year-sort]");
        var results = document.querySelector("[data-search-results]");
        var status = document.querySelector("[data-search-status]");
        if (!input || !category || !sort || !results || !status) {
            return;
        }

        function render() {
            var keyword = input.value.trim().toLowerCase();
            var selectedCategory = category.value;
            var filtered = movies.filter(function (movie) {
                var haystack = [
                    movie.title,
                    movie.year,
                    movie.region,
                    movie.type,
                    movie.genre,
                    movie.category,
                    movie.tags.join(" ")
                ].join(" ").toLowerCase();
                var keywordMatch = !keyword || haystack.indexOf(keyword) !== -1;
                var categoryMatch = !selectedCategory || movie.category === selectedCategory;
                return keywordMatch && categoryMatch;
            });

            filtered.sort(function (a, b) {
                var ay = parseInt(a.year, 10) || 0;
                var by = parseInt(b.year, 10) || 0;
                return sort.value === "asc" ? ay - by : by - ay;
            });

            var preview = filtered.slice(0, 12);
            results.innerHTML = preview.map(function (movie) {
                return [
                    '<a class="search-result-card" href="' + movie.url + '">',
                    '    <img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
                    '    <span>',
                    '        <strong>' + escapeHtml(movie.title) + '</strong>',
                    '        <span>' + escapeHtml(movie.year + ' · ' + movie.region + ' · ' + movie.type) + '</span>',
                    '    </span>',
                    '</a>'
                ].join("");
            }).join("");

            results.classList.toggle("active", Boolean(keyword || selectedCategory));
            status.textContent = "匹配 " + filtered.length + " 部影片" + (filtered.length > preview.length ? "，显示前 " + preview.length + " 部" : "");
        }

        input.addEventListener("input", render);
        category.addEventListener("change", render);
        sort.addEventListener("change", render);
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function setupPlayers() {
        var shells = Array.prototype.slice.call(document.querySelectorAll("[data-player-shell]"));
        shells.forEach(function (shell) {
            var video = shell.querySelector("video[data-video-src]");
            var button = shell.querySelector("[data-player-start]");
            if (!video || !button) {
                return;
            }

            var initialized = false;

            function initialize() {
                if (initialized) {
                    return Promise.resolve();
                }
                initialized = true;
                var source = video.getAttribute("data-video-src");

                if (video.canPlayType("application/vnd.apple.mpegurl")) {
                    video.src = source;
                    return Promise.resolve();
                }

                if (window.Hls && window.Hls.isSupported()) {
                    var hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(source);
                    hls.attachMedia(video);
                    return Promise.resolve();
                }

                video.src = source;
                return Promise.resolve();
            }

            button.addEventListener("click", function () {
                initialize().then(function () {
                    shell.classList.add("playing");
                    var playPromise = video.play();
                    if (playPromise && typeof playPromise.catch === "function") {
                        playPromise.catch(function () {
                            shell.classList.remove("playing");
                        });
                    }
                });
            });
        });
    }

    ready(function () {
        setupMenu();
        setupHero();
        setupSearch();
        setupPlayers();
    });
}());
