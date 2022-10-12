import React, { useState } from 'react';
import authenticate from '../services/authApi';

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = (data) => {
    try {
      authenticate(data);
    } catch (e) {
      setError(e.message);
    }
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <context.Provider value={{ authenticated, login, logout }}>
      {children}
    </context.Provider>
  );
}
export { context as AuthContext };
export default AuthProvider;
