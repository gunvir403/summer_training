import { BrowserRouter, Routes, Route } from 'react-router'
import Products from './components/Products'
import Utils from './components/Utils'
import Cart from './components/Cart'
import './App.css'

const App = () => (

    <BrowserRouter>
      <Utils>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='cart'  element={<Cart />} />
          </Routes>
      </Utils>
    </BrowserRouter>
    
  )

export default App;