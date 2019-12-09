<template>
  <div class="e-wallet">
    <van-nav-bar
      title="电子钱包"
      left-text="返回"
      right-text="按钮"
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

</style>
