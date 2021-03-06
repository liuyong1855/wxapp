var API = require('../../utils/config');
Page({
	data:{
		resultList:'',
		page:1,
		loading:true,
		orderBy:6,
		menuIndex:1
	},
	onLoad:function(){
		this.getList()
	},
	getList:function(){
		wx.request({
			url:API.searchResult,
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			data:{
				page:this.data.page,
				orderBy:this.data.orderBy
			},
			method:'POST',
			success:d => {
				wx.hideLoading();
				let result = d.data.data[0];
				console.log(this.data.page,this.data.orderBy)
				if(this.data.page == 1){
					this.data.page++;
					this.setData({
						resultList:result.result,
						page:this.data.page
					})
				}else{
					let list = this.data.resultList;
					list = list.concat(result.result);
					this.data.page++;
					this.setData({
						resultList:list,
						page:this.data.page,
						loading:true
					})
				}
			}
		})
	},
	loadMore:function(){
		this.setData({
			loading:false
		})
		this.getList();
	},
	loadMr:function(){
		wx.showLoading({
		  title: '加载中',
		})
		this.setData({
			page:1,
			orderBy:6,
			menuIndex:1
		})
		this.getList();
	},
	loadPrice:function(){
		wx.showLoading({
		  title: '加载中',
		})
		if(this.data.orderBy==0){
			this.setData({
				page:1,
				orderBy:1,
				menuIndex:2
			})
		}else{
			this.setData({
				page:1,
				orderBy:0,
				menuIndex:2
			})
		}
		this.getList();
	},
	loadSales:function(){
		wx.showLoading({
		  title: '加载中',
		})
		if(this.data.orderBy==4){
			this.setData({
				page:1,
				orderBy:5,
				menuIndex:3
			})
		}else{
			this.setData({
				page:1,
				orderBy:4,
				menuIndex:3
			})
		}
		this.getList();
	}
})