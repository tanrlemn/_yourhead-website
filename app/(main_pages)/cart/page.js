'use client';

// styles
import styles from './cart.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// context
import { CartContext } from '@/app/context/cartContext';

// hooks
import { useState, useEffect, useContext } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useOrigin } from '@/app/api/hooks/useOrigin';
import { useIsMobile } from '@/app/api/hooks/useIsMobile';

// components
import { Grid } from '@mui/material';
import CartItem from '@/app/components/cartItem';
import CheckoutForm from '@/app/components/checkoutForm';

export default function Cart() {
  const { cart, numCartItems, addToCart, setNumCartItems, setNumItems } =
    useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const isMobile = useIsMobile();

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (searchParams.get('canceled')) {
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
  }, [searchParams, router, cart, cartItems, numCartItems]);

  const alignRight = {
    textAlign: 'right',
  };

  const mobileBorder = {
    borderBottom: 'var(--blue-light-border)',
  };

  return (
    <Grid
      container
      className={styles.cartWrap}>
      <Grid
        className={styles.cartProductsWrap}
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
            <div
              className={spacingStyles.bottomPaddingSm}
              style={isMobile ? mobileBorder : null}>
              <h1 className={textStyles.headingSm}>Shopping Bag</h1>
            </div>
          </Grid>
          {!isMobile && (
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              className={styles.cartProductHeader}>
              <Grid
                item
                mobile={4}></Grid>
              <Grid
                item
                mobile={3}>
                <p className={textStyles.paragraphXxs}>Item</p>
              </Grid>
              <Grid
                item
                mobile={1.5}>
                <p
                  className={textStyles.paragraphXxs}
                  style={alignRight}>
                  Item Price
                </p>
              </Grid>
              <Grid
                item
                mobile={2}>
                <p
                  className={textStyles.paragraphXxs}
                  style={alignRight}>
                  Quantity
                </p>
              </Grid>
              <Grid
                item
                mobile={1.5}>
                <p
                  className={textStyles.paragraphXxs}
                  style={alignRight}>
                  Total Price
                </p>
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
        </Grid>
      </Grid>
      <Grid
        item
        laptop={3}
        mobile={6}
        className={styles.summaryWrap}>
        <CheckoutForm />
      </Grid>
    </Grid>
  );
}
