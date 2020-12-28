import request from './request'
//排行榜页中数据的网络请求函数
export const getCategory = function(){
  return request({
    url:'/toplist'
  })
}
// 获取榜单详情
export function getSongsList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}