Page({
    data: {
    	list:[{
    		name:"网络",icon:'../resources/kind/view.png',opened:false,
    		viewitem:['request','upload']
    	},{
    		name:"媒体",icon:'../resources/kind/content.png',opened:false,
    		viewitem:['image','record','audio','background','video','record','camera','live-player','live-pusher']
    	},{
            name:"数据存储",icon:'../resources/kind/content.png',opened:false,
            viewitem:['storage']
        }]
    },
    viewtap:function(e){
    	var index = e.currentTarget.dataset.index;
    	var list  = this.data.list;
    	for(var i = 0; i<list.length; i++){
    		if(i == index){
    			list[i].opened = !list[i].opened;
    		}else{
    			list[i].opened = false;
    		}
    	}
    	this.setData({
    		list:list
    	})
    }
})
