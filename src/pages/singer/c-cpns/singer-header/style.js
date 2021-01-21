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
`