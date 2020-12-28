// 导入常量名
import * as actionTypes from './constants';
// 导入网络请求数据
import { getSongDetail } from '@/services/player';
import { getCategory,getSongsList } from '@/services/ranking';
import { getOtherSongObj } from '@/utils/songs-utils'
// 同步actions--用于改变store中的state.ranking中的数据
const changeCategoryListAction = (list)=>({ //1. 改变类别列表--categoryList
  type:actionTypes.CHANGE_CATEGORY_LIST,
  categoryList:list
})
export const changeCurrentCateIndexAction = (index)=>({  //2. 改变当前类别在类别列表中的索引--currentCateIndex
  type:actionTypes.CHANGE_CURRENT_CATEINDEX,
  index
})
const changeSongsListAction = (songsList)=>({//3.对应当前榜单类别中的歌曲列表以及头部信息
  type:actionTypes.CHANGE_SONGS_LIST,
  songsList
})
const changeOtherSongsAction = (otherSongs=[])=>({//4. 对应当前榜单类别中除开前三的歌曲列表信息
  type:actionTypes.CHANGE_OTHER_SONGS,
  otherSongs
})
// 异步actions--用于请求异步的网络数据以及派发同步actions
export const getCategoryListAction = ()=>{ //对应1
  return (dispatch)=>{
    getCategory().then(res=>{
      dispatch(changeCategoryListAction(res.list))
    })
  }
}
export const getSongsListAction = (id)=>{ //对应3
  return (dispatch)=>{
    getSongsList(id).then(res=>{
      dispatch(changeSongsListAction(res.playlist));
      dispatch(getOtherSongsAction(res.playlist.trackIds));
    })
  }
}
export const getOtherSongsAction = (otherSongs)=>{//对应4
  return (dispatch)=>{ 
    const arr = [];
    const trackIds = otherSongs&&otherSongs.slice(3);
    if( trackIds && trackIds.length!==0){
      for(let i=0;i<trackIds.length;i++){
        let obj = {};
        getSongDetail(trackIds[i].id).then(res=>{
          obj = getOtherSongObj(res.songs[0]);
          arr.push(obj);
          if(arr.length===trackIds.length){
            dispatch(changeOtherSongsAction(arr));
          }
        })
      }
    }
  
  }
}

