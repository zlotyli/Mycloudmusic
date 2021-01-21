import styled from 'styled-components';

export const LyricsWrapper = styled.div`
  margin-top:20px;
  .lyric-item:nth-child(odd){
    > div:first-child{
      background-color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
  .lyric-item:nth-child(even){
    > div:first-child{
      background: #f7f7f7;
      border:1px solid #f7f7f7;
    }
  }
  .lyric-item{
    > div:first-child:hover{
      
      border: 1px solid #e1e1e1;
      background: #f2f2f2;
    }
  }

`