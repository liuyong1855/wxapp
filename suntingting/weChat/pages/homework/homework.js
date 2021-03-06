// pages/homework/homework.js

var app = getApp();
Page({
  data: {
    userInfo: {},
    homew:[
      { img: "../image/5.png", text: "第1个图片"}, 
      { img: "../image/6.png", text: "第2个图片"},
      { img: "../image/7.png", text: "第3个图片"}, 
      { img: "../image/8.png", text: "第4个图片"}
    ],
    typeBtn:'primary',
    typeBtn2:'default',
    btnSize:'mini',
    plain:'false',
    disabled:'false'
  },
  //添加
  btnAdd:function(event){
   var _this = this;

   var oldDate = _this.data.homew;
   var oJson = JSON.parse('{"img":"../image/1.png","text":"第12个图片"}');
   oldDate.push(oJson);

   var oNowDate = {homew: []};
   oNowDate.homew = oldDate;

   _this.setData(oNowDate);
  },
  // 删除
  btnRemove: function (event) {
    var _this = this;
    var oldDate = _this.data.homew;

    var oCurrent = event.currentTarget.dataset.index;
    var oNowDate = {homew:[]};

    oldDate.splice(oCurrent, 1);
    oNowDate.homew = oldDate;

    var oLength = oNowDate.homew.length;
    console.log(oLength)
    if (oLength>1){
      _this.setData(oNowDate);
    }else{
      wx.showToast({
        title: '别删除啦！',
        icon: 'success',
        duration: 2000
      })
    }
  },
  /**生命周期函数--监听页面加载 */
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo){
      // console.log(userInfo)
      that.setData({
        userInfo: userInfo
      });
    });

 

   
  },

  /** 生命周期函数--监听页面初次渲染完成 */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //​显示模态弹窗
    wx.showModal({
      title: '注意',
      content: '我交作业啦！',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定');
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
          wx.showLoading({
            title: '为什么取消？',
            mask: true,
            success: function (result) {
              setTimeout(function () {
                wx.hideLoading()
              }, 1500);
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})