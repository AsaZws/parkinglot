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

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "index",
          title: "服务",
          active: require('assets/images/home-on.png'),
          inactive: require('assets/images/home-off.png')
        },
        {
          name: "wallet",
          title: "钱包",
          active: require('assets/images/nav-my-on.png'),
          inactive: require('assets/images/nav-my-off.png')
        }
      ]
    }
  },
  watch: {
    // 跳转路由的时候监听一次路由的key值
    '$route' (to, from) {
      this.active = to.meta.key;
    }
  },
  created() {
    //通过路由跳转判断选中的样式
    if (this.$route.name == "index") {
      this.active = 0;
    } else if (this.$route.name == "wallet") {
      this.active = 1;
    }
  }
};
</script>
<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
@supports (bottom: env(safe-area-inset-bottom)) {
  .tabbar {
    margin-bottom: env(safe-area-inset-bottom);
  }
}
</style>