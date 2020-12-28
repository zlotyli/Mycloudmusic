import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getCategoryListAction,getSongsListAction } from './store/actionCreators'
// 导入子组件
import WYRankingHeader from './c-cpns/ranking-header';
import WYRankingCategory from './c-cpns/ranking-category';
import WYRankingList from './c-cpns/ranking-list'

import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style'
export default memo(function WYRanking() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategoryListAction());//派发异步actions使得榜单类别列表中有值
    dispatch(getSongsListAction(19723756));//派发异步actions使得当前榜单的歌曲列表中有值
  },[dispatch])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <WYRankingCategory/>
      </RankingLeft>
      <RankingRight>
        <WYRankingHeader/>
        <WYRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
