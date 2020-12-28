// 导入网络请求函数
import { 
  getSongDetail,//请求歌曲详情
  getLyric,//请求歌曲歌词信息
  getSimiPlaylist,//请求包含当前歌曲的歌单
  getSimiSongs, //请求当前歌曲的相似歌曲
  getCommentHot//请求当前歌曲的热门评论
} from '@/services/player';
// 导入action常量
import * as actionTypes from './constants';
// 导入随机数生成方法
import {getRandomNumber} from '@/utils/math-utils';
// 导入解析歌词的函数
import { parseLyric } from '@/utils/parse-lyric';

// 一、同步actions---用来派送action来修改reducer中state数据
const changeCurrentSongAction = (currentSong)=>({// 1. 当前播放歌曲详情信息数据--currentSong
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})
const changePlayListAction = (playList)=>({// 2. 播放列表中数据--playList
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
})
const changeCurrentSongIndexAction = (index)=>({// 3. 歌曲在播放列表中索引数据--currentSongIndex
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})
const changeLyricListAction = (lyricList)=>({ // 5. 当前播放歌曲的歌词信息--lyricList
  type:actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})
const changeSimiPlayListAction = (simiPlayList)=>({//7.包含当前歌曲的歌单信息-simiPlayList
  type:actionTypes.CHANGE_SIMI_PLAY_LIST,
  simiPlayList
})
const changeSimiSongsAction = (simiSongs)=>({//8.当前播放歌曲的相似歌曲数据-simiSongs
  type:actionTypes.CHANGE_SIMI_SONGS,
  simiSongs
})
const changeCommentHotAction = (commentHot) =>({
  type:actionTypes.CHANGE_CURRENT_SONG_HOT_COMMENT,
  commentHot
})
// 当操作逻辑很简单时，直接导出同步的actions--需要对外暴露
export const changeSequenceAction = (sequence)=>({// 4. 改变播放行为--sequence
  type:actionTypes.CHANGE_SEQUENCE,
  sequence
})
//6. 改变当前歌曲的当前歌词在歌词列表中的索引数据
export const changeCurrentLyricIndexAction = (index) =>({
  type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})


// 二、异步action
// 发送网络请求到单首歌的详细信息---用来发送异步的网络请求，得到数据后，派发对应同步的action
export const getSongDetailAction = (ids)=>{//对应 1
  return (dispatch,getState)=>{
    // 1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(['player','playList']);
    const songIndex = playList.findIndex(song=>song.id === ids);//findIndex中条件为true时，返回该元素对应的索引，反之返回-1
    // 2. 判断是否找到歌曲--并进行添加到歌曲播放列表和更新当前歌曲的操作
    let song = null;
    if(songIndex !== -1){//查找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));//修改当前播放列表的中的播放歌曲对应的索引
      song = playList[songIndex];//取出该歌曲
      dispatch(changeCurrentSongAction(song));//并使当该歌为当前播放的歌曲
      // 请求该歌曲对应的歌词
      dispatch(getLyricAction(song.id))
      // 请求包含当前歌曲的歌曲--派发异步actions
      dispatch(getSimiPlayListAction(song.id));
      // 请求当前歌曲的相似歌曲数据
      dispatch(getSimiSongsAction(song.id));
      // 请求当前歌曲的热门评论
      dispatch(getCommentHotAction(song.id));
    }else{//没找到歌曲请求歌曲数据
      //请求歌曲数据
      getSongDetail(ids).then(res=>{
        song = res.songs && res.songs[0];//取出该歌的信息
        if(!song) return;//当歌曲没数据时返回undefined
        //请求到歌曲数据时
        //1. 将最新请求到的歌曲添加到播放列表的最后去
        const newPlayList = [...playList];
        newPlayList.push(song);
        //2. 更新redux中的值
        dispatch(changePlayListAction(newPlayList));//修改播放列表
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));//修改当前播放的index
        dispatch(changeCurrentSongAction(song))//修改当前播放的歌曲信息为新添加的歌曲
        // 请求该歌曲对应的歌词
        dispatch(getLyricAction(song.id))
        // 请求包含当前歌曲的歌曲--派发异步actions
        dispatch(getSimiPlayListAction(song.id));
        // 请求当前歌曲的相似歌曲数据
        dispatch(getSimiSongsAction(song.id));
        // 请求当前歌曲的热门评论
        dispatch(getCommentHotAction(song.id));
      })
    }
  } 
}
// 切歌操作-在其中要派发改变currentSong以及currentSongIndex的同步actions//对应多个同步actions
export const cutCurrentSongAction = (tag)=>{
  return (dispatch,getState)=>{
    const playList = getState().getIn(['player','playList']);//得到player中播放列表--主要用其列表长度
    const sequence = getState().getIn(['player','sequence']);//得到player中的播放行为--与上下曲切歌有关
    let currentSongIndex = getState().getIn(['player','currentSongIndex']);//得到player中当前播放歌曲的索引
    switch(sequence){//在进行上下曲切歌逻辑时，单曲循环与顺序播放的逻辑相同---先设置目标歌曲的在播放列表中的索引
      case 1://表示随机播放
        let randomIndex = getRandomNumber(playList.length);
        while( randomIndex === currentSongIndex){//使得生成的数不与原来相同
          randomIndex = getRandomNumber(playList.length);//生成0-播放列表长度之间的随机整数
        }
        currentSongIndex = randomIndex;
        break;
      default://表示单曲循环播放或者顺序播放
        currentSongIndex += tag;//让当前播放歌曲的索引自加或者自减
        if(currentSongIndex>=playList.length){//越界判断
          currentSongIndex = 0;
        }
        if(currentSongIndex<0){
          currentSongIndex = playList.length - 1;
        }
    }
    const currentSong = playList[currentSongIndex]//取出下一首目标歌曲
    dispatch(changeCurrentSongAction(currentSong));//改变当前歌曲为目标歌曲
    dispatch(changeCurrentSongIndexAction(currentSongIndex));//改变当前播放歌曲的索引为目标索引
    // 请求该歌曲对应的歌词--派发异步actions
    dispatch(getLyricAction(currentSong.id));
    // 请求包含当前歌曲的歌曲--派发异步actions
    dispatch(getSimiPlayListAction(currentSong.id));
    // 请求当前歌曲的相似歌曲数据
    dispatch(getSimiSongsAction(currentSong.id));
    // 请求当前歌曲的热门评论
    dispatch(getCommentHotAction(currentSong.id));
  }
}
// 处理歌曲歌词的actions---供异步的getSongDetailAction派发
export const getLyricAction = (id)=>{ //对应 5
  return dispatch => {
    getLyric(id).then(res=>{
      const lyric = res.lrc.lyric;//得到歌词的数据
      const lyricList = parseLyric(lyric);//解析歌词
      dispatch(changeLyricListAction(lyricList));//派发对应的同步actions
    })
  }
} 
// 请求包含当前歌曲的歌单的数据，并派发同步actions来存储到state中
export const getSimiPlayListAction = (id) =>{ // 对应 7
  return dispatch => {
    getSimiPlaylist(id).then(res=>{
      dispatch(changeSimiPlayListAction(res.playlists));
    })
  }
}
// 请求当前播放歌曲的相似歌曲，并派发同步actions 来存储到state中
export const getSimiSongsAction = (id) =>{ //对应8
  return dispatch => {
    getSimiSongs(id).then(res=>{
      dispatch(changeSimiSongsAction(res.songs))
    })
  }
}
// 请求当前歌曲的热门评论，并派发同步actions来存储到state中
export const getCommentHotAction = (id,offset = 0) =>{
  return dispatch =>{
    getCommentHot(id,offset).then( res=>{
      dispatch(changeCommentHotAction(res.hotComments));
    })
  }
}