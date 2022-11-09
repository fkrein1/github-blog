import styled from 'styled-components';

export const PostContainer = styled.div`
  max-width: 924px;
  margin: auto;
  padding-inline: 30px;
  
`;
export const PostSummary = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px;
  margin-top: -84px;
  display: flex;
  flex-direction: column;

`;

export const PostHeader = styled.header`
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 12px;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme['base-title']};
  margin-top: 20px;
`;

export const PostIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 8px;
    align-items: center;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const PostContent = styled.div`
  padding: 40px 32px;
  white-space: pre-line;

`;
