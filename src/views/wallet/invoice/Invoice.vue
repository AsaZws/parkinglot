<template>
  <div class="invoice">
    <van-nav-bar
      title="电子发票"
      left-text="返回"
      right-text="发票历史"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
      scrollable
    >
      缴费记录长期支持开票，官方建议您金额累计后批量开具，如有问题请通过问题反馈告知我们，前海SPOM祝您生活愉快！
    </van-notice-bar>

    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="`复选框 ${item}`"
          @click="toggle(index)"
        >
          <van-checkbox
            :name="item"
            ref="checkboxes"
            slot="right-icon"
          />
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>

    <van-submit-bar
      :price="0"
      button-text="提交申请"
    >
    <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>

  </div>
</template>
<script>
import Vue from 'vue';
// import Store from 'store/index';
import { NavBar, NoticeBar, SubmitBar, Checkbox, CheckboxGroup, Cell, CellGroup } from 'vant';

Vue.use(NavBar).use(NoticeBar).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Cell).use(CellGroup);

export default {
  name: 'invoice',
  components: {
  },
  data() {
    return {
      checked: true,
      result: [],
      list: [
        "缴费记录1",
        "缴费记录2"
      ],
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      }
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
.invoice {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F8FA;
  z-index: 9;
  .van-checkbox {
    margin-left: 16px;
  }
  .van-submit-bar__price {
    color: #1989FA;
    font-size: 18px;
  }
  .van-button--danger {
    color: #fff;
    background-color: #1989FA;
    border: 1px solid #1989FA;
  }
}
</style>
