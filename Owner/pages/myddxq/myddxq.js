// pages/myddxq/myddxq.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		name: '国民女神',
		date: '',
		time: '',
		sjdidian: '北京市 天安门'
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var _this = this;
		// 获取token
		const tokens = wx.getStorageSync('token');
		// 获取订单号
		const ddnums = wx.getStorageSync('ddnum');
		// 接口
		api.get("/owner/order/"+ ddnums +"?token="+tokens, {}).then(res => {
			// console.log(res)
			_this.setData({
				name: res.data.nick_name,
				date: res.data.date,
				time: res.data.time,
				sjdidian: res.data.address
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