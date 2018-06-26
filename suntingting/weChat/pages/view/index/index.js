// pages/view/index/index.js
Page({
  data: {
    viewTit:[
      { name: '视图容器', src: '../image/view.png', list: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view'], hid: true,},
      { name: '基础内容', src: '../image/content.png', list: ['text', 'icon', 'rich-text', 'progress'], hid: true},
      { name: '表单组件', src: '../image/form.png', list: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'pick-view', 'radio', 'slider', 'switch', 'textarea'], hid: true},
      { name: '导航', src: '../image/nav.png', list: ['navigator'], hid: true },
      { name: '媒体组件', src: '../image/media.png', list: ['video', 'image', 'audio', 'camera', 'live-player', 'live-pusher'], hid: true},
      { name: '地图', src: '../image/map.png', list: ['map'], hid: true},
      { name: '画布', src: '../image/canvas.png', list: ['canvas'], hid: true},
      { name: '开发能力', src: '../image/canvas.png', list: ['open-data', 'web-view'], hid: true},
      { name: '其他', src: '../image/canvas.png', list: ['zujian'], hid: true}
    ]
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  viewTit:function(e){
    var _this = this;
    var oList = _this.data.viewTit;
    
    //布局自定义属性，点击数据可以在e里得到自定义的属性 
    var oIndex = e.currentTarget.dataset.index;
    
    for (var i = 0; i < oList.length; i++){
      if(i==oIndex){
        oList[i].hid = !oList[i].hid;
      }else{
        oList[i].hid = true;
      }
    };
    this.setData({
      viewTit: oList
    })
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})