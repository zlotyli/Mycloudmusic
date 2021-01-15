// 推荐页的新碟上架部分
import React, { memo, useEffect, useRef } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// 导入antd中走马灯组件
import { Carousel } from 'antd';
// 导入reducer中的actionCreator方法
import { getNewAlbumAction } from '../../store/actionCreators'
// 导入样式组件
import { AlbumWrapper } from './style'

// 引入公共组件
//主题头
import WYThemeHeaderRCM from 'components/theme-header-rcm';
// 新碟上架部分封面组件
import WYAlbumCover from 'components/album-cover';

export default memo(function WYNewAlbum() {
  //内部state
  
  //redux的hooks--主要是派发actions以及获取到state中的数据
  const { newAlbums } = useSelector((state)=>({
    newAlbums: state.getIn(['recommend','newAlbums'])
  }),shallowEqual)
  const dispatch = useDispatch();

  //其他hooks 
  useEffect(()=>{
    dispatch(getNewAlbumAction(10))
  },[dispatch])

  // 绑定走马灯组件
  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <WYThemeHeaderRCM title="新碟上架"/>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e=>{pageRef.current.prev()}}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map(item=>{
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5,(item+1)*5).map(iten => {
                        return (
                          <WYAlbumCover 
                              key={iten.id} 
                              info={iten} 
                              imgSize={100} 
                              allWidth={118}
                              bgp="-570px"/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e=>{pageRef.current.next()}}></button>
      </div>
    </AlbumWrapper>
  )
})
