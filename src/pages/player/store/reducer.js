// 用immutable对象来存储数据
import { Map } from 'immutable';
// 导入aciton有关的常量信息
import * as actionTypes from './constants';

const defaultState = Map({
  currentSong:{},//当前播放的歌曲含该播放歌曲的详情
  playList:[//预先放置几首歌曲信息
    {
      "name": "努力工作吧",
      "id": 1500788926,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 31716441,
              "name": "赛文&GOD",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 99187788,
          "name": "努力工作吧",
          "picUrl": "https://p2.music.126.net/me4IQ0mkD19oDZABv8OfEw==/109951165520524853.jpg",
          "tns": [],
          "pic_str": "109951165520524853",
          "pic": 109951165520524850
      },
      "dt": 175748,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 7032207,
          "vd": -72412
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 4219342,
          "vd": -69789
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 2812909,
          "vd": -68042
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    }
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