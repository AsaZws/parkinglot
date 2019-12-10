<template>
  <div class="e-wallet">
    <van-nav-bar
      title="电子钱包"
      left-text="返回"
      right-text="钱包明细"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-row>
      <van-col span="24">
        <p>余额(元)</p>
        <strong>0.00</strong>
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell title="充值" icon="location-o" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-switch-cell icon="location-o" v-model="checked" title="钱包支付" />
      <van-switch-cell icon="location-o" v-model="checked" title="无感支付" />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="建行无感支付" icon="location-o" is-link />
    </van-cell-group>

  </div>
</template>
<script>
import Vue from 'vue';
// import Store from 'store/index';
import { Row, Col, NavBar, Cell, CellGroup, SwitchCell } from 'vant';

Vue.use(Row).use(Col).use(NavBar).use(Cell).use(CellGroup).use(SwitchCell);

export default {
  name: 'resume',
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
    },
    onInput(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked;
      });
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
  .van-row {
    color: #fff;
    background-color: #5093FF;
    padding: 16px;
    .van-col {
      p {
        margin: 0;
        line-height: 36px;
        font-size: 14px;
        font-weight: 100;
      }
      strong {
        font-size: 36px;
      }
    }
  }
  .van-cell-group {
    margin-bottom: 12px;
  }
}
</style>
