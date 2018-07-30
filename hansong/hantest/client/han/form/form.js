Page({
  data :{
    pickerHidden : true,
    chosen : ""
  },
  formSubmit : function (e) {
    console.log('form 发生了submit事件，携带数据为' , e.detail)
  },
  formReset : function (e){
    console.log("form发生了reset事件，携带的数据为" , e.detail.value);
    this.setData({
      chosen : ''
    })
  }
})