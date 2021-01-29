import React, { memo } from 'react';
import {shallowEqual, useDispatch, useSelector } from 'react-redux';

import { message } from 'antd';
import { 
  SingerSongsWrapper,
  SingerSongsItem,
} from './style'

import { formatDate } from '@/utils/format-utils';
import {getSongDetailAction,addToPlayListAction} from '@/pages/player/store'

export default memo(function WYSingerHotSongs() {
  const { hotSongs } = useSelector((state)=>({
    hotSongs: state.getIn(['singer','hotSongs'])
  }),shallowEqual);
  const dispatch = useDispatch();
  // other handle
  const songs = hotSongs || [];
  const playMusic = (id)=>{
    dispatch(getSongDetailAction(id));
    message.open({
      key:'tips-play-05',//增加标识，使之只存在一个
      content: '已开始播放',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
  }
  const addToplaylist = (item) =>{
    message.open({
      key:'tips-add-3',//增加标识，使之只存在一个
      content: '已添加到播放列表',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
    dispatch(addToPlayListAction(item));
  } 
  return (
    <SingerSongsWrapper>
      <div className="operation">
        <div className="left">
          <div className="play sprite_button">
            <div className="play-inside sprite_button">
              <i className="icon sprite_button"></i>
              <span>播放</span>
            </div>
          </div>
          <div className="addto sprite_button"></div>
          <div className="collection sprite_button"><span className="sprite_button">收藏热门50</span></div>
        </div>
        <div className="right sprite_button">
          <div className="right-inside sprite_button">
            <span className="txt">热门单曲</span>
            <i className="icon_3"></i>
          </div>
        </div>
      </div>
      <div className="songs">
        {
          songs.map((song,index)=>{
            return (
              <SingerSongsItem key={song.id}>
                <div className="songs-left">
                  <div className="show-index">
                    <div className="index-num">{index+1}</div>
                    <button className="btn sprite_table play" onClick={e=>playMusic(song.id)}></button>
                  </div>
                  <div className="show-song-name">
                    <div className="song-name">{song.name}</div>
                    {(song.alia.length||song.tns)&&<div className="song-info text-nowrap">
                      {`${song.alia.length?('- ('+song.alia[0]+')'):''}`}
                      {`${song.tns?('- ('+song.tns[0]+')'):''}`}
                    </div>}
                    {(song.mv !==0 )&&<a href="#/mv" className="song-mv sprite_table">歌曲mv</a>} 
                  </div>
                </div>
                <div className="songs-right">
                  <div className="duration">{formatDate(song.dt,'mm:ss')}</div>
                  <div className="tools">
                    <button className="btn sprite_icon2 add" onClick = {e=>addToplaylist(song)}></button>
                    <button className="btn sprite_table favor"></button>
                    <button className="btn sprite_table share"></button>
                    <button className="btn sprite_table download"></button>
                  </div>
                  <div className="song-album text-nowrap">{song.al.name}</div>
                </div>
              </SingerSongsItem>
            )
          })
        }
      </div>
    </SingerSongsWrapper>
  )
})
