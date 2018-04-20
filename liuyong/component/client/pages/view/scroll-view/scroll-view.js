var count = 1,scroll = 10;
Page({
	data:{
		scrollItem:'',
		scrollLeft:0
	},
	scroll:function(e){
		console.log('scroll');
	},
	topscroll:function(e){
		console.log('topscroll');
	},
	bottomscroll:function(e){
		console.log('bottomscroll');
	},
	tapbind:function(e){
		count++;
		if(count>3){
			count = 1;
		}

		this.setData({
			scrollItem:'view'+count,
			scrollLeft:scroll+=scroll
		})
	}
})