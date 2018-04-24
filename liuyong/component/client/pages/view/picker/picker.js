Page({
	data:{
		array: ['美国', '中国', '巴西', '日本'],
		index:0,
		objectArray: [
	      {
	        id: 0,
	        name: '美国'
	      },
	      {
	        id: 1,
	        name: '中国'
	      },
	      {
	        id: 2,
	        name: '巴西'
	      },
	      {
	        id: 3,
	        name: '日本'
	      }
	    ],
	    indexkey:0,
		objectMultiArray: [
	      [
	        {
	          id: 0,
	          name: '无脊柱动物'
	        },
	        {
	          id: 1,
	          name: '脊柱动物'
	        }
	      ], [
	        {
	          id: 0,
	          name: '扁性动物'
	        },
	        {
	          id: 1,
	          name: '线形动物'
	        },
	        {
	          id: 2,
	          name: '环节动物'
	        },
	        {
	          id: 3,
	          name: '软体动物'
	        },
	        {
	          id: 3,
	          name: '节肢动物'
	        }
	      ], [
	        {
	          id: 0,
	          name: '猪肉绦虫'
	        },
	        {
	          id: 1,
	          name: '吸血虫'
	        }
	      ]
	    ],
	    index2:[0,0,0],
	    time:'11:11',
	    date:'2018-1-23',
	    date2:'2018',
	    region: ['湖南省', '娄底市', '双峰县'],
	},
	picker1:function(e){
		console.log(e.detail)
		this.setData({
			index:e.detail.value
		})
	},
	pickercancel1:function(e){
		console.log('pickercancel1')
	},
	picker2:function(e){
		console.log(this.data.index2)
		this.setData({
			index2:this.data.index2
		})
	},
	columnchange:function(e){
		console.log(e.detail);
		this.data.index2[e.detail.column] = e.detail.value;
	},
	time:function(e){
		console.log(e);
		this.setData({
			time:e.detail.value
		})
	},
	date:function(e){
		console.log(e.detail);
		this.setData({
			date:e.detail.value
		})
	},
	date2:function(e){
		this.setData({
			date2:e.detail.value
		})
	},
	region:function(e){
		console.log(e.detail)
		this.setData({
			region:e.detail.value
		})
	}
})