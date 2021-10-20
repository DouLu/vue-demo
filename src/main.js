import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router/router'
import store from './store/index'
require('./mock')
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(VueRouter)

// if (process.env.NODE_ENV !== 'development') {
// }
Sentry.init({
  Vue,
  dsn: 'https://db45f1b887f94f4884cb3cb48dc2f715@o1015021.ingest.sentry.io/5980315',
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
    })
  ],
  tracesSampleRate: 1.0,
  release: 'dl-test5.0'
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
