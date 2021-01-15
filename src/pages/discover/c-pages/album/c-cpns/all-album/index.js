import React, { memo,useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AllAlbumWrapper } from './style';
// 导入actions
import { getAllAlbumsAction } from '../../store/actionCreators';
// 导入公共组件
import WYThemeHeaderCommon from 'components/theme-header-radio';
import WYAlbumCover from 'components/album-cover';
import WYPagination from 'components/pagination';
export default memo(function WYAllAlbum() {
  // state and props
  const [ currentPage, setCurrentPage] = useState(1)
  // redux hooks
  const { allAlbums, allTotal } = useSelector(state => ({
    allAlbums: state.getIn(["album", "allAlbums"]),
    allTotal: state.getIn(["album", "allTotal"])
  }), shallowEqual);
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getAllAlbumsAction(1));
  }, [dispatch])
  // other handle
  const onPageChange = (page,pageSize)=>{
    setCurrentPage(page);
    dispatch(getAllAlbumsAction(page));
  }
  const albums = allAlbums || [];
  const total = allTotal || 0;
  return (
    <AllAlbumWrapper>
      <WYThemeHeaderCommon title='全部新碟'/>
      <div className="album-list">
        {
          albums.map((item,index)=>{
            return (
              <WYAlbumCover imgSize={130}
                            allWidth={153}
                            bgp={'-845px'}
                            key={item.id}
                            info={item}/>
            )
          })
        }
      </div>
      <WYPagination currentPage={currentPage}
                    total={total}
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </AllAlbumWrapper>
  )
})
