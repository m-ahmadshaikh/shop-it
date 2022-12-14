import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import { motion } from 'framer-motion';
function Layout() {
  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5,
  };
  return (
    <motion.div
      key={pathname}
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
