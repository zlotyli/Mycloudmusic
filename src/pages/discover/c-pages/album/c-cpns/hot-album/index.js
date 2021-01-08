import React, { memo,useEffect } from 'react'
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import { HotAlbumWrapper } from './style'
// 导入公共组件
import WYThemeHeaderRadio from 'components/theme-header-radio';
import WYAlbumCover from 'components/album-cover';
// 导入actions
import { getHotAlbumsAction } from '../../store/actionCreators'
export default memo(function WYHotAlbum() {
  // redux hook
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);
  return (
    <HotAlbumWrapper>
      <WYThemeHeaderRadio title='热门新碟'/>
      <div className="album-list">
        {
          hotAlbums.slice(0,10).map((item,index) => {
            return (
              <WYAlbumCover size={130}
                            width={153}
                            bgp={'-845px'}
                            key={item.id}
                            info={item}
                            newName={true}/>
            )
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
