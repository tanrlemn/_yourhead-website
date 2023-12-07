import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const MODE = process.env.MODE;

export async function POST(req) {
  try {
    const request = await req.json();

    const { customerId } = request;

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url:
        MODE === 'development'
          ? 'http://localhost:3000/dashboard'
          : 'https://yourheadisourhead.com/dashboard',
    });

    return NextResponse.json(session);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
