import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: '#e6eaef',
      100: '#ccd5df',
      200: '#b3c0cf',
      300: '#99abbf',
      400: '#8096af',
      500: '#66819f',
      600: '#4d6c8f',
      700: '#33577f',
      800: '#2c3d50', // Primary color
      900: '#1a2836',
    },
  },
  fonts: {
    heading: 'Assistant, sans-serif',
    body: 'Assistant, sans-serif',
  },
  direction: 'rtl',
});

export default theme; 