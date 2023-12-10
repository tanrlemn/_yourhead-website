'use client';

// chakra-ui
import { Flex, Image } from '@chakra-ui/react';

export default function HeroImage({ mr, ...props }) {
  return (
    <Flex
      alignItems={'center'}
      overflow={'hidden'}
      mr={mr}
      borderRadius={'9px'}
      maxH={{ base: '100%', md: '17rem' }}
      w={{ base: '100%', md: '22rem' }}
      maxW={{ base: '100%', md: '22rem' }}>
      <Image
        {...props}
        pt={'20%'}
      />
    </Flex>
  );
}
