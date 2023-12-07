'use client';

// images
import bag from '@/public/icons/bag.svg';

// context
import { LoadingContext } from '../lib/context/LoadingProvider';
import { CartContext } from '../lib/context/CartProvider';

// hooks
import { useState, useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// components
import { Link, Image, Box } from '@chakra-ui/react';
import NavSubMenu from './navSubMenu';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function MobileNavbar() {
  const { cart, numCartItems } = useContext(CartContext);
  const { setLoading } = useContext(LoadingContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isShop =
    pathname.indexOf('/shop') > -1 || pathname.indexOf('/cart') > -1;

  const [openMenu, setOpenMenu] = useState(false);

  // effects
  useEffect(() => {
    setLoading(true);
    setOpenMenu(false);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {}, randomTime);
  }, [pathname, searchParams, isShop, numCartItems, cart, setLoading]);

  return (
    <>
      <Box>
        <Link href='/cart'>
          {numCartItems > 0 && <Box>{numCartItems}</Box>}
          <Image
            src={bag}
            alt='cart'
          />
        </Link>
      </Box>
      <Box>
        {!openMenu && (
          <HamburgerIcon
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        )}
        {openMenu && (
          <CloseIcon
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        )}
      </Box>
      {openMenu && (
        <Box
          onClick={() => {
            setOpenMenu(!openMenu);
          }}></Box>
      )}
      {isShop && <NavSubMenu />}
    </>
  );
}
