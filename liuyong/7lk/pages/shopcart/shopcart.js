var API = require('../../utils/config');
Page({
	data:{
		cartInfo:''
	},
	onLoad:function(){
		// wx.hideTabBar()
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
				//全选状态
				var selectall = 1;
				for(var i=0;i<cartGroups.length;i++){
					var itemlen = cartGroups[i].cartItems.length;
					var count = 0;
					for(var j = 0;j<itemlen;j++){
						if(cartGroups[i].cartItems[j].selected==1){
							count++;
						}
						if((cartGroups[i].groupType==1 || cartGroups[i].groupType==2) && cartGroups[i].cartItems[j].selected==0){
							console.log('没有全选中');
							selectall = 0;
						}
						cartGroups[i].cartItems[j].icon = JSON.parse(cartGroups[i].cartItems[j].icon)
					}
					//设置推荐单快选中状态
					if(count==itemlen){
						cartGroups[i].selected = 1;
					}else{
						cartGroups[i].selected = 0;
					}
				}
				d.data.data[0].selected = selectall;
				console.log(d.data.data[0])
				this.setData({
					cartInfo:d.data.data[0]
				})
			}
		})
	},
	check:function(){
		this.getCartInfo();
	}
})