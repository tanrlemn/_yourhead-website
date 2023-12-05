'use client';

// context
import { CartContext } from '@/app/lib/context/CartProvider';
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useState, useEffect, useContext, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// components
import { Grid } from '@chakra-ui/react';
import CartItem from '@/app/_components/cart/cartItem';
import CheckoutForm from '@/app/_components/cart/checkoutForm';
import Link from 'next/link';
import Loading from '@/app/loading';
import OrderSuccess from '@/app/_components/cart/orderSuccess';

export default function Cart() {
  const { loading, setLoading } = useContext(LoadingContext);

  const { cart, numCartItems, clearCart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const isMobile = useIsMobile();

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
    }

    if (cartItems.length !== numCartItems) {
      setCartItems(cart.items);
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
    <Suspense fallback={<Loading />}>
      {success && <OrderSuccess />}
      {!success && (
        <Grid container>
          <Grid
            item
            laptop={9}
            mobile={12}>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'>
              <Grid
                item
                mobile={12}>
                {numCartItems !== 0 && (
                  <div
                    style={
                      isMobile
                        ? mobileBorder
                        : numCartItems > 0
                        ? null
                        : mobileBorder
                    }>
                    <h1>Shopping Bag</h1>
                  </div>
                )}
              </Grid>
              {numCartItems > 0 && (
                <>
                  {!isMobile && (
                    <Grid
                      container
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'>
                      <Grid
                        item
                        mobile={4}></Grid>
                      <Grid
                        item
                        mobile={3}>
                        <p>Item</p>
                      </Grid>
                      <Grid
                        item
                        mobile={1.5}>
                        <p style={alignRight}>Item Price</p>
                      </Grid>
                      <Grid
                        item
                        mobile={2}>
                        <p style={alignRight}>Quantity</p>
                      </Grid>
                      <Grid
                        item
                        mobile={1.5}>
                        <p style={alignRight}>Total Price</p>
                      </Grid>
                    </Grid>
                  )}
                  {cart &&
                    cart.items &&
                    cart.items.length > 0 &&
                    cartItems.map((item) => {
                      return (
                        <Grid
                          item
                          key={item.product.id}
                          mobile={12}>
                          <CartItem item={item} />
                        </Grid>
                      );
                    })}
                </>
              )}
              {!loading && numCartItems === 0 && (
                <div>
                  <div>
                    <LoadingDiv />
                    <div>
                      <h2>Nothing here...</h2>
                    </div>
                    <p>Your shopping bag is empty!</p>

                    <div>
                      <Link href='/shop'>Fill your bag</Link>
                    </div>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
          {numCartItems > 0 && (
            <Grid
              item
              laptop={3}
              tablet={6}
              mobile={12}>
              <CheckoutForm />
            </Grid>
          )}
        </Grid>
      )}
    </Suspense>
  );
}
