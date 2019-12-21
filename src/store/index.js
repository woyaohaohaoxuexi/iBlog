import Vue from 'vue'
import Vuex from 'vuex'
import article from './ArticleManage/article'
Vue.use(Vuex)

const data = {
  modules: {
    article
  }
}
export default new Vuex.Store(data)