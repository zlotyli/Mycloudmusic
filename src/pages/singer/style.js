import styled from 'styled-components';
import wrapBg from '@/assets/img/wrap-bg.png';
export const SingerWrapper = styled.div`
  .content {
    background: url(${wrapBg}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const SingerLeft = styled.div`
  width: 710px;
  padding: 20px 30px 40px 39px;
`

export const SingerRight = styled.div`
  width: 271px;
  padding: 20px 40px 40px 30px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  border-left:none;
`