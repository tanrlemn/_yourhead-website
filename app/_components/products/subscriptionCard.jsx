'use client';

// hooks
import { useEffect, useState } from 'react';

// chakra-ui
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function SubscriptionCard({ image, title, buttonText, slug }) {
  const [product, setProduct] = useState(null);
  const [selectedTab, setSelectedTab] = useState('monthly');

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/api/supabase/getSubscriptions/${slug}`);
      const data = await response.json();
      setProduct(data.product);

      console.log(data);
    };

    if (slug && product === null) {
      getProduct();
    }
  }, [slug]);

  return (
    <Flex
      p={'2rem'}
      w={'936px'}>
      {product !== null && (
        <>
          <Image
            flexGrow={1}
            maxH={'120px'}
            maxW={'120px'}
            borderRadius={'6px'}
            src={image}
            alt={title}
          />
          <Box
            ml={'2rem'}
            maxW={'550px'}>
            <Heading
              fontSize={'1.5rem'}
              mb={'0.7rem'}>
              {title}
            </Heading>
            <Text fontSize={'0.95rem'}>{product?.benefits}</Text>
            <Box>
              <Flex align={'center'}>
                <Heading>
                  {selectedTab === 'monthly'
                    ? product?.monthly_price
                    : product?.yearly_price}
                </Heading>
                <Text
                  ml={'0.2rem'}
                  opacity={0.5}
                  fontSize={'0.81rem'}
                  lineHeight={1}>
                  per
                  <br />
                  {selectedTab === 'monthly' ? 'month' : 'year'}
                </Text>
              </Flex>
              <Button
                mt={'1rem'}
                colorScheme={'purple'}>
                {buttonText}
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Flex>
  );
}
