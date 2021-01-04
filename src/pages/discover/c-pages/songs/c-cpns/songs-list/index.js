import React, { memo, useState,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// 导入样式组件
import {SongListWrapper} from './style';
// 导入公共组件
import WYSongsCover from "components/songs-cover";
import WYPagination from 'components/pagination';
import { getSongsListAction } from '../../store/actionCreators'
export default memo(function WYSongsList() {
  // state and props
  const [currentPage, setCurrentPage] = useState(1);
  // redux hook
  const {categorySongs,currentCategory} = useSelector((state)=>({
    categorySongs: state.getIn(['songs','categorySongs']),//当前分类下对应的歌单数据
    currentCategory: state.getIn(['songs','currentCategory'])
  }),shallowEqual)
  const dispatch = useDispatch()
  // other hooks
  useEffect(()=>{
    setCurrentPage(1);
  },[currentCategory])//根据currentCategory改变时重置

  // other handle
  const songsList = categorySongs.playlists || [];//数据列表
  const total = categorySongs.total || 0;//列表总量
  const onPageChange = (page,pageSize) =>{
    dispatch(getSongsListAction(page-1));
    setCurrentPage(page);
  }
  return (
    <SongListWrapper>
      <div className="songs-list">
        {songsList.map((item,index)=>{
          return (
            <WYSongsCover info={item} key={item.id} right='30px' textnowrap={true}/>
          )
        })}
      </div>
      <WYPagination currentPage = {currentPage}
                    total={total}
                    pageSize={35}
                    onPageChange={onPageChange}/>
    </SongListWrapper>
  )
})
