import request from './request';
// 歌单中的数据所用到的网络请求
// 获取分类列表中的数据
export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}
// 得到下方的歌单数据
export function getSongCategoryList(cat="全部", offset=0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}