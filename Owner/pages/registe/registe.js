// pages/registe/registe.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// 车型
		chexing: [],
		chexingval: '请选择车型',
		cheidlist: [],
		cheid: '',
		// 牌照
		chepaizhao: '',
		// 姓名
		name: '',
		buzhou: '1',
		// 日期
		datetishi: '选择您的购买日期',
		date: '',
		// 身份证
		shenval: '',
		// 省市
		shi: [],
		shitishi: '选择您的省市区'
	},


	// 车型
	chexingcc(e) {
		this.setData({
			chexingval: this.data.chexing[e.detail.value],
			cheid: this.data.cheidlist[e.detail.value]
		})
	},
	// 牌照
	clpaizhao(e) {
		this.setData({
			chepaizhao: e.detail.value
		})
	},
	// 日期选择
	bindDateChange(e) {
		this.setData({
			date: e.detail.value,
			datetishi: ''
		})
	},
	// 姓名
	namecc(e) {
		this.setData({
			name: e.detail.value
		})
	},
	// 身份证
	shenfencc(e) {
		this.setData({
			shenval: e.detail.value
		})
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var regs = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if (reg.test(e.detail.value)) {
			if (regs.test(e.detail.value)) {
				this.setData({
					shenval: e.detail.value
				})
			}
		} else {
			this.setData({
				shenval: ''
			})
			wx.showToast({
				title: '输入的身份证号码有误！',
				icon: 'none'
			})
		}
	},
	// 省市
	bindRegionChange(e) {
		this.setData({
			shi: e.detail.value,
			shitishi: ''
		})
	},

	// 下一步
	gonext() {
		if (this.data.chexingval !== '请选择车型' & this.data.date !== '' & this.data.name !== '' & this.data.shenval !== '' & this.data.shi.length !== 0) {
			var _this = this;
			//获取token
			const tokens = wx.getStorageSync('token');
			// 信息接口
            api.post("/owner/information", {
				"token": tokens,
				"type_id": _this.data.cheid,
				"car_number": _this.data.chepaizhao,
				"buy_time":  _this.data.date,
				"name": _this.data.name,
				"id_card": _this.data.shenval,
				"province": _this.data.shi[0],
				"city": _this.data.shi[1],
				"district": _this.data.shi[2]
            }).then(res => {
				console.log(res)
				wx.redirectTo({
					url: '../registe2/registe2'
				})
            }).catch(err => {
                wx.showToast({
                    title: "信息上传失败！",
                    icon: 'none'
                })
            })
		} else {
			wx.showToast({
				title: '您的信息未录入完整！',
				icon: 'none'
			})
		}
	},



	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		// 请求车型数据
		var _this = this;
		const arrrrr = [];
		const aid = [];
		// 车型接口
		api.get("/cars_type", {}).then(res => {
			for (let index = 0; index < res.data.length; index++) {
				const element = res.data[index].brand + " " + res.data[index].model;
				aid.push(res.data[index].id);
				arrrrr.push(element);
			};
			_this.setData({
				chexing: arrrrr,
				cheidlist: aid
			});
		}).catch(err => {
			wx.showToast({
					title: "接口连接错误！",
					icon: 'none'
			})
		});

		
		
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