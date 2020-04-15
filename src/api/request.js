import { Service } from "./api";

export function getConfigsByProductId(productId){
    return Service({
        url:'/manmager/getConfigsByProductId',
        params: { productId : productId}
    })
}
export function getAllAndroidPlugins(){
    return Service({
        url: '/manager/getAndroidPlugin ',
        method: 'get'
    })
}
export function addNewAndroidPlugin(data) {
    return Service({
      url: '/manager/addAndroidPlguin',
      data: JSON.stringify(data)
    })
  }