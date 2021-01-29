import styled from 'styled-components';
export const SingerSongsWrapper = styled.div`
  .operation{
    margin-bottom: 10px;
    display:flex;
    justify-content:space-between;
    .left{
      display:flex;
      .play{
        background-position: right -428px;
        vertical-align: top;
        padding: 0 5px 0 0;
        
        .play-inside{
          padding: 0 7px 0 8px;
          color: #fff;
          background-position: 0 -387px;
          height: 31px;
          line-height: 31px;
          cursor: pointer;
          display:flex;
          .icon{
            display:inline-block;
            width: 20px;
            height: 18px;
            margin: 6px 2px 2px 0;
            background-position: 0 -1622px;
          }
          > span{

          }
        }
        &:hover{
          background-position: right -510px;
          .play-inside{
            background-position: 0 -469px;
            .icon{
              background-position: -28px -1622px;
            }
          }
        }
      }
      .addto{
        height: 31px;
        width: 31px;
        line-height: 30px;
        margin-right: 5px;
        margin-left: -3px;
        background-position: 0 -1588px;
        &:hover{
          background-position: -40px -1588px;
        }
      }
      .collection{
        background-position: right -1020px;
        padding: 0 5px 0 0;
        height: 31px;
        line-height: 30px;
        min-width: 23px;
        cursor: pointer;
        >span{
          display:block;
          padding-right: 2px;
          padding-left: 28px;
          background-position: 0 -977px;
        }
        &:hover{
          background-position: right -1106px;
          >span{
            background-position: 0 -1063px;
          }
        }
      }
    }
    .right{
      padding: 0 5px 0 0;
      background-position: right -100px;
      .right-inside{
        height: 31px;
        line-height: 31px;
        padding: 0 15px 0 20px;
        color: #333;
        background-position: 0 -59px;
        .txt{
          display:inline-block;
          margin-right:4px;
        }
        > i{
          display:inline-block;
          width: 8px;
          height: 5px;
        }
      }
    }
  }
  .songs{
    margin-top: 5px;
    > div:nth-child(even){//奇数行
      background-color: #ffffff;
      border: 1px solid #ffffff;
    }
    > div:nth-child(odd){
      background: #f7f7f7;
      border:1px solid #f7f7f7;
    }
    
  }
`
export const SingerSongsItem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  &:hover{
    .songs-right > .duration{
      display:none;
    }
    .songs-right > .tools{
      display:block;
    }
  }
  .songs-left{
    width:65%;
    display:flex;
    .show-index{
      width:25%;
      display:flex;
      justify-content:space-between;
      padding:6px 10px;
      .index-num{
        margin-left: 5px;
        color: #999;
      }
      .play{
        width:17px;
        height:17px;
        background-position: 0 -103px;
        padding:0 0;
        margin-right:5px;
        &:hover{
          background-position: 0 -128px;
        }
      }
    }
    .show-song-name{
      flex:1;
      display:flex;
      align-items:center;
      .song-name{
        margin-right: 4px;
        flex-shrink:0;
      }
      .song-info{
        color: #aeaeae;
        font-size: 12px;
      }
      .song-mv{
        width: 23px;
        height: 17px;
        margin-left:2px;
        background-position: 0 -151px;
        text-indent: -9999px;
        &:hover{
          background-position: -30px -151px;
        }
      }
    }
    
  }
  .songs-right{
    flex:1;
    display:flex;
    align-items:center;
    .duration{
      width:45%;
    }
    .tools{
      width:45%;
      display:flex;
      /* align-items:center; */
      display:none;
      .btn{
        width: 17px;
        height: 17px;
        cursor: pointer;
        padding:0 0;
        margin-top:3px;
      }
      .add {
        margin-right: 4px;
        background-position: 0 -700px;
        &:hover{
          background-position: -22px -700px;
        }
      }
      .favor {
        margin-right: 7px;
        background-position: 0 -174px;
        &:hover{
          background-position: -20px -174px;
        }
      }
      .share{
        margin-right: 7px;
        background-position: 0 -195px;
        &:hover{
          background-position: -20px -195px;
        }
      }
      .download{
        background-position: -81px -174px;
        &:hover{
          background-position: -104px -174px;
        }
      }
    }
    .song-album{
      width:117px;
      margin-right:10px;
    }
  }
`