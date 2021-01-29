import React, { memo } from 'react'
import { useSelector,shallowEqual, useDispatch} from 'react-redux'
// 导入工具函数
import { getMoreSizeImage } from '@/utils/format-utils'
import { HeaderWrapper } from './style'
// 导入标签页数据
import { tabArray } from '@/common/local-data';
import { changeCurrentType } from '../../store/actionCreators'
export default memo(function WYSingerHeader() {
  // state and props
  // redux hook
  const { singerInfo,currentType } = useSelector((state)=>({
    singerInfo: state.getIn(['singer','singerInfo']),
    currentType: state.getIn(['singer','currentType']),
  }),shallowEqual);
  const dispatch = useDispatch();
  // other handle
  const singerCname = (singerInfo&&singerInfo.name)||'';
  const singerEname = (singerInfo&&singerInfo.alias&&singerInfo.alias[0]) || '';
  const changeType = (type)=>{
    dispatch(changeCurrentType(type));
  }
  return (
    <HeaderWrapper>
      <div className="singer-name">
        <span className="z-name">{singerCname}</span>
        <span className="e-name">{singerEname}</span>
      </div>
      <div className="img">
        <img src={getMoreSizeImage(singerInfo&&singerInfo.picUrl,640,300)} alt=""/>
        <div className="mask ban_mask"></div>
        <div className="btn-home sprite_icon"></div>
        <div className="btn-collection sprite_icon"></div>
      </div>
      <div className="tab-bar tab_bg">
        {
          tabArray.map((tab,index)=>{
            return (
              <div className={`tab-item tab_bg ${tab.type===currentType?"active":''}`} key={tab.title}>
                <div className="inside tab_bg" onClick={e=>changeType(tab.type)}>{tab.title}</div>
              </div>
            )
          })
        }
        
      </div>
    </HeaderWrapper>
  )
})
