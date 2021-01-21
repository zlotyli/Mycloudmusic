import React, { memo } from 'react'
import { SearchVideosWrapper } from './style';
import WYVideoCover from 'components/video-cover'
export default memo(function WYSearchVideos(props) {
  const {result} = props;
  return (
    <SearchVideosWrapper>
      <div className="videos-list">
        {
          result.map((item,index)=>{
            return (
              <WYVideoCover imgXsize={159}
                            imgYsize={90}
                            info={item}
                            key={item.title}/>
            )
          })
        }
      </div>
    </SearchVideosWrapper>
  )
})
