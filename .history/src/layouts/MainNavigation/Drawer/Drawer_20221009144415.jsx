import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../MainNavigation.module.css';

function Drawer({ openDrawer, toggleOpen }) {
  return (
    <div
      className={
        openDrawer
          ? `${classes.drawer} ${classes.openDrawer} `
          : `${classes.drawer}`
      }>
      <div
        onClick={toggleOpen}
        style={{ display: openDrawer ? 'block' : 'none' }}
        className={classes.backdrop}></div>

      <div className={classes.list__item}>
        <NavLink
          onClick={openDrawer ? toggleOpen : null}
          className={({ isActive }) => {
            return isActive ? `${classes.active}` : '';
          }}
          end
          to="/">
          Home
        </NavLink>
      </div>
      <div className={classes.list__item}>
        <NavLink
          onClick={openDrawer ? toggleOpen : null}
          to="/browse"
          className={({ isActive }) => {
            return isActive ? `${classes.active}` : '';
          }}>
          Browse
        </NavLink>
      </div>
    </div>
  );
}

export default Drawer;
