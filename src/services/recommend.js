// 关于recommend组件中的网路请求---有利于扩展性
import request from './request'
export function getTopBanners(){
  return request({
    url:"/banner"
  })
}