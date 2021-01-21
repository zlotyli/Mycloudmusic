import styled from 'styled-components';
export const LyricItemWrapper = styled.div`
  padding: 10px 50px 30px 50px;

  .lyric-info {
    .text {
      margin: 6px 0;
    }
  }

  .lyric-control {
    position: relative;
    background-color: #fff;
    cursor: pointer;
    padding:0 2px 0 0;
    &:hover{
      text-decoration: underline;
    }
    
    i {
      position: absolute;
      width: 11px;
      height: 8px;
      top: 6px;
      background-position: ${props => props.isSpread ? "-45px": "-65px"} -520px;
    }
  }
` 