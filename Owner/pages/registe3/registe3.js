// pages/registe3/registe3.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// 手机号
		shouji: '',
		shoujival: '',
		sjs: false,
		// 验证码
		showCode: false,
		code: '', //验证码
		iscode: null,
		codename: "获取验证码",
		miao: "",
		codeDisabled: true,
		yzmfs: false
	},


	// 手机号
	shoujihao(e) {
		this.setData({
			shouji: e.detail.value
		});
		var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
		if (reg.test(e.detail.value)) {
			this.setData({
				shouji: e.detail.value,
				sjs: true
			})
		} else {
			this.setData({
				shoujival: ''
			})
			wx.showToast({
				title: '输入的手机号码有误！',
				icon: 'none'
			})
		}
	},
	// 验证码
	getCodeValue: function (e) {
		this.setData({
			code: e.detail.value,
			disabled: false
		})
	},
	getVerificationCode() {
		var _this = this
		console.log( _this.data.shouji)
		if (this.data.sjs = false) {
			wx.showToast({
				title: '请输入您的手机号！',
				icon: 'none'
			})
		} else {
			api.get("/sms?mobile=" + _this.data.shouji, {}).then(res => {
				_this.setData({
					yzmfs: true,
					showCode: true
				})
				console.log("成功")
				var num = 60;
				var timer = setInterval(function () {
					num--;
					if (num <= 0) {
						clearInterval(timer);
						_this.setData({
							miao: "",
							yzmfs: false,
							codename: '重新发送'
						})
					} else {
						_this.setData({
							miao: num + "s后重新获取"
						})
					}
				}, 1000)
			}).catch(err => {
				wx.showToast({
					title: '接口错误！',
					icon: 'none'
				})
			})
		}
	},

	// 跳转下一页
	gonext() {

		// 判断验证码绑定接口
		var _this = this;
		//获取token
		const tokens = wx.getStorageSync('token');
        api.post("/sms/bind", {
			"token": tokens,
			"mobile": _this.data.shouji,
			"code": _this.data.code
        }).then(res => {
			console.log("验证成功");
			wx.redirectTo({
				url: '../registe4/registe4'
			})
        }).catch(err => {
            wx.showToast({
                title: "信息上传失败！",
                icon: 'none'
            })
        })
	},




	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})