'use client';

// hooks
import { useState, useRef, useEffect } from 'react';
import { useAnimate } from 'framer-motion';

// chakra-ui
import { Image, Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function ArtworkCard({ artwork }) {
  const [scope, animate] = useAnimate();
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const hoveringAnimation = async () => {
      await animate(
        imageRef.current,
        {
          height: '89%',
          width: '100%',
        },
        { duration: 0.14 },
        { ease: 'easeInOut' }
      );

      await animate(
        textRef.current,
        {
          height: 'fit-content',
        },
        { ease: 'easeInOut' }
      );

      await animate(
        scope.current,
        {
          height: 'fit-content',
        },
        { ease: 'easeInOut' }
      );
    };

    const exitingAnimation = async () => {
      await animate(
        textRef.current,
        {
          height: 0,
        },
        { duration: 0.1 },
        { ease: 'easeInOut' }
      );

      await animate(
        imageRef.current,
        {
          height: '100%',
        },
        { duration: 0.17 },
        { ease: 'easeInOut' }
      );

      await animate(
        scope.current,
        {
          height: 'fit-content',
        },
        { ease: 'easeInOut' }
      );
    };

    const handleHover = () => {
      if (textRef.current && scope.current && imageRef.current) {
        hoveringAnimation();
      }
    };

    const handleLeave = () => {
      if (textRef.current && scope.current && imageRef.current) {
        exitingAnimation();
      }
    };

    if (scope.current) {
      scope.current.addEventListener('mouseenter', handleHover);
      scope.current.addEventListener('mouseleave', handleLeave);
    }

    return () => {
      if (scope.current) {
        scope.current.removeEventListener('mouseenter', handleHover);
        scope.current.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [scope.current, textRef.current]);

  return (
    <VStack
      position={'relative'}
      ref={scope}>
      <Box
        height={'100%'}
        width={'100%'}
        position={'relative'}
        overflow={'hidden'}>
        <Image
          ref={imageRef}
          objectFit={'cover'}
          objectPosition={'top'}
          src={artwork.image_url}
          alt={`${artwork.title} image`}
        />
      </Box>
      <VStack
        position={'absolute'}
        bottom={0}
        overflow={'hidden'}
        ref={textRef}
        h={0}
        textAlign={'center'}>
        <Heading
          m={0}
          p={0}
          mb={'-0.5rem'}
          size={'md'}>
          {artwork.title}
        </Heading>
        <Text>{artwork.description}</Text>
      </VStack>
    </VStack>
  );
}
