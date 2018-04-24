Page({
	data:{
		textdom:'<div style="line-height: 60rpx; color: red;">hello world</div>',
		nodedom:[{
			name:'div',
			attrs:{
				class:'divclass',
				style:'color:red;'
			},
			children:[{
				type:'text',
				text:'hello world'
			}]
		}]
	}
})