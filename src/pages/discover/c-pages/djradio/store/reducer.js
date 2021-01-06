import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  categories: [],//分类的数据
  currentId: 0,//当前分类对应的id
  recommends: [],//优秀电台的数据
  hotRadios: {}//最热电台排行的数据
})

export default function reducer(state = defaultState, action){
  switch(action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set("categories", action.categories);
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set("currentId", action.currentId);
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set("recommends", action.recommends);
    case actionTypes.CHANGE_HOT_RADIOS:
      return state.set("hotRadios", action.hotRadios);
    default: 
      return state;
  }
}