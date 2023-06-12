// styles
import styles from '../styles/(component_styles)/product.module.css';

// hooks
import { useWindowSize } from '../api/hooks/useWindowSize';
import { useIsMobile } from '../api/hooks/useIsMobile';
import { useState } from 'react';

// components
import Image from 'next/image';

export default function ProductImages({ product, collection }) {
  const [currentImage, setCurrentImage] = useState(product.main_image);
  const hasAdditionalImages = product.additional_image_urls !== null;

  const [additionalImages, setAdditionalImages] = useState(
    hasAdditionalImages
      ? [product.main_image, ...product.additional_image_urls]
      : null
  );

  collection =
    collection.collection.charAt(0).toUpperCase() +
    collection.collection.slice(1);

  const windowSize = useWindowSize();
  const mobile = useIsMobile();
  const imageWidth = !mobile ? windowSize / 3.7 : windowSize / 2.5;
  const imageHeight = imageWidth * 1.5;

  const cardStyles = {
    borderBottom:
      collection === 'Exclusive'
        ? 'var(--exclusive-border)'
        : collection == 'General'
        ? 'none'
        : 'var(--collection-border)',
  };

  const currentImageStyles = {
    border: 'var(--blue-mid-light-border)',
  };

  return (
    <div className={styles.productImagesWrap}>
      {hasAdditionalImages && (
        <div className={styles.productThumbnails}>
          {additionalImages.map((imageUrl, index) => (
            <div
              className={styles.productThumbnail}
              key={index}
              onClick={() => setCurrentImage(imageUrl)}
              style={imageUrl === currentImage ? currentImageStyles : null}>
              <Image
                src={imageUrl}
                width={140}
                height={180}
                className={styles.productThumbnailImage}
                alt={`image for ${product.title}`}
              />
            </div>
          ))}
        </div>
      )}
      {currentImage !== null && (
        <div className={styles.productImage}>
          <Image
            src={currentImage}
            width={imageWidth}
            height={imageHeight}
            className={styles.flexCardImage}
            style={cardStyles}
            alt={`image for ${product.title}`}
          />
        </div>
      )}
    </div>
  );
}
