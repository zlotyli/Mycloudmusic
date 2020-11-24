import React, { memo } from 'react';
//导入推荐页的style样式
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

// 导入子组件部分
// 导入轮播图组件
import WYTopBanner from './c-cpns/top-banner';
// 导入热门推荐组件
import WYHotRecommend from './c-cpns/hot-recommend';
// 导入新碟上架组件
import WYNewAlbum from './c-cpns/new-album';
// 导入榜单组件
import WYRecommendRanking from './c-cpns/recommend-ranking';
function WYRecommend(props) {

  
  return (
    <RecommendWrapper>
      <WYTopBanner /> 
      <Content className="wrap-v2">
        <RecommendLeft>
          <WYHotRecommend />
          <WYNewAlbum/>
          <WYRecommendRanking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default (memo(WYRecommend))


//使用connect时为下方。以通过hooks改进，在top-banner的index.js中
// function WYRecommend(props) {
//   // 发起网路请求
//   const {getBanners,topBanners}  = props;//取出获取轮播图数据的方法和轮播图数据
//   useEffect(() => {
//     getBanners()//执行获取到的数据并存储到state中
    
//   }, [getBanners])

//   return (
//     <div>
//       <h2>WYRecommend</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners//获取到store中的state中的轮播图数据
// });
// const mapDispatchToProps = dispatch =>({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(WYRecommend))