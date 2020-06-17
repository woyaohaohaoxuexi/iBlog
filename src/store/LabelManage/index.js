import { labelManage as api } from '../../api/index'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list
    }
  },
  actions: {
    async addLabel({}, data) {
      let resData
      try {
        resData = await api.addLabel(data)
        console.log('添加标签;', resData);
      } catch (error) {
        throw error
      }
      return resData
    },
    async query({ commit }, params = {}) {
      let resData
      try {
        resData = await api.query()
        const { list = [] } = resData.data
        commit('SET_LIST', list)
        console.log('标签数据::', resData);
      } catch (error) {
        throw error
      }
      return resData
    }
  }
}