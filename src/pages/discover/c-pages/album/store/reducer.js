import {Map} from 'immutable';
import * as actionTypes from './constants'
const defaultState = Map({
  hotAlbums: [],//热门专辑
  allAlbums: [],//全部新碟
  allTotal: 0//全部新碟中的数量
})
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_ALL_ALBUMS:
      return state.set("allAlbums", action.allAlbums);
    case actionTypes.CHANGE_ALL_TOTAL:
      return state.set("allTotal", action.total);
    default:
      return state;
  }
}