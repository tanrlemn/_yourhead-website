'use client';

// images
import bag from '@/public/icons/bag.svg';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';
import { CartContext } from '@/app/lib/providers/CartProvider';
import { ContactContext } from '@/app/lib/providers/ContactProvider';

// hooks
import { useState, useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// components
import Loading from '@/app/loading';
import { Link, Image, Box, Flex } from '@chakra-ui/react';

import DesktopNavbar from './_desktopnavBar';
import NavSubMenu from './navSubMenu';
import ContactBar from '@/app/_components/businessElements/contactSidebar';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import MobileNavbar from './_mobileNavbar';
import Logo from '@/app/_components/brandElements/logo';

export default function Navbar() {
  // context
  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { showContactBar, setShowContactBar } = useContext(ContactContext);

  // hooks
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();
  console.log('isMobile', isMobile);

  const isShop =
    pathname.indexOf('/shop') > -1 || pathname.indexOf('/cart') > -1;

  // state

  const [openMenu, setOpenMenu] = useState(false);

  // effects
  useEffect(() => {
    setLoading(false);
    setOpenMenu(false);
  }, [
    pathname,
    searchParams,
    isShop,
    isMobile,
    numCartItems,
    cart,
    setLoading,
  ]);

  return (
    <>
      {/* <ContactBar
          setShowContactBar={setShowContactBar}
          showContactBar={showContactBar}
        /> */}
      <Flex
        borderBottom={'var(--green-teal-mid-border)'}
        align={'center'}
        background={'var(--green-teal-mid-dark, #204f58)'}
        color={'var(--white, #fff)'}
        p={'1rem'}
        justify={'space-between'}
        minW={'100%'}>
        <Logo
          onClick={() => {
            setOpenMenu(false);
          }}
        />

        {!loading && isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </Flex>

      {isShop && <NavSubMenu />}
      {loading && <Loading />}
    </>
  );
}
