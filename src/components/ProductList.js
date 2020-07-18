import React from 'react';
import Product from './Product';

import './ProductList.scss';

const ProductList = ({ products, title }) => {
  return (
    <section className="products">
      <h2 className="heading--1">{title}</h2>
      <div className="products__container">
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
