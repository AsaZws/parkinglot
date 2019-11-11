<template>
  <div id="index">
    <swipe></swipe>
    <tabbar safe-area-inset-bottom />
  </div>
</template>
<script>
import Swipe from 'components/swipe/Swipe';
import Tabbar from 'components/tabbar/Tabbar';

export default {
  name: 'index',
  components: {
    Swipe,
    Tabbar
  }
}
</script>

<style lang="less">
</style>
