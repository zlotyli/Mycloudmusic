import styled from 'styled-components';
import radioBg from '@/assets/img/radio_bg.png';
export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;
`

export const CategoryContent = styled.div`
  flex: 1;
  width: 900px;

  .category-page {
    display: flex !important;
    flex-wrap: wrap;
    padding-bottom: 20px;

    .category-item {
      width: 70px;
      height: 70px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
      margin: 0 0 25px 33px;
      &:hover{
        background-color: #f6f7f7;
      }
      &.active {
        background-image: url(${radioBg});
        background-position:-70px 0;
        .image {
          width: 48px;
          height: 48px;
          margin: 2px auto 0;
          background-position: -48px 0;
        }
        em{
          color: #d35757;
        }
      }
      .image {
        width: 48px;
        height: 48px;
        margin: 2px auto 0;
        background-position: 0 0;
      }
      em{
        font-style: normal;
        text-align: left;
        font-size: inherit;
        color: #888;
      }
    }
  }

  
`

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`