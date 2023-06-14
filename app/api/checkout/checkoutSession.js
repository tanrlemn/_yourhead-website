const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession({ origin, cart }) {
  try {
    const line_items = [];
    cart.items.map((item) => {
      const product = {
        price: item.product.on_sale
          ? item.product.sale_stripe_price_id
          : item.product.stripe_price_id,
        quantity: item.qty,
      };
      line_items.push(product);
    });
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      automatic_tax: { enabled: true },
    });

    const url = await session.url;
    return url;
  } catch (err) {
    console.log(err);
  }
}
