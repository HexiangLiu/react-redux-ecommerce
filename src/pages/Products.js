import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//import action creator
import { fetchProducts } from '../actions';

const Products = ({ products, loading, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return <div>Products</div>;
};

const mapStateToProps = ({ products, loading }) => {
  return {
    products,
    loading,
  };
};
export default connect(mapStateToProps, { fetchProducts })(Products);
