'use client';

// styles
import styles from '@/app/styles/(component_styles)/cartItem.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// context
import { CartContext } from '@/app/context/cartContext';

// hooks
import { useState, useContext, useEffect } from 'react';
import { useIsMobile } from '@/app/api/hooks/useIsMobile';
import { useWindowSize } from '@/app/api/hooks/useWindowSize';

// components
import { Grid } from '@mui/material';
import Image from 'next/image';
import QtySelect from './qtySelect';
import Link from 'next/link';

export default function CartItem({ item }) {
  const { updateCart, removeFromCart } = useContext(CartContext);

  const product = item.product;

  const [currentProductConfig, setCurrentProductConfig] = useState({
    qty: item.qty,
    totalPrice: item.qty * product.price,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(currentProductConfig.qty * product.price);
  }, [currentProductConfig.qty, product.price]);

  const handleUpdateCart = async (qty) => {
    if (product) {
      updateCart({ productName: product.title, qty: qty });
    }
    setTotalPrice(product.price * qty);
  };

  const isMobile = useIsMobile();
  const windowSize = useWindowSize();
  const imageWidth = isMobile ? windowSize / 4 : 190;
  const imageHeight = imageWidth * 1.22;

  const onSale = product.on_sale;

  const alignRight = {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const removeItemStyle = {
    textAlign: 'right',
    cursor: 'pointer',
    color: 'var(--medium-gray)',
    fontSize: '0.75em',
    marginBottom: '5px',
  };

  const cartTextStyles = isMobile
    ? textStyles.paragraphXxs
    : textStyles.paragraphXs;

  const saleStyles = {
    textDecoration: 'line-through',
  };

  return (
    <Grid
      container
      className={styles.itemWrap}>
      <Grid
        item
        laptop={4}
        mobile={4}>
        <Link href={`/shop/${item.product.slug}`}>
          <Image
            src={product.main_image}
            alt={product.title}
            width={imageWidth}
            height={imageHeight}
          />
        </Link>
      </Grid>
      <Grid
        item
        laptop={3}
        mobile={5}>
        <div className={spacingStyles.bottomMarginMd}>
          <p className={cartTextStyles}>{product.title}</p>
        </div>
        <p className={cartTextStyles}>
          <strong>Collection</strong> {item.collection}
        </p>
        <p className={cartTextStyles}>
          <strong>Color</strong> {item.color}
        </p>
        <p className={cartTextStyles}>
          <strong>Size</strong> {item.size}
        </p>
        {isMobile && (
          <div className={spacingStyles.topMarginMd}>
            <QtySelect
              qty={currentProductConfig.qty}
              currentProductConfig={currentProductConfig}
              setCurrentProductConfig={setCurrentProductConfig}
              handleUpdateCart={handleUpdateCart}
            />
          </div>
        )}
      </Grid>
      {!isMobile && (
        <>
          <Grid
            item
            mobile={1.5}
            className={styles.saleWrap}>
            <p
              className={textStyles.paragraphXxs}
              style={alignRight}>
              <span className={textStyles.onSale}>
                {onSale ? `$${product.sale_price.toFixed(2)}` : ''}
              </span>
              <span style={onSale ? saleStyles : null}>
                ${product.price.toFixed(2)}
              </span>
            </p>
          </Grid>
          <Grid
            item
            mobile={2}
            className={styles.qtyWrap}>
            <QtySelect
              qty={currentProductConfig.qty}
              currentProductConfig={currentProductConfig}
              setCurrentProductConfig={setCurrentProductConfig}
              handleUpdateCart={handleUpdateCart}
            />
          </Grid>
        </>
      )}

      <Grid
        item
        laptop={1.5}
        mobile={3}
        className={styles.totalWrap}>
        <p
          className={textStyles.paragraphXxs}
          style={alignRight}>
          <span className={textStyles.onSale}>
            {onSale
              ? `$${(product.sale_price * currentProductConfig.qty).toFixed(2)}`
              : ''}
          </span>
          <span style={onSale ? saleStyles : null}>
            {`$${totalPrice.toFixed(2)}`}
          </span>
        </p>
        {!isMobile && (
          <p
            className={textStyles.paragraphXxs}
            style={removeItemStyle}
            onClick={() => removeFromCart({ productId: product.id })}>
            Remove
          </p>
        )}
      </Grid>
      {isMobile && (
        <Grid
          item
          mobile={12}>
          <div className={spacingStyles.topMarginMd}>
            <p
              className={textStyles.paragraphXs}
              style={removeItemStyle}
              onClick={() => removeFromCart({ productId: product.id })}>
              Remove
            </p>
          </div>
        </Grid>
      )}
    </Grid>
  );
}
