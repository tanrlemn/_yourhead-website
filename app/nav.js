'use client';

import navStyles from './styles/nav.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';
import ctaStyles from './styles/(component_styles)/cta.module.css';

// images
import { VscClose } from 'react-icons/vsc';
import { CgMenuRight } from 'react-icons/cg';
import bag from '../public/icons/bag.svg';

// context
import { LoadingContext } from './context/loadingContext';
import { CartContext } from './context/cartContext';

// hooks
import { useState, useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from './api/hooks/useWindowSize';

// components
import Loading from './loading';
import Link from 'next/link';
import Image from 'next/image';
import RainbowLetters from './components/rainbowLetters';
import NavSubMenu from './components/navSubMenu';

export default function Nav() {
  // context
  const { cart, numCartItems, setNumCartItems, setNumItems } =
    useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);

  // hooks
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const isShop = pathname.indexOf('/shop') > -1;

  // state

  const [openMenu, setOpenMenu] = useState(false);

  const [nav, setNav] = useState({
    background: navStyles.navWrapper,
    link: navStyles.navLink,
    shop: isShop,
    brand: navStyles.brandTitle,
  });

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
  }, [
    pathname,
    searchParams,
    isShop,
    isMobile,
    numCartItems,
    cart,
    setLoading,
  ]);

  // styles

  const whiteBagStyle = {
    filter: 'invert(1) sepia(1) saturate(1) hue-rotate(180deg)',
  };

  const iconStyle = {
    filter: 'invert(0) sepia(0) saturate(0) hue-rotate(0deg)',
  };

  return (
    <>
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
                {/* <Link
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        href='/memberships'
                        className={isMobile ? navStyles.navLink : nav.link}>
                        Memberships
                      </Link> */}
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
                  {numCartItems > 0 && (
                    <div className={navStyles.cartLabel}>{numCartItems}</div>
                  )}
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
    </>
  );
}
