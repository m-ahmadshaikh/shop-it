import React from 'react';

const context = React.createContext();

function Provider({ children }) {
  return <context.Provider value={{}}>{children}</context.Provider>;
}

export default Provider;
