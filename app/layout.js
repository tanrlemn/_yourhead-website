'use client';

// styles
import './globals.css';
import navStyles from './styles/nav.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';
import ctaStyles from './styles/(component_styles)/cta.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { CgMenuRight } from 'react-icons/cg';
import bag from '../public/icons/bag.svg';

// context
import { LoadingContext } from './context/loadingContext';

// hooks
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from './api/hooks/useIsMobile';

// components
import Marquee from './components/marquee';
import Loading from './loading';
import Link from 'next/link';
import Image from 'next/image';
import RainbowLetters from './components/rainbowLetters';
import NavSubMenu from './components/navSubMenu';

// font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// root layout
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // state
  const [loading, setLoading] = useState(true);
  const loadingValue = { loading, setLoading };

  const isShop = pathname.indexOf('/shop') > -1;

  const [nav, setNav] = useState({
    background: navStyles.navWrapper,
    link: navStyles.navLink,
    shop: isShop,
    brand: navStyles.brandTitle,
  });

  const mobile = useIsMobile();

  const [openMenu, setOpenMenu] = useState(false);

  // effects
  useEffect(() => {
    setLoading(true);
    setOpenMenu(false);

    if (isShop) {
      setNav({
        background: navStyles.navWrapperShop,
        link: navStyles.navLinkShop,
        shop: isShop,
        brand: navStyles.brandTitleShop,
        navSpacer: navStyles.shopNavSpacer,
      });
    } else {
      setNav({
        background: navStyles.navWrapper,
        link: navStyles.navLink,
        shop: isShop,
        brand: navStyles.brandTitle,
        navSpacer: navStyles.navSpacer,
      });
    }

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname, searchParams, isShop]);

  // styles
  const inputStyles = {
    background: '#eee',
  };

  const whiteBagStyle = {
    filter: 'invert(1) sepia(1) saturate(1) hue-rotate(180deg)',
  };

  // render
  return (
    <html lang='en'>
      <LoadingContext.Provider value={loadingValue}>
        <body className={inter.className}>
          <script
            src='https://accounts.google.com/gsi/client'
            async
            defer></script>
          <nav className={nav.background}>
            <div className={navStyles.innerNav}>
              <Link
                href='/'
                className={navStyles.brandBlock}>
                <div className={nav.brand}>
                  <div className={spacingStyles.blueUnderscoreWrap}>
                    <RainbowLetters string='YOURHEAD' />
                    <div className={spacingStyles.blueUnderscoreSm}></div>
                  </div>
                </div>
              </Link>
              {(!mobile || openMenu) && (
                <div className={navStyles.navMenu}>
                  <div className={navStyles.navLinkWrap}>
                    <Link
                      href='/painting-real-people'
                      className={nav.link}>
                      Painting Real People
                    </Link>
                    <Link
                      href='/shop'
                      className={nav.link}>
                      Shop
                    </Link>
                    <Link
                      href='/recents'
                      className={nav.link}>
                      Recents
                    </Link>
                    {/* <Link
                      href='/memberships'
                      className={navBackground.link}>
                      Memberships
                    </Link> */}
                    <Link
                      href='/about'
                      className={nav.link}>
                      About
                    </Link>
                    <Link
                      href='/support'
                      className={nav.link}>
                      Support
                    </Link>
                  </div>
                  {/* <div className={navStyles.navButtonsWrap}>
                    <div className={spacingStyles.rightPaddingXs}>
                      <Link
                        href='/auth/login'
                        className={textStyles.linkBlockWhiteOutline}>
                        Log in
                      </Link>
                    </div>
                    <Link
                      href='/auth/signup'
                      className={textStyles.linkBlockChartreuse}>
                      <div className={navStyles.buttonLabel}>Sign up</div>
                    </Link>
                  </div> */}

                  <div className={navStyles.cartWrap}>
                    <Link
                      href='/cart'
                      className={navStyles.navLink}>
                      <Image
                        src={bag}
                        alt='cart'
                        style={!nav.shop ? whiteBagStyle : null}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className={navStyles.mobileMenuWrap}>
              {!openMenu && mobile && (
                <CgMenuRight
                  className={navStyles.mobileMenuIcon}
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                />
              )}
              {openMenu && mobile && (
                <VscClose
                  className={navStyles.mobileMenuIcon}
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                />
              )}
            </div>
            {openMenu && mobile && (
              <div
                className={navStyles.clickOutWrap}
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}></div>
            )}
            {isShop && <NavSubMenu />}
          </nav>
          <div className={nav.navSpacer}></div>
          {loading && <Loading />}

          {children}
          {!loading && (
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
                  <form
                    className={ctaStyles.form}
                    style={inputStyles}>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className={ctaStyles.input}
                      autoComplete='email'
                    />
                    <button
                      type='submit'
                      className={ctaStyles.arrowButton}>
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
          )}
        </body>
      </LoadingContext.Provider>
    </html>
  );
}
