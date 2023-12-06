import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const MODE = process.env.MODE;

export async function POST(req) {
  try {
    const request = await req.json();

    const { origin, cart } = request;

    const line_items = [];

    cart.items.map((item) => {
      console.log('item:', item);
      const priceId = () => {
        let id;
        if (MODE === 'development') {
          id = item.on_sale
            ? item.product.sale_stripe_price_id.dev
            : item.product.stripe_price_id.dev;
        } else {
          id = item.product.on_sale
            ? item.product.sale_stripe_price_id.live
            : item.product.stripe_price_id.live;
        }

        return id;
      };
      const product = {
        price: priceId(),
        quantity: item.qty,
      };
      line_items.push(product);
    });
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      automatic_tax: { enabled: true },
    });

    const url = await session.url;
    return NextResponse.json(url);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
