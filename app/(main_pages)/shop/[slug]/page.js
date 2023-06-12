'use client';

// styles
import styles from '../shop.module.css';

// apis
import { supabase } from '@/app/api/db/getSupabase';
import { supabaseProduct } from '@/app/api/db/supabaseProduct';

// hooks
import { useEffect, useState } from 'react';

// components
import ProductImages from '@/app/components/productImages';
import ProductInfo from '@/app/components/productInfo';

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
  }, [currentProduct, slug, supabaseCollection]);

  return (
    <div className={styles.productWrap}>
      {currentProduct !== null && supabaseCollection !== null && (
        <ProductImages
          product={currentProduct}
          collection={supabaseCollection}
        />
      )}
      {currentProduct !== null && supabaseCollection !== null && (
        <ProductInfo
          product={currentProduct}
          collection={supabaseCollection}
        />
      )}
    </div>
  );
}
