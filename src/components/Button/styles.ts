import styled, { css } from 'styled-components';
import { shade, transparentize } from 'polished';

interface IProps {
  block: boolean;
}

export const Container = styled.button<IProps>`
  height: 50px;
  padding: 0 32px;
  border-radius: ${props => props.theme.radius};
  border: none;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  ${props =>
    props.block &&
    css`
      width: 100%;
      display: block;
    `}

  &.primary {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};

    &:hover {
      background: ${props => shade(0.3, props.theme.colors.primary)};
    }
  }

  &.secondary {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};

    &:hover {
      background: ${props => shade(0.3, props.theme.colors.secondary)};
    }
  }

  &.primary-ghost {
    background: transparent;
    color: ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => transparentize(0.8, props.theme.colors.primary)};
    }
  }
`;
