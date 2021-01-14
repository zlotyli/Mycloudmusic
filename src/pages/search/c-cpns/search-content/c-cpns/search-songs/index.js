import React, { memo } from 'react';
import { useDispatch } from 'react-redux'
import { message } from 'antd';
import {
  SongsWrapper,
  SongLeft,
  SongRight
} from './style'
// 导入播放中的actions
import {getSongDetailAction,addToPlayListAction} from '@/pages/player/store'
import { formatDate } from '@/utils/format-utils';

export default memo(function WYSearchSongs(props) {
  // state and props
  const {result} = props;
  // redux hook
  const dispatch = useDispatch();
  // other handle
  const playMusic = (id)=>{
    dispatch(getSongDetailAction(id));
    message.open({
      key:'tips-play-04',//增加标识，使之只存在一个
      content: '已开始播放',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
  }
  const addToplaylist = (item) =>{
    console.log(item);
    message.open({
      key:'tips-add-2',//增加标识，使之只存在一个
      content: '已添加到播放列表',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
    dispatch(addToPlayListAction(item));
  } 
  return (
    <SongsWrapper>
      {
        result.map((item,index)=>{
          return (
            <div className="search-songs-item" key={item.id}>
              <SongLeft>
                <div className="func">
                  <button className="btn sprite_table play" onClick={e=>playMusic(item.id)}></button>
                  <div className="song-name text-nowrap">{item.name}</div>
                  <div className="remarks text-nowrap">{`${item.alias.length?('- ('+item.alias[0]+')'):''}`}</div>
                  {(item.mvid !== 0)&&<a href="#/mv" className="mv sprite_table">歌曲mv</a>}
                </div>
                <div className="tools">
                  <button className="btn sprite_icon2 addto" onClick = {e=>addToplaylist(item)}></button>
                  <button className="btn sprite_table favor"></button>
                  <button className="btn sprite_table share"></button>
                  <button className="btn sprite_table download"></button>
                </div>
              </SongLeft>
              <SongRight>
                <div className="artist text-nowrap">{item.artists[0].name}</div>
                <div className="album text-nowrap">{`《${item.album.name}》`}</div>
                <div className="song-time">{formatDate(item.duration,'mm:ss')}</div>
              </SongRight>
            </div>
          )
        })
      }
    </SongsWrapper>
  )
})
