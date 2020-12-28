// 播放组件中小的各处歌词组件
import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PannelWrapper } from './style'
// 导入滚动函数
import { scrollTo } from '@/utils/parse-lyric'
export default memo(function WYLyricPanel() {
  // state props
  // redux hook
  const { lyricList,currentLyricIndex } = useSelector(state=>({
    lyricList:state.getIn(['player','lyricList']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex'])
  }),shallowEqual)
  // other hook
  const panelRef = useRef();
  useEffect(()=>{
    if(currentLyricIndex>0&&currentLyricIndex<3) return;
    scrollTo(panelRef.current,(currentLyricIndex - 3)*32,300)
  },)
  return (
    <PannelWrapper ref = {panelRef}>
      <div className="lrc-content">
        {
          lyricList.map((item,index)=>{
            return (
              <div key={item.time} className={`lrc-item ${index === currentLyricIndex?'active':''}`}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
