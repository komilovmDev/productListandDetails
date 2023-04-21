import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <img src={product.image} alt="" />
      <h3 className='title'>{product.title}</h3>
      <p>{product.description}</p>
      <p className='price'>Price: ${product.price}</p>
    </div>
  );
};

export default Product;
