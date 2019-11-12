<template>
  <div id="wallet">
    <navbar/>
    <div style="height:50px;"></div>
    <!-- 头像 -->
    <van-row type="flex" justify="center">
      <van-col span="12" style="text-align:center">
        <van-image
          round
          width="5.4rem"
          height="5.4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="van-ellipsis">{{ title }}</div>
      </van-col>
    </van-row>
    <!-- 数据展示 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>

    <van-cell title="电子钱包" is-link to="index" icon="location-o" />
  </div>
</template>
<script>
import Vue from 'vue';
import Navbar from 'components/navbar/Navbar';
import { Image, Row, Col, Cell, CellGroup } from 'vant';

Vue.use(Image).use(Row).use(Col).use(Cell).use(CellGroup);

export default {
  name: 'wallet',
  components: {
    Navbar
  },
  data() {
    return {
      title: "拾光"
    }
  }
}
</script>

<style lang="less">
</style>
