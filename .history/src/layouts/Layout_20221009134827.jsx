import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

function Layout() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default Layout;
