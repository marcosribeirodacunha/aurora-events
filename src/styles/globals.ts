import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  body, input, button, textarea {
    font: 400 ${props => props.theme.font.default} 'Josefin Sans', sans-serif;
    color: ${props => props.theme.colors.text};
    line-height: ${props => props.theme.lineHeight.text}
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: ${props => props.theme.lineHeight.title};
  }

`;
