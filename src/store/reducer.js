// 合并多个组件的reducer
import { combineReducers } from 'redux-immutable';

// 导入recommend中的reducer
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store';
// 导入player中的reducer
import {reducer as playerReducer} from '../pages/player/store'
// 导入ranking页中的reducer
import {reducer as rankingReducer} from '../pages/discover/c-pages/ranking/store'
// 导入歌单页songs中的reducer
import {reducer as songsReducer} from '../pages/discover/c-pages/songs/store'
// 导入主播电台页djradio的reducer
import {reducer as djradioReducer} from '../pages/discover/c-pages/djradio/store'
// 导入歌手页artist的reducer
import {reducer as artistReducer} from '../pages/discover/c-pages/artist/store'
// 导入新碟上架页album的reducer
import {reducer as albumReducer} from '../pages/discover/c-pages/album/store'
const cReducer = combineReducers({
  recommend: recommendReducer,//推荐页中的数据，包括轮播图。新碟上架，热门推荐...的数据,
  player: playerReducer,//播放组件中的数据，里面包括与播放组件相关的数据
  ranking: rankingReducer,//发现音乐页中的排行榜里面的数据
  songs: songsReducer,//发现歌单页中的歌单里面的数据
  djradio: djradioReducer,//发现主播电台里面的数据
  artist: artistReducer,//发现/歌手页的里面的数据
  album: albumReducer,//发现/新碟上架页里面的数据
});
export default cReducer;