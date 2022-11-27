import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
  colors: {
    dark: {
      '900': '#000000',
      '700': '#47585B',
      '300': '#999999',
      '200': '#999999 50%',
    },
    light: {
      '900': '#FFFFFF',
      '700': '#F5F8FA',
      '300': '#DADADA',
    },
    yellow: {
      '900': '#FFBA08',
      '800': '#FFBA08 50%',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        minHeight: '100vh',
        bg: 'light.700',
        color: 'gray.50',
      },
    },
  },
});
