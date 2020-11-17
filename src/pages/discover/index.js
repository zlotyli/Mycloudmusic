import React, { memo,useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

// 导入网路请求配置
import request from '@/services/request'

// 导入本地数据，方便遍历
import { discoverMenu } from '@/common/local-data.js'

import {
  DiscoverWrapper,
  TopMenu
} from './style';
export default memo(function WYDiscover(props) {
  useEffect(()=>{
    
  },[])
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item,index)=>{
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
