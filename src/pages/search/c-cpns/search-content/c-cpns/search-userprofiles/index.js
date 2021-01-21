import React, { memo } from 'react'
import {
  UserWrapper,
  UserItem
} from  './style';
import { getSizeImage } from '@/utils/format-utils'

export default memo(function WYSearchUserprofiles(props) {
  const {result} = props;
  return (
    <UserWrapper>
      {
        result.map((user,index)=>{
          return (
            <UserItem key={user.userId} gender={user.gender}>
              <div className="info">
                <div className="img">
                  <img src={getSizeImage(user.avatarUrl,180)} alt={user.nickname}/>
                  <a href="/todo" className="cover image_cover">用户图片</a>
                </div>
                <div className="message">
                  <div className="user">
                    <span className="name">{user.nickname}</span>
                    {user.description&&<i className="des sprite_icon2"></i>}
                    {(user.gender!==0)&&<i className='gender sprite_icon2'></i>}
                  </div>
                  {user.signature&&<div className="signature text-nowrap">{user.signature}</div>}
                </div>
              </div>
              <div className="other">
                <div className="follow sprite_button2"><span>关注</span></div>
                <div className="playlist">歌单：5<span className="playlist-num"></span></div>
                <div className="fans text-nowrap">粉丝：2021</div>
              </div>
            </UserItem>
          )
        })
      }
    </UserWrapper>
  )
})
