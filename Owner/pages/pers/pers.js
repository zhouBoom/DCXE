
import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		id:'',
		names: '爱行车者',
		images: ''
	},
	// 我的收入
	goincome: function () {
		wx.navigateTo({
			url: '../income/income'
		})
	},
	// 客服小二
	kf: function () {
		wx.showModal({
			title: '提示',
			content: '请添加微信：alaya-oto 进行售后',
			showCancel: false,
			cancelText: '取消',
			cancelColor: '#000000',
			confirmText: '确定',
			confirmColor: '#3CC51F',
			success: (result) => {
				if (result.confirm) {}
			},
			fail: () => {},
			complete: () => {}
		});
	},
	// 服务协议
	xy: function () {
		wx.navigateTo({
			url: "../xy/xy"
		})
	},
	// 我的信息
	goxiugai() {
		wx.navigateTo({
			url: "../xiugai/xiugai"
		})
	},
	// 历史
	gojiedanls (){
		wx.navigateTo({
			url: "../lishidd/lishidd"
		})
	},




	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var _this = this;
		// 获取token
		const tokens = wx.getStorageSync('token');

		// 请求接口
		api.get("/owner/my?token="+tokens, {}).then(res => {
			// console.log(res)
			_this.setData({
				names: res.data.name,
				images: "https://liudada.top/"+res.data.image,
				id: res.data.id
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