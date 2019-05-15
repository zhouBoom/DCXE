//index.js
//获取应用实例

import api from '../../utils/api'

const app = getApp()

Page({
	data: {
		dd_list1: [],
		dd_list2: [],
		ddact: '1',
		ddplay1: true,
		ddplay2: false,
		cuowu404: true
	},
	// 功能
	goindex() {
		this.setData({
			ddact: '1',
			ddplay1: true,
			ddplay2: false
		});
		var _this = this;
		// 获取token
		const tokens = wx.getStorageSync('token');
		// 待处理订单数据接口
		api.get("/owner?token=" + tokens + "&type=pending", {}).then(res => {
			// console.log(res)
			_this.setData({
				dd_list1: res.data
			})
			console.log("进入预约订单");
		}).catch(err => {
			wx.showToast({
				title: "接口连接错误！",
				icon: 'none'
			})
		})
	},
	gomydd() {
		this.setData({
			ddact: '2',
			ddplay1: false,
			ddplay2: true
		});
		var _this = this;
		// 获取token
		const tokens = wx.getStorageSync('token');
		// console.log(tokens)
		// 订单数据接口
		api.get("/owner?token=" + tokens, {}).then(res => {
			// console.log(res)
			_this.setData({
				dd_list2: res.data
			})
			console.log("进入我的订单");
		}).catch(err => {
			wx.showToast({
				title: "接口连接错误！",
				icon: 'none'
			})
		})
	},
	// 接单
	jiedanbt(e) {
		// console.log(e.currentTarget.dataset.did)
		var _this = this;
		wx.showModal({
			title: '提示',
			content: '您确认接受订单吗？',
			success: function (res) {
				if (res.confirm) {
					// 获取token
					const tokens = wx.getStorageSync('token');
					// 接单接口
					api.put("/owner/order?token=" + tokens + "&order_no=" + e.currentTarget.dataset.did, {}).then(res => {
						wx.showToast({
							title: "接单成功！"
						});
						_this.onReady();
					}).catch(err => {
						wx.showToast({
							title: "接口连接错误！",
							icon: 'none'
						})
					})
				}
			}
		})
	},
	// 开始服务
	fuwubt (e){
		// console.log(e.currentTarget.dataset.did)
		var _this = this;
		wx.showModal({
			title: '提示',
			content: '您确认开始服务吗？',
			success: function (res) {
				if (res.confirm) {
					// 获取token
					const tokens = wx.getStorageSync('token');
					// 接单接口
					api.put("/owner/start?token=" + tokens + "&order_no=" + e.currentTarget.dataset.did, {}).then(res => {
						if (res.code == 1){
							wx.showToast({
								title: "已开始服务！"
							});
							wx.redirectTo({
								url: '../myddxq/myddxq'
							});
							// 存储订单号
							wx.setStorageSync('ddnum',e.currentTarget.dataset.did);
						}else {
							wx.showToast({
								title: "开始服务失败！",
								icon: 'none'
							})
						}
					}).catch(err => {
						wx.showToast({
							title: "接口连接错误！",
							icon: 'none'
						})
					})
				}
			}
		})
	},

	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

		var _this = this;
		// 获取token
		const tokens = wx.getStorageSync('token');

		// 判断用户是否注册
		api.get("/owner/user?token=" + tokens, {}).then(res => {
			_this.setData({
				cuowu404: false
			})
			// console.log(res)
			if (res.data == 1) {
				wx.switchTab({
					url: '/pages/registe/registe'
				})
			} else {
				// 待处理订单数据接口
				api.get("/owner?token=" + tokens + "&type=pending", {}).then(res => {
					// console.log(res)
					_this.setData({
						dd_list1: res.data
					})
				}).catch(err => {
					wx.showToast({
						title: "接口连接错误！",
						icon: 'none'
					})
				})
			}
		}).catch(err => {
			_this.setData({
				cuowu404: true
			})
			wx.showToast({
				title: "接口连接错误！",
				icon: 'none'
			})
		})

	},

})