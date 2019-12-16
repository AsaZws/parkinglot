<template>
  <div class="inform">
    <van-nav-bar
      title="通知设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group title="如果取消勾选，将不会收到钱包扣款通知！">
      <van-switch-cell 
        :icon="require('assets/images/wallet-pay.png')" 
        v-model="checked" 
        title="钱包扣款通知" 
        @click="onInput(checked, '钱包扣款通知')" 
      />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue';
// import Store from 'store/index';
import { NavBar, Cell, CellGroup, SwitchCell, Toast } from 'vant';

Vue.use(NavBar).use(Cell).use(CellGroup).use(SwitchCell).use(Toast);
export default {
  name: 'inform',
  data () {
    return {
      checked: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onInput(checked, text) {
      if(!checked) {
        Toast.success('开启' + text);
      } else {
        Toast.fail('关闭' + text);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.inform {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 9;
}
</style>
