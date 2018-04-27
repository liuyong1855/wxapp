Page({
	data:{
		text:'',
		vsrc:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
		src:'',
		count:0,
		countarr:[0.5,0.8,1.0,1.25,1.5]
	},
	onReady:function(){
		this.videoContext = wx.createVideoContext('video')
	},
	choose:function(e){
		var _this = this;
		wx.chooseVideo({
			sourceType:['album', 'camera'],//album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
			compressed:true,//是否压缩所选的视频源文件，默认值为true，需要压缩
			maxDuration:60,//拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
			success:function(d){
				console.log(d)
				_this.setData({
					text:JSON.stringify(d),
					src:d.tempFilePath
				})
			}
		})
	},
	save:function(e){
		var _this = this;
		wx.saveVideoToPhotosAlbum({
			filePath:_this.data.src,
			success:function(d){
				console.log(d)
				_this.setData({
					text:JSON.stringify(d)
				})
			}
		})
	},
	play:function(e){
		console.log('play',e)
		this.videoContext.play()
	},
	pause:function(e){
		console.log('pause',e)
		this.videoContext.pause()
	},
	seek:function(e){
		console.log('seek',e)
		this.videoContext.seek(20)
	},
	send:function(e){
		var a = this.videoContext.sendDanmu({
			text:'send'+Math.random(),
			color:'#ff0000'
		});
	},
	rate:function(){
		this.data.count++;
		if(this.data.count>5){
			this.data.count = 0;
		}
		this.setData({
			count:this.data.count
		})
		this.videoContext.playbackRate(this.data.countarr[this.data.count])
	},
	full:function(){
		this.videoContext.requestFullScreen();
	},
	exit:function(){
		this.videoContext.exitFullScreen();
	}
})