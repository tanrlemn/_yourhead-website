const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(origin) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1NIPZ6JPdRao2mztUcs8Kphc',
          quantity: 1,
        },
      ],
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
