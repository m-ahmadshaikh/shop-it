import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { globalContext } from '../context/Provider';

function ProtectedRoute() {
  const { authState } = useContext(globalContext);
  const navigate = useNavigate();
  console.log(authState.userID);
  if (!authState.userID) {
    navigate('/login');
    return;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
