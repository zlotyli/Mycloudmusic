import { 
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from "@/services/djradio";

import * as actionTypes from './constants';

// 同步actions
const changeCategoryAction = (res) => ({ //1.改变state中存储的电台分类分类数据--categories
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
})
const changeRecommendsAction = (res) => ({ //3. 改变stata中存储的该分类下的优秀电台的数据-recommends
  type: actionTypes.CHANGE_RECOMMENDS, 
  recommends: res.djRadios
})
const changeHotRadiosAction = (res)=>({ //4. 改变state中存储的该分类下的最热电台排行中的数据-hotRadios
  type:actionTypes.CHANGE_HOT_RADIOS,
  hotRadios:res
})
export const changeCurrentIdAction = (id) => ({ //2. 改变state中存储的当前分类的id
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id
})


// 异步actions
// 请求上方主播电台分类的数据
export const getRadioCategoriesAction = () => { // 对应 1
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(changeCategoryAction(res));
      const currentId = res.categories[0].id;//将分类列表中第一个分类设置为初始状态
      dispatch(changeCurrentIdAction(currentId));
    })
  }
}
// 通过分类id来请求该分类的优秀电台的数据
export const getRadioRecommendAction = (currentId) => {
  return dispatch => {
    getDjRadioRecommend(currentId).then(res => {
      dispatch(changeRecommendsAction(res));
    })
  }
}
// 传入分类id请求当前分类下最热电台的电台排行榜的数据
export const getHotRadiosAction = (currentId, offset=0) => {
  return dispatch => {
    console.log('currentId',currentId)
    getDjRadios(currentId, 30, offset).then(res => {
      dispatch(changeHotRadiosAction(res));
    })
  }
}