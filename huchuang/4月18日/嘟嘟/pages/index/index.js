Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello MINA!',
    array1: [1, 2, 3, 4, 5,6,7,8,9],
    array2:{
      a:'恒大华府'
    },
    colorArray: ['#3b3b3b', 2, 3, 4, 5, 6, 7, 8, 9],
    count: 1,
    dic:{"key":'value'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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
    console.log('1');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  cellAction:function(e){
  var b = this;
  var a1 = this.data.array1;
  var index = e.currentTarget.dataset.id;
  var value = a1[index];
   this.data.array1 = a1;
    wx.showModal({
      title: '' + value,
      content: '你弄啥？',
      cancelText:'添加',
      confirmText:'删除',
      success:function(res){
        if(res.confirm){
          a1.splice(index,1)
          a1.sort();
          b.setData({
            array1: a1
          })
        }else{
          a1.push(value);
          a1.sort();
          console.log(a1);
          b.setData({
            array1: a1
          })
        }
      }
    })
  }
})