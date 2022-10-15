import React, { useReducer } from 'react';
import authReducer, { initialAuthState } from './reducers/auth';
import { browseInitialState, browseReducer } from './reducers/browse';
import { checkoutReducer, initialCheckoutState } from './reducers/checkout';
import { initialOrderState, orderReducer } from './reducers/order';
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
  const [checkoutState, checkoutDispatch] = useReducer(
    checkoutReducer,
    initialCheckoutState
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
        checkoutState,
        checkoutDispatch,
        orderState,
        orderDispatch,
      }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalProvider;
