import styled from 'styled-components'
export const CommentWrapper = styled.div`
    padding: 15px 0;
    border-top: 1px dotted #ccc;
    display:flex;
    justify-content:space-between;
    .head{
      img{
        width: 50px;
        height: 50px;
      }
    }
    .contentTxt{
      flex:1;
      padding-left:10px;
      .text{
        width: 100%;
        overflow: hidden;
        line-height: 20px;
        a{
          margin-right:5px;
          color:#0c73c2;
        }
        .cloud{
          width:13px;
          height:13px;
          margin-right:5px;
          vertical-align:-2px;
        }
        .vip{
          height: 12px;
          margin-right: 5px;
          vertical-align: -1px;
        }
      }
      .other{
        margin-top: 15px;
        display:flex;
        justify-content:space-between;
        .time{
          color: #999
        }
        .star{
          .icon{
            background-position: -150px 0px;
            margin-right: 5px;
            vertical-align: -2px;
            width: 15px;
            height: 14px;
            display: inline-block;
            overflow: hidden;
          }
          .seq{
            margin: 0 8px;
            color: #ccc;
          }
          a{
            color: #666;
          }
        }
      }
    }
    
`
