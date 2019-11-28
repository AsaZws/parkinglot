<template>
  <div id="resume">
    <router-view></router-view>
    子页面
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
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

export default {
  name: 'resume',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less">

</style>
