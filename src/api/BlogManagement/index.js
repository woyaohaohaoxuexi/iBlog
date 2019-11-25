import request from '../request'
// import { BASE_URL } from '../baseUrl'
export const uploadManage = (data) => {
  return request({
    url: `/upload/management`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const addManage = (data) => {
  return request({
    url: `/add/article`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getManage = (data) => {
  return request({
    url: `/get/article-list`,
    method: 'get'
  })
}

export const getArticleDetail = (params) => {
  return request({
    url: `/get/article-detail`,
    method: 'get',
    params
  })
}