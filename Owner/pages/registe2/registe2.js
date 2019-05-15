// pages/registe2/registe2.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		image1: '',
		upimg1sss: false,
		image2: '',
		upimg2sss: true,
		image3: '',
		upimg3sss: false
	},


	// 上传图片
	chooseImage1() {

		var _this = this;
		//获取token
		const tokens = wx.getStorageSync('token');

		wx.chooseImage({
			sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
			success: res => {
				_this.setData({
					image1: res.tempFilePaths,
					upimg1sss: true
				});
				console.log(_this.data.image1[0]);
				wx.uploadFile({
					url: 'https://liudada.top/v1/owner/passport', 
					header: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
					filePath: _this.data.image1[0],
					name: 'image',
					formData: {
						"token": tokens
					},
					success(res) {
						console.log(res);
						wx.showToast({
							title: "上传成功"
						})
					}
				})
			}
		})
	},
	chooseImage2() {
		var _this = this;
		//获取token
		const tokens = wx.getStorageSync('token');
		
		wx.chooseImage({
			sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
			success: res => {
				_this.setData({
					image2: res.tempFilePaths,
					upimg2sss: true
				});
				wx.uploadFile({
					url: 'https://liudada.top/v1/owner/passport', 
					header: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
					filePath: _this.data.image2[0],
					name: 'image',
					formData: {
						"token": tokens
					},
					success(res) {
						wx.showToast({
							title: "上传成功"
						})
					}
				})
			}
		})
	},
	chooseImage3() {
		var _this = this;
		//获取token
		const tokens = wx.getStorageSync('token');
		
		wx.chooseImage({
			sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
			success: res => {
				_this.setData({
					image3: res.tempFilePaths,
					upimg3sss: true
				});
				wx.uploadFile({
					url: 'https://liudada.top/v1/owner/passport', 
					header: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
					filePath: _this.data.image3[0],
					name: 'image',
					formData: {
						"token": tokens
					},
					success(res) {
						wx.showToast({
							title: "上传成功"
						})
					}
				})
			}
		})
	},

	// 跳转下一页
	gonext() {
		// console.log(this.data.image1)
		// console.log(this.data.image2)
		// console.log(this.data.image3)
		// var arr111 = this.data.image1.concat(this.data.image2);
		// var arrsss = arr111.concat(this.data.image3);
		var _this = this;
		//获取token
		const tokens = wx.getStorageSync('token');
		// 信息接口
		if (_this.data.image1 !== '' & _this.data.image2 !== '' & _this.data.image3 !== ''){
			console.log(arrsss)
			wx.uploadFile({
				url: 'https://liudada.top/v1/owner/passport', 
				filePath: arrsss,
				name: 'file',
				formData: {
					"token": tokens
				},
				success(res) {
					wx.redirectTo({
						url: '../registe3/registe3'
					})
				}
			})
		}else {
			wx.showToast({
				title: "请选择您的证件照片！",
				icon: 'none'
			})
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