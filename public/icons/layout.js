import './globals.css';

// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

// providers
import { ThemeProvider } from '@/app/lib/providers/ThemeProvider';
import { LoadingProvider } from '@/app/lib/providers/LoadingProvider';
import { ScaleProvider } from '@/app/lib/providers/ScaleProvider';
import { ContactProvider } from '@/app/lib/providers/ContactProvider';

// local components
import Navbar from './navigation/navbar';
import { CartProvider } from '@/app/lib/providers/CartProvider';

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
