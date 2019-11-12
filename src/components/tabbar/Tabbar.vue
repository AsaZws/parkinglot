<template>
  <div class="tabbar">
    <van-tabbar active-color="#108DE9" v-model="active">
      <van-tabbar-item v-for="(item, index) in tabbars" :key="index" :to="(item.name)">
        <span>{{ item.title }}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.inactive" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { log } from 'util';

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/index",
          title: "主页",
          active: require('assets/images/home-on.png'),
          inactive: require('assets/images/home-off.png')
        },
        {
          name: "/wallet",
          title: "钱包",
          active: require('assets/images/nav-my-on.png'),
          inactive: require('assets/images/nav-my-off.png')
        }
      ]
    }
  },
    //通过路由跳转判断选中的样式
  beforeCreate() {
    console.log(this.$route.path);
    
    if (this.$route.name == "index") {
      this.active = 0;
    } else if (this.$route.name == "wallet") {
      this.active = 1;
    }
  },
  updated() {
    console.log(this.$route.path);
  }
};
</script>
<style lang="less" scoped>
</style>