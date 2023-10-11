'use client';

// images
import whalerider from '@/public/images/paintingRealPeople/whalerider.webp';
import donut from '@/public/images/paintingRealPeople/donut.webp';
import owner from '@/public/images/findingYourhead/owner.webp';
import bliss from '@/public/images/findingYourhead/bliss.webp';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// components
import {
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Stack,
  Button,
  Skeleton,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

// local components
import LoadingDiv from '@/app/_components/loadingDiv';

export default function Home() {
  const { loading, setLoading } = useContext(LoadingContext);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const mobile = useIsMobile();

  return (
    <Flex
      color={'var(--white)'}
      align={'center'}
      background={'var(--darkGreen)'}>
      <Stack
        maxW={{ base: '100%', md: '500px' }}
        p={'2rem'}
        mb={'4rem'}>
        {!loading && <LoadingDiv />}
        <Heading
          size={'4xl'}
          fontWeight={800}>
          artist.
        </Heading>
        <Text mb={'1rem'}>
          We could pretend that we don&apos;t know each other, that we
          aren&apos;t real. But maybe let&apos;s paint portraits just to make
          sure.
        </Text>
        <Flex>
          <Button
            _hover={{
              outline: '1px solid var(--lightOrange, #F8AD4F)',
              borderRadius: 'var(--mainBorderRadius)',
            }}
            onClick={() => router.push('/shop')}
            mr={'1rem'}
            rightIcon={<ArrowForwardIcon />}
            background={'var(--lightGreen)'}>
            View shop
          </Button>
          <Button
            onClick={() => router.push('/about')}
            _hover={{
              outline: '1px solid var(--lightOrange, #F8AD4F)',
              borderRadius: 'var(--mainBorderRadius)',
            }}
            variant={'ghost'}
            color={'var(--chartreuse-lightest)'}>
            Learn more
          </Button>
        </Flex>
      </Stack>
      <Stack
        m={'1rem'}
        mr={'-7rem'}
        background={'var(--greenGray)'}
        p={'1rem'}
        borderRadius={'9px'}>
        <Flex mb={'0.5rem'}>
          <Skeleton
            isLoaded={!loading}
            mr={'1rem'}
            h={{ base: '100%', md: '17rem' }}
            w={{ base: '100%', md: '22rem' }}>
            <HeroImage
              src={donut.src}
              alt='Donut painting'
              mr={'1rem'}
            />
          </Skeleton>
          <Skeleton
            isLoaded={!loading}
            h={{ base: '100%', md: '17rem' }}
            w={{ base: '100%', md: '22rem' }}>
            <HeroImage
              src={bliss.src}
              alt='Bliss painting'
              mr={'0'}
            />
          </Skeleton>
        </Flex>
        <Flex>
          <Skeleton
            mr={'1rem'}
            isLoaded={!loading}
            h={{ base: '100%', md: '17rem' }}
            w={{ base: '100%', md: '22rem' }}>
            <HeroImage
              src={owner.src}
              alt='Owner painting'
              mr={'1rem'}
            />
          </Skeleton>
          <Skeleton
            isLoaded={!loading}
            h={{ base: '100%', md: '17rem' }}
            w={{ base: '100%', md: '22rem' }}>
            <HeroImage
              src={whalerider.src}
              alt='Whalerider painting'
              mr={'0'}
            />
          </Skeleton>
        </Flex>
      </Stack>
    </Flex>
  );
}

export function HeroImage({ mr, ...props }) {
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
