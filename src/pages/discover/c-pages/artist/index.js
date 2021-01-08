import React, { memo } from 'react'
import { ArtistWrapper } from './style'

// 导入子组件
import WYArtistCategory from './c-cpns/artist-category'
import WYArtistList from './c-cpns/artist-list'
export default memo(function WYArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <WYArtistCategory/>
        <WYArtistList/>
      </div>
    </ArtistWrapper>
  )
})
