import React, { useState } from 'react';

const context = React.createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
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
