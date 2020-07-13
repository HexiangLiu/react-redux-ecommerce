import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';

//import style
import './Cart.scss';

const Cart = ({ cart, auth }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  let total = cart
    .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
    .toFixed(2);

  return (
    <section className="cart">
      {cart.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <h2 className="cart__total">total : ${total} </h2>
      {auth ? (
        <Link to="/checkout" className="btn btn-primary cart__btn">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary cart__btn">
          log in
        </Link>
      )}
    </section>
  );
};

const mapStateToProps = ({ cart, auth }) => {
  return {
    cart,
    auth,
  };
};

export default connect(mapStateToProps)(Cart);
