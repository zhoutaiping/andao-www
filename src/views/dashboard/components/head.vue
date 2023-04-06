
<template>
  <div class="header-box">
    <div class="head-conter">
      <div class="logo">
        <img :src="logo" height="55" />
        <!-- <router-link to="/home"></router-link> -->
      </div>
      <div class="box-r">
        <div :class="{ 'login-btn':isPC, 'login-btn-mobile' : !isPC }" @click="handleLogin('USER')">
          <i class="el-icon-user-solid" /> Login
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import login_console from '@/assets/images/logo-console.svg';
import th_default from '@/assets/images/th.jpg';
import logo from '@public/Logo.png';
import defaultSettings from '@public/settings';
import { removeToken } from '@/utils/auth';

function getQueryVariable(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
export default {
  data() {
    return {
      logo,
      th_default,
      login_console,
      console: {
        USER: 'https://console.axisnow.xyz/',
        CONSOLE: 'http://admin.axisnow.xyz'
      },
      isPC: false
    };
  },
  computed: {
    ...mapGetters(['user', 'avatar', 'name']),
    year() {
      return new Date().getFullYear();
    },
    account_th() {
      return this.avatar || th_default;
    }
  },
  mounted() {
    const token = getQueryVariable('token') || '';
    if (!!token) {
      this.$store.dispatch('user/verifyToken', token);
    }
    window.addEventListener('resize', this.handleResize)
    this.isMobile()
  },
  methods: {
    handleLogin(TYPE) {
      if (defaultSettings.signIn) {
        removeToken();
        localStorage.clear();
        window.location.replace(defaultSettings.signIn, '_self');
      }
    },

    handleConsole(TYPE) {
      if (!localStorage.getItem('token')) return;
      window.open(
        this.console[TYPE] + '?token=' + localStorage.getItem('token'),
        '_self'
      );
    },
    isMobile() {
      if(isMobile()){
        this.isPC = false
      }else{
        this.isPC = true
      }
    },
    handleResize() {
      this.$nextTick(() =>{
        this.isMobile()
      })
    }
  }
};

function isMobile(){
  if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true; // 移动端
  }else{
    return false; // PC端
  }
}
</script>
<style lang="scss" scoped>
.header-box {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid rgba(229, 235, 255, 0.28);
  .head-conter {
    max-width: 1200px;
    margin: auto;
    padding-left: 0;
    height: 64px;
  }
}
.logo {
  display: inline-block;
  height: 100%;
  padding: 5px 0;
  .img {
    width: 160px;
  }
}
.box-r {
  float: right;
  height: 100%;
}

.login-btn {
  width: 110px;
  height: 48px;
  font-size: 20px;
  line-height: 45px;
  border-radius: 35px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(229, 235, 255, 0.508);
  margin: 10px 1rem 0;
  display: inline-block;
}
.login-btn-mobile {
  width: 85px;
  height: 40px;
  font-size: 1.1rem;
  line-height: 35px;
  border-radius: 35px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(229, 235, 255, 0.508);
  margin: 10px 1rem 0;
  display: inline-block;
}
.login-btn:hover {
  background-color: #ffffff30;
}
.link-item {
  width: 110px;
  height: 48px;
  font-size: 17px;
  line-height: 45px;
  font-weight: 500;
  color: #fff;
  text-align: center;
}
.avatar-wrapper {
  height: 100%;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #fff;
}
</style>