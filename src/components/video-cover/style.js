import styled from 'styled-components';

export const VideoWrapper = styled.div`
  margin: 20px 0;
  .video-image {
    position: relative;
    width: ${props=>props.xsize+'px'};
    overflow: hidden;
    

    img {
      width: ${props => props.xsize + 'px'};
      height: ${props => props.ysize + 'px'};
    }

    .viewers{
      position : absolute;
      top:0;
      right:0;
      display:flex;
      align-items:center;
      background-color: rgba(0, 0, 0, .3);
      .play{
        width: 15px;
        height: 10px;
        background-position: -60px -310px;
      }
      span{
        margin-left: 3px;
        color: #fff;
        font-size:12px;
      }
    }
    .duration{
      position:absolute;
      left:6px;
      bottom: 0;
      color: #fff;

      text-shadow: -2px 1px rgba(0,0,0,.4);
    }
    
  }

  .video-info {
    
    /* 固定下图片下文字的长度以便长度长时用...来 */
    width: ${props=>props.xsize+'px'};

    .title {
      color: #000;
      margin: 7px 0 1px;
      display:flex;
      align-items:center;
      .mv-icon{
        width: 26px;
        height: 16px;
        margin-right: 3px;
        margin-top:-2px;
        background-position: -270px -480px;

      }
      .title-name{
        flex:1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
      }
    }
    
    .artist {
      font-size: 12px;
      color: #666;
      display:flex;
      .artist-item{
        .divider{
          display:inline-block;
          padding: 0 4px;
        }
      }
      .artist-item:last-child{
        .divider{
          display:none;
        }
      }
    }
  }
`