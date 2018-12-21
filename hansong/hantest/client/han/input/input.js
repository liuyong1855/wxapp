
Page({
  data : {
    focus : false,
    inputValue : ''
  },
  bindKeyInput : function (e) {
    this.setData({
      inputValue : e.detail.value
    })
  },
  bindReplaceInput : function (e) {
    console.log('replace' , e.detail.cursor);
    let value = e.detail.value;
    // 光标的位置
    let pos = e.detail.cursor;
    var left;
    // debugger
    if(pos !== -1){
      //  光标在中间
      left = e.detail.value.slice(0, pos);
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    //  不明白打了断点就不灵了
    return{
      value : value.replace(/11/g, 2),
      cursor : pos
    }
    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard : function (e) {
    if (e.detail.value === '123') {
      wx.hideKeyboard()
    }
  }
  

})
