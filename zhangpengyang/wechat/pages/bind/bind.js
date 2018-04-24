//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
  },
  dataBinTab:function(event){
    console.log(event);
    console.log(event.currentTarget.dataset.tid);
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  editUserTab:function(event){
    console.log(event.currentTarget.dataset.method);
    var method = event.currentTarget.dataset.method;
    if(method == "add"){
      this.data.list.splice(1,0,
          {"nickName":"沙拉","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"}
      );
      this.setData({
        list:this.data.list,
      });
    }else if(method == "edit"){
      this.data.list.splice(4,1,
          {"nickName":"沙拉222","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"}
      );
      this.setData({
        list:this.data.list,
      });
    }else{
      this.data.list.splice(0,1);
      this.setData({
        list:this.data.list,
      });
    }
  },
  onLoad: function (data) {
    console.log(data.id);
    this.data.list.push(
        {"nickName":"沙拉","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"},
        {"nickName":"沙拉1","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"},
        {"nickName":"沙拉2","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"},
        {"nickName":"沙拉3","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"},
        {"nickName":"小伙子","avatarUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=267cf94c1e75f5c028593aaab943853f&imgtype=0&src=http%3A%2F%2Fimg07.tooopen.com%2Fimages%2F20170316%2Ftooopen_sy_201956178977.jpg"}
    );
    this.setData({
      list:this.data.list,
      userInfo: app.globalData.userInfo,
      elflag: true,
    });
    console.log(this.data);
  },

})
