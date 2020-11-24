import React, { memo } from 'react';
// 导入工具函数用于处理大数字，以及处理图片大小
import { getCount,getSizeImage } from '@/utils/format-utils';

import {
  SongsCoverWrapper
} from './style';

export default memo(function WYSongsCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl,140)} alt=""/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
