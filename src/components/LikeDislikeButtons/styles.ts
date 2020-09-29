import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
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
