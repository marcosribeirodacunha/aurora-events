import styled, { css } from 'styled-components';

interface IDropzoneProps {
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

export const DropzoneContainer = styled.div<IDropzoneProps>`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radius};
  height: 250px;
  border: 2px solid ${props => props.theme.colors.card};
  overflow: hidden;
  transition: border-color 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: ${props => props.theme.radius};
    border: 1px dashed ${props => props.theme.colors.tertiary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    color: ${props => props.theme.colors.textSecondary};

    svg {
      color: ${props => props.theme.colors.tertiary};
      margin-bottom: 8px;
    }
  }
`;
