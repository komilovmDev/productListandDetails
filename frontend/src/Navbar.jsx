import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const categories = [
  { title: 'Category 1', subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3'] },
  { title: 'Category 2', subcategories: ['Subcategory 2.1', 'Subcategory 2.2'] },
  { title: 'Category 3', subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3', 'Subcategory 3.4'] }
];

const Navbar = () => {
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
