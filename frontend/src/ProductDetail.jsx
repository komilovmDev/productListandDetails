import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({products}) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;