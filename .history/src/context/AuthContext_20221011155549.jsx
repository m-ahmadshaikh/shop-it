import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticate from '../services/authApi';

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState('');
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      setToken(await authenticate(data));
      setAuthenticated(true);
      navigate('/', { replace: true });
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    navigate('/', { replace: true });
  };

  return (
    <context.Provider
      value={{
        authenticated,
        token,
        login,
        logout,
        isLoading,
        error,
        setError,
      }}>
      {children}
    </context.Provider>
  );
}
export { context as AuthContext };
export default AuthProvider;
