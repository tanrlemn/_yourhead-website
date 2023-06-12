'use client';

// styles
import styles from './shop.module.css';
import textStyles from '@/app/styles/text.module.css';

// apis
import { supabase } from '../../api/db/getSupabase';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductCard from '@/app/components/productCard';

export default function Shop() {
  const searchParams = useSearchParams();
  const [supabaseProducts, setSupabaseProducts] = useState(null);
  const [supabaseProductTypes, setSupabaseProductTypes] = useState(null);
  const [supabaseCollections, setSupabaseCollections] = useState(null);

  const [currentCategoryText, setCurrentCategoryText] = useState(
    'The Official YOURHEAD Shop'
  );
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category === null) {
      setCurrentCategoryText('The Official YOURHEAD Shop');
    } else {
      switch (category) {
        case 'all':
          setCurrentCategoryText('Shop All YOURHEAD');
          break;
        case 'prints':
          setCurrentCategoryText('Fine Art Prints');
          break;
        case 'originals':
          setCurrentCategoryText('Original Paintings by YOURHEAD');
          break;
        case 'apparel':
          setCurrentCategoryText('Graphic Tees');
          break;
        case 'music':
          setCurrentCategoryText('YOURHEAD Music');
          break;
        case 'sale':
          setCurrentCategoryText('Sale Items');
          break;
        default:
          setCurrentCategoryText('The Official YOURHEAD Shop');
          break;
      }
    }
    setCurrentCategory(category);

    const getSupabase = async (table) => {
      const res = await supabase(table);

      switch (table) {
        case 'products':
          setSupabaseProducts(res);
          break;
        case 'collection_types':
          setSupabaseCollections(res);
        case 'product_types':
          setSupabaseProductTypes(res);
          break;
        default:
          break;
      }
    };

    if (supabaseProducts === null) {
      getSupabase('products');
    }
    if (supabaseCollections === null) {
      getSupabase('collection_types');
    }
    if (supabaseProductTypes === null) {
      getSupabase('product_types');
    }
  }, [
    supabaseProducts,
    supabaseCollections,
    supabaseProductTypes,
    searchParams,
    currentCategory,
  ]);

  return (
    <div className={styles.shopWrap}>
      {supabaseProducts !== null &&
        supabaseCollections !== null &&
        supabaseProductTypes !== null && (
          <div className={styles.shopBody}>
            <div className={styles.shopHeader}>
              <div className={textStyles.headingSm}>{currentCategoryText}</div>
              <div
                className={
                  styles.productCount
                }>{`${supabaseProducts.length} products`}</div>
            </div>
            <div className={styles.productsWrap}>
              {supabaseProducts
                .filter((product) => {
                  if (currentCategory === 'all' || currentCategory === null)
                    return true;
                  if (currentCategory === 'sale') {
                    return product.on_sale;
                  }
                  const productType = supabaseProductTypes.find((type) => {
                    return type.product_type === currentCategory;
                  });
                  if (productType === undefined) return false;
                  return product.product_type_id === productType.id;
                })
                .map((product, i) => {
                  return (
                    <ProductCard
                      key={i}
                      product={product}
                      collection={supabaseCollections.find(
                        (collection) => collection.id === product.collection_id
                      )}
                    />
                  );
                })}
            </div>
          </div>
        )}
    </div>
  );
}
