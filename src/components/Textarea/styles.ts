import styled from 'styled-components';

export const Container = styled.textarea`
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

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;
