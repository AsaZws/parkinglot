import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('views/index/Index');
const Wallet = () => import('views/wallet/Wallet');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    meta: {
      title: '服务'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '服务'
    }
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet,
    meta: {
      title: '钱包'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,form,next) =>{
  /*路由变化修改title*/
  if(to.meta.title){
      document.title=to.meta.title
  }
  next();
})
export default router
