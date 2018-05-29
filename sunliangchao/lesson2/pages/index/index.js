//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    list:[0,1,2,3,4,5],
    className:{pop:'hidden'},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addData:function(){
    var list = this.data.list;

    list.push(list.length+1);
    this.setData({
      list:list
    });
  },
  jianData:function(){
    var list = this.data.list;
    list.pop();
    this.setData({
      list: list
    });
  },
  alert_model:function(){
    wx.showModal({
      title:'提示',
      content:'你好',
      success: function (result){
        console.log(result);
        var msg = '点击了确定';
        if (result.cancel){
          msg = '点击了取消';
        }
        wx.showToast({
          title: msg,
        })
      }
    });
  },
  hidden_pop:function(){
    var className = this.data.className;
    className.pop = 'hidden';

    this.setData({
      className: className
    });
    console.log(this.data);
  },
  alert_pop:function(e){
    var className = this.data.className;
    className.pop = '';

    this.setData({
      className: className
    });
    console.log(this.data);
  },
  onLoad: function () {

  }
})
