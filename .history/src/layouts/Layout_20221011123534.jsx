import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import PageAnimation from '../components/ui/PageAnimation';
function Layout() {
  const { pathname } = useLocation();

  return (
    <PageAnimation key={pathname}>
      <MainNavigation />
      <Outlet />
    </PageAnimation>
  );
}

export default Layout;
