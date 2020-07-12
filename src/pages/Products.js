import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//import components
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';

//import action creator
import { fetchProducts } from '../actions';

const Products = ({ products, loading, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  return <ProductList products={products} title="our products" />;
};

const mapStateToProps = ({ products, loading }) => {
  return {
    products,
    loading,
  };
};
export default connect(mapStateToProps, { fetchProducts })(Products);
