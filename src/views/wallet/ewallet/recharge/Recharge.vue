<template>
  <div class='recharge'>
    <van-nav-bar
      title="钱包充值"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group style="margin-top: 12px;">
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

    <van-row type="flex" justify="space-around">
      <van-col 
        span="5" 
        gutter="12" 
        v-for="(item, index) in moneys"
        :key="index"
      >
        ¥{{ item }}
      </van-col>
    </van-row>
    <van-cell-group 
      title="1.充值后，优先电子钱包缴费；"
      />

    <div class="container">
      <van-button style="margin-top: 24px;" type="primary" size="large" color="#5093FF">立即充值</van-button>
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
      value: '',
      moneys: [ 50, 100, 200, 400, 500, 600, 800, 1000 ]
   }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
    .van-row {
      background-color: #fff;
      padding: 12px;
      .van-col {
        color: #fff;
        background-color: #5093FF;
        text-align: center;
        line-height: 32px;
        flex: 1;
        width: 20%;
      }
    }
    .container {
      background-color: #fff;
      padding: 16px;
    }
  }
</style>
