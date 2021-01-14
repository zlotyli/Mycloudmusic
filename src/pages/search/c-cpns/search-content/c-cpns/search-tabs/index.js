import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {searchCategories} from '@/common/local-data'
import { TabsWrapper } from './style'
import {changeCurrentCatetypeAction,getSearchResultAction,changePageSizeAction} from '../../../../store/actionCreators'
export default memo(function WYSearchTabs() {
  // state and props
  // redux hooks
  const {keywords,catetype,results} = useSelector((state)=>({
    keywords:state.getIn(['search','keywords']),//获取搜索关键词
    catetype:state.getIn(['search','catetype']),//获取当期搜索的类型
    results:state.getIn(['search','results']),//获取当前搜索的结果
  }),shallowEqual);
  const dispatch = useDispatch()
  // other hook
  // other handle
  const total = results.total || 0;
  const handleClick = (catetype) =>{
    // 1. 改变当前的类型
    dispatch(changeCurrentCatetypeAction(catetype));
    // 2. 改变当前的搜索结果
    dispatch(getSearchResultAction(keywords,catetype.type,catetype.pageSize));
    // 3. 改变当前的页面显示数据量
    dispatch(changePageSizeAction(catetype.pageSize));
  }
  return (
    <TabsWrapper>
      <div className="smallt">
        搜索“{ keywords }”，找到<span className="showy">{total}</span>{`${catetype.type ===1?'首':(catetype.type===10?'张':'个')}${catetype.name}`}
      </div>
      <div className="tabs tab_bg">
        {
          searchCategories.map((item,index)=>{
            return (
              <div key={item.title} className={`tab-item tab_bg ${item.type === catetype.type? 'active': ''}`}>
                <div onClick={e=>handleClick(item)}>{item.name}</div>
              </div>
            )
          })
        }
      </div>
    </TabsWrapper>
  )
})
