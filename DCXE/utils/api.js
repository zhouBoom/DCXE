
const app = getApp()

const request = (url, options) => {
   return new Promise((resolve, reject) => {
      wx.showLoading({
        title: "请求中...",
      })
      var host = 'https://liudada.top/v1/'
       wx.request({
           url: host+`${url}`,
           method: options.method,
           data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
           header: {
               'Content-Type': 'application/json',
               'Accept':'application/json'
           },
           success(request) {
              console.log(request)
                wx.hideLoading()
               if (request.data.code === 1) {
                   resolve(request.data)
               }else if(request.data.code === 16001){
                  console.log("token失效")
                  wx.login({
                     success: res => {
                       //将code传给后端以获得token
                       post("openid", {
                         "code":res.code
                       }).then(res => {
                           console.log(res)
                           var token = res.data.token
                           //将token存到本地存储中
                           wx.setStorageSync('token',token);
                           //将当前时间存到本地存储
                           let createTime = new Date();
                           wx.setStorageSync('createTime',createTime);
                       }).catch(err => {
                           wx.showToast({
                               title: err.msg,
                               icon: 'none'
                           })
                       })   
                     }
                   })
               } else {
                   reject(request.data)
               }
           },
           fail(error) {
               reject(error.data)
           }
       })
   })
}

const get = (url, options = {}) => {
   return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
   return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
   return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
   return request(url, { method: 'DELETE', data: options })
}

module.exports = {
   get,
   post,
   put,
   remove
}