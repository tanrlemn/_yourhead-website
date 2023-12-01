// hooks
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// components
import { Flex, Link, Text, Box } from '@chakra-ui/react';
import Underscore from '../_components/brandElements/underscore';

export default function NavSubMenu() {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  const [refHeight, setRefHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setRefHeight(ref.current.offsetHeight);
  }, [ref]);

  const mobileLinkStyles = {
    padding: '0.5em 0',
  };

  return (
    <Flex
      background={'inherit'}
      position={'sticky'}
      w={'100%'}
      color={'var(--lightestGreen)'}
      align={'center'}>
      <Flex
        ref={ref}
        p={'0.3rem 2rem 0 2rem'}
        borderTop={'none'}
        align={'center'}>
        <Flex align={'flex-end'}>
          <Box pb={'0.4rem'}>
            <Underscore color={'var(--lightestOrange)'} />
          </Box>
          <Text
            color={'var(--lighterPurpleGray)'}
            fontWeight={700}
            mr={'1.5rem'}>
            Categories:
          </Text>
        </Flex>
        <SubNavLink
          href='/shop?category=prints'
          style={isMobile ? mobileLinkStyles : null}>
          Prints
        </SubNavLink>
        <SubNavLink
          href='/shop?category=originals'
          style={isMobile ? mobileLinkStyles : null}>
          Originals
        </SubNavLink>
        <SubNavLink
          href='/shop?category=apparel'
          style={isMobile ? mobileLinkStyles : null}>
          Apparel
        </SubNavLink>
        <SubNavLink
          href='/shop?category=music'
          style={isMobile ? mobileLinkStyles : null}>
          Music
        </SubNavLink>
        <SubNavLink
          href='/shop?category=sale'
          style={isMobile ? mobileLinkStyles : null}>
          Sale
        </SubNavLink>
        <SubNavLink
          href='/shop?category=all'
          style={isMobile ? mobileLinkStyles : null}>
          Shop all
        </SubNavLink>
      </Flex>
      <Box h={refHeight}></Box>
    </Flex>
  );
}

export function SubNavLink({ children, ...props }) {
  return (
    <Link
      fontWeight={400}
      _hover={{
        textDecoration: 'none',
        boxShadow: 'var(--blue-underline-shadow)',
      }}
      p={'0.5em 1em'}
      fontSize={'1rem'}
      mr={'2rem'}
      {...props}>
      {children}
    </Link>
  );
}
