'use client';

// styles
import styles from './cart.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// context
import { CartContext } from '@/app/context/cartContext';

// api
import { createCheckoutSession } from '@/app/api/checkout/checkoutSession';

// hooks
import { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams, useRouter } from 'next/navigation';
import { useOrigin } from '@/app/api/hooks/useOrigin';

// components
import { Grid } from '@mui/material';
import CartItem from '@/app/components/cartItem';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Cart() {
  const { cart, numCartItems, addToCart, setNumCartItems, setNumItems } =
    useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);

  const searchParams = useSearchParams();
  const origin = useOrigin();
  const router = useRouter();

  const [checkoutSession, setCheckoutSession] = useState(null);

  useEffect(() => {
    if (searchParams.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (searchParams.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }

    if (checkoutSession) {
      router.push(checkoutSession);
    }

    if (cart.items && cart.items.length > 0) {
      setCartItems(cart.items);
    }

    if (cartItems.length !== numCartItems) {
      setCartItems(cart.items);
    }
  }, [searchParams, checkoutSession, router, cart, cartItems, numCartItems]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const getCheckoutSession = async () => {
      const res = await createCheckoutSession(origin);

      setCheckoutSession(res);
    };

    if (checkoutSession === null) {
      getCheckoutSession();
    }
  };

  const alignRight = {
    textAlign: 'right',
  };

  return (
    <div className={styles.cartWrap}>
      <div className={styles.cartProductsWrap}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='flex-start'>
          <Grid
            item
            xs={12}>
            <h1 className={textStyles.headingSm}>Shopping Bag</h1>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            className={styles.cartProductHeader}>
            <Grid
              item
              xs={3}></Grid>
            <Grid
              item
              xs={3}>
              <p className={textStyles.paragraphXs}>Item</p>
            </Grid>
            <Grid
              item
              xs={2}>
              <p
                className={textStyles.paragraphXs}
                style={alignRight}>
                Item Price
              </p>
            </Grid>
            <Grid
              item
              xs={2}>
              <p
                className={textStyles.paragraphXs}
                style={alignRight}>
                Quantity
              </p>
            </Grid>
            <Grid
              item
              xs={2}>
              <p
                className={textStyles.paragraphXs}
                style={alignRight}>
                Total Price
              </p>
            </Grid>
          </Grid>
          {cart &&
            cart.items &&
            cart.items.length > 0 &&
            cartItems.map((item) => {
              return (
                <Grid
                  item
                  key={item.product.id}
                  xs={12}>
                  <CartItem item={item} />
                </Grid>
              );
            })}
        </Grid>
      </div>

      <form onSubmit={(e) => handleCheckout(e)}>
        <section>
          <button type='submit'>Checkout</button>
        </section>
      </form>
    </div>
  );
}
