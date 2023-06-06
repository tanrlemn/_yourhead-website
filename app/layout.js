'use client';

import './globals.css';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useWindowSize } from './hooks/useWindowSize';
import { BsArrowRight } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { CgMenuRight } from 'react-icons/cg';
import navStyles from './nav.module.css';
import textStyles from './text.module.css';
import spacingStyles from './spacing.module.css';
import ctaStyles from './components/componentStyles/cta.module.css';
import Marquee from './components/marquee';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import RainbowLetters from './utils/rainbowLetters';
import { LoadingContext } from './loadingContext';
import Loading from './loading';
import { AnimationsContext } from './animationsContext';
import ToggleAnimations from './components/toggleAnimations';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const value = { loading, setLoading };

  const [showAnimations, setShowAnimations] = useState(true);
  const animationsValue = { showAnimations, setShowAnimations };

  const mobile = useWindowSize();

  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setOpenMenu(false);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname]);

  const inputStyles = {
    background: '#eee',
  };

  return (
    <html lang='en'>
      <AnimationsContext.Provider value={animationsValue}>
        <LoadingContext.Provider value={value}>
          <body className={inter.className}>
            <nav className={navStyles.navWrapper}>
              <div className={navStyles.innerNav}>
                <Link href='/' className={navStyles.brandBlock}>
                  <div className={navStyles.brandTitle}>
                    <RainbowLetters string='YOURHEAD' />
                  </div>
                </Link>
                {(!mobile || openMenu) && (
                  <div className={navStyles.navMenu}>
                    <div className={navStyles.navLinkWrap}>
                      <Link
                        href='/painting-real-people'
                        className={navStyles.navLink}>
                        Painting Real People
                      </Link>
                      <Link href='/shop' className={navStyles.navLink}>
                        Shop
                      </Link>
                      <Link href='/recents' className={navStyles.navLink}>
                        Recents
                      </Link>
                      <Link href='/memberships' className={navStyles.navLink}>
                        Memberships
                      </Link>
                      <Link href='/about' className={navStyles.navLink}>
                        About
                      </Link>
                      <Link href='/support' className={navStyles.navLink}>
                        Support
                      </Link>
                    </div>
                    <div className={navStyles.navButtonsWrap}>
                      <div className={spacingStyles.rightPaddingXs}>
                        <Link
                          href='/sign-in'
                          className={textStyles.linkBlockWhiteOutline}>
                          Log in
                        </Link>
                      </div>
                      <Link
                        href='/sign-up'
                        className={textStyles.linkBlockChartreuse}>
                        <div className={navStyles.buttonLabel}>Sign up</div>
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
            </nav>
            <div className={navStyles.navSpacer}></div>
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
                      <div className={textStyles.footerHeading}>
                        Commissions
                      </div>
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
      </AnimationsContext.Provider>
    </html>
  );
}
