import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const LoginTokenKey = 'Login-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getLoginToken() {
  return Cookies.get(LoginTokenKey)
}

export function setLoginToken(token) {
  return Cookies.set(LoginTokenKey, token)
}

export function removeLoginToken() {
  return Cookies.remove(LoginTokenKey)
}
