import React, { memo } from 'react'
import { CommentWrapper } from './style'
import { getCount,formatMonthDay } from '@/utils/format-utils'
export default memo(function WYSongsComment(props) {
  const {user,content,likedCount,time} = props.commentHot;
  
  return (
    <CommentWrapper>
      <div className="head">
        <a href="todo">
          <img src={user.avatarUrl} alt=""/>
        </a>
      </div>
      <div className="contentTxt">
        <div className="text">
          <a href="todo">{user.nickname}</a>
          {user.avatarDetail?<img src={user.avatarDetail.identityIconUrl} alt="" className='cloud'/>:null}
          {user.vipRights?<img src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923065/dc4e/2b9c/7677/20a6644c6e3a093d7accce919ae7b169.png" alt="" className='vip'/>:null}
          ：{content}
        </div>
        <div className="other">
          <div className="time">{formatMonthDay(time)}</div>
          <div href="todo" className="star">
            <i className="icon sprite_icon3"></i> ({getCount(likedCount)})
            <span className="seq">|</span>
            <a href="todo">回复</a>
          </div>
        </div>
      </div>
    </CommentWrapper>
  )
})
