import api from './api'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function pushdArray(arr, index, value) {
  if(index >= arr.length) {
  return;
  }
  arr[index].push(value);
  
  return arr;
  }

function login() {
  // wx.login({
  //   success: res => {
  //     //将code传给后端以获得token
  //     api.post("openid", {
  //       "code":res.code
  //     }).then(res => {
  //         console.log(res)
  //         var token = res.data.token
  //         //将token存到本地存储中
  //         wx.setStorageSync('token',token);
  //         //将当前时间存到本地存储
  //         let createTime = new Date();
  //         wx.setStorageSync('createTime',createTime);
  //     }).catch(err => {
  //         wx.showToast({
  //             title: '接口未连接！',
  //             icon: 'none'
  //         })
  //     })   
  //   }
  // })
}

//检查登录状态
function checkLogin() {
  // console.log('checkLogin')
  // let time = new Date();
  // let createTime = wx.getStorageSync('createTime');
  // let token = wx.getStorageSync('token');
  // if (!token) {
  //  //不存在token，调用登录
  //   console.log('no token')
  //   login()
  // } else if (time - createTime > 30 * 24 * 3600 * 1000) {
  //   //token过期（假设是6天），调用登录
  //   console.log('token expired')
  //   login()
  // }else {
  //  //token有效，不做操作
  //   console.log('already Login')
  // }
}



module.exports = {
  formatTime: formatTime,
  login:login,
  checkLogin:checkLogin,
  pushdArray:pushdArray
}