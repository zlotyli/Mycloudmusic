import styled from 'styled-components';
import multiPort from '@/assets/img/multiport.png';
export const MultiportWrapper = styled.div`
  margin: 20px 0;
  padding-bottom: 20px;
  .select{
    background: url(${multiPort}) 0 -392px;

    display:flex;
    justify-content: space-between;
    .select-item{
      display: block;
      width:42px;
      height: 48px;
      text-indent:-9999px;
      &:hover{
        background:url(${multiPort}) no-repeat 0 9999px;
      }
      &.apple{
        &:hover{
          background-position: 0 -472px;
        }
      }
      &.window{
        width: 60px;
        &:hover{
          background-position: -70px -472px;
        }
      }
      &.android{
        &:hover{
          background-position: -158px -472px;
        }
      }
    }
  }
  .info{
    margin:20px 0 40px 0;
    color:#999;
  }
  .link{
    color:#333;
  }
`