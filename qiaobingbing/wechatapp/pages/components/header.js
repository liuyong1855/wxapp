// pages/components/header.js
var myBehavior = require('../common/behavior');
Component({
  options: {
    multipleSlots: true
  },
  behaviors: [myBehavior],
  relations:{
    '../components/headerChild': {
      type: 'child',
      linked: function(target){
        console.log('linked', target);
      },
      linkChanged: function(target){
        console.log('linkChanged', target);
      },
      unLinked: function(target){
        console.log('unLinked', target);
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: '呵呵呵'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toFather: function(){
      var myEventDetail = {name: 'qbb'} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('sendFater', myEventDetail, myEventOption)
    },
    query: function(){
      // console.log(this.createSelectorQuery().exec())
      console.log(this.selectAllComponents('.header-child'))
      var query = this.createSelectorQuery()
      query.select('.select').boundingClientRect()
      query.selectViewport()
      console.log(this.selectComponent('.header'))
      query.exec(function (res) {
        console.log(res)
      })
      // console.log(this.selectComponent('.header'))
      console.log(this.dataset.drink)
    },
    _getAllChild: function(){
      var nodes = this.getRelationNodes('../components/headerChild');
      // console.log(this.selectComponent('.header-child'))
      // console.log(this.selectAllComponents('.header-child'))
      console.log(nodes);
    }
  },
  created: function () {
    console.log('father created');
  },
  attached: function () {
    console.log('father attached');
  },
  ready: function () {
    this._getAllChild();
    console.log('father self ready function');
  },

  externalClasses: ['mt'],
  
})
