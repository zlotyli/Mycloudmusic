import styled from 'styled-components';

export const ArtistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .artists-item{
    width: 130px;
    .image {
      position: relative;
      img {
        width: 130px;
        height: 130px;
        margin:10px 0 8px;
      }
      .image_cover{
        background-position: 0 -670px;
        text-indent: -9999px;
      }
    }

    .info {
      height: 30px;
      display: flex;
      justify-content: space-between;
      box-sizing:content-box;
      .name {
        cursor: pointer;
        
        &:hover {
          color: red;
          text-decoration: underline;
        }
      }

      .icon {
        display: inline-block;
        width: 17px;
        height: 18px;
        margin-left:3px;
        background-position: 0 -740px;
      }
    }
  }
  
  
`