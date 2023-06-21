'use client';

// styles
import styles from '../projects.module.css';

// apis
import { supabase } from '@/app/api/db/getSupabase';
import { supabaseProduct } from '@/app/api/db/supabaseProduct';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductInfo from '@/app/components/productInfo';

export async function generateStaticParams() {
  const products = await supabase('products');

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function Product({ params }) {
  const [currentProject, setCurrentProject] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [supabaseCollections, setSupabaseCollections] = useState(null);

  const slug = params.slug;
  const searchParams = useSearchParams();

  useEffect(() => {
    const getSupabaseProject = async () => {
      const res = await supabaseProject(slug);
      setCurrentProject(res);
    };

    const getSupabaseProducts = async () => {
      const res = await supabaseProduct(slug);
      setRelatedProducts(res);
    };

    const getCollections = async () => {
      const res = await supabase('collection_types');
      const collection = res.find(
        (collection) => collection.id === currentProduct.collection_id
      );
      setSupabaseCollections(collection);
    };

    if (relatedProducts === null) {
      // getSupabaseProducts();
    }
    if (supabaseCollections === null && relatedProducts !== null) {
      // getCollections();
    }

    if (currentProject === null) {
      // getSupabaseProject();
    }
  }, [
    relatedProducts,
    slug,
    supabaseCollections,
    searchParams,
    currentProject,
  ]);

  return (
    <div className={styles.productWrap}>
      {relatedProducts !== null && supabaseCollections !== null && (
        <ProductInfo
          product={relatedProducts}
          collection={supabaseCollections}
        />
      )}
    </div>
  );
}
