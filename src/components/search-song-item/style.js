import styled from 'styled-components';
export const SongsItemWrapper = styled.div`
  padding: 10px 10px 8px 18px;
  display: flex;
  &:hover{
    .tools{
      display:block;
    }
  }
`
export const SongItemLeft = styled.div`
  display:flex;
  width:490px;
  justify-content: space-between;
  .func{
    width:380px;
    height: 22px;
    display:flex;
    .btn{
      width:17px;
      height:17px;
      background-position: 0 -103px;
      padding:0 0;
      margin-right:5px;
      &:hover{
        background-position: 0 -128px;
      }
    }
    .song-name{
      font-weight: normal;
      font-size: 12px;
    }
    .remarks{
      color: #aeaeae;
      font-size: 12px;
    }
    .mv{
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
  .tools{
    display:flex;
    align-items:center;
    display:none;
    .btn{
      width: 17px;
      height: 17px;
      cursor: pointer;
      padding:0 0;
    }
    .addto {
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
  
`
export const SongItemRight = styled.div`
  flex:1;
  display:flex;
  justify-content: space-between;
  .artist{
    width: 140px;
    margin-left: 10px;
    display:flex;
    .artist-item{
      display:flex;
      &:last-child{
        .divider{
          display: none;
        }
      }
      .artist-name{
        cursor:pointer;
        &:hover{
          text-decoration:underline;
        }
      }
    }

  }
  .album{
    width: 157px;
    color: #666;
  }
  .song-time{
    flex:1;
    margin:0 20px;
  }
`
