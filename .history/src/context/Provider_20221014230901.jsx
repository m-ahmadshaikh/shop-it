import React, { useReducer } from 'react';
import { initialAuthState } from './reducers/auth';

export const globalContext = React.createContext();

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(initialAuthState);

  return (
    <globalContext.Provider
      value={{
        authState,
        authDispatch,
      }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalProvider;
