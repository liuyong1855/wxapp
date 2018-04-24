// pages/components/mask/mask.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是标题'
    },
    content: {
      type: String,
      value: '我是内容内容啊'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMask: function(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    hideMask: function(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    _close: function(){
      this.triggerEvent('close');
    }
  }
})
