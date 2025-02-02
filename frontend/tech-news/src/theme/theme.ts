import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1A1A2E',
      light: '#16213E',
      dark: '#0F3460',
    },
    secondary: {
      main: '#00B4D8',
      light: '#48CAE4',
      dark: '#0096C7',
    },
    background: {
      default: '#1A1A2E',
      paper: '#16213E',
    },
    text: {
      primary: '#E2E2E2',
      secondary: '#B2B2B2',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      display: 'block',
      flex: 'none',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});

export default theme;

