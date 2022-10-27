<style lang="scss" scoped>
.index-module__container {
  height: 100vh;
  min-height: 500px;
  display:none;
}
.index-module__content {
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  min-height: 100%;
}
.index-module__banner_new {
  background: 50% / cover no-repeat
    url(//res.volccdn.com/obj/volc-console-fe/vconsole-auth/static/media/banner_new.18ef2e41.jpg);
}
.index-module__banner {
  width: 538px;
  position: relative;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  -webkit-transition: margin-left 1.5s ease;
  -o-transition: margin-left 1.5s ease;
  -moz-transition: margin-left 1.5s ease;
  transition: margin-left 1.5s ease;
}
.index-module__banner_wrapper {
  position: absolute;
  top: 30.5%;
  padding-left: 77px;
}
.index-module__intro {
  margin-top: 59px;
}
.index-module__tips {
  opacity: 0.6;
  font-size: 16px;
  line-height: 22px;
  color: #fafbfc;
  div {
    margin-bottom: 16px;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
  }
  div:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 4px solid hsla(0, 0%, 100%, 0.3);
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: transparent;
    margin-right: 12px;
  }
}
.index-module__footer {
  position: absolute;
  left: 80px;
  bottom: 32px;
  font-size: 12px;
  line-height: 22px;
  color: hsla(0, 0%, 100%, 0.5);
  letter-spacing: 0.2px;
  text-align: left;
}
.index-module__badge {
  height: 12px;
  width: 12px;
  margin: 4px 4px 0 0;
  float: left;
}
.index-module__main {
  -webkit-flex: 1 1;
  -moz-box-flex: 1;
  flex: 1 1;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  background: #fff;
}
.container-spin {
  width: 100%;
  height: 100%;
  position: relative;
}

.arco-spin {
  display: inline-block;
}
.arco-spin-children {
  position: relative;
}
.index-module__form {
  width: 364px;
}
::v-deep .el-input__inner {
  height: 48px;
  line-height: 1;
}
</style>
<template>
  <div class="index-module__container">
    <div class="index-module__content">
      <div class="index-module__banner index-module__banner_new">
        <div
          v-if="false"
          class="index-module__banner_wrapper"
        >
          <div class="index-module__intro">
            <div class="index-module__tips">
              <div>助力客户数字化转型</div>
              <div>推动组织智能化升级</div>
              <div>激发企业持续性增长</div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-module__main">
        <div class="arco-spin">

          <div class="arco-spin-children ">
            <div class="index-module__form">
              <el-form
                ref="loginForm"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                autocomplete="on"
                label-position="left"
              >

                <div class="title-container">
                  <h3 class="title">账号登录</h3>
                </div>

                <el-form-item prop="username">
                  <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="用户名"
                    name="username"
                    type="text"
                    tabindex="1"
                    autocomplete="on"
                  />
                </el-form-item>

                <el-form-item prop="password">
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="密码"
                    name="password"
                    tabindex="2"
                    autocomplete="on"
                    @keyup.native="checkCapslock"
                    @keyup.enter.native="handleLogin"
                  />
                </el-form-item>
                <el-button
                  :loading="loading"
                  type="primary"
                  style="width:100%;margin-bottom:30px; height: 48px;"
                  @click.native.prevent="handleLogin"
                >登录</el-button>
              </el-form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  components: { },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) callback(new Error('请输入密码'))
      else callback()
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
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
  beforeCreated() {
    const token = localStorage.getItem('token')
    if(token) {
      setToken(token)
      this.$router.push('/')
    }
  },

  mounted() {
    // if (this.loginForm.username === '') {
    //   this.$refs.username.focus()
    // } else if (this.loginForm.password === '') {
    //   this.$refs.password.focus()
    // }
    
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
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
              this.$message.success("登录成功!")
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
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

$bg: #283443;
$light_gray: #fff;
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
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

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
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

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
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
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
.title {
  font-size: 26px;
  // color: $light_gray;
  margin: 0px auto 40px auto;
  // text-align: center;
  font-weight: bold;
}
</style>
