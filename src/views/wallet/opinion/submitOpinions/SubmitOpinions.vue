<template>
  <div class="submitOpinions">
    <van-nav-bar
      title="提交意见"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  <div class="container">
    <van-cell-group :title="this.$route.query.title">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请填写10个字以上的问题描述以便我们提供更好的帮助"
        show-word-limit
      />
    </van-cell-group>

    <div class="van-cell-group__title">截图({{ fileList.length }}/{{ maxCount }})</div>
    <van-uploader 
      v-model="fileList" 
      :max-count="maxCount" 
      multiple 
      :before-read="beforeRead" 
    />
    <van-button style="margin-top: 24px;" type="primary" size="large" color="#5093FF">提交</van-button>
  </div>

  </div>
</template>

<script>
import Vue from 'vue';

import { NavBar, Uploader, Toast, Cell, CellGroup, Field, Button } from 'vant';
Vue.use(NavBar).use(Uploader).use(Toast).use(Cell).use(CellGroup).use(Field).use(Button);

export default {
  name: 'submitOpinions',
  data () {
    return {
      message: '',
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
        ],
      maxCount: 3
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
    
      return true;
    },

    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    }

  }
}

</script>

<style lang="less">
.submitOpinions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9;
  .container {
    padding: 0 16px;
    .van-cell-group__title {
      padding: 16px 4px 12px;
      color: #595959;
      font-size: 16px;
      line-height: 16px;
    }
    .van-cell-group {
      margin-bottom: 12px;
    }
  }
}
</style>
