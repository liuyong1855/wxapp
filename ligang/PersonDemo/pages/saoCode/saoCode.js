Page({
  data:{
    
  },
  sao:function(e){
    onlyFromCamera: true,
    wx.scanCode({
      // success: (res) => {
      //   console.log(res)
      // }
      success:function(res){
        console.log(res)
      }
    })
  }
})