import React from 'react';
import { motion } from 'framer-motion';

function PageAnimation(props) {
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
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      {...props}
    />
  );
}

export default PageAnimation;
