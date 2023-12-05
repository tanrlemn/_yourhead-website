'use client';

import 'react-slideshow-image/dist/styles.css';

// context
import { CartContext } from '@/app/lib/context/CartProvider';
// hooks
import { useState, useContext, useEffect } from 'react';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';
import { useWindowWidth } from '@/app/lib/hooks/useWindowWidth';

// components
import Link from 'next/link';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import QtySelect from './qtySelect';
import ToCartModal from '../cart/toCartModal';

export default function ProductInfo({ product, collection }) {
  product = product.product;

  // context
  const { addToCart, setNumCartItems, setNumItems } = useContext(CartContext);

  const isMobile = useIsMobile();

  const mainImage = product.image_url;

  const [currentImage, setCurrentImage] = useState(mainImage);

  const [addedToCart, setAddedToCart] = useState(false);

  const [currentProductConfig, setCurrentProductConfig] = useState({
    qty: 1,
    size: '8 x 12',
    color: 'Multi',
    collection: collection,
  });

  const hasAdditionalImages = product.additional_images !== null;
  console.log(product);

  const [additionalImages, setAdditionalImages] = useState(null);

  useEffect(() => {
    if (hasAdditionalImages) {
      setAdditionalImages([mainImage, ...product.additional_images]);
    }
  }, [product, hasAdditionalImages]);

  const sliderImages = () => {
    const images = [];
    if (additionalImages === null) {
      images.push({ url: mainImage });
      return images;
    }
    for (let i = 0; i < additionalImages.length; i++) {
      images.push({ url: additionalImages[i] });
    }
    return images;
  };

  const onSale = product.on_sale;

  collection =
    collection !== null
      ? collection.collection.charAt(0).toUpperCase() +
        collection.collection.slice(1)
      : null;

  const collectionTagName =
    collection === 'Exclusive'
      ? `${collection} Collection – Hug & Up`
      : `${collection} Collection`;

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
    marginLeft: '-0.2em',
  };

  const windowWidth = useWindowWidth();
  const imageWidth = isMobile ? windowWidth - 40 : windowWidth / 3.7;
  const imageHeight = imageWidth * 1.25;

  const selectedOptionStyles = {
    backgroundColor: 'var(--blue-lightest)',
  };

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

  const saleStyles = {
    textDecoration: 'line-through',
  };

  const sliderOptions = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 300,
    arrows: true,
    infinite: true,
    easing: 'ease',
    showIndicators: false,
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const res = addToCart({
      product: product,
      qty: currentProductConfig.qty,
      size: currentProductConfig.size,
      color: currentProductConfig.color,
      collection: collection,
    });
    setNumCartItems(setNumItems);
    setAddedToCart(true);
    return res;
  };

  return (
    <>
      {product !== null && (
        <>
          {!isMobile && (
            <div>
              {hasAdditionalImages && additionalImages !== null && (
                <div>
                  {additionalImages.map((imageUrl, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImage(imageUrl)}
                      style={
                        imageUrl === currentImage ? currentImageStyles : null
                      }>
                      <Image
                        src={imageUrl}
                        width={140}
                        height={180}
                        alt={`image for ${product.title}`}
                      />
                    </div>
                  ))}
                </div>
              )}
              {currentImage !== null && (
                <div>
                  <Image
                    src={currentImage}
                    width={imageWidth}
                    height={imageHeight}
                    style={cardStyles}
                    alt={`image for ${product.title}`}
                  />
                </div>
              )}
            </div>
          )}
          <div>
            <div>
              <div>
                <div>
                  <h1>{product.title}</h1>
                </div>
                <div>{product.production_year}</div>
              </div>
              {!isMobile && collection !== null && (
                <div>
                  <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                    <div style={tagStyles}>{collectionTagName}</div>
                  </Link>
                </div>
              )}
              {isMobile && (
                <>
                  <div>
                    {currentImage !== null && additionalImages !== null && (
                      <Slide {...sliderOptions}>
                        {sliderImages().map((slideImage, index) => (
                          <div key={index}>
                            <Image
                              src={slideImage.url}
                              width={imageWidth}
                              height={imageHeight}
                              alt={`image for ${product.title}`}
                              quality={100}
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        ))}
                      </Slide>
                    )}
                  </div>
                  {collection !== null && (
                    <div>
                      <Link
                        href={`/shop/collections/${collection.toLowerCase()}`}>
                        <div style={tagStyles}>{collectionTagName}</div>
                      </Link>
                    </div>
                  )}
                </>
              )}
              {collection !== null && (
                <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                  See all of the {collection} Collection
                </Link>
              )}
              <p>
                <span style={onSale ? saleStyles : null}>
                  ${product.price.toFixed(2)}
                </span>{' '}
                <span>{onSale ? `$${product.sale_price.toFixed(2)}` : ''}</span>
              </p>
              <div>
                <form>
                  <label htmlFor='size'>Size*</label>
                  <div>
                    {currentProductConfig.size && (
                      <div>
                        <div style={selectedOptionStyles}>
                          {currentProductConfig.size}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor='qty'>Qty*</label>
                  </div>
                  {currentProductConfig.qty && (
                    <QtySelect
                      qty={currentProductConfig.qty}
                      currentProductConfig={currentProductConfig}
                      setCurrentProductConfig={setCurrentProductConfig}
                    />
                  )}
                  <button
                    onClick={(e) => {
                      handleAddToCart(e);
                    }}>
                    Add to bag
                  </button>
                  {collection !== null && (
                    <Link
                      href={`/shop/collections/${collection.toLowerCase()}`}>
                      <div>Shop related items</div>
                    </Link>
                  )}
                </form>
              </div>
            </div>
            {addedToCart && (
              <ToCartModal
                product={product}
                collection={collection}
                setAddedToCart={setAddedToCart}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
