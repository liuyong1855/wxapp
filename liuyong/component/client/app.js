var API = require('./utils/config');
App({
    onLaunch: function () {
    	var that = this;
    	// var three_session = wx.getStorage({
    	// 	key:'three_session',
    	// 	success:res => {
    	// 		console.log('已登录',res.data)
    	// 		if(!res.data){
    	// 			this.wxlogin();
    	// 		}else{
    	// 			this.getSession(res.data.sessionid,res.data.three_session);
    	// 		}
    	// 	},
    	// 	fail:res =>{
    	// 		console.log('登录')
    	// 		this.wxlogin();
    	// 	}
    	// })

    },
    wxlogin:function(){
    	wx.login({
    		success:d => {
    			wx.getSetting({
					success: (res) => {
						if (res.authSetting['scope.userInfo']) {
							console.log('已经授权')
							// 已经授权，可以直接调用 getUserInfo
							wx.getUserInfo({
								success: res => {
									console.log('app.js执行 getUserInfo')
									// 可以将 res 发送给后台解码出 unionId
									this.globalData.userInfo = res.userInfo;
									var rawData = {};
									rawData.code = d.code;
									// rawData.signature = res.signature;
									// rawData.iv = res.iv;
									// rawData.rawData = res.rawData;
									// rawData.encryptedData = res.encryptedData;
									this.login(rawData);
								}
							})
						}else{
							wx.getUserInfo({
								success: res => {
									console.log('app.js执行 getUserInfo2')
									// 可以将 res 发送给后台解码出 unionId
									this.globalData.userInfo = res.userInfo;
									var rawData = {};
									rawData.code = d.code;
									// rawData.signature = res.signature;
									// rawData.iv = res.iv;
									// rawData.rawData = res.rawData;
									// rawData.encryptedData = res.encryptedData;
									this.login(rawData);
								}
							})
						}
					}
				})
    		}
    	})
    },
    login: function (rawData){
    	console.log(rawData)
	    var that = this;
	    wx.showLoading({title: '加载中'});
	    //发起网络请求
		wx.request({
			//mobapi 用户注册
			url:API.userLogin,
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: 'POST',
			data: rawData,
			success: data =>{
				wx.hideLoading();
				var d = data.data;
				console.log(d.data);
				if(d.code==0){
					wx.setStorage({
						key:'three_session',
						data:d.data
					});
					// wx.setStorageSync('sessionid',d.data.sessionid);
					this.getSession(d.data.sessionid,d.data.three_session)
				}
			},
			fail: function(err){
				wx.hideLoading();
			}
		})
	},
	getSession:function(sessionid,three_session){
		wx.request({
			url: API.userInfo,
			header: {
				"Content-Type": "application/x-www-form-urlencoded",
				'Cookie':'ci_session='+sessionid
			},
			method: 'POST',
			data: {
				three_session: three_session
			},
			success: function(data){
				console.log(data.data);
			},
			fail: function(err){
				wx.hideLoading();
			}
		})
	},
	globalData:{
		userInfo:null
	}
})