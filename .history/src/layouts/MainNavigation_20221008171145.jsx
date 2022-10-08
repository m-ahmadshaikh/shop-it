import React from 'react';

function MainNavigation() {
  return (
    <div className="header">
      <img
        src="https://shop-it-ff797.web.app/static/media/logo.2bd99daa.png"
        alt="The logo of the app saying SHOP IT"
        className="logo"
      />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
