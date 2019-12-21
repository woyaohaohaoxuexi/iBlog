import { articleManage as api } from '@api/index'
import { REQUEST_OK } from '@api/config'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    // 查询文件列表
    async queryList({ commit, state }, params = {}) {
      let resData
      try {
        resData = await api.queryList(params)
        const tempData = resData.data
        commit({
          type: 'SET_LIST',
          list: tempData.list
        })
      } catch (error) {
        throw error
      }
      return resData
    },

    // 添加文章
    async addArticle({}, data) {
      let resData
      try {
        resData = await api.addManage(data)
      } catch (error) {
        throw error
      }
      return resData
    },

    // 上传图片
    async uploadImg({}, data) {
      let resData
      try {
        resData = await api.uploadImage(data)
      } catch (error) {
        throw error
      }
      return resData
    },

    // 删除
    async queryDel({ dispatch }, params = {}) {
      let resData
      try {
        resData = await api.queryDel(params)
        if (resData.code === REQUEST_OK) {
          dispatch('queryList')
        }
      } catch (error) {
        throw error
      }
      return resData
    }
  }
}