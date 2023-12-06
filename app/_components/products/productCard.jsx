'use client';

// hooks
import { useWindowWidth } from '@/app/lib/hooks/useWindowWidth';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';
import { useState, useEffect } from 'react';
import { useAnimate } from 'framer-motion';

// components
import { Box, Link, Image, Heading, Text } from '@chakra-ui/react';

export default function ProductCard({ product, collection }) {
  const [scope, animate] = useAnimate();
  const slug = product.slug;
  const mainImage = product.small_thumbnail;
  const hasAdditionalImages = product.additional_images !== null;

  const [hovering, setHovering] = useState(false);

  const [additionalImages, setAdditionalImages] = useState(
    hasAdditionalImages ? [mainImage, ...product.additional_images] : null
  );

  useEffect(() => {
    const hoveringAnimation = animate(
      scope.current,
      {
        opacity: hovering ? 1 : 0,
      },
      { ease: 'easeInOut' }
    );

    const handleHover = () => {
      setHovering(true);
    };

    const handleLeave = () => {
      setHovering(false);
    };

    if (scope.current) {
      scope.current.addEventListener('mouseenter', handleHover);
      scope.current.addEventListener('mouseleave', handleLeave);
    }

    if (hasAdditionalImages) {
      setAdditionalImages([mainImage, ...product.additional_images]);
    }

    return () => {
      hoveringAnimation.stop();
      if (scope.current) {
        scope.current.removeEventListener('mouseenter', handleHover);
        scope.current.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [product, hasAdditionalImages, hovering]);

  collection =
    collection !== null
      ? collection.collection.charAt(0).toUpperCase() +
        collection.collection.slice(1)
      : null;

  const collectionName =
    collection === 'Exclusive'
      ? `${collection} Collection – Hug & Up`
      : `${collection} Collection`;

  const windowSize = useWindowWidth();
  const mobile = useIsMobile();
  const imageWidth = !mobile ? windowSize / 3.7 : windowSize / 2.5;
  const imageHeight = imageWidth * 1.25;

  const limitedEdition = product.limited_edition;
  const numEditions = product.num_editions;
  const numAvailable = product.num_available;

  const onSale = product.on_sale;

  const cardStyles = {
    borderBottom:
      collection === 'Exclusive'
        ? 'var(--exclusive-border)'
        : collection == 'General'
        ? 'none'
        : 'var(--collection-border)',
  };

  const imageStyles = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const tagStyles = {
    backgroundColor:
      collection === 'Exclusive'
        ? 'var(--orange-lightest)'
        : collection == 'General'
        ? 'transparent'
        : 'var(--pink-light)',
    border:
      collection === 'Exclusive'
        ? '1px solid var(--orange-mid)'
        : collection == 'General'
        ? 'var(--blue-light-border)'
        : 'none',
  };

  const saleStyles = {
    textDecoration: 'line-through',
  };

  return (
    <Box
      flexGrow={1}
      maxW={'fit-content'}>
      <Link
        href={`/shop/${slug}`}
        position={'relative'}>
        <Image
          zIndex={1}
          src={mainImage}
          width={imageWidth}
          height={imageHeight}
          style={cardStyles}
          alt={`image for ${product.title}`}
        />
        <Image
          src={additionalImages[1]}
          width={imageWidth}
          height={imageHeight}
          style={imageStyles}
          alt={`image for ${product.title}`}
          ref={scope}
        />
      </Link>

      <Box mt={'1rem'}>
        <Link href={`/shop/${slug}`}>
          <Heading
            mb={'0.1rem'}
            size={'md'}>
            {product.title}
          </Heading>
          <Text mb={'0.5rem'}>
            <span style={onSale ? saleStyles : null}>
              ${product.price.toFixed(2)}
            </span>{' '}
            <span>{onSale ? `$${product.sale_price.toFixed(2)}` : ''}</span>
          </Text>
        </Link>
        <Box
          fontSize={'0.8rem'}
          textTransform={'uppercase'}>
          {limitedEdition ? (
            <Box>
              <Text
                color={'var(--purple)'}
                fontSize={'1.1em'}
                fontWeight={500}>
                Limited edition
              </Text>
              <Text>
                – {numEditions} prints {`(${numAvailable} remaining)`}
              </Text>
            </Box>
          ) : (
            <Box>
              <Text
                fontSize={'1.1em'}
                fontWeight={500}>
                General release
              </Text>
              <Text>– unlimited prints available</Text>
            </Box>
          )}
        </Box>
        {collection !== null && (
          <Link href={`shop/collections/${collection.toLowerCase()}`}>
            <Text style={tagStyles}>{collectionName}</Text>
          </Link>
        )}
      </Box>
    </Box>
  );
}
