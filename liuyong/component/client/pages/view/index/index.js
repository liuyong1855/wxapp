Page({
    data: {
        canIUse:wx.canIUse('button.open-type.getUserInfo'),
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
    		viewitem:['video','image','audio','camera','live-player','live-pusher']
    	},{
    		name:"地图",icon:'../resources/kind/map.png',opened:false,
    		viewitem:['map']
    	},{
    		name:"画布",icon:'../resources/kind/canvas.png',opened:false,
    		viewitem:['canvas']
    	},{
            name:"开发能力",icon:'../resources/kind/canvas.png',opened:false,
            viewitem:['open-data','web-view']
        },{
            name:"其他",icon:'../resources/kind/canvas.png',opened:false,
            viewitem:['zujian']
        }]
    },
    onLoad: function(){
        wx.showLoading({title:'loading'})
        // 查看是否授权
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    this.setData({
                        canIUse:false
                    })
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function(res) {
                            console.log(res.userInfo)
                        }
                    })
                }
            }
        })
    },
    onReady: function(){
        wx.hideLoading();
    },
    getUserInfo: function(e) {
        if(e.detail.userInfo){
            console.log(e,e.detail.userInfo)
        }else{
            console.log("拒绝授权")
        }
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
