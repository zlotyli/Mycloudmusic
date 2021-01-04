import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getSongsListAction,getCategoryAction } from './store/actionCreators'
// import { useLocation } from 'react-router-dom';

import { SongsWrapper } from './style';
import WYSongsHeader from './c-cpns/songs-header';
import WYSongsList from './c-cpns/songs-list'
export default memo(function WYSongs() {
  // // redux hooks
  const dispatch = useDispatch();
  // // other hooks
  useEffect(()=>{
    dispatch(getCategoryAction());//使得分类列表中存在值
    dispatch(getSongsListAction(0));//使得分类的歌单数据有值
  },[dispatch]);
  return (
    <SongsWrapper className="wrap-v2">
      <WYSongsHeader />
      <WYSongsList/>
    </SongsWrapper>
  )
})
