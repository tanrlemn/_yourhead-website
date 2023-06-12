import { cookies } from 'next/headers';

// Server action defined inside a Server Component
export default function AddToCart({ productId }) {
  async function addItem(data) {
    'use server';

    const cartId = cookies().get('cartId')?.value;
    await saveToDb({ cartId, data });
  }

  return (
    <form action={addItem}>
      <button type='submit'>Add to Cart</button>
    </form>
  );
}
