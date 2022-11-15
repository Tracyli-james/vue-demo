/* eslint-disable no-unreachable */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 设置post的默认请求类型，有的可能是fromdata格式，需要单独设置

// http://47.96.110.78/apir/admin
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'http://47.96.110.78/apir/',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
      console.log('##################===========>TOKEN00')
      var loginToken = window.localStorage.getItem('LOGINTOKEN')
      console.log(loginToken)
      console.log('##################===========>TOKEN11')
      if (window.localStorage.getItem('LOGINTOKEN')) {
        config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('LOGINTOKEN')
      } else {
        config.headers['Authorization'] = ''
      }
    }
    return config
  },
  // {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUaGlzIGlzIEdvYXQgYmFza2V0YmFsbCB0b2tlbiIsImF1ZCI6Ik1JTkkgQVBQIiwiaXNzIjoiTXIgQnVuYW5hIiwiZXhwIjoxNjc1MzI2ODg0LCJ1c2VyIjoie1wicm9sZXNcIjpbXCLmma7pgJrnrqHnkIblkZhcIl0sXCJ1c2VySWRcIjoyfSIsImlhdCI6MTY2NzM3ODA4NH0.VlsXI1JVuRLlqbgENsLTW2h_01MHeZ1FVgu0scotz0Y","userInfo":{"userId":2,"nickName":"admin"}}
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    if (res && !res.code) {
      console.log(res)
      return res
    } else {
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(new Error(res.message || 'Error'))
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
