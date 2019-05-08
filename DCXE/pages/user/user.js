// pages/user/user.js
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg:"",
    nickName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    let token = wx.getStorageSync('token'); 
    api.get("my?token="+token, {
    }).then(res => {
      console.log(res)
      _this.setData({
        userImg:res.data.avatar,
        nickName:res.data.nick_name
      })
    }).catch(err => {
      console.log(err)
        wx.showToast({
            title: err.message,
            icon: 'none'
        })
    })
  },
  bespoke:function(){
    wx.navigateTo({
      url:"../bespoke/bespoke"
    })
  },
  orderRecord:function(){
    wx.navigateTo({
      url:"../orderRecord/orderRecord"
    })
  },
  xy:function(){
    wx.navigateTo({
      url:"../xy/xy"
    })
  },
  kf:function(){
    wx.showModal({
      title: '提示',
      content: '请添加微信：alaya-oto 进行售后',
      showCancel: false,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})