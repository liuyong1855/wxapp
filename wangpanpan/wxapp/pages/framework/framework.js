//logs.js
// const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    text:'init data',
    num:0,
    array:[{text:'init data'}],
    object:{
    	text:'init data'
    },
    view:'mina',
    staffA:{firstName:'Hulk',lastName:'Hu'},
    staffB:{firstName:'Shang',lastName:'You'},
    staffC:{firstName:'Gideon',lastName:'Lin'},
    objectArray:[
    	{id:5,unique:'unique_5'},
    	{id:4,unique:'unique_4'},
    	{id:3,unique:'unique_3'},
    	{id:2,unique:'unique_2'},
    	{id:1,unique:'unique_1'},
    	{id:0,unique:'unique_0'},
    ],
    numberArray:[1,2,3,4]
  },
  changeText: function () {
    this.setData({
      text:'changed data'
    })
  },
  changeNum:function(){
  	this.data.num = 1
  	this.setData({
  		num:this.data.num
  	})
  },
  changeItemInArray:function(){
  	this.setData({
  		'array[0].text':'changed data'
  	})
  },
  changeItemInObject:function(){
  	this.setData({
  		'object.text':'changed data'
  	})
  },
  addNewField:function(){
  	this.setData({
  		'newField.text':'new data'
  	})
  },
  switch:function(e){
  	const length = this.data.objectArray.length
  	for(let i=0;i<length;++i){
  		const x=Math.floor(Math.random()*length)
  		const y=Math.floor(Math.random()*length)
  		const temp = this.data.objectArray[x]
  		this.data.objectArray[x]=this.data.objectArray[y]
  		this.data.objectArray[y]=temp;
  	}
  	this.setData({
  		objectArray  : this.data.objectArray
  	})
  },
  addToFront:function(e){
  	const length = this.data.objectArray.length
  	this.data.objectArray = [{id:length,unique:'unique_'+length}].concat(this.data.objectArray)
  	this.setData({
  		objectArray : this.data.objectArray
  	})
  },
  addNumberToFront:function(e){
  	this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
  	this.setData({
  		numberArray:this.data.numberArray
  	})
  },
  onReady:function(){
  	// 获得dialog组件
  	this.dialog = this.selectComponent('#dialog');
  },
  showDialog(){
  	this.dialog.showDialog();
  },
  _cancelEvent(){
  	console.log('你点击了取消');
  	this.dialog.hideDialog();
  },
  _confirmEvent(){
  	console.log('你点击了确定');
  	this.dialog.hideDialog();
  }
})
