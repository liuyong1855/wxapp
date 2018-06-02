var API = require('./utils/config');
App({
    onLaunch: function () {
    	var that = this;
    	var three_session = wx.getStorage({
    		key:'three_session',
    		success:res => {
    			console.log('已登录',res.data)
    			if(!res.data){
    				this.wxlogin();
    			}else{
    				this.getSession(res.data.sessionid,res.data.three_session);
    			}
    		},
    		fail:res =>{
    			console.log('登录')
    			this.wxlogin();
    		}
    	})

    },
    wxlogin:function(){
    	wx.login({
    		success:d => {
    			console.log(d)
    			this.login(d.code)
    		}
    	})
    },
    login: function (code){
	    var that = this;
	    wx.showLoading({title: '加载中'});
	    //发起网络请求
		wx.request({
			//mobapi 用户注册
			url:API.login_v2,
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: 'POST',
			data: {code:code},
			success: data =>{
				wx.hideLoading();
				var d = data.data;
				console.log(d.data);
				if(d.code==0){
					wx.setStorage({
						key:'three_session',
						data:d.data
					});
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