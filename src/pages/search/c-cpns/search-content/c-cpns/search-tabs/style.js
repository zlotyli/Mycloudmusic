import styled from 'styled-components';
export const TabsWrapper = styled.div`
  .smallt{
    color: rgb(153, 153, 153);
    margin-bottom:17px;
    > .showy{
      color: rgb(194, 12, 12)
    }
  }
  .tabs{
    height: 39px;
    border: 1px solid #cccccc;
    border-top:none;
    border-bottom:none;
    background-position: 0px 0px;
    background-repeat: repeat-x;
    display:flex;
    .tab-item{
      width:112px;
      height:39px;
      cursor: pointer;
      
      > div {
        text-align:center;
        line-height:39px;
        font-size:14px;
      }
    }
    .active{
      background-position: left -90px;
      border-right:1px solid #cccccc;
    }
    .tab-item:last-child.active{
      border-right:none;
    }
  }
`