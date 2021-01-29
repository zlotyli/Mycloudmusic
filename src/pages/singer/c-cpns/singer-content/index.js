import React, { memo } from 'react'
import {shallowEqual, useSelector } from 'react-redux';
import { SingerContentWrapper } from './style'
// 导入子组件
import WYSingerHotSongs from './c-cpns/singer-hotsongs'
export default memo(function WYSingerContent() {
  // stata and props
  // redux hook
  const { currentType } = useSelector((state)=>({
    currentType: state.getIn(['singer','currentType'])
  }),shallowEqual)
  const renderChild = (currentType)=>{
    switch(currentType){
      case 'songs':
        return <WYSingerHotSongs/>
      default:
        return null;
    }
  }
  return (
    <SingerContentWrapper>
      <div>
        {renderChild(currentType)}
      </div>
    </SingerContentWrapper>
  )
})
