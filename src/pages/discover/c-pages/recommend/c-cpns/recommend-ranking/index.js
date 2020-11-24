// 推荐页的榜单部分
import React, { memo } from 'react'

// 引入公共组件中的主题头部分
import WYThemeHeaderRCM from 'components/theme-header-rcm'
export default memo(function WYRecommendRanking() {
  return (
    <div>
      <WYThemeHeaderRCM title="榜单"/>
    </div>
  )
})
