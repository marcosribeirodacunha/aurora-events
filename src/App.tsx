import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

import { AuthProvider } from './contexts/Auth';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
