import request from '../request'

export default {
  // 新建标签
  addLabel(data) {
    return request({
      url: `/add/label`,
      method: 'post',
      data
    })
  },

  // 获取标签列表
  query(params = {}) {
    return request({
      url: `/get/labels`,
      method: 'get',
      params
    })
  }
}