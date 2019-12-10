<template>
  <div id="wallet">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'wallet',
  components: {
  },
  data() {
    return {
      transitionName: ""
    }
  },
  watch: {
    '$route' (to, from) {
      let toName = to.name

      const toIndex = to.meta.index
      const fromIndex = from.meta.index

      this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="less">

@keyframes slideInLeft {
    from {
        transform: translate3d(100%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.35;
    }
    to {
        transform: translate3d(0, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.35;
    }
}
@keyframes slideInRight {
    from {
        transform: translate3d(0%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
    }
    to {
        transform: translate3d(-100%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
    }
}
.slide-left-enter-active{
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideInLeft 0.35s linear forwards;
}
.slide-left-leave-active{
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideInRight 0.35s linear forwards;
}
/*向右滑动*/
@keyframes slideOutLeft {
    from {
        transform: translate3d(-100%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
    }
    to {
        transform: translate3d(0%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
    }
}
@keyframes slideOutRight {
    from {
        transform: translate3d(0%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
    }
    to {
        transform: translate3d(100%, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
    }
}
.slide-right-enter-active{
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideOutLeft 0.1s linear forwards;
}
.slide-right-leave-active{
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideOutRight 1s linear forwards;
}
</style>
