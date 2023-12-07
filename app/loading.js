'use client';

// chakra-ui
import { Box, Flex } from '@chakra-ui/react';

// local components
import GooeyBalls from './_components/icons/gooeyBalls';

export default function Loading() {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      position={'fixed'}
      top={'0'}
      left={'0'}
      width={'100vw'}
      height={'100vh'}
      background={'var(--darkBlue10)'}
      backdropFilter={'blur(5px)'}
      zIndex={'10000'}>
      <Box position={'relative'}>
        <GooeyBalls />
      </Box>
    </Flex>
  );
}
