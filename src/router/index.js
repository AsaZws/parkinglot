import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('views/index/Index');
const Wallet = () => import('views/wallet/Wallet');
const Resume = () => import('views/wallet/resume/Resume');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    meta: {
      title: '服务',
      key: 0
    }
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
    name: 'wallet',
    component: Wallet,
    meta: {
      title: '钱包',
      key: 1
    },
    children: [
      {
        path: 'resume',
        name: 'resume',
        component: Resume
      }
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
