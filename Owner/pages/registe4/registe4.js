// pages/registe4/registe4.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		yanjing: 'password',
		mima: '',
		mima2: '',
		mimaval: '',
		mimaval2: ''
	},

	// 密码校验
	mimacc1 (e){
		var reg = /^[0-9]{6}$/;
		if(reg.test(e.detail.value)){
			this.setData({
				mima: e.detail.value
			})
		}else {
			this.setData({
				mimaval: ''
			})
			wx.showToast({
				title: '请输入 6 位数字密码！',
				icon: 'none'
			})
		}
	},
	mimacc2 (e){
		var reg = /^[0-9]{6}$/;
		if(reg.test(e.detail.value)){
			this.setData({
				mima2: e.detail.value
			})
		}else {
			this.setData({
				mimaval2: ''
			})
			wx.showToast({
				title: '请输入 6 位数字密码！',
				icon: 'none'
			})
		}
	},

	// 隐藏显示
	xianshimm (){
		if(this.data.yanjing === 'password'){
			this.setData({
				yanjing: 'text'
			})
		}else {
			this.setData({
				yanjing: 'password'
			})
		}
	},

	// 跳转下一页
	gonext() {
		var _this = this;
		if(_this.data.mima !=='' & _this.data.mima2 !=='' & _this.data.mima === _this.data.mima2){
			//获取token
			const tokens = wx.getStorageSync('token');
			// 上传接口
			api.post("/owner/password", {
				"token": tokens,
				"password": _this.data.mima,
				"confirm_password": _this.data.mima2
			}).then(res => {
				wx.redirectTo({
					url: '../registe5/registe5'
				})
			}).catch(err => {
				wx.showToast({
					title: "信息上传失败！",
					icon: 'none'
				})
			})
		}else {
			_this.setData({
				mimaval: '',
				mimaval2: ''
			});
			wx.showToast({
				title: '两次密码输入不一致！',
				icon: 'none'
			});
		}
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