import React, { memo } from 'react';
import { useDispatch } from 'react-redux'
import { message } from 'antd';
import {
  SongsItemWrapper,
  SongItemLeft,
  SongItemRight
} from './style'
// 导入播放中的actions
import {getSongDetailAction,addToPlayListAction} from '@/pages/player/store'
import { formatDate } from '@/utils/format-utils';

export default memo(function WYSearchSongItem(props) {
  // state and props
  const {song} = props;
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
    message.open({
      key:'tips-add-2',//增加标识，使之只存在一个
      content: '已添加到播放列表',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
    dispatch(addToPlayListAction(item));
  } 
  return (
    
    <SongsItemWrapper>
      <SongItemLeft>
        <div className="func">
          <button className="btn sprite_table play" onClick={e=>playMusic(song.id)}></button>
          <div className="song-name text-nowrap">{song.name}</div>
          <div className="remarks text-nowrap">{`${song.alias.length?('- ('+song.alias[0]+')'):''}`}</div>
          {(song.mvid !== 0)&&<a href="#/mv" className="mv sprite_table">歌曲mv</a>}
        </div>
        <div className="tools">
          <button className="btn sprite_icon2 addto" onClick = {e=>addToplaylist(song)}></button>
          <button className="btn sprite_table favor"></button>
          <button className="btn sprite_table share"></button>
          <button className="btn sprite_table download"></button>
        </div>
      </SongItemLeft>
      <SongItemRight>
        <div className="artist text-nowrap">
          {
            song.artists.map((iten,indey)=>{
              return (
                <div className="artist-item" key={iten.id}>
                  <span>{iten.name}</span>
                  <span className="divider">/</span>
                </div>
              )
            })
          }
        </div>
        <div className="album text-nowrap">{`《${song.album.name}》`}</div>
        <div className="song-time">{formatDate(song.duration,'mm:ss')}</div>
      </SongItemRight>
    </SongsItemWrapper>
  )
})
