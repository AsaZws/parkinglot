<template>
  <div class='recharge'>
    
    <van-nav-bar
      title="钱包充值"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group>
      <van-field
        readonly
        clickable
        label="充值金额:"
        placeholder="请输入充值金额(元)"
        :value="value"
        @touchstart.native.stop="show = true"
      />
      <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="4"
        @blur="show = false"
      />
    </van-cell-group>

    <van-row type="flex" justify="space-between">
      <van-col 
        align="center" 
        v-for="(item, index) in moneys"
        :key="index"
        @click="inputMoney(index, item)"
        :class="{active: index === isActive}"
      >
        ¥{{ item }}
      </van-col>
    </van-row>

    <div class="recharge-prompt van-hairline--top">
      <div 
        class="van-multi-ellipsis--l2"
        v-for="(item, index) in rechargePrompt" 
        :key="index"
      >
        {{ index+1 + '.' + item + ';' }}
      </div>
    </div>

    <div class="container">
      <van-button 
        style="margin-top: 24px;" 
        type="primary" 
        size="large" 
        color="#5093FF">立即充值</van-button>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import Store from 'store/index';
import { NavBar, Row, Col, Field, Toast, Button, NumberKeyboard } from 'vant';

Vue.use(NavBar).use(Row).use(Col).use(Field).use(Toast).use(Button).use(NumberKeyboard);
export default {
  name:'recharge',
  data(){
   return {
      show: false,
      isActive: -1,
      value: '',
      moneys: [ 100, 200, 400, 500, 800, 1000, 2000, 5000 ],
      rechargePrompt: [
        "充值后，优先电子钱包缴费",
        "为确保电子钱包正常使用，请开启钱包支付",
        "余额不足时，不支持部分抵扣",
        "充值后余额不支持退费，请谨慎充值"
      ]
   }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    inputMoney(index, m) {
      this.isActive = index;
      this.value = m + '';
    }
  }
}
</script>

<style lang='less' scoped>
  .recharge {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F6F8FA;
    z-index: 10;
    .van-cell-group {
      padding-top: 12px;
    }
    .van-row {
      background-color: #fff;
      padding: 12px 12px 0;
      flex-wrap: wrap;
      .van-col {
        color: #5093FF;
        background-color: rgb(232, 240, 255);
        border: 1px solid rgb(143, 186, 255);
        border-radius: 4px;
        line-height: 32px;
        margin-bottom: 12px;
        width: calc(25% - 8px);
      }
      .active {
        background-color: #5093FF;
        color: #fff;
      }
    }
    .recharge-prompt {
      color: #898989;
      background-color: #fff;
      padding: 0 16px;
      line-height: 30px;
      font-size: 14px;
    }
    .container {
      background-color: #fff;
      padding: 16px;
    }
  }
</style>
