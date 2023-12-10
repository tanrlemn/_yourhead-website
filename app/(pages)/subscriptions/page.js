'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import { Box, Divider, Heading, VStack } from '@chakra-ui/react';

// local components
import StripeHigherPricingTable from '@/app/_components/products/stripeHigherPricingTable';
import StripeLowerPricingTable from '@/app/_components/products/stripeLowerPricingTable';

export default function Subscriptions() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Box
      p={'4rem 2rem'}
      background={'#afd8f2'}>
      <Box
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <VStack>
          <Heading
            size={'sm'}
            color={'var(--darkGray)'}>
            YOURHEAD
          </Heading>
          <Heading
            background={'#afd8f2'}
            position={'sticky'}
            w={'100%'}
            h={'fit-content'}
            top={'19rem'}
            mb={'2rem'}
            textAlign={'center'}>
            Premium Subscriptions
          </Heading>
        </VStack>
        <StripeHigherPricingTable />
      </Box>
      <Divider
        mb={'4rem'}
        borderColor={'var(--darkBlue50)'}
      />
      <Box
        h={'fit-content'}
        mb={'5rem'}>
        <VStack>
          <Heading
            background={'#afd8f2'}
            position={'sticky'}
            top={'0'}
            size={'md'}
            mb={'2rem'}
            textAlign={'center'}>
            Basic Subscriptions
          </Heading>
        </VStack>
        <StripeLowerPricingTable />
      </Box>
    </Box>
  );
}
