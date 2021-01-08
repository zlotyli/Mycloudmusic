import React, { memo } from 'react'
// 导入工具函数
import { getSizeImage } from '@/utils/format-utils';

import { ItemWrapper } from './style'

export default memo(function WYArtistItem(props) {
  const { index,info} = props;
  return (
    <ItemWrapper>
        {//前十个有图像
          index < 10 && (
            <div className="image">
              <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
              <a href="/todo" className='image_cover'></a>
            </div>
          )
        }
        <div className={`info ${index<10?(index>4?'info-topTen info-lastFive':'info-topTen'):''}`}>
          <span className="name">{info.name}</span>
          <i className="sprite_icon2 icon"></i>
        </div>
    </ItemWrapper>
  )
})
