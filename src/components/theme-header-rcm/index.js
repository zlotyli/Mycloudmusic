import React, { memo } from 'react';
import PropTypes from 'prop-types';

// 引入样式
import { HeaderWrapper } from './style'

const WYThemeHeaderRCM = memo(function (props){
  const { title, keywords=[] } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index)=>{
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
});
// 规范化props的输入
WYThemeHeaderRCM.propTypes = {
  title:PropTypes.string.isRequired,
  keywords:PropTypes.array
}
// 给输入的props默认值
WYThemeHeaderRCM.defaultProps = {
  keywords : []
}
export default WYThemeHeaderRCM;
