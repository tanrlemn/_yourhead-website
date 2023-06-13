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
import { CartContext } from './context/cartContext';

// hooks
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from './api/hooks/useWindowSize';

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

  // state
  const [cart, setCart] = useState([]);
  const cartValue = { cart, setCart };

  const isShop = pathname.indexOf('/shop') > -1;

  const [nav, setNav] = useState({
    background: navStyles.navWrapper,
    link: navStyles.navLink,
    shop: isShop,
    brand: navStyles.brandTitle,
  });

  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useIsMobile();

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
  }, [pathname, searchParams, isShop, isMobile, cart]);

  // styles
  const inputStyles = {
    background: '#eee',
  };

  const whiteBagStyle = {
    filter: 'invert(1) sepia(1) saturate(1) hue-rotate(180deg)',
  };

  const iconStyle = {
    filter: 'invert(0) sepia(0) saturate(0) hue-rotate(0deg)',
  };

  // render
  return (
    <html lang='en'>
      <LoadingContext.Provider value={loadingValue}>
        <CartContext.Provider value={cartValue}>
          <body className={inter.className}>
            <script
              src='https://accounts.google.com/gsi/client'
              async
              defer></script>
            <nav className={nav.background}>
              <div className={navStyles.innerNav}>
                <Link
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  href='/'
                  className={navStyles.brandBlock}>
                  <div className={nav.brand}>
                    <div className={spacingStyles.blueUnderscoreWrap}>
                      <RainbowLetters string='YOURHEAD' />
                      <div className={spacingStyles.blueUnderscoreSm}></div>
                    </div>
                  </div>
                </Link>
                {(!isMobile || openMenu) && (
                  <div className={navStyles.navMenu}>
                    <div className={navStyles.navLinkWrap}>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        Home
                      </Link>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/painting-real-people'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        Painting Real People
                      </Link>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/shop'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        Shop
                      </Link>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/recents'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        Recents
                      </Link>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/memberships'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        Memberships
                      </Link>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/about'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        About
                      </Link>
                      <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/support'
                        className={isMobile ? navStyles.navLink : nav.link}>
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
                {!openMenu && isMobile && (
                  <CgMenuRight
                    className={navStyles.mobileMenuIcon}
                    style={isShop ? iconStyle : null}
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  />
                )}
                {openMenu && isMobile && (
                  <VscClose
                    className={navStyles.mobileMenuIcon}
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  />
                )}
              </div>
              {openMenu && isMobile && (
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
                        YOURHEAD is a portrait painter, offering a unique style
                        at affordable prices.
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
                          <Link href='/about'>About</Link>
                        </li>
                        <li className={navStyles.footerLink}>
                          <Link href='/memberships'>Memberships</Link>
                        </li>
                      </ul>
                    </div>
                    <div className={navStyles.footerColumn}>
                      <div className={textStyles.footerHeading}>Shop</div>
                      <ul className={navStyles.footerList}>
                        <li className={navStyles.footerLink}>
                          <Link href='/shop?category=prints'>Prints</Link>
                        </li>
                        <li className={navStyles.footerLink}>
                          <Link href='/shop?category=originals'>Originals</Link>
                        </li>
                      </ul>
                    </div>
                    <div className={navStyles.footerColumn}>
                      <div className={textStyles.footerHeading}>Works</div>
                      <ul className={navStyles.footerList}>
                        <li className={navStyles.footerLink}>
                          <Link href='/recents'>Recents</Link>
                        </li>
                        <li className={navStyles.footerLink}>
                          <Link href='/music'>Music</Link>
                        </li>
                      </ul>
                    </div>
                    <div className={navStyles.footerColumn}>
                      <div className={textStyles.footerHeading}>Support</div>
                      <ul className={navStyles.footerList}>
                        <li className={navStyles.footerLink}>
                          <Link href='/support/contact'>Contact</Link>
                        </li>
                        <li className={navStyles.footerLink}>
                          <Link href='/support/faqs'>FAQs</Link>
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
        </CartContext.Provider>
      </LoadingContext.Provider>
    </html>
  );
}
