// pages/components/headerChild.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  },
  relations: {
    '../components/header': {
      type: 'parent',
      linked: function(target){
        console.log('child linked', target);
      },
      linkChanged: function(target){
        console.log('child linkChanged', target);
      },
      unLinked: function(target){
        console.log('child unLinked', target);
      }
    }
  },
  created: function(){
    console.log('child created');
  },
  attached: function(){
    console.log('child attached');
  },
  ready: function(){
    console.log('child ready');
  }
})
