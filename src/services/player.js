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