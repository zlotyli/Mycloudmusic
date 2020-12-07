// 用户登录
import React, { memo } from 'react';

// 导入样式组件
import { LoginWrapper } from './style';
export default memo(function WYUserLogin() {
  return (
    <LoginWrapper className="sprite_02">
      <div className="note">登录网易云音乐，可以无限享受收藏的乐趣，并且无限同步到手机</div>
      <a href="/todo" className="btn sprite_02">用户登录</a>
    </LoginWrapper>
  )
})
