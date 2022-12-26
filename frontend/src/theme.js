import { createTheme } from '@mui/material/styles';

import "@fontsource/poppins"; // Defaults to weight 400.

export const theme = createTheme({
  palette: {
    primary: {
      main: '#252525',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: 'primary.main',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: 'primary.main',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          width: 'fit-content',
          display: 'block',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '1.2rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          padding: '0.5rem 2rem',
          backgroundColor: '#252525',
          border: '1px solid #252525',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#252525',
            border: '1px solid #252525',
        },
      },
    },
  }
}});