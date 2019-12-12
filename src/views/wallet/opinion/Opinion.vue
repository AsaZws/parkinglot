<template>
  <div class="opinion">
    <van-nav-bar
      title="意见反馈"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group title="请选择反馈内容">
      <van-cell 
        v-for="(item, index) in opinionTitle" 
        :title="item.opinionName" 
        :to="item.opinionRouter + '/?title=' + item.opinionName" 
        :key="index" 
        clickable 
        is-link 
      />
    </van-cell-group>

    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

import { NavBar, Cell, CellGroup } from 'vant';
Vue.use(NavBar).use(Cell).use(CellGroup);

export default {
  name: 'opinion',
  data () {
    return {
      opinionTitle: [
        {
          opinionName: "对停车费有疑问",
          opinionRouter: "/wallet/opinion/submitOpinions"
        },
        {
          opinionName: "无法开具电子发票",
          opinionRouter: "/wallet/opinion/submitOpinions"
        },
        {
          opinionName: "对停车记录有疑问",
          opinionRouter: "/wallet/opinion/submitOpinions"
        },
        {
          opinionName: "其他问题",
          opinionRouter: "/wallet/opinion/submitOpinions"
        }
      ]
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
.opinion {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 9;
}
  .router-slid-enter-active, .router-slid-leave-active {
      transition: all .35s;
  }
  .router-slid-enter, .router-slid-leave-active {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
  }
</style>
