import styled from 'styled-components';
export const HeaderWrapper = styled.div`
.singer-name{
  display:flex;
  align-items: flex-end;
  .z-name{
    height: 34px;
    font-weight: normal;
    font-size: 24px;
    color: #333;
  }
  .e-name{
    padding-left: 10px;
    font-size: 14px;
    color: #999;
    font-weight: normal;
  }
}
.img{
  width:640px;
  margin-top:8px;
  position: relative;
  img{
    width:640px;
    height:300px;
  }
  .mask{
    position:absolute;
    width:640px;
    height:300px;
    top:0;
    left:0;
  }
  .btn-home{
    position:absolute;
    bottom: 18px;
    right: 116px;
    width: 96px;
    height: 32px;
    background-position: 0 -1156px;
    &:hover{
      background-position: 0 -1196px;
      cursor:pointer;
    }
  }
  .btn-collection{
    position: absolute;
    bottom: 18px;
    right: 20px;
    width: 76px;
    height: 32px;
    background-position: 0 -500px;
    &:hover{
      background-position: 0 -540px;
      cursor:pointer;
    }
  }
}
.tab-bar{
  height: 39px;
  border: 1px solid #ccc;
  border-width: 0 1px;
  background-position: 0 0;
  background-repeat: repeat-x;
  display:flex;
  
  .tab-item{
    position: relative;
    .inside{
      height: 37px;
      width: 134px;
      padding: 2px 2px 0 0;
      line-height: 37px;
      font-size:14px;
      cursor: pointer;
      text-align: center;
    }
  }
  .tab-item:hover,.active{
    background-position: left -90px;
    border-right:1px solid #ccc;
    .inside{
      width: 133px;
    }
  }
  
}
`