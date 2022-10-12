import React, { useState } from 'react';

const context = React.createContext();
const { Provider } = context;

function AuthProvider() {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(true);
  };

  return <Provider value={{ authenticated, login }}></Provider>;
}

export default AuthProvider;
