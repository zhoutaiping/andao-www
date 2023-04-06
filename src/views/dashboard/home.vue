<style lang="scss" scoped>
</style>
<template>
  <div :style="{
    'min-width': isPC ? '1440px' :'100vw'
  }">
    <Head />
    <CenterView />
  </div>
</template>

<script>
import Head from './components/head';
import CenterView from './components/center-view';
export default {
  name: 'HomePage',
  components: { Head, CenterView },
  data() {
    return {
      isPC: true
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.isMobile()
  },
  methods: {
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

