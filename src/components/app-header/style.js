import styled from 'styled-components';
import sprite_01 from "@/assets/img/sprite_01.png";
export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color:#ccc;
  background-color: #242424;

  .content{
    height:70px;
    display: flex;
    justify-content: space-between;
  }
  .divider{
    height:5px;
    background-color: #C20C0C;
  }
`
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    /* 将文字移开为了不显示也可以有利于SEO */
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;


  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
        color: #9b9b9b;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    cursor:pointer;
    color: #ccc;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    /* 去除背景颜色---这里将背景色设置为透明 */
    background-color: transparent;
    &:hover{
      border: 1px solid #ccc;
      color: #fff;
    }
  }
  > div{
    padding:0 24px 0 0;
  }
`