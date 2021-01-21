import styled from 'styled-components';
export const HotSingersWrapper = styled.div`
  .singers{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .singers-item{
      width:51px;
      .img{
        width:50px;
        height:50px;
        &:hover{
          text-decoration:underline;
          cursor:pointer;
        }
      }
      .singer-name{
        margin:7px auto 20px;
        text-align:center;
        &:hover{
          text-decoration:underline;
          cursor:pointer;
        }
      }
    }
  }
`