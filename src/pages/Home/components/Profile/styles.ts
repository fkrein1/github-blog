import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px;
  max-width: 864px;
  margin-top: -110px;
  display: flex;
  gap: 32px;
  align-items: center;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 98px;
  height: 98px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    gap: 8px;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const ProfileDescription = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: ${(props) => props.theme['base-text']};
`;
export const ProfileIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 8px;
    align-items: center;

    svg {
      color: ${props => props.theme['base-label']}
    }
  }
`;
