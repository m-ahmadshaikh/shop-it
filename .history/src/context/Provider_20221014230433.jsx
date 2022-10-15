import React, { useReducer } from 'react';
import { initialAuthState } from './reducers/auth';

const context = React.createContext();

function Provider({ children }) {
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

export default Provider;
