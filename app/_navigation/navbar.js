'use client';

// hooks
import { useContext, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// chakra-ui
import { Flex, useToast, useDisclosure, Box } from '@chakra-ui/react';

// local components
import Logo from '../_components/brandElements/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import NavSubMenu from './navSubMenu';

export default function Navbar() {
  const isMobile = useIsMobile();

  const pathname = usePathname();

  const isShop =
    pathname.indexOf('/shop') > -1 || pathname.indexOf('/cart') > -1;

  return (
    <Box background={'var(--darkGreen)'}>
      <Flex
        zIndex={1000}
        background={'var(--darkGreen)'}
        color={'inherit'}
        backdropFilter={'blur(10px) saturate(100%)'}
        position={'sticky'}
        top={'0'}
        w={'100%'}
        p={'1rem'}
        borderBottom={'1px solid var(--greenGray)'}>
        <Flex
          w={'100%'}
          align={'center'}
          color={'var(--white)'}
          justify={{ base: 'space-between' }}>
          <Logo color={'var(--lighterGreen)'} />
          {isMobile ? <MobileNav /> : <DesktopNav />}
        </Flex>
      </Flex>
      {isShop && <NavSubMenu />}
    </Box>
  );
}
