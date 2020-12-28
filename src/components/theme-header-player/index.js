//歌词详情页中的右侧主题头
import React, { memo } from 'react'
import { HeaderWrapper } from './style'
export default memo(function WYThemeHeaderPlayer(props) {
  return (
    <HeaderWrapper>
      <h3>{props.title}</h3>
    </HeaderWrapper>
  )
})
