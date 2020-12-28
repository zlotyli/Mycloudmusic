import React, { memo } from 'react';
import { MultiportWrapper } from './style';
import WYThemeHeaderPlayer from 'components/theme-header-player';
export default memo(function WYAppMultiport() {
  return (
    <MultiportWrapper>
      <WYThemeHeaderPlayer title='网易云音乐多端下载'/>
      <div className="select">
        <a href="#/" className="select-item apple">苹果下载</a>
        <a href="#/" className="select-item window">微软下载</a>
        <a href="#/" className="select-item android">安卓下载</a>
      </div>
      <p className='info'>同步歌单，随时畅听320k好音乐</p>
      <a href="#/" className="link">补充或修改歌曲资料&gt;</a>
    </MultiportWrapper>
  )
})
