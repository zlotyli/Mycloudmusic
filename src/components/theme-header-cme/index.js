import React, { memo } from 'react';

// 引入样式
import { HeaderWrapper } from './style'

const WYThemeHeaderCME = memo(function (props){
  const { title,num } = props
  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          <span>{`共${num}条评论`}</span>                 
        </div>
      </div>
    </HeaderWrapper>
  )
});

export default WYThemeHeaderCME;
