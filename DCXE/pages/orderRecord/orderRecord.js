// pages/orderRecord/orderRecord.js
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyHistory()
  },
  getMyHistory:function(){
    var _this = this;
    let token = wx.getStorageSync('token',token);
    api.get("my/history?token="+token, {
    }).then(res => {
      _this.setData({
        historyList:res.data
      })
    }).catch(err => {
        wx.showToast({
            title: err.message,
            icon: 'none'
        })
    })
  },
})