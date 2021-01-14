import React, { memo, useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink,withRouter } from 'react-router-dom'
import { Input } from 'antd'
// 引入antd/icon中的查询icon
import { SearchOutlined } from '@ant-design/icons'

// 导入数据
import { headerLinks } from '@/common/local-data';
//导入子组件searchBox
import WYSearchBox from '@/pages/search/search-box';
// 导入要派发的异步actions
import { 
  getSearchSuggestAction,
  changeSearchKeywordsAction,
  getSearchResultAction,
  changeCurrentCatetypeAction } from '@/pages/search/store'

import {
  HeaderWrapper,
  HeaderRight,
  HeaderLeft
} from './style'


const WYAppHeader = (props) => {
  // state and props
  const [isShowSearchBox,setIsShow] = useState(false);
  const [inputValue,setInputValue] = useState('');

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  const inputRef = useRef();
  useEffect(() => {
    if(inputValue.trim()){
      dispatch(getSearchSuggestAction(inputValue.trim()))
    }
  }, [dispatch,inputValue])
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
    setInputValue(e.target.value.trim());
    if(e.target.value.trim()){
      dispatch(getSearchSuggestAction(e.target.value.trim()));
      setIsShow(true);
    }else{
      setIsShow(false);
    }
    
  }
  const inputBlur = () =>{
    // console.log('失焦中');
    if(inputValue){
      dispatch(getSearchSuggestAction(inputValue));
    }
    setIsShow(false);
  } 
  const inputFocus = () =>{
    // console.log('聚焦中');
    if(inputValue){
      dispatch(getSearchSuggestAction(inputValue));
      setIsShow(true);
    }else{
      setIsShow(false);
    }
  }
  
  const inputToBlur = ()=>{
    // console.log('触发失焦');
    inputRef.current.blur();//触发Input组件失焦--对应点击单曲时关闭了的失焦检测
    
  }
  // 当点击enter时
  const handleEnter = ()=>{
    if(inputValue){
    // 3.转跳路由
    props.history.push('/search');
    // 1.派发actions
    dispatch(changeSearchKeywordsAction(inputValue));//改变存储的关键字
    dispatch(changeCurrentCatetypeAction({title:'songs',name:'单曲',type: 1,}));//改变当前搜索类型
    dispatch(getSearchResultAction(inputValue,1));//改变搜索结果

    
    // 2.关闭搜索框组件
    inputToBlur();
    
    }
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
                  onChange={e=>handleChange(e)}
                  onPressEnter={handleEnter}/>
          <button className="center">创作者中心</button>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      {
        isShowSearchBox&&<WYSearchBox styleWidth={240} value={inputValue} inputToBlur={inputToBlur}/>
      }
      
    </HeaderWrapper>
  )
}
export default withRouter(memo(WYAppHeader));
