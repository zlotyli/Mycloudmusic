// 合并多个组件的reducer
import { combineReducers } from 'redux';

// 导入recommend中的reducer
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'


const cReducer = combineReducers({
  recommend: recommendReducer,//轮播图数据
});
export default cReducer;