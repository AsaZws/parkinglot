<template>
  <div class="wallet">
    <div class="wallet-index">
      <!-- 头像 -->
      <van-row type="flex" justify="center" class="head-portrait">
        <van-col span="12">
          <router-link to="/wallet/resume">
            <van-image
              class="head-img"
              round
              width="5.2rem"
              height="5.2rem"
              :src="userinfo.headImg"
            />
            <div class="van-ellipsis">{{ userinfo.title }}</div>
          </router-link>
        </van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
      <!-- 数据展示 -->
      <van-row type="flex" justify="space-around" class="head-massage">
        <van-col span="8" class="head-massage1">
          <p>钱包余额</p>
          <h3>{{ userinfo.walletBalance }}元</h3>
        </van-col>
        <van-col span="8" class="head-massage2">
          <p>已绑定车辆</p>
          <h3>{{ userinfo.bindingPlates }}辆</h3>
        </van-col>
        <van-col span="8" class="head-massage3">
          <p>剩余时长</p>
          <h3>{{ userinfo.timeRemaining }}小时</h3>
        </van-col>
      </van-row>

      <!-- 个人菜单 -->
      <div class="main-menu">
        <van-cell title="电子钱包" size="large" clickable is-link to="/wallet/ewallet" :icon="mainMenu.walletImg" />
        <van-cell title="电子发票" size="large" clickable is-link :icon="mainMenu.invoiceImg" />
      </div>
      <div class="main-menu">
        <van-cell title="通知设置" size="large" clickable is-link :icon="mainMenu.informImg" />
        <van-cell title="意见反馈" size="large" :clickable="true" is-link :icon="mainMenu.ideaImg" />
      </div>
      <!-- 底部占位 -->
      <div style="height:50px;"></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

import Store from 'store/index';
import { Image, Row, Col, Cell, CellGroup, Overlay, Loading } from 'vant';

Vue.use(Image).use(Row).use(Col).use(Cell).use(CellGroup).use(Overlay).use(Loading);

export default {
  name: 'wallet',
  components: {
    
  },
  data() {
    return {
      show: false,
      // 用户信息
      userinfo: {
        title: "拾光",
        headImg: require('assets/images/logo.png'),
        walletBalance: Store.state.walletBalance,  // 钱包余额
        bindingPlates: Store.state.bindingPlates,  // 绑定车牌数
        timeRemaining: Store.state.timeRemaining  //剩余停车时长
      },
      mainMenu: {
        walletImg: require('assets/images/wallet.png'),
        invoiceImg: require('assets/images/invoice.png'),
        informImg: require('assets/images/inform.png'),
        ideaImg: require('assets/images/idea.png'),
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wallet {
  // 头像
  .head-portrait {
    background-color: #fff;
    color: #333;
    text-align: center;
    padding: 16px 0;
    .head-img {
      padding: 8px;
      background: rgba(0, 0, 0, 0.05);
    }
  }
  // 钱包余额，绑定车辆，剩余时长
  .head-massage {
    background-color: #fff;
    margin-bottom: 12px;
    p, h3 {
      line-height: 10px;
    }
    p {
      font-size: 16px;
      color: #888;
    }
    h3 {
      font-weight: 400;
      font-size: 20px;
    }
    .head-massage1 {
      border-right: 1px solid #f2f2f2;
    text-align: center;
      h3 {
        color: #FF7F82;
      }
    }
    .head-massage2 {
      border-right: 1px solid #f2f2f2;
    text-align: center;
      h3 {
        color: #36B88C;
      }
    }
    .head-massage3 {
    text-align: center;
      h3 {
        color: #5093FF;
      }
    }
  }
  // cell菜单
  .main-menu {
    margin-bottom: 8px;
    // 修改vant cell图标大小
    .van-icon__image {
      width: 24px;
      height: 24px;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
}
</style>
