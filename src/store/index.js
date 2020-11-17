import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';// 异步中间件

import reducer from './reducer'; //导入合并后的reducer
// 对于redux的chorem插件配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));
export default store;