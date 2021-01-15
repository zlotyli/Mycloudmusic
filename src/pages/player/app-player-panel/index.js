import React, { memo } from 'react'

// 导入样式组件
import { PanelWrapper } from './style'
// 导入子组件
import WYPlayHeader from './c-cpns/play-header';
import WYPlayList from './c-cpns/play-list';
import WYLyricPanel from './c-cpns/play-lyric';
export default memo(function WYAppPlayerList(props) {
  return (
    <PanelWrapper>
      <WYPlayHeader {...props}/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <WYPlayList/>
        <WYLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
