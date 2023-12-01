'use client';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductCard from '@/app/_components/products/productCard';

export default function Shop() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [productTypes, setProductTypes] = useState(null);
  const [collections, setCollections] = useState(null);

  const categoryText = {
    all: 'Shop All YOURHEAD',
    prints: 'Fine Art Prints',
    originals: 'Original Paintings by YOURHEAD',
    sale: 'Sale Items',
    default: 'The Official YOURHEAD Shop',
  };

  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const category = searchParams.get('category');
    setCurrentCategory(category);

    const getProducts = async () => {
      const res = await fetch('/api/supabase/getProducts');
      const data = await res.json();
      setProducts(data.products);
      console.log('products', data.products);
    };

    const getCollections = async () => {
      const res = await fetch('/api/supabase/getCollections');
      const data = await res.json();
      setCollections(data[0]);
    };

    const getProductTypes = async () => {
      const res = await fetch('/api/supabase/getProductTypes');
      const data = await res.json();
      setProductTypes(data[0]);
    };

    if (products === null) {
      getProducts();
    }
    if (collections === null) {
      // getCollections();
    }
    if (productTypes === null) {
      // getProductTypes();
    }

    if (products !== null && collections !== null && productTypes !== null) {
      setFilteredProducts(
        products.filter((product) => {
          if (currentCategory === 'all' || currentCategory === null)
            return true;
          if (currentCategory === 'sale') {
            return product.on_sale;
          }
          const productType = productTypes.find(
            (type) => type.product_type === currentCategory
          );

          return product.product_type_id === productType.id;
        })
      );
    }
  }, [
    products,
    filteredProducts,
    productTypes,
    collections,
    searchParams,
    currentCategory,
  ]);

  return (
    <div>
      {products !== null &&
        collections !== null &&
        productTypes !== null &&
        filteredProducts !== null && (
          <div>
            <div>
              <div>{categoryText[currentCategory]}</div>
              <div>
                {filteredProducts.length === 1
                  ? `${filteredProducts.length} product`
                  : `${filteredProducts.length} products`}
              </div>
            </div>
            <div>
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
