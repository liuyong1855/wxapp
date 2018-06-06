//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
  },
  dataBinTab:function(event){
    console.log(event);
    console.log(event.currentTarget.dataset.method);
    var method = event.currentTarget.dataset.method;
    if(method == 'bind'){
      wx.navigateTo({
        url: '../bind/bind?id=22'
      })
    }else if(method == 'datapro'){
      wx.navigateTo({
        url: '../datapro/datapro?id=33'
      })
    }
  },
  onLoad: function () {

  },

})
