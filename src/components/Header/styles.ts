import styled from 'styled-components';
import imagebg from '../../assets/header-bg.svg';

export const HeaderContainer = styled.header`
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${imagebg});
  background-size: cover;
  background-position: center;
  img {
    width: 148px;
    height: 98ps;
    margin-top: 64px;
  }
`;
