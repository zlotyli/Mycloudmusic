// 左侧歌曲的评论信息
import React, { memo, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import {
  CommentWrapper,
  CommentTop,
  CommentInfo,
  // CommentPagination
} from './style';
import WYThemeHeaderCME from '@/components/theme-header-cme';
import WYSongsComment from '@/components/songs-comment';
import WYPagination from 'components/pagination';

// import { Pagination } from 'antd';
import {getCommentsAction} from '../../store/actionCreators'
export default memo(function WYPlayerComment() {
  const [currentPage, setCurrentPage] = useState(1);
  // 从redux中获取当前播放的歌曲，以及其歌词列表
  const { currentSong,comments } = useSelector((state)=>({
    currentSong: state.getIn(['player','currentSong']),
    comments:state.getIn(['player','comments'])
  }),shallowEqual);
  const dispatch = useDispatch();
  // other handle
  const onPageChange=(page,pageSize)=>{
    setCurrentPage(page);
    dispatch(getCommentsAction(currentSong.id,(page-1)*20))
  }
  const total = comments.total || 0;//定义歌曲总数
  const hotComments = comments.hotComments || [];//热门评论数组
  const allComments = comments.comments || [];//最新评论数组
  return (
    <CommentWrapper>
      <WYThemeHeaderCME title='评论' num={total}/>
      <CommentTop>
        <div className="head">
          <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt=""/>
        </div>
        <div className="edit">
          <div className="text-wrap">
            <textarea className="text" placeholder="评论"></textarea>
            <div className="corr"><span>&lt;</span></div>
          </div>
          <div className="btns">
            <div className="left">
              <span className="first sprite_icon2"></span>
              <span className="last sprite_icon2"></span>
            </div>
            <div className="right">
              <span>140</span>
              <a href="/#" className='btn sprite_button2'>评论</a>
            </div>
          </div>
        </div>
      </CommentTop>
      <CommentInfo>
        {
          hotComments.length?(
            <div className='hot-comments'>
              <h3 className='hot'>精彩评论</h3>
              {
                hotComments.map((item,index)=>{
                  return (
                    <WYSongsComment key={item.commentId} className="comment-item" comment={item} tag="hot" beReplied={item.beReplied}/>
                  )
                })
              }
              </div>
            
          ):null
        }
        <div className="all-comments">
          {hotComments.length?<h3 className='all'>最新评论({total})</h3>:null}
          {allComments.map((item,index)=>{
            return (
              <WYSongsComment key={item.commentId} className="comment-item" comment={item} tag="all" beReplied={item.beReplied}/>
            )
          })}
        </div> 
        
        
      </CommentInfo>
      <WYPagination currentPage = {currentPage}
                    total={total}
                    pageSize={20}
                    onPageChange={onPageChange}/>
    </CommentWrapper>
  )
})
