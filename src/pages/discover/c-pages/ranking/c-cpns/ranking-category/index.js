import React, { memo } from 'react';
import { useSelector, shallowEqual,useDispatch } from 'react-redux';
// 导入样式组件
import {
  CategoryWrapper
} from './style'
// 导入工具函数
import { getSizeImage } from '@/utils/format-utils';
// 导入该组件store中的actions
import { changeCurrentCateIndexAction,getSongsListAction } from '../../store/actionCreators'
export default memo(function WYRankingCategory() {
  // state and props

  // redux hook
  const { categoryList,currentCateIndex } = useSelector(state => ({
    categoryList: state.getIn(['ranking','categoryList']),//右侧榜单列表
    currentCateIndex:state.getIn(['ranking','currentCateIndex'])
  }),shallowEqual);
  const dispatch = useDispatch();
  // other hook
  // other handle
  const List = categoryList || [] ;

  const changeContent = (index)=>{
    dispatch(changeCurrentCateIndexAction(index));//改变当前榜单类别在榜单类别列表中的索引--用于样式的改变
    const id = categoryList[index].id;
    dispatch(getSongsListAction(id));//通过id来派发异步actions来更新songsList中的歌曲列表数据以及头部信息
  }
  return (
    <CategoryWrapper>
      {
        List.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={`item ${ index === currentCateIndex?'active':'' }`}
                onClick={(e)=>changeContent(index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
