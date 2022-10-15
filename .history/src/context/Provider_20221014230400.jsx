import React, { useReducer } from 'react';
import { initialAuthState } from './reducers/auth';

const context = React.createContext();

function Provider({ children }) {
  const [authState, dispatch] = useReducer(initialAuthState);

  return <context.Provider value={{}}>{children}</context.Provider>;
}

export default Provider;
