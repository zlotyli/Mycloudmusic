import React, { memo, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {Input} from 'antd'; 
import {SearchHeader} from './style';
import WYSearchBox from '../../search-box';
import { 
  getSearchSuggestAction,
  changeSearchKeywordsAction,
  changeCurrentCatetypeAction,
  getSearchResultAction } from '../../store/actionCreators'
export default memo(function WYSearchHeader() {
  // state and props
  const [inputValue,setInputValue] = useState('');
  const [isShow,setIsShow] = useState(false);

  // redux hooks
  const { keywords } = useSelector(state=>({
    keywords: state.getIn(['search','keywords']),
  }),shallowEqual);
  const dispatch = useDispatch();
  // other hooks
  const inputRef = useRef();
  useEffect(()=>{
    console.log('keywords',keywords);
    setInputValue(keywords);
  },[keywords]);
 
  // other handle
  const valueChange = (e) => {
    setInputValue(e.target.value);
    if(e.target.value.trim()){
      dispatch(getSearchSuggestAction(e.target.value.trim()));//改变搜索建议
      setIsShow(true);
    }else{
      setIsShow(false);
    }
  }
  const inputFocus = () =>{
    if(inputValue.trim()){
      setIsShow(true);
    }else{
      setIsShow(false);
    }
  }
  const inputBlur = () =>{
    setIsShow(false);
  }
  // 当点击完毕单曲时，触发input失焦（之前被阻止）
  const inputToBlur = () => {
    inputRef.current.input.blur()
  }
  const handleEnter = () => {
    if(inputValue.trim()){
      
      if(inputValue.trim() !== keywords){
        //1.改变store
        // 改变store中的关键字
        dispatch(changeSearchKeywordsAction(inputValue.trim()))
        // 改变当前的搜索类型
        dispatch(changeCurrentCatetypeAction({title:'songs',name:'单曲',type: 1}));
        // 改变store中的搜索结果
        dispatch(getSearchResultAction(inputValue.trim(),1))
      }
      
      //2.触发失焦
      inputToBlur();
    }
  }
  
  return (
    <SearchHeader>
      <div className="iput multiport">    
        <Input  ref={inputRef}
                className="input" 
                value={inputValue}
                onFocus={inputFocus}
                onBlur={inputBlur}
                onChange={e=>valueChange(e)}
                onPressEnter={handleEnter}/>
        <span className="multiport btn"></span>
        {isShow&&<WYSearchBox styleWidth={418} value={inputValue} inputToBlur={inputToBlur} top={true} right={true}/>}
      </div>
    </SearchHeader>
  )
})
