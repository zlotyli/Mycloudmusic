// 左侧歌曲以及歌词相关信息
import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
// 导入样式组件
import {
  InfoWrapper,
  InfoLeft,
  InfoRight
} from './style'
// 引入公共组件--音乐操作栏
import WYSongOperationBar from 'components/song-operation-bar';
// 导入功能函数
import { getSizeImage } from '@/utils/format-utils'

export default memo(function WYPlayerInfo() {
  // state and props
  // 用isSpread来表示是否要展开该歌词--默认不展开
  const [isSpread,setIsSpread] = useState(false);
  // redux hook
  // 从redux中获取当前播放的歌曲，以及其歌词列表
  const { currentSong,lyricList } = useSelector((state)=>({
    currentSong: state.getIn(['player','currentSong']),
    lyricList: state.getIn(['player','lyricList'])//获取当前播放的歌曲完整歌词
  }),shallowEqual);


  // other hook

  // other handle;
  const lyriclist = lyricList || [];
  // 声明一变量来代表要展示的歌词行数
  const totalLyricCount = isSpread ? lyriclist.length : 13;

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al&&currentSong.al.picUrl,130)} alt="songsCover"/>
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手: </span>
          <a href="#/" className="name">{currentSong.ar&&currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑: </span>
          <a href="/#" className="name">{currentSong.al&&currentSong.al.name}</a>
        </div>
        <WYSongOperationBar favorTitle='收藏'
                            shareTitle='分享'
                            downloadTitle='下载'
                            commentTitle={currentSong.dt}/>
        <div className="lyric">
          <div className="lyric-info">
            {
              lyriclist.slice(0,totalLyricCount).map((item, index) => {
                return <p key={`${item.time+'-'+index}`} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
