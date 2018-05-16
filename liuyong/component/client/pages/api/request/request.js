Page({
	data:{
		text:''
	},
	tap:function(e){
		var _this = this;
		wx.request({
			url:'https://mob.c88s.com/user/index',
			success:function(d){
				console.log(d.data)
				_this.setData({
					text:JSON.stringify(d.data)
				})
			}
		})
	}
})