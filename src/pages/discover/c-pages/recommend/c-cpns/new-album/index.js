// 推荐页的新碟上架部分
import React, { memo } from 'react'

// 引入公共组件中的主题头部分
import WYThemeHeaderRCM from 'components/theme-header-rcm'
export default memo(function WYNewAlbum() {
  return (
    <div>
      <WYThemeHeaderRCM title="新碟上架"/>
    </div>
  )
})
