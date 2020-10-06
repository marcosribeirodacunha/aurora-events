import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface IProps {
  disableUserInteraction: boolean;
}

export const Container = styled.button<IProps>`
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  border: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.1s ease;

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

  ${props =>
    props.disableUserInteraction &&
    css`
      pointer-events: none;
      color: ${props => props.theme.colors.text};
    `};
`;
