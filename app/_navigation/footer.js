'use client';

// context
import { LoadingContext } from '../lib/providers/LoadingProvider';

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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

// local components
import Marquee from '../_components/brandElements/marquee';
import Link from 'next/link';
import Logo from '../_components/brandElements/logo';

export default function Footer({ showContactBar, setShowContactBar }) {
  const { loading } = useContext(LoadingContext);

  // styles
  const inputStyles = {
    background: '#eee',
  };
  return (
    <>
      {!loading && (
        <footer style={{ background: 'var(--lightestBlue)' }}>
          <Flex p={'7rem 2rem 5rem 2rem'}>
            <Stack
              maxW={'25rem'}
              mr={'7rem'}>
              <Logo
                color={'var(--orange)'}
                shouldLink={false}
              />
              <Text>
                YOURHEAD is a painter, musician, and innovator, offering a
                unique style and approach to all aspects of life.
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
                  <Link href='/about'>About</Link>
                  <Link href='/commissions'>Commissions</Link>
                </Stack>
              </Box>
              <Box>
                <Heading
                  size={'md'}
                  mb={'0.5rem'}>
                  Shop
                </Heading>
                <Stack gap={0}>
                  <Link href='/shop?category=prints'>Prints</Link>
                  <Link href='/shop?category=originals'>Originals</Link>
                </Stack>
              </Box>
              <Box>
                <Heading
                  size={'md'}
                  mb={'0.5rem'}>
                  Works
                </Heading>
                <Stack gap={0}>
                  <Link href='/recents'>Recents</Link>
                  <Link href='/music'>Music</Link>
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
          <Box
            p={'2rem'}
            borderTop={'var(--blue-light-border-2)'}
            borderBottom={'var(--blue-light-border-2)'}>
            <Marquee
              delay={-20}
              color={'var(--midLightBlue)'}
            />
          </Box>
          <Box p={'2rem 1rem 1rem 1rem'}>
            <Text fontSize={'0.8rem'}>
              © 2023 YOURHEAD, All Rights reserved
            </Text>
          </Box>
        </footer>
      )}
    </>
  );
}
