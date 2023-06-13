'use client';

// context
import { CartContext } from '@/app/context/cartContext';

// api
import { createCheckoutSession } from '@/app/api/checkout/checkoutSession';

// hooks
import { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams, useRouter } from 'next/navigation';
import { useOrigin } from '@/app/api/hooks/useOrigin';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
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

    console.log(cart);
  }, [searchParams, checkoutSession, router, cart]);

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

  return (
    <>
      <div>
        <h1>Cart</h1>
        {cart.length > 0 &&
          cart.map((item) => {
            <p key={item.product.id}>{item.product.title}</p>;
          })}
      </div>
      <form onSubmit={(e) => handleCheckout(e)}>
        <section>
          <button type='submit'>Checkout</button>
        </section>
      </form>
    </>
  );
}
