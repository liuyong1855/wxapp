//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/homePageBanner.png',
      '/images/homePageBan.png',
      '/images/homePageCont.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [{ 
      "logoImage":"/images/homePageLogo.png",
      "title":"七乐康",
      "desc":"djskladjlsa",
      "detailImage": "/images/homePagehah_02.jpg",
    }, {
      "logoImage": "/images/homePageLogo.png",
      "title": "七乐康",
      "desc": "djskladjlsa",
      "detailImage": "/images/homePagehah_02.jpg",
    },{
      "logoImage":"/images/homePageLogo.png",
      "title":"七乐康",
      "desc":"djskladjlsa",
      "detailImage":"/images/homePagehah_02.jpg",
      }],
      list:null,
  },

  
  onLoad: function () {
    this.setData({
      text:"01",
    })

    this.getList();
  },

  toDetail:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url:"/pages/join/join",
    })
  },

  getList:function(){
    var self = this;
    wx.request({
      url: 'http://ad.7lk.me/checkVersion',
      data:{"version":"2.17.0","paltform":"iphone"},
      method:'GET',
      success:function(res){
        var jieguo = res.data;
        var some = jieguo["data"][0]["prompt"];
        wx.showToast({
          title: some,
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    })
  },
  
  copy:function(){
    var that = this;
    var lastData = that.data.proList[0];
    wx.setClipboardData({
      data: lastData.title,
      success:function(res){
        wx.showModal({
          title: '复制成功',
          content: lastData.title,
        })
      }
    })
  },

  addDetail: function (e) {
    var self = this;
    var addO = {
      "logoImage": "/images/homePageLogo.png",
      "title": "zuixin七乐康",
      "desc": "cdskhdklshklds",
      "detailImage": "/images/homePagehah_02.jpg",
    }
    self.data.proList.push(addO);
    var update =      self.data.proList;
    self.setData({
      proList: update,
    })

    wx.showToast({
      title: "数据增加成功!",
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  delectDetail: function () {
    var self = this;
    var prolist = self.data.proList;
    prolist.pop();
    self.setData({
      proList: prolist,
    })

    wx.showToast({
      title: "数据删除成功!",
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  updataDetail:function(){
    var that = this;
    for (var i = 0; i < that.data.proList.length; i++) {
      var title = "proList[" + i + "].title";
      var desc ="proList["+i+"].desc"; 
      // 第一步：先用一个变量，把(info[0].gMoney)用字符串拼接起来。
      // 　　第二步：将变量写在[]里面即可。
      that.setData({
        [title]: "7lk哈哈哈哈",
        [desc]:"更新啦变化啦是不是呀！",
      })
    }
  
  },

  selectDetail:function(){
    var that = this;
    var lastData = that.data.proList[0];
  
  wx.showToast({
    title: lastData.title,
    duration: 1000,
    mask: true,
   })
  }
})
