import React, { memo,useEffect } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';
function WYRecommend(props) {

  /* 组件和redux关联目的: 
          获取state中数据(这里指state.recommend.topBanners)
          和进行操作(这里指getTopBannerAction)
  */
  //通过使用useSelector Hook来获取到store中state中的数据
  // useSelector接收两个参数，第一个为函数，函数中state为store中的state，并返回一个对象
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }),shallowEqual)

  // 通过useDispatch直接获取到dispatch--而不用使用connect和mapDispatch
  const dispatch = useDispatch();

  // 发起网路请求
  useEffect(()=>{
    dispatch(getTopBannerAction());
  },[dispatch])  

  return (
    <div>
      <h2>WYRecommend {topBanners.length}</h2>
    </div>
  )
}


export default (memo(WYRecommend))



// function WYRecommend(props) {
//   // 发起网路请求
//   const {getBanners,topBanners}  = props;//取出获取轮播图数据的方法和轮播图数据
//   useEffect(() => {
//     getBanners()//执行获取到的数据并存储到state中
    
//   }, [getBanners])

//   return (
//     <div>
//       <h2>WYRecommend</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners//获取到store中的state中的轮播图数据
// });
// const mapDispatchToProps = dispatch =>({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(WYRecommend))