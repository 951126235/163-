
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import './Mock/mockServer'
// 适配
import 'lib-flexible/flexible'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
