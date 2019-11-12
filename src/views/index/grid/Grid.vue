<template>
  <div id="grid">
    <van-grid 
      :column-num="3"
      :border="true"
      :clickable="true"
      :icon-size="48"
      :gutter="0">
      <van-grid-item
        v-for="(item, index) in menus"
        :key="index"
        :icon="(item.menusImg)"
        :text="(item.name)"
      />
  </van-grid>
  </div>
</template>
<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
export default {
  name: 'index',
  data() {
    return {
      
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
</style>
