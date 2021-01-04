import request from './request';
// 定义获取到每首歌详情的函数
export function getSongDetail(ids){
  return request({
    url:'/song/detail',
    params:{
      ids
    }
  })
}
// 定义获取到歌曲歌词的函数
export function getLyric(id){
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}
// 定义获取到包含该歌曲的歌单的函数
export function getSimiPlaylist(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}
// 定义获取到相似歌曲的函数
export function getSimiSongs(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}
// 定义获取到该歌曲的评论(里面含有热门评论以及全部评论、评论总个数)
export function getComments(id,offset=0){
  return request({
    url:'/comment/music',
    params:{
      id,
      offset
    }
  })
}