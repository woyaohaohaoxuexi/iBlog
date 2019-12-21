import request from '../request'

export default {
  // 添加文章
  addManage(data) {
    return request({
      url: `/add/article`,
      method: 'post',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  // 查询文章列表
  queryList(params) {
    return request({
      url: `/get/article-list`,
      method: 'get',
      params
    })
  },

  // 查询文章详情
  queryDetail(params) {
    return request({
      url: `/get/article-detail`,
      method: 'get',
      params
    })
  },

  // 删除
  queryDel(params) {
    return request({
      url: '/delete/article',
      method: 'get',
      params
    })
  },

  // 上传图片
  uploadImage(data) {
    return request({
      url: `/upload/image`,
      method: 'post',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}