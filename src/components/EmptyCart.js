import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h2 className="heading--1">your bag is empty</h2>
      <Link to="/products" className="btn btn-primary">
        continue shopping
      </Link>
    </section>
  );
};

export default EmptyCart;
