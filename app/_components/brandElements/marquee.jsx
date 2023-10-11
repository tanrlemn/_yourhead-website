'use client';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext } from 'react';

// components
import { Box, Flex, Text } from '@chakra-ui/react';

// local components
import Logo from './logo';

export default function Marquee({ delay = 0, color }) {
  const { loading } = useContext(LoadingContext);

  const delayStyle = {
    animationDelay: `${delay}s`,
  };
  const marquee = () => {
    const marqueeSpan = [];
    for (let i = 0; i < 9; i++) {
      marqueeSpan.push(
        <Box pr={'3rem'}>
          <Logo
            color={color}
            key={i}
            shouldLink={false}
            isOurHead={true}
          />
        </Box>
      );
    }
    return marqueeSpan;
  };

  return (
    <>
      {!loading && (
        <Flex
          className='marquee'
          style={delayStyle}>
          {marquee()}
        </Flex>
      )}
    </>
  );
}
