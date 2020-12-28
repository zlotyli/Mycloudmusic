import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #C10D0C;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: baseline;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }
    .keyword {
       
      span{
        vertical-align:bottom;
        color: #666;
      }
    }
  }

`