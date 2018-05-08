Page({
  data: {
    markers:[{
      iconPath:"../../images/adress.png",
      latitude: 39.987867,
      longitude: 116.478641
    }],
    list:["yellow","blue","black","red"],
    myColor:'',
    inputText:'',
    myDel:''
  },
  getColor: function (e) {
    this.setData({
      myColor: e.detail.value
    });
  },
  getDel: function (e) {
    this.setData({
      myDel: e.detail.value
    });
  },
  addColor:function(){
    if (this.data.myColor != '') {
      this.setData({
        list: this.data.list.concat(this.data.myColor),
        myColor: ''
      });
    }else{
      wx.showModal({
        title: '输入为空',
        content: '请输入喜欢的颜色',
        showCancel: false,
        success: function () {
          //执行一些回调函数
        }
      });
    }
  },
  delColor:function(){
    var li = this.data.list;
    var num = li.indexOf(this.data.myDel);
      if (num != -1) {
        this.data.list.splice(num,1);
        this.setData({
          list: this.data.list
        });
      }else{
        wx.showModal({
          title: '无效输入',
          content: '没有对应的颜色，请检查输入',
          showCancel: false,
          success: function () {
            //执行一些回调函数
          }
        });
      }
  }
})
