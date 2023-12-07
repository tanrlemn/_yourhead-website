'use client';

// chakra-ui
import { Box } from '@chakra-ui/react';

// local components
import StripePricingTable from '@/app/_components/products/stripePricingTable';

export default function Subscriptions() {
  return (
    <Box
      p={'4rem 0'}
      background={'#afd8f2'}>
      <StripePricingTable />
    </Box>
  );
}
