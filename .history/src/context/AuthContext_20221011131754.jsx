import React, { useState } from 'react';
import authenticate from '../services/authApi';

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      const token = await authenticate(data);
      console.log(token);
      setAuthenticated(token);
    } catch (e) {
      setError(JSON.stringify(e));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <context.Provider
      value={{ authenticated, login, logout, isLoading, error, setError }}>
      {children}
    </context.Provider>
  );
}
export { context as AuthContext };
export default AuthProvider;
