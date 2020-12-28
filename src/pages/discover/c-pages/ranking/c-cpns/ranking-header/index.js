import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import { useSelector,shallowEqual } from 'react-redux';
// 导入公共组件
import WYSongOperationBar from 'components/song-operation-bar';
// 导入工具函数
import { formatMonthDay } from '@/utils/format-utils'
export default memo(function WYRankingHeader() {
  // state and props
  // redux hook
  const {songsList} = useSelector((state)=>({
    songsList:state.getIn(['ranking','songsList']),//导入当前类别榜单的歌曲列表
  }),shallowEqual);
  const songslist = songsList || []; 
  return (
    <HeaderWrapper>
      <div className="image">
        <img src={songslist.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{songslist.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(songslist.updateTime)}</div>
          <div className="update-f">（{"每日更新"}）</div>
        </div>
        <WYSongOperationBar favorTitle={`(${songslist.subscribedCount})`}
                            shareTitle={`(${songslist.shareCount})`}
                            downloadTitle="下载"
                            commentTitle={`(${songslist.commentCount})`}/>
      </div>
    </HeaderWrapper>
  )
})
