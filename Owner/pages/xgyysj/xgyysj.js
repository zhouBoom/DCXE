// pages/xgyysj/xgyysj.js
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
		}else{
			_this.data.rilicss_1.splice(idx,1,0);
			_this.setData({
				rilicss_1: _this.data.rilicss_1
			});
		};
		var xzr1 = this.data.qitian[0] + this.data.shijian[idx];
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
		}else{
			_this.data.rilicss_2.splice(idx,1,0);
			_this.setData({
				rilicss_2: _this.data.rilicss_2
			});
		};
		var xzr2 = this.data.qitian[0] + this.data.shijian[idx];
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
		}else{
			_this.data.rilicss_3.splice(idx,1,0);
			_this.setData({
				rilicss_3: _this.data.rilicss_3
			});
		};
		var xzr3 = this.data.qitian[0] + this.data.shijian[idx];
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
		}else{
			_this.data.rilicss_4.splice(idx,1,0);
			_this.setData({
				rilicss_4: _this.data.rilicss_4
			});
		};
		var xzr4 = this.data.qitian[0] + this.data.shijian[idx];
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
		}else{
			_this.data.rilicss_5.splice(idx,1,0);
			_this.setData({
				rilicss_5: _this.data.rilicss_5
			});
		};
		var xzr5 = this.data.qitian[0] + this.data.shijian[idx];
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
		}else{
			_this.data.rilicss_6.splice(idx,1,0);
			_this.setData({
				rilicss_6: _this.data.rilicss_6
			});
		};
		var xzr6 = this.data.qitian[0] + this.data.shijian[idx];
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
		}else{
			_this.data.rilicss_7.splice(idx,1,0);
			_this.setData({
				rilicss_7: _this.data.rilicss_7
			});
		};
		var xzr7 = this.data.qitian[0] + this.data.shijian[idx];
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
			da.push(month + '.' + day);
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