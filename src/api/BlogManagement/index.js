import request from '../request'
import { BASE_URL } from '../baseUrl'
export const uploadManage = (data) => {
  return request({
    url: `${BASE_URL}/upload/management`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const addManage = (data) => {
  return request({
    url: `${BASE_URL}/add/article`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getManage = (data) => {
  return request({
    url: `${BASE_URL}/get/article-list`,
    method: 'get'
  })
}

export const getArticleDetail = (params) => {
  return request({
    url: `${BASE_URL}/get/article-detail`,
    method: 'get',
    params
  })
}