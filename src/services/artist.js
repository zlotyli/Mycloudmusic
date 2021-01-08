import request from './request';
// 得到不同地区歌手信息的函数
//type 取值:  -1:全部   1:男歌手   2:女歌手   3:乐队
//area 取值:  -1:全部   7华语      96欧美    8:日本    16韩国   0:其他
//initial: 按首字母索引查找参数  

export function getArtistList(area, type, initial) {
  let url = "/artist/list";
  let params = { limit: 100 }
  if (area === -1 && type === -1) {//热门歌手数据--此时为推荐歌手中热门歌手即以下的数据
    url = "/top/artists"
  } else {
    if (area === -1) {
      params = {limit: 100, cat: 5001}
    } else {
      params = {
        type,
        area,
        initial,
        limit: 100
      }
    }
  }

  // console.log("url:", url, "params:", params);

  return request({
    url,
    params
  })
}
