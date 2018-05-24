Page({
	onReady:function(){
		this.dialog = this.selectComponent('#dialog')
	},
	tap:function(){
		this.dialog.showDialog();
	},
	onsureEvent:function(e){
		console.log(e)
	},
	oncanelEvent:function(e){
		console.log(e)
	}
})