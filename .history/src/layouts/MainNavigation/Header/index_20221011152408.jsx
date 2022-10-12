import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import classes from './Header.module.css';

function Header({ openDrawer, toggleOpen }) {
  const { authenticated, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className={classes.header}>
      <div
        onClick={toggleOpen}
        className={
          openDrawer
            ? `${classes.menu_button} ${classes.openbtn}`
            : `${classes.menu_button}`
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
          {!authenticated && (
            <li className={classes.list__item}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? `${classes.active}` : '';
                }}
                to="/login">
                Login
              </NavLink>
            </li>
          )}
          {authenticated && (
            <li className={`${classes.list__item} ${classes.hide}`}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? `${classes.active}` : '';
                }}
                to="/orders">
                Orders
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
