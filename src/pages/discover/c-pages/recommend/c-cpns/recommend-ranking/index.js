// 推荐页的榜单部分
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// 导入actionCreator中的异步actions来得到请求数据并修改到store的state中
import { getTopListAction } from '../../store/actionCreators'

// 导入样式组件
import { RankingWrapper } from './style'
// 引入公共组件中的主题头部分
import WYThemeHeaderRCM from 'components/theme-header-rcm'
// 引入公共组件中的榜单部分--top-ranking
import WYTopRanking from 'components/top-ranking'

export default memo(function WYRecommendRanking() {

  // state props

  // redux hooks相关
  const dispatch = useDispatch()
  const { upRanking, newRanking, originRanking } = useSelector(state=>({
    upRanking : state.getIn(['recommend','upRanking']),
    newRanking: state.getIn(['recommend','newRanking']),
    originRanking: state.getIn(['recommend','originRanking'])
  }),shallowEqual)

  // 其他hooks
  
  useEffect(()=>{
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  },[dispatch]);
  return (
    <RankingWrapper>
      <WYThemeHeaderRCM title="榜单"/>
      <div className="top">
        <WYTopRanking info={upRanking}/>
        <WYTopRanking info={newRanking}/>
        <WYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
