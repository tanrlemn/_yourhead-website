// styles
import styles from '../styles/(component_styles)/product.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// hooks
import { useWindowSize, useIsMobile } from '../api/hooks/useWindowSize';
import { useState, useRef, useEffect } from 'react';

// components
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product, collection }) {
  const imageRef = useRef(null);
  const slug = product.slug;
  const hasAdditionalImages = product.additional_image_urls !== null;

  const [hovering, setHovering] = useState(false);

  const [additionalImages, setAdditionalImages] = useState(
    hasAdditionalImages
      ? [product.main_image, ...product.additional_image_urls]
      : null
  );

  useEffect(() => {
    if (hasAdditionalImages) {
      setAdditionalImages([
        product.main_image,
        ...product.additional_image_urls,
      ]);
    }
  }, [product, hasAdditionalImages, hovering]);

  collection =
    collection.collection.charAt(0).toUpperCase() +
    collection.collection.slice(1);

  const collectionName =
    collection === 'Exclusive'
      ? `${collection} Collection – Hug & Up`
      : `${collection} Collection`;

  const windowSize = useWindowSize();
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
    <div className={styles.flexCard}>
      <Link
        href={{
          pathname: `/shop/${slug}`,
          query: {
            product: JSON.stringify(product),
          },
        }}
        as={`/shop/${slug}`}>
        <Image
          src={hovering ? additionalImages[1] : product.main_image}
          width={imageWidth}
          height={imageHeight}
          className={styles.flexCardImage}
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

      <div className={styles.flexCardText}>
        <Link
          href={{
            pathname: `/shop/${slug}`,
            query: {
              product: JSON.stringify(product),
            },
          }}
          as={`/shop/${slug}`}>
          <div className={spacingStyles.bottomMarginSm}>
            <h2 className={textStyles.headingXsAlt}>{product.title}</h2>
          </div>
          <div className={spacingStyles.bottomMarginSm}>
            <p className={textStyles.paragraphXs}>
              <span style={onSale ? saleStyles : null}>
                ${product.price.toFixed(2)}
              </span>{' '}
              <span className={textStyles.onSale}>
                {onSale ? `$${product.sale_price.toFixed(2)}` : ''}
              </span>
            </p>
          </div>
          {limitedEdition && (
            <div className={spacingStyles.bottomMarginMd}>
              <p className={textStyles.paragraphXxs}>
                Limited edition – {numEditions} prints{' '}
                {`(${numAvailable} remaining)`}
              </p>
            </div>
          )}
          {!limitedEdition && (
            <div className={spacingStyles.bottomMarginMd}>
              <p className={textStyles.paragraphXxs}>
                General release – unlimited prints available
              </p>
            </div>
          )}
        </Link>
        <Link href={`shop/collections/${collection.toLowerCase()}`}>
          <div
            className={textStyles.productTag}
            style={tagStyles}>
            {collectionName}
          </div>
        </Link>
      </div>
    </div>
  );
}
