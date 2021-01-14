import reducer from './reducer';
import { getSearchSuggestAction,changeSearchKeywordsAction,getSearchResultAction,changeCurrentCatetypeAction } from './actionCreators'
export {
  reducer,
  getSearchSuggestAction,//派发请求搜索建议的actions
  getSearchResultAction,//派发请求到搜索结果的actions
  changeSearchKeywordsAction,//派发改变搜索关键字的actions
  changeCurrentCatetypeAction,//派发改变当前搜索的类型
}; 