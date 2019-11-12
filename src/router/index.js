import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('views/index/Index');
const Wallet = () => import('views/wallet/Wallet');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/wallet',
    component: Wallet
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
