Page({
	data:{
		swiper:[1,2,3,4,5]
	},
	change:function(e){
		console.log('change',e)
	},
	changeend:function(e){
		console.log('changeend',e);
	}
})