import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c7523',
      light: '#7a9a2e',
      dark: '#3e5018',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#de6b02',
      light: '#e88530',
      dark: '#b85a02',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#c13c2c',
      light: '#d44e3e',
      dark: '#8a2a1e',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#f3f8ed',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1a2a0a',
      secondary: '#3a4a1a',
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 },
    h3: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 },
    h4: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 },
    h5: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 },
    h6: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: "'Nunito', sans-serif",
          borderRadius: 30,
          padding: '10px 28px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
