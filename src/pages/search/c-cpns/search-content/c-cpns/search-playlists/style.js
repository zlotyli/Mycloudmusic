import styled from 'styled-components';
export const PlaylistsWrapper = styled.div`
  margin-top:20px;
  > div:nth-child(odd){//奇数行
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  > div:nth-child(even){
    background: #f7f7f7;
    border:1px solid #f7f7f7;
  }
  > div:hover{
    border: 1px solid #e1e1e1;
    background: #f2f2f2;
    .tools{
      display: block;
    }
  }
  .playlists-item{
    display:flex;
    align-items:center;
  }
`
export const PlaylistItemleft = styled.div`
  width:52%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .info{
    display: flex;
    align-items:center;
    .btn{
      width:17px;
      height:17px;
      background-position: 0 -103px;
      
      padding:0 0;
      margin:0 10px 0 20px;
      &:hover{
        background-position: 0 -128px;
      }
    }
    .img{
      position:relative;
      margin:5px 10px;
      width:50px;
      height: 50px;
      img{
        width:50px;
        height:50px;
      }
      .cover{
        background-position: -160px 0;
      }
    }
    .list-name{
      margin-left:10px;
      &:hover{
        cursor:pointer;
        text-decoration: underline;
      }
    }
  }
  .tools{
    display:flex;
    display:none;
    position: relative;
    top: 4px;
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
  }
`
export const PlaylistItemRight = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content: space-between;
  .left{
    display:flex;
    align-items:center;
    .songs-num{
      margin-left:20px;
      color: #999;
    }
    .origin{
      width:160px;
      margin:auto 10px;
      color: #666;
      .cname:hover{
        text-decoration:underline;
        cursor:pointer;
      }
    }
  }
  .right{
    width: 40%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color: #999;
    .favor{
      
    }
    .listen{
      width:78px;
      margin-right:10px;
    }
  }
`