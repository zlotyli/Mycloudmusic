import React, { memo } from 'react'
import { SearchAlbumsWrapper } from './style';
import WYAlbumCover from 'components/album-cover';
export default memo(function WYSearchAlbums(props) {
  const { result } = props;
  return (
    <SearchAlbumsWrapper>
      <div className="album-list">
        {
          result.map((item,index)=>{
            return (
              <WYAlbumCover imgSize={130}
                            allWidth={153}
                            bgp={'-845px'}
                            key={item.id}
                            info={item}
                            newName={true}/>
            )
          })
        }
      </div>
    </SearchAlbumsWrapper>
  )
})
