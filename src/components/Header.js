import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Book unique homes and experiences</h1>
    <div className="header__search-box">
      <div className="header__search-box-text">
        <input type="text" placeholder="Anywhere" autoComplete="off" />
      </div>
      {/* <button className="round-btn">Search</button> */}
    </div>
  </header>
);
export default Header;
