//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showMask: {},
  onLoad: () => {
    console.log('onload', '监听页面加载')
  },
  onReady: function () {
    this.mask = this.selectComponent('#mask');
    console.log('onready', '监听页面初次渲染完成')
    console.log(this.mask);
  },
  onShow: () => {
    console.log('onshow', '监听页面显示')
  },
  onHide: () => {
    console.log('onhide', '监听页面隐藏')
  },
  onUnload: () => {
    console.log('onunload', '监听页面卸载')
  },
  onPullDownRefresh: function () {
    console.log('pull down')
  },
  onReachBottom: function () {
    console.log('distance bottom 50')
  },
  onPageScroll: function () {
    console.warn('page scroll')
  },
  onTabItemTap: () => {
    console.log('onTabItemTap', '点击tab')
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  controlMask: function(){
    this.mask.showMask();
  },
  closeHandler: function(){
    console.log('收到子组件信息')
    this.mask.hideMask()
  }
})
