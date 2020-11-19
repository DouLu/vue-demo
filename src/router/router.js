import App from '../App.vue'

const Home = () => import('../pages/home')
const Login = () => import('../pages/login')
const Order = () => import('../pages/order')
const SettleAccounts = () => import('../pages/settleAccounts')
const User = () => import('../pages/user')
const NotFound = () => <tempalte>404</tempalte>

import Life from '../pages/lifecycle'
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: 'lifecycle',
        component: Life
      },
      {
        path: '',
        redirect: '/login'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/order',
        component: Order
      },
      {
        path: '/user',
        component: User
      },
      {
        path: '/settleAccounts',
        component: SettleAccounts
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]
