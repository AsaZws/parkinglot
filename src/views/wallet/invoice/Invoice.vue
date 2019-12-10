<template>
  <div class="invoice">
    <van-nav-bar
      title="电子发票"
      left-text="返回"
      right-text="发票历史"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
      scrollable
    >
      缴费记录长期支持开票，官方建议您金额累计后批量开具，如有问题请通过问题反馈告知我们，前海SPOM祝您生活愉快！
    </van-notice-bar>

    <van-submit-bar
      :price="3050"
      button-text="提交订单"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span>
    </van-submit-bar>

  </div>
</template>
<script>
import Vue from 'vue';
// import Store from 'store/index';
import { NavBar, NoticeBar, SubmitBar, Checkbox, CheckboxGroup } from 'vant';

Vue.use(NavBar).use(NoticeBar).use(SubmitBar).use(Checkbox).use(CheckboxGroup);

export default {
  name: 'invoice',
  components: {
  },
  data() {
    return {
      checked: true
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
.invoice {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 9;
}
</style>
