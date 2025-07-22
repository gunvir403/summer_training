import { Context } from './Context.mjs';
import { useState } from 'react';

const Utils = ({ children }) => {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => {
      const found = prevCart.find(cartItem => cartItem.id === id);
      if (found && found.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter(cartItem => cartItem.id !== id);
      }
    });
  };
  
  return (
    <Context value ={{ cart, handleAddToCart, handleRemoveFromCart }}>
      {children}
    </Context>
  )

};

export default Utils;