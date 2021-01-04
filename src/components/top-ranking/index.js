import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import {message} from 'antd';
// 导入修改图片大小函数
import { getSizeImage } from '@/utils/format-utils'
// 导入样式组件
import {
  TopRankingWrapper
} from './style';

// 导入播放组件player/store中的异步actions方法
import {getSongDetailAction,addToPlayListAction} from '@/pages/player/store'

export default memo(function WYTopRanking(props) {
  // props and state
  const { info } = props;
  const tracks = info.tracks || [];

  // redux hook
  const dispatch = useDispatch();

  // handle function
  // 处理播放
  const playMusic = (item)=>{//item.id即为歌曲的id，通过调用播放组件中的异步actions-getDetailAction方法
    dispatch(getSongDetailAction(item.id));
    message.open({
      key:'tips-play-01',//增加标识，使之只存在一个
      content: '已开始播放',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
  }
  const addToplaylist = (item)=>{
    message.open({
      key:'tips-add',//增加标识，使之只存在一个
      content: '已添加到播放列表',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
    dispatch(addToPlayListAction(item));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image ">
          <img src={getSizeImage(info.coverImgUrl)} alt=""/>
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0,10).map((item,index)=>{
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e=>playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto" onClick = {e=>addToplaylist(item)}></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
