import React, { memo } from 'react';
// 导入样式组件
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';
// 导入子组件
import  WYPlayerInfo from './c-cpns/player-info';
import WYPlayerSheet from './c-cpns/player-sheet';
import WYPlayerRelevant from './c-cpns/player-relevant';
import WYAppMultiport from 'components/app-multiport'
import WYPlayerComment from './c-cpns/player-comment'
export default memo(function WYPlayer() {
  
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <WYPlayerInfo/>
          <WYPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <WYPlayerSheet/>
          <WYPlayerRelevant/>
          <WYAppMultiport/>
        </PlayerRight>
      </div>
        
    </PlayerWrapper>
  )
})
