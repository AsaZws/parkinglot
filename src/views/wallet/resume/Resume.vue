<template>
  <div id="resume">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
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
#resume {
  .navbar {
    margin-bottom: 50px;
  }
}
</style>
