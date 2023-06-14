'use client';

import '@/app/globals.css';

// context
import { LoadingContext } from './context/loadingContext';
import { CartProvider } from './context/cartContext';

// hooks
import { useState, Suspense } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

// components
import Nav from './nav';
import Footer from './footer';
import Loading from './loading';

// font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// root layout
export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const loadingValue = { loading, setLoading };

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1090,
        desktop: 1200,
      },
    },
  });

  // render
  return (
    <html lang='en'>
      <LoadingContext.Provider value={loadingValue}>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <body className={inter.className}>
              <script
                src='https://accounts.google.com/gsi/client'
                async
                defer></script>
              <Suspense fallback={<Loading />}>
                <Nav />
                {children}
              </Suspense>
              <Footer />
            </body>
          </ThemeProvider>
        </CartProvider>
      </LoadingContext.Provider>
    </html>
  );
}
