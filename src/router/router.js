import VueRouter from 'vue-router'

const Home = () => import('../pages/home')
const Login = () => import('../pages/login')
const Order = () => import('../pages/order')
const SettleAccounts = () => import('../pages/settleAccounts')
const User = () => import('../pages/user')

import Life from '../pages/lifecycle'
import NotFound from '../pages/notFound'
import Layout from '../view/layout'
import Form from '@/components/Form'

const routes = [
  {
    path: '',
    redirect: '/layout' // 重定向
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      // 路由嵌套
      {
        path: 'view',
        components: {
          // 路由视图
          default: User,
          main: NotFound,
          footer: User
        }
      },
      {
        name: 'lifecycle',
        path: '/lifecycle',
        component: Life
      },
      {
        name: 'home',
        path: '/home',
        component: Home
      },
      {
        name: 'order',
        path: '/order',
        component: Order
      },
      {
        name: 'settleAccounts',
        path: '/settleAccounts',
        component: SettleAccounts
      }
    ]
  },
  {
    name: 'user',
    path: '/user/:userId', // 动态路由配置
    component: User
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    path: '*', // 匹配404页面
    component: NotFound
  },
  {
    name: 'form',
    path: '/form',
    component: Form
  }
]

// const router = new VueRouter({ routes })
const router = new VueRouter({
  mode: 'history', // 默认 hash 模式
  routes
})

export default router
