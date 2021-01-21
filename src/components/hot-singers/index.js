import React, { memo } from 'react'
import { HotSingersWrapper } from './style'
import WYThemeHeaderPlayer from 'components/theme-header-player';

import { hotSingers } from '@/common/local-data'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function WYHotSingers() {
  return (
    <HotSingersWrapper>
      <WYThemeHeaderPlayer title="热门歌手"/>
      <div className="singers">
      {
        hotSingers.map((singer,index)=>{
          return (
            <div className="singers-item" key={singer.id}>
              <div className="img">
                <img src={getSizeImage(singer.imgSrc,50)} alt=""/>
              </div>
              <div className="singer-name">{singer.name}</div>
            </div>
          )
        })
      }
      </div>
      
    </HotSingersWrapper>
  )
})
