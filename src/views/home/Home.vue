<template>
  <div id="home">
    <router-view></router-view>
    <tabbar safe-area-inset-bottom />
  </div>
</template>
<script>
import Tabbar from 'components/tabbar/Tabbar';

export default {
  name: 'home',
  components: {
    Tabbar
  }
}
</script>

<style lang="less">
body {
  background-color: #F6F8FA;
}
</style>
