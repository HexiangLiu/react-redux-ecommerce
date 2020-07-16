import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';

//import style
import './Cart.scss';

const Cart = ({ cart, user }) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('lol');
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  let total = cart
    .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
    .toFixed(2);

  return (
    <section className="cart">
      {cart.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <h2 className="cart__total">total : ${total} </h2>

      {/* display log in button or checkout button according to whether or not the user has successfully signed in */}
      {user ? (
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

const mapStateToProps = ({ cart, user }) => {
  return {
    cart,
    user,
  };
};

export default connect(mapStateToProps)(Cart);
