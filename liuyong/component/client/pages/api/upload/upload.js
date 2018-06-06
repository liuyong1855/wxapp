Page({
	data:{
		src:'',
		// uploadTask:''
	},
	tap:function(e){
		var src = this.data.src;
		var _this = this;
		console.log(e,src);
		wx.chooseImage({
	      count: 1, // 默认9
	      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	      success: function (res) {
	      	console.log(res.tempFilePaths)
	        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
	        var tempFilePaths = res.tempFilePaths[0];
	        const uploadTask = wx.uploadFile({
				url: 'http://wxapp.c88s.com/welcome/uploadFile',
				filePath: tempFilePaths,
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				name: 'userfile',
				success: function(d){
					var data = JSON.parse(d.data);
					console.log(JSON.parse(d.data));
					_this.setData({
						src:data.data
					})
				}
			});
			uploadTask.onProgressUpdate((res)=>{
				console.log('上传进度', res.progress)
    			console.log('已经上传的数据长度', res.totalBytesSent)
    			console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
			})
	      }
	    })
	},
	down:function(e){
		var _this = this;
		const downloadTask = wx.downloadFile({
			url:_this.data.src,
			success:function(e){
				console.log(e);
			}
		})
		downloadTask.onProgressUpdate((res)=>{
			console.log('下载进度', res.progress)
			console.log('已经下载的数据长度', res.totalBytesWritten)
			console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
		})
	}
})