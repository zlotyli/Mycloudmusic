import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import {SongsListWrapper} from './style';

// 导入公共组件
import WYThemeHeaderRanking from 'components/theme-header-ranking'
// 导入工具函数
import {getSizeImage,formatMinuteSecond} from '@/utils/format-utils';
// import {getOtherSongsAction,getSongsListAction} from '../../store/actionCreators' 
export default memo(function WYRankingList() {
  // state and props
  // redux hook
  const { songsList,otherSongs } = useSelector(state => ({
    songsList: state.getIn(['ranking','songsList']),
    otherSongs:state.getIn(['ranking','otherSongs'])
  }),shallowEqual)
  // other hooks
  
  // other handle
  let songslist = [];
  if(songsList.tracks && otherSongs){
    songslist=songsList.tracks.concat(otherSongs);
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
                        <span className="play sprite_table"></span>
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
