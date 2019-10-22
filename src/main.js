import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入 css
import 'normalize.css'
// 引入 svg 文件
import './assets/icons/index'
// 引入 全局组件
import './base/register'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
