import styled from 'styled-components';
import download from '@/assets/img/download.png';
import banner_sprite from '@/assets/img/banner_sprite.png';

// 轮播图底部
export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  /* 轮播图主体 */
  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
    li.slick-active {
      width: 16px;
    }
    li button {
      width:7px;
      height:7px;
      border-radius:50%;
      color: #c1bcbc;
      background-color: #c1bcbc;
      opacity: 0.7;
    }
    li.slick-active button {
      background: #C20C0C;
      opacity: 1;
    }
    li button:hover{
      background: #C20C0C;
      opacity: 1;
    }
  }
`
// 轮播图中左侧
export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
    
  }
`
// 轮播图右侧登录
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${download});
`
// 两个控制轮播的按钮
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
