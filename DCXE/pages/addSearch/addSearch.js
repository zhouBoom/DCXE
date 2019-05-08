var amapFile = require('../../utils/amap-wx.js');
var lonlat;
var city;
Page({
  data: {
    tips: {},
    carid:""
  },
  onLoad: function(options){
    this.data.carid = options.carid
    lonlat = options.lonlat;
    city = options.city;
  },
  bindInput: function(e){
    var that = this;
    var keywords = e.detail.value; 
    // var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: 'c0841e21f091c9797e9a2ecdbb0bbc5c'});
    myAmapFun.getInputtips({
      keywords: keywords,
      location: lonlat,
       city: city,
      success: function(data){
        if(data && data.tips){
          that.setData({
            tips: data.tips
          });
        }

      }
    })
  },
  bindSearch: function(e){
    var keywords = e.target.dataset.keywords;
    console.log(keywords)
    var url = '../order/order?keywords=' + keywords +'&id='+ this.data.carid;
    console.log(url)
    wx.redirectTo({
      url: url
    })
  }
})