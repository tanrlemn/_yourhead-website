import '@/app/globals.css';

import dynamic from 'next/dynamic';

// providers
import { ThemeProvider } from './lib/context/ThemeProvider';
import { LoadingProvider } from './lib/context/LoadingProvider';
import { ScaleProvider } from './lib/context/ScaleProvider';
import { ContactProvider } from './lib/context/ContactProvider';
import { SessionProvider } from './lib/context/SessionProvider';

// local components
import Footer from './_navigation/footer';

// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

const Navbar = dynamic(() => import('./_navigation/navbar'), {
  ssr: false,
});

const APP_NAME = 'YOURHEAD';
const APP_DEFAULT_TITLE = 'YOURHEAD – Oil Painter';
const APP_TITLE_TEMPLATE = '%s - YOURHEAD';
const APP_DESCRIPTION =
  'YOURHEAD is a painter and innovator, offering a unique style and approach to all aspects of life.';

// metadata
export const metadata = {
  metadataBase: new URL('https://yourheadisourhead.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: '/images/og-image.png',
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sofiaSans.className}>
        <LoadingProvider>
          <ScaleProvider>
            <ThemeProvider>
              <SessionProvider>
                <ContactProvider>
                  <Navbar />
                  {children}
                  <Footer />
                </ContactProvider>
              </SessionProvider>
            </ThemeProvider>
          </ScaleProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
