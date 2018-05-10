<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Wxapp extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->appid = $this->config->config['appkey']['appid'];
        $this->appsecret = $this->config->config['appkey']['appsecret'];
    }

	public function departmentList()
	{
        $str  = '{
            "code": "0",
            "msg": "成功",
            "data": [
                {
                    "id": "30318",
                    "name": "心脑血管",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon2.png",
                    "subList": [
                        {
                            "name": "高血压"
                        },
                        {
                            "name": "高血脂"
                        },
                        {
                            "name": "冠心病"
                        }
                    ]
                },
                {
                    "id": "30302",
                    "name": "肝胆用药",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon3.png",
                    "subList": [
                        {
                            "name": "乙肝"
                        },
                        {
                            "name": "肝硬化"
                        },
                        {
                            "name": "黄疸"
                        }
                    ]
                },
                {
                    "id": "301",
                    "name": "隐形眼镜",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon4.png",
                    "subList": [
                        {
                            "name": "透明眼镜"
                        },
                        {
                            "name": "护理液"
                        },
                        {
                            "name": "润滑液"
                        }
                    ]
                },
                {
                    "id": "308",
                    "name": "药妆个护",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon5.png",
                    "subList": [
                        {
                            "name": "沐浴护发"
                        },
                        {
                            "name": "婴幼儿护理"
                        },
                        {
                            "name": "面部眼部"
                        }
                    ]
                },
                {
                    "id": "357",
                    "name": "家用器械",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon6.png",
                    "subList": [
                        {
                            "name": "血压计"
                        },
                        {
                            "name": "血糖测量仪"
                        },
                        {
                            "name": "体温计"
                        }
                    ]
                },
                {
                    "id": "358",
                    "name": "滋补保健",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon7.png",
                    "subList": [
                        {
                            "name": "抗衰老"
                        },
                        {
                            "name": "美容养颜"
                        },
                        {
                            "name": "补血补色"
                        }
                    ]
                },
                {
                    "id": "307",
                    "name": "成人用品",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon13.png",
                    "subList": [
                        {
                            "name": "验孕排卵"
                        },
                        {
                            "name": "安全套"
                        },
                        {
                            "name": "润滑液"
                        }
                    ]
                },
                {
                    "id": "30304",
                    "name": "小儿用药",
                    "pic": "http://yun.dabaitest.7lk.cn/work/resource/image/drugIcon8.png",
                    "subList": [
                        {
                            "name": "小儿感冒"
                        },
                        {
                            "name": "儿童厌食"
                        },
                        {
                            "name": "儿童维矿"
                        }
                    ]
                }
            ]
        }';
        echo $str;
		exit;
	}

    public function getCityList(){
        $str = '{
            "code": 0,
            "msg": "成功",
            "data": [
                {
                    "groups": [
                        {
                            "key": "A",
                            "voList": [
                                {
                                    "id": 3418,
                                    "name": "安庆市"
                                },
                                {
                                    "id": 112,
                                    "name": "安顺"
                                },
                                {
                                    "id": 152,
                                    "name": "安阳"
                                },
                                {
                                    "id": 246,
                                    "name": "鞍山"
                                },
                                {
                                    "id": 259,
                                    "name": "阿拉善盟"
                                },
                                {
                                    "id": 312,
                                    "name": "安康"
                                },
                                {
                                    "id": 324,
                                    "name": "阿坝"
                                },
                                {
                                    "id": 345,
                                    "name": "阿里"
                                },
                                {
                                    "id": 352,
                                    "name": "阿克苏"
                                },
                                {
                                    "id": 353,
                                    "name": "阿拉尔"
                                },
                                {
                                    "id": 3910,
                                    "name": "阿勒泰地区"
                                },
                                {
                                    "id": 396,
                                    "name": "澳门"
                                }
                            ]
                        },
                        {
                            "key": "B",
                            "voList": [
                                {
                                    "id": 52,
                                    "name": "北京"
                                },
                                {
                                    "id": 37,
                                    "name": "蚌埠"
                                },
                                {
                                    "id": 51,
                                    "name": "亳州"
                                },
                                {
                                    "id": 63,
                                    "name": "白银"
                                },
                                {
                                    "id": 99,
                                    "name": "百色"
                                },
                                {
                                    "id": 100,
                                    "name": "北海"
                                },
                                {
                                    "id": 113,
                                    "name": "毕节"
                                },
                                {
                                    "id": 122,
                                    "name": "白沙"
                                },
                                {
                                    "id": 123,
                                    "name": "保亭"
                                },
                                {
                                    "id": 139,
                                    "name": "保定"
                                },
                                {
                                    "id": 213,
                                    "name": "白城"
                                },
                                {
                                    "id": 214,
                                    "name": "白山"
                                },
                                {
                                    "id": 247,
                                    "name": "本溪"
                                },
                                {
                                    "id": 261,
                                    "name": "包头"
                                },
                                {
                                    "id": 3907,
                                    "name": "巴彦淖尔市"
                                },
                                {
                                    "id": 285,
                                    "name": "滨州"
                                },
                                {
                                    "id": 313,
                                    "name": "宝鸡"
                                },
                                {
                                    "id": 325,
                                    "name": "巴中"
                                },
                                {
                                    "id": 354,
                                    "name": "巴音郭楞"
                                },
                                {
                                    "id": 355,
                                    "name": "博尔塔拉"
                                },
                                {
                                    "id": 371,
                                    "name": "保山"
                                }
                            ]
                        },
                        {
                            "key": "C",
                            "voList": [
                                {
                                    "id": 38,
                                    "name": "巢湖"
                                },
                                {
                                    "id": 39,
                                    "name": "池州"
                                },
                                {
                                    "id": 40,
                                    "name": "滁州"
                                },
                                {
                                    "id": 78,
                                    "name": "潮州"
                                },
                                {
                                    "id": 101,
                                    "name": "崇左"
                                },
                                {
                                    "id": 124,
                                    "name": "昌江"
                                },
                                {
                                    "id": 125,
                                    "name": "澄迈县"
                                },
                                {
                                    "id": 140,
                                    "name": "沧州"
                                },
                                {
                                    "id": 141,
                                    "name": "承德"
                                },
                                {
                                    "id": 197,
                                    "name": "长沙"
                                },
                                {
                                    "id": 199,
                                    "name": "常德"
                                },
                                {
                                    "id": 200,
                                    "name": "郴州"
                                },
                                {
                                    "id": 211,
                                    "name": "长春"
                                },
                                {
                                    "id": 223,
                                    "name": "常州"
                                },
                                {
                                    "id": 248,
                                    "name": "朝阳"
                                },
                                {
                                    "id": 262,
                                    "name": "赤峰"
                                },
                                {
                                    "id": 301,
                                    "name": "长治"
                                },
                                {
                                    "id": 322,
                                    "name": "成都"
                                },
                                {
                                    "id": 346,
                                    "name": "昌都"
                                },
                                {
                                    "id": 356,
                                    "name": "昌吉"
                                },
                                {
                                    "id": 372,
                                    "name": "楚雄"
                                },
                                {
                                    "id": 394,
                                    "name": "重庆"
                                }
                            ]
                        },
                        {
                            "key": "D",
                            "voList": [
                                {
                                    "id": 64,
                                    "name": "定西"
                                },
                                {
                                    "id": 79,
                                    "name": "东莞"
                                },
                                {
                                    "id": 126,
                                    "name": "定安县"
                                },
                                {
                                    "id": 127,
                                    "name": "东方"
                                },
                                {
                                    "id": 137,
                                    "name": "儋州"
                                },
                                {
                                    "id": 168,
                                    "name": "大庆"
                                },
                                {
                                    "id": 169,
                                    "name": "大兴安岭"
                                },
                                {
                                    "id": 245,
                                    "name": "大连"
                                },
                                {
                                    "id": 249,
                                    "name": "丹东"
                                },
                                {
                                    "id": 286,
                                    "name": "德州"
                                },
                                {
                                    "id": 287,
                                    "name": "东营"
                                },
                                {
                                    "id": 302,
                                    "name": "大同"
                                },
                                {
                                    "id": 326,
                                    "name": "达州"
                                },
                                {
                                    "id": 327,
                                    "name": "德阳"
                                },
                                {
                                    "id": 373,
                                    "name": "大理"
                                },
                                {
                                    "id": 374,
                                    "name": "德宏"
                                },
                                {
                                    "id": 375,
                                    "name": "迪庆"
                                }
                            ]
                        },
                        {
                            "key": "E",
                            "voList": [
                                {
                                    "id": 182,
                                    "name": "鄂州"
                                },
                                {
                                    "id": 196,
                                    "name": "恩施"
                                },
                                {
                                    "id": 263,
                                    "name": "鄂尔多斯"
                                }
                            ]
                        },
                        {
                            "key": "F",
                            "voList": [
                                {
                                    "id": 41,
                                    "name": "阜阳"
                                },
                                {
                                    "id": 53,
                                    "name": "福州"
                                },
                                {
                                    "id": 80,
                                    "name": "佛山"
                                },
                                {
                                    "id": 102,
                                    "name": "防城港"
                                },
                                {
                                    "id": 234,
                                    "name": "抚州"
                                },
                                {
                                    "id": 250,
                                    "name": "抚顺"
                                },
                                {
                                    "id": 251,
                                    "name": "阜新"
                                }
                            ]
                        },
                        {
                            "key": "G",
                            "voList": [
                                {
                                    "id": 65,
                                    "name": "甘南"
                                },
                                {
                                    "id": 76,
                                    "name": "广州"
                                },
                                {
                                    "id": 98,
                                    "name": "桂林"
                                },
                                {
                                    "id": 103,
                                    "name": "贵港"
                                },
                                {
                                    "id": 111,
                                    "name": "贵阳"
                                },
                                {
                                    "id": 235,
                                    "name": "赣州"
                                },
                                {
                                    "id": 271,
                                    "name": "固原"
                                },
                                {
                                    "id": 276,
                                    "name": "果洛"
                                },
                                {
                                    "id": 328,
                                    "name": "甘孜"
                                },
                                {
                                    "id": 329,
                                    "name": "广安"
                                },
                                {
                                    "id": 330,
                                    "name": "广元"
                                }
                            ]
                        },
                        {
                            "key": "H",
                            "voList": [
                                {
                                    "id": 42,
                                    "name": "淮北"
                                },
                                {
                                    "id": 43,
                                    "name": "淮南"
                                },
                                {
                                    "id": 44,
                                    "name": "黄山"
                                },
                                {
                                    "id": 3401,
                                    "name": "合肥"
                                },
                                {
                                    "id": 81,
                                    "name": "河源"
                                },
                                {
                                    "id": 82,
                                    "name": "惠州"
                                },
                                {
                                    "id": 104,
                                    "name": "河池"
                                },
                                {
                                    "id": 105,
                                    "name": "贺州"
                                },
                                {
                                    "id": 120,
                                    "name": "海口"
                                },
                                {
                                    "id": 142,
                                    "name": "邯郸"
                                },
                                {
                                    "id": 143,
                                    "name": "衡水"
                                },
                                {
                                    "id": 153,
                                    "name": "鹤壁"
                                },
                                {
                                    "id": 167,
                                    "name": "哈尔滨"
                                },
                                {
                                    "id": 170,
                                    "name": "鹤岗"
                                },
                                {
                                    "id": 171,
                                    "name": "黑河"
                                },
                                {
                                    "id": 183,
                                    "name": "黄冈"
                                },
                                {
                                    "id": 184,
                                    "name": "黄石"
                                },
                                {
                                    "id": 201,
                                    "name": "衡阳"
                                },
                                {
                                    "id": 202,
                                    "name": "怀化"
                                },
                                {
                                    "id": 224,
                                    "name": "淮安"
                                },
                                {
                                    "id": 252,
                                    "name": "葫芦岛"
                                },
                                {
                                    "id": 258,
                                    "name": "呼和浩特"
                                },
                                {
                                    "id": 264,
                                    "name": "呼伦贝尔"
                                },
                                {
                                    "id": 277,
                                    "name": "海北"
                                },
                                {
                                    "id": 278,
                                    "name": "海东"
                                },
                                {
                                    "id": 279,
                                    "name": "海南"
                                },
                                {
                                    "id": 280,
                                    "name": "海西"
                                },
                                {
                                    "id": 281,
                                    "name": "黄南"
                                },
                                {
                                    "id": 288,
                                    "name": "菏泽"
                                },
                                {
                                    "id": 314,
                                    "name": "汉中"
                                },
                                {
                                    "id": 357,
                                    "name": "哈密"
                                },
                                {
                                    "id": 358,
                                    "name": "和田"
                                },
                                {
                                    "id": 376,
                                    "name": "红河"
                                },
                                {
                                    "id": 383,
                                    "name": "杭州"
                                },
                                {
                                    "id": 384,
                                    "name": "湖州"
                                },
                                {
                                    "id": 3914,
                                    "name": "海外"
                                }
                            ]
                        },
                        {
                            "key": "J",
                            "voList": [
                                {
                                    "id": 66,
                                    "name": "嘉峪关"
                                },
                                {
                                    "id": 67,
                                    "name": "金昌"
                                },
                                {
                                    "id": 68,
                                    "name": "酒泉"
                                },
                                {
                                    "id": 83,
                                    "name": "江门"
                                },
                                {
                                    "id": 84,
                                    "name": "揭阳"
                                },
                                {
                                    "id": 154,
                                    "name": "济源"
                                },
                                {
                                    "id": 155,
                                    "name": "焦作"
                                },
                                {
                                    "id": 172,
                                    "name": "鸡西"
                                },
                                {
                                    "id": 173,
                                    "name": "佳木斯"
                                },
                                {
                                    "id": 185,
                                    "name": "荆门"
                                },
                                {
                                    "id": 186,
                                    "name": "荆州"
                                },
                                {
                                    "id": 212,
                                    "name": "吉林"
                                },
                                {
                                    "id": 236,
                                    "name": "吉安"
                                },
                                {
                                    "id": 237,
                                    "name": "景德镇"
                                },
                                {
                                    "id": 238,
                                    "name": "九江"
                                },
                                {
                                    "id": 253,
                                    "name": "锦州"
                                },
                                {
                                    "id": 283,
                                    "name": "济南"
                                },
                                {
                                    "id": 289,
                                    "name": "济宁"
                                },
                                {
                                    "id": 303,
                                    "name": "晋城"
                                },
                                {
                                    "id": 304,
                                    "name": "晋中"
                                },
                                {
                                    "id": 385,
                                    "name": "嘉兴"
                                },
                                {
                                    "id": 386,
                                    "name": "金华"
                                },
                                {
                                    "id": 3911,
                                    "name": "九龙"
                                }
                            ]
                        },
                        {
                            "key": "K",
                            "voList": [
                                {
                                    "id": 151,
                                    "name": "开封"
                                },
                                {
                                    "id": 359,
                                    "name": "喀什"
                                },
                                {
                                    "id": 360,
                                    "name": "克拉玛依"
                                },
                                {
                                    "id": 361,
                                    "name": "克孜勒苏"
                                },
                                {
                                    "id": 367,
                                    "name": "昆明"
                                }
                            ]
                        },
                        {
                            "key": "L",
                            "voList": [
                                {
                                    "id": 45,
                                    "name": "六安"
                                },
                                {
                                    "id": 54,
                                    "name": "龙岩"
                                },
                                {
                                    "id": 62,
                                    "name": "兰州"
                                },
                                {
                                    "id": 69,
                                    "name": "临夏"
                                },
                                {
                                    "id": 70,
                                    "name": "陇南"
                                },
                                {
                                    "id": 106,
                                    "name": "来宾"
                                },
                                {
                                    "id": 107,
                                    "name": "柳州"
                                },
                                {
                                    "id": 114,
                                    "name": "六盘水"
                                },
                                {
                                    "id": 128,
                                    "name": "乐东"
                                },
                                {
                                    "id": 129,
                                    "name": "临高县"
                                },
                                {
                                    "id": 130,
                                    "name": "陵水"
                                },
                                {
                                    "id": 144,
                                    "name": "廊坊"
                                },
                                {
                                    "id": 150,
                                    "name": "洛阳"
                                },
                                {
                                    "id": 165,
                                    "name": "漯河"
                                },
                                {
                                    "id": 203,
                                    "name": "娄底"
                                },
                                {
                                    "id": 215,
                                    "name": "辽源"
                                },
                                {
                                    "id": 225,
                                    "name": "连云港"
                                },
                                {
                                    "id": 254,
                                    "name": "辽阳"
                                },
                                {
                                    "id": 290,
                                    "name": "莱芜"
                                },
                                {
                                    "id": 291,
                                    "name": "聊城"
                                },
                                {
                                    "id": 292,
                                    "name": "临沂"
                                },
                                {
                                    "id": 305,
                                    "name": "临汾"
                                },
                                {
                                    "id": 306,
                                    "name": "吕梁"
                                },
                                {
                                    "id": 331,
                                    "name": "乐山"
                                },
                                {
                                    "id": 332,
                                    "name": "凉山"
                                },
                                {
                                    "id": 342,
                                    "name": "泸州"
                                },
                                {
                                    "id": 344,
                                    "name": "拉萨"
                                },
                                {
                                    "id": 347,
                                    "name": "林芝"
                                },
                                {
                                    "id": 370,
                                    "name": "丽江"
                                },
                                {
                                    "id": 377,
                                    "name": "临沧"
                                },
                                {
                                    "id": 387,
                                    "name": "丽水"
                                }
                            ]
                        },
                        {
                            "key": "M",
                            "voList": [
                                {
                                    "id": 46,
                                    "name": "马鞍山"
                                },
                                {
                                    "id": 85,
                                    "name": "茂名"
                                },
                                {
                                    "id": 86,
                                    "name": "梅州"
                                },
                                {
                                    "id": 174,
                                    "name": "牡丹江"
                                },
                                {
                                    "id": 323,
                                    "name": "绵阳"
                                },
                                {
                                    "id": 333,
                                    "name": "眉山"
                                }
                            ]
                        },
                        {
                            "key": "N",
                            "voList": [
                                {
                                    "id": 55,
                                    "name": "南平"
                                },
                                {
                                    "id": 56,
                                    "name": "宁德"
                                },
                                {
                                    "id": 97,
                                    "name": "南宁"
                                },
                                {
                                    "id": 156,
                                    "name": "南阳"
                                },
                                {
                                    "id": 220,
                                    "name": "南京"
                                },
                                {
                                    "id": 226,
                                    "name": "南通"
                                },
                                {
                                    "id": 233,
                                    "name": "南昌"
                                },
                                {
                                    "id": 334,
                                    "name": "南充"
                                },
                                {
                                    "id": 335,
                                    "name": "内江"
                                },
                                {
                                    "id": 348,
                                    "name": "那曲"
                                },
                                {
                                    "id": 368,
                                    "name": "怒江"
                                },
                                {
                                    "id": 388,
                                    "name": "宁波"
                                },
                                {
                                    "id": 3919,
                                    "name": "南雄市"
                                }
                            ]
                        },
                        {
                            "key": "P",
                            "voList": [
                                {
                                    "id": 57,
                                    "name": "莆田"
                                },
                                {
                                    "id": 71,
                                    "name": "平凉"
                                },
                                {
                                    "id": 157,
                                    "name": "平顶山"
                                },
                                {
                                    "id": 166,
                                    "name": "濮阳"
                                },
                                {
                                    "id": 239,
                                    "name": "萍乡"
                                },
                                {
                                    "id": 255,
                                    "name": "盘锦"
                                },
                                {
                                    "id": 336,
                                    "name": "攀枝花"
                                },
                                {
                                    "id": 369,
                                    "name": "普洱"
                                }
                            ]
                        },
                        {
                            "key": "Q",
                            "voList": [
                                {
                                    "id": 58,
                                    "name": "泉州"
                                },
                                {
                                    "id": 72,
                                    "name": "庆阳"
                                },
                                {
                                    "id": 87,
                                    "name": "清远"
                                },
                                {
                                    "id": 108,
                                    "name": "钦州"
                                },
                                {
                                    "id": 115,
                                    "name": "黔东南"
                                },
                                {
                                    "id": 116,
                                    "name": "黔南"
                                },
                                {
                                    "id": 117,
                                    "name": "黔西南"
                                },
                                {
                                    "id": 131,
                                    "name": "琼海"
                                },
                                {
                                    "id": 132,
                                    "name": "琼中"
                                },
                                {
                                    "id": 145,
                                    "name": "秦皇岛"
                                },
                                {
                                    "id": 175,
                                    "name": "七台河"
                                },
                                {
                                    "id": 176,
                                    "name": "齐齐哈尔"
                                },
                                {
                                    "id": 187,
                                    "name": "潜江"
                                },
                                {
                                    "id": 284,
                                    "name": "青岛"
                                },
                                {
                                    "id": 378,
                                    "name": "曲靖"
                                },
                                {
                                    "id": 393,
                                    "name": "衢州"
                                }
                            ]
                        },
                        {
                            "key": "R",
                            "voList": [
                                {
                                    "id": 293,
                                    "name": "日照"
                                },
                                {
                                    "id": 349,
                                    "name": "日喀则"
                                }
                            ]
                        },
                        {
                            "key": "S",
                            "voList": [
                                {
                                    "id": 47,
                                    "name": "宿州"
                                },
                                {
                                    "id": 59,
                                    "name": "三明"
                                },
                                {
                                    "id": 60,
                                    "name": "厦门"
                                },
                                {
                                    "id": 77,
                                    "name": "深圳"
                                },
                                {
                                    "id": 88,
                                    "name": "汕头"
                                },
                                {
                                    "id": 89,
                                    "name": "汕尾"
                                },
                                {
                                    "id": 90,
                                    "name": "韶关"
                                },
                                {
                                    "id": 121,
                                    "name": "三亚"
                                },
                                {
                                    "id": 138,
                                    "name": "石家庄"
                                },
                                {
                                    "id": 158,
                                    "name": "三门峡"
                                },
                                {
                                    "id": 159,
                                    "name": "商丘"
                                },
                                {
                                    "id": 177,
                                    "name": "双鸭山"
                                },
                                {
                                    "id": 178,
                                    "name": "绥化"
                                },
                                {
                                    "id": 188,
                                    "name": "神农架林区"
                                },
                                {
                                    "id": 189,
                                    "name": "十堰"
                                },
                                {
                                    "id": 190,
                                    "name": "随州"
                                },
                                {
                                    "id": 204,
                                    "name": "邵阳"
                                },
                                {
                                    "id": 216,
                                    "name": "四平"
                                },
                                {
                                    "id": 217,
                                    "name": "松原"
                                },
                                {
                                    "id": 221,
                                    "name": "苏州"
                                },
                                {
                                    "id": 227,
                                    "name": "宿迁"
                                },
                                {
                                    "id": 240,
                                    "name": "上饶"
                                },
                                {
                                    "id": 244,
                                    "name": "沈阳"
                                },
                                {
                                    "id": 272,
                                    "name": "石嘴山"
                                },
                                {
                                    "id": 307,
                                    "name": "朔州"
                                },
                                {
                                    "id": 315,
                                    "name": "商洛"
                                },
                                {
                                    "id": 321,
                                    "name": "上海"
                                },
                                {
                                    "id": 337,
                                    "name": "遂宁"
                                },
                                {
                                    "id": 350,
                                    "name": "山南"
                                },
                                {
                                    "id": 362,
                                    "name": "石河子"
                                },
                                {
                                    "id": 389,
                                    "name": "绍兴"
                                }
                            ]
                        },
                        {
                            "key": "T",
                            "voList": [
                                {
                                    "id": 48,
                                    "name": "铜陵"
                                },
                                {
                                    "id": 73,
                                    "name": "天水"
                                },
                                {
                                    "id": 118,
                                    "name": "铜仁"
                                },
                                {
                                    "id": 133,
                                    "name": "屯昌县"
                                },
                                {
                                    "id": 146,
                                    "name": "唐山"
                                },
                                {
                                    "id": 191,
                                    "name": "天门"
                                },
                                {
                                    "id": 218,
                                    "name": "通化"
                                },
                                {
                                    "id": 228,
                                    "name": "泰州"
                                },
                                {
                                    "id": 256,
                                    "name": "铁岭"
                                },
                                {
                                    "id": 265,
                                    "name": "通辽"
                                },
                                {
                                    "id": 294,
                                    "name": "泰安"
                                },
                                {
                                    "id": 300,
                                    "name": "太原"
                                },
                                {
                                    "id": 316,
                                    "name": "铜川"
                                },
                                {
                                    "id": 343,
                                    "name": "天津"
                                },
                                {
                                    "id": 363,
                                    "name": "图木舒克"
                                },
                                {
                                    "id": 364,
                                    "name": "吐鲁番"
                                },
                                {
                                    "id": 3909,
                                    "name": "塔城地区"
                                },
                                {
                                    "id": 390,
                                    "name": "台州"
                                },
                                {
                                    "id": 397,
                                    "name": "台湾"
                                },
                                {
                                    "id": 3912,
                                    "name": "台北市"
                                },
                                {
                                    "id": 3916,
                                    "name": "台中市"
                                },
                                {
                                    "id": 3918,
                                    "name": "台南市"
                                }
                            ]
                        },
                        {
                            "key": "W",
                            "voList": [
                                {
                                    "id": 49,
                                    "name": "芜湖"
                                },
                                {
                                    "id": 74,
                                    "name": "武威"
                                },
                                {
                                    "id": 109,
                                    "name": "梧州"
                                },
                                {
                                    "id": 134,
                                    "name": "万宁"
                                },
                                {
                                    "id": 135,
                                    "name": "文昌"
                                },
                                {
                                    "id": 136,
                                    "name": "五指山"
                                },
                                {
                                    "id": 180,
                                    "name": "武汉"
                                },
                                {
                                    "id": 222,
                                    "name": "无锡"
                                },
                                {
                                    "id": 266,
                                    "name": "乌海"
                                },
                                {
                                    "id": 267,
                                    "name": "乌兰察布市"
                                },
                                {
                                    "id": 273,
                                    "name": "吴忠"
                                },
                                {
                                    "id": 295,
                                    "name": "威海"
                                },
                                {
                                    "id": 296,
                                    "name": "潍坊"
                                },
                                {
                                    "id": 317,
                                    "name": "渭南"
                                },
                                {
                                    "id": 351,
                                    "name": "乌鲁木齐"
                                },
                                {
                                    "id": 365,
                                    "name": "五家渠"
                                },
                                {
                                    "id": 379,
                                    "name": "文山"
                                },
                                {
                                    "id": 391,
                                    "name": "温州"
                                }
                            ]
                        },
                        {
                            "key": "X",
                            "voList": [
                                {
                                    "id": 50,
                                    "name": "宣城"
                                },
                                {
                                    "id": 147,
                                    "name": "邢台"
                                },
                                {
                                    "id": 160,
                                    "name": "新乡"
                                },
                                {
                                    "id": 161,
                                    "name": "信阳"
                                },
                                {
                                    "id": 162,
                                    "name": "许昌"
                                },
                                {
                                    "id": 181,
                                    "name": "仙桃"
                                },
                                {
                                    "id": 192,
                                    "name": "咸宁"
                                },
                                {
                                    "id": 193,
                                    "name": "襄樊"
                                },
                                {
                                    "id": 194,
                                    "name": "孝感"
                                },
                                {
                                    "id": 3906,
                                    "name": "襄阳市"
                                },
                                {
                                    "id": 205,
                                    "name": "湘潭"
                                },
                                {
                                    "id": 206,
                                    "name": "湘西"
                                },
                                {
                                    "id": 229,
                                    "name": "徐州"
                                },
                                {
                                    "id": 241,
                                    "name": "新余"
                                },
                                {
                                    "id": 268,
                                    "name": "锡林郭勒盟"
                                },
                                {
                                    "id": 269,
                                    "name": "兴安盟"
                                },
                                {
                                    "id": 275,
                                    "name": "西宁"
                                },
                                {
                                    "id": 308,
                                    "name": "忻州"
                                },
                                {
                                    "id": 311,
                                    "name": "西安"
                                },
                                {
                                    "id": 318,
                                    "name": "咸阳"
                                },
                                {
                                    "id": 380,
                                    "name": "西双版纳"
                                },
                                {
                                    "id": 395,
                                    "name": "香港"
                                },
                                {
                                    "id": 3908,
                                    "name": "新界"
                                },
                                {
                                    "id": 3915,
                                    "name": "新北市"
                                },
                                {
                                    "id": 3917,
                                    "name": "新竹市"
                                }
                            ]
                        },
                        {
                            "key": "Y",
                            "voList": [
                                {
                                    "id": 91,
                                    "name": "阳江"
                                },
                                {
                                    "id": 92,
                                    "name": "云浮"
                                },
                                {
                                    "id": 110,
                                    "name": "玉林"
                                },
                                {
                                    "id": 179,
                                    "name": "伊春"
                                },
                                {
                                    "id": 195,
                                    "name": "宜昌"
                                },
                                {
                                    "id": 207,
                                    "name": "益阳"
                                },
                                {
                                    "id": 208,
                                    "name": "永州"
                                },
                                {
                                    "id": 209,
                                    "name": "岳阳"
                                },
                                {
                                    "id": 219,
                                    "name": "延边"
                                },
                                {
                                    "id": 230,
                                    "name": "盐城"
                                },
                                {
                                    "id": 231,
                                    "name": "扬州"
                                },
                                {
                                    "id": 242,
                                    "name": "宜春"
                                },
                                {
                                    "id": 243,
                                    "name": "鹰潭"
                                },
                                {
                                    "id": 257,
                                    "name": "营口"
                                },
                                {
                                    "id": 270,
                                    "name": "银川"
                                },
                                {
                                    "id": 282,
                                    "name": "玉树"
                                },
                                {
                                    "id": 297,
                                    "name": "烟台"
                                },
                                {
                                    "id": 309,
                                    "name": "阳泉"
                                },
                                {
                                    "id": 310,
                                    "name": "运城"
                                },
                                {
                                    "id": 319,
                                    "name": "延安"
                                },
                                {
                                    "id": 320,
                                    "name": "榆林"
                                },
                                {
                                    "id": 338,
                                    "name": "雅安"
                                },
                                {
                                    "id": 339,
                                    "name": "宜宾"
                                },
                                {
                                    "id": 366,
                                    "name": "伊犁"
                                },
                                {
                                    "id": 381,
                                    "name": "玉溪"
                                }
                            ]
                        },
                        {
                            "key": "Z",
                            "voList": [
                                {
                                    "id": 61,
                                    "name": "漳州"
                                },
                                {
                                    "id": 75,
                                    "name": "张掖"
                                },
                                {
                                    "id": 93,
                                    "name": "湛江"
                                },
                                {
                                    "id": 94,
                                    "name": "肇庆"
                                },
                                {
                                    "id": 95,
                                    "name": "中山"
                                },
                                {
                                    "id": 96,
                                    "name": "珠海"
                                },
                                {
                                    "id": 119,
                                    "name": "遵义"
                                },
                                {
                                    "id": 148,
                                    "name": "张家口"
                                },
                                {
                                    "id": 149,
                                    "name": "郑州"
                                },
                                {
                                    "id": 163,
                                    "name": "周口"
                                },
                                {
                                    "id": 164,
                                    "name": "驻马店"
                                },
                                {
                                    "id": 198,
                                    "name": "张家界"
                                },
                                {
                                    "id": 210,
                                    "name": "株洲"
                                },
                                {
                                    "id": 232,
                                    "name": "镇江"
                                },
                                {
                                    "id": 274,
                                    "name": "中卫"
                                },
                                {
                                    "id": 298,
                                    "name": "枣庄"
                                },
                                {
                                    "id": 299,
                                    "name": "淄博"
                                },
                                {
                                    "id": 340,
                                    "name": "资阳"
                                },
                                {
                                    "id": 341,
                                    "name": "自贡"
                                },
                                {
                                    "id": 382,
                                    "name": "昭通"
                                },
                                {
                                    "id": 392,
                                    "name": "舟山"
                                }
                            ]
                        }
                    ],
                    "hot": [
                        {
                            "id": 52,
                            "name": "北京"
                        },
                        {
                            "id": 76,
                            "name": "广州"
                        },
                        {
                            "id": 77,
                            "name": "深圳"
                        },
                        {
                            "id": 149,
                            "name": "郑州"
                        },
                        {
                            "id": 180,
                            "name": "武汉"
                        },
                        {
                            "id": 311,
                            "name": "西安"
                        },
                        {
                            "id": 321,
                            "name": "上海"
                        },
                        {
                            "id": 322,
                            "name": "成都"
                        },
                        {
                            "id": 343,
                            "name": "天津"
                        }
                    ]
                }
            ]
        }';
        echo $str;
        exit;
    }

    public function searchClass(){
        $str = '{
            "code": 0,
            "msg": "成功",
            "data": [
                {
                    "id": 303,
                    "name": "科室用药",
                    "commonName": "科室用药",
                    "subList": [
                        {
                            "id": 30318,
                            "name": "心脑血管科",
                            "commonName": "心脑血管科"
                        },
                        {
                            "id": 30302,
                            "name": "肝胆胰腺科",
                            "commonName": "肝胆胰腺科"
                        },
                        {
                            "id": 30316,
                            "name": "抗感染药",
                            "commonName": "抗感染药"
                        },
                        {
                            "id": 30311,
                            "name": "呼吸系统科",
                            "commonName": "呼吸系统科"
                        },
                        {
                            "id": 30312,
                            "name": "精神科",
                            "commonName": "精神科"
                        },
                        {
                            "id": 30308,
                            "name": "神经科",
                            "commonName": "神经科"
                        },
                        {
                            "id": 30303,
                            "name": "风湿免疫科",
                            "commonName": "风湿免疫科"
                        },
                        {
                            "id": 30306,
                            "name": "骨伤科",
                            "commonName": "骨伤科"
                        },
                        {
                            "id": 30313,
                            "name": "男科",
                            "commonName": "男科"
                        },
                        {
                            "id": 30314,
                            "name": "泌尿系统科",
                            "commonName": "泌尿系统科"
                        },
                        {
                            "id": 30310,
                            "name": "内分泌科",
                            "commonName": "内分泌科"
                        },
                        {
                            "id": 30305,
                            "name": "妇科",
                            "commonName": "妇科"
                        },
                        {
                            "id": 30301,
                            "name": "皮肤/性病科",
                            "commonName": "皮肤/性病科"
                        },
                        {
                            "id": 30304,
                            "name": "小儿科",
                            "commonName": "小儿科"
                        },
                        {
                            "id": 30307,
                            "name": "胃肠科",
                            "commonName": "胃肠科"
                        },
                        {
                            "id": 30315,
                            "name": "肿瘤科",
                            "commonName": "肿瘤科"
                        },
                        {
                            "id": 30317,
                            "name": "五官科",
                            "commonName": "五官科"
                        },
                        {
                            "id": 30309,
                            "name": "维生素/矿物质",
                            "commonName": "维生素/矿物质"
                        },
                        {
                            "id": 30320,
                            "name": "补益类药物",
                            "commonName": "补益类药物"
                        },
                        {
                            "id": 30319,
                            "name": "其它药物",
                            "commonName": "其它药物"
                        }
                    ]
                },
                {
                    "id": 358,
                    "name": "保健食品",
                    "commonName": "保健食品",
                    "subList": [
                        {
                            "id": 35801,
                            "name": "增强免疫力",
                            "commonName": "增强免疫力"
                        },
                        {
                            "id": 35802,
                            "name": "改善睡眠",
                            "commonName": "改善睡眠"
                        },
                        {
                            "id": 35803,
                            "name": "缓解体力疲劳",
                            "commonName": "缓解体力疲劳"
                        },
                        {
                            "id": 35804,
                            "name": "提高缺氧耐受力/抗氧化",
                            "commonName": "提高缺氧耐受力/抗氧化"
                        },
                        {
                            "id": 35805,
                            "name": "促进排铅/对辐射危害有辅助保护功能",
                            "commonName": "促进排铅/对辐射危害有辅助保护功能"
                        },
                        {
                            "id": 35806,
                            "name": "增加骨密度/改善生长发育",
                            "commonName": "增加骨密度/改善生长发育"
                        },
                        {
                            "id": 35807,
                            "name": "对化学性肝损伤有辅助保护功能",
                            "commonName": "对化学性肝损伤有辅助保护功能"
                        },
                        {
                            "id": 35808,
                            "name": "缓解视疲劳",
                            "commonName": "缓解视疲劳"
                        },
                        {
                            "id": 35809,
                            "name": "祛痤疮/祛黄褐斑",
                            "commonName": "祛痤疮/祛黄褐斑"
                        },
                        {
                            "id": 35810,
                            "name": "改善皮肤水份/改善皮肤油份",
                            "commonName": "改善皮肤水份/改善皮肤油份"
                        },
                        {
                            "id": 35811,
                            "name": "减肥",
                            "commonName": "减肥"
                        },
                        {
                            "id": 35812,
                            "name": "辅助降血糖/血脂/血脂",
                            "commonName": "辅助降血糖/血脂/血脂"
                        },
                        {
                            "id": 35813,
                            "name": "改善营养性贫血",
                            "commonName": "改善营养性贫血"
                        },
                        {
                            "id": 35814,
                            "name": "辅助改善记忆",
                            "commonName": "辅助改善记忆"
                        },
                        {
                            "id": 35815,
                            "name": "调节肠道菌群/通便",
                            "commonName": "调节肠道菌群/通便"
                        },
                        {
                            "id": 35816,
                            "name": "促进消化",
                            "commonName": "促进消化"
                        },
                        {
                            "id": 35817,
                            "name": "清咽",
                            "commonName": "清咽"
                        },
                        {
                            "id": 35818,
                            "name": "对胃粘膜有辅助保护功能",
                            "commonName": "对胃粘膜有辅助保护功能"
                        },
                        {
                            "id": 35819,
                            "name": "促进泌乳",
                            "commonName": "促进泌乳"
                        },
                        {
                            "id": 35820,
                            "name": "其它保健食品",
                            "commonName": "其它保健食品"
                        }
                    ]
                },
                {
                    "id": 359,
                    "name": "婴幼儿配方奶粉",
                    "commonName": "婴幼儿配方奶粉",
                    "subList": [
                        {
                            "id": 35901,
                            "name": "1段",
                            "commonName": "1段"
                        },
                        {
                            "id": 35902,
                            "name": "2段",
                            "commonName": "2段"
                        },
                        {
                            "id": 35903,
                            "name": "3段",
                            "commonName": "3段"
                        },
                        {
                            "id": 35904,
                            "name": "其它阶段奶粉",
                            "commonName": "其它阶段奶粉"
                        }
                    ]
                },
                {
                    "id": 360,
                    "name": "特殊医学用途配方食品",
                    "commonName": "特殊医学用途配方食品",
                    "subList": [
                        {
                            "id": 36001,
                            "name": "特殊医学用途婴儿配方食品",
                            "commonName": "特殊医学用途婴儿配方食品"
                        },
                        {
                            "id": 36002,
                            "name": "全营养配方食品",
                            "commonName": "全营养配方食品"
                        },
                        {
                            "id": 36003,
                            "name": "特定全营养配方食品",
                            "commonName": "特定全营养配方食品"
                        },
                        {
                            "id": 36004,
                            "name": "非全营养配方食品",
                            "commonName": "非全营养配方食品"
                        },
                        {
                            "id": 36005,
                            "name": "其它特殊医学食品",
                            "commonName": "其它特殊医学食品"
                        }
                    ]
                },
                {
                    "id": 361,
                    "name": "营养食品",
                    "commonName": "营养食品",
                    "subList": [
                        {
                            "id": 36101,
                            "name": "饮料类",
                            "commonName": "饮料类"
                        },
                        {
                            "id": 36102,
                            "name": "糖果制品",
                            "commonName": "糖果制品"
                        },
                        {
                            "id": 36103,
                            "name": "蜂产品",
                            "commonName": "蜂产品"
                        },
                        {
                            "id": 36104,
                            "name": "茶叶及相关制品",
                            "commonName": "茶叶及相关制品"
                        },
                        {
                            "id": 36105,
                            "name": "乳制品",
                            "commonName": "乳制品"
                        },
                        {
                            "id": 36106,
                            "name": "炒货食品及坚果制品",
                            "commonName": "炒货食品及坚果制品"
                        },
                        {
                            "id": 36107,
                            "name": "其它食品",
                            "commonName": "其它食品"
                        },
                        {
                            "id": 36108,
                            "name": "食用油及食糖",
                            "commonName": "食用油及食糖"
                        },
                        {
                            "id": 36109,
                            "name": "新资源食品（新食品原料）",
                            "commonName": "新资源食品（新食品原料）"
                        }
                    ]
                },
                {
                    "id": 305,
                    "name": "养生中药",
                    "commonName": "养生中药",
                    "subList": [
                        {
                            "id": 30501,
                            "name": "中药饮片",
                            "commonName": "中药饮片"
                        },
                        {
                            "id": 30502,
                            "name": "贵细/滋补",
                            "commonName": "贵细/滋补"
                        },
                        {
                            "id": 30503,
                            "name": "药食煲汤料",
                            "commonName": "药食煲汤料"
                        },
                        {
                            "id": 30504,
                            "name": "参类产品",
                            "commonName": "参类产品"
                        },
                        {
                            "id": 30505,
                            "name": "花茶/茶叶",
                            "commonName": "花茶/茶叶"
                        }
                    ]
                },
                {
                    "id": 355,
                    "name": "中药饮片",
                    "commonName": "中药饮片",
                    "subList": [
                        {
                            "id": 35503,
                            "name": "解表药",
                            "commonName": "解表药"
                        },
                        {
                            "id": 35502,
                            "name": "非可调配处方饮片",
                            "commonName": "非可调配处方饮片"
                        },
                        {
                            "id": 35504,
                            "name": "清热药",
                            "commonName": "清热药"
                        },
                        {
                            "id": 35505,
                            "name": "祛风湿药",
                            "commonName": "祛风湿药"
                        },
                        {
                            "id": 35506,
                            "name": "温里药",
                            "commonName": "温里药"
                        },
                        {
                            "id": 35507,
                            "name": "行气药",
                            "commonName": "行气药"
                        },
                        {
                            "id": 35508,
                            "name": "消食药",
                            "commonName": "消食药"
                        },
                        {
                            "id": 35509,
                            "name": "活血化瘀药",
                            "commonName": "活血化瘀药"
                        },
                        {
                            "id": 35510,
                            "name": "安神药",
                            "commonName": "安神药"
                        },
                        {
                            "id": 35511,
                            "name": "补虚药",
                            "commonName": "补虚药"
                        },
                        {
                            "id": 35512,
                            "name": "泻下药",
                            "commonName": "泻下药"
                        },
                        {
                            "id": 35513,
                            "name": "芳香化湿药",
                            "commonName": "芳香化湿药"
                        },
                        {
                            "id": 35514,
                            "name": "利水渗湿药",
                            "commonName": "利水渗湿药"
                        },
                        {
                            "id": 35515,
                            "name": "驱虫药",
                            "commonName": "驱虫药"
                        },
                        {
                            "id": 35516,
                            "name": "止血药",
                            "commonName": "止血药"
                        },
                        {
                            "id": 35517,
                            "name": "化痰止咳平喘药",
                            "commonName": "化痰止咳平喘药"
                        },
                        {
                            "id": 35518,
                            "name": "平肝药",
                            "commonName": "平肝药"
                        },
                        {
                            "id": 35519,
                            "name": "开窍药",
                            "commonName": "开窍药"
                        },
                        {
                            "id": 35520,
                            "name": "收涩药",
                            "commonName": "收涩药"
                        },
                        {
                            "id": 35521,
                            "name": "其它中药饮片",
                            "commonName": "其它中药饮片"
                        }
                    ]
                },
                {
                    "id": 357,
                    "name": "医疗器械",
                    "commonName": "医疗器械",
                    "subList": [
                        {
                            "id": 35705,
                            "name": "辅助器械",
                            "commonName": "辅助器械"
                        },
                        {
                            "id": 35706,
                            "name": "呼吸系统理疗",
                            "commonName": "呼吸系统理疗"
                        },
                        {
                            "id": 35707,
                            "name": "计生用品",
                            "commonName": "计生用品"
                        },
                        {
                            "id": 35708,
                            "name": "检测器械",
                            "commonName": "检测器械"
                        },
                        {
                            "id": 35709,
                            "name": "康复理疗",
                            "commonName": "康复理疗"
                        },
                        {
                            "id": 35710,
                            "name": "其它器械",
                            "commonName": "其它器械"
                        },
                        {
                            "id": 35711,
                            "name": "卫生材料及敷料",
                            "commonName": "卫生材料及敷料"
                        }
                    ]
                },
                {
                    "id": 356,
                    "name": "保健器具",
                    "commonName": "保健器具",
                    "subList": [
                        {
                            "id": 35601,
                            "name": "护具系列",
                            "commonName": "护具系列"
                        },
                        {
                            "id": 35602,
                            "name": "康复辅助器具",
                            "commonName": "康复辅助器具"
                        },
                        {
                            "id": 35603,
                            "name": "其它保健器具",
                            "commonName": "其它保健器具"
                        },
                        {
                            "id": 35604,
                            "name": "家用保健器具",
                            "commonName": "家用保健器具"
                        }
                    ]
                },
                {
                    "id": 307,
                    "name": "计生/成人",
                    "commonName": "计生/成人",
                    "subList": [
                        {
                            "id": 30701,
                            "name": "润滑液",
                            "commonName": "润滑液"
                        },
                        {
                            "id": 30702,
                            "name": "验孕/排卵",
                            "commonName": "验孕/排卵"
                        },
                        {
                            "id": 30703,
                            "name": "女性用品",
                            "commonName": "女性用品"
                        },
                        {
                            "id": 30704,
                            "name": "安全套",
                            "commonName": "安全套"
                        },
                        {
                            "id": 30705,
                            "name": "男性用品",
                            "commonName": "男性用品"
                        }
                    ]
                },
                {
                    "id": 301,
                    "name": "隐形眼镜/护理液",
                    "commonName": "隐形眼镜/护理液",
                    "subList": [
                        {
                            "id": 30101,
                            "name": "隐形眼镜伴侣",
                            "commonName": "隐形眼镜伴侣"
                        },
                        {
                            "id": 30102,
                            "name": "功能眼镜",
                            "commonName": "功能眼镜"
                        },
                        {
                            "id": 30103,
                            "name": "彩色隐形眼镜",
                            "commonName": "彩色隐形眼镜"
                        },
                        {
                            "id": 30104,
                            "name": "透明隐形眼镜",
                            "commonName": "透明隐形眼镜"
                        },
                        {
                            "id": 30105,
                            "name": "护理液",
                            "commonName": "护理液"
                        },
                        {
                            "id": 30106,
                            "name": "隐形眼镜润滑液",
                            "commonName": "隐形眼镜润滑液"
                        },
                        {
                            "id": 30107,
                            "name": "其它隐形眼镜/护理液",
                            "commonName": "其它隐形眼镜/护理液"
                        }
                    ]
                },
                {
                    "id": 363,
                    "name": "消毒产品",
                    "commonName": "消毒产品",
                    "subList": [
                        {
                            "id": 36301,
                            "name": "消毒剂",
                            "commonName": "消毒剂"
                        },
                        {
                            "id": 36302,
                            "name": "卫生用品",
                            "commonName": "卫生用品"
                        },
                        {
                            "id": 36303,
                            "name": "隐形眼镜护理用品",
                            "commonName": "隐形眼镜护理用品"
                        },
                        {
                            "id": 36304,
                            "name": "抗（抑）菌洗剂",
                            "commonName": "抗（抑）菌洗剂"
                        },
                        {
                            "id": 36305,
                            "name": "其它消毒产品",
                            "commonName": "其它消毒产品"
                        }
                    ]
                },
                {
                    "id": 362,
                    "name": "化妆品/护肤品",
                    "commonName": "化妆品/护肤品",
                    "subList": [
                        {
                            "id": 36201,
                            "name": "特殊化妆品",
                            "commonName": "特殊化妆品"
                        },
                        {
                            "id": 36202,
                            "name": "普通化妆品",
                            "commonName": "普通化妆品"
                        },
                        {
                            "id": 36203,
                            "name": "其它化妆品",
                            "commonName": "其它化妆品"
                        }
                    ]
                },
                {
                    "id": 308,
                    "name": "美妆/个人",
                    "commonName": "美妆/个人",
                    "subList": [
                        {
                            "id": 30801,
                            "name": "女性卫生护理",
                            "commonName": "女性卫生护理"
                        },
                        {
                            "id": 30802,
                            "name": "沐浴洗发",
                            "commonName": "沐浴洗发"
                        },
                        {
                            "id": 30803,
                            "name": "婴幼儿护理",
                            "commonName": "婴幼儿护理"
                        },
                        {
                            "id": 30804,
                            "name": "生活用品",
                            "commonName": "生活用品"
                        },
                        {
                            "id": 30805,
                            "name": "面部眼部护理",
                            "commonName": "面部眼部护理"
                        },
                        {
                            "id": 30806,
                            "name": "身体护理",
                            "commonName": "身体护理"
                        },
                        {
                            "id": 30807,
                            "name": "孕妇产妇护理",
                            "commonName": "孕妇产妇护理"
                        },
                        {
                            "id": 30808,
                            "name": "口腔护理",
                            "commonName": "口腔护理"
                        },
                        {
                            "id": 30809,
                            "name": "手脚护理",
                            "commonName": "手脚护理"
                        },
                        {
                            "id": 30810,
                            "name": "季节用品",
                            "commonName": "季节用品"
                        },
                        {
                            "id": 30811,
                            "name": "男性卫生护理",
                            "commonName": "男性卫生护理"
                        },
                        {
                            "id": 30812,
                            "name": "隐形眼镜周边产品",
                            "commonName": "隐形眼镜周边产品"
                        },
                        {
                            "id": 30813,
                            "name": "太阳镜/老花镜/镜框",
                            "commonName": "太阳镜/老花镜/镜框"
                        },
                        {
                            "id": 30814,
                            "name": "其它日用品",
                            "commonName": "其它日用品"
                        }
                    ]
                },
                {
                    "id": 302,
                    "name": "食品（保健食品）",
                    "commonName": "食品（保健食品）",
                    "subList": [
                        {
                            "id": 30201,
                            "name": "女士保健",
                            "commonName": "女士保健"
                        },
                        {
                            "id": 30202,
                            "name": "男士保健",
                            "commonName": "男士保健"
                        },
                        {
                            "id": 30203,
                            "name": "中老年保健",
                            "commonName": "中老年保健"
                        },
                        {
                            "id": 30204,
                            "name": "基础营养",
                            "commonName": "基础营养"
                        },
                        {
                            "id": 30205,
                            "name": "普通食品/粮油",
                            "commonName": "普通食品/粮油"
                        },
                        {
                            "id": 30206,
                            "name": "儿童保健",
                            "commonName": "儿童保健"
                        }
                    ]
                },
                {
                    "id": 304,
                    "name": "美颜瘦身",
                    "commonName": "美颜瘦身",
                    "subList": [
                        {
                            "id": 30401,
                            "name": "美颜瘦身",
                            "commonName": "美颜瘦身"
                        }
                    ]
                },
                {
                    "id": 306,
                    "name": "家用器械",
                    "commonName": "家用器械",
                    "subList": [
                        {
                            "id": 30601,
                            "name": "呼吸道防护",
                            "commonName": "呼吸道防护"
                        },
                        {
                            "id": 30602,
                            "name": "消毒用品",
                            "commonName": "消毒用品"
                        },
                        {
                            "id": 30603,
                            "name": "康复理疗",
                            "commonName": "康复理疗"
                        },
                        {
                            "id": 30604,
                            "name": "眼罩/耳塞",
                            "commonName": "眼罩/耳塞"
                        },
                        {
                            "id": 30605,
                            "name": "护具系列",
                            "commonName": "护具系列"
                        },
                        {
                            "id": 30606,
                            "name": "家用检测",
                            "commonName": "家用检测"
                        },
                        {
                            "id": 30607,
                            "name": "母婴检测",
                            "commonName": "母婴检测"
                        },
                        {
                            "id": 30608,
                            "name": "辅助器具",
                            "commonName": "辅助器具"
                        }
                    ]
                },
                {
                    "id": 352,
                    "name": "器械-其它器械",
                    "commonName": "器械-其它器械",
                    "subList": [
                        {
                            "id": 35201,
                            "name": "其它器械",
                            "commonName": "其它器械"
                        }
                    ]
                },
                {
                    "id": 354,
                    "name": "其它非药品",
                    "commonName": "其它非药品",
                    "subList": [
                        {
                            "id": 35404,
                            "name": "日用品",
                            "commonName": "日用品"
                        }
                    ]
                }
            ]
        }';
        echo $str;
        exit;
    }

}
