import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GiPineapple } from 'react-icons/gi';
import { FaAlignJustify } from 'react-icons/fa';
import { connect } from 'react-redux';
import { clearCart, logout } from '../actions';

import './Header.scss';

const Header = ({ count, user, clearCart, logout }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  return (
    <header className="header">
      <nav
        className="navbar"
        onClick={(e) => {
          if (e.target.matches('a') || e.target.className === 'logout__btn') {
            setShow(false);
          }
        }}
      >
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setShow(!show)}
        >
          <FaAlignJustify />
        </button>
        <Link className="header__icon navbar__link" to="/">
          <GiPineapple />
        </Link>
        <ul className={show ? 'navbar__target show' : 'navbar__target'}>
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

          {/* only display the checkout nav when the user successfully signed in */}
          {user && (
            <li className="navbar__item">
              <Link className="navbar__link" to="/checkout">
                Checkout
              </Link>
            </li>
          )}
          {/* display login or log out nav depending on user's status */}
          <li className="navbar__item">
            {user ? (
              <button
                className="logout__btn"
                onClick={() => {
                  clearCart();
                  logout();
                  history.push('/');
                }}
              >
                Log out
              </button>
            ) : (
              <Link className="navbar__link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>

        <Link className="navbar__link" to="/cart">
          Cart <span className="navbar__cart">{count}</span>
        </Link>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ cart, user }) => {
  return {
    count: cart.reduce((acc, cur) => acc + cur.amount, 0),
    user,
  };
};
export default connect(mapStateToProps, { clearCart, logout })(Header);
