import Vue from 'vue'
import Router from 'vue-router'
import modules from './module.js'
require('assets/style/theme.css')
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: modules.routes
})
