import * as actionTypes from './constants';
// 导入网络请求函数
import {
  getHotAlbums,
  getTopAlbums
} from '@/services/album.js';

const changeHotAlbumsAction = (res) => ({ //1. 改变热门专辑hotAlbums的数据
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})

const changeAllAlbumAction = (res) => ({ //2. 改变全部专辑allAlbums的数据
  type: actionTypes.CHANGE_ALL_ALBUMS,
  allAlbums: res.albums
})

const changeAllTotalAction = (total) => ({ //3. 改变当前全部专辑的的数量
  type: actionTypes.CHANGE_ALL_TOTAL,
  total: total
})
// 异步actions
// 请求热门专辑的数据，并派发同步action来改变该存储的数据
export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res));
    })
  }
}
// 请求全部专辑的数据，并派发同步actions来改变存储的数据，包括存储的全部专辑当前类型
export const getAllAlbumsAction = (page) => {
  return dispatch => {
    getTopAlbums(30, (page-1) * 30).then(res => {
      // console.log(res);
      dispatch(changeAllAlbumAction(res));
      dispatch(changeAllTotalAction(res.total));
    })
  }
}
