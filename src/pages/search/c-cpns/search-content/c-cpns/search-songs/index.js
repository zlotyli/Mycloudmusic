import React, { memo } from 'react';

import {
  SongsWrapper
} from './style'

// 导入公共组价
import WYSearchSongItem from 'components/search-song-item';

export default memo(function WYSearchSongs(props) {
  const { result } = props; 
  return (
    <SongsWrapper>
      {
        result.map((song,index)=>{
          return (
            <WYSearchSongItem song={song} key={song.id}/>
          )
        })
      }
    </SongsWrapper>
  )
})
