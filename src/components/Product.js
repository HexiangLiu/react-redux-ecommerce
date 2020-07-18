import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

const Product = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <article className="product">
      <div className="product__img-container">
        <img src={image.url} alt={title} className="product__img" />
      </div>

      <h4 className="product__title">{title}</h4>
      <p className="product__price">${price}</p>
      <Link className="btn btn-primary product__btn" to={`/products/${id}`}>
        details
      </Link>
    </article>
  );
};

export default Product;
