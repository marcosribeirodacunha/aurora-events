import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const CardContainer = styled.section`
  margin-top: 80px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radius};

  img {
    width: 100%;
    border-radius: ${props => props.theme.radius};
  }
`;

export const CardContent = styled.div`
  padding: 20px;

  h1 {
    font-size: ${props => props.theme.font.title3};
    color: ${props => props.theme.colors.secondary};
  }

  p {
    font-size: ${props => props.theme.font.small};
    color: ${props => props.theme.colors.textSecondary};
    margin: 10px 0 20px;

    span {
      color: ${props => props.theme.colors.text};
    }
  }
`;

export const LikeButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  border: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;

  svg {
    margin-right: 6px;
  }

  &.active {
    color: ${props => props.theme.colors.secondary};

    &:hover {
      color: ${props => shade(0.3, props.theme.colors.secondary)};
    }
  }

  &:hover {
    color: ${props => props.theme.colors.text};
  }

  & + & {
    margin-left: 40px;
  }
`;
