import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Productes from './Productes';
import ProductDetail from './ProductDetail';


const categories = [
  { title: 'Category 1', subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3'] },
  { title: 'Category 2', subcategories: ['Subcategory 2.1', 'Subcategory 2.2'] },
  { title: 'Category 3', subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3', 'Subcategory 3.4'] }
];

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for product 1',
    price: 10.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 19.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for product 3',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  }
];

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar categories={categories} />
      <Routes>
        <Route path="/" element={<Productes products={products} handleAddToCart={handleAddToCart} />} />
        <Route
          path="/category/:categoryIndex/subcategory/:subcategoryIndex"
          element={<Productes products={products} handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} handleAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
