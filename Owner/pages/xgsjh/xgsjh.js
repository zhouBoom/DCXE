// pages/xgsjh/xgsjh.js
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
		showCode: true,
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
			if (regs.test(e.detail.value)) {
				this.setData({
					shouji: e.detail.value,
					sjs: true
				})
			}
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
		if (this.data.sjs = false) {
			wx.showToast({
				title: '请输入您的手机号！',
				icon: 'none'
			})
		} else {
			// api.get("" + _this.data.shouji, {}).then(res => {
			// 	console.log(res)
			// 	_this.setData({
			// 		showCode: !_this.data.showCode
			// 	})
			// 	var num = 60;
			// 	var timer = setInterval(function () {
			// 		num--;
			// 		if (num <= 0) {
			// 			clearInterval(timer);
			// 			_this.setData({
			// 				miao: "",
			// 				codename: '重新发送',
			// 				showCode: !_this.data.showCode
			// 			})
			// 		} else {
			// 			_this.setData({
			// 				miao: num + "s后重新获取"
			// 			})
			// 		}
			// 	}, 1000)
			// }).catch(err => {
			// 	wx.showToast({
			// 		title: '接口错误！',
			// 		icon: 'none'
			// 	})
			// });


			_this.setData({
				showCode: !_this.data.showCode,
				yzmfs: true
			})
			var num = 60;
			var timer = setInterval(function () {
				num--;
				if (num <= 0) {
					clearInterval(timer);
					_this.setData({
						miao: "",
						codename: '重新发送',
						showCode: !_this.data.showCode
					})
				} else {
					_this.setData({
						miao: num + "s后重新获取"
					})
				}
			}, 1000)
		}
	},
	// 验证码确认
	yzmfs() {

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