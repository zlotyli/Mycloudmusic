import styled from 'styled-components';
export const DjRadiosWrapper = styled.div`
  margin-top:30px;
 .header{
    margin-top: 8px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgb(218, 218, 218);
    line-height: 17px;
    
    h2{
      font-size: 100%;
      font-weight: bold;
    }
 }
 .radios{
    margin-top:16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 }
`
export const RadioItem = styled.div`
  width:151px;
  margin-bottom:40px;
  img{
    width:150px;
    height:150px;
  }
  .radio-name{
    margin:13px 0 6px;;
    line-height: 16px;
    font-size: 14px;
    font-weight: normal;
    &:hover{
      text-decoration:underline;
      cursor:pointer;
    }
  }
  .origin{
    color:#999;
    display:flex;
    align-items:center;
    .dj-name{
      color:#333;
      &:hover{
        cursor:pointer;
        text-decoration:underline;
      }
    }
    .gender{
      width: 14px;
      height: 15px;
      margin:auto 5px;
      background-position: -70px ${props=>props.gender===1?"-20px":'0px'}
    }
  }
    
`