import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('views/index/Index');
const Wallet = () => import('views/wallet/Wallet');
// 钱包下二级路由
// 个人信息
const Resume = () => import('views/wallet/resume/Resume');
// 电子钱包
const Ewallet = () => import('views/wallet/ewallet/Ewallet');
// 电子钱包下充值
const Recharge = () => import('views/wallet/ewallet/recharge/Recharge');
// 电子发票
const Invoice = () => import('views/wallet/invoice/Invoice');
// 通知设置
const Inform = () => import('views/wallet/inform/Inform');
// 意见反馈
const Opinion = () => import('views/wallet/opinion/Opinion');
// 意见反馈下意见提交
const SubmitOpinions = () => import('views/wallet/opinion/submitOpinions/SubmitOpinions');

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
        component: Ewallet,
        children: [
          {
            path: 'recharge',
            component: Recharge
          }
        ]
      },
      {
        path: 'invoice',
        component: Invoice
      },
      {
        path: 'inform',
        component: Inform
      },
      {
        path: 'opinion',
        component: Opinion,
        children: [
          {
            path: 'submitOpinions',
            component: SubmitOpinions
          }
        ]
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
