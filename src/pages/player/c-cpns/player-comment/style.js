import styled from 'styled-components';
import spriteButton from "@/assets/img/sprite_button2.png"
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
export const CommentPagination = styled.div`
  .ant-pagination {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .ant-pagination .ant-pagination-prev,.ant-pagination-next{
    height:26px;
    margin:0 2px 0 1px;
    &>a{
      text-decoration:none;
      background:url(${spriteButton});
      display:block;
      box-sizing:content-box;
      width:47px;
      height:24px;
      border: 1px solid #ccc;
      border-radius: 2px;
      line-height:24px;
      color:#333;
      font-size:12px;
    }
  }
  .ant-pagination .ant-pagination-prev a{
    text-align:left;
    padding-left: 22px;
    background-position: 0 -560px;
    &:hover{
      background-position: 0 -590px;
    }
  }
  .ant-pagination .ant-pagination-next a{
    text-align:right;
    padding-right: 22px;
    background-position: -75px -560px;
    &:hover{
      background-position: -75px -590px;
    }
  }
  .ant-pagination .ant-pagination-item{
    box-sizing:content-box;
    min-width:23px;
    border:1px solid #ccc;
    height: 22px;
    margin:0 2px 0 1px;
    &:hover{
      border-color: #666;
    }
  }
  .ant-pagination .ant-pagination-item a{
    box-sizing:content-box;
    height:22.2px;
    display:block;
    padding: 0 9px;
    background-color: #fff;
    line-height: 22px;
    font-size:12px;
    
  }
  .ant-pagination-item-active{
    box-sizing:content-box;
    border:1px solid #A2161B;
  }
  .ant-pagination-item-active a{
    box-sizing:content-box;
    background:url(${spriteButton});
    background-position: 0 -650px;
    color: #fff;
  }
`