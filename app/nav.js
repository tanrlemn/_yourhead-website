'use client';

import navStyles from './styles/nav.module.css';
import spacingStyles from './styles/spacing.module.css';

// images
import { VscClose } from 'react-icons/vsc';
import { CgMenuRight } from 'react-icons/cg';

// context
import { LoadingContext } from './context/loadingContext';
import { CartContext } from './context/cartContext';
import { ContactContext } from './context/contactContext';

// hooks
import { useState, useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from './api/hooks/useWindowSize';

// components
import Loading from './loading';
import Link from 'next/link';
import ContactBar from './components/contactSidebar';

export default function Nav() {
  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { showContactBar, setShowContactBar } = useContext(ContactContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setLoading(true);
    setOpenMenu(false);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname, searchParams, isMobile, numCartItems, cart, setLoading]);

  // styles

  const iconStyle = {
    filter: 'invert(0) sepia(0) saturate(0) hue-rotate(0deg)',
  };

  const sideBarStyle = {
    left: showContactBar ? '0' : '-100vw',
  };

  return (
    <>
      <nav className={navStyles.navWrapper}>
        <ContactBar
          style={sideBarStyle}
          setShowContactBar={setShowContactBar}
          showContactBar={showContactBar}
        />
        <div className={navStyles.innerNav}>
          <Link
            onClick={() => {
              setOpenMenu(false);
            }}
            href='/'
            className={navStyles.brandBlock}>
            <div className={navStyles.brandTitle}>
              <div className={spacingStyles.blueUnderscoreWrap}>
                <div>YOURHEAD</div>
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
                  className={navStyles.navLink}>
                  Home
                </Link>
                <Link
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  href='/selected-works'
                  className={navStyles.navLink}>
                  Selected Works
                </Link>
                <Link
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  href='/resume'
                  className={navStyles.navLink}>
                  Resume
                </Link>
                <div
                  onClick={() => {
                    setOpenMenu(false);
                    setShowContactBar(true);
                  }}
                  className={navStyles.navLink}>
                  Contact
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={navStyles.mobileMenuWrap}>
          {!openMenu && isMobile && (
            <CgMenuRight
              className={navStyles.mobileMenuIcon}
              style={iconStyle}
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
      </nav>
      <div className={navStyles.navSpacer}></div>
      {loading && <Loading />}
    </>
  );
}
