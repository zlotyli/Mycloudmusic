// 电台排行榜--这里只做最热电台部分
import React, { memo,useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RankingWraper } from './style';
// 导入公共样式
import WYThemeHeaderRadio from '@/components/theme-header-radio';
import WYRadioRankingCover from '@/components/radio-ranking-cover';
import WYPagination from '@/components/pagination';
import { getHotRadiosAction } from '../../store/actionCreators'
export default memo(function WYRadioRanking() {
  // state and props
  const [currentPage,setCurrentPage] = useState(1);
  // redux hooks
  const dispatch = useDispatch();
  const { currentId,hotRadios } = useSelector((state)=>({
    currentId: state.getIn(['djradio','currentId']),//获取当前分类的id
    hotRadios: state.getIn(['djradio','hotRadios'])//获取该分类下的最热电台排行的数据
  }),shallowEqual)
  // other hooks
  useEffect(() => { //起初时派发请求得到数据
    dispatch(getHotRadiosAction(currentId));
  }, [dispatch,currentId])
  useEffect(()=>{
    setCurrentPage(1);
  },[currentId]);
  // other handle
  const radios = hotRadios.djRadios || [];//获取最热电台中的电台数据
  const total = hotRadios.count || 0;//获取最热电台中的总数量
  const onPageChange = (page,pageSize)=>{
    setCurrentPage(page);
    dispatch(getHotRadiosAction(currentId, pageSize * ( page - 1 )));
  }
  return (
    <RankingWraper>
      <WYThemeHeaderRadio title='电台排行榜' rightSlot={['上升最快','最热电台']}/>
      <div className="ranking-list">
        {
          radios.map((item,index)=>{
            return (<WYRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <WYPagination currentPage={currentPage}
                    total={total}
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
