import styled from 'styled-components';

export const SearchHeader = styled.div`
    
  .iput{
    position: relative;
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background-position: 0 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    .input{
      width: 320px;
      height: 17px;
      margin: 12px 0 0 20px;
      padding: 0;
      background: #fff;
      border: none;
      font-size: 12px;
    }
    .btn{
      display:inline-block;
      width: 50px;
      height: 40px;
      &:hover{
        background-position: -430px 0;
      }
    }
  }
`