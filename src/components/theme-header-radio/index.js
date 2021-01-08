// 主播电台页/歌手页的主题头
import React, {memo} from 'react';

import {
  HeaderWrapper
} from "./style";

export default memo(function WYThemeHeaderRadio(props) {
  const { title, rightSlot=[] } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">
        {
          rightSlot.map((item, index)=>{
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            )
          })
        }
      </div>
      
    </HeaderWrapper>
  )
})
