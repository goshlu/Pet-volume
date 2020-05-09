import { postRequest, getRequest } from '../api/api';

/**
 * 这里统一处理项目中所有的 api 接口
 */

//测试数据接口
export const getData = params => postRequest('/apis/buy/text/index', params)

/**
 * 首页
 * -- 轮播图
 * -- 菜单按钮
 * -- 推荐列表
 */

export const login = params => getRequest('url',params);

 /**
  * 解析token
  * @params access_token
  * @return array
  */

/*   let api_token = "";
  api_token = md5 ('模块名' + '控制器名' + '方法名' + '当前时间' + '加密密钥'); */