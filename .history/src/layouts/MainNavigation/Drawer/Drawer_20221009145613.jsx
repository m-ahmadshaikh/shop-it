import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.css';

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

      <li className={`${classes.list__item} ${classes.hide}`}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${classes.active}` : '';
          }}
          end
          to="/">
          Home
        </NavLink>
      </li>
      <li className={`${classes.list__item} ${classes.hide}`}>
        <NavLink
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
