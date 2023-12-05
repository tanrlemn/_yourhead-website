'use client';

// context
import { LoadingContext } from '../lib/context/LoadingProvider';

// hooks
import { useContext } from 'react';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Footer({ showContactBar, setShowContactBar }) {
  const { loading } = useContext(LoadingContext);

  // styles
  const inputStyles = {
    background: '#eee',
  };
  return (
    <>
      <footer style={{ background: 'var(--lightestBlue)' }}>
        <Flex p={'7rem 2rem 5rem 2rem'}>
          <Stack
            maxW={'25rem'}
            mr={'7rem'}>
            <Heading
              size={'md'}
              color={'var(--orange)'}>
              _YOURHEAD
            </Heading>
            <Text>
              YOURHEAD is an oil painter, focusing on portraiture and the unique
              perspective of the human experience.
            </Text>
            <Flex>
              <Input
                border={'1px solid var(--midPurpleGray)'}
                mr={'0.5rem'}
                type='email'
                placeholder='Enter your email'
                autoComplete='email'
              />
              <Button
                _hover={{ outline: '1px solid var(--lightOrange)' }}
                background={'var(--lightOrange)'}
                type='submit'
                rightIcon={<ArrowForwardIcon />}>
                Sign up
              </Button>
            </Flex>
          </Stack>
          <Flex gap={'3rem'}>
            <Box>
              <Heading
                size={'md'}
                mb={'0.5rem'}>
                The Artist
              </Heading>
              <Stack gap={0}>
                <Link href='/gallery'>Gallery</Link>
                <Link href='/about'>About</Link>
              </Stack>
            </Box>
            <Box>
              <Heading
                size={'md'}
                mb={'0.5rem'}>
                Shop
              </Heading>
              <Stack gap={0}>
                <Link href='/subscriptions'>Subscriptions</Link>
                <Link href='/commissions'>Commissions</Link>
                <Link href='/shop?category=prints'>Prints</Link>
                <Link href='/shop?category=originals'>Originals</Link>
              </Stack>
            </Box>

            <Box>
              <Heading
                size={'md'}
                mb={'0.5rem'}>
                Support
              </Heading>
              <Stack gap={0}>
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    setShowContactBar(true);
                  }}>
                  Contact
                </Text>
                <Link href='/support/faqs'>FAQs</Link>
              </Stack>
            </Box>
          </Flex>
        </Flex>

        <Box p={'2rem 1rem 1rem 1rem'}>
          <Text fontSize={'0.8rem'}>© 2024 YOURHEAD, All Rights reserved</Text>
        </Box>
      </footer>
    </>
  );
}
