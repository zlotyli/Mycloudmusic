import React, { memo,useEffect,useState } from 'react'
import {shallowEqual, useSelector,useDispatch } from 'react-redux';
import {ContentWrapper} from './style'
// 导入公共组件
import WYPagination from "components/pagination";
// 导入子组件
import WYSearchTabs from './c-cpns/search-tabs';
import WYSearchSongs from './c-cpns/search-songs';
import WYSearchArtists from './c-cpns/search-artists';
import WYSearchAlbums from './c-cpns/search-albums';
import WYSearchVideos from './c-cpns/search-videos'
// 导入action
import { getSearchResultAction } from '../../store/actionCreators'
export default memo(function WYSearchContent() {
  // state and props
  const [currentPage,setCurrentPage] = useState(1)
  // redux hook
  const { keywords,results,pageSize } = useSelector((state)=>({
    keywords: state.getIn(['search','keywords']),//获取当前的关键字
    results: state.getIn(['search','results']),//获取当前搜索的结果
    pageSize: state.getIn(['search','pageSize']),//获取当前类型页每页显示的数量
  }),shallowEqual);
  const dispatch = useDispatch();
  // other hook
  useEffect(()=>{
    setCurrentPage(1)
  },[keywords]);
  // other handle
  const onPageChange = (page,pageSize)=>{
    setCurrentPage(page);
    dispatch(getSearchResultAction(keywords,results.type,pageSize,(page-1)*pageSize));
  }
  const renderChild = (results)=>{
    switch(results.name){
      case 'songs':
        return <WYSearchSongs result={results.result}/>
      case 'artists':
        return <WYSearchArtists result={results.result}/>
      case 'albums':
        return <WYSearchAlbums result = {results.result}/>
      case 'videos':
        return <WYSearchVideos result = {results.result}/>
      default :
        return null;
    }
  }
  return (
    <ContentWrapper>
      <WYSearchTabs/>
      {renderChild(results)}
      {results.total>pageSize&&
        <WYPagination currentPage = {currentPage}
                      total={results.total}
                      pageSize={pageSize}
                      onPageChange={onPageChange}/>
      }

    </ContentWrapper>
  )
})
