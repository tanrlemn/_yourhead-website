'use client'; // Error components must be Client Components

// components
import LoadingDiv from '@/app/components/loadingDiv';
import Link from 'next/link';

export default function OrderSuccess() {
  return (
    <div>
      <div>
        <LoadingDiv />
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
