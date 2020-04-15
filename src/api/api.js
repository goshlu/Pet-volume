import Axios from 'axios';
const configbaseURL = 'http://127.0.0.0'; //默认路径
let loadingInstance = null; //者里是loading
//使用create方式创建axios实例
export const Service = Axios.create({
  timeout: 7000, //请求超时的时间
  baseURL: configbaseURL,
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
//添加请求拦截
Service.interceptors.request.use(config => {
  loadingInstance = loading.serive({
    lock: true,
    text: 'loading...'
  })
  return config
})
//添加响应拦截器
Service.interceptors.response.use(res => {
  loadingInstance.close();
  //console.log(res)
  return res
}, error => {
  console.log('TCL:error', error)
  const msg = error.message !== undefined ? error.Message : ''
  Message({
    message: "网络错误" + msg,
    type: 'error',
    duration: 3 * 100
  })
  loadingInstance.close();
  return Promise.reject(error)
})
