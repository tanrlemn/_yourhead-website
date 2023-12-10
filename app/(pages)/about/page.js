'use client';

// images
import tanner from '@/public/images/people/tanner.webp';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';

// local components
import MainImage from '@/app/_components/images/mainImage';

export default function About() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Box
      background={'var(--darkerGreen)'}
      color={'var(--lighterGray)'}
      p={'2rem'}
      pt={'10rem'}>
      <Box
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <VStack>
          <Flex
            mb={'4rem'}
            w={'100%'}
            justify={'space-between'}>
            <Heading size={'4xl'}>About</Heading>
            <Heading
              maxW={'550px'}
              fontWeight={500}
              size={'lg'}>
              YOURHEAD is an artist with a mission to help people heal. The art
              is used as a tool to help people understand each other and
              themselves, including YOURHEAD.
            </Heading>
          </Flex>
          <Box>
            <Image src='https://i.imgur.com/SvPsBfo.jpg' />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
