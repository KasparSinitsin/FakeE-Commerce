import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Categories() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div className="category-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <div className="products">
        {products.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Categories;