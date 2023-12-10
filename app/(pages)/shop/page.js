'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useState, useContext, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryState } from 'next-usequerystate';

// components
import ProductCard from '@/app/_components/products/productCard';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Shop() {
  const { setLoading } = useContext(LoadingContext);

  const searchParams = useSearchParams();
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [productTypes, setProductTypes] = useState(null);
  const [collections, setCollections] = useState(null);
  const [category, setCategory] = useQueryState('category');

  const categoryText = {
    all: 'Shop All YOURHEAD',
    prints: 'Fine Art Prints',
    originals: 'Original Paintings by YOURHEAD',
    apparel: 'YOURHEAD Apparel',
    sale: 'Sale Items',
    default: 'The Official YOURHEAD Shop',
    null: 'The Official YOURHEAD Shop',
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
          if (category === 'default' || category === 'all') {
            return true;
          } else if (category === 'sale') {
            return product.on_sale;
          } else {
            return product.product_type === category;
          }
        })
      );
      setLoading(false);
    }

    const getProducts = async () => {
      const res = await fetch('/api/supabase/getProducts');
      const data = await res.json();
      setProducts(data.products);

      category === null && setFilteredProducts(data.products);
      setLoading(false);
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
        collections !== null &&
        productTypes !== null &&
        filteredProducts !== null && (
          <Box>
            <Box mb={'1.5rem'}>
              <Heading>{categoryText[category]}</Heading>
              <Text>
                {filteredProducts.length === 1
                  ? `${filteredProducts.length} product`
                  : `${filteredProducts.length} products`}
              </Text>
            </Box>
            <Flex
              gap={'2rem'}
              flexWrap={'wrap'}>
              {filteredProducts.map((product, i) => {
                return (
                  <ProductCard
                    key={i}
                    product={product}
                    collection={null}
                  />
                );
              })}
            </Flex>
          </Box>
        )}
    </Box>
  );
}
