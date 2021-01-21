import React, { memo,useState } from 'react'
import { LyricItemWrapper } from './style';
// 导入解析歌词的函数
import { parseLyricNoTime } from '@/utils/parse-lyric';
export default memo(function WYSearchLyricItem(props) {
  const {txt} = props;
  const lyrics = parseLyricNoTime(txt);
  // 用isSpread来表示是否要展开该歌词--默认不展开
  const [isSpread,setIsSpread] = useState(false);
  // 声明一变量来代表要展示的歌词行数
  const totalLyricCount = isSpread ? lyrics.length : 4;
  return (
    <LyricItemWrapper isSpread={isSpread}>
      <div className="lyric-info">
        {
          lyrics.slice(0,totalLyricCount).map((lyric,index)=>{
            return (
              <p key={index} className="text">{lyric}</p>
            )
          })
        }
      </div>
      
      <button className="lyric-control"
              onClick={e => setIsSpread(!isSpread)}>
        {isSpread ? "收起": "展开"}
        <i className="sprite_icon2"></i>
      </button>
    </LyricItemWrapper>
  )
})
