import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { ThemeProvider, ThemeToggleButton } from './contexts/ThemeContext';
import Home from './components/Home';
import New from './components/New';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggleButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new" element={<New />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
