import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A20E0E',
      light: '#C93030',
      dark: '#7A0A0A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF751F',
      light: '#FF9550',
      dark: '#CC5C18',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FBEAEA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C1A1A',
      secondary: '#6B3A3A',
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },
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
