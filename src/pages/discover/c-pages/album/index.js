import React, { memo } from 'react'
import { AblumWrapper } from './style'
// 导入子组件
import WYHotAlbum from './c-cpns/hot-album'
import WYAllAlbum from './c-cpns/all-album'
export default memo(function WYAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <WYHotAlbum/>
      <WYAllAlbum/>
    </AblumWrapper>
  )
})
