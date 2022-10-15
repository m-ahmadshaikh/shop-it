import React, { useReducer } from 'react';
import authReducer, { initialAuthState } from './reducers/auth';
import { browseInitialState, browseReducer } from './reducers/browse';

export const globalContext = React.createContext();

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const [browseState, browseDispatch] = useReducer(
    browseReducer,
    browseInitialState
  );

  return (
    <globalContext.Provider
      value={{
        authState,
        authDispatch,
        browseState,
        browseDispatch,
      }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalProvider;
