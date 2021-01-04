import React, { memo,useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
// 导入子组件
import WYSongsCategory from '../songs-category';
export default memo(function WYSongsHeader() {
  // redux hooks
  const { currentCategory } = useSelector((state)=>({
    currentCategory: state.getIn(['songs','currentCategory']),//获取当前的分类
  }),shallowEqual)
  // other hooks
  
  const [isShowCategoryList, setisShowCategoryList] = useState(false);
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={e=>setisShowCategoryList(!isShowCategoryList)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {isShowCategoryList?<WYSongsCategory setIsShow={setisShowCategoryList}/>:null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})
