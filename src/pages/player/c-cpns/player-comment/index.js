// 左侧歌曲的评论信息
import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import {
  CommentWrapper,
  CommentTop,
  CommentInfo,
  CommentPagination
} from './style';
import WYThemeHeaderCME from '@/components/theme-header-cme';
import WYSongsComment from '@/components/songs-comment';
import { Pagination } from 'antd';
import {getCommentHotAction} from '../../store/actionCreators'
export default memo(function WYPlayerComment() {
  // 从redux中获取当前播放的歌曲，以及其歌词列表
  const { currentSong,commentHot } = useSelector((state)=>({
    currentSong: state.getIn(['player','currentSong']),
    commentHot:state.getIn(['player','commentHot'])
  }),shallowEqual);
  const dispatch = useDispatch();
  // other handle
  const changePage=(page,pageSize)=>{
    dispatch(getCommentHotAction(currentSong.id,(page-1)*pageSize))
  }

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>上一页</a>;
    }
    if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  }
  return (
    <CommentWrapper>
      <WYThemeHeaderCME title='评论' num={currentSong.dt}/>
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
        <h3 className='hot'>精彩评论</h3>
        {commentHot.map((item,index)=>{
          return (
            <WYSongsComment key={item.commentId} className="comment-item" commentHot={item}/>
          )
        })}
      </CommentInfo>
      <CommentPagination>
        <Pagination defaultCurrent={1} 
                    defaultPageSize={20} 
                    pageSize={20} 
                    total={6000} 
                    showSizeChanger={false} 
                    responsive={true} 
                    showTitle={true}
                    onChange={changePage}
                    itemRender={itemRender}/>
      </CommentPagination>
    </CommentWrapper>
  )
})