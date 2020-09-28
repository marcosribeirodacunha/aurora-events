import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
