'use client';

// context
import { CartContext } from '@/app/lib/context/CartProvider';

// hooks
import { useState, useContext, useEffect } from 'react';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';
import { useWindowSize } from '@/app/lib/hooks/useWindowWidth';

// components
import { Grid } from '@mui/material';
import Image from 'next/image';
import QtySelect from '../products/qtySelect';
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

  const saleStyles = {
    textDecoration: 'line-through',
  };

  return (
    <Grid container>
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
        <div>
          <p>{product.title}</p>
        </div>
        <p>
          <strong>Collection</strong> {item.collection}
        </p>
        <p>
          <strong>Color</strong> {item.color}
        </p>
        <p>
          <strong>Size</strong> {item.size}
        </p>
        {isMobile && (
          <div>
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
            mobile={1.5}>
            <p style={alignRight}>
              <span>{onSale ? `$${product.sale_price.toFixed(2)}` : ''}</span>
              <span style={onSale ? saleStyles : null}>
                ${product.price.toFixed(2)}
              </span>
            </p>
          </Grid>
          <Grid
            item
            mobile={2}>
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
        mobile={3}>
        <p style={alignRight}>
          <span>
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
          <div>
            <p
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
