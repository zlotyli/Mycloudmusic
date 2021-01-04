import styled from 'styled-components';
export const CommentWrapper=styled.div`
  margin-top:20px;
  padding: 0 30px 40px 39px;
`
export const CommentTop = styled.div`
  margin:20px 0;
  display: flex;
  justify-content: space-between;
  .head{
    img{
      width: 50px;
      height: 50px;
    }
  }
  .edit{
    flex:1;
    .text-wrap{
      position: relative;
      padding-left: 12px;
      .text{
        height: 63px;
        width:100%;
        padding: 5px 6px 6px;
        border:  1px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        background:#fff;
      }
      .corr{
        position: absolute;
        width: 3px;
        height: 7px;
        top: 18px;
        left: 10px;
        color: #cdcdcd;
        background-color: #fff;
        z-index: 10px;

        span{
          position: absolute;
          top: -6px;
          left: -5px;
          font-size:14px;
        }
      }
    }
    .btns{
      padding-top:8px;
      display:flex;
      justify-content: space-between;
      .left{
        padding-left: 12px;
        & > span{
          display:inline-block;
          width:18px;
          height: 18px;
        }
        span.first{
          background-position: -40px -490px;
          margin-right: 10px;
        }
        span.last{
          background-position:-60px -490px;
        }
      }
      .right{
        display:flex;
        span{
          line-height: 25px;
          margin-right:10px;
          color:#999;
        }
        .btn{
          display: inline-block;
          width: 46px;
          height: 25px;
          background-position: -84px -64px;
          text-align: center;
          line-height: 25px;
          color: #fff;
          text-decoration: none;
          &:hover{
            background-position: -84px -94px;
          }
        }
        
      }
    }
  }
`
export const CommentInfo = styled.div`
  .hot{
    height: 23px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    font-weight: 700;
    color: #333;
  }
  div:first-of-type{
    border-top:none;
  }
`
