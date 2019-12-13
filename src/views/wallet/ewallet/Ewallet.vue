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
        <strong>{{ userinfo.walletBalance }}.00</strong>
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell 
        title="充值" 
        to="/wallet/ewallet/recharge" 
        :icon="require('assets/images/recharge.png')" 
        is-link 
      />
    </van-cell-group>

    <van-cell-group title="如果同时打开，优先钱包支付">
      <van-switch-cell 
        :icon="require('assets/images/wallet-pay.png')" 
        v-model="checked1" 
        @click="onInput(checked1, '钱包支付')" 
        title="钱包支付" 
      />
      <van-switch-cell 
        :icon="require('assets/images/fast.png')" 
        v-model="checked2" 
        @click="onInput(checked2, '无感支付')" 
        title="无感支付" 
      />
    </van-cell-group>

    <van-cell-group title="第三方应用">
      <van-cell title="建行无感支付" :icon="require('assets/images/my_month_cbb.png')" is-link />
    </van-cell-group>

    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>
import Vue from 'vue';
import Store from 'store/index';
import { Row, Col, NavBar, Cell, CellGroup, SwitchCell, Toast } from 'vant';

Vue.use(Row).use(Col).use(NavBar).use(Cell).use(CellGroup).use(SwitchCell).use(Toast);

export default {
  name: 'resume',
  components: {
  },
  data() {
    return {
      checked1: true,
      checked2: true,
      // 用户信息
      userinfo: {
        walletBalance: Store.state.walletBalance,  // 钱包余额
      },
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onInput(checked, text) {
      if(!checked) {
        Toast.success(text + "绑定成功");
      } else {
        Toast.fail(text + '取消绑定');
      }
    }
  }
}
</script>
<style lang="less" scoped>
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
  // 修改vant cell图标大小
  .van-icon__image {
    width: 24px;
    height: 24px;
  }
}
  .router-slid-enter-active, .router-slid-leave-active {
      transition: all .35s;
  }
  .router-slid-enter, .router-slid-leave-active {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
  }
</style>
