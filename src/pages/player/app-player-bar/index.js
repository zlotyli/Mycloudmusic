import React, { memo,useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 导入公共函数--图片大小格式化、时间格式化
import { getSizeImage, formatDate,getPlaySong} from '@/utils/format-utils';
// 导入store中actionCreators中的异步actions
import { getSongDetailAction } from '../store/actionCreators'

// 导入antd中的组件
import { Slider } from 'antd';
// 导入样式组件
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function WYAppPlayerBar() {
  // state and props
  // 通过state来存储当前播放时间，来设置下方显示的进度
  const [currentTime,setCurrentTime] = useState(0);
  // 通过state来存储播放进度数值，用于设置slider的value
  const [progress,setProgress] = useState(0);
  // 通过state来存储播放进度中的判断--是否正在改变，用于解决slider中value值随音乐增加和手动调进度时的冲突
  const [isChanging, setIsChanging] = useState(false);
  // 通过state来存储当前是否在播放--用于切换播放图标
  const [isPlaying, setIsPlaying] = useState(false);


  // redux hooks
  // 得到store中的state.player.currentSong
  const { currentSong } = useSelector(state=>({
    currentSong: state.getIn(['player','currentSong'])
  }),shallowEqual);
  const dispatch  = useDispatch();
  
  // other hooks
  useEffect(()=>{
    dispatch(getSongDetailAction(167876));//派发异步的actions使store中的player.currentSong有值
  },[dispatch]);
  useEffect(()=>{
    audioRef.current.src = getPlaySong(currentSong.id);//请求到播放流数据--并在改变当前歌曲时更新
  },[currentSong])

  // 定义audio的ref，方便取用
  const audioRef = useRef();

  // other handle
  // 当前播放歌曲的图片url、歌手名、歌曲总时长
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const duration = currentSong.dt || 0;//获取总时长

  const showDuration = formatDate(duration,'mm:ss');//格式化歌曲总时间
  const showCurrentTime = formatDate(currentTime,'mm:ss');//格式化歌曲当前播放时间
  // const progress = currentTime / duration * 100; //计算出当前进度值--用于对进度条的展示

  // handle function
  // 点击播放的响应函数
  const playMusic = () =>{
    isPlaying? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }
  // 当监听到播放的回调函数
  const timeUpdate=(e)=>{
    if(!isChanging){//当前并不是出入手动改变时，使用自动
      setCurrentTime(e.target.currentTime * 1000);//将当前播放的时间转换为毫秒存储到本组件的state中。
      setProgress(currentTime / duration * 100);//将当前播放的歌曲时间同步到state中的progress中用作slider展示
    }
  }

  // slider组件中滑动时的监听的回调函数--对应onChange监听事件
  const sliderChange = useCallback((value)=>{// 该value为slider中value
    // 手动调试正在开始时将isChanging设置为true
    setIsChanging(true);  

    // 移动过程中设置当前播放时间的展示
    const currentTime = value/100 * duration / 1000;
    setCurrentTime(currentTime * 1000);

    setProgress(value)
  },[duration])
  // slider组件滑动结束或点击后的监听的回调函数--对应AfterChange监听事件
  const sliderAfterChange = useCallback((value)=>{ //该value为slider中value
    // 设置播放流的进度到手动value值所对应的时间
    const currentTime = value/100 * duration / 1000;
    audioRef.current.currentTime = currentTime;

    setCurrentTime(currentTime * 1000);//将当前播放的时间转换为毫秒存储到本组件的state中。--避免跳动延迟

    // 手动调试进入结束时，将isChanging设置为false
    setIsChanging(false);

    // 滑动后继续播放
    if(!isPlaying){
      playMusic();
    }
  },[duration,isPlaying])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl,35)} alt="myimage"/>
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} 
                      tipFormatter={null} 
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
    </PlaybarWrapper>
  )
})
