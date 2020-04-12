// 导出现在的环境
const ENV_NAME = process.env.NODE_ENV
export const BASE_URL = ENV_NAME === 'development' ? 'http://localhost:8099' : 'http://121.37.229.207' 

// 导出 request 的 code 值
export const REQUEST_OK = 20000