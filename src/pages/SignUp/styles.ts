import styled from 'styled-components';

import signUpBackground from '../../assets/sign-up-background.jpg';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

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
    margin: 96px 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
