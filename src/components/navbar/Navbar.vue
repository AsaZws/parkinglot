<template>
  <div class="navbar">
    <van-nav-bar fixed title="钱包" left-text="返回" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
  </div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

export default {
  name: "navbar",
  data() {
    return {
    }
  }
};
</script>
<style lang="less" scoped>
</style>