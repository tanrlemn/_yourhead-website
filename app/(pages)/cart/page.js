'use client';

// context
import { CartContext } from '@/app/lib/context/CartProvider';
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useState, useEffect, useContext } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// chakra-ui
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

// local components
import CartItem from '@/app/_components/cart/cartItem';
import CheckoutForm from '@/app/_components/cart/checkoutForm';
import LoadingDiv from '@/app/_components/utils/loadingDiv';
import OrderSuccess from '@/app/_components/cart/orderSuccess';

export default function Cart() {
  const { loading, setLoading } = useContext(LoadingContext);
  const isMobile = useIsMobile();

  const { cart, numCartItems, clearCart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [checkoutSession, setCheckoutSession] = useState(null);

  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('success')) {
      if (!success) {
        clearCart();
        setSuccess(true);
      }
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (searchParams.get('canceled')) {
      router.replace('/cart');
      setSuccess(false);

      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }

    if (cart.items && cart.items.length > 0) {
      setCartItems(cart.items);
      setLoading(false);
    }

    if (cartItems.length !== numCartItems) {
      setCartItems(cart.items);
      setLoading(false);
    }
  }, [
    searchParams,
    router,
    cart,
    cartItems,
    numCartItems,
    clearCart,
    success,
    setLoading,
    loading,
  ]);

  const alignRight = {
    textAlign: 'right',
  };

  const mobileBorder = {
    borderBottom: 'var(--blue-light-border)',
  };

  return (
    <>
      {success && <OrderSuccess />}
      {!success && (
        <Flex
          w={'100%'}
          p={'2rem'}>
          <Box
            flexGrow={1}
            mr={'2rem'}>
            <Box w={'100%'}>
              <Box w={'100%'}>
                {numCartItems !== 0 && (
                  <Box
                    mb={'1rem'}
                    style={
                      isMobile
                        ? mobileBorder
                        : numCartItems > 0
                        ? null
                        : mobileBorder
                    }>
                    <Heading>Shopping Bag</Heading>
                  </Box>
                )}
              </Box>
              {numCartItems > 0 && (
                <>
                  {!isMobile && (
                    <Grid
                      borderBottom={'var(--blue-light-border)'}
                      mb={'1rem'}
                      templateColumns={'1fr 2fr repeat(3, 1fr)'}
                      gap={5}
                      w={'100%'}
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'>
                      <GridItem w={'100%'}></GridItem>
                      <GridItem w={'100%'}>
                        <Text>Item</Text>
                      </GridItem>
                      <GridItem w={'100%'}>
                        <Text style={alignRight}>Item Price</Text>
                      </GridItem>
                      <GridItem w={'100%'}>
                        <Text style={alignRight}>Quantity</Text>
                      </GridItem>
                      <GridItem w={'100%'}>
                        <Text style={alignRight}>Total Price</Text>
                      </GridItem>
                    </Grid>
                  )}
                  {cart &&
                    cart.items &&
                    cart.items.length > 0 &&
                    cartItems.map((item) => {
                      return (
                        <GridItem
                          borderBottom={'var(--blue-light-border)'}
                          pb={'1rem'}
                          mb={'1rem'}
                          key={item.product.id}
                          mobile={12}>
                          <CartItem item={item} />
                        </GridItem>
                      );
                    })}
                </>
              )}
              {numCartItems === 0 && (
                <Box m={'2rem'}>
                  <LoadingDiv />
                  <Heading mt={'1rem'}>Nothing here...</Heading>
                  <Text>Your shopping bag is empty!</Text>

                  <Button
                    mt={'1rem'}
                    colorScheme={'blue'}
                    onClick={() => {
                      setLoading(true);
                      router.push('/shop');
                    }}>
                    Fill your bag
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
          {numCartItems > 0 && (
            <Box minW={'15rem'}>
              <CheckoutForm
                checkoutSession={checkoutSession}
                setCheckoutSession={setCheckoutSession}
              />
            </Box>
          )}
        </Flex>
      )}
    </>
  );
}
