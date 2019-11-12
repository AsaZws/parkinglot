<template>
  <div id="app">
    <router-view/>
    <tabbar safe-area-inset-bottom />
  </div>
</template>
<script>
import Tabbar from 'components/tabbar/Tabbar';

export default {
  name: 'app',
  components: {
    Tabbar
  }
}
</script>

<style lang="less">
</style>
