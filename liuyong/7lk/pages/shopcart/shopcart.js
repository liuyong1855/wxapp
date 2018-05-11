var API = require('../../utils/config');
Page({
	data:{
		cartInfo:''
	},
	onLoad:function(){
		this.getCartInfo();
	},
	getCartInfo:function(){
		wx.showLoading({
		  title: '加载中',
		})
		wx.request({
			url:API.cartInfo,
			method:'POST',
			success:d => {
				wx.hideLoading();
				var cartGroups = d.data.data[0].cartGroups;
				for(var i=0;i<cartGroups.length;i++){
					for(var j = 0;j<cartGroups[i].cartItems.length;j++){
						cartGroups[i].cartItems[j].icon = JSON.parse(cartGroups[i].cartItems[j].icon)
					}
				}
				console.log(d.data.data[0])
				this.setData({
					cartInfo:d.data.data[0]
				})
			}
		})
	},
})