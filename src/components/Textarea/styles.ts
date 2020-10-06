import styled, { css } from 'styled-components';

interface ITextareaElementProps {
  isFocused: boolean;
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

export const TextareaElement = styled.textarea<ITextareaElementProps>`
  display: block;
  background: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.card};
  width: 100%;
  height: 150px;
  min-height: 100px;
  padding: 12px 16px;
  border-radius: ${props => props.theme.radius};
  width: 100%;
  transition: border-color 0.3s ease;
  resize: vertical;

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.error};
    `}
`;
