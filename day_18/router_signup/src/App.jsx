import { Routes, Route } from 'react-router'
import Protected from './components/Protected' 
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './components/Home'
import { useState } from 'react'
import './App.css'

const App = () => {
  
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  }

    return (
      <Routes>
        <Route path='signup' index element={<SignUp />} />
        <Route path='/' element={<LogIn login={login} />} />
        <Route element={<Protected auth={auth} />}>
          <Route path="home" element={<Home logout={logout} />} />
        </Route>
      </Routes>
  );
}

export default App;