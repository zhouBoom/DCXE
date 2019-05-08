//index.js
//获取应用实例
import api from '../../utils/api'
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    showModalStatus: false,
    totalExpert: false,
    carExpert: false,
    brandExpert: false,
    num:"",
    carnum:"",
    tipnum:"",
    total:"价格",
    brand:"品牌",
    type:"车型",
    carList:[],
    apibrand:"",
    apitype:"",
    apiprice:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getCarList(this.data.apibrand,this.data.apitype,this.data.apiprice)
  },
  getCarList:function(brand,type,price){
    var _this = this;
    api.get("cars_type?brand="+brand+"&type="+type+"&price="+price, {
    }).then(res => {
      console.log(res)
      _this.setData({
        carList:res.data
      })
    }).catch(err => {
        wx.showToast({
            title: err.message,
            icon: 'none'
        })
    })
  },
  choiceCar: function(e){
    var carid = e.target.dataset.carid
    var carimg = e.target.dataset.carimg
    console.log(carid+"=======")
    wx.navigateTo({
      url:"../choiceCar/choiceCar?carid="+carid+"&carimg="+carimg
    })
  },
  preventD:function(){
    console.log(111)
    return false
  },
  totalList:function(){
    var _this = this;
    var expert = _this.data.totalExpert;
    console.log(expert)
    _this.setData({
      totalExpert : !expert,
      brandExpert : false,
      carExpert :false
    })
  },
  brandList:function(){
    var _this = this;
    var expert = _this.data.brandExpert;
    console.log(expert)
    _this.setData({
      brandExpert : !expert,
      totalExpert : false,
      carExpert :false
    })
  },
  carList:function(){
    var _this = this;
    var expert = _this.data.carExpert;
    console.log(expert)
    _this.setData({
      carExpert : !expert,
      totalExpert : false,
      brandExpert :false
    })
  },
  changeOil:function(e){
    console.log(e);
    this.data.apiprice = e.target.dataset.apitext
    this.getCarList(this.data.apibrand,this.data.apitype,e.target.dataset.apitext)
    this.setData({
      num:e.target.dataset.num,
      total:e.target.dataset.text
    })
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 1000);
  },
  changeType:function(e){
    this.data.apitype = e.target.dataset.apitext
    this.getCarList(this.data.apibrand,e.target.dataset.apitext,this.data.apiprice)
    console.log(e);
    this.setData({
      tipnum:e.target.dataset.tipnum,
      type:e.target.dataset.text
    })
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 1000);
  },
  changeCar:function(e){
    this.data.apibrand = e.target.dataset.apitext
    this.getCarList(e.target.dataset.apitext,this.data.apitype,this.data.apiprice)
    console.log(e);
    this.setData({
      carnum:e.target.dataset.carnum,
      brand:e.target.dataset.text
    })
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 1000);
  },
  previewImg:function(e){
    var current=e.target.dataset.src;
    var urls = [];
    urls.push(current)
		wx.previewImage({
		  	current: current, // 当前显示图片的http链接
		  	urls: urls // 需要预览的图片http链接列表
		})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})
