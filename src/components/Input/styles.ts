import styled, { css } from 'styled-components';

interface IProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IProps>`
  background: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.textSecondary};
  border: 2px solid ${props => props.theme.colors.card};
  height: 50px;
  padding: 0 16px;
  border-radius: ${props => props.theme.radius};
  width: 100%;
  transition: border-color 0.3s ease;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
    `}

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    padding: 16px 0;
    border: 0;
    color: ${props => props.theme.colors.text};

    &::placeholder {
      color: ${props => props.theme.colors.textSecondary};
    }
  }

  svg {
    margin-right: 16px;
  }
`;
