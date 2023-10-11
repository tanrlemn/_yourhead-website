// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

// chakra-ui
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  global: {
    html: {
      background: 'var(--lightGreen, #b6e8be)',
    },
  },
  fonts: {
    heading: `${sofiaSans}, sans-serif`,
    body: `${sofiaSans}, sans-serif`,
  },
});
