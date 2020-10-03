import styled from 'styled-components';

import signInBackground from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: min(100%, 900px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 40px;
  margin: auto;

  h1 {
    font-size: ${props => props.theme.font.title2};
    margin-bottom: 16px;

    > span {
      color: ${props => props.theme.colors.secondary};
    }
  }

  form {
    width: 100%;
    max-width: 350px;
    text-align: center;
    margin: 32px 0;
  }
`;

export const APIErrorMessage = styled.div`
  margin-bottom: 12px;
  color: ${props => props.theme.colors.error};
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
