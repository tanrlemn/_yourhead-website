import '@/app/globals.css';

// providers
import { ThemeProvider } from './lib/providers/ThemeProvider';
import { LoadingProvider } from './lib/providers/LoadingProvider';
import { ScaleProvider } from './lib/providers/ScaleProvider';
import { ContactProvider } from './lib/providers/ContactProvider';

// components
import Navbar from './_navigation/navbar';
import Footer from './_navigation/footer';
import Loading from './loading';

// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sofiaSans.className}>
        <LoadingProvider>
          <ScaleProvider>
            <ThemeProvider>
              <ContactProvider>
                <Navbar />
                {children}
                <Footer />
              </ContactProvider>
            </ThemeProvider>
          </ScaleProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
