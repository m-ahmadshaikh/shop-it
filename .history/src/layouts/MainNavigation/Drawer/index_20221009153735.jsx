import React from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../../components/ui/Backdrop';
import classes from './Drawer.module.css';

function Drawer({ openDrawer, toggleOpen }) {
  return (
    <div>
      <Backdrop
        classes={`${classes.hide}`}
        show={openDrawer}
        toggleShow={toggleOpen}
      />

      <div
        className={
          openDrawer
            ? `${classes.drawer} ${classes.openDrawer} `
            : `${classes.hide} ${classes.drawer}`
        }>
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
    </div>
  );
}

export default Drawer;
