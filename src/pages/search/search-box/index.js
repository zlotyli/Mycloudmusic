import React, { memo } from 'react';
import { useSelector,shallowEqual, useDispatch} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
  SearchBoxWrapper,
  SearchBoxItem
} from './style'
//导入工具函数
import { nameChange } from '@/utils/search-utils';
// 导入歌曲详情的异步actions，用于点击单曲后的转跳
import { getSongDetailAction } from '@/pages/player/store'
const WYSearchBox = (props) => {
  // state and props
  const {value,inputToBlur}  = props
  // redux hooks
  const { suggests }  = useSelector((state)=>({
    suggests: state.getIn(['search','suggests']),//导入关键字返回的信息
  }),shallowEqual);
  const dispatch = useDispatch()
  const nameArr = (suggests&&suggests.order) || [];
  //other handle
  const handleClick = (e,type,id)=>{
    if ( e && e.preventDefault ){
      e.preventDefault();
    }
    // 当点击单曲时跳到歌曲详情页
    if(type === 'songs' ){
      // 请求到该歌曲的数据
      dispatch(getSongDetailAction(id));
      // 跳转该路由
      props.history.replace('/discover/player');
      inputToBlur();//触发Input失焦来关闭该组件

    }
  }
  return (
    <SearchBoxWrapper>
      <div className="tags">
        <a href="/to">{`搜“${value}”相关用户`}</a>&gt;
      </div>
      <SearchBoxItem >
        <div className="info">
          {
            nameArr.map((item,index)=>{
              return (
                <div className="info-item" key={item}>
                  <div className="head">
                    <i className={`sprite_icon2 icon ${item}`}></i>
                    <span>{nameChange(item)}</span>
                  </div>
                  <div className="substance">
                    {
                      suggests[item].map((contents,index)=>{
                          return <div className="news text-nowrap" key={contents.id} onMouseDown={e=>handleClick(e,item,contents.id)}>{contents.name}</div>
                      }) 
                      
                    }
                  </div>
                </div>
              )
            })
          }
         
        </div>
      </SearchBoxItem> 
    </SearchBoxWrapper>
  )
}
export default withRouter(memo(WYSearchBox))
