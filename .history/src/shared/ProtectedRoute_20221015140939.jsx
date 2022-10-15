import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../context/Provider';

function ProtectedRoute({ children }) {
  const { authState } = useContext(globalContext);
  const navigate = useNavigate();
  if (!authState.userID) {
    navigate('/login');
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
