
// 获取应用实例
const app = getApp(); 

Page({
  data : {
      motto : '你好',
      userInfo : {},
      hasUserInfo : false,
      canIUse : wx.canIUse('button.open-type.getUserInfo');
  },
//   事件处理函数
  bindViewTap : function () {
    //   跳转日志页面
      wx.navigateTo({
          url : '../logs/logs'
      })
  },
  onLoad : function () {
    if(app.globalData.userInfo) {
        this.setData({
            userInfo : app.globalData.userInfo,
            hasUserInfo : true
        })
    } else if(this.data.canIUse){
        // 由于getUserInfo 是网络请求，可能会在Page.onLoad 之后onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况的
        app.userInfoReadyCallback = res => {
            this.setData ({
                userInfo : res.userInfo,
                hasUserInfo : true
            })
        }
    } else {
        wx.getUserInfo({
            success : res => {
                app.globalData.userInfo = res.userInfo
                this.setData({
                    userInfo : res.userInfo,
                    hasUserInfo : true
                })
            }
        })
    }
  },
  getUserInfo : function(e) {
      console.log(e);
      app.globalData.userInfo = e. detail.userInfo
      this.setData({
          userInfo : e.detail.userInfo,
          hasUserInfo : true
      })
  }
})