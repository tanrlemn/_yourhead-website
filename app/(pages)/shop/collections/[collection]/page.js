'use client';

// hooks
import { useEffect, useState } from 'react';

// components
import ProductCard from '@/app/_components/products/productCard';

export default function Collection({ params }) {
  const collection = params.collection;

  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentCollection, setCurrentCollection] = useState(null);
  const [collectionName, setCollectionName] = useState(null);

  useEffect(() => {
    const getCollection = async () => {
      const res = await fetch(`/api/supabase/getCollections/${slug}`);
      const data = await res.json();
      console.log(data);
      setCurrentCollection(data);
    };

    const getCollectionName = () => {
      const name = collection.charAt(0).toUpperCase() + collection.slice(1);

      setCollectionName(`${name} Collection`);
    };

    const getProducts = async () => {
      const res = await fetch('/api/supabase/getProducts');
      const data = await res.json();

      setFilteredProducts(
        data.products.filter((product) => {
          if (category() === 'default' || category() === 'all') {
            return true;
          } else if (category() === 'sale') {
            return product.on_sale;
          } else {
            return product.product_type === category();
          }
        })
      );
    };
    if (currentCollection === null) {
      getCollection();
    }

    if (filteredProducts === null && currentCollection !== null) {
      getProducts();
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
