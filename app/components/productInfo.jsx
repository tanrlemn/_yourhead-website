'use client';

// styles
import styles from '../styles/(component_styles)/product.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';
import 'react-slideshow-image/dist/styles.css';

// images
import { VscChevronDown } from 'react-icons/vsc';

// context
import { CartContext } from '../context/cartContext';

// api
// import { addToCart } from '@/app/api/checkout/addToCart';

// hooks
import { useState, useRef, useContext, useEffect } from 'react';
import { useIsMobile } from '../api/hooks/useIsMobile';
import { useWindowSize } from '../api/hooks/useWindowSize';

// components
import Link from 'next/link';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';

export default function ProductInfo({ product, collection }) {
  const optionsRef = useRef(null);
  const currentOptionRef = useRef(null);
  const clickOutRef = useRef(null);
  const { cart, setCart } = useContext(CartContext);
  const isMobile = useIsMobile();

  const [currentImage, setCurrentImage] = useState(product.main_image);
  const [mobileLayout, setMobileLayout] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobileLayout(true);
    } else {
      setMobileLayout(false);
    }
  }, [isMobile, mobileLayout]);

  const hasAdditionalImages = product.additional_image_urls !== null;

  const additionalImages = hasAdditionalImages
    ? [product.main_image, ...product.additional_image_urls]
    : null;

  const sliderImages = () => {
    const images = [];
    if (additionalImages === null) {
      images.push({ url: product.main_image });
      return images;
    }
    for (let i = 0; i < additionalImages.length; i++) {
      images.push({ url: additionalImages[i] });
    }
    return images;
  };

  const [currentProductConfig, setCurrentProductConfig] = useState({
    qty: 1,
    size: '8 x 12',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onSale = product.on_sale;

  collection =
    collection.collection.charAt(0).toUpperCase() +
    collection.collection.slice(1);

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

  const windowSize = useWindowSize();
  const imageWidth = isMobile ? windowSize - 40 : windowSize / 3.7;
  const imageHeight = imageWidth * 1.5;

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

  const openDropdownStyles = {
    top: isDropdownOpen ? `-${currentProductConfig.qty * 1.8}em` : '0',
    background: isDropdownOpen ? 'var(--green-teal-mid-10)' : 'transparent',
  };

  const getOptions = () => {
    const options = [];
    for (let i = 1; i < 11; i++) {
      options.push(
        <option
          className={styles.option}
          value={i}
          style={currentProductConfig.qty === i ? selectedOptionStyles : null}
          onClick={() => {
            setCurrentProductConfig({ ...currentProductConfig, qty: i });
          }}>
          {i}
        </option>
      );
    }
    return options;
  };

  const toggleOptions = () => {
    setIsDropdownOpen(!isDropdownOpen);
    optionsRef.current.classList.toggle(spacingStyles.open);
    currentOptionRef.current.classList.toggle(spacingStyles.closed);
    clickOutRef.current.classList.toggle(spacingStyles.open);
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
    // const res = await addToCart({
    //   product: product,
    //   qty: currentProductConfig.qty,
    //   size: currentProductConfig.size,
    // });
    // setCart(res);
  };

  return (
    <>
      {!mobileLayout && (
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
      )}
      <div className={styles.productInfoWrap}>
        <div className={styles.productInfo}>
          <div className={spacingStyles.bottomMarginSm}>
            <div className={spacingStyles.bottomMarginSm}>
              <h1 className={textStyles.headingSm}>{product.title}</h1>
            </div>
            <div className={textStyles.headingXxs}>
              {product.production_year}
            </div>
          </div>
          {!mobileLayout && (
            <div className={spacingStyles.bottomMarginSm}>
              <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                <div
                  className={textStyles.productTag}
                  style={tagStyles}>
                  {collectionTagName}
                </div>
              </Link>
            </div>
          )}
          {mobileLayout && (
            <>
              <div className={spacingStyles.bottomMarginMd}>
                {currentImage !== null && additionalImages !== null && (
                  <Slide {...sliderOptions}>
                    {sliderImages().map((slideImage, index) => (
                      <div
                        key={index}
                        className={styles.productImage}>
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
              <div className={spacingStyles.bottomMarginSm}>
                <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                  <div
                    className={textStyles.productTag}
                    style={tagStyles}>
                    {collectionTagName}
                  </div>
                </Link>
              </div>
            </>
          )}
          <Link
            href={`/shop/collections/${collection.toLowerCase()}`}
            className={textStyles.normalLink}>
            See all of the {collection} Collection
          </Link>
          <div className={spacingStyles.topMarginLg}>
            <div className={spacingStyles.bottomBorderBlue}>
              <p className={textStyles.headingXsAlt}>
                <span style={onSale ? saleStyles : null}>
                  ${product.price.toFixed(2)}
                </span>{' '}
                <span className={textStyles.onSale}>
                  {onSale ? `$${product.sale_price.toFixed(2)}` : ''}
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className={spacingStyles.bottomTopMarginMd}>
              <form>
                <div className={spacingStyles.bottomMarginXs}>
                  <label
                    htmlFor='size'
                    className={textStyles.label}>
                    Size*
                  </label>
                </div>
                <div className={styles.formRadio}>
                  {currentProductConfig.size && (
                    <div className={styles.optionWrapper}>
                      <div
                        className={styles.option}
                        style={selectedOptionStyles}>
                        {currentProductConfig.size}
                      </div>
                    </div>
                  )}
                </div>
                <div className={spacingStyles.bottomMarginXs}>
                  <label
                    htmlFor='qty'
                    className={textStyles.label}>
                    Qty*
                  </label>
                </div>
                <div className={styles.formSelect}>
                  {currentProductConfig.qty && (
                    <div
                      className={styles.optionWrapper}
                      style={openDropdownStyles}
                      onClick={() => {
                        toggleOptions();
                      }}>
                      <div
                        className={styles.currentOption}
                        ref={currentOptionRef}>
                        <div value={currentProductConfig.qty}>
                          {currentProductConfig.qty}
                        </div>
                        <VscChevronDown />
                      </div>

                      <div
                        className={styles.optionsDropdown}
                        ref={optionsRef}>
                        {getOptions().map((option) => {
                          return option;
                        })}
                      </div>
                    </div>
                  )}
                  <div
                    className={spacingStyles.clickOut}
                    ref={clickOutRef}
                    onClick={() => {
                      toggleOptions();
                    }}></div>
                </div>
                <div className={spacingStyles.topMarginLg}>
                  <button
                    className={textStyles.linkBlockChartreuse}
                    onClick={(e) => {
                      handleAddToCart(e);
                    }}>
                    Add to bag
                  </button>
                </div>
                <div className={spacingStyles.topMarginMd}>
                  <button className={textStyles.linkBlockGrayOutline}>
                    Shop related items
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
