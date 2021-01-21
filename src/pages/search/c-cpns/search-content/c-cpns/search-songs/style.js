import styled from 'styled-components';
export const SongsWrapper = styled.div`
  margin-top:20px;
  
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
