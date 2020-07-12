import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
  console.log(cart);
  return <section>Cart</section>;
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Cart);
