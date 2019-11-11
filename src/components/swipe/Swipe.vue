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
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
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