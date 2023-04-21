import React from "react";
import Product from "./Product";
import "./Product.css";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products &&
        products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        ))}
    </div>
  );
};

export default Products;


