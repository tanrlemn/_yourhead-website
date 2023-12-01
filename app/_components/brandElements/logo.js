'use client';

// chakra-ui
import { Flex, Heading, Link, Box } from '@chakra-ui/react';

// local components
import Underscore from './underscore';

export default function Logo({
  color = 'var(--white)',
  shouldLink = true,
  animate = false,
  isDesktop = false,
}) {
  return (
    <>
      {shouldLink ? (
        <Link
          pt={isDesktop ? 0 : '0.2rem'}
          mr={isDesktop ? 0 : '1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}>
          <LogoContent color={color} />
        </Link>
      ) : (
        <LogoContent
          color={color}
          animate={animate}
        />
      )}
    </>
  );
}

export const LogoContent = ({ color, animate }) => {
  return (
    <Flex
      maxW={'fit-content'}
      minW={'fit-content'}
      pt={'0.2rem'}
      color={color}
      borderRadius={'var(--mainBorderRadius)'}
      transition={'all 0.2s ease-in-out'}
      _hover={{
        outline: '1px solid var(--midPurpleGray)',
      }}
      align={'flex-end'}
      p={'0.3125rem 1.4375rem'}>
      <Heading
        mr={'0.125rem'}
        className={animate && 'animateText'}
        color={color}
        fontWeight={700}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.02688rem'}
        size={'md'}>
        YOURHEAD
      </Heading>
      <Box
        pb={'0.3rem'}
        className={animate && 'animateUnderscore'}>
        <Underscore color={color?.underscore || 'var(--orange, #FF7300)'} />
      </Box>
    </Flex>
  );
};
