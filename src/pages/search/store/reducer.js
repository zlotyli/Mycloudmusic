import {Map} from  'immutable';
import * as actionTypes from './constants';
const defalutState = Map({
  keywords:"",//搜索关键字
  suggests:{},//搜索建议
  results:{},//搜索结果
  catetype:{name:'单曲',type:1},//当前搜索类型，默认为搜索单曲1。其他为歌手100，专辑10，视频1014，歌词1006，歌单1000，电台1009，用户1002
  pageSize:30,//每页存储的数据量，默认是30
})
export default function reducer(state=defalutState,action){
  switch(action.type){
    case actionTypes.CHANGE_KEYWORDS:
      return state.set('keywords',action.keywords);
    case actionTypes.CHANGE_SUGGEST:
      return state.set('suggests',action.suggests)
    case actionTypes.CHANGE_RESULTS:
      return state.set('results',action.results)
    case actionTypes.CHANGE_CURRENT_CATETYPE:
      return state.set('catetype',action.catetype);
    case actionTypes.CHANGE_PAGESIZE:
      return state.set('pageSize',action.pageSize);
    default:
      return state;
  }
}