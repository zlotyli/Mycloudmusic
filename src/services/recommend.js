// 关于recommend组件中的网路请求---有利于扩展性
import request from './request'
// 对于recommend中轮播图数据的请求--对应top-banner中的数据topBanners
export function getTopBanners(){
  return request({
    url:"/banner"
  })
}
// 对于recommend中热门推荐数据的请求--对应hot-recommend中的数据hotRecommends
export function getHotRecommends(limit){
  return request({
    url:"/personalized",
    params:{
      limit
    }
  })
}
// 对于recommend中新碟上架的请求--对应new-album中的数据
export function getNewAlbum(limit){
  return request({
    url: '/top/album',
    params:{
      limit
    }
  })
}