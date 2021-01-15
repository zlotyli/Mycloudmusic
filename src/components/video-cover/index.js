import React, { memo } from 'react';
import { VideoWrapper } from './style'
import { getCount,getMvSizeImage,formatDate } from '@/utils/format-utils'

export default memo(function WYVideoCover(props) {
  const {imgXsize,imgYsize,info} = props
  return (
    <VideoWrapper xsize={imgXsize} ysize={imgYsize}>
      <div className="video-image">
        <img src={ getMvSizeImage(info.coverUrl,imgXsize,imgYsize) } alt={info.name}/>
        <div className="viewers">
          <i className="sprite_icon3 play"></i>
          <span>{getCount(info.playTime)}</span>
        </div>
        <span className="duration">{formatDate(info.durationms,'mm:ss')}</span>
      </div>
      <div className="video-info">
        <div className="title">
          {info.type===0&&<i className="mv-icon sprite_icon3"></i>}
          <span className="title-name">{info.title}</span>
          
        </div>
        <div className="artist text-nowrap">
          {info.type===1&&<span>by&ensp;</span>}
          { 
            info.creator.map((iten,indey)=>{
              return (
                <div className="artist-item" key={iten.userId}>
                  <span className="aname">{iten.userName}</span>
                  <span className="divider">/</span>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </VideoWrapper>
  )
})
