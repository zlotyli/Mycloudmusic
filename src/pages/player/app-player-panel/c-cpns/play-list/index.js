import React, { memo } from 'react'
import { PlayListWrapper } from './style'
import { useSelector, shallowEqual } from 'react-redux'
// 导入工具函数--格式化时间
import { formatDate } from '@/utils/format-utils';

export default memo(function WYPlayList() {
  // state and props
  // redux hook
  const {playList,currentSongIndex} = useSelector(state=>({
    playList : state.getIn(['player','playList']),
    currentSongIndex: state.getIn(['player','currentSongIndex'])
  }),shallowEqual);
  return (
    <PlayListWrapper>
      {
        playList.map((item,index)=>{
          return (
            <div key={item.id} className={`play-item ${currentSongIndex === index?'active':''}`}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatDate(item.dt,'mm:ss')}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})
