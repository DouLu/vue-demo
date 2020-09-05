import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({ routes })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
