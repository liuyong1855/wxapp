Page({
	data:{
		src:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
		audiomanger:'',
		text:''
	},
	onReady:function(){
		this.data.audiomanger = wx.createInnerAudioContext();
		this.data.audiomanger.src = this.data.src;
		this.data.audiomanger.autoplay = false;
		this.data.audiomanger.startTime = 2;
		this.data.audiomanger.loop = true;
		this.data.audiomanger.obeyMuteSwitch = false;
		this.data.audiomanger.volume = 1;
		this.data.audiomanger.onCanplay(()=>{
			this.setData({
				text:'可以播放'
			})
			console.log('可以播放')
		})
		this.data.audiomanger.onPlay(()=>{
			this.setData({
				text:'开始播放'
			})
			console.log('开始播放')
		})
		this.data.audiomanger.onPause(()=>{
			this.setData({
				text:'暂停播放'
			})
			console.log('暂停播放')
		})
		this.data.audiomanger.onStop(()=>{
			this.setData({
				text:'停止播放'
			})
			console.log('停止播放')
		})
		this.data.audiomanger.onEnded(()=>{
			this.setData({
				text:'结束播放'
			})
			console.log('结束播放')
		})
		this.data.audiomanger.onSeeking(()=>{
			this.setData({
				text:'Seek播放'
			})
			console.log('Seek播放')
		})
		this.data.audiomanger.onSeeked(()=>{
			this.setData({
				text:'Seek完成'
			})
			console.log('Seek完成')
		})
		this.data.audiomanger.onTimeUpdate((e)=>{
			console.log('TimeUpdate',this.data.audiomanger.currentTime,this.data.audiomanger.duration,this.data.audiomanger.paused,this.data.audiomanger.buffered)
		})

	},
	play:function(e){
		this.data.audiomanger.play();
		console.log('play',e)
	},
	pause:function(e){
		this.data.audiomanger.pause();
		console.log('pause',e)
	},
	stop:function(e){
		this.data.audiomanger.stop();
		console.log('stop',e)
	},
	seek:function(e){
		this.data.audiomanger.seek(20);
		console.log('seek',e)
	}
})