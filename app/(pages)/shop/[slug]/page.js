'use client';

// apis
import { supabase } from '@/app/api/supabase/getSupabase';
import { supabaseProduct } from '@/app/api/supabase/supabaseProduct';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductInfo from '@/app/_components/products/productInfo';

export async function generateStaticParams() {
  const products = await supabase('products');

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function Product({ params }) {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [supabaseCollection, setSupabaseCollection] = useState(null);

  const slug = params.slug;
  const searchParams = useSearchParams();

  useEffect(() => {
    const getSupabaseProduct = async () => {
      const res = await supabaseProduct(slug);
      setCurrentProduct(res);
    };
    const getCollection = async () => {
      const res = await supabase('collection_types');
      const collection = res.find(
        (collection) => collection.id === currentProduct.collection_id
      );
      setSupabaseCollection(collection);
    };

    if (currentProduct === null) {
      getSupabaseProduct();
    }
    if (supabaseCollection === null && currentProduct !== null) {
      getCollection();
    }

    if (searchParams.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (searchParams.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, [currentProduct, slug, supabaseCollection, searchParams]);

  return (
    <div>
      {currentProduct !== null && supabaseCollection !== null && (
        <ProductInfo
          product={currentProduct}
          collection={supabaseCollection}
        />
      )}
    </div>
  );
}
