Page({
	data:{
		text:[]
	},
	onReady:function(){
		var _this = this;
		this.websocket = wx.connectSocket({
			url:"ws://localhost:8181",
	        success:function(e){
	          console.log(e)
	        }
		})
		wx.onSocketOpen(function(res){
			console.log('WebSocket连接已打开！')
			_this.data.text.push('WebSocket连接已打开！')
			_this.setData({
				text:_this.data.text
			})
		})

		wx.onSocketMessage(function(res){
			console.log('收到服务器内容：'+res.data)
			_this.data.text.push('收到服务器内容：'+res.data)
			_this.setData({
				text:_this.data.text
			})
			wx.closeSocket();
		})
		wx.onSocketClose(function(){
			console.log('WebSocket关闭！')
			_this.data.text.push('WebSocket关闭！')
				_this.setData({
					text:_this.data.text
				})
		})
		wx.onSocketError(function(res){
			console.log('WebSocket错误！')
		})
	},
	send:function(){
		var _this = this;
		var data = Math.round(Math.random()*1000);
		wx.sendSocketMessage({
			data:data,
			success:function(d){
				console.log('发送数据成功=>'+data,d)
				_this.data.text.push('发送数据成功=>'+data)
				_this.setData({
					text:_this.data.text
				})
			}
		})
	}
})