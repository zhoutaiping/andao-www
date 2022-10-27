

<template>
  <div class="footer-end">
    Copyright @{{ year }}
    All Rights Reserved.
  </div>
</template>

<script>
import logoFull from '@/assets/images/logo-full.svg';
export default {
  data() {
    return {
      logoFull
    };
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style lang="scss" scoped>
.footer-end {
  width: 1200px;
  height: 70px;
  line-height: 60px;
  margin: 0 auto;
  text-align: left;
  color: #fff;
  padding: 8px;
  border-top: 1px solid rgba(229, 235, 255, 0.08);
  .logo-full {
    width: 100px;
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>