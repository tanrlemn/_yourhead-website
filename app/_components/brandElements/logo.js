'use client';

// chakra-ui
import { Flex, Heading, Link, Box } from '@chakra-ui/react';

// local components
import Underscore from '@/app/_components/brandElements/underscore.js';

export default function Logo({
  color,
  shouldLink = true,
  animate = false,
  isOurHead = false,
}) {
  return (
    <>
      {shouldLink ? (
        <Link
          display={'flex'}
          h={'fit-content'}
          mr={'1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}>
          <LogoContent
            color={color}
            shouldLink={shouldLink}
          />
        </Link>
      ) : (
        <LogoContent
          isOurHead={isOurHead}
          color={color}
          animate={animate}
          shouldLink={shouldLink}
        />
      )}
    </>
  );
}

export const LogoContent = ({ color, animate, isOurHead, shouldLink }) => {
  return (
    <Flex
      maxW={'fit-content'}
      borderRadius={'var(--mainBorderRadius)'}
      transition={'all 0.2s ease-in-out'}
      _hover={{
        outline: shouldLink ? '1px solid var(--midPurpleGray, #432E4C)' : '',
      }}
      minW={'fit-content'}
      align={'flex-end'}
      p={shouldLink ? '0.3125rem 1.4375rem' : ''}>
      <Heading
        className={animate && 'animateText'}
        color={color || 'var(--green-light, #b0eab9)'}
        fontWeight={600}
        mr={'0.125rem'}
        pb={'0.07rem'}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.04688rem'}
        textTransform={'lowercase'}
        fontSize={'1.5625rem'}>
        YOURHEAD
      </Heading>
      <Box
        className={animate && 'animateUnderscore'}
        pb={'0.3rem'}>
        <Underscore
          color={color?.underscore || 'var(--purple-light, #e2bff1)'}
        />
      </Box>
      {isOurHead && (
        <Heading
          className={animate && 'animateText'}
          color={color || 'var(--green-light, #b0eab9)'}
          fontWeight={600}
          mr={'0.125rem'}
          pb={'0.07rem'}
          lineHeight={'1.56288rem'}
          letterSpacing={'-0.04688rem'}
          textTransform={'lowercase'}
          fontSize={'1.5625rem'}>
          ISOURHEAD
        </Heading>
      )}
    </Flex>
  );
};
