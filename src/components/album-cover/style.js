import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${props => props.width + 'px'};
    height: ${props => props.size + 'px'};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${props => props.size + 'px'};
      height: ${props => props.size + 'px'};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
    .play{
      display:none;
      position: absolute;
      bottom: 5px;
      right: 25px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
    }
    &:hover .play{
      display: block;
    }
  }

  .album-info {
    font-size: 12px;
    /* 固定下图片下文字的长度以便长度长时用...来 */
    width: ${props => props.size + 'px'};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .new-name{
      font-size:14px;
      margin: 8px 0 3px 0;
    }
    .artist {
      color: #666;
      cursor:pointer;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`