'use client';

// styles
import styles from '@/app/styles/(component_styles)/cartItem.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// context
import { CartContext } from '@/app/context/cartContext';

// hooks
import { useState, useContext, useEffect } from 'react';

// components
import { Grid } from '@mui/material';
import Image from 'next/image';
import QtySelect from './qtySelect';

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

  const alignRight = {
    textAlign: 'right',
    fontWeight: '500',
  };

  const removeItemStyle = {
    textAlign: 'right',
    cursor: 'pointer',
    color: 'var(--medium-gray)',
    fontSize: '0.75em',
    marginBottom: '5px',
  };
  return (
    <Grid
      container
      className={styles.itemWrap}>
      <Grid
        item
        xs={3}>
        <Image
          src={product.main_image}
          alt={product.title}
          width={190}
          height={250}
        />
      </Grid>
      <Grid
        item
        xs={3}>
        <div className={spacingStyles.bottomMarginMd}>
          <p className={textStyles.paragraphXs}>{product.title}</p>
        </div>
        <p className={textStyles.paragraphXs}>
          <strong>Collection</strong> {item.collection}
        </p>
        <p className={textStyles.paragraphXs}>
          <strong>Color</strong> {item.color}
        </p>
        <p className={textStyles.paragraphXs}>
          <strong>Size</strong> {item.size}
        </p>
      </Grid>
      <Grid
        item
        xs={2}>
        <p
          className={textStyles.paragraphXs}
          style={alignRight}>
          {`$${product.price.toFixed(2)}`}
        </p>
      </Grid>
      <Grid
        item
        xs={2}
        className={styles.qtyWrap}>
        <QtySelect
          qty={currentProductConfig.qty}
          currentProductConfig={currentProductConfig}
          setCurrentProductConfig={setCurrentProductConfig}
          handleUpdateCart={handleUpdateCart}
        />
      </Grid>
      <Grid
        item
        xs={2}
        className={styles.totalWrap}>
        <p
          className={textStyles.paragraphXs}
          style={alignRight}>
          {`$${totalPrice.toFixed(2)}`}
        </p>
        <p
          className={textStyles.paragraphXs}
          style={removeItemStyle}
          onClick={() => removeFromCart({ productId: product.id })}>
          Remove
        </p>
      </Grid>
    </Grid>
  );
}
