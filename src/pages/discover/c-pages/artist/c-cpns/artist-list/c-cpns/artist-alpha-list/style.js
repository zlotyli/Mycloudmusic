import styled from 'styled-components';

export const AlphaListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.hasTop ? "20px": 0};

  .item {
    padding: 1px 4px;
    border-radius: 3px;
    width: 21px;
    height: 24px;
    span {
      display: block;
      text-align: center;
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }
    &:first-child,&:last-child{
      width: 45px;
      span{
        font-size: 12px;
      }
    }

    span:hover {
      text-decoration: underline;
    }
  }

  .active {
    background-color: #c20c0c;
    span {
      color: #fff;
    }
  }
`