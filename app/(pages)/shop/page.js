'use client';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import ProductCard from '@/app/_components/products/productCard';
import { Box, Heading, Text } from '@chakra-ui/react';

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

  const category = () => {
    if (searchParams.has('category')) {
      return searchParams.get('category');
    } else {
      return 'default';
    }
  };

  useEffect(() => {
    if (
      products !== null &&
      collections !== null &&
      productTypes !== null &&
      filteredProducts === null
    ) {
      setFilteredProducts(
        products.filter((product) => {
          if (category() === 'default' || category() === 'all') {
            return true;
          } else if (category() === 'sale') {
            return product.on_sale;
          } else {
            return product.product_type === category();
          }
        })
      );
    }

    const getProducts = async () => {
      const res = await fetch('/api/supabase/getProducts');
      const data = await res.json();
      setProducts(data.products);

      setFilteredProducts(data.products);
    };

    const getCollections = async () => {
      const res = await fetch('/api/supabase/getCollections');
      const data = await res.json();
      setCollections(data.collections);
    };

    const getProductTypes = async () => {
      const res = await fetch('/api/supabase/getProductTypes');
      const data = await res.json();
      setProductTypes(data.product_types);
    };

    if (products === null && filteredProducts === null) {
      getProducts();
    }
    if (collections === null) {
      getCollections();
    }
    if (productTypes === null) {
      getProductTypes();
    }
  }, [products, filteredProducts, productTypes, collections, searchParams]);

  return (
    <Box
      p={{
        base: '2rem 1rem',
        md: '3rem 1.5rem',
        lg: '4rem 2rem',
      }}>
      {products !== null &&
        // collections !== null &&
        // productTypes !== null &&
        filteredProducts !== null && (
          <div>
            <Box mb={'1.5rem'}>
              <Heading>{categoryText[category()]}</Heading>
              <Text>
                {filteredProducts.length === 1
                  ? `${filteredProducts.length} product`
                  : `${filteredProducts.length} products`}
              </Text>
            </Box>
            <div>
              {filteredProducts.map((product, i) => {
                return (
                  <ProductCard
                    key={i}
                    product={product}
                    collection={null}
                  />
                );
              })}
            </div>
          </div>
        )}
    </Box>
  );
}
