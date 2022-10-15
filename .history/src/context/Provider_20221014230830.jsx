import React, { useReducer } from 'react';
import { initialAuthState } from './reducers/auth';

const globalContext = React.createContext();

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(initialAuthState);

  return (
    <context.Provider
      value={{
        authState,
        authDispatch,
      }}>
      {children}
    </context.Provider>
  );
}

export default GlobalProvider;
