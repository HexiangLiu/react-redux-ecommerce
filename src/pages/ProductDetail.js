import React, { useEffect } from 'react';
import { GiPineapple } from 'react-icons/gi';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

//import action creator
import { fetchProducts } from '../actions';
import { addItem } from '../actions';

//import component
import Loading from '../components/Loading';

//import style
import './ProductDetail.scss';

const ProductDetail = ({ products, fetchProducts, addItem }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const { id } = useParams();
  const history = useHistory();

  if (products.length > 0) {
    const product = products.find((product) => product.id === parseInt(id));
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
          <h2>Starting at ${price}</h2>
          <button
            className="btn btn-primary productDetail__btn"
            onClick={() => {
              addItem(product);
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

const mapStateToProps = ({ products, loading }) => {
  return {
    products: products,
    loading,
  };
};

export default connect(mapStateToProps, { fetchProducts, addItem })(
  ProductDetail
);
