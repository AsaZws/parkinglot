<template>
  <div id="index">
    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 主内容 -->
    <div class="container">
      <van-notice-bar
        color="#1989fa"
        background="#ecf9ff"
        :left-icon="inform"
        scrollable
      >
        欢迎使用前海SPOM智慧终端！
      </van-notice-bar>
    </div>
    <!-- 菜单 -->
    <van-grid 
      :column-num="3"
      :border="false"
      :clickable="true"
      :icon-size="48"
      :square="true" 
      :gutter="10">
      <van-grid-item 
        class="menu-grid"
        v-for="(item, index) in menus"
        :key="index"
        :icon="(item.menusImg)"
        :text="(item.name)"
      />
    </van-grid>

    <!-- 底部占位 -->
    <div style="height:50px;"></div>
  </div>
</template>
<script>
import Vue from 'vue';

import { Swipe, SwipeItem, Grid, GridItem, NoticeBar, CellGroup } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(NoticeBar).use(CellGroup);

export default {
  name: 'index',
  data() {
    return {
      // 轮播图
      SwiperImg: [
        require("assets/images/swiper-1.png"),
        require("assets/images/swiper-2.png"),
        require("assets/images/swiper-3.png")
      ],
      // 通知图标
      inform: require("assets/images/inform1.png"),
      menus: [
        {
          name: "预约车位",
          menusImg: require('assets/images/icon_nav_dialog.png')
        },
        {
          name: "一键锁车",
          menusImg: require('assets/images/unlockLock.png')
        },
        {
          name: "操作指引",
          menusImg: require('assets/images/OperationManual.png')
        },
        {
          name: "快速缴费",
          menusImg: require('assets/images/fast-payment.png')
        },
        {
          name: "我的记录",
          menusImg: require('assets/images/myOrder.png')
        },
        {
          name: "我的车牌",
          menusImg: require('assets/images/myLicense.png')
        }
      ]
    }
  }
}
</script>

<style lang="less">
#index {
  .swiper {
    width: 100%;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .container {
    margin-bottom: 10px;
  }
  .van-grid-item__content--center {
    border-radius: 8px;
  }
}
</style>
