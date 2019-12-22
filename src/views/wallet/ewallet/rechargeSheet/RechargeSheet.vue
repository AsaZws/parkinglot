<template>
  <div class="recharge-sheet">
    <van-nav-bar
      title="充值明细"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);

export default {
  name: 'rechargeSheet',
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i=0; i<10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 结束状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500)
    }
  }
}
</script>

<style lang="less">
.recharge-sheet {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 10;
}
</style>
