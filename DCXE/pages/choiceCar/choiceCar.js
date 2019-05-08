// pages/choiceCar/choiceCar.js
var amapFile = require('../../utils/amap-wx.js');
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carImage:"",
    carBrand:"",
    MapKey:"c0841e21f091c9797e9a2ecdbb0bbc5c",
    cityName:"",
    addName:"",
    carList:[],
    latitude:"",
    longitude:"",
    addExpert: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
 
    wx.showLoading({
      title: 'Loading...',
    })
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        var markersData = {
          latitude: latitude,//纬度
          longitude: longitude,//经度
          key: that.data.MapKey
        }
        var addArr = [];
        var myAmapFun = new amapFile.AMapWX({ key: that.data.MapKey });
        myAmapFun.getRegeo({
          success: function (data) {
            console.log(data)
            if(data[0].regeocodeData.addressComponent.province!="江苏省"){
              wx.showModal({
                title: '提示',
                content: '当前所在城市暂不支持试驾',
                showCancel: false,
                cancelText: '取消',
                cancelColor: '#000000',
                confirmText: '确定',
                confirmColor: '#3CC51F',
                success: (result) => {
                  if(result.confirm){
                    // wx.switchTab({
                    //   url:"../index/index"
                    // })
                  }
                },
                fail: ()=>{},
                complete: ()=>{}
              });
            }
            that.setData({
              cityName:data[0].regeocodeData.addressComponent.province,
              addName:data[0].regeocodeData.addressComponent.district,
              latitude:data[0].latitude,
              longitude:data[0].longitude
            })
            wx.hideLoading()
          }

        });
      }
    })
    console.log("接收到的参数是str="+options.carid);
    that.data.carImage = options.carimg;
    that.choiceCarList(options.carid)
    console.log(that.data.MapKey)
  },
  choiceCarList:function(type_id){
    var _this = this;
    api.get("cars?type_id="+type_id, {
    }).then(res => {
      console.log(res.data)
      if(res.data.length == 0){
        _this.setData({
          carImage:"https://liudada.top/"+_this.data.carImage,
        })
        wx.showToast({
          title: "附近暂无车辆",
          icon: 'none'
      })
      }else{
        _this.setData({
          carImage:"https://liudada.top/"+_this.data.carImage,
          carBrand: res.data[0].brand+res.data[0].model,
          carList:res.data
        })
      }
    }).catch(err => {
        wx.showToast({
            title: err.msg,
            icon: 'none'
        })
    })
  },
  placeOrder:function(e){
    let id = e.target.dataset.id;
    let lonlat = e.target.dataset.lonlat;
    let city = e.target.dataset.city;
    wx.navigateTo({
      url:"../order/order?id="+id+"&lonlat="+lonlat+"&city="+city
    })
  },
  addChoice:function(){
    var _this = this;
    var expert = _this.data.addExpert;
    console.log(expert)
    _this.setData({
      addExpert : !expert,
    })
  }
})