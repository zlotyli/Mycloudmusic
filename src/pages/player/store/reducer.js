// 用immutable对象来存储数据
import { Map } from 'immutable';
// 导入aciton有关的常量信息
import * as actionTypes from './constants';

const defaultState = Map({
  currentSong:{},//当前播放的歌曲含该播放歌曲的详情
  playList:[//预先放置几首歌曲信息
  ],//播放列表
  currentSongIndex:0,//当前播放的歌的在播放列表的索引值

  sequence:0,//3种播放行为：0 循环  1 随机  2 单曲循环

  lyricList:[],//存放当前歌曲总歌词信息

  currentLyricIndex:0,//存放当前歌曲正在演唱的歌词在总歌词中的索引
  simiPlayList:[],//包含这首歌的歌单
  simiSongs:[],//当前歌曲的相似歌曲
  comments:{},//当前歌曲的评论
}); 
function reducer(state=defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_CURRENT_SONG://设置当前播放歌曲的信息
      return state.set("currentSong",action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST://设置播放列表的信息
      return state.set('playList',action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX://设置播放的索引值的信息
      return state.set('currentSongIndex',action.index);
    case actionTypes.CHANGE_SEQUENCE://设置播放行为
      return state.set('sequence',action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST://设置歌词信息
      return state.set('lyricList',action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX://设置当前歌曲的当前歌词的索引
      return state.set('currentLyricIndex',action.index);
    case actionTypes.CHANGE_SIMI_PLAY_LIST://设置包含当前歌曲的歌单
      return state.set('simiPlayList',action.simiPlayList);
    case actionTypes.CHANGE_SIMI_SONGS://设置当前歌曲的相似歌曲
      return state.set('simiSongs',action.simiSongs);
    case actionTypes.CHANGE_CURRENT_SONG_COMMENTS://设置当前歌曲的热门评论
      return state.set('comments',action.comments)
    default:
      return state;
  }
}

export default reducer;