'use client';

// styles
import styles from '@/app/styles/(component_styles)/toCartModal.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
import { VscClose } from 'react-icons/vsc';

// components
import Link from 'next/link';
import Image from 'next/image';

export default function ToCartModal({ product, collection, setAddedToCart }) {
  const mainImage = product.main_image;

  const clickOutStyles = {
    display: 'block',
  };

  const closeStyles = {
    margin: '1em',
    zIndex: '100',
  };

  return (
    <div className={styles.modalWrap}>
      <div
        className={spacingStyles.clickOut}
        style={clickOutStyles}
        onClick={() => setAddedToCart(false)}></div>
      <div>
        <div className={styles.modal}>
          <div className={spacingStyles.absolutelyRight}>
            <VscClose
              style={closeStyles}
              className={spacingStyles.icon}
              onClick={() => setAddedToCart(false)}
            />
          </div>
          <div className={styles.modalHeader}>
            <div className={spacingStyles.bottomMarginMd}>
              <div className={spacingStyles.centered}>
                <h2 className={textStyles.headingMd}>
                  <span className={spacingStyles.blueUnderscoreLg}></span>
                  Added to bag
                </h2>
              </div>
            </div>
          </div>
          <div className={spacingStyles.bottomMarginLg}>
            <div className={styles.modalBody}>
              <div className={styles.modalImage}>
                <div className={spacingStyles.bottomMarginMd}>
                  <Image
                    src={mainImage}
                    alt={product.title}
                    width={200}
                    height={200 * 1.25}
                  />
                </div>
              </div>
              <div className={spacingStyles.centered}>
                <p className={textStyles.paragraphXs}>
                  <span className={textStyles.aBitBolder}>
                    {product.title} –
                  </span>{' '}
                  has been added to your cart.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <div className={spacingStyles.bottomMarginMd}>
              <Link
                href='/cart'
                className={textStyles.linkBlockChartreuse}>
                View Cart
              </Link>
            </div>
            <div className={spacingStyles.centered}>
              <div
                className={textStyles.linkBlockBlack}
                onClick={() => setAddedToCart(false)}>
                Continue Shopping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
