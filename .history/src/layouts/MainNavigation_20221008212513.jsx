import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.header}>
      <div
        style={{ display: open ? 'block' : 'none' }}
        className={classes.backdrop}></div>

      <div
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
        className={
          open
            ? `${classes.menu_button} ${classes.open}`
            : `${classes.menu_button} `
        }>
        <div className={classes.menu_btn__burger}></div>
      </div>
      <img
        src="https://shop-it-ff797.web.app/static/media/logo.2bd99daa.png"
        alt="The logo of the app saying SHOP IT"
        className={classes.logo}
      />
      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <div
            className={
              open ? `${classes.drawer} ${classes.open} ` : `${classes.drawer}`
            }>
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
          </div>
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
