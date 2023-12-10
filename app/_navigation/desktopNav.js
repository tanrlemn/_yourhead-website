'use client';

// images
import Bag from '@/public/icons/bag';

// context
import { CartContext } from '../lib/context/CartProvider';

// hooks
import { useContext } from 'react';

// chakra-ui
import { Link, Box, Flex, Text } from '@chakra-ui/react';

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
          <Flex>
            <Bag color={'var(--white, #fff)'} />
            {numCartItems > 0 && (
              <Flex
                top={0}
                left={'0.4rem'}
                w={'1rem'}
                h={'1rem'}
                align={'center'}
                justify={'center'}
                background={'var(--chartreuse)'}
                borderRadius={'100px'}>
                <Text
                  color={'var(--darkGreen)'}
                  lineHeight={1}
                  fontSize={'0.75rem'}
                  fontWeight={600}>
                  {numCartItems}
                </Text>
              </Flex>
            )}
          </Flex>
        </NavLink>
      </Flex>
    </>
  );
}

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      position={'relative'}
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
