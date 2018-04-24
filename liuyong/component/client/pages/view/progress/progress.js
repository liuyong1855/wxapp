Page({
	data:{
		percent:20
	},
	addPre:function(){
		this.data.percent += 20;
		this.setData({
			percent:this.data.percent
		})
	}
})