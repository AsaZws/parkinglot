<template>
  <div class="e-wallet">
    <van-nav-bar
      title="电子钱包"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />



  </div>
</template>
<script>
import Vue from 'vue';
import Store from 'store/index';
import { NavBar, Cell, CellGroup } from 'vant';

Vue.use(NavBar).use(Cell).use(CellGroup);

export default {
  name: 'resume',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>


<style lang="less">
.e-wallet {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 9;
}
</style>
