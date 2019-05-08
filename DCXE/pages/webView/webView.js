// pages/webView/webView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cars_link:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = options.cars_link
    console.log(url)
    this.setData({
      cars_link:url
    })
  },
  loadSucc: function(){
    wx.showToast({
      title: 'SUCCESS',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})