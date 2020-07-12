import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return <section>{id}</section>;
};

export default ProductDetail;
