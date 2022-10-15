import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticate from '../services/authApi';

const useHttp = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetcher = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      return await func(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetcher, isLoading, error];
};

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState('');
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const [fetcher, isLoading, error] = useHttp(authenticate);
  const login = async (data) => {
    setToken(await fetcher(data));
    setAuthenticated(true);
    navigate('/', { replace: true });
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
      }}>
      {children}
    </context.Provider>
  );
}
export { context as AuthContext };
export default AuthProvider;
