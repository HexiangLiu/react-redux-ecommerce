import React, { useState } from 'react';
import { connect } from 'react-redux';

import EmptyCart from '../components/EmptyCart';

const Checkout = ({ cart, alert, total }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section>
      <h2 className="heading--1">checkout</h2>
      <form>
        <h3>
          order total : <span>{total}</span>
        </h3>
      </form>
    </section>
  );
};

const mapStateToProps = ({ cart, alert, total }) => {
  return {
    cart,
    alert,
    total,
  };
};
export default connect(mapStateToProps)(Checkout);
