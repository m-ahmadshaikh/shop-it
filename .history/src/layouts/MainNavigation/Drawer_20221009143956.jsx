import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function Drawer({ openDrawer, toggleOpen }) {
  return (
    <div
      className={
        openDrawer
          ? `${classes.drawer} ${classes.openDrawer} `
          : `${classes.drawer}`
      }>
      <li className={classes.list__item}>
        <NavLink
          onClick={openDrawer ? toggleOpen : null}
          className={({ isActive }) => {
            return isActive ? `${classes.active}` : '';
          }}
          end
          to="/">
          Home
        </NavLink>
      </li>
      <li className={classes.list__item}>
        <NavLink
          onClick={openDrawer ? toggleOpen : null}
          to="/browse"
          className={({ isActive }) => {
            return isActive ? `${classes.active}` : '';
          }}>
          Browse
        </NavLink>
      </li>
    </div>
  );
}

export default Drawer;
