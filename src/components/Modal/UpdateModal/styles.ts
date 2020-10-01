import styled from 'styled-components';

export const Content = styled.div`
  width: max(100%, 350px);

  h1 {
    font-size: ${props => props.theme.font.title1};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 6px;
  }

  label + div {
    margin-bottom: 20px;
  }

  button {
    display: block;
    margin-left: auto;
  }
`;
