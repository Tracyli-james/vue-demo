<template>
  <div class="login-container">
    <img class="login-bg-img" src="http://pro.ssyl168.com/static/img/bg.9e435714.png" alt="">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <img class="title-image" src="https://static.sy12306.com/upload/stick_card/121574/462c42dbad7de661cff14eb39a91fa4b.png" alt="">
        <img class="title-image1" src="http://pro.ssyl168.com/static/img/text.32556c71.png" alt="">
        <img class="title-image2" src="data:image/png;base64,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" alt="">
        <!-- <h3 class="title">手游代理商管理中心</h3> -->
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <!-- <svg-icon icon-class="user" /> -->
          <img class="username-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDQUREM0I3RjY1MTExRUFCNUZDQzE3Q0Y2ODA3RDk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDQUREM0I4RjY1MTExRUFCNUZDQzE3Q0Y2ODA3RDk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0NBREQzQjVGNjUxMTFFQUI1RkNDMTdDRjY4MDdEOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0NBREQzQjZGNjUxMTFFQUI1RkNDMTdDRjY4MDdEOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CXbSEAAAEy0lEQVR42ryZa4hVVRTH74yjzmi+MJTBqUSmuaY5qeFjRjCNAUd70Jg9/KBZQSKl9UFF7WEifVAQjREsAkl7IJRKDL2EilSaiXyW6ZTkKJo0jmjqyPjs9l/w37A43HvP2vvemQU/9jn7rrXXuvvsvc/a+xSkUqlEDlICpoFqMBpUgsERnYvgKPgN/AS+AW3BHiXgAMaDenAtFSbbwWMhvgs8e3gUWA5mq7o/QCNoYk+eAh3gFugNSkESjAWTwHhluwesBD/ku4cHggbVQy3gVTAkoJf6gmfBbtXer+BBi73FwX3grGr8zcBhlI654LJqe1auAU9XjTWByjwG6+gPtio/y0MDnt9JvZqJ2crfBt+Aq5Tx4gDnPYiv3cNxftMZDQLXabTCw9lw8C6HzkUik/NzMNOjnakq6BlxAfcEJ6m80ehgJNhlWHtPeHTAPGX3QLaA11CpzdhwMhLUAbASPAKmgRciE0rkHWPbX1J/d7aA26k01dhoiwpkRcyb8bDSfc7Qdi+lf1e6gF/nj9uMwe6kfgcni8XmQxXEKOM6LdIYDbhINXSHoaGqbBMjhuPRIGL4i/pj5L6Qb+gnWO4A7YY3+gKWh8FXnvnWxywngqEG/XUsX9G5xI8evSUJ0+m4BT5m+XPypEF/BHVlqS2RHu4LJvNfHDP8Y8l3y3h9IiCjbQbneN3PoH+U+XMPMEUCHscfpLLF0EBPdd0RmIY7u25G/e9YVhcyT3W5qUX+Af/yemhAsAPBEF63G21+ZlkuAZerrrfIdXCA15UBAT8OijyHVLP7s24Mu72XVbaxrAH9PQN+hqU8pX1GG/dEe+mAL3s43QzOgGKwi6VF5nDT6pap20Y7F1uxBHyTN909AhZHtbyWSXsIVMTYvAG28non+MTDn4vtdqGKfoDno/0dLOJ1kvdLwL1Kpw+HzV6wmnWy3Z/p6cstfx0y+P/mTVnABKoH8qfXcLlbS2S4XGWbvSPLU02AHxfbJXF2hDcTAhqaBaoia7NzkIwEm+B8eV6tElYZw/Ks2xWL/Af6GV+vNWBfJM+VvHUZqANjmXjXgoU8ItCHLmfAix6v8ybazXcV51kxwWD8WiTQemOqOBgsBa3KdhNzk7gzESflrnKtYcPZDXyrjD8FdwckPyXchTuR9LEii34t9Q7pfLhCPapMho3KycI8bOv1ZlMOU0oz6G1xwyG64/iFP9SlMVpn3Ar5MkO1+33McCiJBuzy1HY+flc/OcczijgeUu2/FfltD+sXZNqEul7erOpcsv5FJ576vKyCvod1T/P+UrZd8xRlOIBnaSJXQHEnH1UdpK/VXDlu8H5p3MnPYio2E5FVXXC29ih9neOKkOLO3HS2pg8/ZEz36YKAE5GX0Z/pdAozvArnqixfEvaCRNfIFZWbT/I9gZdl5Gv+2wvgqU7s2dFqGMi7YFguJ/Dvq8f0Ebgzz8Hqt95eTvacPhkkeCruRGbvS6B7joFO5zh1siVf3zgc1eA95UDWxw94Qpk02JfxG8Z6cEy102A8UAn67CVyP1iVZtdwmkdXreC8TA9uUAeBEWB4mq372/zQaJaQgJ0MA3VM4icabY7z/O4zsD/EaS4Ba6ngp9tS9moRl8JbPCxp485G9nM3cnH0vwADAMNWW6/xFyKjAAAAAElFTkSuQmCC" alt="">
        </span>

        <el-input
          ref="userName"
          v-model="loginForm.userName"
          placeholder="用户名/账号"
          name="userName"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <!-- <svg-icon icon-class="password" /> -->
            <img class="pwd-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNENkI3MUJERjY1MTExRUE4RjNDOUMxMTZGQTIxMkNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNENkI3MUJFRjY1MTExRUE4RjNDOUMxMTZGQTIxMkNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0Q2QjcxQkJGNjUxMTFFQThGM0M5QzExNkZBMjEyQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0Q2QjcxQkNGNjUxMTFFQThGM0M5QzExNkZBMjEyQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p7jwsAAACIElEQVR42uyYzytEURTH5xk/ZiHJr5AykZRQQ1FEsrFQUhILJVn6A2QjW/ZEKKWU1aRkIUtRiiiJjVJSfuX3hDGe7607dZomb+69894z5t36NOf25sz5znvnnXPv1XRddyXSSI3z7xWBZlAGMsEVOAbbf03wMOgCHSAjyvUz4Afz4FwpEksJBZrArh77CIFxlZiaQg53gnUyfwMb/PEfgGfg5SnSBhrId1dBv5V3uC7izq2AAgOfQfBKfJZkYsuIZU8lQAJPCPh6wQ3xbbdC8AgJuCjh7yP+lyDdbME35AXKlEypaSK6W8Q3RTDlW0E+txfAq+QLO03sGhFHUcGNxPYrVNNb9r5zu9pMwVnEflQQHAAat71mCv6OU5dkNXsU7INJM1sz7TKaYjuf4rjMvMO2D5WUCCWCYFrG7u0QbLT4aQG9oAIEQRUo59f2wDVIj4cODqseO2AOPIkKHgDLNqXqIfCJCn4A2WR+Al7iUB2iVR43KAGFhlXol779xHt9EPQoLvRjwQ22eMxnmQX8Hcjli/F6i1KhFhyBD+ARrRLhf/JuQw67VcpaqoVCPVE6anJ1OkewI9gR7Ah2BDuC/5/goIV6AkY78hSDbUvk4YnZIxzrS0ZwGv9kR0ljFogtBrPc/pTZhLJdcQ6ZX7jkD/9iGZURS1lNdK07BNbIvNTC1NiU3eazLUsfyOOHKLrJBYClwimYkRXs1OGkE/wjwABnr5/wnpjy/gAAAABJRU5ErkJggg==" alt="">
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button class="login-btn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登  录</el-button>

      <!-- <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>

        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
      </div> -->
    </el-form>

    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'
import request from '@/utils/request'

export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入您的用户名/账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.userName === '') {
      this.$refs.userName.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    // GetHomeData API
    getHomePageData() {
      this.loading = true
      var url = 'https://www.aosenmusic.cn/game_manager/admin/admin/home/index'
      var fmData = {}
      request({
        url,
        method: 'post',
        data: fmData
      }).then(resData => {
      }).catch(() => {
      })
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              console.log(22222222222)
              console.log(this.redirect)
              console.log(this.otherQuery)
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
              console.log(3333333333000)
            })
          // -->END
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-bg-img{
    position: fixed;
    top: 0;
    left: 0;
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 8px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 28px;
    display: inline-block;
    margin-right: 30px;
  }

  .username-img{
    margin-right: 8px;
  }

  .title-container {
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;

    .title-image{
      margin-bottom: 8px;
    }
    .title-image1{
      margin-bottom: 5px;
      width: 240px;
    }
    .title-image2{
      margin-bottom: 40px;
      width: 340px;
    }

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 17px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .login-btn{
    height: 54px;
    font-size: 24px;
    font-weight: bold;
    color: orangered;
    background-color: white;
    border-radius: 20px;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
