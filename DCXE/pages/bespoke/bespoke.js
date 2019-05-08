// pages/bespoke/bespoke.js
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"",
    brand:"",
    date:"",
    id:"",
    image:"",
    mobile:"",
    model:"",
    name:"",
    order_no:"",
    status:"",
    time:"",
    dataStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderDetail()
  },
  getOrderDetail: function(){
    var _this = this
    let token = wx.getStorageSync('token'); 
    api.get("my/order?token="+token, {
    }).then(res => {
      console.log(res)
      if(res.data != null){
        let status = ""
        if(res.data.status==1){
          status="已预约"
        }else if(res.data.status==2){
          status="已取消"
        }else if(res.data.status==3){
          status="待试驾"
        }else if(res.data.status==4){
          status="已完成"
        }else if(res.data.status==5){
          status="已结束"
        }
        _this.setData({
          address:res.data.address,
          brand:res.data.brand,
          date:res.data.date,
          id:res.data.id,
          image:"https://liudada.top/"+res.data.image,
          head_portrait:"https://liudada.top/"+res.data.head_portrait,
          mobile:res.data.mobile,
          model:res.data.model,
          name:res.data.name,
          order_no:res.data.order_no,
          status:status,
          time:res.data.time,
          dataStatus:true
        })
      }
    }).catch(err => {
      console.log(err)
        wx.showToast({
            title: err.msg,
            icon: 'none'
        })
    })
  },
  calcelDriver:function(){
    let _this = this;
    wx.showModal({
      title: '提示',
      content: '确定取消订单吗？',
      success: function(res) {
      if (res.confirm) {
        console.log('订单取消')
        _this.cancelOrder()
        wx.showLoading({
          title: '加载中...',
          mask: true
        })
        wx.redirectTo({
          url:"../cancelDriver/cancelDriver"
        })
      } else if (res.cancel) {
         console.log('用户点击取消')
      }
      }
      })
    
  },
  cancelOrder:function(){
    var _this = this;
    let token = wx.getStorageSync('token'); 
    api.put("order/cancel?order_id="+_this.data.id+"&token="+token, {
    }).then(res => {
      console.log(res)
    }).catch(err => {
        wx.showToast({
            title: err.message,
            icon: 'none'
        })
    })
  },
  tel:function(){
    wx.makePhoneCall({
      // phoneNumber: this.data.mobile,
      phoneNumber: "13811595852"
    })
  }
})