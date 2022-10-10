import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function Header({ openDrawer, toggleOpen }) {
  return (
    <div className={classes.header}>
      <div
        onClick={toggleOpen}
        style={{ display: openDrawer ? 'block' : 'none' }}
        className={classes.backdrop}></div>

      <div
        onClick={toggleOpen}
        className={
          openDrawer
            ? `${classes.menu_button} ${classes.openbtn}`
            : `${classes.menu_button} `
        }>
        <div className={classes.menu_btn__burger}></div>
      </div>
      <Link to="/">
        <img
          src="https://shop-it-ff797.web.app/static/media/logo.2bd99daa.png"
          alt="The logo of the app saying SHOP IT"
          className={classes.logo}
        />
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
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

export default Header;
