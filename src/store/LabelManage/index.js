import { labelManage as api } from '../../api/index'

export default {
  namespaced: true,
  state: {
    list: []
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
    }
  }
}