import React from 'react';
import MainNavigation from './MainNavigation';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      {children}
    </div>
  );
}

export default Layout;
