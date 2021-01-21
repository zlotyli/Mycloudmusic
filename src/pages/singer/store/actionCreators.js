import * as actionTypes from './constants';
// 导入网络请求函数
import { getArtistSongs } from '@/services/singer';

// 同步actions
// 改变存储的歌手热门歌曲的数据
const changeSingerInfoAction = (singerInfo) =>({//1.改变store中的歌手简易信息--singerInfo
  type:actionTypes.CHANGE_SINGER_INFO,
  singerInfo
})
const changeHotSongsAction = (hotSongs) =>({ //2.改变store中的热门单曲信息--hotSongs
  type:actionTypes.CHANGE_HOTSONGS,
  hotSongs
})
export const changeCurrentType = (currentType) =>({//6.改变存储的当前显示的类型
  type:actionTypes.CHANGE_CURRENTTYPE,
  currentType
})
// 异步actions
// 派发网络请求获取到对应id歌手的热门单曲数据，并dipatch对应同步actions
export const getHotSongsAndInfoAction = (id)=>{
  return (dispatch)=>{
    getArtistSongs(id).then(res=>{
      dispatch(changeSingerInfoAction(res.artist))
      dispatch(changeHotSongsAction(res.hotSongs))
    })
  }
}