import React, { memo,useEffect,useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AlphaListWrapper } from './style';
// 导入字母表
import { singerAlphas } from '@/utils/artist-utils';
// 导入actions
import { getArtistListAction } from '../../../../store/actionCreators'
export default memo(function WYArtistAlphaList() {
  // state and props
  // 设置字母表中显示
  const [currentAlpha, setCurrentAlpha] = useState("-1");
  // redux hooks
  const { currentType, currentArea } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),//歌手的类型name以及类型对应id(type)
    currentArea: state.getIn(["artist", "currentArea"])//地域id
  }), shallowEqual);
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentType, currentArea]);//最开始时使字母表处于最左侧
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));//将本字母中的歌手列表存储到redux的state中
  }, [currentAlpha, currentType, currentArea, dispatch]);
  console.log(currentAlpha)
  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {//当地域不为全部(即不为推荐时)
        currentArea !== -1 && singerAlphas.map((item,index) => {
          const isActive = currentAlpha === item;
          return (
            <div key={item} className={`item ${isActive?'active':''}`}>
              <span onClick={e => setCurrentAlpha(item)}>{ item==='-1'?'热门':(item==='0'?'其他': item) }</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
