import {Map} from  'immutable';
import * as actionTypes from './constants';
const defalutState = Map({
  singerInfo:{},//歌手简易信息(封面图相关)
  hotSongs:[],//当前歌手的热门单曲。
  currentType:'songs',//当前显示类型
})
export default function reducer(state=defalutState,action){
  switch(action.type){
    case actionTypes.CHANGE_SINGER_INFO:
      return state.set('singerInfo',action.singerInfo);
    case actionTypes.CHANGE_HOTSONGS:
      return state.set('hotSongs',action.hotSongs);
    case actionTypes.CHANGE_CURRENTTYPE:
      return state.set('currentType',action.currentType);
    default:
      return state;
  }
}