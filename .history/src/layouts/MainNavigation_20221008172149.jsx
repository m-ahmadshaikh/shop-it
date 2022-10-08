import React from 'react';
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
            <a href="#">Home</a>
          </li>
          <li className={classes.list__item}>
            <a href="#">Browse</a>
          </li>
          <li className={classes.list__item}>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
