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
export function getNewAlbums(limit){
  return request({
    url: '/album/newest',
    params:{
      limit
    }
  })
}
// 对于recommend中榜单数据的请求--对应recommend-ranking中的数据
export function getTopList(idx){
  return request({
    url:'/top/list',
    params: {
      idx
    }
  })
}

// 对于recommend中入驻歌手数据的请求--对应settle-songs中的数据
export function getArtistList(cat,limit){
  return request({
    url:'/artist/list',
    params:{
      cat,
      limit
    }
  })
}