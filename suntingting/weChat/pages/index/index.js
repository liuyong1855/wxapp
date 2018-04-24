//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    btnText:'进入7lk',
    typeN:'primary',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  setHome:function(){
      console.log(1),
    wx.navigateTo({
      url: '../home_7lk/7lk'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      // console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
