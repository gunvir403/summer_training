import { BrowserRouter, Routes, Route} from 'react-router'
import Products from './components/Products'
import Cart from './components/Cart'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {

      setCart((prevCart) => {
          const existingProduct = prevCart.find(item => item.id === product.id);
          if (existingProduct) {
              return prevCart.map(item => 
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              );
          } else {
              return [...prevCart, { ...product, quantity: 1 }];
          }
      });
  };
  const handleRemoveFromCart = (id) => {
    
    setCart(prevCart => {
      const found = prevCart.find(cartItem => cartItem.id === id);
      if (found.quantity > 1) {
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products addToCart={handleAddToCart} cartLength={cart.length} />} />
        <Route path='cart' element={<Cart removeFromCart={handleRemoveFromCart} cart={cart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;