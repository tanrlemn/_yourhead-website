'use client';

// images
import Bag from '@/public/icons/bag';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';
import { CartContext } from '@/app/lib/providers/CartProvider';

// hooks
import { useEffect, useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// components
import { Link, Image, Box, Flex } from '@chakra-ui/react';
import NavSubMenu from './navSubMenu';

export default function DesktopNavbar() {
  const { cart, numCartItems } = useContext(CartContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isShop =
    pathname.indexOf('/shop') > -1 || pathname.indexOf('/cart') > -1;

  useEffect(() => {
    setLoading(true);

    const randomTime = Math.random() * (1700 - 500) + 500;
    setTimeout(() => {
      setLoading(false);
    }, randomTime);
  }, [pathname, searchParams, isShop, numCartItems, cart, setLoading]);

  return (
    <>
      <Flex align={'center'}>
        <Flex fontSize={'0.9rem'}>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/shop'>Shop</NavLink>
          <NavLink href='/about'>About</NavLink>
          <NavLink
            cursor={'pointer'}
            onClick={() => {
              setOpenMenu(false);
              setShowContactBar(true);
            }}>
            Contact
          </NavLink>
        </Flex>

        <NavLink
          href='/cart'
          ml={'1rem'}>
          {numCartItems > 0 && <Box>{numCartItems}</Box>}
          <Bag color={'var(--white, #fff)'} />
        </NavLink>
      </Flex>

      {isShop && <NavSubMenu />}
    </>
  );
}

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      borderRadius={'2px'}
      _hover={{
        outline: '1px solid var(--lightOrange, #F8AD4F)',
        borderRadius: 'var(--mainBorderRadius)',
      }}
      transition={'all 0.2s ease-in-out'}
      p={'0.5625rem 1.25rem'}
      {...props}>
      {children}
    </Link>
  );
};
