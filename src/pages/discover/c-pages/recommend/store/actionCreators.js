import * as actionTypes from './constants';
// 导入该组件要使用到的网路请求
// 对于轮播图，热门推荐，新碟上架数据、榜单数据的请求的方法
import { getTopBanners, getHotRecommends, getNewAlbums,getTopList } from '@/services/recommend';

// 对于要传入到dispatch中的工厂函数最好使用Action结尾

// 同步方法供异步使用，并修改store的state中的数据
// 轮播图数据的获取到后设置给store的state.recommend中---通过异步来派发
const changeTopBannerAction = (res) =>({// 1. 轮播图数据--topBanners
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
const changeHotRecommendAction = (res) =>({// 2. 热门推荐数据--hotRecommends
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
const changeNewAlbumAction = (res) => ({ // 3 新碟上架--newAlbums
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) =>({ // 4.1 榜单中飙升榜--upRanking
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
const changeNewRankingAction = (res) =>({ // 4.2 榜单中新歌榜--newRanking
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
  
})
const changeOriginRankingAction = (res) =>({ // 4.3 榜单中原创榜--originRanking
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


//异步请求到数据后发送同步actions去修改store中的state
// 发送网络请求得到轮播图数据
export const getTopBannerAction = ()=>{// 对应 1
  return dispatch => {
    getTopBanners().then(res =>{
      dispatch(changeTopBannerAction(res))//派发对应的同步的actions
    })
  }
}

// 发送网络请求得到热门推荐的数据
export const getHotRecommendAction = (limit)=>{//对应 2
  return dispatch => {
    getHotRecommends(limit).then(res =>{
      dispatch(changeHotRecommendAction(res))
    })
  }
}
// 发送网络请求得到新碟上架的数据
export const getNewAlbumAction = (limit)=>{ // 对应 3
  return dispatch => {
    getNewAlbums(limit).then(res=>{
      dispatch(changeNewAlbumAction(res))
    })
  }
}
// 发送网路请求得到榜单的数据
export const getTopListAction = (idx)=>{// 对应 4
  return (dispatch)=>{
    getTopList(idx).then(res=>{
      switch (idx){
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        default:
      }
    })
  }
}



