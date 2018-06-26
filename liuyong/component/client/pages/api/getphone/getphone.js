var API = require('../../../utils/config');
Page({
	getPhoneNumber: function(e) {
	    console.log('----getPhoneNumber 获取用户手机号----',e)
	    console.log(e.detail.errMsg)
	    console.log(e.detail.iv)
	    console.log(e.detail.encryptedData)
	    var data = {};
	    data.iv = e.detail.iv;
	    data.encryptedData = e.detail.encryptedData;
	    var storagesession = wx.getStorageSync('three_session');
	    console.log(storagesession)
	    data.three_session = storagesession.three_session;
	    wx.request({
	      //mobapi 用户注册
	      url:API.decrypt,
	      header: {
	        "Content-Type": "application/x-www-form-urlencoded",
	        'Cookie':'ci_session='+storagesession.sessionid
	      },
	      method: 'POST',
	      data: data,
	      success: res =>{
	        console.log('----通过 wx.request 解密手机号 返回结果----',res,res.data.data.phoneNumber)
	      },
	      fail: function(err){
	        wx.hideLoading();
	      }
	    })
	}
})