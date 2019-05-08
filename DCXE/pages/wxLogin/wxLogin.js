import api from '../../utils/api'
const app = getApp();
Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        code:""
    },
    onLoad: function () {
        var that = this;
        wx.login({
            success(res) {
                console.log(res.code)
            that.data.code = res.code
            }
        })
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            //用户已经授权过
                            wx.switchTab({
                                url: '/pages/index/index'
                            })
                        }
                    });
                }
            }
        })
    },
    bindGetUserInfo: function (e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            var that = this;
            //获取token
            api.post("openid", {
              "code":that.data.code,"raw_data":e.detail.rawData,"signature":e.detail.signature
            }).then(res => {
                console.log(res)
                var token = res.data.token
                //将token存到本地存储中
                wx.setStorageSync('token',token);
                //将当前时间存到本地存储
                let createTime = new Date();
                wx.setStorageSync('createTime',createTime);
            }).catch(err => {
                wx.showToast({
                    title: err.message,
                    icon: 'none'
                })
            })            
            //授权成功后，跳转进入小程序首页
            wx.switchTab({
                url: '/pages/index/index'  
            })
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title:'警告',
                content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel:false,
                confirmText:'返回授权',
                success:function(res){
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”')
                    } 
                }
            })
        }
    },

})