Page({
  data:{
    showOne:"",
    showTwo:"display:none",

  },
  clickItem:function(event){
    if (this.data.showTwo == "display:show"){
      this.setData({
        showTwo:"display:none"
      })
    } else{
      this.setData({
       showTwo:"display:show"
      })
    }
  },
  addDel:function(event){
      
  }
})