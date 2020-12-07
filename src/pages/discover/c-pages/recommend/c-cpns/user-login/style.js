import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height:126px;
  padding-top:0;
  background-position: 0 0;

  .note{
    line-height:22px;
    padding: 16px 16px;
    color: #666;
    margin: 0 auto;
  }
  .btn{
    margin: 0 auto;
    display: block;
    height: 31px;
    line-height: 31px;
    width:100px;
    background-position: 0 -195px;
    text-align: center;
    color: #fff;
    text-decoration:none;

    &:hover{
      background-position: -110px -195px;
    }
      
  }
`