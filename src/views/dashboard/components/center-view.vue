<style lang="scss" scoped>
.dashboard-center {
  position: relative;
  background-color: rgb(255, 255, 255);
}

.banner-box {
  width: 100%;
  height: calc(100vh);
  overflow: hidden;
  background-image: url('../../../../public/bg.jpg');
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

  .center-box {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    z-index: 99999;
    color: #ffffff;
    font-family: 'TT Hoves', sans-serif;

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
      <div class="Container"></div>
      <div class="center-box">
        <div class="title-box">{{ title }}</div>
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
import CenterAction from './center-action';
import CenterSection from './center-section';
import Foot from './foot';
import defaultSettings from '@public/settings';
import { removeToken } from '@/utils/auth';

export default {
  components: { CenterAction, CenterSection, Foot },
  data() {
    return {
      title: '??????????????????????????????',
      desc: '??????ZTNA??????    ????????????DDoS?????????    ??????DDoS??????',
      itemDesc: [
        {
          icon: 'qj_01',
          title: '????????????',
          desc: '????????????????????????????????????????????????'
        },
        {
          icon: 'qj_02',
          title: '????????????',
          desc: 'AI?????????????????????????????????????????????????????????????????????'
        },
        {
          icon: 'qj_03',
          title: '????????????',
          desc: '?????????????????????????????????????????????????????????????????????'
        }
      ]
    };
  },
  methods: {
    handleLogin(TYPE) {
      if (defaultSettings.signIn) {
        removeToken();
        localStorage.clear();
        window.location.replace(defaultSettings.signIn, '_self');
      }
    }
  }
};
</script>
