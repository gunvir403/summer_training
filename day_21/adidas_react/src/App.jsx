import { BrowserRouter, Routes, Route } from 'react-router'
import Protected from './components/Protected'
import CartUtils from './components/CartUtils'
import { useAuth } from './hooks/useAuth.mjs'
import Checkout from './components/Checkout'
import Product from './components/Product'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css'

const App = () => {

  const { isLoggedIn, login, logout } = useAuth();

  return (
    <CartUtils>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login login={login} logout={logout} />} />
          <Route path='checkout' element={<Protected isLoggedIn={isLoggedIn}><Checkout /></Protected >} />
        </Routes>
      </BrowserRouter>
    </CartUtils>
  )
}

export default App;