import {Map} from  'immutable';
import * as actionTypes from './constants';
const defalutState = Map({
  suggests:{},//关键字给的记录
})
export default function reducer(state=defalutState,action){
  switch(action.type){
    case actionTypes.CHANGE_SUGGEST:
      return state.set('suggests',action.suggests)
    default:
      return defalutState;
  }
}