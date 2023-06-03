import './globals.css';
import { BsArrowRight } from 'react-icons/bs';
import navStyles from './nav.module.css';
import textStyles from './text.module.css';
import spacingStyles from './spacing.module.css';
import ctaStyles from './components/componentStyles/cta.module.css';
import Marquee from './components/marquee';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'YOURHEAD',
  description: 'Unique portrait paintings by artist, YOURHEAD.',
};

export default function RootLayout({ children }) {
  const inputStyles = {
    background: '#eee',
  };
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className={navStyles.navWrapper}>
          <div className={navStyles.innerNav}>
            <Link href='/' className={navStyles.brandBlock}>
              <div className={navStyles.brandTitle}>YOURHEAD</div>
            </Link>
            <div className={navStyles.navMenu}>
              <div className={navStyles.navLinkWrap}>
                <Link href='/commissions' className={navStyles.navLink}>
                  Commissions
                </Link>
                <Link href='/shop' className={navStyles.navLink}>
                  Shop
                </Link>
                <Link href='/recents' className={navStyles.navLink}>
                  Recents
                </Link>
                <Link href='/pricing' className={navStyles.navLink}>
                  Pricing
                </Link>
                <Link href='/about' className={navStyles.navLink}>
                  About
                </Link>
                <Link href='/contact' className={navStyles.navLink}>
                  Contact
                </Link>
              </div>
              <div className={navStyles.navButton}>
                <script src='//embed.typeform.com/next/embed.js' async></script>
                <button
                  className={textStyles.linkBlockChartreuse}
                  data-tf-slider='diYCs0i7'
                  data-tf-position='right'
                  data-tf-opacity='100'
                  data-tf-iframe-props='title=YOURHEAD Commission Request'
                  data-tf-transitive-search-params
                  data-tf-medium='snippet'>
                  <div className={navStyles.buttonLabel}>
                    Request a painting
                  </div>
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className={navStyles.navSpacer}></div>
        {children}
        <footer className={navStyles.footerWrap}>
          <div className={navStyles.footerInner}>
            <div className={navStyles.footerLeft}>
              <div className={textStyles.footerTitle}>YOURHEAD</div>
              <div className={spacingStyles.bottomTopMarginMd}>
                <div className={textStyles.paragraphSm}>
                  YOURHEAD is a portrait painter, offering a unique style at
                  affordable prices.
                </div>
              </div>
              <form className={ctaStyles.form} style={inputStyles}>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className={ctaStyles.input}
                  autoComplete='email'
                />
                <button type='submit' className={ctaStyles.arrowButton}>
                  <BsArrowRight />
                </button>
              </form>
            </div>
            <div className={navStyles.footerRight}>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>The Artist</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/'>Home</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/about'>About</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>Commissions</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/commissions'>How it works</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/pricing'>Pricing</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/timeline'>Timeline</Link>
                  </li>
                </ul>
              </div>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>Works</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/recents'>Recent commissions</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/music'>Music</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={spacingStyles.fullDividerGreen}></div>
          <Marquee delay={-20} />
          <div className={spacingStyles.fullDividerGreen}></div>
          <div className={navStyles.footerLower}>
            <div className={textStyles.footerLowerText}>
              © 2023 YOURHEAD, All Rights reserved
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
