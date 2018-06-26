Page({
	data:{
		imglist:[],
		text:'',
		urlline:''
	},
	onLoad:function(){
		this.setData({
			urlline:'https://y.zdmimg.com/201806/12/5b1e9e2e068d13389.jpg_d200.jpg'
		})
	},
	choose:function(e){
		var _this = this;
		wx.chooseImage({
			count:9,//最多可以选择的图片张数，默认9
			sizeType:['original','compressed'],//original 原图，compressed 压缩图，默认二者都有
			sourceType:['album','camera'],//album 从相册选图，camera 使用相机，默认二者都有
			success:function(e){
				console.log(e)
				_this.data.imglist = _this.data.imglist.concat(e.tempFilePaths)
				_this.setData({
					imglist:_this.data.imglist
				})
			},
			complete:function(e){
				console.log('complete',e)
			}
		})
	},
	preview:function(e){
		var _this = this;
		wx.previewImage({
			// current:'',//当前显示图片的链接，不填则默认为 urls 的第一张
			urls:_this.data.imglist,
			success:function(e){
				console.log('previewImage',e)
			}
		})
	},
	getimage:function(e){
		var _this = this;
		wx.getImageInfo({
			src:_this.data.imglist[0],//图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
			success:function(e){
				console.log(e)
				_this.setData({
					text:JSON.stringify(e)
				})
			}
		})
	},
	save:function(e){
		var _this = this;
		wx.saveImageToPhotosAlbum({
			filePath:_this.data.imglist[0],//图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
			success:function(e){
				console.log(e)
				_this.setData({
					text:JSON.stringify(e)
				})
			}
		})
	},
	saveline:function(e){
		wx.downloadFile({
			url: this.data.urlline, //仅为示例，并非真实的资源
			success: (res) => {
				console.log(res)
				// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
				if (res.statusCode === 200) {
					wx.saveImageToPhotosAlbum({
						filePath:res.tempFilePath,//图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
						success:(e) => {
							console.log(e)
							this.setData({
								text:JSON.stringify(e)
							})
						}
					})
				}
			}
		})
		var _this = this;
		wx.saveImageToPhotosAlbum({
			filePath:_this.data.imglist[0],//图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
			success:function(e){
				console.log(e)
				_this.setData({
					text:JSON.stringify(e)
				})
			}
		})
	}
})