var API = require('../../utils/config');
Page({
	data:{
		classList:'',
		classData:'',
		active:0,
	},
	onLoad:function(){
		this.getClassList();
	},
	getClassList:function(){
		wx.request({
			url:API.searchClass,
			success:d => {
				console.log(d.data.data)
				this.setData({
					classList:d.data.data,
					classData:d.data.data[0].subList,
					active:d.data.data[0].id
				})
			}
		})
	},
	changeClass:function(e){
		let id = e.target.dataset.id;
		let data = this.data.classList;
		for(let i=0;i<data.length;i++){
			if(data[i].id==id){
				this.setData({
					classData:data[i].subList,
					active:data[i].id
				})
			}
		}
	},
	goList:function(e){
		let id = e.target.dataset.id;
		console.log(id)
	}
})