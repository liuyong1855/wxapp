

const app = getApp();
console.log(app.globalData)

const common = require('../../utils/util');// require不支持绝对路径
console.log(common.formatTime(new Date()))

Page({
  data: {
    test: 'test',
    glb: app.globalData.glb,
    now: '当前时间为' + common.formatTime(new Date()),
    tmp: '',
    list: [
      {name: '小名'},
      {name:'小红'},
      {name: '小刚'},
      {name: '小小'}
    ],
    tplData:{
      name: 'tpl'
    },
    maxArray:[1, 2, 5, 3, 7]
  },
  back1: function() {
    console.log('bindtap')
    console.log(getCurrentPages())
    wx.switchTab({
      url: '../index/index'
    })
  },
  changeTest: function () {
    var self = this;
    this.setData({
      test: 'haha'
    }, function () {
      setTimeout(() => {
        self.setData({
          glb: '点我返回首页'
        })
      }, 1000)
      // app.globalData.glb = 'test'
      // console.log(app.globalData.glb)      
      // console.log('设置成功')
    })
  },
  startRecord: function () {
    var self = this;
    wx.startRecord({
      success: res => {
        var tmpFilePath = res.tempFilePath;
        console.log(tmpFilePath)
        // wx.saveFile({
        //   tmpFilePath: tmpFilePath
        // })
        self.setData({
          tmp: tmpFilePath
        }, function(){
          console.log(self.tmp)
        })
      }
    })
    setTimeout(() => {
      wx.stopRecord();
    }, 1000)
  },
  playVoice: function () {
    var self = this;
    console.log(self.tmp)
    wx.playVoice({
      filePath: self.tmp,
      complete: () => {
        console.log('播放录音完毕')
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '我是自定义的分享标题',
      page: '/pages/detail/detail'
    }
  },
  onGet: function(e){
    console.log('收到子组件信息',e.detail)
  }
})