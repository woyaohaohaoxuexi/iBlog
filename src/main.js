import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import VueHighlightJS from 'vue-highlightjs'
// 引入 css
import 'normalize.css'
//  引入代码高亮样式 
import 'highlight.js/styles/atom-one-dark.css'
// 引入 svg 文件
import './assets/icons/index'
// 引入 全局组件
import './base/register'
Vue.config.productionTip = false
Vue.use(VueHighlightJS)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
