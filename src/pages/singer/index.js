import React, { memo } from 'react';
//导入推荐页的style样式
import { 
  SingerWrapper,
  SingerLeft,
  SingerRight
} from './style';
// 导入公共组件
import WYAppMultiport from 'components/app-multiport'
import WYHotSingers from 'components/hot-singers'
// 导入子组件
import WYSingerHeader from './c-cpns/singer-header'
function WYSinger(props) {
  return (
    <SingerWrapper>
      <div className="content wrap-v2">
        <SingerLeft>
          <WYSingerHeader/>
        </SingerLeft>
        <SingerRight>
          <WYHotSingers/>
          <WYAppMultiport/>
        </SingerRight>
      </div>
    </SingerWrapper>
  )
}


export default (memo(WYSinger))

