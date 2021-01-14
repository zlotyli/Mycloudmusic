import React, { memo, Suspense } from 'react';
import { NavLink } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'


// 导入本地数据，方便遍历
import { discoverMenu } from '@/common/local-data.js'

import {
  DiscoverWrapper,
  TopMenu
} from './style';
export default memo(function WYDiscover(props) {
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
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(props.route.routes)}
      </Suspense>
    </DiscoverWrapper>
  )
})
