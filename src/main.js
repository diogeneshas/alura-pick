import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'

import './directives/Transform'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000'
Vue.use(VueRouter)

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
