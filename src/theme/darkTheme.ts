import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00b6ff',
    },
    text: {
      primary: '#ffffff !important',
      secondary: '#fff',
      disabled: '#ggg',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h6: {
      color: '#fffff',
    },
  },
  colors: {
    white: '#ededed',
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: { main: string };
      text: { primary: string; secondary: string; disabled: string; icon: string };
    };
    typography: { fontFamily: string; h6: { color: string } };
    colors: { white: string };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: { white: string };
  }
}
