import { Routes, Route } from 'react-router'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './components/Home'
import './App.css'

const App = () => (
    <Routes>
      <Route path='/' index element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route path='home' element={<Home />} />
    </Routes>
);

export default App;