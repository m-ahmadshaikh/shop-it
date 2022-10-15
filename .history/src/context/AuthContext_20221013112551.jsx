import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import authenticate from '../services/authApi';

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState('');
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const [fetcher, isLoading, error] = useHttp(authenticate);
  const login = async (data) => {
    setToken(await fetcher(data));
    console.log(error);
    if (!isLoading && !error) {
      setAuthenticated(true);
      navigate('/', { replace: true });
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
      }}>
      {children}
    </context.Provider>
  );
}
export { context as AuthContext };
export default AuthProvider;
