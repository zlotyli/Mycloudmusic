import React, { memo } from 'react'
import { useSelector,shallowEqual} from 'react-redux'
// 导入工具函数
import { getMoreSizeImage } from '@/utils/format-utils'
import { HeaderWrapper } from './style'
export default memo(function WYSingerHeader() {
  // state and props
  // redux hook
  const { singerInfo } = useSelector((state)=>({
    singerInfo: state.getIn(['singer','singerInfo'])
  }),shallowEqual)
  return (
    <HeaderWrapper>
      <div className="singer-name">
        <span className="z-name">{singerInfo.name}</span>
        <span className="e-name">{singerInfo.alias&&singerInfo.alias[0]}</span>
      </div>
      <div className="img">
        <img src={getMoreSizeImage(singerInfo.picUrl,640,300)} alt=""/>
        <div className="mask ban_mask"></div>
        <div className="btn-home sprite_icon"></div>
        <div className="btn-collection sprite_icon"></div>
      </div>
    </HeaderWrapper>
  )
})
