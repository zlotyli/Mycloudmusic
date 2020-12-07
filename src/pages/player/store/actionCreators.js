// 导入网络请求函数
import { getSongDetail } from '@/services/player';
// 导入action常量
import * as actionTypes from './constants';

// 同步actions---用来派送action来修改reducer中state数据

const changeCurrentSongAction = (currentSong)=>({// 1. 歌曲详情信息数据--currentSong
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})


// 异步action---用来发送异步的网络请求，得到数据后，派发对应同步的action
// 发送网络请求到单首歌的详细信息
export const getSongDetailAction = (ids)=>{//对应 1
  return dispatch=>{
    getSongDetail(ids).then(res=>{
      dispatch(changeCurrentSongAction(res.songs[0]));
    })
  } 
}