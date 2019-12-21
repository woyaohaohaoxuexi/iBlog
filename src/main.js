import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 引入 css
import 'normalize.css'
import './assets/styles/base/reset.scss'
import './assets/styles/base/common.scss'
import './assets/styles/base/layout.scss'
//  引入代码高亮样式 
import 'highlight.js/styles/atom-one-dark.css'
// 引入 svg 文件
import './assets/icons/index'

// 引入 全局组件
import './base/register'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
