import React from 'react';

const checkoutContext = React.createContext();

function CheckoutContext({ children }) {
  return (
    <checkoutContext.Provider value={{}}>{children}</checkoutContext.Provider>
  );
}

export default CheckoutContext;
