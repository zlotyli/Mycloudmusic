// 歌手页的网络请求
import request from './request';
// 获得歌手封面以及热门单曲
export function getArtistSongs(id){
  return request({
    url:'/artists',
    params:{
      id
    }
  })
}
// 获取歌手专辑
export function getArtistAlbum(id){
  return request({
    url:'/artist/album',
    params:{
      id
    }
  })
}
// 获取歌手mv
export function getArtistMv(id){
  return request({
    url:'/artist/mv',
    params:{
      id
    }
  })
}

