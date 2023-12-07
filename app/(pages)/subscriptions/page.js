'use client';

// chakra-ui
import { Box, Heading, VStack } from '@chakra-ui/react';

// local components
import StripePricingTable from '@/app/_components/products/stripePricingTable';
import Logo from '@/app/_components/brandElements/logo';

export default function Subscriptions() {
  return (
    <Box
      p={'4rem 0'}
      background={'#afd8f2'}>
      <VStack>
        <Heading
          size={'sm'}
          color={'var(--darkGray)'}>
          YOURHEAD
        </Heading>
        <Heading
          mb={'2rem'}
          textAlign={'center'}>
          Subscriptions
        </Heading>
      </VStack>
      <StripePricingTable />
    </Box>
  );
}
