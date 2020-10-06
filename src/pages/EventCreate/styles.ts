import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 620px;
  padding: 0 20px;
  margin: 80px auto 100px;

  h1 {
    font-size: ${props => props.theme.font.title1};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 20px;
  }

  button {
    display: block;
    margin-left: auto;
  }
`;

export const APIErrorMessage = styled.div`
  margin-bottom: 12px;
  color: ${props => props.theme.colors.error};
`;
