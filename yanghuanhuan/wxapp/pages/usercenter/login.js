//logs.js
const util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    email:'',
    password:''
  },
  onLoad: function () {
      
  },
  onShow:function(){

  },
  emailInput:function(e){
    this.setData({
      email:e.detail.value
    });
    console.log(this.data.email);
  },
  goto:function(){
    wx.navigateTo({
      url:"../../pages/register/register"
    })
  },
  passwordInput:function(e){
    this.setData({
      password:e.detail.value
    });
    console.log(this.data.password);
  },
  login:function(){
    wx: wx.showToast({
      title: '登录中',
      icon: 'loading',
      duration: 10000
    });
    wx.request({
      url: 'https://api.gugujiankong.com/account/Login?email=' + this.data.email + '&password=' + this.data.password,
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        wx.hideToast();
        if(res.data.loginStatus==1){
          wx.switchTab({
            url: '../../pages/index/index',
            success: function () {
              console.log('跳转之后执行的回调函数')
            }
          });
        }else{
          wx.showModal({
            title:'登录失败',
            content:'请检查您填写的用户信息',
            showCancel:false,
            success:function(){
              //执行一些回调函数
            }
          });
          
        }
      }
      
    })
  }
})
