import styled from "styled-components";

export const SetterSongerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        width: 148px;
        height: 62px;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-left: none;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
      background-position: 0 -223px;
      &:hover{
        background-position: 0 -141px;
      }
    }
  }
`
