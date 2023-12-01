'use client';

// apis
import { supabase } from '@/app/api/supabase/getSupabase';
import { supabaseCollection } from '@/app/api/supabase/supabaseCollection';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductCard from '@/app/_components/products/productCard';

export async function generateStaticParams() {
  const products = await supabase('products');

  const getCollection = async (product) => {
    const res = await supabase('collection_types');
    const collection = res.find(
      (collection) => collection.id === product.collection_id
    );
    return collection;
  };

  return products.map((product) => ({
    collection: getCollection(product).collection,
  }));
}

export default function Collection({ params }) {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentCollection, setCurrentCollection] = useState(null);
  const [collectionName, setCollectionName] = useState(null);

  const collection = params.collection;

  useEffect(() => {
    const getCollection = async () => {
      const res = await supabaseCollection(collection);
      setCurrentCollection(res);
    };

    const getCollectionName = () => {
      const name = collection.charAt(0).toUpperCase() + collection.slice(1);

      setCollectionName(`${name} Collection`);
    };

    const getSupabase = async (table) => {
      const res = await supabase(table);

      if (table === 'products') {
        setFilteredProducts(
          res.filter(
            (product) => product.collection_id === currentCollection.id
          )
        );
      }
    };
    if (currentCollection === null) {
      getCollection();
    }

    if (filteredProducts === null && currentCollection !== null) {
      getSupabase('products');
      getCollectionName();
    }
  }, [filteredProducts, currentCollection, collection]);

  return (
    <div>
      {currentCollection !== null && filteredProducts !== null && (
        <div>
          <div>
            <div>{collectionName}</div>
            <div>
              {filteredProducts.length === 1
                ? `${filteredProducts.length} product`
                : `${filteredProducts.length} products`}
            </div>
          </div>
          <div>
            {filteredProducts.map((product, i) => {
              console.log(currentCollection);
              return (
                <ProductCard
                  key={i}
                  product={product}
                  collection={currentCollection}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
