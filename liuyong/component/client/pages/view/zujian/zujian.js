Page({
	data:{
		dataid:1
	},
	onReady:function(){
		this.dialog = this.selectComponent('#dialog')
	},
	tap:function(){
		var round = Math.round(Math.random()*1000000);
		this.setData({
			dataid:round
		});
		console.log(round)
		this.dialog.showDialog();
	},
	onsureEvent:function(e){
		console.log(e)
	},
	oncanelEvent:function(e){
		console.log(e)
	},
	userSubmit:function(e){
		console.log(e)
	},
	copy:function(e){
		console.log(e);
	},
	onLoad:function(e){
		var round = Math.round(Math.random()*1000000);
		this.setData({
			dataid:round
		})
		console.log('onLoad',e,round)
	},
	setClipboardData:function(e){
		var round = Math.round(Math.random()*1000000);
		console.log(round)
		wx.setClipboardData({
			data:round.toString(),
			success:(res) =>{
				console.log(res)
			}
		})
	},
	getClipboardData:function(e){
		wx.getClipboardData({
			success:(res) => {
				console.log(res.data)
			}
		})
	},
	onShareAppMessage: function (res) {
		if (res.from === 'button') {
			// 来自页面内转发按钮
			console.log(res.target)
		}
		return {
			title: '自定义转发标题',
			path: '/pages/view/zujian/zujian?id='+this.data.dataid
		}
	}
})