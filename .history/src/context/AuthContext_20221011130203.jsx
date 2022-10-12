import React, { useState } from 'react';
import authenticate from '../services/authApi';

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(true);

  const login = (data) => {
    authenticate(data);
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
