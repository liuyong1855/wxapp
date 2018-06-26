var API = require('../../utils/config');
Page({
	data:{
		drugList:[],
		city:'北京1',
		serachkey:'',
		showSearch:false,
		showBtn:false,
		history:[],
		hotList:[],
		HintList:[],
		isFocus:false
	},
	onLoad:function(){
		wx.request({
			url:API.departmentList,
			success:d => {
				console.log(d.data)
				this.setData({
					drugList:d.data.data
				})
			}
		});
	},
	changeCity:function(){
		wx.navigateTo({
			url:'../chooseCity/chooseCity'
		})
	},
	goList:function(){
		wx.navigateTo({
			url:'../searchFinish/searchFinish'
		})
	},
	searchPage:function(){
		wx.request({
			url:API.srarhHot,
			success:d => {
				console.log(d.data.data)
				this.setData({
					hotList:d.data.data
				})
			}
		});
		this.setData({
			showSearch:!this.data.showSearch,
			isFocus:true
		})
		var value = wx.getStorageSync('history');
		if(value!=''){
			this.data.history = value.split(',');
			this.setData({
				history:this.data.history
			})
		}
	},
	canelSearch:function(){
		this.setData({
			showSearch:!this.data.showSearch,
			isFocus:false
		})
	},
	input:function(e){
		if(e.detail.value!=''){
			this.setData({
				showBtn:true,
				serachkey:e.detail.value
			})
		}else{
			this.setData({
				showBtn:false,
				serachkey:e.detail.value
			})
		}
		wx.request({
			url:API.searchHint,
			success:d => {
				this.setData({
					HintList:d.data.data
				})
			}
		});
	},
	del:function(){
		wx.removeStorageSync('history');
		this.setData({
			history:[]
		});
	},
	addSearch:function(){
		if(!this.in_array(this.data.serachkey,this.data.history)){
			this.data.history.push(this.data.serachkey);
			this.setData({
				history:this.data.history
			})
			wx.setStorage({
				key:'history',
				data:this.data.history.join(',')
			})
		}
	},
	in_array:function(stringToSearch, arrayToSearch) {
		for (var s = 0; s < arrayToSearch.length; s++) {
			var thisEntry = arrayToSearch[s].toString();
				if (thisEntry == stringToSearch) {
					return true;
				}
		}
		return false;
	}
})