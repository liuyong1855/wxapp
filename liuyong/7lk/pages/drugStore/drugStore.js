var API = require('../../utils/config');
Page({
	data:{
		drugList:[]
	},
	onLoad:function(){
		wx.request({
			url:API.departmentList,
			success:d => {
				console.log(d.data)
				this.setData({
					drugList:d.data.data
				})
			}
		})
	},
	changeCity:function(){
		wx.navigateTo({
			url:'../chooseCity/chooseCity'
		})
	},
	goList:function(){
		wx.navigateTo({
			url:'../searchFinish/searchFinish'
		})
	}
})