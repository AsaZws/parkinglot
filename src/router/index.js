import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('views/index/Index');
const Wallet = () => import('views/wallet/Wallet');
// const Home = () => import('views/home/Home');
// 钱包下二级路由
// const walletIndex = () => import('views/wallet/index/Index');
const Resume = () => import('views/wallet/resume/Resume');
const Ewallet = () => import('views/wallet/ewallet/Ewallet');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '服务',
      key: 0
    }
  },
  {
    path: '/wallet',
    component: Wallet,
    meta: {
      title: '钱包',
      key: 1
    },
    children: [
      {
        path: 'resume',
        component: Resume
      },
      {
        path: 'ewallet',
        component: Ewallet
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,form,next) =>{
  // 路由改变title跟着改变
  if(to.meta.title){
      document.title=to.meta.title
  }
  next();
})

export default router
