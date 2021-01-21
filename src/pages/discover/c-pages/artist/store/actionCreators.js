import * as actionTypes from './constants';
// 导入网络请求函数
import { getArtistList } from '@/services/artist';

const changeArtistListAction = (artistList) => ({ //3. 改变当前地区以及类型下的歌手列表
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const changeCurrentAreaAction = (area) => ({ //1. 改变当前的地区id
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area
});

export const changeCurrentTypeAction = (type) => ({ // 2.改变当前地区下歌手类别名(name)以及对应的歌手类别id(type)
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type
});

export const getArtistListAction = (area, type, alpha) => {
  return dispatch => {
    getArtistList(area, type, alpha).then(res => {
      // console.log(res);
      dispatch(changeArtistListAction(res.artists))
    })
  }
}