import { login, logout, getInfo, homepage, orderlist } from '@/api/user'
import { getToken, setToken, removeToken, getLoginToken, setLoginToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  loginToken: getLoginToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    console.log(token)
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_LOGIN_TOKEN: (state, loginToken) => {
    state.loginToken = loginToken
  }
}

const actions = {
// 获取首页信息
  homepage({ commit, state }) {
    var tmpToken = window.localStorage.getItem('LOGINTOKEN')
    return new Promise((resolve, reject) => {
      homepage(tmpToken).then(response => {
        console.log(response)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user login
  login({ commit }, userInfo) {
    const { userName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password }).then(response => {
        // response.token = 'admin-token'
        var data = {}
        data.token = 'admin-token'
        window.localStorage.setItem('LOGINTOKEN', response.token)
        console.log('=========12345======>>')
        console.log(response.token)
        console.log(window.localStorage.getItem('LOGINTOKEN'))
        console.log('=========67890======>>')
        commit('SET_LOGIN_TOKEN', response.token)
        setLoginToken(response.token)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    var objTmp = {
      'userName': 'admin',
      'password': '112233'
    }
    return new Promise((resolve, reject) => {
      getInfo(objTmp).then(response => {
        var tmpObj = {
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          introduction: 'I am a super administrator',
          name: 'Super Admin',
          roles: ['admin']
        }
        const { data } = tmpObj
        console.log(data)
        console.log('=========Hello======')

        // if (!data) {
        //   reject('Verification failed, please Login again.')
        // }

        const { roles, name, avatar, introduction } = tmpObj

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(tmpObj)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    var objTmp = {
      'userName': 'admin',
      'password': '112233'
    }
    return new Promise((resolve, reject) => {
      logout(objTmp).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  },

  // 订单列表数据
  orderlist({ commit, state }) {
    // var tmpToken = window.localStorage.getItem('LOGINTOKEN')
    var tmpObj = {
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a super administrator',
      name: 'Super Admin',
      roles: ['admin']
    }
    return new Promise((resolve, reject) => {
      orderlist(tmpObj).then(response => {
        console.log('###################>>>')
        console.log(response)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
