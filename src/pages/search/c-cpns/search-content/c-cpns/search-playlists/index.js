import React, { memo } from 'react'
import { 
  PlaylistsWrapper,
  PlaylistItemleft,
  PlaylistItemRight
} from './style'
import { getmCount,getSizeImage } from '@/utils/format-utils'
export default memo(function WYSearchPlaylists( props ) {
  const { result } =  props;
  return (
    <PlaylistsWrapper>
      {
        result.map((playlist,index)=>{
          return (
            <div className="playlists-item" key={playlist.id}>
              <PlaylistItemleft>
                <div className="info">
                  <button className="btn sprite_table play"></button>
                  <div className="img">
                    <img src={getSizeImage(playlist.coverImgUrl,180)} alt={playlist.name}/>
                    <a href="/todo" className="cover image_cover">歌单图片</a>
                  </div>
                  <span className="list-name">{playlist.name}</span>
                </div>
                <div className="tools">
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_table favor"></button>
                  <button className="btn sprite_table share"></button>
                </div>
              </PlaylistItemleft>
              <PlaylistItemRight>
                <div className="left">
                  <span className="songs-num">{playlist.trackCount}首</span>
                  <div className="origin text-nowrap">
                    by&nbsp;
                    <span className="cname">{playlist.creator.nickname}</span>
                  </div>
                </div>
                <div className="right">
                  <div className="favor">
                    收藏：
                    <span className="f-num">{getmCount(playlist.bookCount)}</span>
                  </div>
                  <div className="listen">
                    收听：
                    <span className="l-num">{getmCount(playlist.playCount)}</span>
                  </div>
                </div>
              </PlaylistItemRight>
            </div>
          )
        })
      }
    </PlaylistsWrapper>
  )
})
