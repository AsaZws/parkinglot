import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state在vuex中存储数据
let state = {
  walletBalance : 360,  // 钱包剩余
  timeRemaining : 0.08,  // 剩余停车时长
  bindingPlates: 3,  // 绑定车牌数量
}

// 实例化vuex.store
export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// 导出
// export default store;
