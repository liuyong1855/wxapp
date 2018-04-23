Page({
    data: {
    	list:[{
    		name:"视图容器",icon:'../resources/kind/view.png',opened:false,
    		viewitem:['view','scroll-view','swiper','movable-view','cover-view']
    	},{
    		name:"基础内容",icon:'../resources/kind/content.png',opened:false,
    		viewitem:['text','icon','rich-text','progress']
    	},{
    		name:"表单组件",icon:'../resources/kind/form.png',opened:false,
    		viewitem:['button','checkbox','form','input','label','picker','picker-view','radio','slider','switch','textarea']
    	},{
    		name:"导航",icon:'../resources/kind/nav.png',opened:false,
    		viewitem:['navigator']
    	},{
    		name:"媒体组件",icon:'../resources/kind/media.png',opened:false,
    		viewitem:['video','image','audio']
    	},{
    		name:"地图",icon:'../resources/kind/map.png',opened:false,
    		viewitem:['map']
    	},{
    		name:"画布",icon:'../resources/kind/canvas.png',opened:false,
    		viewitem:['canvas']
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
