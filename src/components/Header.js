import React from 'react';
import { Link } from 'react-router-dom';
import { GiPineapple } from 'react-icons/gi';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link className="header__icon navbar__link" to="/">
              <GiPineapple />
            </Link>
          </li>
          <div className="navbar__pages">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/about">
                About
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/products">
                Product
              </Link>
            </li>
          </div>
          <div className="navbar__pages">
            <li className="navbar__item">
              <Link className="navbar__link" to="/login">
                Login
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/cart">
                Cart
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
