import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
// 引入antd/icon中的查询icon
import { SearchOutlined } from '@ant-design/icons'

// 导入数据
import { headerLinks } from '@/common/local-data';

import {
  HeaderWrapper,
  HeaderRight,
  HeaderLeft
} from './style'


export default memo(function WYAppHeader() {

  // 页面代码---为了区分前三(路由跳转)  后三(页面跳转)
  const showSelectItem = (item,index)=>{
    if(index<3){
      return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
      )
    }else{
    return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item,index) => {
                return(
                  <div className="select-item" key={item.title}>
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>  
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户"  prefix={<SearchOutlined/>}/>
          <button className="center">创作者中心</button>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
