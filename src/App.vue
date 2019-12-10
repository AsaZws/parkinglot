<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
body {
  background-color: #F6F8FA;
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
}
</style>
