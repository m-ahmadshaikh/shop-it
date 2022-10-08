import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <div className={classes.header}>
      <img
        src="https://shop-it-ff797.web.app/static/media/logo.2bd99daa.png"
        alt="The logo of the app saying SHOP IT"
        className={classes.logo}
      />
      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <li className={classes.list__item}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${classes.active}` : '';
              }}
              to="/">
              Home
            </NavLink>
          </li>
          <li className={classes.list__item}>
            <NavLink
              to="/browse"
              className={({ isActive }) => {
                return isActive ? `${classes.active}` : '';
              }}>
              Browse
            </NavLink>
          </li>
          <li className={classes.list__item}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${classes.active}` : '';
              }}
              to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
