import React, { memo } from 'react';
import { useSelector,shallowEqual} from 'react-redux'
import { ArtistListWrapper } from './style';
// 导入公共组件
import WYThemeHeaderCommon from 'components/theme-header-radio';
// 导入子组件
import WYArtistAlphaList from './c-cpns/artist-alpha-list';
import WYArtistItem from './c-cpns/artist-item';
export default memo(function WYArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),//获取当前歌手的类别以及类别id
    artistList: state.getIn(["artist", "artistList"])//获取歌手列表
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <WYThemeHeaderCommon title={currentType.name==='推荐歌手'?'热门歌手':currentType.name}/>
      <WYArtistAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <WYArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
