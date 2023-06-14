'use client';

import '@/app/globals.css';

// context
import { LoadingContext } from './context/loadingContext';
import { CartProvider } from './context/cartContext';

// hooks
import { useState, Suspense } from 'react';

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

  // render
  return (
    <html lang='en'>
      <Suspense fallback={<Loading />}>
        <LoadingContext.Provider value={loadingValue}>
          <CartProvider>
            <body className={inter.className}>
              <script
                src='https://accounts.google.com/gsi/client'
                async
                defer></script>
              <Nav />
              {children}
              <Footer />
            </body>
          </CartProvider>
        </LoadingContext.Provider>
      </Suspense>
    </html>
  );
}
