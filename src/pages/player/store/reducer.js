// 用immutable对象来存储数据
import { Map } from 'immutable';
// 导入aciton有关的常量信息
import * as actionTypes from './constants';

const defaultState = Map({
  currentSong:{}
});


function reducer(state=defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong",action.currentSong);
    default:
      return state;
  }
}

export default reducer;