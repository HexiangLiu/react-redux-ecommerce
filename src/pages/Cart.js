import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';

const Cart = ({ cart, auth }) => {
  console.log(cart);

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section>
      {cart.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <h2>total : $ </h2>
      {auth ? (
        <Link to="/checkout" className="btn btn-primary">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary">
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
