'use client';

// styles
import styles from '@/app/styles/(component_styles)/checkoutForm.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// api
import { createCheckoutSession } from '@/app/api/checkout/checkoutSession';

// context
import { CartContext } from '@/app/context/cartContext';

// hooks
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { useOrigin } from '@/app/api/hooks/useOrigin';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutForm() {
  const { cart, numCartItems, cartTotal } = useContext(CartContext);
  const subtotal = cartTotal.subtotal;
  const shipping = cartTotal.shipping;
  const tax = cartTotal.tax;

  const [checkoutSession, setCheckoutSession] = useState(null);

  const origin = useOrigin();
  const router = useRouter();

  useEffect(() => {
    if (checkoutSession) {
      router.push(checkoutSession);
    }
  }, [cart, numCartItems, checkoutSession, router, cartTotal]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const getCheckoutSession = async () => {
      const res = await createCheckoutSession({ origin: origin, cart: cart });

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
    <form
      onSubmit={(e) => handleCheckout(e)}
      className={styles.checkoutForm}>
      <div className={spacingStyles.bottomPaddingSm}>
        <h1 className={textStyles.headingXs}>Order Summary</h1>
      </div>
      <section className={styles.summayWrap}>
        <div className={styles.priceWrap}>
          <div className={styles.priceLine}>
            <p className={textStyles.paragraphXxs}>Subtotal</p>
            <p
              className={textStyles.paragraphXxs}
              style={alignRight}>
              {`$${subtotal.toFixed(2)}`}
            </p>
          </div>
          <div className={styles.priceLine}>
            <p className={textStyles.paragraphXxs}>Shipping</p>
            <p
              className={textStyles.paragraphXxs}
              style={alignRight}>
              {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
            </p>
          </div>
          <div className={styles.priceLine}>
            <p className={textStyles.paragraphXxs}>Estimated Tax</p>
            <p
              className={textStyles.paragraphXxs}
              style={alignRight}>
              {`$${tax.toFixed(2)}`}
            </p>
          </div>
          <div
            className={styles.priceLine}
            style={{ fontWeight: 600, color: 'var(--darkest-gray)' }}>
            <p className={textStyles.paragraphXxs}>Total</p>
            <p
              className={textStyles.paragraphXxs}
              style={alignRight}>
              {`$${cartTotal.total.toFixed(2)}`}
            </p>
          </div>
        </div>
        <button
          type='submit'
          className={textStyles.linkBlockGreen}>
          Proceed to Checkout
        </button>
      </section>
    </form>
  );
}
