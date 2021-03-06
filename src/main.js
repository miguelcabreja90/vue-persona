// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import NProgress from 'nprogress'
import App from './App'
import router from './router/router'
import store from './store/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

// set baseUrl from app
axios.defaults.baseURL = 'http://localhost:4000'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

router.beforeResolve((to, form, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
