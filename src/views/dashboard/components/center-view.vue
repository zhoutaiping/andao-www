<style lang="scss" scoped>
.dashboard-center {
  position: relative;
  background-color: rgb(255, 255, 255);
}

.banner-box {
  width: 100%;
  height: calc(100vh);
  overflow: hidden;
  background-image: url("../../../../public/bg-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .Container {
    width: 46.5%;
    height: 100vh;
    background-color: rgba(8, 8, 8, 0.5);
    position: absolute;
    left: 0;
    overflow: hidden;
  }

  .Container-mobile {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(8, 8, 8, 0.5);
    left: 0;
    overflow: hidden;
  }

  .center-box {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    z-index: 99999;
    color: #ffffff;
    font-family: "TT Hoves", sans-serif;

    .title-box {
      font-size: 40px;
      font-weight: 700;
      position: relative;
      margin-top: 30vh;
      margin-bottom: 5vh;
    }

    .desc-box {
      position: relative;
      font-size: 20px;
      font-weight: 600;
    }

    .link-box {
      width: 175px;
      height: 60px;
      position: relative;
      border-radius: 35px;
      margin-top: 7vh;
      border: 1px solid rgba(255, 255, 255, 0.35);
      text-align: center;
      font-size: 20px;
      line-height: 55px;
      font-weight: 600;
      cursor: pointer;
    }

    .link-box:hover {
      background-color: #ffffff30;
    }
  }
}

.center-box-mobile {
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  z-index: 99999;
  color: #ffffff;
  font-family: "TT Hoves", sans-serif;
  .title-box {
    font-size: 1.5rem;
    font-weight: 700;
    position: relative;
    margin-top: 15vh;
    margin-bottom: 5vh;
    text-align: center;
  }

  .desc-box {
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  .link-box {
    width: 175px;
    height: 60px;
    position: relative;
    border-radius: 35px;
    margin-top: 7vh;
    border: 1px solid rgba(255, 255, 255, 0.35);
    text-align: center;
    font-size: 20px;
    line-height: 55px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 auto;
    top: 5vh;
  }

  .link-box:hover {
    background-color: #ffffff30;
  }
}
.section {
  position: absolute;
  width: 100%;
  top: 150px;
  // left: 50%;
  // transform: translate(-50%,0%);
}
</style>

<template>
  <div class="dashboard-center">
    <div class="banner-box">
      <div :class="{ 'Container':isPC, 'Container-mobile' : !isPC }"></div>
      <div :class="{ 'center-box':isPC, 'center-box-mobile' : !isPC }">
        <div :class="['title-box', ]">{{ title }}</div>
        <div class="desc-box">{{ desc }}</div>
        <div class="link-box" @click="handleLogin">Get Start</div>
      </div>
    </div>

    <!-- <div class="section">
      <CenterSection />
      <CenterAction />
      <Foot />
    </div>-->
  </div>
</template>

<script>
import CenterAction from "./center-action";
import CenterSection from "./center-section";
import Foot from "./foot";
import defaultSettings from "@public/settings";
import { removeToken } from "@/utils/auth";

export default {
  components: { CenterAction, CenterSection, Foot },
  data() {
    return {
      title: "护航在线业务高速增长",
      desc: "基于ZTNA思想    彻底消除DDoS攻击面    杜绝DDoS攻击",
      itemDesc: [
        {
          icon: "qj_01",
          title: "软件定义",
          desc: "零信任技术架构，打破传统安全边界",
        },
        {
          icon: "qj_02",
          title: "智能主动",
          desc: "AI安全大脑全方位管控威胁，智能拆分调度定位攻击者",
        },
        {
          icon: "qj_03",
          title: "贴合业务",
          desc: "定制精细化策略贴合业务特点，兼顾安全和业务性能",
        },
      ],
      isPC: false, // true: pc设备, false: 移动设备
    };
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.isMobile()
  },
  methods: {
    handleLogin(TYPE) {
      if (defaultSettings.signIn) {
        removeToken();
        localStorage.clear();
        window.location.replace(defaultSettings.signIn, "_self");
      }
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
}

function isMobile(){
  if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true; // 移动端
  }else{
    return false; // PC端
  }
}
</script>
