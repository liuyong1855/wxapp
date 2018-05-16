var API = require('../../utils/config');
Page({
	data:{
		cityList:null,
		char:'',
	},
	onLoad:function(){
		this.getCityList();
	},
	getCityList:function(){
		wx.request({
			url:API.getCityList,
			success:d => {
				console.log(d.data.data[0])
				this.setData({
					cityList:d.data.data[0]
				})
				var query = wx.createSelectorQuery()

			    query.selectAll('.charselectr .char').boundingClientRect(res => {
			    	this.charList = res;
			    }).exec();
			}
		})
	},
	handtouch:function(e){
		this.setData({
			char:e.target.dataset.char
		})
	},
	handmove:function(e){
		let y = e.touches[0].clientY;
		let len = this.charList.length;
		for(let i=0;i<len;i++){
			if(y>=this.charList[i].top&&y<=this.charList[i].bottom){
				this.setData({
					char:this.charList[i].dataset.char
				})
			}
		}
	},
	changeCity:function(e){
		var pages = getCurrentPages();
		var prepage = pages[pages.length - 2];
		prepage.setData({
			city:e.currentTarget.dataset.name
		})
		wx.navigateBack();
		// console.log(e.currentTarget.dataset.name,getCurrentPages())
	}
})