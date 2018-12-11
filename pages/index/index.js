//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   console.log('onLoad')
  },
  changeColor:function(e){
    this.setData({
      color:getRandomColor()
    })
  },
})
 

function getRandomColor(){
  var letters='0123456789ABCDEF';
  var color='#';
  for(var i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}
