// pages/order/order.js
import api from '../../utils/api'
import util from '../../utils/util'
var lonlat;
var city;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords:"",
    index: 0,
    multiArray: [[],[]],
    multiIndex: [0, 0],
    brand:"",
    cars_link:"",
    content:"",
    image:"",
    model:"",
    name:"",
    province:"",
    trial_driving_fee:"",
    head_portrait:"",
    introduce:"",
    mileage:"",
    bottom_price:"",
    ceiling_price:"",
    itemArr:[],
    carid:"",
    images:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.keywords != "" && options.keywords != null){
      console.log("接收到的参数是str="+options.keywords);
      this.setData({
        keywords:options.keywords
      })
    }
    console.log("接收到的参数是str="+options.id);
    if(options.id != "" && options.id != null){
      this.getCarDetail(options.id)
    }
    lonlat = options.lonlat;
    city = options.city;
    
  },
 
  getCarDetail:function(id){
    var _this = this;
    api.get("cars/"+id, {
    }).then(res => {
      var time = res.data.date
      console.log(time)
      var tArr = [[],[]];
      if(time.length > 0 ){
        for (var index in time) {
          util.pushdArray(tArr,0,time[index].date)
          _this.data.itemArr.push(time[index].time.split(","))
        }
        let timeArray = time[0].time.split(",")
        for (var i in timeArray){
          util.pushdArray(tArr,1,timeArray[i])
        }
        console.log(JSON.stringify(tArr))
        console.log(_this.data.itemArr)
      }
      _this.setData({
        carid:res.data.id,
        brand:res.data.brand,
        cars_link:res.data.cars_link,
        content:"https://liudada.top/"+res.data.content,
        image:"https://liudada.top/"+res.data.image,
        model:res.data.model,
        name:res.data.name,
        province:res.data.province,
        trial_driving_fee:res.data.trial_driving_fee,
        head_portrait:"https://liudada.top/"+res.data.head_portrait,
        introduce:res.data.introduce,
        ceiling_price:res.data.ceiling_price,
        bottom_price:res.data.bottom_price,
        mileage:res.data.mileage,
        multiArray:tArr
      })
    }).catch(err => {
        wx.showToast({
            title: err.message,
            icon: 'none'
        })
    })
  },
 
  login:function(e){
    let _this = this;
    if(_this.data.keywords ==""){
      wx.showToast({
        title: '请选择试驾起始地',
        icon: 'none',
        duration: 1500,
        mask: true,
      });
    }else if(_this.data.multiArray[0][_this.data.multiIndex[0]] == "" || _this.data.multiArray[0][_this.data.multiIndex[0]] == null){
      wx.showToast({
        title: '请选择试驾起始时间',
        icon: 'none',
        duration: 1500,
        mask: true,
      });
    }else{
      _this.placeOrder()
    }
  },
  placeOrder:function(){
    var _this = this;
    let token = wx.getStorageSync('token');
    let carid = this.data.carid
    api.post("order", {
      "token":token,
      "cars_id":_this.data.carid,
      "address":_this.data.keywords,
      "date":_this.data.multiArray[0][_this.data.multiIndex[0]],
      "time":_this.data.multiArray[1][_this.data.multiIndex[1]]
    }).then(res => {
      console.log(res)
      wx.showToast({
        title: res.msg,
        icon: 'success'
      })
      wx.navigateTo({
        url:"../bespoke/bespoke"
      })
    }).catch(err => {
      console.log(err)
        wx.showToast({
            title: err.msg,
            icon: 'none'
        })
        if(err.code==12001){
          wx.navigateTo({
            url:"../login/login?id="+carid+"&keywords="+_this.data.keywords
          })
        }
    })
  },
  addSearch:function(e){
    let carid = this.data.carid
    wx.redirectTo({
      url:"../addSearch/addSearch?carid="+carid+"&lonlat="+lonlat+"&city="+city
    })
  },
  webView:function(e){
    wx.navigateTo({
      url:"../webView/webView?cars_link="+this.data.cars_link
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    let _this = this
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: _this.data.multiArray,
      multiIndex: _this.data.multiIndex
    };
    console.log(data)
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = _this.data.itemArr[0];
            break;
          case 1:
            data.multiArray[1] = _this.data.itemArr[1];
            break;
          case 2:
            data.multiArray[1] = _this.data.itemArr[2];
            break;
          case 3:
            data.multiArray[1] = _this.data.itemArr[3];
            break;
          case 4:
            data.multiArray[1] = _this.data.itemArr[4];
            break;
          case 5:
            data.multiArray[1] = _this.data.itemArr[5];
          break;
          case 4:
            data.multiArray[1] = _this.data.itemArr[6];
          break;
          case 7:
            data.multiArray[1] = _this.data.itemArr[7];
          break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  /**
   * 图片自适应
   * @param {*} e 
   */
  imageLoad: function(e) {
    var $width=e.detail.width,    //获取图片真实宽度
        $height=e.detail.height,
        ratio=$width/$height;    //图片的真实宽高比例
    var viewWidth=718,           //设置图片显示宽度，左右留有16rpx边距
        viewHeight=718/ratio;    //计算的高度值
     var image=this.data.images; 
     //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
     image[e.target.dataset.index]={
        width:viewWidth,
        height:viewHeight
     }
     this.setData({
          images:image
     })
 }
})