import * as actionTypes from './constants';
// 导入该组件要使用到的网路请求
// 对于轮播图数据请求的方法
import { getTopBanners, getHotRecommends } from '@/services/recommend';

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





