'use client';

// chakra-ui
import { Flex, Image } from '@chakra-ui/react';

export default function MainImage({ ...props }) {
  return (
    <Flex
      alignItems={'center'}
      overflow={'hidden'}
      borderRadius={'0.3rem'}
      maxW={{ base: '100%', md: '17rem' }}>
      <Image {...props} />
    </Flex>
  );
}
