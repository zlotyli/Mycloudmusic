// 入住歌手
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual} from 'react-redux';

// 导入样式组件
import { SetterSongerWrapper } from './style'
// 导入公共主题头小组件
import WYThemeHeaderSmall from 'components/theme-header-small'
// 导入异步actions
import { getSettleSingers } from "../../store/actionCreators"

// 导入公共处理函数
import { getSizeImage } from '@/utils/format-utils'
export default memo(function WYSettleSongs() {



  // redux hooks
  const dispatch = useDispatch();
  const { settleSings=[] } = useSelector((state)=>({
    settleSings: state.getIn(['recommend','settleSings'])
  }),shallowEqual)

  // other hooks
  useEffect(()=>{
    dispatch(getSettleSingers());
  },[dispatch])
  return (
    <SetterSongerWrapper>
      <WYThemeHeaderSmall title='入驻歌手' more='查看全部'/>
      <div className="singer-list">
        {
          settleSings.map((item,index)=>{
            return (
              <a href="/todo" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url,62)} alt=""/>
                <div className="info">
                  <div className="title">{item.alias.join("")||item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc" className="sprite_button">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
