// 使用immutableJS改善state，避免每次拷贝浪费性能
import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({//使用map优化
  topBanners : [],//轮播图数据,
  hotRecommends: [],//热门推荐数据
  newAlbums: [],//新碟上架数据

  upRanking:{}, // 榜单中的飙升榜数据
  newRanking:{}, // 榜单中的新歌榜数据
  originRanking:{}, // 榜单中的原创榜数据

  settleSings : [] // 入住歌手的数据
});
function reducer(state = defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNERS://给轮播图数据赋值
      return state.set('topBanners',action.topBanners);//对于map的修改值
    case actionTypes.CHANGE_HOT_RECOMMEND://给热门推荐数据赋值
      return state.set('hotRecommends',action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:// 给新碟上架数据赋值
      return state.set('newAlbums',action.newAlbums);
    
    case actionTypes.CHANGE_UP_RANKING://给榜单中的飙升榜数据赋值
      return state.set('upRanking',action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING://给榜单中的飙升榜数据赋值
      return state.set('newRanking',action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING://给榜单中的飙升榜数据赋值
      return state.set('originRanking',action.originRanking); 
    case actionTypes.CHANGE_SETTLE_SONGS: //给入住歌手数据赋值
      return state.set('settleSings',action.settleSings);
    default:
      return state;
  }
}
export default reducer;