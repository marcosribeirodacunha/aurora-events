import styled, { css } from 'styled-components';
import { shade, transparentize } from 'polished';

interface IProps {
  block: boolean;
  fab: boolean;
  hasIcon: boolean;
}

export const Container = styled.button<IProps>`
  border-radius: ${props => props.theme.radius};
  border: none;
  margin-top: 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-weight: 700;

  ${props =>
    props.block &&
    css`
      width: 100%;
      display: block;
    `}

  ${props =>
    props.fab &&
    css`
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `}

  ${props =>
    !props.fab &&
    props.hasIcon &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 12px;
      }
    `}

  /* *** SIZES *** */
  ${props =>
    !props.fab &&
    css`
      &.md {
        height: 50px;
        padding: 0 32px;
      }

      &.sm {
        height: 40px;
        padding: 0 16px;
      }
    `}

  /* *** VARIANTS *** */

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

  &.inverse-ghost {
    background: transparent;
    color: ${props => props.theme.colors.text};

    &:hover {
      background: ${props => transparentize(0.8, props.theme.colors.text)};
    }
  }
`;
