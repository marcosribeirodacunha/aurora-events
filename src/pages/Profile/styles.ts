import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: 0 20px;
  margin: 80px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${props => props.theme.font.title2};
    color: ${props => props.theme.colors.secondary};
  }

  p {
    color: ${props => props.theme.colors.textSecondary};

    &:first-of-type {
      margin: 6px 0 24px;
      color: ${props => props.theme.colors.text};
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 32px;

  img {
    width: 192px;
    height: 192px;
    object-fit: cover;
    border-radius: 50%;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 8px;

    width: 100%;

    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    color: transparent;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background: ${props => transparentize(0.3, props.theme.colors.card)};
      color: ${props => props.theme.colors.primary};
    }
  }
`;
