<template>
  <div id="resume">
    <van-nav-bar
      title="我的信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="resume">
      <van-cell-group class="resume-magges">
        <van-cell title="头像" value="内容" />
      </van-cell-group>
      <van-cell-group class="resume-magges">
        <van-cell title="昵称" value="拾光" />
        <van-cell title="性别" value="男" />
        <van-cell title="电话号码" value="17764810319" />
        <van-cell title="国家" value="中国-重庆" />
      </van-cell-group>
      <van-button style="margin-top: 24px;" type="primary" size="large" color="#5093FF">获取微信头像与昵称</van-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Store from 'store/index';
import { NavBar, Cell, CellGroup, Button } from 'vant';

Vue.use(NavBar).use(Cell).use(CellGroup).use(Button);

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
  .resume {
    padding: 16px;
    .resume-magges {
      margin-bottom: 10px;
    }
  }
}
</style>
