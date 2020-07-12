import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//import components
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';

//import action creator
import { fetchProducts } from '../actions';

const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (products.length === 0) {
    return (
      <section>
        <Loading />
      </section>
    );
  } else {
    return <ProductList products={products} title="our products" />;
  }
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};
export default connect(mapStateToProps, { fetchProducts })(Products);
