import {Map} from 'immutable';
import * as actionTypes from './constants';
const defaultState = Map({
  currentArea : -1,//当前地区id，初始值为全部(即推荐)
  currentType: {
    name: "推荐歌手",
    type: -1
  },//当前地区下的歌手类型(name)以及对应的类别id(type)--默认是推荐歌手，其中歌手类型为全部
  artistList: []//存储的歌手列表
})
export default function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set('currentArea',action.currentArea);
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList);
    default:
      return defaultState
  }
}