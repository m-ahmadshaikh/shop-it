import React, { useReducer } from 'react';
import authReducer, { initialAuthState } from './reducers/auth';

export const globalContext = React.createContext();

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

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
