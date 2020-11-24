import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// 导入封装好的组件
//推荐页热门主题头组件
import WYThemeHeaderRCM from 'components/theme-header-rcm'
// 歌单以及新碟上架的单个songs-cover
import WYSongsCover from 'components/songs-cover'


// 导入样式组件
import { HotRecommendWrapper } from './style'

// 导入公共数据文件夹commoncontants中的热门推荐中的每次请求数量
import { HOT_RECOMMEND_LIMIT } from '@/common/contants.js'




// 导入store中的actionCreator
import { getHotRecommendAction } from '../../store/actionCreators'

export default memo(function WYHotRecommend() {
  // 内部state


  // redux hooks
  // 获取到state.recommend中的hotRecommends
  const { hotRecommends }= useSelector((state)=>({
    hotRecommends : state.getIn(['recommend','hotRecommends'])
  }),shallowEqual);
  // 获取到dispatch用来分发actionCreate中的方法
  const dispatch = useDispatch();


  // 其他hooks
  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  },[dispatch])
  return (
    <HotRecommendWrapper>
      <WYThemeHeaderRCM title="热门推荐" keywords={['华语','流行','民谣','摇滚','电子']}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item,index)=>{
            return (
              <WYSongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
