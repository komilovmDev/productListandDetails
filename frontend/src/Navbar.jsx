import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = ({categories}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleNav = () => setIsOpen(!isOpen);

  const toggleCategory = (categoryIndex) => {
    if (activeCategory === categoryIndex) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryIndex);
    }
  }

  return (
    <nav>
      <button onClick={toggleNav}>Toggle Navbar</button>
      <ul className={isOpen ? 'open' : ''}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {categories.map((category, index) => (
          <li key={category.title} onClick={() => toggleCategory(index)}>
            {category.title}
            {activeCategory === index && (
              <ul>
                {category.subcategories.map((subcategory, subindex) => (
                  <li key={subcategory}>
                    <Link to={`/category/${index}/subcategory/${subindex}`}>{subcategory}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
