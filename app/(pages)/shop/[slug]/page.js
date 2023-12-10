'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useState, useContext } from 'react';

// components
import ProductInfo from '@/app/_components/products/productInfo';
import { Box } from '@chakra-ui/react';

export default function Product({ params }) {
  const { setLoading } = useContext(LoadingContext);
  const [currentProduct, setCurrentProduct] = useState(null);

  const slug = params.slug;

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/supabase/getProducts/${slug}`);
      const data = await res.json();
      console.log(data);
      setCurrentProduct(data);
      setLoading(false);
    };

    if (currentProduct === null) {
      getProduct();
    }
  }, [currentProduct, slug]);

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
