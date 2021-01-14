import { Map } from 'immutable';
import * as actionTypes from './constants';
const defaultStatus = Map({
  category:[],//分类列表
  currentCategory:'全部',//当前分类
  categorySongs:{},//当前分类里的歌单数据
})
export default function reducer(state=defaultStatus,action){
  switch (action.type){
    case actionTypes.CHANGE_CATEGORY://当为分类列表时
      return state.set('category',action.category);
    case actionTypes.CHANGE_CURRENT_CATEGORY://当为当前分类名时
      return state.set('currentCategory',action.currentCategory);
    case actionTypes.CHANGE_CATEGORY_SONGS://当为分类下对应的歌单数据时
      return state.set('categorySongs',action.categorySongs);
    default:
      return state;
  }
  
}