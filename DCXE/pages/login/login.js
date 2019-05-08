// pages/login/login.js
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCode:true,
    phone:'',//手机号
    code:'',//验证码
    iscode:null,
    codename:"获取验证码",
    miao:"",
    disabled:true,
    codeDisabled:true,
    carid:"",
    keywords:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.carid = options.id
    this.data.keywords = options.keywords
    
  },
  /**
   * 获取验证码
   */
  getPhoneValue:function(e){
    this.setData({
      phone:e.detail.value
    })
    if (e.detail.value.length == 11) {
      this.setData({
        phone:e.detail.value,
        codeDisabled:false
      })
    }else{
      this.setData({
        phone:e.detail.value,
        codeDisabled:true
      })
    }
  },
  getCodeValue: function (e) {
    console.log(e.detail.value)
    if (e.detail.value.length == 4 && this.data.phone.length == 11) {
      this.setData({
        code: e.detail.value,
        disabled:false
      })
    }else{
      this.setData({
        code: e.detail.value,
        disabled:true
      })
    }
    
  },
  getCode:function(){
    var a = this.data.phone;
    var _this = this;
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false;
    }else{
        api.get("sms?mobile="+_this.data.phone, {
        }).then(res => {
          console.log(res)
          _this.setData({
            showCode: !_this.data.showCode
          })
          var num = 60;
          var timer = setInterval(function () {
          num--;
          if (num <= 0) {
            clearInterval(timer);
            var isShow = _this.data.showCode;
            _this.setData({
              miao:"",
              codename: '重新发送',
              showCode: !_this.data.showCode
            })
            } else {
              _this.setData({
                miao:num + "s后重新获取"
              })
            }
          }, 1000)
        }).catch(err => {
            wx.showToast({
                title: err.msg,
                icon: 'none'
            })
        })
       
    }
    
  },
  /**
   * 获取验证码
   */
  getVerificationCode() {
    this.getCode();
    var _this = this
    _this.setData({
      disabled: true
    })
  },
  wxPayPage:function(e){
    console.log(this.data.carid)
    var _this = this;
    let carid = _this.data.carid
    let token = wx.getStorageSync('token');
    api.post("sms/bind", {
      "token":token,
      "mobile":_this.data.phone,
      "code":_this.data.code,
    }).then(res => {
      console.log(res)
      wx.showToast({
        title: "手机号绑定成功,请重新下单",
        icon: 'none'
    })
    wx.redirectTo({
      url:"../order/order?id="+carid+"&keywords="+_this.data.keywords
    })
    }).catch(err => {
      console.log(err)
        wx.showToast({
            title: err.msg,
            icon: 'none'
        })
    })
    
  }
})