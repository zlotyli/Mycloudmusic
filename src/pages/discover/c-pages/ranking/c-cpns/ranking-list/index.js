import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {SongsListWrapper} from './style';
import { message } from 'antd'
// 导入公共组件
import WYThemeHeaderRanking from 'components/theme-header-ranking'
// 导入工具函数
import {getSizeImage,formatMinuteSecond} from '@/utils/format-utils';
// import {getOtherSongsAction,getSongsListAction} from '../../store/actionCreators' 
// 导入播放组件player/store中的异步actions方法
import {getSongDetailAction} from '@/pages/player/store'
export default memo(function WYRankingList() {
  // state and props
  // redux hook
  const { songsList,otherSongs } = useSelector(state => ({
    songsList: state.getIn(['ranking','songsList']),
    otherSongs:state.getIn(['ranking','otherSongs'])
  }),shallowEqual)
  const dispatch = useDispatch();
  // other hooks
  
  // other handle
  let songslist = [];
  if(songsList.tracks && otherSongs){
    songslist=songsList.tracks.concat(otherSongs);
  }
  // 点击后加入播放
  const handleClick = (item)=>{
    dispatch(getSongDetailAction(item.id));
    message.open({
      key:'tips-play-02',//增加标识，使之只存在一个
      content: '已开始播放',//设置内容
      className:'tips-class',//设置其样式
      duration: 1//设置自动关闭的秒数
    })
  }
  return (
    <SongsListWrapper>
      <WYThemeHeaderRanking trackCount={songsList.trackCount} playCount={songsList.playCount}/>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              songslist.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table" onClick={e=>handleClick(item)}></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </SongsListWrapper>
  )
})
