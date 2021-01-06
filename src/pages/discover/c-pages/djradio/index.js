// 主播电台页面
import React, { memo } from 'react'
import {DjRadioWrapper} from './style'
import WYRadioCategory from './c-cpns/radio-category';
import WYRadioExcellent from './c-cpns/radio-excellent';
import WYRadioRanking from './c-cpns/radio-ranking';
export default memo(function WYDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <WYRadioCategory/>
      <WYRadioExcellent />
      <WYRadioRanking/>
    </DjRadioWrapper>
  )
})
