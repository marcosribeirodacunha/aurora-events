import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-top: 16px;
  transition: color 0.2s;

  span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      transition: background-color 0.3s ease;
    }
  }

  svg {
    margin-right: 10px;
  }

  &.text {
    color: ${props => props.theme.colors.text};

    span::after {
      background: ${props => props.theme.colors.text};
    }

    &:hover {
      color: ${props => shade(0.3, props.theme.colors.text)};

      span::after {
        background: ${props => shade(0.3, props.theme.colors.text)};
      }
    }
  }

  &.secondary {
    color: ${props => props.theme.colors.secondary};

    span::after {
      background: ${props => props.theme.colors.secondary};
    }

    &:hover {
      color: ${props => shade(0.3, props.theme.colors.secondary)};

      span::after {
        background: ${props => shade(0.3, props.theme.colors.secondary)};
      }
    }
  }
`;
