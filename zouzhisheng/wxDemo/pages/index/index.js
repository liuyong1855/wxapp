//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
      "http://www.7lk.com/assets/web/images/homePageLogo.png",
    ] ,
    typeBtn: 'primary',
  },

  addData:function(){
    var oldData=this.data.array;
    oldData.push("http://www.7lk.com/assets/web/images/homePageLogo.png");
    this.data.array = oldData;
    this.setData(
       {
        array: this.data.array
       }
    )
  },

  removeData:function(event){
    var index = event.currentTarget.dataset.index;
    var oldData = this.data.array;
    oldData.splice(index,1);
    this.setData(
      {
        array:oldData
      }
    )
    
  }
})
