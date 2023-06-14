'use client';

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cart: { items: [] },
  setCart: () => {},
  numCartItems: 0,
  setNumCartItems: () => {},
  cartTotal: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
  setCartTotal: () => {},
  addToCart: () => {},
  updateCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });
  const [numCartItems, setNumCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart !== null && currentCart.items.length > 0) {
      setCart(currentCart);
      setNumCartItems(
        currentCart.items.reduce((total, item) => total + item.qty, 0)
      );
      setCartTotal({
        subtotal: currentCart.items.reduce(
          (total, item) =>
            item.product.on_sale
              ? total + item.qty * item.product.sale_price
              : total + item.qty * item.product.price,
          0
        ),
        shipping: 0,
        tax: 0,
        total: currentCart.items.reduce(
          (total, item) =>
            item.product.on_sale
              ? total + item.qty * item.product.sale_price
              : total + item.qty * item.product.price,
          0
        ),
      });
    }
  }, []);

  const setNumItems = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart && currentCart.items.length > 0) {
      const numItems = currentCart.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      return numItems;
    }
  };

  const setTotal = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart && currentCart.items.length > 0) {
      const newTotal = currentCart.items.reduce(
        (total, item) =>
          item.product.on_sale
            ? total + item.qty * item.product.sale_price
            : total + item.qty * item.product.price,
        0
      );
      return { subtotal: newTotal, shipping: 0, tax: 0, total: newTotal };
    }
  };

  const clearCart = () => {
    window.localStorage.setItem(
      'cart',
      JSON.stringify({
        items: [],
      })
    );

    const updatedCart = JSON.parse(window.localStorage.getItem('cart'));
    setCart(updatedCart);
    setNumCartItems(0);
    setCartTotal({ subtotal: 0, shipping: 0, tax: 0, total: 0 });
  };

  const addToCart = ({ product, qty, size, color, collection }) => {
    const currentCart = JSON.parse(window.localStorage.getItem('cart'));
    const productName = product.title;

    if (
      currentCart !== null &&
      currentCart.items &&
      currentCart.items.length > 0
    ) {
      const currentCartItems = currentCart.items;
      const currentCartItem = currentCartItems.find(
        (item) => item.productName === productName
      );
      if (currentCartItem) {
        const currentCartItemIndex = currentCartItems.findIndex(
          (item) => item.productName === productName
        );
        currentCartItems[currentCartItemIndex].qty += qty;
        window.localStorage.setItem(
          'cart',
          JSON.stringify({
            items: currentCartItems,
          })
        );
        return JSON.parse(window.localStorage.getItem('cart'));
      }

      window.localStorage.setItem(
        'cart',
        JSON.stringify({
          items: [
            ...currentCartItems,
            {
              productName: product.title,
              product,
              qty,
              size,
              color,
              collection,
            },
          ],
        })
      );

      const updatedCart = JSON.parse(window.localStorage.getItem('cart'));
      setCart(updatedCart);
    } else {
      const newItem = {
        productName: product.title,
        product,
        qty,
        size,
        color,
        collection,
      };

      const newCart = {
        items: [newItem],
      };

      window.localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
      setNumCartItems(qty);
    }
    setCart(JSON.parse(window.localStorage.getItem('cart')));
  };

  const updateCart = ({ productName, qty }) => {
    const currentCart = JSON.parse(window.localStorage.getItem('cart'));

    if (
      currentCart !== null &&
      currentCart.items &&
      currentCart.items.length > 0
    ) {
      const currentCartItems = currentCart.items;
      const currentCartItem = currentCartItems.find(
        (item) => item.productName === productName
      );

      if (currentCartItem) {
        const currentCartItemIndex = currentCartItems.findIndex(
          (item) => item.productName === productName
        );

        currentCartItems[currentCartItemIndex].qty = qty;

        window.localStorage.setItem(
          'cart',
          JSON.stringify({
            items: currentCartItems,
          })
        );
      }

      const updatedCart = JSON.parse(window.localStorage.getItem('cart'));
      setCart(updatedCart);
      setNumCartItems(setNumItems);
      setCartTotal(setTotal);
    }
  };

  const removeFromCart = ({ productId }) => {
    const currentCart = JSON.parse(window.localStorage.getItem('cart'));

    if (
      currentCart !== null &&
      currentCart.items &&
      currentCart.items.length > 0
    ) {
      const currentCartItems = currentCart.items;
      const currentCartItem = currentCartItems.find(
        (item) => item.product.id === productId
      );

      if (currentCartItem) {
        const currentCartItemIndex = currentCartItems.findIndex(
          (item) => item.product.id === productId
        );

        currentCartItems.splice(currentCartItemIndex, 1);

        window.localStorage.setItem(
          'cart',
          JSON.stringify({
            items: currentCartItems,
          })
        );
      }

      const updatedCart = JSON.parse(window.localStorage.getItem('cart'));

      setCart(updatedCart);
      setNumCartItems(setNumItems);
      setCartTotal(setTotal);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        numCartItems: numCartItems,
        cartTotal: cartTotal,
        setNumCartItems: setNumCartItems,
        addToCart: addToCart,
        setCart: setCart,
        setNumItems: setNumItems,
        setTotal: setTotal,
        setCartTotal: setCartTotal,
        updateCart: updateCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
