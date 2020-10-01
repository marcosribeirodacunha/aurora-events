import styled from 'styled-components';

export const Content = styled.div`
  h1 {
    font-size: ${props => props.theme.font.title1};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 20px;
  }

  p span {
    color: ${props => props.theme.colors.primary};
  }

  div {
    text-align: center;
    margin-top: 12px;

    button:first-child {
      margin-right: 12px;
    }
  }
`;
