// 推荐页的轮播图部分
import React, { memo,useEffect,useRef, useState, useCallback } from 'react'
//与redux相关
import {  useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from '../../store/actionCreators';

// 导入antd的走马灯(轮播图)
import { Carousel } from 'antd'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function WYTopBanner() {
  // 1、内部相关。
  // 关于轮播图切换时的背景图--用索引来编号
  const [currentIndex, setCurrentIndex] = useState(0)



  /* 组件和redux关联目的: 
          获取state中数据(这里指state.recommend.topBanners)
          和进行操作(这里指getTopBannerAction)
  */
  //通过使用useSelector Hook来获取到store中state中的数据
  // useSelector接收两个参数，第一个为函数，函数中state为store中的state，并返回一个对象
  //第二个参数为shallowEqual时只进行浅层比较，节约性能

  // 2、redux相关。这里使用了两个redux的hook用来取代connect
  const { topBanners } = useSelector(state => ({//topBanners即为store中state.recommend中的轮播图数据
    topBanners: state.getIn(['recommend','topBanners'])//取值改为get方法
  }),shallowEqual)

  // 3、通过useDispatch直接获取到dispatch--而不用使用connect和mapDispatch
  const dispatch = useDispatch();


 // 3、其他hooks。
  // 发起网路请求--请求时直接用dispatch(actions)而不用再props中取方法
  useEffect(()=>{
    dispatch(getTopBannerAction());
  },[dispatch])
  // 拿到轮播图组件，为了调用其中切换图片的方法
  const bannerRef = useRef()
  // 该hooks为了缓存数据所用,注意返回的是一函数。---用于监听轮播图片切换时，将背景图url也改变，对应走马灯自己api
  const bannerChange = useCallback((from,to)=>{
    setTimeout(()=>{
      setCurrentIndex(to);
    },0)
  },[])


  // 4.其他业务逻辑
  // 取出轮播图数据中的背景图，由于开始topBanners为空，故需要用&&来转换下
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl+'?imageView&blur=40x20'

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
              {
                topBanners.map((item,index)=>{
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                    </div>
                  )
                })
              }
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
})
