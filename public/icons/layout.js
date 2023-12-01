import './globals.css';

// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

// providers
import { ThemeProvider } from '@/app/lib/context/ThemeProvider';
import { LoadingProvider } from '@/app/lib/context/LoadingProvider';
import { ScaleProvider } from '@/app/lib/context/ScaleProvider';
import { ContactProvider } from '@/app/lib/context/ContactProvider';

// local components
import Navbar from './navigation/navbar';
import { CartProvider } from '@/app/lib/context/CartProvider';

// metadata
export const metadata = {
  title: 'yourhead',
  description: 'Painting stuff',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sofiaSans.className}>
        <LoadingProvider>
          <ScaleProvider>
            <ThemeProvider>
              <CartProvider>
                <ContactProvider>
                  <Navbar />
                  {children}
                </ContactProvider>
              </CartProvider>
            </ThemeProvider>
          </ScaleProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
