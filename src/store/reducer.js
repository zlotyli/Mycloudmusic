// 合并多个组件的reducer
import { combineReducers } from 'redux-immutable';

// 导入recommend中的reducer
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store';
// 导入player中的reducer
import {reducer as playerReducer} from '../pages/player/store'


const cReducer = combineReducers({
  recommend: recommendReducer,//推荐页中的数据，包括轮播图。新碟上架，热门推荐...的数据,
  player: playerReducer,//播放组件中的数据，里面包括与播放组件相关的数据
});
export default cReducer;