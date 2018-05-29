Page({
  data:{
    ifShow:"0"
  },
  clickItem:function(e){
    //一次性给所有添加点击事件控制显示隐藏
    var  newId = e.currentTarget.dataset.id;
    if(this.data.ifShow == newId){
      console.log(1111);
      this.setData({
        ifShow:"0"
      })
    }else{
      console.log(2222);
      this.setData({
        ifShow:newId
      })
    }
  },

})