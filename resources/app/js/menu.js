var menus = [{
		"name": "书签",
		"callback": function() {},
		"subMenus": [{
				"subMenuTitle": "涨姿势的地方",
				"name": "知乎",
				"remark": "",
				"callback": function() {
					browser("https://www.zhihu.com/");
				}
			}, {
				"name": "掘金",
				"remark": "",
				"callback": function() {
					browser("http://gold.xitu.io/");
				}
			}, {
				"name": "segmentfault",
				"remark": "",
				"callback": function() {
					browser("https://segmentfault.com/");
				}
			},

			 {
				"name": "网易公开课",
				"remark": "",
				"callback": function() {
					browser("http://open.163.com/");
				}
			},

			 {
				"subMenuTitle": "API",
				"name": "Node.js",
				"remark": "",
				"callback": function() {
					browser("http://nodejs.cn/doc/node/");
				}
			}, {
				"name": "Electron",
				"remark": "桌面应用",
				"callback": function() {
					browser("https://github.com/electron/electron/tree/master/docs-translations/zh-CN");
				}
			}, {
				"name": "Ionic",
				"remark": "移动应用",
				"callback": function() {
					browser("http://ionicframework.com/docs/");
				}
			}, {
				"name": "underscore",
				"remark": "",
				"callback": function() {
					browser("http://www.css88.com/doc/underscore/");
				}
			}, {
				"name": "jQuery",
				"remark": "",
				"callback": function() {
					browser("http://www.php100.com/manual/jquery/");
				}
			}, {
				"subMenuTitle": "前端工具",
				"name": "Web安全色",
				"remark": "",
				"callback": function() {
					browser("http://www.bootcss.com/p/websafecolors/");
				}
			}, {
				"subMenuTitle": "直播",
				"name": "斗鱼",
				"remark": "",
				"callback": function() {
					browser("http://www.douyu.com/directory/all");
				}
			}, {
				"name": "虎牙",
				"remark": "",
				"callback": function() {
					browser("http://www.huya.com/l");
				}
			}, {
				"name": "龙珠",
				"remark": "",
				"callback": function() {
					browser("http://longzhu.com/channels/all?from=chlive");
				}
			}, {
				"subMenuTitle": "搞笑",
				"name": "主播真会玩",
				"remark": "每周五更新",
				"callback": function() {
					browser("http://www.wasu.cn/Agginfo/index/id/51798");
				}
			}, {
				"name": "FA主播粗事了",
				"remark": "",
				"callback": function() {
					browser("http://www.wasu.cn/Agginfo/index/id/50570");
				}
			}, {
				"name": "主播炸了",
				"remark": "",
				"callback": function() {
					browser("http://www.wasu.cn/Agginfo/index/id/49144");
				}
			}, {
				"name": "徐老师来巡山",
				"remark": "",
				"callback": function() {
					browser("http://www.wasu.cn/Agginfo/index/id/51752");
				}
			}, {
				"subMenuTitle": "保持纯真",
				"name": "我长大了会帮妈妈叠衣服了",
				"remark": "",
				"callback": function() {
					browser("http://www.tudou.com/programs/view/0lx9SaYo3Gs/");
				}
			}, {
				"name": "NONONO",
				"remark": "",
				"callback": function() {
					browser("http://my.tv.sohu.com/us/11506685/6787602.shtml");
				}
			}, {
				"name": "你为什么要吻我？！",
				"remark": "",
				"callback": function() {
					browser("http://v.youku.com/v_show/id_XMjY3NDM4NzQ0.html");
				}
			}, {
				"name": "我肚子饿饿了",
				"remark": "",
				"callback": function() {
					browser("http://v.ku6.com/show/7RFDUpPWVPMuv7a8.html");
				}
			}, {
				"subMenuTitle": "发现美",
				"name": "传说中的天空之镜",
				"remark": "",
				"callback": function() {
					browser("http://v.youku.com/v_show/id_XMTE3OTg2MDU2.html");
				}
			}, {
				"subMenuTitle": "生活",
				"name": "手机和生活",
				"remark": "",
				"callback": function() {
					browser("http://v.youku.com/v_show/id_XMjI1MzQyODAw.html");
				}
			}, {
				"name": "为梦想竭尽全力",
				"remark": "",
				"callback": function() {
					browser("http://www.tudou.com/programs/view/OO58c3hBcOA/");
				}
			}, {
				"name": "其实你比自己想象的更美丽",
				"remark": "",
				"callback": function() {
					browser("http://www.iqiyi.com/w_19rrdfbqth.html");
				}
			}, {
				"subMenuTitle": "友情，爱情",
				"name": "闺蜜旅行篇",
				"remark": "",
				"callback": function() {
					browser("http://www.iqiyi.com/v_19rrnwyrj0.html");
				}
			}, {
				"name": "[我爱你].Yo.Te.Amo.Borlly.2011",
				"remark": "",
				"callback": function() {
					browser("http://www.tudou.com/programs/view/OO58c3hBcOA/");
				}
			}, {
				"subMenuTitle": "歌",
				"name": "Love Story遇见Viva La Vida",
				"remark": "",
				"callback": function() {
					browser("http://v.youku.com/v_show/id_XMTAxMDY2ODg4.html");
				}
			}, {
				"name": "Sam Tsui - Love The Way You Lie",
				"remark": "",
				"callback": function() {
					browser("http://www.tudou.com/programs/view/lCR_XB39VbE/");
				}
			},

			{
				"name": "hey soul sister reupload! ukulele styleeee",
				"remark": "",
				"callback": function() {
					browser("http://v.youku.com/v_show/id_XMjI0MDIxMzQ4.html");
				}
			}

		]
	},

	{
		"name": "代办",
		"callback": function() {
			webview("doit", "https://www.wunderlist.com/#/lists/inbox").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "微信",
		"callback": function() {
			webview("wechat", "https://wx.qq.com/").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "邮箱",
		"callback": function() {
			webview("neteasyMail", "https://mail.163.com").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "音乐",
		"callback": function() {
			webview("nemusic", "http://music.163.com/").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "项目",
		"callback": function() {
			webview("teambition", "https://www.teambition.com/projects").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "日历",
		"callback": function() {
			webview("outlookWebCal", "https://outlook.live.com/owa/?path=/calendar/view/Month").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "简书",
		"callback": function() {
			webview("jianshu", "http://www.jianshu.com/").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "片刻",
		"callback": function() {
			webview("pianke", "http://pianke.me/ting/").show().focus();
		},
		"subMenus": []
	},

	{
		"name": "Pocket",
		"callback": function() {
			webview("pocket", "https://getpocket.com/a/").show().focus();
		},
		"subMenus": []
	}


	
];