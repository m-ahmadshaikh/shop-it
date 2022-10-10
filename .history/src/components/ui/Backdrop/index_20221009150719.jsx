import React from 'react';
import classes from './Backdrop.module.css';
function Backdrop({ children }) {
  return div className="wrapper">
  <div className="background"></div>
  <div class="foreground">
    {children}
  </div>
</div>;
}

export default Backdrop;
