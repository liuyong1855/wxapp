Page({
	data:{
		src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
		list:[{
	        text: '第 1s 出现的弹幕',
	        color: '#ff0000',
	        time: 4
	      },
	      {
	        text: '第 3s 出现的弹幕',
	        color: '#ff00ff',
	        time: 6
	    }],
	    poster:'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
	},
	play:function(e){
		console.log('play',e)
	},
	pause:function(e){
		console.log('pause',e)
	},
	update:function(e){
		console.log('update',e)
	},
	end:function(e){
		console.log('end',e)
	},
	full:function(e){
		console.log('full',e)
	},
	error:function(e){
		console.log('error',e)
	},
	waiting:function(e){
		console.log('waiting',e)
	}
})