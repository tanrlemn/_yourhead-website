import { cookies } from 'next/headers';

export function addToCart({ product, qty, size }) {
  const currentCart = cookies.get('cart') ? cookies.get('cart') : [];
  cookies.set('cart', [...currentCart, { product, qty, size }]);
  return [...currentCart, { product, qty, size }];
}
