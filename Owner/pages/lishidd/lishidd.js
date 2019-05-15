// pages/lishidd/lishidd.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		ddlist: [] 
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		// 页面接口
		var _this = this;
		// 获取token
		const tokens = wx.getStorageSync('token');
		// 订单数据接口
		api.get("/owner/history?token="+tokens, {}).then(res => {
			// console.log(res)
			_this.setData({
				ddlist: res.data
			})
		}).catch(err => {
			wx.showToast({
				title: "接口连接错误！",
				icon: 'none'
			})
		})

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