// 使用immutableJS改善state，避免每次拷贝浪费性能
import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({//使用map优化
  topBanners : [],//轮播图数据,
  hotRecommends: [],//热门推荐数据
})
function reducer(state = defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNERS://给轮播图数据赋值
      return state.set('topBanners',action.topBanners);//对于map的修改值
    case actionTypes.CHANGE_HOT_RECOMMEND://给热门推荐数据赋值
      return state.set('hotRecommends',action.hotRecommends);
    default:
      return state;
  }
}
export default reducer;