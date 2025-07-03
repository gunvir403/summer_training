import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )

export default App;