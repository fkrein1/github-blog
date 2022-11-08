import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 864px;
`;

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
