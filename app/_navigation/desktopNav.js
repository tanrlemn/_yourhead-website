'use client';

// images
import Bag from '@/public/icons/bag';

// context
import { CartContext } from '../lib/context/CartProvider';

// hooks
import { useContext } from 'react';

// chakra-ui
import { Link, Box, Flex } from '@chakra-ui/react';

// local components
import { routes } from '../lib/utils/routes';

export default function DesktopNavbar() {
  const { numCartItems } = useContext(CartContext);

  return (
    <>
      <Flex align={'center'}>
        <Flex fontSize={'0.9rem'}>
          {routes
            .sort((a, b) => a.order - b.order)
            .map((route, i) => {
              return (
                <NavLink
                  key={i}
                  href={route.path}
                  ml={'1rem'}>
                  {route.name}
                </NavLink>
              );
            })}
        </Flex>

        <NavLink
          href='/cart'
          ml={'1rem'}>
          {numCartItems > 0 && <Box>{numCartItems}</Box>}
          <Bag color={'var(--white, #fff)'} />
        </NavLink>
      </Flex>
    </>
  );
}

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      fontSize={'1rem'}
      fontWeight={500}
      color={'var(--white)'}
      lineHeight={'1rem'}
      textDecoration={'none'}
      borderRadius={'2px'}
      _hover={{
        outline: '1px solid var(--midPurpleGray)',
        borderRadius: 'var(--mainBorderRadius)',
        textDecoration: 'none',
      }}
      transition={'all 0.1s ease-in-out'}
      p={'0.4rem 1rem'}
      {...props}>
      {children}
    </Link>
  );
};
