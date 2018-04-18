Page({
  data: {
   
  },
  bindBlur: () => {

  },
  formSubmit : (e) => {
    console.log('form发生了submit事件，携带数据为：' + e.detail.value);
  },
  formReset : () => {
  console.log('form 发生了reset事件');
  }
})