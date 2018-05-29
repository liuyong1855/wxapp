Page({
	data:{
		animationData:{}
	},
	onReady:function(){
		this.animation = wx.createAnimation({
			transformOrigin: "50% 50%",
			duration: 1000,
			timingFunction: "ease",
			delay: 0
		})
		// this.animation.scale(2).rotate(360).step();
		this.animation.translate(100,100).step({duration:2000});
		this.animation.scale(2).step();
		this.animation.rotate(180).step();
		this.animation.width(100).step();
		this.animation.height(100).step();
		this.setData({
			animationData:this.animation.export()
		})
		// this.animation.width('300rpx').opacity(.2).step();
		// this.setData({
		// 	animationData:this.animation.export()
		// })
	}
})