'use client'; // Error components must be Client Components

// components
import { Link } from '@chakra-ui/react';

export default function OrderSuccess() {
  return (
    <div>
      <div>
        <div>
          <h2>Order Placed!</h2>
        </div>
        <p>You will receive an email confirmation shortly.</p>

        <div>
          <Link href='/shop'>Continue shopping</Link>
        </div>
      </div>
    </div>
  );
}
