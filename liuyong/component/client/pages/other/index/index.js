Page({
    data: {
    	list:[{
    		name:"日历",icon:'../resources/kind/view.png',opened:true,
    		viewitem:['calendar']
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
