import styled from 'styled-components';
import playListSprite from '@/assets/img/playlist_sprite.png';

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;

    cursor: pointer;
    &:hover,&.active {
      color: #fff;
      background-color: #000;
      & > .right > .duration{
        color:#fff;
      }
    }
    &.active::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${playListSprite}) -182px 0;
      }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
        color: #666;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
`