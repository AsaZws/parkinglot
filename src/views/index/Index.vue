<template>
  <div id="index">
    <swipe />
    <grid />
  </div>
</template>
<script>
import Swipe from 'components/swipe/Swipe';
import Grid from './grid/Grid';

export default {
  name: 'index',
  components: {
    Swipe,
    Grid
  }
}
</script>

<style lang="less">
</style>
