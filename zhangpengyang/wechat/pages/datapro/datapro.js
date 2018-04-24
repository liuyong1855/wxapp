//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
    flag:true,
    upflag:true,
    vo:{},
  },
  dataBindTab:function(event){
    console.log(event);
    var method = event.currentTarget.dataset.method;
    var id = event.currentTarget.dataset.id;
    if(method == 'update'){
      this.data.vo = this.data.list[id];
      this.data.vo['id'] = id;
      this.setData({
        upflag:false,
        vo:this.data.vo
      })
    }else if(method == 'del'){
      this.data.list.splice(id,1);
      this.setData({
        list:this.data.list,
      });
    }
    console.log(this.data.vo);
  },
  /*imgurlBind:function(event){
    console.log(event);
    this.data.vo['img'] = event.detail.value;
    this.setData({
      vo:this.data.vo,
    });
  },
  titleBind:function(event){
    console.log(event);
    this.data.vo['title'] = event.detail.value;
    this.setData({
      vo:this.data.vo,
    });
  },*/
  bindFormSubmit:function(e){
    console.log(e);
    var sub = e.detail.target.dataset.sub;
    if(sub == "close"){
      this.setData({
        upflag:true,
      })
    }else{
      var id = this.data.vo.id;
      this.data.list[id]['title'] = e.detail.value.title;
      this.data.list[id]['desc'] = e.detail.value.desc;
      this.data.list[id]['image'] = e.detail.value.image;
      this.setData({
        list:this.data.list,
        upflag:true,
      });
    }
  },
  onLoad: function (event) {
    this.data.list.push(
        {"title":"沙拉","desc":"简介简介简介简介简介简介简介简介简介简介1111111111111111111111111111111","image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"},
        {"title":"沙拉1","desc":"简介简介简介简介简介简介简介简介简介简介","image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=3865491da1010daedd1473bf1dd11802&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d4e554967920000019ae9df1533.jpg%40900w_1l_2o_100sh.jpg"},
        {"title":"小伙子","desc":"简介简介简介简介简介简介简介简介简介简介","image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445621174&di=267cf94c1e75f5c028593aaab943853f&imgtype=0&src=http%3A%2F%2Fimg07.tooopen.com%2Fimages%2F20170316%2Ftooopen_sy_201956178977.jpg"}
    );
    this.setData({
      list:this.data.list,
      flag:true,
    })
    console.log(this.data);
  },

})
