/*
 * @Description:
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-02-08 18:57:37
 * @LastEditors  : Wsl
 * @LastEditTime : 2020-02-11 12:51:56
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
