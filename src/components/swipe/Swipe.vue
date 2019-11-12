<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);

export default {
  name: "swiper",
  data() {
    return {
      SwiperImg: [
        require("assets/images/swiper-1.png"),
        require("assets/images/swiper-2.png"),
        require("assets/images/swiper-3.png")
      ]
    }
  }
};
</script>
<style lang="less" scoped>
   .swiper {
     width: 100%;
		 img {
			width: 100%;
     	height: 12rem;
		 }
  }
</style>