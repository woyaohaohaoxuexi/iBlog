import Vue from 'vue'
import Vuex from 'vuex'
import article from './ArticleManage/article'
import label from './LabelManage/index'
Vue.use(Vuex)

const data = {
  modules: {
    article,
    label
  }
}
export default new Vuex.Store(data)