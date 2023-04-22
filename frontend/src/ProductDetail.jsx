import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, handleAddToCart }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  return (
    <div className="product-detail">
      <div className="product-detail-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
