'use client';

// styles
import styles from './shop.module.css';
import textStyles from '@/app/styles/text.module.css';

// apis
import { supabase } from '@/app/api/db/getSupabase';

// hooks
import { useEffect, useState, cache } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductCard from '@/app/_components/products/productCard';

export default function Shop() {
  const searchParams = useSearchParams();
  const [supabaseProducts, setSupabaseProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
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
          setCurrentCategoryText('YOURHEAD Apparel');
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

      if (table === 'products') {
        setSupabaseProducts(res);
      }
      if (table === 'collection_types') {
        setSupabaseCollections(res);
      }
      if (table === 'product_types') {
        setSupabaseProductTypes(res);
      }
    };

    if (supabaseProducts === null) {
      cache(getSupabase('products'));
    }
    if (supabaseCollections === null) {
      cache(getSupabase('collection_types'));
    }
    if (supabaseProductTypes === null) {
      cache(getSupabase('product_types'));
    }

    if (
      supabaseProducts !== null &&
      supabaseCollections !== null &&
      supabaseProductTypes !== null
    ) {
      setFilteredProducts(
        supabaseProducts.filter((product) => {
          if (currentCategory === 'all' || currentCategory === null)
            return true;
          if (currentCategory === 'sale') {
            return product.on_sale;
          }
          const productType = supabaseProductTypes.find(
            (type) => type.product_type === currentCategory
          );

          return product.product_type_id === productType.id;
        })
      );
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
        supabaseProductTypes !== null &&
        filteredProducts !== null && (
          <div className={styles.shopBody}>
            <div className={styles.shopHeader}>
              <div className={textStyles.headingSm}>{currentCategoryText}</div>
              <div className={styles.productCount}>
                {filteredProducts.length === 1
                  ? `${filteredProducts.length} product`
                  : `${filteredProducts.length} products`}
              </div>
            </div>
            <div className={styles.productsWrap}>
              {filteredProducts.map((product, i) => {
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
