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
    console.log(index)
  },

  // addDetail:function(e){
  //   var self = this;
  //   var addO = {
  //     "logoImage": "/images/homePageLogo.png",
  //     "title": "zuixin七乐康",
  //     "desc": "cdskhdklshklds",
  //     "detailImage": "/images/homePagehah_02.jpg",
  //   }
    // self.data.proList.push(addO);
    // var update = self.data.proList;
    // self.setData({
    //   proList: update,
    // })

    // wx.showToast({
    //   title: "数据增加成功!",
    //   icon: 'succes',
    //   duration: 1000,
    //   mask: true
    // })
  // }

  // delectDetail:function(){
  //   var self = this;
  //   var prolist = self.data.proList;
  //   prolist.splice(id,0);
  //   self.setData({
  //     proList:prolist,
  //   })

  //   wx.showToast({
  //     title: "数据删除成功!",
  //     icon: 'succes',
  //     duration: 1000,
  //     mask: true
  //   })
  // }

  getList:function(){
    var self = this;
    wx.request({
      url: 'http://ad.7lk.me/checkVersion',
      data:{"version":"2.17.0","paltform":"iphone"},
      method:'GET',
      success:function(res){
        var jieguo = res.data;
        var some = jieguo["data"][0]["prompt"];
        var addO= { "logoImage":"/images/homePageLogo.png",
          "title":"zuixin七乐康",
          "desc":"cdskhdklshklds",
          "detailImage": "/images/homePagehah_02.jpg",}
          self.data.proList.push(addO);
          var update = self.data.proList;
        // self.setData({
        //   funcProList=res.data;
        // })
        self.setData({ 
          list:some,
          proList:update,
        })
        wx.showToast({
          title: some,
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    })
  },

})
