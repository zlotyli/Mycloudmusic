import React, { memo } from 'react'
import { useSelector,shallowEqual,useDispatch} from 'react-redux'
import { CategoryWrapper,CategoryItem } from './style';
// 导入分类栏中的数据
import { artistCategories } from '@/common/local-data.js';
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/actionCreators'
export default memo(function WYArtistCategory() {
  const {currentArea,currentType} = useSelector(state => ({
    currentArea: state.getIn(['artist','currentArea']),//获取当前的地区id
    currentType: state.getIn(['artist','currentType']),//获取当前的歌手类型
  }),shallowEqual)
  const dispatch = useDispatch();

  // other handle
  // 当点击时改变state中存储的当前地区以及当前歌手类别id
  const selectArtist = (area,type)=>{
    dispatch(changeCurrentAreaAction(area));//改变地区id
    dispatch(changeCurrentTypeAction(type));//改变地区下额歌手类型名以及歌手类型id(type)
  }
  // render jsx
  const renderArtist = (artist,area)=>{
    return (
      <div>
        {
          artist.map((item,index)=>{
            // 当地区id匹配并且歌手类别id(type)匹配时处于选中状态
            const isSelect = currentArea === area && currentType.type === item.type;
            return (
              <CategoryItem key={item.name} 
                            className={isSelect?'active':''}>
                <span onClick={e=>selectArtist(area,item)}>{item.name}</span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }
  return (
    <CategoryWrapper>
      {
        artistCategories.map((item,index)=>{
          return (
            <div className="section" key={item.area}>
              <h2 className='title'>{item.title}</h2>
              {renderArtist(item.artists,item.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
