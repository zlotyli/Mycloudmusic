import request from './request'
// 得到通过专辑id获取到专辑里面的歌曲列表
export const getAlbumDetail = (id)=>{
  return request({
    url:'/album',
    params:{
      id
    }
  })
}

export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}
// 接口问题，全部新碟应该为下方的函数
export function getAllAlbums(area='ALL',limit=35, offset) {
  return request({
    url: "/album/new",
    params: {
      area,
      limit,
      offset
    }
  })
}
// 原接口
export function getTopAlbums(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}