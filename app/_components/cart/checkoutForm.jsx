'use client';

// context
import { CartContext } from '@/app/lib/context/CartProvider';
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useOrigin } from '@/app/lib/hooks/useOrigin';

// components
import {
  Button,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function CheckoutForm({ checkoutSession, setCheckoutSession }) {
  const { setLoading } = useContext(LoadingContext);

  const { cart, numCartItems, cartTotal } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(null);
  const [shipping, setShipping] = useState(null);
  const [tax, setTax] = useState(null);

  const origin = useOrigin();
  const router = useRouter();

  useEffect(() => {
    if (checkoutSession) {
      setLoading(true);

      router.push(checkoutSession);
    }
    if (subtotal === null || shipping === null || tax === null) {
      if (cartTotal) {
        setSubtotal(cartTotal.subtotal);
        setShipping(cartTotal.shipping);
        setTax(cartTotal.tax);
      }
    }
    if (cartTotal) {
      if (subtotal !== cartTotal.subtotal) {
        setSubtotal(cartTotal.subtotal);
        setShipping(cartTotal.shipping);
        setTax(cartTotal.tax);
      }
    }
    console.log('checkoutSession', checkoutSession);
  }, [
    cart,
    numCartItems,
    checkoutSession,
    router,
    cartTotal,
    shipping,
    tax,
    subtotal,
    setLoading,
  ]);

  const handleCheckout = async () => {
    const getCheckoutSession = async () => {
      const res = await fetch('/api/checkout/checkoutSession', {
        method: 'POST',
        body: JSON.stringify({
          origin: origin,
          cart: cart,
        }),
      });

      const sessionUrl = await res.json();
      console.log('sessionUrl', sessionUrl);

      setCheckoutSession(sessionUrl);
    };

    if (checkoutSession === null) {
      setLoading(true);

      getCheckoutSession();
    }
  };

  const alignRight = {
    textAlign: 'right',
  };

  return (
    <FormControl
      p={'1rem'}
      borderRadius={4}
      border={'var(--blue-light-border)'}>
      <Heading size={'md'}>Order Summary</Heading>
      <Divider m={'0.75rem 0'} />
      {subtotal !== null &&
        tax !== null &&
        shipping !== null &&
        cartTotal !== null && (
          <>
            <VStack
              mb={'1rem'}
              align={'flex-start'}
              w={'100%'}>
              <Flex
                w={'100%'}
                justify={'space-between'}>
                <Text>Subtotal</Text>
                <Text style={alignRight}>{`$${subtotal.toFixed(2)}`}</Text>
              </Flex>
              <Flex
                w={'100%'}
                justify={'space-between'}>
                <Text>Shipping</Text>
                <Text style={alignRight}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </Text>
              </Flex>
              <Flex
                w={'100%'}
                justify={'space-between'}>
                <Text>Estimated Tax</Text>
                <Text style={alignRight}>{`$${tax.toFixed(2)}`}</Text>
              </Flex>
              <Flex
                w={'100%'}
                justify={'space-between'}
                color={'var(--darkest-gray)'}
                fontWeight={600}>
                <Text>Total</Text>
                <Text style={alignRight}>{`$${cartTotal.total.toFixed(
                  2
                )}`}</Text>
              </Flex>
            </VStack>
            <Button
              w={'100%'}
              colorScheme={'blue'}
              onClick={(e) => handleCheckout(e)}>
              Proceed to Checkout
            </Button>
          </>
        )}
    </FormControl>
  );
}
