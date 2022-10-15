import React, { useReducer } from 'react';
import { initialState } from './reducers/auth';

const context = React.createContext();

function Provider({ children }) {
  const [authState, dispatch] = useReducer(initialState);

  return <context.Provider value={{}}>{children}</context.Provider>;
}

export default Provider;
