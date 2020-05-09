/*
ajax 请求函数模块
*/
import axios from 'axios';
import router from '../router/index';
import {Toast} from 'vant';

let token = "";

axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-type'] = 'application/json;charset=UTF-8'; //配置请求头

//http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('token');
  if (token) {
    //将token放到请求头里面发送给服务器，将tokenKey放在请求头中
    config.headers.token = token;
    //else
    // config.headers['token'] = token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data && response.data.code) {
    if (response.data.message === 'token失效' || response.data.message === '请求头中没有token') {
      //未登录
      Toast.fail("登录信息已失效，请重新登录");
      router.push('/login');
    }
    if (parseInt(response.data.code) === -1) {
      Toast.fail("请求失败");
    }
  }
  return response;
}, function (error) {
  Toast.fail("服务器连接失败");
  return Promise.reject(error);
})

// let base = "";
//配置了nginx跨域所以不需要再加baseURL

//通用方法
export const postRequest = (url, params) => {
  const getTimestamp  = new Date().getTime();
  return axios.post(`${url}?timer=${getTimestamp}`, params).then(res => res.data)
}
export const getRequest = (url, params) => {
  const getTimestamp = new Date().getTime();
  return axios.get(`${url}?timer=${getTimestamp}`, {params: params}).then(res => res.data)
}

