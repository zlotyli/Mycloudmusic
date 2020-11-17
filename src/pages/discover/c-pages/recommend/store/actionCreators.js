import * as actionTypes from './constants';
// 导入该组件要使用到的网路请求
import { getTopBanners } from '@/services/recommend';



// 同步方法供异步使用
// 得到请求来的轮播图数据
const changeTopBannerAction = (res) =>({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})


// 对于要传入到dispatch中的工厂函数最好使用Action结尾
// 发送得到轮播图数据的请求
export const getTopBannerAction = ()=>{
  return dispatch => {
    getTopBanners().then(res =>{
      dispatch(changeTopBannerAction(res))//异步请求后获取到轮播图的数据并存储到store中
    })
  }
}