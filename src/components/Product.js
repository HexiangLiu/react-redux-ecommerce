import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

const Product = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <article className="product">
      <div className="product__img-container">
        <img src={image.url} alt={title} className="product__img" />
        <Link className="btn btn-secondary product__btn" to={`/products/${id}`}>
          details
        </Link>
      </div>

      <h4 className="heading--4">{title}</h4>
      <p className="product__price">${price}</p>
    </article>
  );
};

export default Product;
