import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { globalContext } from '../context/Provider';

function ProtectedRoute({ children }) {
  const { authState } = useContext(globalContext);
  console.log(authState.userID);
  if (!authState.userID) {
    return <Navigate to="/" replace />;
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
