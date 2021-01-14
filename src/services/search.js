import request from './request';
// 搜索建议
export function getSearchSuggest(keywords){
  return request({
    url:'/search/suggest',
    params:{
      keywords
    }
  })
}
// 搜索
export function getSearch(keywords,type=1,limit=30,offset=0){
  return request({
    url:'/search',
    params:{
      keywords,   
      type,
      limit,
      offset
    }
  })
}