import React, { memo } from 'react'
import { MineWrapper } from './style'
export default memo(function WYMine() {
  return (
    <MineWrapper>
      <div className="content  wrap-v2">
        <div className="pic">
          <a href="#/login" className="login">立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})
