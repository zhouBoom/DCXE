// pages/registe5/registe5.js

import api from '../../utils/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		qitian: [],
		shijian: ["09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
		rilicss_1: [0,0,0,0,0,0,0],
		rilicss_2: [0,0,0,0,0,0,0],
		rilicss_3: [0,0,0,0,0,0,0],
		rilicss_4: [0,0,0,0,0,0,0],
		rilicss_5: [0,0,0,0,0,0,0],
		rilicss_6: [0,0,0,0,0,0,0],
		rilicss_7: [0,0,0,0,0,0,0],
		dianji_idx: '',
		yxz_rili:[]
	},

	// 日期函数
	djrili1 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_1[idx] == 0){
			_this.data.rilicss_1.splice(idx,1,1);
			_this.setData({
				rilicss_1: _this.data.rilicss_1
			});
			// 添加
			var xzr1 = _this.data.qitian[0] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr1 = year + '-' + xzr1;
			_this.data.yxz_rili.push(xzr1);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_1.splice(idx,1,0);
			_this.setData({
				rilicss_1: _this.data.rilicss_1
			});
			// 去除
			var xzr1 = _this.data.qitian[0] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr1 = year + '-' + xzr1;
			var ind = _this.data.yxz_rili.indexOf(xzr1);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		}
	},
	djrili2 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_2[idx] == 0){
			_this.data.rilicss_2.splice(idx,1,1);
			_this.setData({
				rilicss_2: _this.data.rilicss_2
			});
			// 添加
			var xzr2 = _this.data.qitian[1] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr2 = year + '-' + xzr2;
			_this.data.yxz_rili.push(xzr2);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_2.splice(idx,1,0);
			_this.setData({
				rilicss_2: _this.data.rilicss_2
			});
			// 去除
			var xzr2 = _this.data.qitian[1] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr2 = year + '-' + xzr2;
			var ind = _this.data.yxz_rili.indexOf(xzr2);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		}
	},
	djrili3 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_3[idx] == 0){
			_this.data.rilicss_3.splice(idx,1,1);
			_this.setData({
				rilicss_3: _this.data.rilicss_3
			});
			// 添加
			var xzr3 = _this.data.qitian[2] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr3 = year + '-' + xzr3;
			_this.data.yxz_rili.push(xzr3);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_3.splice(idx,1,0);
			_this.setData({
				rilicss_3: _this.data.rilicss_3
			});
			// 去除
			var xzr3 = _this.data.qitian[2] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr3 = year + '-' + xzr3;
			var ind = _this.data.yxz_rili.indexOf(xzr3);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		}
	},
	djrili4 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_4[idx] == 0){
			_this.data.rilicss_4.splice(idx,1,1);
			_this.setData({
				rilicss_4: _this.data.rilicss_4
			});
			// 添加
			var xzr4 = _this.data.qitian[3] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr4 = year + '-' + xzr4;
			_this.data.yxz_rili.push(xzr4);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_4.splice(idx,1,0);
			_this.setData({
				rilicss_4: _this.data.rilicss_4
			});
			// 去除
			var xzr4 = _this.data.qitian[3] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr4 = year + '-' + xzr4;
			var ind = _this.data.yxz_rili.indexOf(xzr4);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		};
	},
	djrili5 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_5[idx] == 0){
			_this.data.rilicss_5.splice(idx,1,1);
			_this.setData({
				rilicss_5: _this.data.rilicss_5
			});
			// 添加
			var xzr5 = _this.data.qitian[4] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr5 = year + '-' + xzr5;
			_this.data.yxz_rili.push(xzr5);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_5.splice(idx,1,0);
			_this.setData({
				rilicss_5: _this.data.rilicss_5
			});
			// 去除
			var xzr5 = _this.data.qitian[4] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr5 = year + '-' + xzr5;
			var ind = _this.data.yxz_rili.indexOf(xzr5);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		}
	},
	djrili6 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_6[idx] == 0){
			_this.data.rilicss_6.splice(idx,1,1);
			_this.setData({
				rilicss_6: _this.data.rilicss_6
			});
			// 添加
			var xzr6 = _this.data.qitian[5] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr6 = year + '-' + xzr6;
			_this.data.yxz_rili.push(xzr6);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_6.splice(idx,1,0);
			_this.setData({
				rilicss_6: _this.data.rilicss_6
			});
			// 去除
			var xzr6 = _this.data.qitian[5] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr6 = year + '-' + xzr6;
			var ind = _this.data.yxz_rili.indexOf(xzr6);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		};
	},
	djrili7 (e){
		var _this = this;
		var idx = e.target.dataset.index;
		this.setData({
			dianji_idx: idx
		});
		if(_this.data.rilicss_7[idx] == 0){
			_this.data.rilicss_7.splice(idx,1,1);
			_this.setData({
				rilicss_7: _this.data.rilicss_7
			});
			// 添加
			var xzr7 = _this.data.qitian[6] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr7 = year + '-' + xzr7;
			_this.data.yxz_rili.push(xzr7);
			console.log(this.data.yxz_rili);
		}else{
			_this.data.rilicss_7.splice(idx,1,0);
			_this.setData({
				rilicss_7: _this.data.rilicss_7
			});
			// 去除
			var xzr7 = _this.data.qitian[6] + ' ' + _this.data.shijian[idx];
			var date = new Date();
			var year = date.getFullYear();
			var xzr7 = year + '-' + xzr7;
			var ind = _this.data.yxz_rili.indexOf(xzr7);
			_this.data.yxz_rili.splice(ind, 1);
			console.log(this.data.yxz_rili);
		};
	},

	// 跳转
	gonext (){
		console.log(this.data.yxz_rili);
		var xzxzxz = JSON.stringify(this.data.yxz_rili);
		console.log(xzxzxz);
		var _this = this;
		//获取token
		const tokens = wx.getStorageSync('token');
		// 接口
		api.post("/owner/date", {
			"token": tokens,
			"date": xzxzxz
		}).then(res => {
			console.log(res)
			wx.switchTab({
				url: '/pages/index/index',
			});
			wx.showToast({
				title: "注册成功！"
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

		// 获取七天日期
		var ot = new Date().getTime(),
			da = [],
			nd,
			month,
			day;
		for (var i = 0; i < 7; i++) {
			nd = ot + i * 24 * 60 * 60 * 1000;
			month = new Date(nd).getMonth() + 1,
			day = new Date(nd).getDate();
			if (month < 10){
				da.push('0' + month + '-' + day);
			}else{
				da.push(month + '-' + day);
			}
		};
		this.setData({
			qitian: da
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