// pages/xiugai/xiugai.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		chexing: '京A 1234',
		goumairiqi: '2017-01-01',
		chezhuname: '周杰伦',
		zhengjian: '610101199001010011',
		chengshi: '北京市 朝阳区',
		mima: '******',
		shouji: '13993313131',
		yuyuetime: '编辑'
	},

	// 修改资料
	goxgcx (){
		wx.navigateTo({
			url:'../xgcx/xgcx'
		})
	},
	goxggmrq (){
		wx.navigateTo({
			url:'../xggmrq/xggmrq'
		})
	},
	goxgcs (){
		wx.navigateTo({
			url:'../xgcs/xgcs'
		})
	},
	goxgmm (){
		wx.navigateTo({
			url:'../xgmm/xgmm'
		})
	},
	goxgsjh (){
		wx.navigateTo({
			url:'../xgsjh/xgsjh'
		})
	},
	goxgyysj (){
		wx.navigateTo({
			url:'../xgyysj/xgyysj'
		})
	},
	








	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		// 接口
		

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