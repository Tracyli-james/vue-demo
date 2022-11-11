import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/auth/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/admin/auth/login',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/admin/auth/login',
    method: 'post',
    data
  })
}

export function homepage(tmptoken) {
  return request({
    url: '/admin/home/index',
    method: 'get',
    Authorization: tmptoken
  })
}

function obj2Param(obj) {
  return Object.keys(obj).map(key => {
    return key + '=' + obj[key]
  }).join('&')
}

export function orderlist(data) {
  var strTmp = obj2Param(data)
  var tmpUrl = '/admin/order/page?' + (strTmp || '')
  console.log(tmpUrl)
  return request({
    url: tmpUrl,
    method: 'get',
    data
  })
}
