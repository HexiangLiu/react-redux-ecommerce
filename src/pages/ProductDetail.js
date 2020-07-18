import React, { useEffect } from 'react';
import { GiPineapple } from 'react-icons/gi';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

//import action creator
import { fetchProduct } from '../actions';
import { addItem } from '../actions';

//import component
import Loading from '../components/Loading';

//import style
import './ProductDetail.scss';

const ProductDetail = ({ product, fetchProduct, addItem }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  if (product) {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;

    return (
      <section className="productDetail">
        <img src={url} alt={title} className="productDetail__img" />
        <div className="productDetail__info">
          <h1 className="heading--3">
            <GiPineapple />
            {title}
          </h1>
          <p>{description}</p>
          <h3>Starting at ${price}</h3>
          <button
            className="btn btn-primary productDetail__btn"
            onClick={() => {
              // add an item with an amount key set to 1
              addItem({ ...product, amount: 1 });
              history.push('/cart');
            }}
          >
            add to cart
          </button>
        </div>
      </section>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = ({ product }) => {
  return {
    product,
  };
};

export default connect(mapStateToProps, { fetchProduct, addItem })(
  ProductDetail
);
