// 右侧与这首歌相似的歌曲
import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { RelevantWrapper } from './style';
import WYThemeHeaderPlayer from '@/components/theme-header-player';
export default memo(function WYPlayerRelevant() {
  // state and props
  // redux hook
  const { simiSongs } = useSelector((state)=>({
    simiSongs: state.getIn(['player','simiSongs']),//当前播放歌曲的相似歌曲
  }),shallowEqual)
  return (
    <RelevantWrapper>
      <WYThemeHeaderPlayer title='相似歌曲'/>
      <div className="songs">
        {
          simiSongs.map((item,index)=>{
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="/#">{item.name}</a>
                  </div>
                  <div className="artist">
                    <a href="#/">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className='item sprite_icon3 play'></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </RelevantWrapper>
  )
})
