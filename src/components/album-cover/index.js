// 新碟上架中的歌曲封面
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import {message} from 'antd';

// 导入样式组件
import { AlbumWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
// 导入播放组件player/store中的异步actions方法
import { addFullAlbumAction } from '@/pages/player/store'


export default memo(function WYAlbumCover(props) {
  // state and props
  const { info,imgSize=130,allWidth=153,bgp="-845px" } = props;
  // redux hooks
  const dispatch = useDispatch();

  const playMusic = (album)=>{
    dispatch(addFullAlbumAction(album.id));
    message.open({
      key:'tips-play-03',//增加标识，使之只存在一个
      content: '已开始播放',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
  }
  return (
    <AlbumWrapper size={imgSize} width={allWidth} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl,imgSize)} alt={info.name}/>
        <a href="/todo" className="cover sprite_covor">{info.name}</a>
        <i className="sprite_icon play" onClick={e=>playMusic(info)}></i>
      </div>
      <div className="album-info">
        <div className={`name ${props.newName?'new-name':''}`}>{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
