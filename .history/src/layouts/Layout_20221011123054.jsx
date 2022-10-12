import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import { motion } from 'framer-motion';
function Layout() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}>
      <MainNavigation />
      <Outlet />
    </motion.div>
  );
}

export default Layout;
