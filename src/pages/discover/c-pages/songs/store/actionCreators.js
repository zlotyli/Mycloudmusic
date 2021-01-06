import * as actionTypes from './constants';
// 导入本组件的网络请求函数 
import { getSongCategory,getSongCategoryList } from "@/services/songs";
// 导入工具函数
import { handleSongsCategory } from '@/utils/songs-category-utils';
// 同步acitons
const changeCategoryAction = (res) => ({//1. 为分类列表中的数据category赋值
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})
const changeSongListAction = (res) => ({ //3. 为分类下的歌单数据categorySongs赋值
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})
// 改变当前分类的名字
export const changeCurrentCategoryAction = (name) => ({ //2. 改变当前的分类名
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})



// 异步actions
// 得到分类列表中的数据
export const getCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoryAction(categoryData))
    })
  }
}
// 得到分类下对应的歌单的数据
export const getSongsListAction = (page)=>{
  return (dispatch,getState)=>{
    // 获得当前分类
    const name = getState().getIn(['songs','currentCategory']);
    getSongCategoryList(name,page*35).then(res=>{
      dispatch(changeSongListAction(res));
    })
  }
}