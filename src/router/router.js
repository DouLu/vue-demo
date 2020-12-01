import VueRouter from 'vue-router'
import store from '../store'
import NotFound from '../view/notFound'
import Layout from '../view/layout'
import Home from '../view/home'
import Login from '../view/login'
import Order from '../view/order'
import createOrder from '@/view/createOrder'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home
      },
      {
        name: 'orderList',
        path: 'orderList',
        component: Order,
        meta: {
          need2Login: true
        }
      },
      {
        name: 'createOrder',
        path: 'createOrder',
        component: createOrder,
        meta: {
          need2Login: true
        }
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    path: '*', // 匹配404页面
    component: NotFound
  }
]

// const router = new VueRouter({ routes })
const router = new VueRouter({
  mode: 'history', // 默认 hash 模式
  routes
})

router.beforeEach((to, from, next) => { // 全局钩子函数
  to.matched.some((route) => {
    // to.matched.forEach((route) => {
    if (route.meta.need2Login) { // 通过此操作可以判断哪些页面需要登录
      if (store.state.isLogin || sessionStorage.getItem('isLogin')) {
        next()
      } else {
        next({ name: 'login', params: { path: route.path }})
      }
    } else {
      next()
    }
  })
})
export default router
