import React, { memo } from 'react';//第三方
import {renderRoutes} from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

// 导入工具的功能性东西。如路由配置、网络请求、actionCreators。untils
// 导入路由
import routes from './router';

import store from './store';

// 导入组件
import WYAppHeader from 'components/app-header';
import WYAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WYAppHeader/>
        {renderRoutes(routes)}
        <WYAppFooter/>
      </HashRouter>
    </Provider>
    
  );
});
