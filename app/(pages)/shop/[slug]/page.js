'use client';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductInfo from '@/app/_components/products/productInfo';
import { Box } from '@chakra-ui/react';

export default function Product({ params }) {
  const [currentProduct, setCurrentProduct] = useState(null);

  const slug = params.slug;
  const searchParams = useSearchParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/supabase/getProducts/${slug}`);
      const data = await res.json();
      console.log(data);
      setCurrentProduct(data);
    };

    if (currentProduct === null) {
      getProduct();
    }

    if (searchParams.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (searchParams.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, [currentProduct, slug, searchParams]);

  return (
    <Box
      p={{
        base: '2rem 1rem',
        md: '3rem 1.5rem',
        lg: '4rem 2rem',
      }}>
      {currentProduct !== null && (
        <ProductInfo
          product={currentProduct}
          collection={null}
        />
      )}
    </Box>
  );
}
