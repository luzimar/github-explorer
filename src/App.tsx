import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { darkTheme, lightTheme } from './styles/themes';
import useDarkMode from './utils/hooks/useDarkMode';
import Toggle from './components/Toggle';

import GlobalStyle from './styles/global';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const isLightTheme = theme === 'light';

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Toggle
        lightTheme={isLightTheme}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
