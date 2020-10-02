import styled, { css } from 'styled-components';

interface IInputWrapperProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div`
  label,
  span {
    display: block;
    text-align: left;
  }

  label {
    margin-bottom: 6px;
  }

  span {
    font-size: ${props => props.theme.font.small};
    color: ${props => props.theme.colors.error};

    margin-top: 6px;
  }

  & + div {
    margin-top: 16px;
  }
`;

export const InputWrapper = styled.div<IInputWrapperProps>`
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

  ${props =>
    props.hasError &&
    css`
      color: ${props.theme.colors.error};
      border-color: ${props.theme.colors.error};
    `}

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
