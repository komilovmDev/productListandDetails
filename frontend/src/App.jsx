import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Productes from './Productes';
import ProductDetail from './ProductDetail';
import Product from './Product';
import Card from './Card';


const categories = [
  { title: 'Telfonlar', subcategories: ['Iphone'] },
  { title: 'Mashinalar', subcategories: ['Supra'] },
  { title: 'Kampyuterlar', subcategories: ['Asus'] }
];

const products = [
  {
    id: 1,
    name: 'iphone 14 pro max',
    description: '256/8Gb',
    price: `1199$`,
    image: 'https://assets.asaxiy.uz/product/items/desktop/44f683a84163b3523afe57c2e008bc8c2022092114241486833ApwaRWowaz.png.webp'
  },
  {
    id: 2,
    name: 'Supra mk4',
    description: 'supra mk4 1222#',
    price: `667,788$`,
    image: 'https://i.pinimg.com/originals/3f/c2/7f/3fc27f343904bc9e7a974444dc28fa1d.jpg'
  },
  {
    id: 3,
    name: 'Pc asus',
    description: '1tb/ssd 32gb/ram corei7/13th rtx3060ti',
    price: `1222$`,
    image: 'https://www.punchtechnology.co.uk/wp-content/uploads/2022/11/Be-Quiet-Pure-Base-500FX-Gaming-Chassis-Front-Angle-with-RGB-Lighting-Close-600x600.jpg'
  }
];

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  }
  console.log(cart);

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
        <Route path="products" element={<Productes/>}/>
      </Routes>
      {
          cart.map(item => (
            <Card item={item} />
          ))
        }
    </div>
  );
}

export default App;
