import React, { memo,useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {NavLink} from 'react-router-dom'
// 导入公共函数--图片大小格式化、时间格式化
import { getSizeImage, formatDate,getPlaySong} from '@/utils/format-utils';
// 导入store中actionCreators中的actions
import { 
  getSongDetailAction,//异步请求歌曲详情并添加到播放列表相关的actions
  changeSequenceAction,//同步actions--改变播放形式
  cutCurrentSongAction,//异步actions--处理上下曲的切换逻辑
  changeCurrentLyricIndexAction,//同步actions--改变当前播放歌曲中当前歌词在歌词数组的索引
} from '../store/actionCreators'

// 导入antd中的组件
import { Slider,message } from 'antd';
// 导入样式组件
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';
// 导入播放列表组件
import WYAppPlayerList from '../app-player-panel';

export default memo(function WYAppPlayerBar() {
  // 一、state and props
  // 通过state来存储当前播放时间，来设置下方显示的进度
  const [currentTime,setCurrentTime] = useState(0);
  // 通过state来存储播放进度数值，用于设置slider的value
  const [progress,setProgress] = useState(0);
  // 通过state来存储播放进度中的判断--是否正在改变，用于解决slider中value值随音乐增加和手动调进度时的冲突
  const [isChanging, setIsChanging] = useState(false);
  // 通过state来存储当前是否在播放--用于切换播放图标
  const [isPlaying, setIsPlaying] = useState(false);
  // 通过state来存储是否要展示播放列表和歌词的组件---app-player-banner组件
  const [isShowPlayerList,setIsShowPlayerList] = useState(false);


  // 二、redux hooks
  // 得到store中的state.player.currentSong、sequence、lyricList、currentLyricIndex
  const { currentSong,sequence,lyricList,currentLyricIndex,playList } = useSelector(state=>({
    currentSong: state.getIn(['player','currentSong']),//获取当前store中的播放歌曲详情
    sequence: state.getIn(['player','sequence']),//获取当前store中的播放模式
    lyricList: state.getIn(['player','lyricList']),//获取当前播放的歌曲完整歌词
    currentLyricIndex: state.getIn(['player','currentLyricIndex']),//获取当前播放的歌曲中当前演唱歌词在歌词数组中的索引
    playList:state.getIn(['player','playList']),//获取播放列表
  }),shallowEqual);
  const dispatch = useDispatch();
  
  // 三、other hooks
  useEffect(()=>{
    dispatch(getSongDetailAction(167876));//派发异步的actions使store中的player.currentSong有值
  },[dispatch]);
  useEffect(()=>{
    audioRef.current.src = getPlaySong(currentSong.id);//请求到播放流数据--并在改变当前歌曲时更新;
    audioRef.current.play().then(res=>{//刚开始请求页面后play()是失败的，后面请求页面后才会成功--谷歌自带机制
      setIsPlaying(true);
    }).catch(error=>{
      setIsPlaying(false);
    })
  },[currentSong])

  // 定义audio的ref，方便取用
  const audioRef = useRef();

  // 四、other handle
  // 当前播放歌曲的图片url、歌手名、歌曲总时长、歌曲总歌词
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const duration = currentSong.dt || 0;//获取总时长

  const showDuration = formatDate(duration,'mm:ss');//格式化歌曲总时间
  const showCurrentTime = formatDate(currentTime,'mm:ss');//格式化歌曲当前播放时间
  // const progress = currentTime / duration * 100; //计算出当前进度值--用于对进度条的展示

  // 五、handle function
  // 点击播放的响应函数
  const playMusic = useCallback(() =>{
    isPlaying? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  },[isPlaying])
  // 当监听到播放的回调函数
  const timeUpdate=(e)=>{
    const audioCurrentTime = e.target.currentTime * 1000;//e.target.currentTime是audio提供的获取到歌曲的播放进度时间
    if(!isChanging){//当前并不是手动改变时，使用自动
      setCurrentTime(audioCurrentTime);//将当前播放的时间转换为毫秒存储到本组件的state中。
      setProgress(currentTime / duration * 100);//将当前播放的歌曲时间同步到state中的progress中用作slider展示
    }

    // 获取当前的正在演唱的歌词
    let i = 0;//用i-1 来表示当前播放歌曲当前歌词在总歌词中的索引值
    for(; i < lyricList.length; i++){
      let lyricItem = lyricList[i];
      if(audioCurrentTime < lyricItem.time){
        break;//匹配到后跳出循环
      }
    }
    if(i-1 !== currentLyricIndex){//当不同时才派发--性能优化
      dispatch(changeCurrentLyricIndexAction(i-1));//派发actions改变当前正在播放歌曲的当前歌词的索引值
      const content = lyricList[i-1] && lyricList[i-1].content;
      message.open({
        key:'lyric',//增加标识，使之只存在一个
        content: content,//设置内容
        duration: 0,//关闭自动关闭;
        className:'lyric-class',//设置其样式
      })

    }
    
  }
  // 当监听到播放结束的回调函数
  const handleMusicEnded = (e)=>{
    if(sequence === 2){//单曲播放
      audioRef.current.currentTime = 0;//将歌曲时间归零
      audioRef.current.play();//继续播放
    }else{//随机或者顺序播放时--直接调用向下切歌acitons
      dispatch(cutCurrentSongAction(1))
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
  },[duration,isPlaying,playMusic])


  // 当点击循环时--改变store中的播放行为
  const changeSequence = ()=>{
    let currentSequence = sequence + 1;
    if(currentSequence>2){
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence));//派发了改变播放行为的同步actions
  }

  // 当点击上一首或下一首时
  const changeMusic = (tag) => {
    dispatch(cutCurrentSongAction(tag));//派发上下去切歌操作的异步actions
  }

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" 
                  onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" 
                  onClick={e => playMusic()}></button>
          <button className="sprite_player next" 
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl,35)} alt="myimage"/>
              <i href="/todo" className="littlecover sprite_player">songs</i>
            </NavLink>
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
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist" onClick={e=> setIsShowPlayerList(!isShowPlayerList)}>{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio  ref={audioRef} 
              onTimeUpdate={e=>timeUpdate(e)}
              onEnded={e => handleMusicEnded(e)}/>
      {isShowPlayerList && <WYAppPlayerList/>}
    </PlaybarWrapper>
  )
})
