import api from '../../utils/api'

Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        code: ""
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
							wx.reLaunch({
								url: '/pages/index/index'  
							})
							
                        }
                    });
                }
            }
        })
    },
    bindGetUserInfo: function (e) {
        console.log(this.data.code)
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            var that = this;
            //获取token
            api.post("/owner/openid", {
              	"code": that.data.code,
              	"raw_data": e.detail.rawData,
              	"signature": e.detail.signature
            }).then(res => {
                console.log("接口成功")
                var token = res.data.token
                // token 存储
                wx.setStorageSync('token',token);
                // 时间存储
                let createTime = new Date();
                wx.setStorageSync('createTime',createTime);
                //授权成功后，跳转进入小程序首页
			    wx.reLaunch({
			    	url: '/pages/index/index' 
			    })
            }).catch(err => {
                wx.showToast({
                    title: '接口未连接！',
                    icon: 'none'
                })
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