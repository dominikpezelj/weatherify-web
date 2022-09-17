import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import App from './App';

import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';

export const Providers = () => {
  useSelector((state: any) => state.navigation.isDarkModeEnabled);
  const themeState = localStorage.getItem('theme');
  return (
    <ThemeProvider theme={themeState === 'false' ? lightTheme : darkTheme}>
      <App />
    </ThemeProvider>
  );
};
