import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled.div`
  max-width: 864px;
  margin-top: 72px;
`;

export const SeachContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 18px;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }
  input {
    margin-top: 12px;
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 12px 16px;
    color: ${(props) => props.theme['base-text']};
  }
  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-block: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Post = styled(Link)`
  text-decoration: none;
  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  cursor: pointer;

  &:hover {
    border: 1px solid #3a536b;
    border-radius: 10px;
    transition: all 0.3s;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 14px;
    display: block;
    color: ${(props) => props.theme['base-span']};
    margin-bottom: 8px;
  }

  p {
    color: ${props => props.theme['base-text']}
  }
`;
