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
        },{
            name:"位置",icon:'../resources/kind/content.png',opened:false,
            viewitem:['location']
        },{
            name:"界面",icon:'../resources/kind/content.png',opened:false,
            viewitem:['interface','navigation','tabbar无法调跳转']
        },{
            name:"设备",icon:'../resources/kind/content.png',opened:false,
            viewitem:['system']
        },{
            name:"其他",icon:'../resources/kind/content.png',opened:false,
            viewitem:['getphone']
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
