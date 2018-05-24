Component({
	data:{
		isShow:true,
		isCanel:true,
		// title:'标题',
		// content:'内容',
		// canel:'取消',
		// sure:'确定'
	},
	properties:{
		title:{
			type:String,
			value:'标题',
			observer:function(newVal,oldVal){
				console.log(newVal,oldVal)
			}
		},
		content:{
			type:String,
			value:'内容',
			observer:function(newVal,oldVal){
				console.log(newVal,oldVal)
			}
		},
		canel:{
			type:String,
			value:'取消',
			observer:function(newVal,oldVal){
				console.log(newVal,oldVal)
			}
		},
		sure:{
			type:String,
			value:'确定',
			observer:function(newVal,oldVal){
				console.log(newVal,oldVal)
			}
		}
	},
	methods:{
		showDialog:function(e){
			this.setData({
				isShow:!this.data.isShow
			})
		},
		hideDialog:function(e){
			this.setData({
				isShow:!this.data.isShow
			})
		},
		canelbtn:function(){
			console.log('点击取消')
			this.hideDialog();
			var eventDetail = {};
			var eventOption = {};
			// 触发组件绑定事件
			this.triggerEvent('canelEvent',eventDetail);
		},
		surebtn:function(){
			console.log('点击确定')
			this.hideDialog();
			var eventDetail = {};
			var eventOption = {};
			// 触发组件绑定事件
			this.triggerEvent('sureEvent',eventDetail,eventOption);
		}
	}
})