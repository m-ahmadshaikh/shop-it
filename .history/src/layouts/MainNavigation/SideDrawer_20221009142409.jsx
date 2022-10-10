import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function SideDrawer({ openDrawer, toggleOpen }) {
  return (
    <div
      className={
        openDrawer
          ? `${classes.drawer} ${classes.openDrawer} `
          : `${classes.drawer}`
      }>
      <NavLink
        onClick={openDrawer ? toggleOpen : null}
        className={({ isActive }) => {
          return isActive ? `${classes.active}` : '';
        }}
        end
        to="/">
        Home
      </NavLink>
      <NavLink
        onClick={openDrawer ? toggleOpen : null}
        to="/browse"
        className={({ isActive }) => {
          return isActive ? `${classes.active}` : '';
        }}>
        Browse
      </NavLink>
    </div>
  );
}

export default SideDrawer;
