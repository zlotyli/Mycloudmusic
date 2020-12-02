import React, { memo } from 'react'
// 导入样式组件
import { AlbumWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function WYAlbumCover(props) {
  // state and props
  const { info,size=130,width=153,bgp="-845px" } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl,size)} alt={info.name}/>
        <a href="/todo" className="cover sprite_covor">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
