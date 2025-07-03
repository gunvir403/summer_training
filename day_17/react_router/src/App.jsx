import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
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