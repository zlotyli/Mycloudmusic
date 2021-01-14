import * as actionTypes from './constants';
// 导入网络请求函数
import { getSearchSuggest,getSearch } from '@/services/search';
// 导入工具函数
import {objChange} from '@/utils/search-utils'
// 同步actions
const changeSuggestAction = (suggests)=>({ //2.改变存储的存储搜索建议suggests
  type: actionTypes.CHANGE_SUGGEST,
  suggests
})
const changeSearchResultAction = (results)=>({ // 3. 改变存储的搜索结果results
  type: actionTypes.CHANGE_RESULTS,
  results
})
export const changeSearchKeywordsAction = (keywords) =>({ //1. 改变搜索的关键字
  type: actionTypes.CHANGE_KEYWORDS,
  keywords
})
export const changeCurrentCatetypeAction = (catetype) =>({ //4. 改变当前选中的搜索类型
  type:actionTypes.CHANGE_CURRENT_CATETYPE,
  catetype
})
export const changePageSizeAction = (pageSize) => ({ //5. 改变每页要显示的数据量
  type: actionTypes.CHANGE_PAGESIZE,
  pageSize
})
// 异步actions
// 发送请求到搜索关键字返回的数据，并派发同步actions来改变reducer中存放的数据
export const getSearchSuggestAction = (keywords)=>{ //对应2
  return (dispatch)=>{
    getSearchSuggest(keywords).then(res=>{
      dispatch(changeSuggestAction(res.result));
    })
  }
}
export const getSearchResultAction = (keywords,type,limit,offset) =>{
  return (dispatch)=>{
    getSearch(keywords,type,limit,offset).then(res=>{
      // 1. 处理一下数据,使得不同类型的数据规范在一个类中显示
      // console.log(objChange(res));
      // 2. 派发改变state中存储的对应的搜索信息的同步actions
      dispatch(changeSearchResultAction(objChange(res)));
    })
  }
}