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
    primary: '#202225',
    secondary: '#2f3136',
    tertiary: '#36393f',
    textCards: '#C9C6C0',
    skeleton: 'rgba(0,0,0,0.5)',
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: { main: string };
      text: { primary: string; secondary: string; disabled: string; icon: string };
    };
    typography: { fontFamily: string; h6: { color: string } };
    colors: {
      white: string;
      primary: string;
      secondary: string;
      tertiary: string;
      textCards: string;
      skeleton: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      white: string;
      primary: string;
      secondary: string;
      tertiary: string;
      textCards: string;
      skeleton: string;
    };
  }
}
