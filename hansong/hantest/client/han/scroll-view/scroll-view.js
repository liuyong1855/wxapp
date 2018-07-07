
// const app = getApp()
// Page({
//     data: {
//         // userInfo: {},
//         // logged: false,
//         // takeSession: false,
//         // requestResult: ''
//     }


// })

var order = ["demo1", "demo2", "demo3"]

Page({
    data :{
      toView : 'demo2'
    },
    upper : function (e) {
      console.log(e,'upper')
    },
    lower : function (e) {
      console.log(e,'lower')
    },
    scroll: function(e){
      console.log(e, 'scroll')
    },
    scrollToTop : function (e) {
      this.setAction({
        scrollTop : 0
      })
    },
    tap : function (e) {
      for(var i = 0; i < order.length; i++){
        this.setData({
          toView : order[i + 1],
          scrollTop : (i + 1) * 200
        });
        break;
      }
    },
    tapMove : function (e) {
      this.setData({
        scrollTop : this.data.scrollTop + 10
      })
    }
}) 