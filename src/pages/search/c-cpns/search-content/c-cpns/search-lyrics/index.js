import React, { memo } from 'react'
import { LyricsWrapper } from './style'
// 导入公共组价
import WYSearchSongItem from 'components/search-song-item';
import WYSearchLyricItem from 'components/search-lyric-item'

export default memo(function WYSearchLyrics(props) {
  const {result} = props;
  
  return (
    <LyricsWrapper>
      {
        result.map((song,index)=>{
          return (
            <div className="lyric-item" key={song.id}>
              <WYSearchSongItem song={song}/>
              <WYSearchLyricItem txt={song.lyrics.txt}/>
            </div>
            
          )
        })
      }
    </LyricsWrapper>
  )
})
