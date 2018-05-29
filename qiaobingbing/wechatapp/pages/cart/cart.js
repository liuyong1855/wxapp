Page({
  data: {
    test: 'hehe'
  },
  backHome: function() {
    wx.redirectTo({
      url: '../detail/detail',
    })
  }
})