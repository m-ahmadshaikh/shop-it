import React, { useReducer } from 'react';
import authReducer, { initialAuthState } from './reducers/auth';
import { browseInitialState, browseReducer } from './reducers/browse';
import { initialOrderState, orderReducer } from './reducers/checkout';
import { initialProductState, productReducer } from './reducers/product';

export const globalContext = React.createContext();

function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const [browseState, browseDispatch] = useReducer(
    browseReducer,
    browseInitialState
  );
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const [orderState, orderDispatch] = useReducer(
    orderReducer,
    initialOrderState
  );

  return (
    <globalContext.Provider
      value={{
        authState,
        authDispatch,
        browseState,
        browseDispatch,
        productState,
        productDispatch,
        orderState,
        orderDispatch,
      }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalProvider;
