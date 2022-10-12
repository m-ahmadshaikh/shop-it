import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import { motion, useMotionValue } from 'framer-motion';
function Layout() {
  return (
    <motion.div>
      <MainNavigation />
      <Outlet />
    </motion.div>
  );
}

export default Layout;
