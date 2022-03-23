import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import AppRouter from './router/AppRouter';
import GlobalStyles from './styles/globalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
