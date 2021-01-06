import request from './request';
// 请求上方分类列表的数据
export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist"
  })
}
// 请求推荐页的数据
export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}
// 请求下方歌单页的数据
export function getDjRadios(cateId, limit, offset=0) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}