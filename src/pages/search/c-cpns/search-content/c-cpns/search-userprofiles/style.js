import styled from 'styled-components';
export const UserWrapper = styled.div`
  margin-top: 20px;
  > div:nth-child(odd){//奇数行
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  > div:nth-child(even){
    background: #f7f7f7;
    border:1px solid #f7f7f7;
  }
  > div:hover{
    border: 1px solid #e1e1e1;
    background: #f2f2f2;
  }
`
export const UserItem = styled.div`
display:flex;
.info{
  width:62%;
  display:flex;
  .img{
    position:relative;
    margin:5px 10px;
    width:50px;
    height: 50px;
    img{
      width:50px;
      height:50px;
    }
    .cover{
      background-position: -160px 0;
    }
  }
  .message{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin: 5px 10px;
    .user{
      display:flex;
      align-items:center;
      .name{
        font-size:14px;
        &:hover{
          text-decoration:underline;
          cursor:pointer;
        }
      }
      .des{
        width: 11px;
        height: 13px;
        background-position: 0 1px;
        margin-left:3px;
      }
      .gender{
        width: 14px;
        height: 15px;
        margin:auto 5px;
        background-position: -70px ${props=>props.gender===1?"-20px":'0px'}
      }
    }
    .signature{
     width:460px;
     color:#999;
    }
  }
}
.other{
  flex:1;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .follow{
    width: 64px;
    height: 27px;
    background-position: 0 -990px;
    line-height: 27px;
    span{
      margin-left: 25px;
      color: #5d5d5d;
    }
    &:hover{
      background-position: 0 -1020px;
      cursor:pointer;
    }
  }
  .playlist{
    color: #999;
  }
  .fans{
    width:100px;
    color: #999;
  }

}
    
`