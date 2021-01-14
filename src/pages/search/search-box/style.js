import styled from 'styled-components'
export const SearchBoxWrapper = styled.div`
    width: ${props=>props.width+'px'};
    position: absolute;
    top: ${props=>props.top?'45px':'58px'};
    right: ${props=>props.right?'0':'298px'};
    z-index: 99;
    font-size: 12px;
    border: 1px solid #bebebe;
    color: #333;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    .tags{
      box-sizing:content-box;
      height: 17px;
      padding: 11px 10px;
      border-bottom: 1px solid #e2e2e2;
      color:#666;

      a{
        text-decoration: none;
        &:hover{
          background-color: #e3e5e7;
        }
      }
    }

    
`
export const SearchBoxItem = styled.div`
  .info{
    .info-item{
      display: flex;
      .head{
        width: 62px;
        padding: 10px 0 0 10px;
        display: flex;
        .icon{
          display: inline-block;
          width: 14px;
          height: 15px;
          margin: 2px 4px 0 0;
        }
        .songs{
          background-position: -35px -300px;
        }
        .albums{
          background-position: -35px -320px;
        }
        .artists{
          background-position: -50px -300px;
        }
        .playlists{
          background-position: -50px -320px;
        }
        span{
          display: inline-block;
        }
      }
      .substance{
        flex: 1;
        padding: 7px 0 5px;
        border-top: 1px solid #e2e2e2;
        border-left: 1px solid #e2e2e2;
        .news{
          width: 167px;
          height: 24px;
          line-height: 24px;
          padding-left: 12px; 
          &:hover{
            background-color: #e3e5e7;
            cursor:pointer;
          }
        }
      }
    }
    .info-item:nth-child(1){
      .substance{
        border-top:none;
      }
    }
  }
`