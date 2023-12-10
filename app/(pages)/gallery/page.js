'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useState, useContext } from 'react';

// chakra-ui
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';

// components
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// local components
import ArtworkCard from '@/app/_components/products/artworkCard';

export default function Gallery() {
  const { setLoading } = useContext(LoadingContext);

  const [artworks, setArtworks] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch('/api/supabase/getArtworks');
      const data = await res.json();
      setArtworks(data.artworks);
    };

    if (artworks === null) {
      setLoading(true);
      getProjects();
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [artworks, setLoading]);

  return (
    <Box p={'4rem 0'}>
      <VStack
        textAlign={'center'}
        w={'100%'}
        mb={'2rem'}
        h={'fit-content'}
        position={'relative'}>
        <VStack maxW={'550px'}>
          <Heading
            textTransform={'uppercase'}
            fontWeight={500}
            size={'sm'}
            color={'var(--darkGray)'}>
            Artworks
          </Heading>
          <Heading textAlign={'center'}>YOURHEAD</Heading>
          <Text>
            These works range in creation date from early 2014 to the present.
            They traverse a plethora of identities and styles but ultimately end
            with YOURHEAD.
          </Text>
        </VStack>
      </VStack>
      <Box p={'1rem'}>
        {artworks && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter={'0.75rem'}>
              {artworks.map((artwork) => {
                return (
                  <ArtworkCard
                    key={artwork.id}
                    artwork={artwork}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </Box>
    </Box>
  );
}
