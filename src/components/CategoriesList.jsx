import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="categories flex flex-col">
      {categories.length === 0 ? (
        <p>Loading categories...</p>
      ) : (
        categories.map((category) => (
          <Link key={category} to={`/category/${category}`} className="category-link">
            {category}
          </Link>
        ))
      )}
    </div>
  );
}

export default CategoriesList;