import React, { memo } from 'react'
// 导入工具函数
import { getSizeImage } from '@/utils/format-utils';

import { ArtistWrapper } from './style'

export default memo(function WYSearchArtists(props) {
  const { result } = props;
  return (
    <ArtistWrapper>
      {
        result.map((item,index)=>{
          return (
            <div className="artists-item" key={item.id}>
              <div className="image">
                <img src={getSizeImage(item.img1v1Url, 130)} alt="" />
                <a href="/todo" className='image_cover'>歌手图片</a>
              </div>
              <div className="info">
                <span className="name">{item.name}</span>
                {item.accountId&&<i className="sprite_icon2 icon"></i>}
              </div>
            </div>
          )
          
        })
      }
      
      
    </ArtistWrapper>
  )
})
