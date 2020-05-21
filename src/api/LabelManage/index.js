import request from '../request'

export default {
  // 新建标签
  addLabel(data) {
    return request({
      url: `/add/label`,
      method: 'post',
      data
    })
  }
}