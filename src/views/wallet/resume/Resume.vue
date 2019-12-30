<template>
  <div id="resume">
    <van-nav-bar
      title="我的信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="resume">
      <van-cell-group class="resume-magges">
        <van-cell title="头像">
          <van-image
            round
            width="3.2rem"
            height="3.2rem"
            :src="require('assets/images/logo.png')"
            style="margin-bottom: -7px;"
          />
        </van-cell>
      </van-cell-group>
      <van-cell-group class="resume-magges">

        <van-cell 
          v-for="(item, index) in message" 
          :key="index" 
          :title="item.title" 
          :value="item.value"
        />
        
      </van-cell-group>
      <van-button style="margin-top: 24px;" type="primary" size="large" color="#5093FF">获取微信头像与昵称</van-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Store from 'store/index';
import { Image, NavBar, Cell, CellGroup, Button } from 'vant';

Vue.use(Image).use(NavBar).use(Cell).use(CellGroup).use(Button);

export default {
  name: 'resume',
  components: {
  },
  data() {
    return {
      message: [
        {
          title: '昵称',
          value: '拾光'
        },
        {
          title: '性别',
          value: '男'
        },
        {
          title: '电话号码',
          value: '17764810319'
        },
        {
          title: '国家',
          value: '中国-重庆'
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
#resume {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 9;
  .resume {
    padding: 16px;
    .resume-magges {
      margin-bottom: 10px;
      .van-cell__title {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
