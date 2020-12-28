import * as actionTypes from './constants';
import { Map } from 'immutable'
const defalutState = Map({
  categoryList:[],//榜单类别列表
  currentCateIndex:0,//当前榜单类别在类别列表中的索引
  songsList:[],//当前榜单类别中的歌曲列表以及头部信息
  otherSongs:[],//当前榜单中除了前三以外的其他歌曲信息
})
const reducer = function(state=defalutState,action){
  switch (action.type){
    case actionTypes.CHANGE_CATEGORY_LIST:
      return state.set('categoryList',action.categoryList);
    case actionTypes.CHANGE_CURRENT_CATEINDEX:
      return state.set('currentCateIndex',action.index);
    case actionTypes.CHANGE_SONGS_LIST:
      return state.set('songsList',action.songsList);
    case actionTypes.CHANGE_OTHER_SONGS:
      return state.set('otherSongs',action.otherSongs);
    default:
      return state;
  }
}
export default reducer;