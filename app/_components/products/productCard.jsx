// hooks
import { useWindowWidth } from '@/app/lib/hooks/useWindowWidth';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';
import { useState, useRef, useEffect } from 'react';

// components
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product, collection }) {
  const imageRef = useRef(null);
  const slug = product.slug;
  const mainImage = product.image_url;
  const hasAdditionalImages = product.additional_images !== null;

  const [hovering, setHovering] = useState(false);

  const [additionalImages, setAdditionalImages] = useState(
    hasAdditionalImages ? [mainImage, ...product.additional_images] : null
  );

  useEffect(() => {
    if (hasAdditionalImages) {
      setAdditionalImages([mainImage, ...product.additional_images]);
    }
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
    <div>
      <Link
        href={{
          pathname: `/shop/${slug}`,
          query: {
            product: JSON.stringify(product),
          },
        }}
        as={`/shop/${slug}`}>
        <Image
          src={
            hovering
              ? hasAdditionalImages
                ? additionalImages[1]
                : mainImage
              : mainImage
          }
          width={imageWidth}
          height={imageHeight}
          style={cardStyles}
          alt={`image for ${product.title}`}
          ref={imageRef}
          onMouseOver={() => {
            setHovering(true);
          }}
          onMouseOut={() => {
            setHovering(false);
          }}
        />
      </Link>

      <div>
        <Link
          href={{
            pathname: `/shop/${slug}`,
            query: {
              product: JSON.stringify(product),
            },
          }}
          as={`/shop/${slug}`}>
          <div>
            <h2>{product.title}</h2>
          </div>
          <div>
            <p>
              <span style={onSale ? saleStyles : null}>
                ${product.price.toFixed(2)}
              </span>{' '}
              <span>{onSale ? `$${product.sale_price.toFixed(2)}` : ''}</span>
            </p>
          </div>
          {limitedEdition && (
            <div>
              <p>
                Limited edition – {numEditions} prints{' '}
                {`(${numAvailable} remaining)`}
              </p>
            </div>
          )}
          {!limitedEdition && (
            <div>
              <p>General release – unlimited prints available</p>
            </div>
          )}
        </Link>
        {collection !== null && (
          <Link href={`shop/collections/${collection.toLowerCase()}`}>
            <div style={tagStyles}>{collectionName}</div>
          </Link>
        )}
      </div>
    </div>
  );
}
