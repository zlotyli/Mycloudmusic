import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 130px;
  /* margin-top: 15px; */

  .image {
    position: relative;
    img {
      width: 130px;
      height: 130px;
      margin:10px 0 8px;
    }
    .image_cover{
      background-position: 0 -670px;
    }
  }

  .info {
    /* margin: 10px 0; */
    height: 30px;
    display: flex;
    justify-content: left;
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
  .info.info-topTen{
    justify-content: space-between;
  }
  .info-lastFive{
    padding-bottom: 30px;
  }
`