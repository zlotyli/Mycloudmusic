import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  font-size: 24px;
  .right {
      display: flex;
      font-size: 12px;
      margin-top:10px;
      .item {
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
      .item:last-child{
        a{
          color: #c20c0c;
        }
        span{
          display:none;
        } 
      }
    }
`
