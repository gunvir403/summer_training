import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("You're not logged in")
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
}

export default ProtectedRoute;
