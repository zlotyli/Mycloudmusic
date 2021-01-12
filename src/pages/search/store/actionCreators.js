import * as actionTypes from './constants';
// 导入网络请求函数
import { getSearchSuggest } from '@/services/search'
// 同步actions
const changeSuggestAction = (suggests)=>({
  type: actionTypes.CHANGE_SUGGEST,
  suggests
})

// 异步actions
// 发送请求到搜索关键字返回的数据，并派发同步actions来改变reducer中存放的数据
export const getSearchSuggestAction = (keywords)=>{
  return (dispatch)=>{
    getSearchSuggest(keywords).then(res=>{
      dispatch(changeSuggestAction(res.result));
    })
  }
}