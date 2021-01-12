import React, { memo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
// 引入antd/icon中的查询icon
import { SearchOutlined } from '@ant-design/icons'

// 导入数据
import { headerLinks } from '@/common/local-data';
//导入子组件searchBox
import WYSearchBox from '@/pages/search/search-box';
// 导入要派发的异步actions
import { getSearchSuggestAction } from '@/pages/search/store'

import {
  HeaderWrapper,
  HeaderRight,
  HeaderLeft
} from './style'


export default memo(function WYAppHeader() {
  // state and props
  const [isShowSearchBox,setIsShow] = useState(false);
  const [inputValue,setInputValue] = useState('');

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  const inputRef = useRef();
  
  // other handle

  // 页面代码---为了区分前三(路由跳转)  后三(页面跳转)
  const showSelectItem = (item,index)=>{
    if(index<3){
      return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
      )
    }else{
    return <a href={item.link}>{item.title}</a>
    }
  }
  const handleChange = (e) =>{
    setInputValue(e.target.value);
    if(e.target.value.trim()){

      setIsShow(true);
      dispatch(getSearchSuggestAction(e.target.value));
    }else{
      setIsShow(false);
    }
    
  }
  const inputBlur = () =>{
    // console.log('失焦中');
    setIsShow(false);
  } 
  const inputFocus = () =>{
    // console.log('聚焦中');
    if(inputValue.trim()){
      dispatch(getSearchSuggestAction(inputValue));
      setIsShow(true);
    }else{
      setIsShow(false);
    }
  }
  const inputToBlur = ()=>{
    inputRef.current.blur();//触发Input组件失焦--对应点击单曲时关闭了的失焦检测
  }

  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item,index) => {
                return(
                  <div className="select-item" key={item.title}>
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>  
        </HeaderLeft>
        <HeaderRight>
          <Input  ref={inputRef}
                  onBlur={inputBlur}
                  onFocus={inputFocus}
                  className="search" 
                  placeholder="音乐/视频/电台/用户" 
                  prefix={<SearchOutlined/>} 
                  defaultValue=''
                  value={inputValue}
                  onChange={e=>handleChange(e)}/>
          <button className="center">创作者中心</button>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      {
        isShowSearchBox&&<WYSearchBox value={inputValue} inputToBlur={inputToBlur}/>
      }
      
    </HeaderWrapper>
  )
})
