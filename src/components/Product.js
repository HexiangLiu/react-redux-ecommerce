import React from 'react';
import { Link } from 'react-router-dom';
//impt
import PropTypes from 'prop-types';

import './Product.scss';

const Product = ({ id, title, price, image }) => {
  return (
    <article className="product">
      <div className="product__img-container">
        <img
          src={
            image
              ? image.url
              : 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80'
          }
          alt={title || 'default title'}
          className="product__img"
        />
      </div>

      <h4 className="product__title">{title || 'default title'}</h4>
      <p className="product__price">${price || 0}</p>
      <Link className="btn btn-primary product__btn" to={`/products/${id}`}>
        details
      </Link>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default Product;
