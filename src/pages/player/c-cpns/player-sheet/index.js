// 右侧包含这首歌的歌单
import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

// 导入公共组件中的右侧主题头
import WYThemeHeaderPlayer from 'components/theme-header-player';
// 导入样式组件
import { PlayerSheetWrapper } from './style';
// 导入公共的处理函数
import { getSizeImage } from '@/utils/format-utils';
export default memo(function WYPlayerSheet() {
  // state and props
  // redux hook
  // 从redux中取出包含当前歌曲的歌单信息
  const { simiPlayList } = useSelector((state)=>({
    simiPlayList : state.getIn(['player','simiPlayList'])
  }),shallowEqual)
  return (
    <PlayerSheetWrapper>
      <WYThemeHeaderPlayer title='包含这首歌的歌单'/>
      <div className='sheets'>
        {
          simiPlayList.map((item,index)=>{
            return (
              <div className="sheet-item" key={item.id}>
                <a href="/#" className="image">
                  <img src={ getSizeImage(item.coverImgUrl,50) } alt=""/>
                </a>
                <div className="info text-nowrap">
                  <a href="#/" className='name'>
                    {item.name}
                  </a>
                  <div className="auchor">
                    by <a href="#/" className='nickname'>{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSheetWrapper>
  )
})
